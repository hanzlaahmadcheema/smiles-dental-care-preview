"use client";

import { useState } from "react";
import { CheckCircleIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { clinic, serviceGroups } from "@/lib/content";

const DAYS = ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"];

export function BookForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(serviceGroups[0].title);
  const [day, setDay] = useState("Monday");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = "Please enter your name.";
    if (phone.replace(/\D/g, "").length < 10)
      next.phone = "Please enter a phone number we can reach you on.";
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  };

  if (done) {
    return (
      <div
        className="rounded-2xl border border-forest-200 bg-forest-50 p-6 sm:p-8"
        role="status"
      >
        <CheckCircleIcon
          className="h-10 w-10 text-forest-700"
          aria-hidden="true"
        />
        <h3 className="mt-3 text-xl font-bold text-forest-800">
          Thanks, {name.trim()} — your request is noted.
        </h3>
        <p className="mt-2 text-slate-600">
          The office will call you at {phone.trim()} to confirm a{" "}
          {day.toLowerCase()} appointment for {service.toLowerCase()}. If you
          would rather talk now, call{" "}
          <a
            href={`tel:${clinic.phoneTel}`}
            className="font-semibold text-forest-800 underline underline-offset-2"
          >
            {clinic.phoneDisplay}
          </a>
          .
        </p>
        <p className="mt-3 text-sm text-slate-500">
          Preview form — no request is sent yet. In the live site, requests go
          straight to the office.
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-5 min-h-11 rounded-full border-2 border-forest-800 px-5 py-2 text-sm font-bold text-forest-800 transition-colors hover:bg-forest-50"
        >
          Make another request
        </button>
      </div>
    );
  }

  const inputCls =
    "mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-ink placeholder:text-slate-400 focus:border-forest-700 focus:outline-none focus:ring-2 focus:ring-forest-700/30";
  const labelCls = "block text-sm font-semibold text-ink";

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bk-name" className={labelCls}>
            Your name
          </label>
          <input
            id="bk-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "bk-name-err" : undefined}
            className={inputCls}
          />
          {errors.name && (
            <p id="bk-name-err" className="mt-1.5 text-sm font-medium text-coral-dark">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="bk-phone" className={labelCls}>
            Phone number
          </label>
          <input
            id="bk-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(713) 555-0123"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "bk-phone-err" : undefined}
            className={inputCls}
          />
          {errors.phone && (
            <p id="bk-phone-err" className="mt-1.5 text-sm font-medium text-coral-dark">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="bk-service" className={labelCls}>
            What do you need?
          </label>
          <select
            id="bk-service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={`${inputCls} bg-white`}
          >
            {serviceGroups.map((g) => (
              <option key={g.title} value={g.title}>
                {g.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet — I need advice</option>
          </select>
        </div>
        <div>
          <label htmlFor="bk-day" className={labelCls}>
            Preferred day
          </label>
          <select
            id="bk-day"
            name="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className={`${inputCls} bg-white`}
          >
            {DAYS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="bk-message" className={labelCls}>
          Anything we should know? <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <textarea
          id="bk-message"
          name="message"
          rows={3}
          placeholder="e.g. Toothache on the upper left, nervous about the dentist…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputCls}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-coral px-7 py-3 font-bold text-white transition-colors hover:bg-coral-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
        >
          Request my appointment
        </button>
        <a
          href={`tel:${clinic.phoneTel}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-forest-800 px-6 py-3 font-bold text-forest-800 transition-colors hover:bg-forest-50"
        >
          <PhoneIcon className="h-5 w-5" aria-hidden="true" />
          Or call {clinic.phoneDisplay}
        </a>
      </div>
      <p className="text-sm text-slate-500">
        No payment needed to book. We will confirm your time by phone.
      </p>
    </form>
  );
}
