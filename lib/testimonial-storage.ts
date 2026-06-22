export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
  logoUrl: string;
  enabled: boolean;
  createdAt: string;
}

const STORAGE_KEY = "pidot_testimonials";

/* -------------------------------- */
/* SEED TESTIMONIALS                */
/* -------------------------------- */

const seedTestimonials: Testimonial[] = [
  {
    id: "seed-1",
    name: "Priya Sharma",
    role: "Dean of Commerce",
    company: "BITS Hyderabad",
    quote:
      "Pi Dot transformed how our students experience real-world business. The simulations are incredibly realistic and the support team is phenomenal.",
    avatarUrl: "/blog/roy.jpg",
    logoUrl: "/assets/pi-dot-logomark.svg",
    enabled: true,
    createdAt: "2026-01-15T10:00:00Z",
  },
  {
    id: "seed-2",
    name: "Arjun Mehta",
    role: "Placement Head",
    company: "NMIMS Mumbai",
    quote:
      "Our placement rates improved significantly after running corporate simulations with Pi Dot. Students gain confidence that textbooks alone can't provide.",
    avatarUrl: "/blog/roy.jpg",
    logoUrl: "/assets/pi-dot-logomark.svg",
    enabled: true,
    createdAt: "2026-02-20T10:00:00Z",
  },
  {
    id: "seed-3",
    name: "David Kim",
    role: "CTO",
    company: "InnovateLabs",
    quote:
      "The integration was seamless and the support team is phenomenal. Highly recommend to any growing business looking for talent pipelines.",
    avatarUrl: "/blog/roy.jpg",
    logoUrl: "/assets/pi-dot-logomark.svg",
    enabled: true,
    createdAt: "2026-03-10T10:00:00Z",
  },
  {
    id: "seed-4",
    name: "Sneha Reddy",
    role: "HOD, Management Studies",
    company: "Osmania University",
    quote:
      "The structured frameworks make it effortless for faculty to run simulations. Our students are now industry-ready from day one.",
    avatarUrl: "/blog/roy.jpg",
    logoUrl: "/assets/pi-dot-logomark.svg",
    enabled: true,
    createdAt: "2026-04-05T10:00:00Z",
  },
  {
    id: "seed-5",
    name: "Rahul Verma",
    role: "Founder",
    company: "EdTech Ventures",
    quote:
      "Pi Dot's approach to experiential learning is unmatched. We've partnered with them across 15 campuses and the results speak for themselves.",
    avatarUrl: "/blog/roy.jpg",
    logoUrl: "/assets/pi-dot-logomark.svg",
    enabled: true,
    createdAt: "2026-05-01T10:00:00Z",
  },
];

/* -------------------------------- */
/* GET ALL TESTIMONIALS             */
/* -------------------------------- */

export function getTestimonials(): Testimonial[] {
  if (typeof window === "undefined") {
    return seedTestimonials;
  }

  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedTestimonials));
    return seedTestimonials;
  }

  return JSON.parse(stored);
}

/* -------------------------------- */
/* GET ENABLED TESTIMONIALS         */
/* -------------------------------- */

export function getEnabledTestimonials(): Testimonial[] {
  return getTestimonials()
    .filter((t) => t.enabled)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
}

/* -------------------------------- */
/* SAVE TESTIMONIAL                 */
/* -------------------------------- */

export function saveTestimonial(testimonial: Testimonial) {
  const all = getTestimonials();
  all.unshift(testimonial);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

/* -------------------------------- */
/* UPDATE TESTIMONIAL               */
/* -------------------------------- */

export function updateTestimonial(
  id: string,
  updates: Partial<Testimonial>
) {
  const all = getTestimonials();
  const updated = all.map((t) =>
    t.id === id ? { ...t, ...updates } : t
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

/* -------------------------------- */
/* DELETE TESTIMONIAL               */
/* -------------------------------- */

export function deleteTestimonial(id: string) {
  const all = getTestimonials();
  const updated = all.filter((t) => t.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
