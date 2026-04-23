import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "lucide-react";
import { Badge } from "../ui/badge";
const templates = [
    {
        id: "main-layout",
        name: "Main Layout",
        description: "Standard page layout with header, sidebar, and content area",
        structure: ["Header", "Sidebar", "Main Content", "Footer"],
    },
    {
        id: "dashboard-layout",
        name: "Dashboard Layout",
        description: "Analytics dashboard with sidebar navigation",
        structure: ["Sidebar Nav", "Stats Bar", "Charts Grid", "Data Table"],
    },
    {
        id: "auth-layout",
        name: "Auth Layout",
        description: "Authentication pages layout",
        structure: ["Logo", "Form Container", "Background"],
    },
    {
        id: "ecommerce-layout",
        name: "E-commerce Layout",
        description: "Online store page structure",
        structure: ["Header Nav", "Hero", "Product Grid", "Footer"],
    },
    {
        id: "two-column",
        name: "Two Column Layout",
        description: "Split view layout",
        structure: ["Left Panel", "Right Panel"],
    },
    {
        id: "settings-layout",
        name: "Settings Layout",
        description: "Settings page with navigation tabs",
        structure: ["Settings Nav", "Content Area", "Actions Bar"],
    },
    {
        id: "checkout-layout",
        name: "Checkout Layout",
        description: "Multi-step checkout flow",
        structure: ["Progress Bar", "Form Steps", "Order Summary"],
    },
    {
        id: "profile-layout",
        name: "Profile Layout",
        description: "User profile page structure",
        structure: ["Profile Header", "Tabs", "Content Sections"],
    },
];
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};
export function TemplateSection() {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const renderTemplatePreview = () => {
        switch (selectedTemplate) {
            case "main-layout":
                return (_jsxs("div", { className: "flex flex-col h-64 bg-slate-800 rounded-lg overflow-hidden", children: [_jsx("div", { className: "h-10 bg-violet-500/30 flex items-center px-3", children: _jsx("span", { className: "text-violet-300 text-xs", children: "Header" }) }), _jsxs("div", { className: "flex flex-1", children: [_jsxs("div", { className: "w-16 bg-slate-700 p-2", children: [_jsx("span", { className: "text-slate-400 text-xs block mb-2", children: "Nav" }), _jsx("div", { className: "space-y-1", children: [1, 2, 3].map((i) => (_jsx("div", { className: "h-2 bg-slate-600 rounded" }, i))) })] }), _jsxs("div", { className: "flex-1 bg-slate-900 p-3", children: [_jsx("span", { className: "text-slate-400 text-xs block mb-2", children: "Main Content" }), _jsx("div", { className: "grid grid-cols-2 gap-2", children: [1, 2, 3, 4].map((i) => (_jsx("div", { className: "h-12 bg-slate-800 rounded" }, i))) })] })] }), _jsx("div", { className: "h-8 bg-slate-700 flex items-center justify-center", children: _jsx("span", { className: "text-slate-400 text-xs", children: "Footer" }) })] }));
            case "dashboard-layout":
                return (_jsxs("div", { className: "flex h-64 bg-slate-800 rounded-lg overflow-hidden", children: [_jsxs("div", { className: "w-14 bg-slate-700 p-2", children: [_jsx("div", { className: "w-8 h-8 bg-violet-500 rounded-lg mb-3" }), _jsx("div", { className: "space-y-2", children: [1, 2, 3, 4, 5].map((i) => (_jsx("div", { className: "w-8 h-8 bg-slate-600 rounded-lg" }, i))) })] }), _jsxs("div", { className: "flex-1 p-3", children: [_jsx("div", { className: "grid grid-cols-4 gap-2 mb-3", children: [1, 2, 3, 4].map((i) => (_jsx("div", { className: "h-14 bg-slate-700 rounded-lg" }, i))) }), _jsxs("div", { className: "grid grid-cols-2 gap-2", children: [_jsx("div", { className: "h-24 bg-slate-700 rounded-lg" }), _jsx("div", { className: "h-24 bg-slate-700 rounded-lg" })] })] })] }));
            case "auth-layout":
                return (_jsx("div", { className: "h-64 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg flex items-center justify-center", children: _jsxs("div", { className: "bg-slate-800 rounded-xl p-6 w-48", children: [_jsx("div", { className: "w-10 h-10 bg-violet-500 rounded-lg mx-auto mb-4" }), _jsxs("div", { className: "space-y-2 mb-4", children: [_jsx("div", { className: "h-8 bg-slate-700 rounded-lg" }), _jsx("div", { className: "h-8 bg-slate-700 rounded-lg" })] }), _jsx("div", { className: "h-8 bg-violet-500 rounded-lg" })] }) }));
            case "ecommerce-layout":
                return (_jsxs("div", { className: "flex flex-col h-64 bg-slate-800 rounded-lg overflow-hidden", children: [_jsxs("div", { className: "h-10 bg-slate-700 flex items-center justify-between px-3", children: [_jsx("span", { className: "text-slate-400 text-xs", children: "Header Nav" }), _jsxs("div", { className: "flex gap-2", children: [_jsx("div", { className: "w-6 h-6 bg-slate-600 rounded" }), _jsx("div", { className: "w-6 h-6 bg-slate-600 rounded" })] })] }), _jsx("div", { className: "h-16 bg-gradient-to-r from-amber-500/20 to-orange-500/20 flex items-center justify-center", children: _jsx("span", { className: "text-amber-300 text-xs", children: "Hero Banner" }) }), _jsx("div", { className: "flex-1 p-3", children: _jsx("div", { className: "grid grid-cols-4 gap-2", children: [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (_jsx("div", { className: "aspect-square bg-slate-700 rounded-lg" }, i))) }) }), _jsx("div", { className: "h-8 bg-slate-700" })] }));
            case "two-column":
                return (_jsxs("div", { className: "flex h-64 bg-slate-800 rounded-lg overflow-hidden", children: [_jsxs("div", { className: "w-1/2 border-r border-slate-700 p-3", children: [_jsx("span", { className: "text-slate-400 text-xs block mb-2", children: "Left Panel" }), _jsx("div", { className: "space-y-2", children: [1, 2, 3].map((i) => (_jsx("div", { className: "h-8 bg-slate-700 rounded" }, i))) })] }), _jsxs("div", { className: "w-1/2 p-3", children: [_jsx("span", { className: "text-slate-400 text-xs block mb-2", children: "Right Panel" }), _jsx("div", { className: "h-full bg-slate-700 rounded" })] })] }));
            case "settings-layout":
                return (_jsxs("div", { className: "flex h-64 bg-slate-800 rounded-lg overflow-hidden", children: [_jsxs("div", { className: "w-20 bg-slate-700 p-2", children: [_jsx("span", { className: "text-slate-400 text-xs block mb-2", children: "Settings Nav" }), _jsx("div", { className: "space-y-1", children: ["General", "Security", "Notifications", "Privacy"].map((item) => (_jsx("div", { className: "px-2 py-1 bg-slate-600 rounded text-xs text-slate-300", children: item }, item))) })] }), _jsx("div", { className: "flex-1 p-3", children: _jsx("div", { className: "h-full bg-slate-900 rounded-lg p-3", children: _jsx("span", { className: "text-slate-400 text-xs", children: "Content Area" }) }) })] }));
            case "checkout-layout":
                return (_jsxs("div", { className: "h-64 bg-slate-800 rounded-lg overflow-hidden p-3", children: [_jsx("div", { className: "flex justify-center gap-2 mb-4", children: [1, 2, 3].map((i) => (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center text-white text-xs", children: i }), i < 3 && _jsx("div", { className: "w-8 h-0.5 bg-slate-600" })] }, i))) }), _jsxs("div", { className: "flex gap-3 h-48", children: [_jsx("div", { className: "flex-1 bg-slate-700 rounded-lg p-3", children: _jsx("span", { className: "text-slate-400 text-xs", children: "Form Steps" }) }), _jsx("div", { className: "w-32 bg-slate-700 rounded-lg p-3", children: _jsx("span", { className: "text-slate-400 text-xs", children: "Order Summary" }) })] })] }));
            case "profile-layout":
                return (_jsxs("div", { className: "h-64 bg-slate-800 rounded-lg overflow-hidden", children: [_jsx("div", { className: "h-16 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 flex items-center justify-center", children: _jsx("div", { className: "w-12 h-12 rounded-full bg-emerald-500 border-2 border-slate-800" }) }), _jsx("div", { className: "flex justify-center gap-2 p-2 border-b border-slate-700", children: ["Posts", "About", "Friends", "Photos"].map((tab) => (_jsx("div", { className: "px-3 py-1 bg-slate-700 rounded-lg text-xs text-slate-300", children: tab }, tab))) }), _jsx("div", { className: "p-3", children: _jsx("div", { className: "grid grid-cols-3 gap-2", children: [1, 2, 3, 4, 5, 6].map((i) => (_jsx("div", { className: "aspect-square bg-slate-700 rounded-lg" }, i))) }) })] }));
            default:
                return _jsx("p", { className: "text-slate-400", children: "Select a template to see its preview" });
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs("h1", { className: "text-3xl font-bold text-white mb-2", children: ["Templates", _jsx("span", { className: "text-violet-500 ml-2", children: "~40" })] }), _jsx("p", { className: "text-slate-400", children: "Page layouts without real data. Structure-only components that define the skeleton." })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx("span", { className: "px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/30", children: "Layout Only" }), _jsx("span", { className: "px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700", children: "No Data" })] })] }), _jsx(motion.div, { variants: containerVariants, initial: "hidden", animate: "visible", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: templates.map((template) => (_jsxs(motion.div, { variants: itemVariants, whileHover: { scale: 1.02, y: -4 }, onClick: () => setSelectedTemplate(selectedTemplate === template.id ? null : template.id), className: `p-4 rounded-xl border cursor-pointer transition-all ${selectedTemplate === template.id
                        ? "bg-violet-500/10 border-violet-500/50"
                        : "bg-slate-900 border-slate-800 hover:border-violet-500/30"}`, children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Layout, { className: "text-violet-400", size: 16 }), _jsx("h3", { className: "text-white font-medium text-sm", children: template.name })] }), _jsx("p", { className: "text-slate-500 text-xs mb-3", children: template.description }), _jsxs("div", { className: "flex flex-wrap gap-1", children: [template.structure.slice(0, 3).map((s) => (_jsx("span", { className: "text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400", children: s }, s))), template.structure.length > 3 && (_jsxs("span", { className: "text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400", children: ["+", template.structure.length - 3] }))] })] }, template.id))) }), selectedTemplate && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "bg-slate-900 rounded-2xl border border-slate-800 p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("h3", { className: "text-white font-semibold text-lg", children: templates.find((t) => t.id === selectedTemplate)?.name }), _jsx(Badge, { className: "bg-violet-500/20 text-violet-400 border border-violet-500/30", children: "Template" })] }), _jsx("div", { className: "bg-slate-950 rounded-xl p-4 border border-slate-800", children: renderTemplatePreview() }), _jsx("div", { className: "mt-4 p-4 bg-slate-800/50 rounded-xl", children: _jsxs("p", { className: "text-slate-400 text-sm", children: [_jsx("span", { className: "text-violet-400 font-medium", children: "Golden Rule:" }), " Templates define page structure without real data. They are the skeleton that Pages fill with content."] }) })] }))] }));
}
//# sourceMappingURL=TemplateSection.js.map