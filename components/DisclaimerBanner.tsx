"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { clinic } from "@/lib/content";

/**
 * Preview disclaimer, shown as a dismissible banner at the very top of the
 * page — the first thing the clinic owner sees — instead of a full-screen
 * modal blocking the homepage (no real dental site does that).
 */
export function DisclaimerBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="relative z-[60] bg-forest-900 text-[0.9rem] leading-snug text-forest-100">
      <div className="container-responsive flex items-start gap-3 py-2.5 sm:items-center">
        <p className="flex-1">
          <strong className="font-semibold text-white">
            Preview website for {clinic.name}.
          </strong>{" "}
          Built from public information, plus the standard services every
          dental website has. Some details may be wrong — tell us what to fix
          or add and we will correct it. If you like it, you can make it
          yours.
        </p>
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-full text-forest-100 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Dismiss preview notice"
        >
          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
