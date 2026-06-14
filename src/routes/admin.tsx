import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { PageLayout } from "@/components/PageLayout";
import { supabase } from "@/utils/supabase";
import * as XLSX from "xlsx"; // Import the Excel compilation engine modules

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel — AtripleS" },
      { name: "description", content: "Internal admin panel for AtripleS" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Admin,
});

function Admin() {
  // Authentication states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Leads table dashboard states
  const [leads, setLeads] = useState<any[]>([]);
  const [leadsLoading, setLeadsLoading] = useState(false);

  // Handle Admin Auth Submission against your Supabase Users directory
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password,
      });

      if (error) throw error;
      setIsLoggedIn(true);
    } catch (err: any) {
      setLoginError(err.message || "Invalid administrative credentials.");
    } finally {
      setLoginLoading(false);
    }
  };

  // Fetch submitted form rows from your public.enquiries Supabase table
  const fetchLeads = async () => {
    setLeadsLoading(true);
    try {
      const { data, error } = await supabase
        .from("enquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (err: any) {
      console.error("Error fetching table row entries:", err.message);
    } finally {
      setLeadsLoading(false);
    }
  };

  // Auto-fetch database table arrays the moment authentication resolves
  useEffect(() => {
    if (isLoggedIn) {
      fetchLeads();
    }
  }, [isLoggedIn]);

  // Toggle "You Provide" Checkbox Status column row directly in your Supabase dataset
  const toggleLeadStatus = async (id: string, currentStatus: boolean) => {
    const nextStatus = !currentStatus;

    setLeads((prevLeads) =>
      prevLeads.map((lead) => (lead.id === id ? { ...lead, is_completed: nextStatus } : lead)),
    );

    try {
      const { error } = await supabase
        .from("enquiries")
        .update({ is_completed: nextStatus })
        .eq("id", id);

      if (error) throw error;
    } catch (err: any) {
      alert(`Failed to save database status change: ${err.message}`);
      fetchLeads();
    }
  };

  // FIX: Formats active database array rows and triggers a local Excel sheet file download process
  const downloadExcel = () => {
    if (leads.length === 0) {
      alert("No data available to download.");
      return;
    }

    // Clean data structure row mapper block to produce beautiful dashboard exports
    const formattedLeads = leads.map((lead) => ({
      "DATE SUBMITTED": lead.created_at ? new Date(lead.created_at).toLocaleDateString() : "N/A",
      "STATUS (YOU PROVIDE)": lead.is_completed ? "Completed" : "Pending",
      "CLIENT NAME": lead.name,
      "COMPANY NAME": lead.company || "N/A",
      "EMAIL ADDRESS": lead.email,
      "PHONE NUMBER": lead.phone || "N/A",
      "SCOPE OF INTEREST": lead.scope_of_interest
        ? lead.scope_of_interest.replace(/-/g, " ").toUpperCase()
        : "N/A",
      "PROJECT DETAILS MESSAGE": lead.message,
    }));

    // Generate SheetJS workbook nodes and initialize save process routines
    const worksheet = XLSX.utils.json_to_sheet(formattedLeads);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Business Leads");

    // Triggers instant system file package saves on your operating system environment
    XLSX.writeFile(
      workbook,
      `AtripleS_Leads_Report_${new Date().toISOString().split("T")[0]}.xlsx`,
    );
  };

  // --- CONDITION 1: RENDER SECURE LOG-IN UI PANEL IF NOT AUTHENTICATED ---
  if (!isLoggedIn) {
    return (
      <PageLayout
        eyebrow="Internal · Admin"
        title="Admin Panel"
        subtitle="Restricted area — sign in to manage site content."
      >
        <div className="max-w-xl mx-auto text-left mt-8 w-full">
          <div className="border border-black/10 bg-[#fbfbfb] p-6 md:p-10 shadow-lg space-y-6">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-black/50">
              Sign In
            </h3>

            {loginError && (
              <div className="p-3 text-xs font-semibold border bg-rose-50 border-rose-200 text-rose-800">
                {loginError}
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-black/60">
                  Username (Email)
                </label>
                <input
                  type="email"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin@company.com"
                  className="w-full bg-white border border-black/20 px-4 py-2.5 text-sm placeholder:text-black/35 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-black/60">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full bg-white border border-black/20 px-4 py-2.5 text-sm placeholder:text-black/35 focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loginLoading}
                  className="w-full bg-[#1a1a1a] hover:bg-[#1e40af] disabled:bg-black/40 text-white font-medium text-xs tracking-wider uppercase py-3.5 transition-colors duration-200 shadow cursor-pointer focus:outline-none"
                >
                  {loginLoading ? "Verifying..." : "Secure Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </PageLayout>
    );
  }

  // --- CONDITION 2: RENDER DYNAMIC NEW LEADS POPULATE PAGE UPON SUCCESSFUL LOGIN ---
  return (
    <PageLayout
      eyebrow="Management Panel"
      title="Business Leads Console"
      subtitle="Review active service contact enquiries and complete follow-ups."
    >
      <div className="w-full mt-6 space-y-4 text-left">
        {/* Dashboard Actions Metrics Banner */}
        <div className="flex justify-between items-center bg-white border border-black/10 p-4">
          <div className="text-sm text-black/60 font-medium">
            Total Enquiries Collected: <span className="text-black font-bold">{leads.length}</span>
          </div>

          {/* Action Row containing both Refresh and Download elements */}
          <div className="flex items-center gap-3">
            {/* FIX: New functional "Download Excel" button element block */}
            <button
              onClick={downloadExcel}
              disabled={leads.length === 0}
              className="bg-[#1e40af] hover:bg-[#1e3a8a] disabled:bg-gray-300 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none cursor-pointer"
            >
              Download Excel (.xlsx)
            </button>

            <button
              onClick={fetchLeads}
              className="bg-white border border-black/20 hover:border-black px-4 py-2 text-xs font-bold uppercase tracking-wider text-black transition-colors focus:outline-none cursor-pointer"
            >
              Refresh Records
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Data Spreadsheet Container Grid */}
        <div className="border border-black/10 bg-white overflow-hidden shadow-sm">
          {leadsLoading ? (
            <div className="p-12 text-center text-sm font-medium text-black/40">
              Querying database registry records...
            </div>
          ) : leads.length === 0 ? (
            <div className="p-12 text-center text-sm font-medium text-black/40">
              No business lead enquiries found inside the system database.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#fbfbfb] border-b border-black/10 text-[10px] font-bold uppercase tracking-wider text-black/60">
                    <th className="p-4 w-40">You Provide (Status)</th>
                    <th className="p-4 min-w-[140px]">Lead Name</th>
                    <th className="p-4 min-w-[150px]">Contact Info</th>
                    <th className="p-4 min-w-[140px]">Scope of Interest</th>
                    <th className="p-4 min-w-[240px]">Project Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-sm">
                  {leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className={`hover:bg-[#fbfbfb]/50 transition-colors ${
                        lead.is_completed ? "bg-emerald-50/20" : ""
                      }`}
                    >
                      <td className="p-4">
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={!!lead.is_completed}
                            onChange={() => toggleLeadStatus(lead.id, !!lead.is_completed)}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                          />
                          <span
                            className={`text-xs font-bold uppercase tracking-wide ${
                              lead.is_completed ? "text-emerald-700 font-black" : "text-amber-700"
                            }`}
                          >
                            {lead.is_completed ? "Completed" : "Pending"}
                          </span>
                        </label>
                      </td>

                      <td className="p-4 font-medium text-black">
                        <div>{lead.name}</div>
                        {lead.company && (
                          <div className="text-xs text-black/40 font-normal mt-0.5">
                            {lead.company}
                          </div>
                        )}
                      </td>

                      <td className="p-4 text-xs space-y-0.5 text-black/80 font-medium">
                        <div className="text-black font-semibold">{lead.email}</div>
                        {lead.phone && <div className="text-black/50">{lead.phone}</div>}
                      </td>

                      <td className="p-4">
                        <span className="inline-block bg-blue-50 text-[#1e40af] text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-wide border border-blue-100">
                          {lead.scope_of_interest?.replace(/-/g, " ")}
                        </span>
                      </td>

                      <td className="p-4 text-xs text-black/70 leading-relaxed max-w-sm whitespace-pre-wrap font-medium">
                        {lead.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
