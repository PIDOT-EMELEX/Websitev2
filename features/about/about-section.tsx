import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-black pb-32 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* TOP */}
        <div className="grid gap-12 lg:grid-cols-12">

          {/* LEFT */}
          <div className="lg:col-span-3">
            <div className="mt-12 space-y-4 text-zinc-500">
              <p>About us.</p>
              <p>Our Team.</p>
              <p>Press.</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-9 space-y-8 text-zinc-400 leading-8">

            <p>
              Pi Dot is a technology-driven organization focused on
              bridging the gap between students, institutions and
              industry through innovative digital solutions.
            </p>

            <p>
              We create impactful platforms, training programs and
              career-focused initiatives that empower learners and
              educational ecosystems across India.
            </p>

            <p>
              Our mission is to help students discover opportunities,
              build relevant skills and connect with industry through
              technology, design and innovation.
            </p>

          </div>

        </div>

        {/* BIG IMAGE */}
        <div className="mt-24 overflow-hidden rounded-3xl border border-zinc-800">

          <Image
            src="/about/team-office.jpg"
            alt="Team"
            width={1600}
            height={900}
            className="h-[550px] w-full object-cover"
          />

        </div>

        {/* QUOTE SECTION */}
        <div className="mt-24 grid gap-12 lg:grid-cols-12">

          <div className="lg:col-span-7 flex items-center">

            <div>
              <div className="text-7xl text-[#f69507]">
                "
              </div>

              <h3
                className="
                  max-w-xl
                  text-4xl
                  font-semibold
                  leading-tight
                "
              >
                Our work only matters when it creates real impact
                for students and institutions.
              </h3>

              <p className="mt-6 text-zinc-500">
                Pi Dot Team
              </p>
            </div>

          </div>

          <div className="lg:col-span-5">

            <div className="overflow-hidden rounded-3xl border border-zinc-800">

              <Image
                src="/about/working.jpg"
                alt="Working"
                width={800}
                height={600}
                className="h-[320px] w-full object-cover"
              />

            </div>

          </div>

        </div>

        {/* TEAM SECTION */}
        <div className="mt-32 grid gap-16 lg:grid-cols-12">

          {/* TEAM PHOTOS */}
          <div className="lg:col-span-6">

            <div className="grid grid-cols-2 gap-8">

                {/* LEFT COLUMN */}
                <div className="space-y-8">

                <div className="overflow-hidden rounded-3xl border border-zinc-800">
                    <Image
                    src="/about/member-1.jpg"
                    alt="Member"
                    width={500}
                    height={700}
                    className="h-[320px] w-full object-cover"
                    />
                </div>

                <div className="overflow-hidden rounded-3xl border border-zinc-800">
                    <Image
                    src="/about/member-3.jpg"
                    alt="Member"
                    width={500}
                    height={700}
                    className="h-[320px] w-full object-cover"
                    />
                </div>

                </div>



                {/* RIGHT COLUMN */}
                <div className="flex items-center">

                <div className="overflow-hidden rounded-3xl border border-zinc-800">
                    <Image
                    src="/about/member-2.jpg"
                    alt="Member"
                    width={500}
                    height={700}
                    className="h-[320px] w-full object-cover"
                    />
                </div>

                </div>

        </div>

        </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-6">

            <h2 className="text-7xl font-black uppercase">
              The Team.
            </h2>

            <p
              className="
                mt-8
                text-zinc-400
                leading-8
              "
            >
              We are a multidisciplinary team of designers,
              developers, marketers and educators working together
              to build meaningful digital experiences.
            </p>

            <p
              className="
                mt-6
                text-zinc-500
                leading-8
              "
            >
              Our team combines creativity, technical expertise
              and industry knowledge to create products that
              deliver measurable outcomes.
            </p>

            {/* STATS */}
            <div
              className="
                mt-16
                grid
                grid-cols-2
                gap-8
                md:grid-cols-4
              "
            >

              <div>
                <h3 className="text-5xl font-bold text-[#f69507]">
                  50+
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-[#f69507]">
                  20+
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Clients
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-[#f69507]">
                  10+
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Team Members
                </p>
              </div>

              <div>
                <h3 className="text-5xl font-bold text-[#f69507]">
                  100%
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                  Passion
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}