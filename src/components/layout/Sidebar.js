import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Layers, Palette, ChevronLeft, ChevronRight, Circle, Box, LayoutGrid, FileText } from "lucide-react";
const sections = [
    { id: "atoms", label: "Atoms", icon: Circle, count: "~80", color: "rose" },
    { id: "molecules", label: "Molecules", icon: Box, count: "~100", color: "amber" },
    { id: "organisms", label: "Organisms", icon: LayoutGrid, count: "~100", color: "emerald" },
    { id: "templates", label: "Templates", icon: FileText, count: "~40", color: "violet" },
    { id: "pages", label: "Pages", icon: Layers, count: "~20", color: "sky" },
];
export function Sidebar({ activeSection, onSectionChange, isCollapsed, onToggle }) {
    return (_jsxs(motion.aside, { initial: { width: 240 }, animate: { width: isCollapsed ? 72 : 240 }, transition: { duration: 0.3, ease: "easeInOut" }, className: "bg-slate-900 border-r border-slate-800 h-screen sticky top-0 flex flex-col", children: [_jsxs("div", { className: "p-4 border-b border-slate-800 flex items-center justify-between", children: [!isCollapsed && (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "flex items-center gap-2", children: [_jsx("div", { className: "w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 via-amber-500 to-emerald-500 flex items-center justify-center", children: _jsx(Palette, { className: "text-white", size: 18 }) }), _jsx("span", { className: "text-white font-bold", children: "Atomic Design" })] })), _jsx("button", { onClick: onToggle, className: "p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors", children: isCollapsed ? _jsx(ChevronRight, { size: 16 }) : _jsx(ChevronLeft, { size: 16 }) })] }), _jsx("nav", { className: "flex-1 p-3 space-y-1", children: sections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    return (_jsxs(motion.button, { onClick: () => onSectionChange(section.id), whileHover: { x: 4 }, whileTap: { scale: 0.98 }, className: `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${isActive
                            ? `bg-${section.color}-500/20 text-${section.color}-400 border border-${section.color}-500/30`
                            : "text-slate-400 hover:bg-slate-800 hover:text-white"}`, children: [_jsx(Icon, { size: 20 }), !isCollapsed && (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "flex items-center justify-between flex-1", children: [_jsx("span", { className: "font-medium text-sm", children: section.label }), _jsx("span", { className: `text-xs px-1.5 py-0.5 rounded-md ${isActive ? `bg-${section.color}-500/30` : "bg-slate-800"}`, children: section.count })] }))] }, section.id));
                }) }), !isCollapsed && (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "p-4 border-t border-slate-800", children: _jsxs("div", { className: "bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-emerald-500/10 rounded-xl p-3 border border-slate-700", children: [_jsx("p", { className: "text-slate-300 text-xs font-medium mb-1", children: "Total Components" }), _jsx("p", { className: "text-white text-2xl font-bold", children: "340+" }), _jsx("p", { className: "text-slate-500 text-xs mt-1", children: "5 layers of abstraction" })] }) }))] }));
}
//# sourceMappingURL=Sidebar.js.map