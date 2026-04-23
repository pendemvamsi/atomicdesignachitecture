import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, User, Search, Home, Settings, Mail, Star, Heart, ShoppingCart, Plus, Check, Minus } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
const organisms = [
    {
        id: "navbar",
        name: "Navbar",
        description: "Main navigation with logo, links, and actions",
        category: "Navigation",
    },
    {
        id: "sidebar-nav",
        name: "Sidebar Navigation",
        description: "Vertical navigation menu",
        category: "Navigation",
    },
    {
        id: "product-card",
        name: "Product Card",
        description: "E-commerce product display",
        category: "E-commerce",
    },
    {
        id: "cart-item",
        name: "Cart Item",
        description: "Shopping cart line item",
        category: "E-commerce",
    },
    {
        id: "review-card",
        name: "Review Card",
        description: "User review with rating",
        category: "Social",
    },
    {
        id: "stats-card",
        name: "Stats Card",
        description: "Dashboard metric display",
        category: "Dashboard",
    },
    {
        id: "notification-panel",
        name: "Notification Panel",
        description: "List of user notifications",
        category: "Feedback",
    },
    {
        id: "user-card",
        name: "User Card",
        description: "User profile card",
        category: "Social",
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
export function OrganismSection() {
    const [selectedOrganism, setSelectedOrganism] = useState(null);
    const renderOrganismDemo = () => {
        switch (selectedOrganism) {
            case "navbar":
                return (_jsx("div", { className: "bg-slate-800 rounded-xl overflow-hidden", children: _jsxs("div", { className: "flex items-center justify-between px-4 py-3 bg-slate-900", children: [_jsxs("div", { className: "flex items-center gap-6", children: [_jsx("div", { className: "w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold text-sm", children: "L" }), _jsx("nav", { className: "hidden md:flex items-center gap-4", children: ["Home", "Products", "About", "Contact"].map((item) => (_jsx("a", { href: "#", className: `text-sm ${item === "Home" ? "text-emerald-400" : "text-slate-400 hover:text-white"}`, children: item }, item))) })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("button", { className: "p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800", children: _jsx(Search, { size: 18 }) }), _jsxs("button", { className: "relative p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800", children: [_jsx(Bell, { size: 18 }), _jsx("span", { className: "absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" })] }), _jsx("div", { className: "w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-medium", children: "JD" })] })] }) }));
            case "sidebar-nav":
                return (_jsxs("div", { className: "bg-slate-800 rounded-xl overflow-hidden w-48", children: [_jsx("div", { className: "p-3 border-b border-slate-700", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold text-sm", children: "L" }), _jsx("span", { className: "text-white font-medium", children: "Dashboard" })] }) }), _jsx("nav", { className: "p-2 space-y-1", children: [
                                { icon: Home, label: "Overview", active: true },
                                { icon: Mail, label: "Messages", badge: "3" },
                                { icon: User, label: "Profile" },
                                { icon: Settings, label: "Settings" },
                            ].map((item) => {
                                const Icon = item.icon;
                                return (_jsxs("button", { className: `w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${item.active
                                        ? "bg-emerald-500/20 text-emerald-400"
                                        : "text-slate-400 hover:bg-slate-700 hover:text-white"}`, children: [_jsx(Icon, { size: 16 }), _jsx("span", { children: item.label }), item.badge && (_jsx("span", { className: "ml-auto bg-rose-500 text-white text-xs px-1.5 py-0.5 rounded-full", children: item.badge }))] }, item.label));
                            }) })] }));
            case "product-card":
                return (_jsxs("div", { className: "grid grid-cols-2 gap-4 max-w-md", children: [_jsxs("div", { className: "bg-slate-800 rounded-xl overflow-hidden border border-slate-700", children: [_jsx("div", { className: "aspect-square bg-gradient-to-br from-violet-500/20 to-purple-500/20 relative", children: _jsx("button", { className: "absolute top-2 right-2 p-1.5 rounded-full bg-slate-900/80 text-slate-400 hover:text-rose-400", children: _jsx(Heart, { size: 16 }) }) }), _jsxs("div", { className: "p-3", children: [_jsx("h4", { className: "text-white font-medium text-sm mb-1", children: "Product Name" }), _jsxs("div", { className: "flex items-center gap-1 mb-2", children: [[1, 2, 3, 4, 5].map((star) => (_jsx(Star, { size: 12, className: star <= 4 ? "text-amber-400 fill-amber-400" : "text-slate-600" }, star))), _jsx("span", { className: "text-slate-500 text-xs ml-1", children: "(42)" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-emerald-400 font-bold", children: "$99.00" }), _jsx(Button, { className: "bg-emerald-500 text-white text-xs h-7 px-2", children: "Add" })] })] })] }), _jsxs("div", { className: "bg-slate-800 rounded-xl overflow-hidden border border-slate-700", children: [_jsxs("div", { className: "aspect-square bg-gradient-to-br from-amber-500/20 to-orange-500/20 relative", children: [_jsx("button", { className: "absolute top-2 right-2 p-1.5 rounded-full bg-slate-900/80 text-rose-400", children: _jsx(Heart, { className: "fill-current", size: 16 }) }), _jsx(Badge, { className: "absolute top-2 left-2 bg-rose-500 text-white text-xs", children: "Sale" })] }), _jsxs("div", { className: "p-3", children: [_jsx("h4", { className: "text-white font-medium text-sm mb-1", children: "Another Product" }), _jsxs("div", { className: "flex items-center gap-1 mb-2", children: [[1, 2, 3, 4, 5].map((star) => (_jsx(Star, { size: 12, className: star <= 5 ? "text-amber-400 fill-amber-400" : "text-slate-600" }, star))), _jsx("span", { className: "text-slate-500 text-xs ml-1", children: "(128)" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("span", { className: "text-slate-500 text-xs line-through", children: "$149.00" }), _jsx("span", { className: "text-emerald-400 font-bold ml-1", children: "$79.00" })] }), _jsx(Button, { className: "bg-emerald-500 text-white text-xs h-7 px-2", children: "Add" })] })] })] })] }));
            case "cart-item":
                return (_jsxs("div", { className: "space-y-3 max-w-md", children: [_jsxs("div", { className: "bg-slate-800 rounded-xl p-4 flex items-center gap-4 border border-slate-700", children: [_jsx("div", { className: "w-16 h-16 rounded-lg bg-gradient-to-br from-sky-500/20 to-cyan-500/20" }), _jsxs("div", { className: "flex-1", children: [_jsx("h4", { className: "text-white font-medium text-sm", children: "Product Name" }), _jsx("p", { className: "text-slate-500 text-xs", children: "Size: M | Color: Blue" }), _jsxs("div", { className: "flex items-center gap-2 mt-2", children: [_jsx("button", { className: "w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white", children: _jsx(Minus, { size: 12 }) }), _jsx("span", { className: "text-white text-sm", children: "2" }), _jsx("button", { className: "w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white", children: _jsx(Plus, { size: 12 }) })] })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-white font-bold", children: "$198.00" }), _jsx("button", { className: "text-slate-500 hover:text-rose-400 text-xs mt-1", children: "Remove" })] })] }), _jsxs("div", { className: "bg-slate-800 rounded-xl p-4 flex items-center gap-4 border border-slate-700", children: [_jsx("div", { className: "w-16 h-16 rounded-lg bg-gradient-to-br from-rose-500/20 to-pink-500/20" }), _jsxs("div", { className: "flex-1", children: [_jsx("h4", { className: "text-white font-medium text-sm", children: "Another Item" }), _jsx("p", { className: "text-slate-500 text-xs", children: "Size: L | Color: Red" }), _jsxs("div", { className: "flex items-center gap-2 mt-2", children: [_jsx("button", { className: "w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white", children: _jsx(Minus, { size: 12 }) }), _jsx("span", { className: "text-white text-sm", children: "1" }), _jsx("button", { className: "w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white", children: _jsx(Plus, { size: 12 }) })] })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-white font-bold", children: "$49.00" }), _jsx("button", { className: "text-slate-500 hover:text-rose-400 text-xs mt-1", children: "Remove" })] })] })] }));
            case "review-card":
                return (_jsx("div", { className: "space-y-4 max-w-md", children: _jsxs("div", { className: "bg-slate-800 rounded-xl p-4 border border-slate-700", children: [_jsxs("div", { className: "flex items-start gap-3 mb-3", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium", children: "JD" }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h4", { className: "text-white font-medium text-sm", children: "John Doe" }), _jsx("span", { className: "text-slate-500 text-xs", children: "2 days ago" })] }), _jsx("div", { className: "flex items-center gap-1 mt-1", children: [1, 2, 3, 4, 5].map((star) => (_jsx(Star, { size: 12, className: star <= 5 ? "text-amber-400 fill-amber-400" : "text-slate-600" }, star))) })] })] }), _jsx("p", { className: "text-slate-300 text-sm", children: "Great product! Exactly what I was looking for. The quality is amazing and shipping was fast." }), _jsxs("div", { className: "flex items-center gap-4 mt-3 pt-3 border-t border-slate-700", children: [_jsxs("button", { className: "flex items-center gap-1 text-slate-500 hover:text-white text-xs", children: [_jsx(Heart, { size: 14 }), " Helpful (12)"] }), _jsx("button", { className: "text-slate-500 hover:text-white text-xs", children: "Reply" })] })] }) }));
            case "stats-card":
                return (_jsxs("div", { className: "grid grid-cols-3 gap-4 max-w-lg", children: [_jsxs("div", { className: "bg-slate-800 rounded-xl p-4 border border-slate-700", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("div", { className: "p-2 rounded-lg bg-emerald-500/20", children: _jsx(User, { className: "text-emerald-400", size: 18 }) }), _jsx("span", { className: "text-emerald-400 text-xs", children: "+12%" })] }), _jsx("p", { className: "text-white text-2xl font-bold", children: "1,234" }), _jsx("p", { className: "text-slate-500 text-xs", children: "Total Users" })] }), _jsxs("div", { className: "bg-slate-800 rounded-xl p-4 border border-slate-700", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("div", { className: "p-2 rounded-lg bg-amber-500/20", children: _jsx(ShoppingCart, { className: "text-amber-400", size: 18 }) }), _jsx("span", { className: "text-amber-400 text-xs", children: "+8%" })] }), _jsx("p", { className: "text-white text-2xl font-bold", children: "567" }), _jsx("p", { className: "text-slate-500 text-xs", children: "Orders" })] }), _jsxs("div", { className: "bg-slate-800 rounded-xl p-4 border border-slate-700", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("div", { className: "p-2 rounded-lg bg-sky-500/20", children: _jsx(Mail, { className: "text-sky-400", size: 18 }) }), _jsx("span", { className: "text-rose-400 text-xs", children: "-3%" })] }), _jsx("p", { className: "text-white text-2xl font-bold", children: "$12K" }), _jsx("p", { className: "text-slate-500 text-xs", children: "Revenue" })] })] }));
            case "notification-panel":
                return (_jsxs("div", { className: "bg-slate-800 rounded-xl overflow-hidden w-80 border border-slate-700", children: [_jsxs("div", { className: "p-3 border-b border-slate-700 flex items-center justify-between", children: [_jsx("h4", { className: "text-white font-medium text-sm", children: "Notifications" }), _jsx(Badge, { className: "bg-rose-500 text-white text-xs", children: "3 new" })] }), _jsx("div", { className: "max-h-48 overflow-y-auto", children: [
                                { icon: Mail, title: "New message", desc: "John sent you a message", time: "2m", unread: true },
                                { icon: Heart, title: "New like", desc: "Sarah liked your post", time: "1h", unread: true },
                                { icon: Check, title: "Order shipped", desc: "Your order is on the way", time: "3h", unread: false },
                            ].map((notif, i) => {
                                const Icon = notif.icon;
                                return (_jsxs("div", { className: `p-3 flex items-start gap-3 border-b border-slate-700 last:border-0 ${notif.unread ? "bg-slate-700/50" : ""}`, children: [_jsx("div", { className: `p-2 rounded-lg ${notif.unread ? "bg-emerald-500/20" : "bg-slate-700"}`, children: _jsx(Icon, { size: 14, className: notif.unread ? "text-emerald-400" : "text-slate-400" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "text-white text-sm font-medium", children: notif.title }), _jsx("p", { className: "text-slate-500 text-xs", children: notif.desc })] }), _jsx("span", { className: "text-slate-500 text-xs", children: notif.time })] }, i));
                            }) }), _jsx("div", { className: "p-2 border-t border-slate-700", children: _jsx("button", { className: "w-full text-center text-emerald-400 text-xs hover:underline", children: "View all notifications" }) })] }));
            case "user-card":
                return (_jsxs("div", { className: "bg-slate-800 rounded-xl overflow-hidden w-64 border border-slate-700", children: [_jsx("div", { className: "h-16 bg-gradient-to-r from-emerald-500/30 to-teal-500/30" }), _jsxs("div", { className: "p-4 -mt-8", children: [_jsx("div", { className: "w-16 h-16 rounded-full bg-emerald-500 border-4 border-slate-800 flex items-center justify-center text-white text-xl font-bold mb-3", children: "JD" }), _jsx("h4", { className: "text-white font-semibold", children: "John Doe" }), _jsx("p", { className: "text-slate-500 text-sm mb-3", children: "Product Designer" }), _jsxs("div", { className: "flex items-center gap-4 text-center mb-3", children: [_jsxs("div", { children: [_jsx("p", { className: "text-white font-bold", children: "248" }), _jsx("p", { className: "text-slate-500 text-xs", children: "Posts" })] }), _jsxs("div", { children: [_jsx("p", { className: "text-white font-bold", children: "12.4K" }), _jsx("p", { className: "text-slate-500 text-xs", children: "Followers" })] }), _jsxs("div", { children: [_jsx("p", { className: "text-white font-bold", children: "534" }), _jsx("p", { className: "text-slate-500 text-xs", children: "Following" })] })] }), _jsx(Button, { className: "w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm", children: "Follow" })] })] }));
            default:
                return _jsx("p", { className: "text-slate-400", children: "Select an organism to see its demo" });
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs("h1", { className: "text-3xl font-bold text-white mb-2", children: ["Organisms", _jsx("span", { className: "text-emerald-500 ml-2", children: "~100" })] }), _jsx("p", { className: "text-slate-400", children: "Complex UI sections with real business logic and use-cases." })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx("span", { className: "px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30", children: "Business Logic" }), _jsx("span", { className: "px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700", children: "Feature-Level" })] })] }), _jsx(motion.div, { variants: containerVariants, initial: "hidden", animate: "visible", className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: organisms.map((organism) => (_jsxs(motion.div, { variants: itemVariants, whileHover: { scale: 1.02, y: -4 }, onClick: () => setSelectedOrganism(selectedOrganism === organism.id ? null : organism.id), className: `p-4 rounded-xl border cursor-pointer transition-all ${selectedOrganism === organism.id
                        ? "bg-emerald-500/10 border-emerald-500/50"
                        : "bg-slate-900 border-slate-800 hover:border-emerald-500/30"}`, children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("h3", { className: "text-white font-medium", children: organism.name }), _jsx(Badge, { className: "bg-slate-800 text-slate-400", children: organism.category })] }), _jsx("p", { className: "text-slate-500 text-sm", children: organism.description })] }, organism.id))) }), selectedOrganism && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "bg-slate-900 rounded-2xl border border-slate-800 p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("h3", { className: "text-white font-semibold text-lg", children: organisms.find((o) => o.id === selectedOrganism)?.name }), _jsx(Badge, { className: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30", children: "Organism" })] }), _jsx("div", { className: "bg-slate-950 rounded-xl p-6 border border-slate-800", children: renderOrganismDemo() }), _jsx("div", { className: "mt-4 p-4 bg-slate-800/50 rounded-xl", children: _jsxs("p", { className: "text-slate-400 text-sm", children: [_jsx("span", { className: "text-emerald-400 font-medium", children: "Golden Rule:" }), " Organisms are feature-level UI sections that contain real business logic and represent complete use-cases."] }) })] }))] }));
}
//# sourceMappingURL=OrganismSection.js.map