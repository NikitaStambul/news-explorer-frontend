import { ReactNode, useState } from "react";
import { cn } from "#/utils/cn";

interface TooltipProps {
  content: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
  children: ReactNode;
  className?: string;
  tooltipClassName?: string;
}

function Tooltip({
  content,
  position = "left",
  children,
  className,
  tooltipClassName,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={cn("flex", className)}>
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="inline-flex"
      >
        {children}
      </div>

      <div
        className={cn(
          "absolute flex items-center z-10 px-5 text-xs font-medium bg-background rounded-lg shadow-md transition-opacity duration-300 h-10 w-max",
          tooltipClassName,
          {
            "opacity-100": isVisible,
            "opacity-0": !isVisible,
            "bottom-full left-1/2 transform -translate-x-1/2 mb-2":
              position === "top",
            "top-full left-1/2 transform -translate-x-1/2 mt-2":
              position === "bottom",
            "right-full top-1/2 transform -translate-y-1/2 mr-2":
              position === "left",
            "left-full top-1/2 transform -translate-y-1/2 ml-2":
              position === "right",
          }
        )}
      >
        {content}
      </div>
    </div>
  );
}

export default Tooltip;
