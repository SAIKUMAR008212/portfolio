"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

type ItemType = {
  quote: string;
  name: string;
  title: string;
  icon?: React.ReactNode;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: ItemType[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    addAnimation();

    // Detect desktop
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  };

  const handleTap = () => {
    if (!isDesktop) {
      setIsPaused((prev) => !prev); // Mobile: tap to toggle
    }
  };

  const handleMouseEnter = () => {
    if (isDesktop) {
      setIsPaused(true); // Desktop: hover pause
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setIsPaused(false); // Desktop: resume on leave
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 animate-scroll",
          isPaused && "paused"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            onClick={handleTap}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="select-none relative w-[350px] max-w-full shrink-0 cursor-pointer rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
          >
            <blockquote>
              {item.icon && (
                <div className="flex justify-center mb-4">{item.icon}</div>
              )}
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100 select-none">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center select-none">
                <span className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-neutral-700 dark:text-gray-300">
                    {item.name}
                  </span>
                  <span className="text-sm text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>

      <style jsx global>{`
        @keyframes scroll {
          to {
            transform: translateX(calc(-50%));
          }
        }

        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) linear infinite;
          animation-direction: var(--animation-direction, forwards);
        }

        .paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};
