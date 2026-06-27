export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  location: string;
  photo: string; // URL or path
  status: "open" | "busy"; // "open" = Open to chat, "busy" = Heads down
  linkedinUrl: string;
  githubUrl: string;
  order: number;
  enabled: boolean;
}

const STORAGE_KEY = "pidot_team";

/* -------------------------------- */
/* SEED DATA                        */
/* -------------------------------- */

const seedTeam: TeamMember[] = [
  {
    id: "1",
    name: "Vamshi Krishna",
    role: "Founder & CEO",
    bio: "Shapes product strategy and keeps the team focused on building ambitious, practical experiences.",
    location: "Hyderabad, India",
    photo: "/blog/roy.jpg",
    status: "open",
    linkedinUrl: "",
    githubUrl: "",
    order: 1,
    enabled: true,
  },
];

/* -------------------------------- */
/* GET ALL MEMBERS                  */
/* -------------------------------- */

export function getTeamMembers(): TeamMember[] {
  if (typeof window === "undefined") return seedTeam;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedTeam));
    return seedTeam;
  }
  return JSON.parse(stored);
}

/* -------------------------------- */
/* GET ENABLED MEMBERS              */
/* -------------------------------- */

export function getEnabledTeamMembers(): TeamMember[] {
  return getTeamMembers()
    .filter((m) => m.enabled)
    .sort((a, b) => a.order - b.order);
}

/* -------------------------------- */
/* SAVE MEMBER                      */
/* -------------------------------- */

export function saveTeamMember(member: TeamMember) {
  const all = getTeamMembers();
  all.push(member);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

/* -------------------------------- */
/* UPDATE MEMBER                    */
/* -------------------------------- */

export function updateTeamMember(id: string, updates: Partial<TeamMember>) {
  const all = getTeamMembers();
  const updated = all.map((m) => (m.id === id ? { ...m, ...updates } : m));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

/* -------------------------------- */
/* DELETE MEMBER                    */
/* -------------------------------- */

export function deleteTeamMember(id: string) {
  const all = getTeamMembers();
  const updated = all.filter((m) => m.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}
