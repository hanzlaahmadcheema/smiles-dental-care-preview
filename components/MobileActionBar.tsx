"use client";

import { PhoneIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";
import { clinic } from "@/lib/content";

/**
 * Sticky bottom action bar on mobile (thumb-reachable Call + Book) — the
 * pattern the top dental sites use. Hidden on desktop, where the header
 * carries the call-to-action.
 */
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-slate-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href={`tel:${clinic.phoneTel}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-forest-800 px-4 font-bold text-forest-800 transition-colors hover:bg-forest-50"
        >
          <PhoneIcon className="h-5 w-5" aria-hidden="true" />
          Call
        </a>
        <a
          href="#book"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-coral px-4 font-bold text-white transition-colors hover:bg-coral-dark"
        >
          <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
          Book a visit
        </a>
      </div>
    </div>
  );
}
