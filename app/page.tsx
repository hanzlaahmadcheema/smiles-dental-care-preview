import {
  ShieldCheckIcon,
  UserGroupIcon,
  HeartIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  PuzzlePieceIcon,
  BoltIcon,
  CheckCircleIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { clinic, hours, serviceGroups, reviews, faqs, insurancePlans } from "@/lib/content";
import { BookForm } from "@/components/BookForm";

const GROUP_ICONS = [
  ShieldCheckIcon,
  UserGroupIcon,
  HeartIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  PuzzlePieceIcon,
  BoltIcon,
];

function SectionHeading({
  title,
  intro,
}: {
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <div id="top">
      {/* ---------- HERO (photo-led, MedBills pattern) ---------- */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-forest-50 via-ivory to-sand"
        aria-labelledby="hero-heading"
      >
        <div className="container-responsive py-10 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-forest-800 shadow-sm">
                <span className="text-amberstar" aria-hidden="true">
                  ★★★★★
                </span>
                {clinic.rating} out of 5 · {clinic.reviewCount} Google reviews
              </p>
              <h1
                id="hero-heading"
                className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]"
              >
                A dental office that takes its time making you feel like our
                only patient.
              </h1>
              <div className="mt-5 md:hidden">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80"
                  alt="Bright, modern dental treatment room at Smiles Dental Care"
                  width={1600}
                  height={1067}
                  className="h-auto w-full rounded-2xl shadow-xl"
                />
              </div>
              <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted">
                Family and cosmetic dentistry in Houston, led by{" "}
                {clinic.doctor.name}, {clinic.doctor.title}. Cleanings,
                same-day children&rsquo;s treatment, and nitrous oxide — with a
                team that makes nervous patients feel comfortable.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#book"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-coral px-7 py-3 font-bold text-white shadow-lg shadow-coral/30 transition-colors hover:bg-coral-dark"
                >
                  Book a visit
                </a>
                <a
                  href={`tel:${clinic.phoneTel}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-forest-800 px-7 py-3 font-bold text-forest-800 transition-colors hover:bg-forest-50"
                >
                  <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                  Call {clinic.phoneDisplay}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted">
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-forest-600" aria-hidden="true" />
                  Open Saturdays
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-forest-600" aria-hidden="true" />
                  Medicaid &amp; CHIP for children
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-forest-600" aria-hidden="true" />
                  Same-day kids&rsquo; treatment
                </span>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1600&q=80"
                  alt="Bright, modern dental treatment room at Smiles Dental Care"
                  width={1600}
                  height={1067}
                  className="h-[480px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="flex items-center gap-1.5 text-lg font-extrabold text-ink">
                  <StarIcon className="h-5 w-5 fill-amberstar text-amberstar" aria-hidden="true" />
                  {clinic.rating} / 5
                </p>
                <p className="text-sm text-muted">
                  {clinic.reviewCount} patient reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TRUST STRIP ---------- */}
      <section className="border-y border-forest-100 bg-forest-50" aria-label="Why patients choose us">
        <div className="container-responsive grid grid-cols-2 gap-x-4 gap-y-5 py-6 md:grid-cols-4">
          {[
            { strong: "4.6 / 5", sub: "21 patient reviews" },
            { strong: "Open Saturdays", sub: "9:00 AM – 2:00 PM" },
            { strong: "Medicaid & CHIP", sub: "Accepted for children" },
            { strong: "Same-day care", sub: "Children's treatment" },
          ].map((f) => (
            <div key={f.strong} className="border-l-2 border-forest-200 pl-4">
              <p className="font-extrabold text-forest-800">{f.strong}</p>
              <p className="text-sm text-muted">{f.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- SERVICES, GROUPED ---------- */}
      <section id="services" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="services-heading">
        <div className="container-responsive">
          <SectionHeading
            title="Everything your smile needs, in one place"
            intro="From a six-month cleaning to a same-day emergency — here is what we do, and what each visit looks like."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceGroups.map((group, i) => {
              const Icon = GROUP_ICONS[i % GROUP_ICONS.length];
              const featured = !!group.image;
              return (
                <article
                  key={group.title}
                  className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md ${
                    featured ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {group.image && (
                    <img
                      src={group.image}
                      alt={group.imageAlt ?? ""}
                      width={1600}
                      height={1067}
                      loading="lazy"
                      className="h-44 w-full object-cover"
                    />
                  )}
                  <div className="p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-forest-50 text-forest-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-ink">
                      {group.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">{group.blurb}</p>
                    <ul className="mt-4 space-y-1.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-[0.95rem] text-ink">
                          <CheckCircleIcon
                            className="mt-0.5 h-5 w-5 shrink-0 text-forest-600"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`tel:${clinic.phoneTel}`}
                      className="mt-5 inline-flex min-h-11 items-center font-bold text-forest-800 underline-offset-4 hover:underline"
                    >
                      Call to book
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- WHY US (dark band) ---------- */}
      <section id="why" className="scroll-mt-24 bg-forest-900 py-16 md:py-24" aria-labelledby="why-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 id="why-heading" className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              The difference is how the visit feels
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-forest-100">
              Most of our patients tell us the same thing: they used to dread
              the dentist. Here is what changes that.
            </p>
            <a
              href="#book"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-coral px-7 py-3 font-bold text-white transition-colors hover:bg-coral-dark"
            >
              Book a visit
            </a>
          </div>
          <ul className="space-y-5">
            {[
              {
                title: "Unhurried appointments",
                body: "We take our time with you — the visit is yours, not a slot on a conveyor belt.",
              },
              {
                title: "Gentle with nervous patients",
                body: "Nitrous oxide under a licensed permit, and a team that explains everything before doing anything.",
              },
              {
                title: "Same-day care for children",
                body: "Cleanings and other treatment done in one visit, so families don't need a second trip.",
              },
              {
                title: "Clear prices, before we start",
                body: "We tell you exactly what a visit costs before any work begins. No surprises at the desk.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <CheckCircleIcon
                  className="mt-1 h-6 w-6 shrink-0 text-coral"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-bold text-white">{item.title}</p>
                  <p className="mt-1 leading-relaxed text-forest-100">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- MEET DR. ANDY ---------- */}
      <section className="py-16 md:py-24" aria-labelledby="doctor-heading">
        <div className="container-responsive grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12">
          <div className="flex h-40 w-40 items-center justify-center rounded-3xl bg-forest-800 font-serif text-6xl font-semibold text-white shadow-xl md:h-52 md:w-52">
            AD
          </div>
          <div>
            <h2 id="doctor-heading" className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              Meet {clinic.doctor.name}, {clinic.doctor.title}
            </h2>
            <p className="mt-2 font-semibold text-forest-700">
              {clinic.doctor.school}
            </p>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
              {clinic.doctor.bio}
            </p>
            <p className="mt-4 text-muted">
              General, family, and cosmetic dentistry for adults and children
              — in one friendly Houston office.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- REVIEWS ---------- */}
      <section id="reviews" className="scroll-mt-24 border-y border-forest-100 bg-forest-50 py-16 md:py-24" aria-labelledby="reviews-heading">
        <div className="container-responsive">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="What patients say"
              intro={`Rated ${clinic.rating} out of 5 across ${clinic.reviewCount} reviews. The words below are paraphrases of real patient reviews, not word-for-word quotes.`}
            />
            <div className="shrink-0 rounded-2xl bg-white px-6 py-5 shadow-sm">
              <p className="flex items-center gap-2 text-3xl font-extrabold text-ink">
                <StarIcon className="h-7 w-7 fill-amberstar text-amberstar" aria-hidden="true" />
                {clinic.rating} / 5
              </p>
              <p className="mt-1 text-sm text-muted">
                {clinic.reviewCount} Google reviews
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <figure
                key={r.quote.slice(0, 24)}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <p className="text-amberstar" aria-hidden="true">
                  ★★★★★
                </p>
                <blockquote className="mt-3 font-serif text-xl font-medium leading-snug text-forest-800">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted">
                  {r.note}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- INSURANCE ---------- */}
      <section id="insurance" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="insurance-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="Insurance & paying"
              intro="We accept Medicaid and CHIP (MCNA Dental) for children's care, and we work with most major PPO dental plans. Call us with your plan name and we will check your coverage before your visit."
            />
            <p className="mt-5 leading-relaxed text-muted">
              No dental insurance? Ask us about CareCredit and payment
              options when you call — we will find a way to make the visit
              work.
            </p>
            <a
              href={`tel:${clinic.phoneTel}`}
              className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-forest-800 px-6 py-3 font-bold text-white transition-colors hover:bg-forest-900"
            >
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
              Check my coverage — {clinic.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-muted">
              Plans we commonly work with
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {insurancePlans.map((plan) => (
                <li
                  key={plan}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-[0.95rem] font-semibold text-ink"
                >
                  {plan}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              This list covers the plans we most often see. If yours is not
              listed, call us anyway — we will check it for you.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- EMERGENCY ---------- */}
      <section className="bg-coral-light py-14 md:py-20" aria-labelledby="emergency-heading">
        <div className="container-responsive flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 font-bold text-coral-dark">
              <BoltIcon className="h-6 w-6" aria-hidden="true" />
              Dental emergency?
            </p>
            <h2 id="emergency-heading" className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
              In pain right now? Call us — we fit emergencies in the same day.
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted">
              Toothache, chipped tooth, lost filling or crown. Call as soon as
              we open and we will find you a time today.
            </p>
          </div>
          <a
            href={`tel:${clinic.phoneTel}`}
            className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-coral px-7 py-3 font-bold text-white shadow-lg shadow-coral/30 transition-colors hover:bg-coral-dark"
          >
            <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            Call {clinic.phoneDisplay}
          </a>
        </div>
      </section>

      {/* ---------- NEW PATIENTS ---------- */}
      <section className="py-16 md:py-24" aria-labelledby="new-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              title="New here? Your first visit, step by step"
              intro="Three simple steps — and you will know exactly what to expect before you walk in."
            />
            <ol className="mt-8 space-y-6">
              {[
                {
                  title: "Call or request online",
                  body: "Tell us what you need — a cleaning, a toothache, or just a check-up. We will offer you the nearest times, including Saturdays.",
                },
                {
                  title: "We confirm your time",
                  body: "We call you back to confirm, and tell you what to bring and what it will cost.",
                },
                {
                  title: "First visit: exam, X-rays, plan",
                  body: "A cleaning and exam, digital X-rays if needed, and a plain-English plan for anything we find.",
                },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest-800 text-lg font-extrabold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-ink">{step.title}</p>
                    <p className="mt-1 leading-relaxed text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-ink">What to bring</h3>
            <ul className="mt-4 space-y-3">
              {[
                "Your photo ID",
                "Your insurance card, if you have one",
                "A list of medicines you take",
                "Your last dental X-rays, if you have them",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-muted">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
                alt="Dentist reviewing 3D dental scans and X-rays"
                width={1600}
                height={1067}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm text-muted">
              Digital X-rays and 3D imaging help us see the full picture — and
              explain it to you in plain English.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- BOOK ---------- */}
      <section id="book" className="scroll-mt-24 border-y border-forest-100 bg-forest-50 py-16 md:py-24" aria-labelledby="book-heading">
        <div className="container-responsive grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              title="Book a visit"
              intro="Request an appointment and we will call you back to confirm your time. Prefer to talk now? Call us directly."
            />
            <p className="mt-6 flex items-center gap-3 text-lg font-bold text-forest-800">
              <PhoneIcon className="h-6 w-6" aria-hidden="true" />
              <a href={`tel:${clinic.phoneTel}`} className="underline-offset-4 hover:underline">
                {clinic.phoneDisplay}
              </a>
            </p>
            <p className="mt-3 flex items-start gap-3 text-muted">
              <ClockIcon className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              Open Monday, Tuesday &amp; Thursday 10–6, Friday 10–3, Saturday
              9–2. Closed Wednesday &amp; Sunday.
            </p>
            <p className="mt-3 flex items-start gap-3 text-muted">
              <MapPinIcon className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
              {clinic.address}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <BookForm />
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="scroll-mt-24 py-16 md:py-24" aria-labelledby="faq-heading">
        <div className="container-responsive max-w-3xl">
          <SectionHeading
            title="Questions patients ask"
            intro="Answers from the practice's public information. Anything else — call and ask."
          />
          <div className="mt-8">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border-t border-slate-200 py-5 last:border-b"
              >
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-2xl font-normal text-muted transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-prose leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VISIT ---------- */}
      <section id="visit" className="scroll-mt-24 border-t border-slate-200 py-16 md:py-24" aria-labelledby="visit-heading">
        <div className="container-responsive grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading
              title="Visit us"
              intro="On the Gulf Freeway in Houston, with free on-site parking and a wheelchair-accessible entrance."
            />
            <table className="mt-8 w-full border-collapse">
              <thead>
                <tr>
                  <th scope="col" className="border-b-2 border-forest-800 pb-2.5 text-left font-bold">
                    Day
                  </th>
                  <th scope="col" className="border-b-2 border-forest-800 pb-2.5 text-right font-bold">
                    Hours
                  </th>
                </tr>
              </thead>
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day} className="border-b border-slate-200">
                    <td className="py-3">{h.day}</td>
                    <td
                      className={`py-3 text-right tabular-nums ${
                        h.open ? "font-bold" : "text-muted"
                      }`}
                    >
                      {h.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-2xl bg-forest-800 p-6 text-white shadow-xl sm:p-8">
            <h3 className="text-xl font-bold">Getting here</h3>
            <p className="mt-3 leading-relaxed text-forest-100">
              {clinic.address}. Free on-site parking lot.
              Wheelchair-accessible entrance and restroom.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-forest-900 transition-colors hover:bg-forest-50"
              >
                <MapPinIcon className="h-5 w-5" aria-hidden="true" />
                Get directions
              </a>
              <a
                href={`tel:${clinic.phoneTel}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/60 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
              >
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                {clinic.phoneDisplay}
              </a>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-forest-100">
              No email listed — the phone is the fastest way to reach us. You
              can also find us on Facebook: {clinic.name}, Houston.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="bg-forest-900 py-16 md:py-20" aria-labelledby="closing-heading">
        <div className="container-responsive max-w-3xl text-center md:text-left">
          <h2 id="closing-heading" className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Ready to book?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-forest-100 md:mx-0">
            Call us and we will find a time that suits you — including Saturday
            mornings. If you are a new patient, tell us when you call and we
            will explain what to bring.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-start md:justify-start">
            <a
              href={`tel:${clinic.phoneTel}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-coral px-7 py-3 font-bold text-white transition-colors hover:bg-coral-dark"
            >
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
              Call {clinic.phoneDisplay}
            </a>
            <a
              href="#book"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white/60 px-7 py-3 font-bold text-white transition-colors hover:bg-white/10"
            >
              Request an appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
