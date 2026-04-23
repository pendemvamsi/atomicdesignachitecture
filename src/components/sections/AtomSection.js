import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Settings, Search, Menu, Plus, X, } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
const atomCategories = [
    {
        name: "Buttons",
        atoms: [
            { id: "button-primary", name: "Primary Button", description: "Main CTA button" },
            { id: "button-secondary", name: "Secondary Button", description: "Secondary action" },
            { id: "button-ghost", name: "Ghost Button", description: "Subtle action" },
            { id: "button-icon", name: "Icon Button", description: "Icon-only action" },
            { id: "button-pill", name: "Pill Button", description: "Rounded button" },
        ],
    },
    {
        name: "Inputs",
        atoms: [
            { id: "input-text", name: "Text Input", description: "Basic text field" },
            { id: "input-password", name: "Password Input", description: "Secure text field" },
            { id: "input-search", name: "Search Input", description: "Search field" },
            { id: "input-textarea", name: "Textarea", description: "Multi-line input" },
        ],
    },
    {
        name: "Badges & Tags",
        atoms: [
            { id: "badge-default", name: "Badge", description: "Status indicator" },
            { id: "badge-success", name: "Success Badge", description: "Positive status" },
            { id: "badge-warning", name: "Warning Badge", description: "Caution status" },
            { id: "badge-error", name: "Error Badge", description: "Negative status" },
            { id: "tag", name: "Tag", description: "Removable label" },
            { id: "chip", name: "Chip", description: "Clickable filter" },
        ],
    },
    {
        name: "Avatars",
        atoms: [
            { id: "avatar-sm", name: "Avatar Small", description: "24px avatar" },
            { id: "avatar-md", name: "Avatar Medium", description: "40px avatar" },
            { id: "avatar-lg", name: "Avatar Large", description: "56px avatar" },
            { id: "avatar-group", name: "Avatar Group", description: "Multiple avatars" },
        ],
    },
    {
        name: "Indicators",
        atoms: [
            { id: "spinner", name: "Spinner", description: "Loading indicator" },
            { id: "progress-bar", name: "Progress Bar", description: "Linear progress" },
            { id: "progress-circle", name: "Progress Circle", description: "Circular progress" },
            { id: "skeleton", name: "Skeleton", description: "Loading placeholder" },
            { id: "status-dot", name: "Status Dot", description: "Online/offline" },
        ],
    },
    {
        name: "Typography",
        atoms: [
            { id: "heading", name: "Heading", description: "Page titles" },
            { id: "text", name: "Text", description: "Body content" },
            { id: "caption", name: "Caption", description: "Small text" },
            { id: "code", name: "Code", description: "Monospace text" },
        ],
    },
    {
        name: "Dividers",
        atoms: [
            { id: "divider-h", name: "Horizontal Divider", description: "Section separator" },
            { id: "divider-v", name: "Vertical Divider", description: "Column separator" },
        ],
    },
];
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.03 },
    },
};
const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};
export function AtomSection() {
    const [selectedAtom, setSelectedAtom] = useState(null);
    const renderAtomDemo = () => {
        switch (selectedAtom) {
            case "button-primary":
                return (_jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx(Button, { className: "bg-rose-500 hover:bg-rose-600 text-white", children: "Primary" }), _jsx(Button, { className: "bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 text-lg", children: "Large Primary" }), _jsx(Button, { className: "bg-rose-500 hover:bg-rose-600 text-white", disabled: true, children: "Disabled" })] }));
            case "button-secondary":
                return (_jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx(Button, { variant: "outline", className: "border-slate-600 text-slate-300 hover:bg-slate-800", children: "Secondary" }), _jsx(Button, { variant: "outline", className: "border-rose-500 text-rose-400 hover:bg-rose-500/10", children: "Outline" }), _jsx(Button, { variant: "outline", className: "border-slate-600 text-slate-500", disabled: true, children: "Disabled" })] }));
            case "button-ghost":
                return (_jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx(Button, { variant: "ghost", className: "text-slate-300 hover:bg-slate-800", children: "Ghost" }), _jsx(Button, { variant: "ghost", className: "text-rose-400 hover:bg-rose-500/10", children: "Ghost Rose" }), _jsx(Button, { variant: "ghost", className: "text-slate-500", disabled: true, children: "Disabled" })] }));
            case "button-icon":
                return (_jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx("button", { className: "p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700", children: _jsx(Heart, { size: 20 }) }), _jsx("button", { className: "p-2 rounded-full bg-rose-500 text-white hover:bg-rose-600", children: _jsx(Plus, { size: 20 }) }), _jsx("button", { className: "p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700", children: _jsx(Settings, { size: 20 }) }), _jsx("button", { className: "p-2 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600", children: _jsx(Menu, { size: 20 }) })] }));
            case "button-pill":
                return (_jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx(Button, { className: "rounded-full bg-rose-500 hover:bg-rose-600 text-white px-6", children: "Pill Button" }), _jsx(Button, { className: "rounded-full border border-slate-600 text-slate-300 hover:bg-slate-800 px-6", children: "Outline Pill" }), _jsx(Button, { className: "rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white px-6", children: "Gradient Pill" })] }));
            case "input-text":
                return (_jsxs("div", { className: "space-y-4 max-w-sm", children: [_jsx(Input, { placeholder: "Enter text...", className: "bg-slate-800 border-slate-700 text-white" }), _jsx(Input, { placeholder: "With label", className: "bg-slate-800 border-slate-700 text-white" }), _jsx(Input, { placeholder: "Error state", className: "bg-slate-800 border-rose-500 text-white" }), _jsx(Input, { placeholder: "Disabled", disabled: true, className: "bg-slate-800 border-slate-700 text-slate-500" })] }));
            case "input-password":
                return (_jsxs("div", { className: "space-y-4 max-w-sm", children: [_jsx(Input, { type: "password", placeholder: "Password", className: "bg-slate-800 border-slate-700 text-white" }), _jsx(Input, { type: "password", placeholder: "Confirm Password", className: "bg-slate-800 border-slate-700 text-white" })] }));
            case "input-search":
                return (_jsx("div", { className: "space-y-4 max-w-sm", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-500", size: 18 }), _jsx(Input, { placeholder: "Search...", className: "pl-10 bg-slate-800 border-slate-700 text-white" })] }) }));
            case "input-textarea":
                return (_jsx("div", { className: "space-y-4 max-w-sm", children: _jsx("textarea", { placeholder: "Enter your message...", className: "w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-slate-600 min-h-24" }) }));
            case "badge-default":
                return (_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Badge, { className: "bg-slate-700 text-slate-300", children: "Default" }), _jsx(Badge, { className: "bg-slate-600 text-slate-200", children: "Badge" }), _jsx(Badge, { className: "bg-slate-800 text-slate-400 border border-slate-700", children: "Outlined" })] }));
            case "badge-success":
                return (_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Badge, { className: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30", children: "Success" }), _jsx(Badge, { className: "bg-emerald-500 text-white", children: "Active" }), _jsx(Badge, { className: "bg-emerald-500/10 text-emerald-400", children: "Verified" })] }));
            case "badge-warning":
                return (_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Badge, { className: "bg-amber-500/20 text-amber-400 border border-amber-500/30", children: "Warning" }), _jsx(Badge, { className: "bg-amber-500 text-white", children: "Pending" }), _jsx(Badge, { className: "bg-amber-500/10 text-amber-400", children: "Review" })] }));
            case "badge-error":
                return (_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Badge, { className: "bg-rose-500/20 text-rose-400 border border-rose-500/30", children: "Error" }), _jsx(Badge, { className: "bg-rose-500 text-white", children: "Failed" }), _jsx(Badge, { className: "bg-rose-500/10 text-rose-400", children: "Rejected" })] }));
            case "tag":
                return (_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsxs("span", { className: "inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm", children: ["Tag ", _jsx("button", { className: "hover:text-white", children: _jsx(X, { size: 14 }) })] }), _jsxs("span", { className: "inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-sm", children: ["React ", _jsx("button", { className: "hover:text-white", children: _jsx(X, { size: 14 }) })] }), _jsxs("span", { className: "inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm", children: ["TypeScript ", _jsx("button", { className: "hover:text-white", children: _jsx(X, { size: 14 }) })] })] }));
            case "chip":
                return (_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx("button", { className: "px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-sm hover:bg-slate-700 hover:text-white", children: "Filter" }), _jsx("button", { className: "px-3 py-1 rounded-full bg-rose-500 text-white text-sm", children: "Selected" }), _jsx("button", { className: "px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-sm hover:border-rose-500 hover:text-rose-400", children: "Outline" })] }));
            case "avatar-sm":
                return (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-white text-xs", children: "A" }), _jsx("div", { className: "w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs", children: "B" }), _jsx("div", { className: "w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs", children: "C" }), _jsx("div", { className: "w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 text-xs", children: "?" })] }));
            case "avatar-md":
                return (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white font-medium", children: "JD" }), _jsx("div", { className: "w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-medium", children: "AB" }), _jsx("div", { className: "w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium", children: "CD" }), _jsx("div", { className: "w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-400", children: "?" })] }));
            case "avatar-lg":
                return (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-14 h-14 rounded-full bg-rose-500 flex items-center justify-center text-white text-lg font-medium", children: "JD" }), _jsx("div", { className: "w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-white text-lg font-medium", children: "AB" }), _jsx("div", { className: "w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white text-lg font-medium", children: "CD" })] }));
            case "avatar-group":
                return (_jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("div", { className: "flex -space-x-2", children: [_jsx("div", { className: "w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white text-xs border-2 border-slate-900", children: "A" }), _jsx("div", { className: "w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs border-2 border-slate-900", children: "B" }), _jsx("div", { className: "w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs border-2 border-slate-900", children: "C" }), _jsx("div", { className: "w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 text-xs border-2 border-slate-900", children: "+5" })] }), _jsxs("div", { className: "flex -space-x-3", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center text-white text-sm border-2 border-slate-900", children: "X" }), _jsx("div", { className: "w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white text-sm border-2 border-slate-900", children: "Y" }), _jsx("div", { className: "w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm border-2 border-slate-900", children: "Z" })] })] }));
            case "spinner":
                return (_jsxs("div", { className: "flex items-center gap-6", children: [_jsx("div", { className: "w-5 h-5 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" }), _jsx("div", { className: "w-8 h-8 border-3 border-amber-500 border-t-transparent rounded-full animate-spin" }), _jsx("div", { className: "w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" })] }));
            case "progress-bar":
                return (_jsxs("div", { className: "space-y-4 w-64", children: [_jsx("div", { className: "h-2 bg-slate-800 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full w-1/4 bg-rose-500 rounded-full" }) }), _jsx("div", { className: "h-2 bg-slate-800 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full w-1/2 bg-amber-500 rounded-full" }) }), _jsx("div", { className: "h-2 bg-slate-800 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full w-3/4 bg-emerald-500 rounded-full" }) }), _jsx("div", { className: "h-3 bg-slate-800 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full w-full bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 rounded-full" }) })] }));
            case "progress-circle":
                return (_jsxs("div", { className: "flex items-center gap-6", children: [_jsxs("div", { className: "relative w-12 h-12", children: [_jsxs("svg", { className: "w-12 h-12 -rotate-90", children: [_jsx("circle", { cx: "24", cy: "24", r: "20", stroke: "currentColor", strokeWidth: "4", fill: "none", className: "text-slate-800" }), _jsx("circle", { cx: "24", cy: "24", r: "20", stroke: "currentColor", strokeWidth: "4", fill: "none", className: "text-rose-500", strokeDasharray: "125.6", strokeDashoffset: "94.2" })] }), _jsx("span", { className: "absolute inset-0 flex items-center justify-center text-white text-xs", children: "25%" })] }), _jsxs("div", { className: "relative w-16 h-16", children: [_jsxs("svg", { className: "w-16 h-16 -rotate-90", children: [_jsx("circle", { cx: "32", cy: "32", r: "28", stroke: "currentColor", strokeWidth: "4", fill: "none", className: "text-slate-800" }), _jsx("circle", { cx: "32", cy: "32", r: "28", stroke: "currentColor", strokeWidth: "4", fill: "none", className: "text-emerald-500", strokeDasharray: "175.8", strokeDashoffset: "44" })] }), _jsx("span", { className: "absolute inset-0 flex items-center justify-center text-white text-sm", children: "75%" })] })] }));
            case "skeleton":
                return (_jsxs("div", { className: "space-y-4 w-64", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-slate-800 animate-pulse" }), _jsxs("div", { className: "flex-1 space-y-2", children: [_jsx("div", { className: "h-4 bg-slate-800 rounded animate-pulse w-3/4" }), _jsx("div", { className: "h-3 bg-slate-800 rounded animate-pulse w-1/2" })] })] }), _jsx("div", { className: "h-32 bg-slate-800 rounded-lg animate-pulse" })] }));
            case "status-dot":
                return (_jsxs("div", { className: "flex items-center gap-6", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-emerald-500" }), _jsx("span", { className: "text-slate-400 text-sm", children: "Online" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-amber-500" }), _jsx("span", { className: "text-slate-400 text-sm", children: "Away" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-rose-500" }), _jsx("span", { className: "text-slate-400 text-sm", children: "Offline" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse" }), _jsx("span", { className: "text-slate-400 text-sm", children: "Pulsing" })] })] }));
            case "heading":
                return (_jsxs("div", { className: "space-y-2", children: [_jsx("h1", { className: "text-4xl font-bold text-white", children: "Heading 1" }), _jsx("h2", { className: "text-3xl font-bold text-white", children: "Heading 2" }), _jsx("h3", { className: "text-2xl font-semibold text-white", children: "Heading 3" }), _jsx("h4", { className: "text-xl font-semibold text-white", children: "Heading 4" }), _jsx("h5", { className: "text-lg font-medium text-white", children: "Heading 5" }), _jsx("h6", { className: "text-base font-medium text-white", children: "Heading 6" })] }));
            case "text":
                return (_jsxs("div", { className: "space-y-2 max-w-md", children: [_jsx("p", { className: "text-white", children: "Regular body text in white." }), _jsx("p", { className: "text-slate-300", children: "Lighter text in slate-300." }), _jsx("p", { className: "text-slate-400", children: "Muted text in slate-400." }), _jsx("p", { className: "text-slate-500", children: "Subtle text in slate-500." })] }));
            case "caption":
                return (_jsxs("div", { className: "space-y-2", children: [_jsx("p", { className: "text-slate-400 text-xs", children: "Caption text - small and subtle" }), _jsx("p", { className: "text-slate-500 text-xs uppercase tracking-wide", children: "Uppercase caption" }), _jsx("p", { className: "text-rose-400 text-xs", children: "Error caption text" })] }));
            case "code":
                return (_jsxs("div", { className: "space-y-2", children: [_jsx("code", { className: "px-2 py-1 bg-slate-800 rounded text-rose-400 font-mono text-sm", children: "const x = 42;" }), _jsx("pre", { className: "p-3 bg-slate-800 rounded-lg text-slate-300 font-mono text-sm overflow-x-auto", children: `function hello() {
  return "world";
}` })] }));
            case "divider-h":
                return (_jsxs("div", { className: "space-y-4 w-64", children: [_jsx("p", { className: "text-slate-400 text-sm", children: "Above divider" }), _jsx("hr", { className: "border-slate-700" }), _jsx("p", { className: "text-slate-400 text-sm", children: "Below divider" }), _jsx("hr", { className: "border-slate-600 border-dashed" }), _jsx("p", { className: "text-slate-400 text-sm", children: "Dashed divider" })] }));
            case "divider-v":
                return (_jsxs("div", { className: "flex items-center gap-4 h-8", children: [_jsx("span", { className: "text-slate-400 text-sm", children: "Left" }), _jsx("div", { className: "w-px h-full bg-slate-700" }), _jsx("span", { className: "text-slate-400 text-sm", children: "Center" }), _jsx("div", { className: "w-px h-full bg-slate-700" }), _jsx("span", { className: "text-slate-400 text-sm", children: "Right" })] }));
            default:
                return _jsx("p", { className: "text-slate-400", children: "Select an atom to see its variants" });
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs("h1", { className: "text-3xl font-bold text-white mb-2", children: ["Atoms", _jsx("span", { className: "text-rose-500 ml-2", children: "~80" })] }), _jsx("p", { className: "text-slate-400", children: "Smallest building blocks. No business logic. Pure UI primitives." })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx("span", { className: "px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30", children: "No Logic" }), _jsx("span", { className: "px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700", children: "Primitive" })] })] }), atomCategories.map((category) => (_jsxs(motion.div, { variants: containerVariants, initial: "hidden", animate: "visible", className: "space-y-3", children: [_jsx("h2", { className: "text-lg font-semibold text-slate-300", children: category.name }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3", children: category.atoms.map((atom) => (_jsxs(motion.div, { variants: itemVariants, whileHover: { scale: 1.02, y: -2 }, onClick: () => setSelectedAtom(selectedAtom === atom.id ? null : atom.id), className: `p-3 rounded-xl border cursor-pointer transition-all ${selectedAtom === atom.id
                                ? "bg-rose-500/10 border-rose-500/50"
                                : "bg-slate-900 border-slate-800 hover:border-rose-500/30"}`, children: [_jsx("h3", { className: "text-white font-medium text-sm", children: atom.name }), _jsx("p", { className: "text-slate-500 text-xs mt-1", children: atom.description })] }, atom.id))) })] }, category.name))), selectedAtom && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "bg-slate-900 rounded-2xl border border-slate-800 p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("h3", { className: "text-white font-semibold text-lg", children: atomCategories.flatMap(c => c.atoms).find(a => a.id === selectedAtom)?.name }), _jsx(Badge, { className: "bg-rose-500/20 text-rose-400 border border-rose-500/30", children: "Atom" })] }), _jsx("div", { className: "bg-slate-950 rounded-xl p-6 border border-slate-800", children: renderAtomDemo() }), _jsx("div", { className: "mt-4 p-4 bg-slate-800/50 rounded-xl", children: _jsxs("p", { className: "text-slate-400 text-sm", children: [_jsx("span", { className: "text-rose-400 font-medium", children: "Golden Rule:" }), " Atoms are pure UI primitives with no business logic. They are the smallest building blocks of your design system."] }) })] }))] }));
}
//# sourceMappingURL=AtomSection.js.map