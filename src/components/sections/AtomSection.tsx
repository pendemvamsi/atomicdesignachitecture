import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Star, Settings, Bell, Check, X, Plus, Minus } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";
import { Menu, Search } from "lucide-react";
import { Input } from "../ui/input";

const atomCategories = [
  {
    name: "Buttons",
    atoms: [
      { id: "button-primary", name: "Primary Button", description: "Main CTA button" },
      { id: "button-secondary", name: "Secondary Button", description: "Secondary action" },
      { id: "button-ghost", name: "Ghost Button", description: "Subtle action" },
      { id: "button-icon", name: "Icon Button", description: "Icon-only action" },
      { id: "button-pill", name: "Pill Button", description: "Rounded button" },
    ],
  },
  {
    name: "Inputs",
    atoms: [
      { id: "input-text", name: "Text Input", description: "Basic text field" },
      { id: "input-password", name: "Password Input", description: "Secure text field" },
      { id: "input-search", name: "Search Input", description: "Search field" },
      { id: "input-textarea", name: "Textarea", description: "Multi-line input" },
    ],
  },
  {
    name: "Badges & Tags",
    atoms: [
      { id: "badge-default", name: "Badge", description: "Status indicator" },
      { id: "badge-success", name: "Success Badge", description: "Positive status" },
      { id: "badge-warning", name: "Warning Badge", description: "Caution status" },
      { id: "badge-error", name: "Error Badge", description: "Negative status" },
      { id: "tag", name: "Tag", description: "Removable label" },
      { id: "chip", name: "Chip", description: "Clickable filter" },
    ],
  },
  {
    name: "Avatars",
    atoms: [
      { id: "avatar-sm", name: "Avatar Small", description: "24px avatar" },
      { id: "avatar-md", name: "Avatar Medium", description: "40px avatar" },
      { id: "avatar-lg", name: "Avatar Large", description: "56px avatar" },
      { id: "avatar-group", name: "Avatar Group", description: "Multiple avatars" },
    ],
  },
  {
    name: "Indicators",
    atoms: [
      { id: "spinner", name: "Spinner", description: "Loading indicator" },
      { id: "progress-bar", name: "Progress Bar", description: "Linear progress" },
      { id: "progress-circle", name: "Progress Circle", description: "Circular progress" },
      { id: "skeleton", name: "Skeleton", description: "Loading placeholder" },
      { id: "status-dot", name: "Status Dot", description: "Online/offline" },
    ],
  },
  {
    name: "Typography",
    atoms: [
      { id: "heading", name: "Heading", description: "Page titles" },
      { id: "text", name: "Text", description: "Body content" },
      { id: "caption", name: "Caption", description: "Small text" },
      { id: "code", name: "Code", description: "Monospace text" },
    ],
  },
  {
    name: "Dividers",
    atoms: [
      { id: "divider-h", name: "Horizontal Divider", description: "Section separator" },
      { id: "divider-v", name: "Vertical Divider", description: "Column separator" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export function AtomSection() {
  const [selectedAtom, setSelectedAtom] = useState<string | null>(null);

  const renderAtomDemo = () => {
    switch (selectedAtom) {
      case "button-primary":
        return (
          <div className="flex flex-wrap gap-3">
            <Button className="bg-rose-500 hover:bg-rose-600 text-white">Primary</Button>
            <Button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 text-lg">Large Primary</Button>
            <Button className="bg-rose-500 hover:bg-rose-600 text-white" disabled>Disabled</Button>
          </div>
        );
      case "button-secondary":
        return (
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">Secondary</Button>
            <Button variant="outline" className="border-rose-500 text-rose-400 hover:bg-rose-500/10">Outline</Button>
            <Button variant="outline" className="border-slate-600 text-slate-500" disabled>Disabled</Button>
          </div>
        );
      case "button-ghost":
        return (
          <div className="flex flex-wrap gap-3">
            <Button variant="ghost" className="text-slate-300 hover:bg-slate-800">Ghost</Button>
            <Button variant="ghost" className="text-rose-400 hover:bg-rose-500/10">Ghost Rose</Button>
            <Button variant="ghost" className="text-slate-500" disabled>Disabled</Button>
          </div>
        );
      case "button-icon":
        return (
          <div className="flex flex-wrap gap-3">
            <button className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700">
              <Heart size={20} />
            </button>
            <button className="p-2 rounded-full bg-rose-500 text-white hover:bg-rose-600">
              <Plus size={20} />
            </button>
            <button className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700">
              <Settings size={20} />
            </button>
            <button className="p-2 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600">
              <Menu size={20} />
            </button>
          </div>
        );
      case "button-pill":
        return (
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-full bg-rose-500 hover:bg-rose-600 text-white px-6">Pill Button</Button>
            <Button className="rounded-full border border-slate-600 text-slate-300 hover:bg-slate-800 px-6">Outline Pill</Button>
            <Button className="rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white px-6">Gradient Pill</Button>
          </div>
        );
      case "input-text":
        return (
          <div className="space-y-4 max-w-sm">
            <Input placeholder="Enter text..." className="bg-slate-800 border-slate-700 text-white" />
            <Input placeholder="With label" className="bg-slate-800 border-slate-700 text-white" />
            <Input placeholder="Error state" className="bg-slate-800 border-rose-500 text-white" />
            <Input placeholder="Disabled" disabled className="bg-slate-800 border-slate-700 text-slate-500" />
          </div>
        );
      case "input-password":
        return (
          <div className="space-y-4 max-w-sm">
            <Input type="password" placeholder="Password" className="bg-slate-800 border-slate-700 text-white" />
            <Input type="password" placeholder="Confirm Password" className="bg-slate-800 border-slate-700 text-white" />
          </div>
        );
      case "input-search":
        return (
          <div className="space-y-4 max-w-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <Input placeholder="Search..." className="pl-10 bg-slate-800 border-slate-700 text-white" />
            </div>
          </div>
        );
      case "input-textarea":
        return (
          <div className="space-y-4 max-w-sm">
            <textarea
              placeholder="Enter your message..."
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-slate-600 min-h-24"
            />
          </div>
        );
      case "badge-default":
        return (
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-slate-700 text-slate-300">Default</Badge>
            <Badge className="bg-slate-600 text-slate-200">Badge</Badge>
            <Badge className="bg-slate-800 text-slate-400 border border-slate-700">Outlined</Badge>
          </div>
        );
      case "badge-success":
        return (
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Success</Badge>
            <Badge className="bg-emerald-500 text-white">Active</Badge>
            <Badge className="bg-emerald-500/10 text-emerald-400">Verified</Badge>
          </div>
        );
      case "badge-warning":
        return (
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-amber-500/20 text-amber-400 border border-amber-500/30">Warning</Badge>
            <Badge className="bg-amber-500 text-white">Pending</Badge>
            <Badge className="bg-amber-500/10 text-amber-400">Review</Badge>
          </div>
        );
      case "badge-error":
        return (
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-rose-500/20 text-rose-400 border border-rose-500/30">Error</Badge>
            <Badge className="bg-rose-500 text-white">Failed</Badge>
            <Badge className="bg-rose-500/10 text-rose-400">Rejected</Badge>
          </div>
        );
      case "tag":
        return (
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm">
              Tag <button className="hover:text-white"><X size={14} /></button>
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-sm">
              React <button className="hover:text-white"><X size={14} /></button>
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm">
              TypeScript <button className="hover:text-white"><X size={14} /></button>
            </span>
          </div>
        );
      case "chip":
        return (
          <div className="flex flex-wrap gap-2">
            <button className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-sm hover:bg-slate-700 hover:text-white">Filter</button>
            <button className="px-3 py-1 rounded-full bg-rose-500 text-white text-sm">Selected</button>
            <button className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-sm hover:border-rose-500 hover:text-rose-400">Outline</button>
          </div>
        );
      case "avatar-sm":
        return (
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center text-white text-xs">A</div>
            <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">B</div>
            <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">C</div>
            <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 text-xs">?</div>
          </div>
        );
      case "avatar-md":
        return (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white font-medium">JD</div>
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-medium">AB</div>
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium">CD</div>
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-slate-400">?</div>
          </div>
        );
      case "avatar-lg":
        return (
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-rose-500 flex items-center justify-center text-white text-lg font-medium">JD</div>
            <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center text-white text-lg font-medium">AB</div>
            <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white text-lg font-medium">CD</div>
          </div>
        );
      case "avatar-group":
        return (
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white text-xs border-2 border-slate-900">A</div>
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs border-2 border-slate-900">B</div>
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs border-2 border-slate-900">C</div>
              <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 text-xs border-2 border-slate-900">+5</div>
            </div>
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center text-white text-sm border-2 border-slate-900">X</div>
              <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white text-sm border-2 border-slate-900">Y</div>
              <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm border-2 border-slate-900">Z</div>
            </div>
          </div>
        );
      case "spinner":
        return (
          <div className="flex items-center gap-6">
            <div className="w-5 h-5 border-2 border-rose-500 border-t-transparent rounded-full animate-spin" />
            <div className="w-8 h-8 border-3 border-amber-500 border-t-transparent rounded-full animate-spin" />
            <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          </div>
        );
      case "progress-bar":
        return (
          <div className="space-y-4 w-64">
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-rose-500 rounded-full" />
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-amber-500 rounded-full" />
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-emerald-500 rounded-full" />
            </div>
            <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 rounded-full" />
            </div>
          </div>
        );
      case "progress-circle":
        return (
          <div className="flex items-center gap-6">
            <div className="relative w-12 h-12">
              <svg className="w-12 h-12 -rotate-90">
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="none" className="text-slate-800" />
                <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="none" className="text-rose-500" strokeDasharray="125.6" strokeDashoffset="94.2" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-white text-xs">25%</span>
            </div>
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16 -rotate-90">
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-slate-800" />
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-emerald-500" strokeDasharray="175.8" strokeDashoffset="44" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-white text-sm">75%</span>
            </div>
          </div>
        );
      case "skeleton":
        return (
          <div className="space-y-4 w-64">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 animate-pulse" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-slate-800 rounded animate-pulse w-3/4" />
                <div className="h-3 bg-slate-800 rounded animate-pulse w-1/2" />
              </div>
            </div>
            <div className="h-32 bg-slate-800 rounded-lg animate-pulse" />
          </div>
        );
      case "status-dot":
        return (
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-slate-400 text-sm">Online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-slate-400 text-sm">Away</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="text-slate-400 text-sm">Offline</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-slate-400 text-sm">Pulsing</span>
            </div>
          </div>
        );
      case "heading":
        return (
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-white">Heading 1</h1>
            <h2 className="text-3xl font-bold text-white">Heading 2</h2>
            <h3 className="text-2xl font-semibold text-white">Heading 3</h3>
            <h4 className="text-xl font-semibold text-white">Heading 4</h4>
            <h5 className="text-lg font-medium text-white">Heading 5</h5>
            <h6 className="text-base font-medium text-white">Heading 6</h6>
          </div>
        );
      case "text":
        return (
          <div className="space-y-2 max-w-md">
            <p className="text-white">Regular body text in white.</p>
            <p className="text-slate-300">Lighter text in slate-300.</p>
            <p className="text-slate-400">Muted text in slate-400.</p>
            <p className="text-slate-500">Subtle text in slate-500.</p>
          </div>
        );
      case "caption":
        return (
          <div className="space-y-2">
            <p className="text-slate-400 text-xs">Caption text - small and subtle</p>
            <p className="text-slate-500 text-xs uppercase tracking-wide">Uppercase caption</p>
            <p className="text-rose-400 text-xs">Error caption text</p>
          </div>
        );
      case "code":
        return (
          <div className="space-y-2">
            <code className="px-2 py-1 bg-slate-800 rounded text-rose-400 font-mono text-sm">const x = 42;</code>
            <pre className="p-3 bg-slate-800 rounded-lg text-slate-300 font-mono text-sm overflow-x-auto">
{`function hello() {
  return "world";
}`}
            </pre>
          </div>
        );
      case "divider-h":
        return (
          <div className="space-y-4 w-64">
            <p className="text-slate-400 text-sm">Above divider</p>
            <hr className="border-slate-700" />
            <p className="text-slate-400 text-sm">Below divider</p>
            <hr className="border-slate-600 border-dashed" />
            <p className="text-slate-400 text-sm">Dashed divider</p>
          </div>
        );
      case "divider-v":
        return (
          <div className="flex items-center gap-4 h-8">
            <span className="text-slate-400 text-sm">Left</span>
            <div className="w-px h-full bg-slate-700" />
            <span className="text-slate-400 text-sm">Center</span>
            <div className="w-px h-full bg-slate-700" />
            <span className="text-slate-400 text-sm">Right</span>
          </div>
        );
      default:
        return <p className="text-slate-400">Select an atom to see its variants</p>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Atoms
            <span className="text-rose-500 ml-2">~80</span>
          </h1>
          <p className="text-slate-400">
            Smallest building blocks. No business logic. Pure UI primitives.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30">
            No Logic
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
            Primitive
          </span>
        </div>
      </div>

      {atomCategories.map((category) => (
        <motion.div
          key={category.name}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-3"
        >
          <h2 className="text-lg font-semibold text-slate-300">{category.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {category.atoms.map((atom) => (
              <motion.div
                key={atom.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={() => setSelectedAtom(selectedAtom === atom.id ? null : atom.id)}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  selectedAtom === atom.id
                    ? "bg-rose-500/10 border-rose-500/50"
                    : "bg-slate-900 border-slate-800 hover:border-rose-500/30"
                }`}
              >
                <h3 className="text-white font-medium text-sm">{atom.name}</h3>
                <p className="text-slate-500 text-xs mt-1">{atom.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {selectedAtom && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-semibold text-lg">
              {atomCategories.flatMap(c => c.atoms).find(a => a.id === selectedAtom)?.name}
            </h3>
            <Badge className="bg-rose-500/20 text-rose-400 border border-rose-500/30">Atom</Badge>
          </div>
          <div className="bg-slate-950 rounded-xl p-6 border border-slate-800">
            {renderAtomDemo()}
          </div>
          <div className="mt-4 p-4 bg-slate-800/50 rounded-xl">
            <p className="text-slate-400 text-sm">
              <span className="text-rose-400 font-medium">Golden Rule:</span> Atoms are pure UI primitives with no business logic. They are the smallest building blocks of your design system.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}