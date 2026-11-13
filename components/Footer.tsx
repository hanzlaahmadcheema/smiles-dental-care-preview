import Link from "next/link";
import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { clinic, hours } from "@/lib/content";

export function Footer() {
  const openDays = hours.filter((h) => h.open);
  return (
    <footer className="bg-forest-900 text-forest-100">
      <div className="container-responsive grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-xl font-extrabold tracking-tight text-white">
            {clinic.name}
          </p>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed">
            Gentle family and cosmetic dentistry in Houston, led by{" "}
            {clinic.doctor.name}, {clinic.doctor.title}. Cleanings, same-day
            children&rsquo;s treatment, and nitrous oxide — with a team that
            makes nervous patients feel comfortable.
          </p>
          <p className="mt-4 flex items-center gap-2 text-[0.95rem] font-semibold text-white">
            <span className="text-amberstar" aria-hidden="true">
              ★★★★★
            </span>
            {clinic.rating} out of 5 · {clinic.reviewCount} reviews
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">
            Visit us
          </p>
          <p className="mt-3 flex items-start gap-2 text-[0.95rem] leading-relaxed">
            <MapPinIcon className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
            <a
              href={clinic.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-2 hover:text-white hover:underline"
            >
              {clinic.address}
            </a>
          </p>
          <p className="mt-3 flex items-center gap-2 text-[0.95rem]">
            <PhoneIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            <a
              href={`tel:${clinic.phoneTel}`}
              className="font-semibold text-white underline-offset-2 hover:underline"
            >
              {clinic.phoneDisplay}
            </a>
          </p>
          <p className="mt-3 text-[0.95rem]">{clinic.facebookText}.</p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">
            Opening hours
          </p>
          <ul className="mt-3 space-y-1.5 text-[0.95rem]">
            {openDays.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="font-semibold tabular-nums text-white">
                  {h.time}
                </span>
              </li>
            ))}
            <li className="flex justify-between gap-4 text-forest-200">
              <span>Wednesday &amp; Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
          <Link
            href="#book"
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-forest-900 transition-colors hover:bg-forest-50"
          >
            Book a visit
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-responsive flex flex-col gap-2 py-5 text-sm text-forest-200 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {clinic.name} · {clinic.address}
          </p>
          <p>
            Preview website built from public information — details can be
            corrected on request. Photography: Unsplash.
          </p>
        </div>
      </div>
    </footer>
  );
}
