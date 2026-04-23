import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { Home, ShoppingBag, ShoppingCart, User, Settings, Search, AlertCircle, CheckCircle, FileText } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
const pages = [
    {
        id: "home-page",
        name: "Home Page",
        description: "Landing page with hero, features, and CTA",
        route: "/",
        icon: Home,
    },
    {
        id: "products-page",
        name: "Products Page",
        description: "Product listing with filters and grid",
        route: "/products",
        icon: ShoppingBag,
    },
    {
        id: "product-detail-page",
        name: "Product Detail Page",
        description: "Single product view with gallery and actions",
        route: "/products/:id",
        icon: FileText,
    },
    {
        id: "cart-page",
        name: "Cart Page",
        description: "Shopping cart with items and checkout",
        route: "/cart",
        icon: ShoppingCart,
    },
    {
        id: "checkout-page",
        name: "Checkout Page",
        description: "Multi-step checkout flow",
        route: "/checkout",
        icon: CheckCircle,
    },
    {
        id: "login-page",
        name: "Login Page",
        description: "User authentication form",
        route: "/login",
        icon: User,
    },
    {
        id: "dashboard-page",
        name: "Dashboard Page",
        description: "User dashboard with stats and data",
        route: "/dashboard",
        icon: Settings,
    },
    {
        id: "search-page",
        name: "Search Page",
        description: "Search results with filters",
        route: "/search",
        icon: Search,
    },
    {
        id: "error-page",
        name: "Error Page",
        description: "404 and error states",
        route: "/404",
        icon: AlertCircle,
    },
    {
        id: "order-confirmation-page",
        name: "Order Confirmation",
        description: "Success page after order",
        route: "/order/confirm",
        icon: CheckCircle,
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
export function PageSection() {
    const [selectedPage, setSelectedPage] = useState(null);
    const renderPagePreview = () => {
        switch (selectedPage) {
            case "home-page":
                return (_jsxs("div", { className: "bg-slate-800 rounded-lg overflow-hidden", children: [_jsxs("div", { className: "h-8 bg-slate-700 flex items-center justify-between px-3", children: [_jsx("span", { className: "text-sky-400 font-bold text-xs", children: "Logo" }), _jsx("div", { className: "flex gap-2", children: ["Home", "Products", "About"].map((item) => (_jsx("span", { className: "text-slate-400 text-xs", children: item }, item))) })] }), _jsxs("div", { className: "h-24 bg-gradient-to-r from-sky-500/30 to-cyan-500/30 flex flex-col items-center justify-center", children: [_jsx("span", { className: "text-white font-bold text-sm mb-1", children: "Welcome to Our Store" }), _jsx("span", { className: "text-slate-300 text-xs", children: "Find the best products here" }), _jsx(Button, { className: "mt-2 bg-sky-500 text-white text-xs h-6 px-3", children: "Shop Now" })] }), _jsxs("div", { className: "p-3", children: [_jsx("span", { className: "text-slate-400 text-xs block mb-2", children: "Featured Products" }), _jsx("div", { className: "grid grid-cols-4 gap-2", children: [1, 2, 3, 4].map((i) => (_jsx("div", { className: "aspect-square bg-slate-700 rounded-lg" }, i))) })] })] }));
            case "products-page":
                return (_jsxs("div", { className: "bg-slate-800 rounded-lg overflow-hidden", children: [_jsx("div", { className: "h-8 bg-slate-700 flex items-center px-3", children: _jsx("span", { className: "text-sky-400 font-bold text-xs", children: "Logo" }) }), _jsxs("div", { className: "flex h-40", children: [_jsxs("div", { className: "w-16 bg-slate-700 p-2", children: [_jsx("span", { className: "text-slate-400 text-xs block mb-2", children: "Filters" }), [1, 2, 3].map((i) => (_jsx("div", { className: "h-2 bg-slate-600 rounded mb-1" }, i)))] }), _jsxs("div", { className: "flex-1 p-2", children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("span", { className: "text-slate-400 text-xs", children: "Products" }), _jsx("span", { className: "text-slate-500 text-xs", children: "Sort by: Price" })] }), _jsx("div", { className: "grid grid-cols-3 gap-2", children: [1, 2, 3, 4, 5, 6].map((i) => (_jsx("div", { className: "bg-slate-700 rounded-lg aspect-square" }, i))) })] })] })] }));
            case "product-detail-page":
                return (_jsxs("div", { className: "bg-slate-800 rounded-lg overflow-hidden", children: [_jsx("div", { className: "h-8 bg-slate-700" }), _jsxs("div", { className: "flex h-40", children: [_jsx("div", { className: "w-1/2 p-3", children: _jsx("div", { className: "h-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg flex items-center justify-center", children: _jsx("span", { className: "text-slate-400 text-xs", children: "Product Image" }) }) }), _jsxs("div", { className: "w-1/2 p-3", children: [_jsx("span", { className: "text-white font-medium text-sm block mb-1", children: "Product Name" }), _jsx("span", { className: "text-emerald-400 font-bold text-sm block mb-2", children: "$99.00" }), _jsx("div", { className: "flex gap-1 mb-2", children: [1, 2, 3, 4, 5].map((i) => (_jsx("div", { className: "w-4 h-4 rounded-full bg-slate-600" }, i))) }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { className: "bg-sky-500 text-white text-xs h-6 px-2", children: "Add to Cart" }), _jsx(Button, { className: "bg-slate-700 text-white text-xs h-6 px-2", children: "Buy Now" })] })] })] })] }));
            case "cart-page":
                return (_jsxs("div", { className: "bg-slate-800 rounded-lg overflow-hidden", children: [_jsx("div", { className: "h-8 bg-slate-700 flex items-center px-3", children: _jsx("span", { className: "text-sky-400 font-bold text-xs", children: "Logo" }) }), _jsxs("div", { className: "flex h-40", children: [_jsxs("div", { className: "flex-1 p-3", children: [_jsx("span", { className: "text-white font-medium text-sm block mb-2", children: "Shopping Cart (3)" }), [1, 2, 3].map((i) => (_jsxs("div", { className: "flex items-center gap-2 bg-slate-700 rounded-lg p-2 mb-2", children: [_jsx("div", { className: "w-8 h-8 bg-slate-600 rounded" }), _jsxs("div", { className: "flex-1", children: [_jsxs("span", { className: "text-slate-300 text-xs block", children: ["Item ", i] }), _jsxs("span", { className: "text-emerald-400 text-xs", children: ["$", 10 * i] })] })] }, i)))] }), _jsxs("div", { className: "w-24 bg-slate-700 p-2", children: [_jsx("span", { className: "text-slate-400 text-xs block mb-2", children: "Summary" }), _jsx("div", { className: "text-white text-sm font-bold mb-2", children: "$60.00" }), _jsx(Button, { className: "w-full bg-emerald-500 text-white text-xs h-6", children: "Checkout" })] })] })] }));
            case "checkout-page":
                return (_jsxs("div", { className: "bg-slate-800 rounded-lg overflow-hidden", children: [_jsx("div", { className: "h-8 bg-slate-700" }), _jsxs("div", { className: "p-3", children: [_jsx("div", { className: "flex justify-center gap-1 mb-3", children: ["Cart", "Shipping", "Payment"].map((step, i) => (_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: `w-5 h-5 rounded-full flex items-center justify-center text-xs ${i === 0 ? "bg-emerald-500 text-white" : "bg-slate-700 text-slate-400"}`, children: i + 1 }), i < 2 && _jsx("div", { className: "w-6 h-0.5 bg-slate-600" })] }, step))) }), _jsxs("div", { className: "flex gap-3", children: [_jsxs("div", { className: "flex-1 bg-slate-700 rounded-lg p-3", children: [_jsx("span", { className: "text-slate-400 text-xs block mb-2", children: "Shipping Address" }), _jsxs("div", { className: "space-y-1", children: [_jsx("div", { className: "h-6 bg-slate-600 rounded" }), _jsx("div", { className: "h-6 bg-slate-600 rounded" })] })] }), _jsxs("div", { className: "w-20 bg-slate-700 rounded-lg p-2", children: [_jsx("span", { className: "text-slate-400 text-xs", children: "Order" }), _jsx("div", { className: "text-white text-xs font-bold mt-1", children: "$99.00" })] })] })] })] }));
            case "login-page":
                return (_jsx("div", { className: "bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg overflow-hidden h-48 flex items-center justify-center", children: _jsxs("div", { className: "bg-slate-800 rounded-xl p-4 w-48", children: [_jsx("div", { className: "w-8 h-8 bg-violet-500 rounded-lg mx-auto mb-3" }), _jsx("span", { className: "text-white font-medium text-sm block text-center mb-3", children: "Sign In" }), _jsxs("div", { className: "space-y-2 mb-3", children: [_jsx("div", { className: "h-6 bg-slate-700 rounded" }), _jsx("div", { className: "h-6 bg-slate-700 rounded" })] }), _jsx(Button, { className: "w-full bg-violet-500 text-white text-xs h-6", children: "Sign In" })] }) }));
            case "dashboard-page":
                return (_jsxs("div", { className: "bg-slate-800 rounded-lg overflow-hidden", children: [_jsxs("div", { className: "h-8 bg-slate-700 flex items-center justify-between px-3", children: [_jsx("span", { className: "text-sky-400 font-bold text-xs", children: "Dashboard" }), _jsx("div", { className: "w-5 h-5 bg-slate-600 rounded-full" })] }), _jsxs("div", { className: "flex h-36", children: [_jsx("div", { className: "w-12 bg-slate-700 p-1", children: [1, 2, 3, 4].map((i) => (_jsx("div", { className: "w-full h-6 bg-slate-600 rounded mb-1" }, i))) }), _jsxs("div", { className: "flex-1 p-2", children: [_jsx("div", { className: "grid grid-cols-3 gap-2 mb-2", children: [
                                                { label: "Users", value: "1,234" },
                                                { label: "Orders", value: "567" },
                                                { label: "Revenue", value: "$12K" },
                                            ].map((stat) => (_jsxs("div", { className: "bg-slate-700 rounded-lg p-2", children: [_jsx("span", { className: "text-slate-400 text-xs block", children: stat.label }), _jsx("span", { className: "text-white font-bold text-xs", children: stat.value })] }, stat.label))) }), _jsx("div", { className: "h-16 bg-slate-700 rounded-lg" })] })] })] }));
            case "search-page":
                return (_jsxs("div", { className: "bg-slate-800 rounded-lg overflow-hidden", children: [_jsxs("div", { className: "h-8 bg-slate-700 flex items-center px-3 gap-2", children: [_jsx("span", { className: "text-sky-400 font-bold text-xs", children: "Logo" }), _jsx("div", { className: "flex-1 h-5 bg-slate-600 rounded flex items-center px-2", children: _jsx("span", { className: "text-slate-400 text-xs", children: "Search query..." }) })] }), _jsxs("div", { className: "p-3", children: [_jsx("span", { className: "text-slate-400 text-xs block mb-2", children: "Results for \"query\"" }), _jsx("div", { className: "grid grid-cols-3 gap-2", children: [1, 2, 3, 4, 5, 6].map((i) => (_jsx("div", { className: "bg-slate-700 rounded-lg aspect-video" }, i))) })] })] }));
            case "error-page":
                return (_jsxs("div", { className: "bg-slate-800 rounded-lg overflow-hidden h-48 flex flex-col items-center justify-center", children: [_jsx("span", { className: "text-rose-400 font-bold text-4xl mb-2", children: "404" }), _jsx("span", { className: "text-white font-medium text-sm mb-1", children: "Page Not Found" }), _jsx("span", { className: "text-slate-400 text-xs mb-3", children: "The page you're looking for doesn't exist." }), _jsx(Button, { className: "bg-sky-500 text-white text-xs h-6 px-3", children: "Go Home" })] }));
            case "order-confirmation-page":
                return (_jsxs("div", { className: "bg-slate-800 rounded-lg overflow-hidden h-48 flex flex-col items-center justify-center", children: [_jsx("div", { className: "w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center mb-3", children: _jsx(CheckCircle, { className: "text-white", size: 24 }) }), _jsx("span", { className: "text-white font-bold text-lg mb-1", children: "Order Confirmed!" }), _jsx("span", { className: "text-slate-400 text-xs mb-3", children: "Order #12345 has been placed successfully." }), _jsx(Button, { className: "bg-emerald-500 text-white text-xs h-6 px-3", children: "Track Order" })] }));
            default:
                return _jsx("p", { className: "text-slate-400", children: "Select a page to see its preview" });
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsxs("h1", { className: "text-3xl font-bold text-white mb-2", children: ["Pages", _jsx("span", { className: "text-sky-500 ml-2", children: "~20" })] }), _jsx("p", { className: "text-slate-400", children: "Final screens with real data. Complete user experiences with API integration." })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm", children: [_jsx("span", { className: "px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30", children: "Real Data" }), _jsx("span", { className: "px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700", children: "API Ready" })] })] }), _jsx(motion.div, { variants: containerVariants, initial: "hidden", animate: "visible", className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3", children: pages.map((page) => {
                    const Icon = page.icon;
                    return (_jsxs(motion.div, { variants: itemVariants, whileHover: { scale: 1.02, y: -4 }, onClick: () => setSelectedPage(selectedPage === page.id ? null : page.id), className: `p-4 rounded-xl border cursor-pointer transition-all ${selectedPage === page.id
                            ? "bg-sky-500/10 border-sky-500/50"
                            : "bg-slate-900 border-slate-800 hover:border-sky-500/30"}`, children: [_jsx(Icon, { className: `mb-2 ${selectedPage === page.id ? "text-sky-400" : "text-slate-500"}`, size: 20 }), _jsx("h3", { className: "text-white font-medium text-sm mb-1", children: page.name }), _jsx("p", { className: "text-slate-500 text-xs", children: page.route })] }, page.id));
                }) }), selectedPage && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "bg-slate-900 rounded-2xl border border-slate-800 p-6", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("h3", { className: "text-white font-semibold text-lg", children: pages.find((p) => p.id === selectedPage)?.name }), _jsx(Badge, { className: "bg-sky-500/20 text-sky-400 border border-sky-500/30", children: "Page" })] }), _jsx("div", { className: "bg-slate-950 rounded-xl p-4 border border-slate-800", children: renderPagePreview() }), _jsx("div", { className: "mt-4 p-4 bg-slate-800/50 rounded-xl", children: _jsxs("p", { className: "text-slate-400 text-sm", children: [_jsx("span", { className: "text-sky-400 font-medium", children: "Golden Rule:" }), " Pages contain real data and API integration. They are the final user-facing screens built from Templates, Organisms, Molecules, and Atoms."] }) })] })), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, className: "bg-gradient-to-r from-sky-500/10 to-cyan-500/10 rounded-2xl border border-sky-500/20 p-6", children: [_jsx("h3", { className: "text-white font-semibold text-lg mb-4", children: "Visual Flow Summary" }), _jsx("div", { className: "flex items-center justify-center gap-2 flex-wrap", children: [
                            { name: "Atoms", color: "rose", example: "Button" },
                            { name: "Molecules", color: "amber", example: "SearchBar" },
                            { name: "Organisms", color: "emerald", example: "Navbar" },
                            { name: "Templates", color: "violet", example: "Layout" },
                            { name: "Pages", color: "sky", example: "HomePage" },
                        ].map((layer, i) => (_jsxs("div", { className: "flex items-center", children: [_jsxs("div", { className: `px-3 py-2 rounded-lg bg-${layer.color}-500/20 border border-${layer.color}-500/30`, children: [_jsx("span", { className: `text-${layer.color}-400 font-medium text-sm`, children: layer.name }), _jsx("span", { className: "text-slate-500 text-xs block", children: layer.example })] }), i < 4 && _jsx("span", { className: "text-slate-600 mx-1", children: "\u2192" })] }, layer.name))) })] })] }));
}
//# sourceMappingURL=PageSection.js.map