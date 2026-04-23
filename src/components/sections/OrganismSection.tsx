import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Menu, Bell, User, Search, Home, Settings, Mail, 
  Star, Heart, ShoppingCart, ChevronDown, Plus, 
  Edit3, Trash2, Check, X, Clock, Minus
} from "lucide-react";
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
  const [selectedOrganism, setSelectedOrganism] = useState<string | null>(null);

  const renderOrganismDemo = () => {
    switch (selectedOrganism) {
      case "navbar":
        return (
          <div className="bg-slate-800 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900">
              <div className="flex items-center gap-6">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                  L
                </div>
                <nav className="hidden md:flex items-center gap-4">
                  {["Home", "Products", "About", "Contact"].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className={`text-sm ${
                        item === "Home" ? "text-emerald-400" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
                  <Search size={18} />
                </button>
                <button className="relative p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
                  <Bell size={18} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-rose-500 rounded-full" />
                </button>
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-medium">
                  JD
                </div>
              </div>
            </div>
          </div>
        );
      
      case "sidebar-nav":
        return (
          <div className="bg-slate-800 rounded-xl overflow-hidden w-48">
            <div className="p-3 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                  L
                </div>
                <span className="text-white font-medium">Dashboard</span>
              </div>
            </div>
            <nav className="p-2 space-y-1">
              {[
                { icon: Home, label: "Overview", active: true },
                { icon: Mail, label: "Messages", badge: "3" },
                { icon: User, label: "Profile" },
                { icon: Settings, label: "Settings" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                      item.active
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "text-slate-400 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto bg-rose-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        );
      
      case "product-card":
        return (
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              <div className="aspect-square bg-gradient-to-br from-violet-500/20 to-purple-500/20 relative">
                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-900/80 text-slate-400 hover:text-rose-400">
                  <Heart size={16} />
                </button>
              </div>
              <div className="p-3">
                <h4 className="text-white font-medium text-sm mb-1">Product Name</h4>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      className={star <= 4 ? "text-amber-400 fill-amber-400" : "text-slate-600"}
                    />
                  ))}
                  <span className="text-slate-500 text-xs ml-1">(42)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 font-bold">$99.00</span>
                  <Button className="bg-emerald-500 text-white text-xs h-7 px-2">Add</Button>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
              <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-orange-500/20 relative">
                <button className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-900/80 text-rose-400">
                  <Heart className="fill-current" size={16} />
                </button>
                <Badge className="absolute top-2 left-2 bg-rose-500 text-white text-xs">Sale</Badge>
              </div>
              <div className="p-3">
                <h4 className="text-white font-medium text-sm mb-1">Another Product</h4>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={12}
                      className={star <= 5 ? "text-amber-400 fill-amber-400" : "text-slate-600"}
                    />
                  ))}
                  <span className="text-slate-500 text-xs ml-1">(128)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-slate-500 text-xs line-through">$149.00</span>
                    <span className="text-emerald-400 font-bold ml-1">$79.00</span>
                  </div>
                  <Button className="bg-emerald-500 text-white text-xs h-7 px-2">Add</Button>
                </div>
              </div>
            </div>
          </div>
        );
      
      case "cart-item":
        return (
          <div className="space-y-3 max-w-md">
            <div className="bg-slate-800 rounded-xl p-4 flex items-center gap-4 border border-slate-700">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-sky-500/20 to-cyan-500/20" />
              <div className="flex-1">
                <h4 className="text-white font-medium text-sm">Product Name</h4>
                <p className="text-slate-500 text-xs">Size: M | Color: Blue</p>
                <div className="flex items-center gap-2 mt-2">
                  <button className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white">
                    <Minus size={12} />
                  </button>
                  <span className="text-white text-sm">2</span>
                  <button className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white">
                    <Plus size={12} />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">$198.00</p>
                <button className="text-slate-500 hover:text-rose-400 text-xs mt-1">Remove</button>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl p-4 flex items-center gap-4 border border-slate-700">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-rose-500/20 to-pink-500/20" />
              <div className="flex-1">
                <h4 className="text-white font-medium text-sm">Another Item</h4>
                <p className="text-slate-500 text-xs">Size: L | Color: Red</p>
                <div className="flex items-center gap-2 mt-2">
                  <button className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white">
                    <Minus size={12} />
                  </button>
                  <span className="text-white text-sm">1</span>
                  <button className="w-6 h-6 rounded bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white">
                    <Plus size={12} />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">$49.00</p>
                <button className="text-slate-500 hover:text-rose-400 text-xs mt-1">Remove</button>
              </div>
            </div>
          </div>
        );
      
      case "review-card":
        return (
          <div className="space-y-4 max-w-md">
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium">
                  JD
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-medium text-sm">John Doe</h4>
                    <span className="text-slate-500 text-xs">2 days ago</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={12}
                        className={star <= 5 ? "text-amber-400 fill-amber-400" : "text-slate-600"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-300 text-sm">
                Great product! Exactly what I was looking for. The quality is amazing and shipping was fast.
              </p>
              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-700">
                <button className="flex items-center gap-1 text-slate-500 hover:text-white text-xs">
                  <Heart size={14} /> Helpful (12)
                </button>
                <button className="text-slate-500 hover:text-white text-xs">Reply</button>
              </div>
            </div>
          </div>
        );
      
      case "stats-card":
        return (
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/20">
                  <User className="text-emerald-400" size={18} />
                </div>
                <span className="text-emerald-400 text-xs">+12%</span>
              </div>
              <p className="text-white text-2xl font-bold">1,234</p>
              <p className="text-slate-500 text-xs">Total Users</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-amber-500/20">
                  <ShoppingCart className="text-amber-400" size={18} />
                </div>
                <span className="text-amber-400 text-xs">+8%</span>
              </div>
              <p className="text-white text-2xl font-bold">567</p>
              <p className="text-slate-500 text-xs">Orders</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 rounded-lg bg-sky-500/20">
                  <Mail className="text-sky-400" size={18} />
                </div>
                <span className="text-rose-400 text-xs">-3%</span>
              </div>
              <p className="text-white text-2xl font-bold">$12K</p>
              <p className="text-slate-500 text-xs">Revenue</p>
            </div>
          </div>
        );
      
      case "notification-panel":
        return (
          <div className="bg-slate-800 rounded-xl overflow-hidden w-80 border border-slate-700">
            <div className="p-3 border-b border-slate-700 flex items-center justify-between">
              <h4 className="text-white font-medium text-sm">Notifications</h4>
              <Badge className="bg-rose-500 text-white text-xs">3 new</Badge>
            </div>
            <div className="max-h-48 overflow-y-auto">
              {[
                { icon: Mail, title: "New message", desc: "John sent you a message", time: "2m", unread: true },
                { icon: Heart, title: "New like", desc: "Sarah liked your post", time: "1h", unread: true },
                { icon: Check, title: "Order shipped", desc: "Your order is on the way", time: "3h", unread: false },
              ].map((notif, i) => {
                const Icon = notif.icon;
                return (
                  <div
                    key={i}
                    className={`p-3 flex items-start gap-3 border-b border-slate-700 last:border-0 ${
                      notif.unread ? "bg-slate-700/50" : ""
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${notif.unread ? "bg-emerald-500/20" : "bg-slate-700"}`}>
                      <Icon size={14} className={notif.unread ? "text-emerald-400" : "text-slate-400"} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{notif.title}</p>
                      <p className="text-slate-500 text-xs">{notif.desc}</p>
                    </div>
                    <span className="text-slate-500 text-xs">{notif.time}</span>
                  </div>
                );
              })}
            </div>
            <div className="p-2 border-t border-slate-700">
              <button className="w-full text-center text-emerald-400 text-xs hover:underline">
                View all notifications
              </button>
            </div>
          </div>
        );
      
      case "user-card":
        return (
          <div className="bg-slate-800 rounded-xl overflow-hidden w-64 border border-slate-700">
            <div className="h-16 bg-gradient-to-r from-emerald-500/30 to-teal-500/30" />
            <div className="p-4 -mt-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500 border-4 border-slate-800 flex items-center justify-center text-white text-xl font-bold mb-3">
                JD
              </div>
              <h4 className="text-white font-semibold">John Doe</h4>
              <p className="text-slate-500 text-sm mb-3">Product Designer</p>
              <div className="flex items-center gap-4 text-center mb-3">
                <div>
                  <p className="text-white font-bold">248</p>
                  <p className="text-slate-500 text-xs">Posts</p>
                </div>
                <div>
                  <p className="text-white font-bold">12.4K</p>
                  <p className="text-slate-500 text-xs">Followers</p>
                </div>
                <div>
                  <p className="text-white font-bold">534</p>
                  <p className="text-slate-500 text-xs">Following</p>
                </div>
              </div>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm">Follow</Button>
            </div>
          </div>
        );
      
      default:
        return <p className="text-slate-400">Select an organism to see its demo</p>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Organisms
            <span className="text-emerald-500 ml-2">~100</span>
          </h1>
          <p className="text-slate-400">
            Complex UI sections with real business logic and use-cases.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            Business Logic
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
            Feature-Level
          </span>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {organisms.map((organism) => (
          <motion.div
            key={organism.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            onClick={() => setSelectedOrganism(selectedOrganism === organism.id ? null : organism.id)}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedOrganism === organism.id
                ? "bg-emerald-500/10 border-emerald-500/50"
                : "bg-slate-900 border-slate-800 hover:border-emerald-500/30"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-medium">{organism.name}</h3>
              <Badge className="bg-slate-800 text-slate-400">{organism.category}</Badge>
            </div>
            <p className="text-slate-500 text-sm">{organism.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {selectedOrganism && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-semibold text-lg">
              {organisms.find((o) => o.id === selectedOrganism)?.name}
            </h3>
            <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Organism</Badge>
          </div>
          <div className="bg-slate-950 rounded-xl p-6 border border-slate-800">
            {renderOrganismDemo()}
          </div>
          <div className="mt-4 p-4 bg-slate-800/50 rounded-xl">
            <p className="text-slate-400 text-sm">
              <span className="text-emerald-400 font-medium">Golden Rule:</span> Organisms are feature-level UI sections that contain real business logic and represent complete use-cases.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}