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
  const [selectedPage, setSelectedPage] = useState<string | null>(null);

  const renderPagePreview = () => {
    switch (selectedPage) {
      case "home-page":
        return (
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-8 bg-slate-700 flex items-center justify-between px-3">
              <span className="text-sky-400 font-bold text-xs">Logo</span>
              <div className="flex gap-2">
                {["Home", "Products", "About"].map((item) => (
                  <span key={item} className="text-slate-400 text-xs">{item}</span>
                ))}
              </div>
            </div>
            <div className="h-24 bg-gradient-to-r from-sky-500/30 to-cyan-500/30 flex flex-col items-center justify-center">
              <span className="text-white font-bold text-sm mb-1">Welcome to Our Store</span>
              <span className="text-slate-300 text-xs">Find the best products here</span>
              <Button className="mt-2 bg-sky-500 text-white text-xs h-6 px-3">Shop Now</Button>
            </div>
            <div className="p-3">
              <span className="text-slate-400 text-xs block mb-2">Featured Products</span>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-slate-700 rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        );
      
      case "products-page":
        return (
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-8 bg-slate-700 flex items-center px-3">
              <span className="text-sky-400 font-bold text-xs">Logo</span>
            </div>
            <div className="flex h-40">
              <div className="w-16 bg-slate-700 p-2">
                <span className="text-slate-400 text-xs block mb-2">Filters</span>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-2 bg-slate-600 rounded mb-1" />
                ))}
              </div>
              <div className="flex-1 p-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-400 text-xs">Products</span>
                  <span className="text-slate-500 text-xs">Sort by: Price</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-slate-700 rounded-lg aspect-square" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case "product-detail-page":
        return (
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-8 bg-slate-700" />
            <div className="flex h-40">
              <div className="w-1/2 p-3">
                <div className="h-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-slate-400 text-xs">Product Image</span>
                </div>
              </div>
              <div className="w-1/2 p-3">
                <span className="text-white font-medium text-sm block mb-1">Product Name</span>
                <span className="text-emerald-400 font-bold text-sm block mb-2">$99.00</span>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-slate-600" />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button className="bg-sky-500 text-white text-xs h-6 px-2">Add to Cart</Button>
                  <Button className="bg-slate-700 text-white text-xs h-6 px-2">Buy Now</Button>
                </div>
              </div>
            </div>
          </div>
        );
      
      case "cart-page":
        return (
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-8 bg-slate-700 flex items-center px-3">
              <span className="text-sky-400 font-bold text-xs">Logo</span>
            </div>
            <div className="flex h-40">
              <div className="flex-1 p-3">
                <span className="text-white font-medium text-sm block mb-2">Shopping Cart (3)</span>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-2 bg-slate-700 rounded-lg p-2 mb-2">
                    <div className="w-8 h-8 bg-slate-600 rounded" />
                    <div className="flex-1">
                      <span className="text-slate-300 text-xs block">Item {i}</span>
                      <span className="text-emerald-400 text-xs">${10 * i}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-24 bg-slate-700 p-2">
                <span className="text-slate-400 text-xs block mb-2">Summary</span>
                <div className="text-white text-sm font-bold mb-2">$60.00</div>
                <Button className="w-full bg-emerald-500 text-white text-xs h-6">Checkout</Button>
              </div>
            </div>
          </div>
        );
      
      case "checkout-page":
        return (
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-8 bg-slate-700" />
            <div className="p-3">
              <div className="flex justify-center gap-1 mb-3">
                {["Cart", "Shipping", "Payment"].map((step, i) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                      i === 0 ? "bg-emerald-500 text-white" : "bg-slate-700 text-slate-400"
                    }`}>
                      {i + 1}
                    </div>
                    {i < 2 && <div className="w-6 h-0.5 bg-slate-600" />}
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <div className="flex-1 bg-slate-700 rounded-lg p-3">
                  <span className="text-slate-400 text-xs block mb-2">Shipping Address</span>
                  <div className="space-y-1">
                    <div className="h-6 bg-slate-600 rounded" />
                    <div className="h-6 bg-slate-600 rounded" />
                  </div>
                </div>
                <div className="w-20 bg-slate-700 rounded-lg p-2">
                  <span className="text-slate-400 text-xs">Order</span>
                  <div className="text-white text-xs font-bold mt-1">$99.00</div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case "login-page":
        return (
          <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg overflow-hidden h-48 flex items-center justify-center">
            <div className="bg-slate-800 rounded-xl p-4 w-48">
              <div className="w-8 h-8 bg-violet-500 rounded-lg mx-auto mb-3" />
              <span className="text-white font-medium text-sm block text-center mb-3">Sign In</span>
              <div className="space-y-2 mb-3">
                <div className="h-6 bg-slate-700 rounded" />
                <div className="h-6 bg-slate-700 rounded" />
              </div>
              <Button className="w-full bg-violet-500 text-white text-xs h-6">Sign In</Button>
            </div>
          </div>
        );
      
      case "dashboard-page":
        return (
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-8 bg-slate-700 flex items-center justify-between px-3">
              <span className="text-sky-400 font-bold text-xs">Dashboard</span>
              <div className="w-5 h-5 bg-slate-600 rounded-full" />
            </div>
            <div className="flex h-36">
              <div className="w-12 bg-slate-700 p-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full h-6 bg-slate-600 rounded mb-1" />
                ))}
              </div>
              <div className="flex-1 p-2">
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {[
                    { label: "Users", value: "1,234" },
                    { label: "Orders", value: "567" },
                    { label: "Revenue", value: "$12K" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-slate-700 rounded-lg p-2">
                      <span className="text-slate-400 text-xs block">{stat.label}</span>
                      <span className="text-white font-bold text-xs">{stat.value}</span>
                    </div>
                  ))}
                </div>
                <div className="h-16 bg-slate-700 rounded-lg" />
              </div>
            </div>
          </div>
        );
      
      case "search-page":
        return (
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-8 bg-slate-700 flex items-center px-3 gap-2">
              <span className="text-sky-400 font-bold text-xs">Logo</span>
              <div className="flex-1 h-5 bg-slate-600 rounded flex items-center px-2">
                <span className="text-slate-400 text-xs">Search query...</span>
              </div>
            </div>
            <div className="p-3">
              <span className="text-slate-400 text-xs block mb-2">Results for "query"</span>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-slate-700 rounded-lg aspect-video" />
                ))}
              </div>
            </div>
          </div>
        );
      
      case "error-page":
        return (
          <div className="bg-slate-800 rounded-lg overflow-hidden h-48 flex flex-col items-center justify-center">
            <span className="text-rose-400 font-bold text-4xl mb-2">404</span>
            <span className="text-white font-medium text-sm mb-1">Page Not Found</span>
            <span className="text-slate-400 text-xs mb-3">The page you're looking for doesn't exist.</span>
            <Button className="bg-sky-500 text-white text-xs h-6 px-3">Go Home</Button>
          </div>
        );
      
      case "order-confirmation-page":
        return (
          <div className="bg-slate-800 rounded-lg overflow-hidden h-48 flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center mb-3">
              <CheckCircle className="text-white" size={24} />
            </div>
            <span className="text-white font-bold text-lg mb-1">Order Confirmed!</span>
            <span className="text-slate-400 text-xs mb-3">Order #12345 has been placed successfully.</span>
            <Button className="bg-emerald-500 text-white text-xs h-6 px-3">Track Order</Button>
          </div>
        );
      
      default:
        return <p className="text-slate-400">Select a page to see its preview</p>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Pages
            <span className="text-sky-500 ml-2">~20</span>
          </h1>
          <p className="text-slate-400">
            Final screens with real data. Complete user experiences with API integration.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30">
            Real Data
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
            API Ready
          </span>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"
      >
        {pages.map((page) => {
          const Icon = page.icon;
          return (
            <motion.div
              key={page.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              onClick={() => setSelectedPage(selectedPage === page.id ? null : page.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedPage === page.id
                  ? "bg-sky-500/10 border-sky-500/50"
                  : "bg-slate-900 border-slate-800 hover:border-sky-500/30"
              }`}
            >
              <Icon className={`mb-2 ${selectedPage === page.id ? "text-sky-400" : "text-slate-500"}`} size={20} />
              <h3 className="text-white font-medium text-sm mb-1">{page.name}</h3>
              <p className="text-slate-500 text-xs">{page.route}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {selectedPage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-semibold text-lg">
              {pages.find((p) => p.id === selectedPage)?.name}
            </h3>
            <Badge className="bg-sky-500/20 text-sky-400 border border-sky-500/30">Page</Badge>
          </div>
          <div className="bg-slate-950 rounded-xl p-4 border border-slate-800">
            {renderPagePreview()}
          </div>
          <div className="mt-4 p-4 bg-slate-800/50 rounded-xl">
            <p className="text-slate-400 text-sm">
              <span className="text-sky-400 font-medium">Golden Rule:</span> Pages contain real data and API integration. They are the final user-facing screens built from Templates, Organisms, Molecules, and Atoms.
            </p>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-sky-500/10 to-cyan-500/10 rounded-2xl border border-sky-500/20 p-6"
      >
        <h3 className="text-white font-semibold text-lg mb-4">Visual Flow Summary</h3>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {[
            { name: "Atoms", color: "rose", example: "Button" },
            { name: "Molecules", color: "amber", example: "SearchBar" },
            { name: "Organisms", color: "emerald", example: "Navbar" },
            { name: "Templates", color: "violet", example: "Layout" },
            { name: "Pages", color: "sky", example: "HomePage" },
          ].map((layer, i) => (
            <div key={layer.name} className="flex items-center">
              <div className={`px-3 py-2 rounded-lg bg-${layer.color}-500/20 border border-${layer.color}-500/30`}>
                <span className={`text-${layer.color}-400 font-medium text-sm`}>{layer.name}</span>
                <span className="text-slate-500 text-xs block">{layer.example}</span>
              </div>
              {i < 4 && <span className="text-slate-600 mx-1">→</span>}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}