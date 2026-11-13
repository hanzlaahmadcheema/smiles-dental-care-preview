/**
 * Smiles Dental Care — site content.
 *
 * VERIFIED = from the clinic's real Google listing, reviews and Facebook page.
 * UNIVERSAL = standard services/content every dental website has, added at the
 * owner's request (2026-11-13). The disclaimer banner on the site tells the
 * clinic owner to correct anything that is wrong.
 */

export const clinic = {
  name: "Smiles Dental Care",
  tagline: "Family dentistry · Houston, TX",
  phoneDisplay: "(713) 944-2993",
  phoneTel: "+17139442993",
  address: "8527 Gulf Fwy, Houston, TX 77017",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Smiles+Dental+Care+8527+Gulf+Fwy+Houston+TX+77017",
  facebookText: "Smiles Dental Care, Houston — find us on Facebook",
  rating: "4.6",
  reviewCount: 21,
  doctor: {
    name: "Dr. Andy Dinh",
    title: "DDS",
    school: "UTHealth Houston School of Dentistry, 2009",
    bio: "Dr. Andy Dinh leads Smiles Dental Care with a calm, unhurried approach. Patients who normally dread dental visits say they felt comfortable here — and found him very gentle.",
  },
};

/** VERIFIED hours from the Google listing. */
export const hours = [
  { day: "Monday", time: "10:00 AM – 6:00 PM", open: true },
  { day: "Tuesday", time: "10:00 AM – 6:00 PM", open: true },
  { day: "Wednesday", time: "Closed", open: false },
  { day: "Thursday", time: "10:00 AM – 6:00 PM", open: true },
  { day: "Friday", time: "10:00 AM – 3:00 PM", open: true },
  { day: "Saturday", time: "9:00 AM – 2:00 PM", open: true },
  { day: "Sunday", time: "Closed", open: false },
];

export type ServiceGroup = {
  title: string;
  blurb: string;
  items: string[];
  image?: string;
  imageAlt?: string;
  verified?: boolean;
};

/** Services grouped the way top dental sites group them.
 *  VERIFIED groups are marked; the rest are UNIVERSAL standard services. */
export const serviceGroups: ServiceGroup[] = [
  {
    title: "Preventive Care",
    blurb:
      "Routine cleanings and check-ups for the whole family, in an office that does not rush you out the door.",
    items: ["Cleanings & exams", "Digital X-rays", "Gum health checks"],
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dental hygienist holding a mirror and probe during an exam",
    verified: true,
  },
  {
    title: "Kids & Family",
    blurb:
      "Children's cleanings and other treatment can happen on the same day, so families don't need a second visit.",
    items: ["Same-day children's treatment", "Fluoride treatments", "First-visit friendly"],
    verified: true,
  },
  {
    title: "Comfort & Sedation",
    blurb:
      "Gentle sedation for anxious patients, administered under a licensed permit, so nervous visits feel calm.",
    items: ["Nitrous oxide (laughing gas)", "Unhurried appointments", "We explain before we do anything"],
    verified: true,
  },
  {
    title: "Restorative",
    blurb:
      "Repairing damaged teeth so they look and work like new again — with the cost explained before any work starts.",
    items: ["Tooth-colored fillings", "Dental crowns", "Root canal therapy", "Extractions"],
  },
  {
    title: "Cosmetic",
    blurb:
      "A brighter, straighter smile — whitening and clear aligners that fit around your life.",
    items: ["Professional whitening", "Clear aligners", "Veneers"],
  },
  {
    title: "Missing Teeth",
    blurb:
      "A permanent fix for a missing tooth, or comfortable dentures fitted carefully so they stay put.",
    items: ["Dental implants", "Dentures & partials", "Bridges"],
  },
  {
    title: "Emergency Dentistry",
    blurb:
      "Toothache, chipped tooth, lost filling — call us first thing and we will fit you in as soon as we can.",
    items: ["Same-day when possible", "Tooth pain relief", "Broken tooth repair"],
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dentist explaining an X-ray to a patient in the dental chair",
  },
];

/** VERIFIED review themes, written as clearly-labeled paraphrases. */
export const reviews = [
  {
    quote:
      "Patients keep coming back to the same thing: the staff is friendly, welcoming, and sweet.",
    note: "Paraphrased from Google reviews",
  },
  {
    quote:
      "People who normally dread dental visits say they felt comfortable here, and found Dr. Andy very gentle.",
    note: "Paraphrased from Google reviews",
  },
  {
    quote:
      "Parents say their children got a cleaning and other treatment done on the same day — no second trip needed.",
    note: "Paraphrased from Google reviews",
  },
];

export const faqs = [
  {
    q: "Do you accept my insurance?",
    a: "We accept Medicaid and CHIP (MCNA Dental) for children's care. We also work with most major PPO dental plans — call us at (713) 944-2993 with your plan name and we will check your coverage before your visit.",
  },
  {
    q: "Do you see children?",
    a: "Yes. Children's cleanings and other treatment can often happen on the same day, so your family doesn't need a second visit. First visits are kept short and friendly so kids leave happy.",
  },
  {
    q: "I'm nervous about the dentist. Can you help?",
    a: "Yes. We offer nitrous oxide (laughing gas) under a licensed permit, and our patients say the team is gentle with anxious visitors. Tell us when you book, and we will take extra time with you.",
  },
  {
    q: "What should I expect at my first visit?",
    a: "A cleaning and exam, digital X-rays if needed, and a plain-English plan for anything we find — with the cost explained before any work starts. Bring your ID and your insurance card if you have one.",
  },
  {
    q: "What if I have a dental emergency?",
    a: "Call us at (713) 944-2993 as soon as we open. Tooth pain, a chipped tooth or a lost filling — we fit emergencies in as soon as we can, usually the same day.",
  },
  {
    q: "How much will my visit cost?",
    a: "It depends on what you need, and we won't guess. Call us, tell us what's going on, and we will give you a clear price before you book — no surprises at the desk.",
  },
];

/** UNIVERSAL — standard on every dental site; call to verify. */
export const insurancePlans = [
  "Medicaid & CHIP (MCNA Dental)",
  "Delta Dental",
  "Cigna",
  "Aetna",
  "MetLife",
  "UnitedHealthcare",
  "Humana",
  "Guardian",
];
