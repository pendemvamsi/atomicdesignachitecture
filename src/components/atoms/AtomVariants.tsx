import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const buttonVariants = [
  { name: "Primary", className: "bg-violet-500 hover:bg-violet-600 text-white" },
  { name: "Secondary", className: "bg-slate-700 hover:bg-slate-600 text-white" },
  { name: "Outline", className: "bg-transparent border border-slate-600 text-slate-300 hover:bg-slate-800" },
  { name: "Ghost", className: "bg-transparent hover:bg-slate-800 text-slate-300" },
  { name: "Destructive", className: "bg-rose-500 hover:bg-rose-600 text-white" },
  { name: "Success", className: "bg-emerald-500 hover:bg-emerald-600 text-white" },
];

const badgeVariants = [
  { name: "Default", className: "bg-slate-700 text-slate-300" },
  { name: "Info", className: "bg-sky-500/20 text-sky-400 border-sky-500/30" },
  { name: "Success", className: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  { name: "Warning", className: "bg-amber-500/20 text-amber-400 border-amber-500/30" },
  { name: "Error", className: "bg-rose-500/20 text-rose-400 border-rose-500/30" },
];

const sizeVariants = ["xs", "sm", "md", "lg", "xl"];

export function AtomVariants() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-900 rounded-2xl border border-slate-800 p-6"
    >
      <h3 className="text-white font-semibold text-lg mb-6">Variant System</h3>
      
      <div className="space-y-8">
        <div>
          <h4 className="text-slate-400 text-sm mb-3">Button Variants</h4>
          <div className="flex flex-wrap gap-3">
            {buttonVariants.map((variant) => (
              <Button key={variant.name} className={variant.className}>
                {variant.name}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-slate-400 text-sm mb-3">Size Variants</h4>
          <div className="flex items-end gap-3">
            {sizeVariants.map((size) => (
              <Button
                key={size}
                className={`bg-violet-500 hover:bg-violet-600 text-white ${
                  size === "xs" ? "text-xs px-2 py-1" :
                  size === "sm" ? "text-sm px-3 py-1.5" :
                  size === "md" ? "text-sm px-4 py-2" :
                  size === "lg" ? "text-base px-5 py-2.5" :
                  "text-lg px-6 py-3"
                }`}
              >
                {size.toUpperCase()}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-slate-400 text-sm mb-3">Badge Variants</h4>
          <div className="flex flex-wrap gap-3">
            {badgeVariants.map((variant) => (
              <Badge key={variant.name} className={variant.className}>
                {variant.name}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-slate-400 text-sm mb-3">State Variants</h4>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-violet-500 text-white">Default</Button>
            <Button className="bg-violet-500 text-white opacity-50 cursor-not-allowed">Disabled</Button>
            <Button className="bg-violet-500 text-white ring-2 ring-violet-500 ring-offset-2 ring-offset-slate-900">
              Focused
            </Button>
            <Button className="bg-violet-600 text-white">Hovered</Button>
            <Button className="bg-violet-700 text-white scale-95">Pressed</Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}