import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export default function Button({ children, variant = "primary" }: Props) {
  const base =
    "inline-flex items-center rounded-2xl px-6 py-3 text-sm font-medium transition";

  const variants = {
    primary:
      "bg-white/10 text-white backdrop-blur hover:bg-white/20 border border-white/10",
    ghost: "text-white/70 hover:text-white",
  };

  return <button className={`${base} ${variants[variant]}`}>{children}</button>;
}
