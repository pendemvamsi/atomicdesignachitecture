import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors";
    
    const variants = {
      default: "bg-slate-700 text-slate-300",
      secondary: "bg-slate-800 text-slate-400 border border-slate-700",
      destructive: "bg-rose-500/20 text-rose-400 border border-rose-500/30",
      outline: "bg-transparent border border-slate-600 text-slate-300",
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };