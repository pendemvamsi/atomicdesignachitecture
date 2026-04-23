import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Lock, Calendar, Upload, Star, ChevronDown, Check, X, Plus, Minus } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
const molecules = [
    {
        id: "form-field",
        name: "Form Field",
        description: "Label + Input + Error state",
        category: "Forms",
    },
    {
        id: "search-bar",
        name: "Search Bar",
        description: "Input + Icon + Clear button",
        category: "Navigation",
    },
    {
        id: "password-field",
        name: "Password Field",
        description: "Input + Toggle visibility",
        category: "Forms",
    },
    {
        id: "file-upload",
        name: "File Upload",
        description: "Dropzone + Preview",
        category: "Forms",
    },
    {
        id: "rating",
        name: "Rating",
        description: "Interactive star rating",
        category: "Feedback",
    },
    {
        id: "quantity-selector",
        name: "Quantity Selector",
        description: "Increment/decrement controls",
        category: "E-commerce",
    },
    {
        id: "date-picker",
        name: "Date Picker",
        description: "Calendar selection input",
        category: "Forms",
    },
    {
        id: "dropdown",
        name: "Dropdown",
        description: "Select with options",
        category: "Navigation",
    },
];
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    },
};
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};
export function MoleculeSection() {
    const [selectedMolecule, setSelectedMolecule] = useState(null);
    const [rating, setRating] = useState(3);
    const [quantity, setQuantity] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const renderMoleculeDemo = () => {
        switch (selectedMolecule) {
            case "form-field":
                return (_jsxs("div", { className: "space-y-4 max-w-sm", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { className: "text-slate-300", children: "Email Address" }), _jsx(Input, { placeholder: "Enter your email", className: "bg-slate-800 border-slate-700 text-white" }), _jsx("p", { className: "text-slate-500 text-xs", children: "We'll never share your email." })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { className: "text-slate-300", children: "Username *" }), _jsx(Input, { placeholder: "Choose a username", className: "bg-slate-800 border-rose-500 text-white" }), _jsx("p", { className: "text-rose-400 text-xs", children: "Username is required" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { className: "text-slate-300", children: "Bio" }), _jsx("textarea", { placeholder: "Tell us about yourself...", className: "w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-slate-600 min-h-20" })] })] }));
            case "search-bar":
                return (_jsxs("div", { className: "space-y-4 max-w-md", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-500", size: 18 }), _jsx("input", { type: "text", placeholder: "Search components...", className: "w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-10 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500" }), _jsx("button", { className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white", children: _jsx(X, { size: 18 }) })] }), _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-500", size: 18 }), _jsx("input", { type: "text", placeholder: "Search with button...", className: "w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-24 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500" }), _jsx("button", { className: "absolute right-2 top-1/2 -translate-y-1/2 bg-amber-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-amber-600", children: "Search" })] })] }));
            case "password-field":
                return (_jsxs("div", { className: "space-y-4 max-w-sm", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { className: "text-slate-300", children: "Password" }), _jsxs("div", { className: "relative", children: [_jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-500", size: 18 }), _jsx("input", { type: showPassword ? "text" : "password", placeholder: "Enter password", className: "w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-12 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500" }), _jsx("button", { onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs", children: showPassword ? "Hide" : "Show" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { className: "text-slate-300", children: "Confirm Password" }), _jsxs("div", { className: "relative", children: [_jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-500", size: 18 }), _jsx("input", { type: "password", placeholder: "Confirm password", className: "w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500" })] })] })] }));
            case "file-upload":
                return (_jsxs("div", { className: "space-y-4 max-w-sm", children: [_jsxs("div", { className: "border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:border-amber-500 transition-colors cursor-pointer", children: [_jsx(Upload, { className: "mx-auto text-slate-500 mb-2", size: 32 }), _jsx("p", { className: "text-white font-medium mb-1", children: "Drop files here" }), _jsx("p", { className: "text-slate-500 text-sm", children: "or click to browse" })] }), _jsxs("div", { className: "bg-slate-800 rounded-lg p-3 flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center", children: _jsx(Upload, { className: "text-slate-400", size: 18 }) }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-white text-sm font-medium", children: "document.pdf" }), _jsx("p", { className: "text-slate-500 text-xs", children: "2.4 MB" })] }), _jsx("button", { className: "text-slate-400 hover:text-rose-400", children: _jsx(X, { size: 18 }) })] })] }));
            case "rating":
                return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center gap-1", children: [[1, 2, 3, 4, 5].map((star) => (_jsx("button", { onClick: () => setRating(star), className: "p-1", children: _jsx(Star, { size: 28, className: `transition-colors ${star <= rating
                                            ? "text-amber-400 fill-amber-400"
                                            : "text-slate-600"}` }) }, star))), _jsxs("span", { className: "ml-2 text-slate-400 text-sm", children: [rating, "/5"] })] }), _jsxs("div", { className: "flex items-center gap-1", children: [[1, 2, 3, 4, 5].map((star) => (_jsx(Star, { size: 20, className: `${star <= 4 ? "text-amber-400 fill-amber-400" : "text-slate-600"}` }, star))), _jsx("span", { className: "ml-2 text-slate-400 text-sm", children: "4.0 (128 reviews)" })] })] }));
            case "quantity-selector":
                return (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("button", { onClick: () => setQuantity(Math.max(1, quantity - 1)), className: "w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors", children: _jsx(Minus, { size: 18 }) }), _jsx("span", { className: "text-white font-medium text-lg w-12 text-center", children: quantity }), _jsx("button", { onClick: () => setQuantity(quantity + 1), className: "w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors", children: _jsx(Plus, { size: 18 }) })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { className: "w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-white", children: _jsx(Minus, { size: 14 }) }), _jsx("span", { className: "text-white font-medium w-8 text-center", children: "1" }), _jsx("button", { className: "w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-white", children: _jsx(Plus, { size: 14 }) })] })] }));
            case "date-picker":
                return (_jsxs("div", { className: "space-y-4 max-w-xs", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { className: "text-slate-300", children: "Select Date" }), _jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", placeholder: "MM/DD/YYYY", className: "w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-10 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500" }), _jsx(Calendar, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-500", size: 18 }), _jsx(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-500", size: 18 })] })] }), _jsxs("div", { className: "bg-slate-800 rounded-xl p-3 border border-slate-700", children: [_jsx("div", { className: "grid grid-cols-7 gap-1 text-center mb-2", children: ["S", "M", "T", "W", "T", "F", "S"].map((day) => (_jsx("span", { className: "text-slate-500 text-xs", children: day }, day))) }), _jsx("div", { className: "grid grid-cols-7 gap-1", children: Array.from({ length: 28 }, (_, i) => (_jsx("button", { className: `w-7 h-7 rounded-lg text-xs ${i === 14
                                            ? "bg-amber-500 text-white"
                                            : "text-slate-400 hover:bg-slate-700"}`, children: i + 1 }, i))) })] })] }));
            case "dropdown":
                return (_jsxs("div", { className: "space-y-4 max-w-xs", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(Label, { className: "text-slate-300", children: "Select Option" }), _jsx("div", { className: "relative", children: _jsxs("button", { className: "w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-left text-white flex items-center justify-between", children: [_jsx("span", { children: "Choose an option" }), _jsx(ChevronDown, { size: 18, className: "text-slate-500" })] }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Label, { className: "text-slate-300", children: "With Selection" }), _jsx("div", { className: "relative", children: _jsxs("button", { className: "w-full bg-slate-800 border border-amber-500 rounded-lg px-4 py-2.5 text-left text-white flex items-center justify-between", children: [_jsx("span", { children: "Option 2" }), _jsx(ChevronDown, { size: 18, className: "text-amber-500" })] }) })] }), _jsx("div", { className: "bg-slate-800 border border-slate-700 rounded-lg overflow-hidden", children: ["Option 1", "Option 2", "Option 3", "Option 4"].map((option, i) => (_jsxs("button", { className: `w-full px-4 py-2.5 text-left text-sm flex items-center justify-between ${i === 1
                                    ? "bg-amber-500/20 text-amber-400"
                                    : "text-slate-300 hover:bg-slate-700"}`, children: [_jsx("span", { children: option }), i === 1 && _jsx(Check, { size: 16 })] }, option))) })] }));
            default:
                return _jsx("p", { className: "text-slate-400", children: "Select a molecule to see its demo" });
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs("h1", { className: "text-3xl font-bold text-white mb-2", children: ["Molecules", _jsx("span", { className: "text-amber-500 ml-2", children: "~100" })] }), _jsx("p", { className: "text-slate-400", children: "Combinations of atoms. Small logic allowed for simple interactions." })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx("span", { className: "px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30", children: "Small Logic" }), _jsx("span", { className: "px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700", children: "Composed" })] })] }), _jsx(motion.div, { variants: containerVariants, initial: "hidden", animate: "visible", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: molecules.map((molecule) => (_jsxs(motion.div, { variants: itemVariants, whileHover: { scale: 1.02, y: -4 }, onClick: () => setSelectedMolecule(selectedMolecule === molecule.id ? null : molecule.id), className: `p-4 rounded-xl border cursor-pointer transition-all ${selectedMolecule === molecule.id
                        ? "bg-amber-500/10 border-amber-500/50"
                        : "bg-slate-900 border-slate-800 hover:border-amber-500/30"}`, children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("h3", { className: "text-white font-medium", children: molecule.name }), _jsx(Badge, { className: "bg-slate-800 text-slate-400", children: molecule.category })] }), _jsx("p", { className: "text-slate-500 text-sm", children: molecule.description })] }, molecule.id))) }), selectedMolecule && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "bg-slate-900 rounded-2xl border border-slate-800 p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("h3", { className: "text-white font-semibold text-lg", children: molecules.find((m) => m.id === selectedMolecule)?.name }), _jsx(Badge, { className: "bg-amber-500/20 text-amber-400 border border-amber-500/30", children: "Molecule" })] }), _jsx("div", { className: "bg-slate-950 rounded-xl p-6 border border-slate-800", children: renderMoleculeDemo() }), _jsx("div", { className: "mt-4 p-4 bg-slate-800/50 rounded-xl", children: _jsxs("p", { className: "text-slate-400 text-sm", children: [_jsx("span", { className: "text-amber-400 font-medium", children: "Golden Rule:" }), " Molecules combine atoms with small amounts of logic. They handle simple state like toggles and selections."] }) })] }))] }));
}
//# sourceMappingURL=MoleculeSection.js.map