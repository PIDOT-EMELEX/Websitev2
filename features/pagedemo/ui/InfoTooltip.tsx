"use client";

import * as Tooltip from "@radix-ui/react-tooltip";

export function InfoTooltip({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Tooltip.Provider delayDuration={500}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span className="cursor-help underline decoration-dotted underline-offset-2 text-white">
            {children}
          </span>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            sideOffset={6}
            className="z-50
              max-w-65
              rounded-xl
              border border-white/30
              bg-black
              px-5 py-4
              text-sm
              leading-relaxed
              text-white
              shadow-xl
              backdrop-blur
              data-[state=delayed-open]:animate-in
              data-[state=delayed-open]:fade-in
              "
          >
            {label}
            <Tooltip.Arrow className="fill-black" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
