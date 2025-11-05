import { NavbarDemo } from "@/components/sections/navbar-menu"
import { FooterDemo } from "@/components/sections/footer";
import { GlobeDemo } from "@/components/sections/globe";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavbarDemo />
      </div>

      {/* Page Content */}
      <div className="flex-1 pt-24 pb-24"> {/* padding to avoid overlap */}
        <section className="max-w-6xl mx-auto px-6 py-10 text-center">
          <GlobeDemo />
        </section>
      </div>

      {/* Footer at bottom */}
      <div className="mt-auto">
        <FooterDemo />
      </div>
    </main>
  );
}
