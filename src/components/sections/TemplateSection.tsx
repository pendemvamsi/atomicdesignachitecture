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
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const renderTemplatePreview = () => {
    switch (selectedTemplate) {
      case "main-layout":
        return (
          <div className="flex flex-col h-64 bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-10 bg-violet-500/30 flex items-center px-3">
              <span className="text-violet-300 text-xs">Header</span>
            </div>
            <div className="flex flex-1">
              <div className="w-16 bg-slate-700 p-2">
                <span className="text-slate-400 text-xs block mb-2">Nav</span>
                <div className="space-y-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-2 bg-slate-600 rounded" />
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-slate-900 p-3">
                <span className="text-slate-400 text-xs block mb-2">Main Content</span>
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-12 bg-slate-800 rounded" />
                  ))}
                </div>
              </div>
            </div>
            <div className="h-8 bg-slate-700 flex items-center justify-center">
              <span className="text-slate-400 text-xs">Footer</span>
            </div>
          </div>
        );
      
      case "dashboard-layout":
        return (
          <div className="flex h-64 bg-slate-800 rounded-lg overflow-hidden">
            <div className="w-14 bg-slate-700 p-2">
              <div className="w-8 h-8 bg-violet-500 rounded-lg mb-3" />
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 bg-slate-600 rounded-lg" />
                ))}
              </div>
            </div>
            <div className="flex-1 p-3">
              <div className="grid grid-cols-4 gap-2 mb-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-14 bg-slate-700 rounded-lg" />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-24 bg-slate-700 rounded-lg" />
                <div className="h-24 bg-slate-700 rounded-lg" />
              </div>
            </div>
          </div>
        );
      
      case "auth-layout":
        return (
          <div className="h-64 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
            <div className="bg-slate-800 rounded-xl p-6 w-48">
              <div className="w-10 h-10 bg-violet-500 rounded-lg mx-auto mb-4" />
              <div className="space-y-2 mb-4">
                <div className="h-8 bg-slate-700 rounded-lg" />
                <div className="h-8 bg-slate-700 rounded-lg" />
              </div>
              <div className="h-8 bg-violet-500 rounded-lg" />
            </div>
          </div>
        );
      
      case "ecommerce-layout":
        return (
          <div className="flex flex-col h-64 bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-10 bg-slate-700 flex items-center justify-between px-3">
              <span className="text-slate-400 text-xs">Header Nav</span>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-slate-600 rounded" />
                <div className="w-6 h-6 bg-slate-600 rounded" />
              </div>
            </div>
            <div className="h-16 bg-gradient-to-r from-amber-500/20 to-orange-500/20 flex items-center justify-center">
              <span className="text-amber-300 text-xs">Hero Banner</span>
            </div>
            <div className="flex-1 p-3">
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="aspect-square bg-slate-700 rounded-lg" />
                ))}
              </div>
            </div>
            <div className="h-8 bg-slate-700" />
          </div>
        );
      
      case "two-column":
        return (
          <div className="flex h-64 bg-slate-800 rounded-lg overflow-hidden">
            <div className="w-1/2 border-r border-slate-700 p-3">
              <span className="text-slate-400 text-xs block mb-2">Left Panel</span>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 bg-slate-700 rounded" />
                ))}
              </div>
            </div>
            <div className="w-1/2 p-3">
              <span className="text-slate-400 text-xs block mb-2">Right Panel</span>
              <div className="h-full bg-slate-700 rounded" />
            </div>
          </div>
        );
      
      case "settings-layout":
        return (
          <div className="flex h-64 bg-slate-800 rounded-lg overflow-hidden">
            <div className="w-20 bg-slate-700 p-2">
              <span className="text-slate-400 text-xs block mb-2">Settings Nav</span>
              <div className="space-y-1">
                {["General", "Security", "Notifications", "Privacy"].map((item) => (
                  <div key={item} className="px-2 py-1 bg-slate-600 rounded text-xs text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 p-3">
              <div className="h-full bg-slate-900 rounded-lg p-3">
                <span className="text-slate-400 text-xs">Content Area</span>
              </div>
            </div>
          </div>
        );
      
      case "checkout-layout":
        return (
          <div className="h-64 bg-slate-800 rounded-lg overflow-hidden p-3">
            <div className="flex justify-center gap-2 mb-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center text-white text-xs">{i}</div>
                  {i < 3 && <div className="w-8 h-0.5 bg-slate-600" />}
                </div>
              ))}
            </div>
            <div className="flex gap-3 h-48">
              <div className="flex-1 bg-slate-700 rounded-lg p-3">
                <span className="text-slate-400 text-xs">Form Steps</span>
              </div>
              <div className="w-32 bg-slate-700 rounded-lg p-3">
                <span className="text-slate-400 text-xs">Order Summary</span>
              </div>
            </div>
          </div>
        );
      
      case "profile-layout":
        return (
          <div className="h-64 bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-16 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500 border-2 border-slate-800" />
            </div>
            <div className="flex justify-center gap-2 p-2 border-b border-slate-700">
              {["Posts", "About", "Friends", "Photos"].map((tab) => (
                <div key={tab} className="px-3 py-1 bg-slate-700 rounded-lg text-xs text-slate-300">
                  {tab}
                </div>
              ))}
            </div>
            <div className="p-3">
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square bg-slate-700 rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        );
      
      default:
        return <p className="text-slate-400">Select a template to see its preview</p>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Templates
            <span className="text-violet-500 ml-2">~40</span>
          </h1>
          <p className="text-slate-400">
            Page layouts without real data. Structure-only components that define the skeleton.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/30">
            Layout Only
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
            No Data
          </span>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {templates.map((template) => (
          <motion.div
            key={template.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            onClick={() => setSelectedTemplate(selectedTemplate === template.id ? null : template.id)}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedTemplate === template.id
                ? "bg-violet-500/10 border-violet-500/50"
                : "bg-slate-900 border-slate-800 hover:border-violet-500/30"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <Layout className="text-violet-400" size={16} />
              <h3 className="text-white font-medium text-sm">{template.name}</h3>
            </div>
            <p className="text-slate-500 text-xs mb-3">{template.description}</p>
            <div className="flex flex-wrap gap-1">
              {template.structure.slice(0, 3).map((s) => (
                <span key={s} className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  {s}
                </span>
              ))}
              {template.structure.length > 3 && (
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                  +{template.structure.length - 3}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedTemplate && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-semibold text-lg">
              {templates.find((t) => t.id === selectedTemplate)?.name}
            </h3>
            <Badge className="bg-violet-500/20 text-violet-400 border border-violet-500/30">Template</Badge>
          </div>
          <div className="bg-slate-950 rounded-xl p-4 border border-slate-800">
            {renderTemplatePreview()}
          </div>
          <div className="mt-4 p-4 bg-slate-800/50 rounded-xl">
            <p className="text-slate-400 text-sm">
              <span className="text-violet-400 font-medium">Golden Rule:</span> Templates define page structure without real data. They are the skeleton that Pages fill with content.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}