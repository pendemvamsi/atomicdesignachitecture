import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "bg-slate-900 rounded-2xl border border-slate-800 p-6", children: [_jsx("h3", { className: "text-white font-semibold text-lg mb-6", children: "Variant System" }), _jsxs("div", { className: "space-y-8", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-slate-400 text-sm mb-3", children: "Button Variants" }), _jsx("div", { className: "flex flex-wrap gap-3", children: buttonVariants.map((variant) => (_jsx(Button, { className: variant.className, children: variant.name }, variant.name))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-slate-400 text-sm mb-3", children: "Size Variants" }), _jsx("div", { className: "flex items-end gap-3", children: sizeVariants.map((size) => (_jsx(Button, { className: `bg-violet-500 hover:bg-violet-600 text-white ${size === "xs" ? "text-xs px-2 py-1" :
                                        size === "sm" ? "text-sm px-3 py-1.5" :
                                            size === "md" ? "text-sm px-4 py-2" :
                                                size === "lg" ? "text-base px-5 py-2.5" :
                                                    "text-lg px-6 py-3"}`, children: size.toUpperCase() }, size))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-slate-400 text-sm mb-3", children: "Badge Variants" }), _jsx("div", { className: "flex flex-wrap gap-3", children: badgeVariants.map((variant) => (_jsx(Badge, { className: variant.className, children: variant.name }, variant.name))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-slate-400 text-sm mb-3", children: "State Variants" }), _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx(Button, { className: "bg-violet-500 text-white", children: "Default" }), _jsx(Button, { className: "bg-violet-500 text-white opacity-50 cursor-not-allowed", children: "Disabled" }), _jsx(Button, { className: "bg-violet-500 text-white ring-2 ring-violet-500 ring-offset-2 ring-offset-slate-900", children: "Focused" }), _jsx(Button, { className: "bg-violet-600 text-white", children: "Hovered" }), _jsx(Button, { className: "bg-violet-700 text-white scale-95", children: "Pressed" })] })] })] })] }));
}
//# sourceMappingURL=AtomVariants.js.map