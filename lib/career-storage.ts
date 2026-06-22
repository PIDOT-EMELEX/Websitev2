export interface CareerJob {
  id: string;
  title: string;
  location: string;
  description: string;
  enabled: boolean;
  createdAt: string;
  // LinkedIn-style fields
  workplaceType?: string; // 'On-site' | 'Hybrid' | 'Remote'
  jobType?: string; // 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Temporary'
  experienceLevel?: string; // 'Entry level' | 'Associate' | 'Mid-Senior level' | 'Director' | 'Executive'
  skills?: string[];
  salary?: string;
  requirements?: string;
  benefits?: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  name: string;
  email: string;
  linkedinUrl?: string;
  resumeUrl?: string;
  message?: string;
  appliedAt: string;
}

const STORAGE_KEY = "pidot_careers";
const APPLICATIONS_KEY = "pidot_applications";

export function getJobs(): CareerJob[] {
  if (typeof window === "undefined") {
    return [];
  }

  const jobs = localStorage.getItem(STORAGE_KEY);
  return jobs ? JSON.parse(jobs) : [];
}

export function saveJob(job: CareerJob) {
  const jobs = getJobs();
  jobs.unshift(job);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
}

export function updateJob(id: string, updates: Partial<CareerJob>) {
  const jobs = getJobs();
  const updated = jobs.map((job) =>
    job.id === id ? { ...job, ...updates } : job
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

export function deleteJob(id: string) {
  const jobs = getJobs();
  const updated = jobs.filter((job) => job.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

// Applications helpers
export function getApplications(): JobApplication[] {
  if (typeof window === "undefined") {
    return [];
  }
  const apps = localStorage.getItem(APPLICATIONS_KEY);
  return apps ? JSON.parse(apps) : [];
}

export function submitApplication(app: JobApplication) {
  const apps = getApplications();
  apps.unshift(app);
  localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(apps));
}

export function deleteApplication(id: string) {
  const apps = getApplications();
  const updated = apps.filter((app) => app.id !== id);
  localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(updated));
}