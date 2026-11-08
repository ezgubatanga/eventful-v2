import { SectionHeading } from "@/components/ui/SectionHeading";
import { GUEST_STATS, SAMPLE_GUESTS } from "@/lib/constants";
import {
  Users,
  UserCheck,
  UserX,
  Clock,
  Download,
  Search,
  Filter,
  CheckCircle2,
  Utensils,
  Plus,
} from "lucide-react";

export function GuestManagement() {
  const getStatusBadge = (status: "Attending" | "Declined" | "Pending") => {
    switch (status) {
      case "Attending":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EBF3E7] text-[#426132] border border-[#D5E6CF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52793E]" />
            Attending
          </span>
        );
      case "Declined":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FDF0ED] text-[#9A4237] border border-[#F6D5CE]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C25144]" />
            Declined
          </span>
        );
      case "Pending":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-light-beige)] text-[#7F6428] border border-[var(--color-border)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
            Pending
          </span>
        );
    }
  };

  return (
    <section
      id="guests"
      className="py-20 md:py-28 bg-[var(--color-primary-bg)]"
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--container-padding-x)]">
        <SectionHeading
          eyebrow="YOUR GUEST LIST, ORGANIZED"
          heading="Know who's coming and what they need."
          description="Say goodbye to messy spreadsheets. Track attendance, plus-ones, meal preferences, and dietary restrictions in one effortless, real-time dashboard."
        />

        {/* Feature Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto text-center">
          <div className="p-4 rounded-xl bg-[var(--color-secondary-bg)] border border-[var(--color-border)]">
            <Users className="w-5 h-5 text-[var(--color-gold)] mx-auto mb-2" />
            <h4 className="text-sm font-semibold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)]">
              Unlimited Guests
            </h4>
            <p className="text-xs text-[var(--color-secondary-text)] mt-1 font-[family-name:var(--font-outfit)]">
              Invite 50 or 500 with zero extra fees
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--color-secondary-bg)] border border-[var(--color-border)]">
            <Utensils className="w-5 h-5 text-[var(--color-gold)] mx-auto mb-2" />
            <h4 className="text-sm font-semibold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)]">
              Dietary Tracking
            </h4>
            <p className="text-xs text-[var(--color-secondary-text)] mt-1 font-[family-name:var(--font-outfit)]">
              Allergies and meal choices collected
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--color-secondary-bg)] border border-[var(--color-border)]">
            <Plus className="w-5 h-5 text-[var(--color-gold)] mx-auto mb-2" />
            <h4 className="text-sm font-semibold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)]">
              Plus-One Control
            </h4>
            <p className="text-xs text-[var(--color-secondary-text)] mt-1 font-[family-name:var(--font-outfit)]">
              Control named vs unnamed guests
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--color-secondary-bg)] border border-[var(--color-border)]">
            <Download className="w-5 h-5 text-[var(--color-gold)] mx-auto mb-2" />
            <h4 className="text-sm font-semibold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)]">
              Instant CSV Export
            </h4>
            <p className="text-xs text-[var(--color-secondary-text)] mt-1 font-[family-name:var(--font-outfit)]">
              One click export for your caterer &amp; venue
            </p>
          </div>
        </div>

        {/* Guest Management Dashboard UI Demonstration Mockup */}
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-secondary-bg)] shadow-xl shadow-stone-800/5 overflow-hidden">
          {/* Dashboard Header Bar */}
          <div className="px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-primary-bg)] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-gold)]" />
              <h3 className="text-base font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)]">
                Sophia &amp; Alexander — Guest Responses
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[var(--color-dark-text)] bg-[var(--color-light-beige)] rounded-lg hover:bg-[var(--color-border)] transition-colors border border-[var(--color-border)] cursor-default"
              >
                <Download className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Metric Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 border-b border-[var(--color-border)] bg-[var(--color-secondary-bg)]">
            <div className="bg-[var(--color-primary-bg)] rounded-xl p-4 border border-[var(--color-border)]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-[var(--color-secondary-text)] font-medium">Total Invited</span>
                <Users className="w-4 h-4 text-[var(--color-secondary-text)]" />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-[var(--color-dark-text)] font-[family-name:var(--font-bricolage)]">
                {GUEST_STATS[0].value}
              </span>
            </div>

            <div className="bg-[var(--color-primary-bg)] rounded-xl p-4 border border-[var(--color-border)]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-[var(--color-secondary-text)] font-medium">Attending</span>
                <UserCheck className="w-4 h-4 text-[#52793E]" />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-[#52793E] font-[family-name:var(--font-bricolage)]">
                {GUEST_STATS[1].value}
              </span>
            </div>

            <div className="bg-[var(--color-primary-bg)] rounded-xl p-4 border border-[var(--color-border)]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-[var(--color-secondary-text)] font-medium">Declined</span>
                <UserX className="w-4 h-4 text-[#C25144]" />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-[#C25144] font-[family-name:var(--font-bricolage)]">
                {GUEST_STATS[2].value}
              </span>
            </div>

            <div className="bg-[var(--color-primary-bg)] rounded-xl p-4 border border-[var(--color-border)]">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-[var(--color-secondary-text)] font-medium">Pending Reply</span>
                <Clock className="w-4 h-4 text-[var(--color-gold)]" />
              </div>
              <span className="text-2xl md:text-3xl font-bold text-[var(--color-gold)] font-[family-name:var(--font-bricolage)]">
                {GUEST_STATS[3].value}
              </span>
            </div>
          </div>

          {/* Search and Filters Bar */}
          <div className="px-6 py-3.5 bg-[var(--color-primary-bg)] border-b border-[var(--color-border)] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 bg-[var(--color-secondary-bg)] border border-[var(--color-border)] rounded-lg px-3 py-1.5 w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-[var(--color-secondary-text)]" />
              <input
                type="text"
                readOnly
                placeholder="Search guest name or email..."
                className="bg-transparent text-xs text-[var(--color-dark-text)] focus:outline-none w-full cursor-default"
                value=""
              />
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[var(--color-secondary-text)]">
              <Filter className="w-3.5 h-3.5 text-[var(--color-gold)]" />
              <span className="px-2 py-1 rounded bg-[var(--color-light-beige)] text-[var(--color-dark-text)] font-medium">
                All (148)
              </span>
              <span className="px-2 py-1 rounded hover:bg-[var(--color-secondary-bg)] cursor-default">
                Attending (96)
              </span>
              <span className="px-2 py-1 rounded hover:bg-[var(--color-secondary-bg)] cursor-default">
                Pending (40)
              </span>
            </div>
          </div>

          {/* Guest Rows Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-secondary-bg)] text-[11px] font-semibold text-[var(--color-secondary-text)] uppercase tracking-wider font-[family-name:var(--font-outfit)]">
                  <th className="py-3 px-6">Guest Name</th>
                  <th className="py-3 px-6">Email Address</th>
                  <th className="py-3 px-6">RSVP Status</th>
                  <th className="py-3 px-6">Plus-One</th>
                  <th className="py-3 px-6">Dietary / Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)] bg-[var(--color-primary-bg)] text-xs font-[family-name:var(--font-outfit)]">
                {SAMPLE_GUESTS.map((guest, idx) => (
                  <tr key={idx} className="hover:bg-[var(--color-secondary-bg)]/60 transition-colors">
                    <td className="py-3.5 px-6 font-medium text-[var(--color-dark-text)]">
                      {guest.name}
                    </td>
                    <td className="py-3.5 px-6 text-[var(--color-secondary-text)]">
                      {guest.email}
                    </td>
                    <td className="py-3.5 px-6">
                      {getStatusBadge(guest.status)}
                    </td>
                    <td className="py-3.5 px-6 text-[var(--color-secondary-text)]">
                      {guest.plusOne === "0" ? "None" : `+${guest.plusOne}`}
                    </td>
                    <td className="py-3.5 px-6 text-[var(--color-secondary-text)]">
                      {guest.dietary === "—" ? (
                        <span className="text-[var(--color-secondary-text)]/40">—</span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[var(--color-dark-text)]">
                          <CheckCircle2 className="w-3 h-3 text-[var(--color-gold)]" />
                          {guest.dietary}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="px-6 py-3 border-t border-[var(--color-border)] bg-[var(--color-secondary-bg)] flex items-center justify-between text-xs text-[var(--color-secondary-text)]">
            <span>Showing 5 of 148 confirmed guests</span>
            <span className="text-[var(--color-gold)] font-medium">Automatic real-time sync</span>
          </div>
        </div>
      </div>
    </section>
  );
}

