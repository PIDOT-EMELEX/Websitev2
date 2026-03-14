import LinkPreviewCard from "@/pages/resources/components/LinkPreviewCard";
import { NavbarDemo } from "@/components/sections/navbar-menu";
import { FooterDemo } from "@/components/sections/footer";

export default function ResourcesPage() {

  const links = [
    "https://vercel.com",
    "https://nextjs.org",
    "https://github.com"
  ];

  return (
    <>
      {/* Top Navigation */}
      <NavbarDemo />

    <main className="max-w-6xl mx-auto px-6 py-16 mt-30">

      <h1 className="text-4xl font-bold mb-10">
        Resources
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-30">
        {links.map((link) => (
          <LinkPreviewCard key={link} url={link} />
        ))}
      </div>

    </main>

    {/* Bottom Footer */}
      <FooterDemo />
    </>
  );
}