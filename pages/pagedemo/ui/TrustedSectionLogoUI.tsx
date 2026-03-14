import Image from "next/image";

type LogoProps = {
  src: string;
  alt: string;
};

export default function Logo({ src, alt }: LogoProps) {
  return (
    <div
      className="
        flex items-center justify-center
        transition-all duration-300 ease-out

      "
    >
      <Image
        src={src}
        alt={alt}
        width={140}
        height={40}
        className="max-h-8 w-auto object-contain"
      />
    </div>
  );
}
