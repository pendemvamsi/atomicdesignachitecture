import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Search, Bell, Settings, Moon, Sun } from "lucide-react";
import { useState } from "react";
const sectionTitles = {
    atoms: { title: "Atoms", subtitle: "Basic UI Primitives" },
    molecules: { title: "Molecules", subtitle: "Combined Components" },
    organisms: { title: "Organisms", subtitle: "Complex Sections" },
    templates: { title: "Templates", subtitle: "Page Layouts" },
    pages: { title: "Pages", subtitle: "Final Screens" },
};
export function Header({ activeSection }) {
    const [isDark, setIsDark] = useState(true);
    const currentSection = sectionTitles[activeSection] || sectionTitles.atoms;
    return (_jsx(motion.header, { initial: { y: -20, opacity: 0 }, animate: { y: 0, opacity: 1 }, className: "bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-10", children: _jsxs("div", { className: "px-6 py-4 flex items-center justify-between", children: [_jsxs("div", { children: [_jsx(motion.h1, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, className: "text-2xl font-bold text-white", children: currentSection.title }, currentSection.title), _jsx(motion.p, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.1 }, className: "text-slate-400 text-sm", children: currentSection.subtitle }, currentSection.subtitle)] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-500", size: 16 }), _jsx("input", { type: "text", placeholder: "Search components...", className: "bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-slate-600 w-64" })] }), _jsxs("button", { className: "relative p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors", children: [_jsx(Bell, { size: 18 }), _jsx("span", { className: "absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" })] }), _jsx("button", { className: "p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors", children: _jsx(Settings, { size: 18 }) }), _jsx("button", { onClick: () => setIsDark(!isDark), className: "p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors", children: isDark ? _jsx(Sun, { size: 18 }) : _jsx(Moon, { size: 18 }) }), _jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium", children: "JD" })] })] }) }));
}
//# sourceMappingURL=Header.js.map