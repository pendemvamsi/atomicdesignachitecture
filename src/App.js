import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Box, Atom, LayoutGrid, FileText, Menu, X, ChevronRight, Sparkles } from "lucide-react";
import { AtomSection } from "./components/sections/AtomSection";
import { MoleculeSection } from "./components/sections/MoleculeSection";
import { OrganismSection } from "./components/sections/OrganismSection";
import { TemplateSection } from "./components/sections/TemplateSection";
import { PageSection } from "./components/sections/PageSection";
const layers = [
    {
        id: "atoms",
        name: "Atoms",
        count: "~80",
        icon: Atom,
        color: "rose",
        description: "Basic UI Primitives - Smallest building blocks (no business logic)",
        component: AtomSection
    },
    {
        id: "molecules",
        name: "Molecules",
        count: "~100",
        icon: Box,
        color: "amber",
        description: "Combined Components - Combination of atoms with small logic",
        component: MoleculeSection
    },
    {
        id: "organisms",
        name: "Organisms",
        count: "~100",
        icon: Layers,
        color: "emerald",
        description: "Complex Sections - Full UI sections with business meaning",
        component: OrganismSection
    },
    {
        id: "templates",
        name: "Templates",
        count: "~40",
        icon: LayoutGrid,
        color: "violet",
        description: "Page Layouts - Structure without real data",
        component: TemplateSection
    },
    {
        id: "pages",
        name: "Pages",
        count: "~20",
        icon: FileText,
        color: "sky",
        description: "Final Screens - Real screens with data",
        component: PageSection
    },
];
export default function App() {
    const [activeLayer, setActiveLayer] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const colorClasses = {
        rose: { bg: "bg-rose-500", text: "text-rose-400", border: "border-rose-500", light: "bg-rose-500/10" },
        amber: { bg: "bg-amber-500", text: "text-amber-400", border: "border-amber-500", light: "bg-amber-500/10" },
        emerald: { bg: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500", light: "bg-emerald-500/10" },
        violet: { bg: "bg-violet-500", text: "text-violet-400", border: "border-violet-500", light: "bg-violet-500/10" },
        sky: { bg: "bg-sky-500", text: "text-sky-400", border: "border-sky-500", light: "bg-sky-500/10" },
    };
    const ActiveComponent = activeLayer
        ? layers.find(l => l.id === activeLayer)?.component
        : null;
    return (_jsxs("div", { className: "min-h-screen bg-slate-950 text-white", children: [_jsx("header", { className: "fixed top-0 left-0 right-0 h-16 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 z-50", children: _jsxs("div", { className: "flex items-center justify-between h-full px-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("button", { onClick: () => setSidebarOpen(!sidebarOpen), className: "p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors", children: sidebarOpen ? _jsx(X, { size: 20 }) : _jsx(Menu, { size: 20 }) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-violet-500 flex items-center justify-center", children: _jsx(Sparkles, { size: 16, className: "text-white" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-lg font-bold bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent", children: "Atomic Design System" }), _jsx("p", { className: "text-xs text-slate-500", children: "340+ Components" })] })] })] }), _jsx("div", { className: "flex items-center gap-2", children: _jsx("span", { className: "px-3 py-1.5 rounded-full bg-slate-800 text-slate-400 text-xs border border-slate-700", children: "Atoms \u2192 Molecules \u2192 Organisms \u2192 Templates \u2192 Pages" }) })] }) }), _jsx(AnimatePresence, { mode: "wait", children: sidebarOpen && (_jsxs(motion.aside, { initial: { x: -280, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: -280, opacity: 0 }, transition: { type: "spring", damping: 25, stiffness: 200 }, className: "fixed left-0 top-16 bottom-0 w-64 bg-slate-900 border-r border-slate-800 overflow-y-auto z-40", children: [_jsxs("div", { className: "p-4 space-y-2", children: [_jsx("div", { className: "mb-4 p-3 rounded-xl bg-slate-800/50 border border-slate-700", children: _jsxs("p", { className: "text-slate-400 text-xs leading-relaxed", children: [_jsx("span", { className: "text-white font-medium", children: "Golden Rule:" }), " ", "Atomic design structures UI into atoms, molecules, organisms, templates, and pages to ensure scalability, reusability, and maintainability."] }) }), layers.map((layer, index) => {
                                    const Icon = layer.icon;
                                    const colors = colorClasses[layer.color];
                                    const isActive = activeLayer === layer.id;
                                    return (_jsxs(motion.button, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.05 }, onClick: () => setActiveLayer(isActive ? null : layer.id), className: `w-full p-3 rounded-xl border transition-all flex items-center gap-3 ${isActive
                                            ? `${colors.light} ${colors.border} border-2`
                                            : "bg-slate-800/30 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600"}`, children: [_jsx("div", { className: `w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`, children: _jsx(Icon, { size: 18, className: "text-white" }) }), _jsxs("div", { className: "flex-1 text-left", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: `font-medium ${isActive ? colors.text : "text-white"}`, children: layer.name }), _jsx("span", { className: `text-xs ${colors.text}`, children: layer.count })] }), _jsx("p", { className: "text-slate-500 text-xs mt-0.5 line-clamp-1", children: layer.description.split(" - ")[0] })] }), _jsx(ChevronRight, { size: 16, className: `transition-transform ${isActive ? "rotate-90" : ""} ${isActive ? colors.text : "text-slate-500"}` })] }, layer.id));
                                })] }), _jsxs("div", { className: "p-4 border-t border-slate-800 mt-4", children: [_jsx("div", { className: "grid grid-cols-5 gap-2", children: layers.map((layer) => {
                                        const colors = colorClasses[layer.color];
                                        return (_jsx("div", { className: `aspect-square rounded-lg ${colors.bg} opacity-50` }, layer.id));
                                    }) }), _jsx("p", { className: "text-slate-500 text-xs text-center mt-2", children: "Visual Flow: Small \u2192 Large" })] })] })) }), _jsx("main", { className: `pt-16 min-h-screen transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-0"}`, children: _jsx(AnimatePresence, { mode: "wait", children: ActiveComponent ? (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.2 }, className: "p-6", children: _jsx(ActiveComponent, {}) }, activeLayer)) : (_jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "flex items-center justify-center min-h-[calc(100vh-4rem)] p-6", children: _jsxs("div", { className: "text-center max-w-2xl", children: [_jsx(motion.div, { animate: { rotate: 360 }, transition: { duration: 20, repeat: Infinity, ease: "linear" }, className: "w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-rose-500 via-amber-500 to-violet-500 flex items-center justify-center", children: _jsx(Layers, { size: 40, className: "text-white" }) }), _jsx("h2", { className: "text-3xl font-bold mb-4 bg-gradient-to-r from-rose-400 via-amber-400 to-violet-400 bg-clip-text text-transparent", children: "Atomic Design System" }), _jsx("p", { className: "text-slate-400 mb-8", children: "A comprehensive UI component library built on atomic design principles. Select a layer from the sidebar to explore components." }), _jsx("div", { className: "grid grid-cols-5 gap-4 mb-8", children: layers.map((layer, index) => {
                                        const Icon = layer.icon;
                                        const colors = colorClasses[layer.color];
                                        return (_jsxs(motion.button, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { delay: index * 0.1 }, onClick: () => setActiveLayer(layer.id), className: `p-4 rounded-xl ${colors.light} border ${colors.border}/30 hover:border-${layer.color}-500/60 transition-all group`, children: [_jsx(Icon, { size: 24, className: `mx-auto mb-2 ${colors.text}` }), _jsx("p", { className: `font-medium ${colors.text}`, children: layer.name }), _jsx("p", { className: "text-slate-500 text-xs", children: layer.count })] }, layer.id));
                                    }) }), _jsx("div", { className: "p-4 rounded-xl bg-slate-800/50 border border-slate-700", children: _jsxs("p", { className: "text-slate-300 text-sm", children: [_jsx("span", { className: "text-white font-semibold", children: "Pro Insight:" }), " You don't build 300 files manually. You build ~40-60 core components + variants + composition."] }) })] }) })) }) })] }));
}
//# sourceMappingURL=App.js.map