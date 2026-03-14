import EverythingInYourControlUI from '@/features/pagedemo/ui/EverythingInYourControlUI';

export default function EverythingInYourControlSection() {
  return (
    <section className="mx-auto px-6 py-12 sm:py-24 max-w-5xl md:max-w-7xl">
      <div className="text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          width={170}
          height={170}
          poster="/static/landing-page/3d-control-fallback.jpg"
          className="mx-auto mb-4"
        >
          <source
            src="/pagedemo/3d-control.mp4"
            type="video/mp4"
          />
        </video>

        <h2 className="font-display effect-font-styling effect-font-gradient mb-2 text-[3rem] leading-[120%] tracking-tighter md:text-[3.5rem]">
          Everything in your control
        </h2>

        <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-white/60 font-normal text-balance text-center mb-8 md:mb-16">
          All the features you need to manage your email sending, troubleshoot with
          <br />
          detailed logs, and protect your domain reputation – without the friction.
        </p>
      </div>
        <EverythingInYourControlUI />
    </section>
  );
}
