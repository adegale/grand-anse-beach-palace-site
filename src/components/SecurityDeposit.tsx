import { useState } from 'react';
import { ShieldCheck, ChevronDown, ChevronUp, CreditCard, Clock3, ReceiptText } from 'lucide-react';

const highlights = [
  {
    icon: CreditCard,
    title: 'Collected at Check-In',
    desc: 'A refundable deposit is collected at check-in via credit card, debit card, or cash to cover any incidentals.',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Refundable',
    desc: 'Your deposit is fully refunded if the room is left in satisfactory condition with no unpaid charges.',
  },
  {
    icon: Clock3,
    title: 'Refunded Within 7–10 Days',
    desc: 'Refunds are processed within 7–10 business days after check-out and room inspection.',
  },
  {
    icon: ReceiptText,
    title: 'Keep Your Receipt',
    desc: 'Cash deposit recipients must present their check-in receipt at check-out to receive their cash refund.',
  },
];

const sections = [
  {
    title: 'I. Introduction',
    content: `A. Purpose: Our Security Deposit Policy is designed to ensure a safe, clean, and enjoyable environment for all guests. It outlines the requirements and conditions under which security deposits are collected, held, and refunded.

B. Applicability: This policy applies to all guests, including individual reservations, group bookings, and long-term stays.`,
  },
  {
    title: 'II. Security Deposit Requirements',
    content: `A. Definition: A security deposit is a refundable amount collected at check-in to cover any potential damages, extra cleaning, or additional charges incurred during the guest's stay.

B. Amount: The deposit amount varies based on room type and length of stay. Details are provided at the time of booking and confirmed at check-in.

C. Payment Methods: We accept credit card, debit card, or cash. The chosen method will be pre-authorized or collected at check-in.`,
  },
  {
    title: 'III. Deposit Collection Process',
    content: `A. Timing: The security deposit is collected at check-in. For credit card reservations, a pre-authorization hold will be placed for the deposit amount.

B. Documentation: Guests will receive a receipt upon check-in detailing the amount and payment method. This receipt must be presented at check-out to receive any cash refunds.`,
  },
  {
    title: 'IV. Conditions for Holding the Deposit',
    content: `A. Duration: The deposit is held for the duration of the stay and for a short period after check-out to allow for room inspection.

B. Retention Circumstances: The deposit may be retained, in whole or in part, in cases of:
  - Damage to property
  - Excessive cleaning requirements
  - Unauthorized room extensions
  - Unpaid additional charges`,
  },
  {
    title: 'V. Use of the Security Deposit',
    content: `A. Property Damage: The cost of repairs or replacements for any physical damage will be deducted from the deposit.

B. Extra Cleaning: Excessive mess or policy violations (e.g., smoking in non-smoking rooms) will result in cleaning fee deductions.

C. Additional Charges: Unpaid room service or incidental expenses will be covered by the deposit.

D. Unauthorized Extensions: Additional night charges for unauthorized extensions will be deducted from the deposit.`,
  },
  {
    title: 'VI. Refund Process',
    content: `A. Inspection: After check-out, housekeeping and maintenance staff will conduct a thorough room inspection.

B. Full Refund: The deposit is fully refunded if the room is in satisfactory condition with no damages, excessive cleaning requirements, or unpaid charges.

C. Partial Refund: Where damages or additional charges are identified, a partial refund will be issued after necessary deductions.

D. Timing: Refunds are processed within 7–10 business days after check-out and inspection.

E. Method: Refunds are issued using the same payment method as the original deposit. Cash refund recipients must present their check-in receipt.`,
  },
  {
    title: 'VII. Dispute Resolution',
    content: `A. Contesting Deductions: Guests wishing to contest deductions must submit a written request to our front desk or management within 14 days of check-out.

B. Internal Review: Our management team will review the request and inspection report and respond within 14 days of receiving the dispute.

C. External Arbitration: If unsatisfied with the internal resolution, guests may request arbitration through an external mediator agreed upon by both parties.`,
  },
  {
    title: 'VIII. Special Circumstances',
    content: `A. Long-term Stays: For stays exceeding 30 days, deposit amounts and conditions may be adjusted. Guests will be informed at check-in.

B. Group Bookings: A collective security deposit may be required. Terms will be communicated to the group organizer in advance.

C. High-demand Periods: During special events or peak periods, additional deposit requirements may apply. Guests will be notified prior to their stay.`,
  },
  {
    title: 'IX. Policy Updates',
    content: `A. Annual Review: This policy is reviewed annually to ensure it remains current and effective.

B. Notification: Any updates will be communicated via our website and at the time of booking.

C. Guest Responsibility: Guests are responsible for reviewing the current policy. By staying with us, guests agree to the terms of the most current version.`,
  },
];

function AccordionItem({ section }: { section: typeof sections[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-dark-text text-sm md:text-base">{section.title}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-blaze-orange flex-shrink-0 ml-2" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" />
        )}
      </button>
      {open && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">{section.content}</p>
        </div>
      )}
    </div>
  );
}

export default function SecurityDeposit() {
  const [showFull, setShowFull] = useState(false);

  return (
    <section id="security-deposit" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blaze-orange/10 text-blaze-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            Guest Protection
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-text mb-4">Security Deposit Policy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collect a fully refundable security deposit at check-in to protect all guests and maintain the quality of our property.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-blaze-orange/15 bg-gradient-to-br from-white via-ghost-white to-golden-pollen/20 p-6 text-center shadow-[0_14px_34px_rgba(51,51,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-blaze-orange/30 hover:shadow-[0_18px_42px_rgba(51,51,51,0.12)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-blaze-orange/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="ml-3 h-px flex-1 bg-gradient-to-r from-blaze-orange/20 to-transparent" />
                </div>
                <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full border border-blaze-orange/20 bg-blaze-orange/10 shadow-inner shadow-white">
                  <Icon className="w-8 h-8 text-blaze-orange" />
                </div>
                <h3 className="font-semibold text-dark-text mb-2 text-sm md:text-base">{h.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{h.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Full Policy Toggle */}
        <div className="text-center mb-6">
          <button
            onClick={() => setShowFull(!showFull)}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-blaze-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blaze-orange/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blaze-orange/90 hover:shadow-xl hover:shadow-blaze-orange/30 focus:outline-none focus:ring-2 focus:ring-blaze-orange focus:ring-offset-2"
          >
            {showFull ? 'Hide Full Policy' : 'Read the Full Deposit Policy'}
            {showFull ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Accordion */}
        {showFull && (
          <div className="space-y-3">
            {sections.map((section, i) => (
              <AccordionItem key={i} section={section} />
            ))}
            <p className="text-xs text-gray-400 text-center pt-4">
              Last reviewed: 2025 · Grand Anse Beach Palace Hotel
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
