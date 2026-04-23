import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Heart, Settings, Check, X, Plus } from "lucide-react";

interface AtomShowcaseProps {
  componentName: string;
}

export function AtomShowcase({ componentName }: AtomShowcaseProps) {
  const renderComponent = () => {
    switch (componentName) {
      case "Button":
        return (
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button className="bg-violet-500 hover:bg-violet-600 text-white">Primary</Button>
              <Button className="bg-slate-700 hover:bg-slate-600 text-white">Secondary</Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">Outline</Button>
              <Button className="bg-transparent hover:bg-slate-800 text-slate-300">Ghost</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Success</Button>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">Warning</Button>
              <Button className="bg-rose-500 hover:bg-rose-600 text-white">Destructive</Button>
            </div>
          </div>
        );
      
      case "IconButton":
        return (
          <div className="flex flex-wrap gap-3">
            <Button size="icon" className="bg-violet-500 hover:bg-violet-600 text-white rounded-lg">
              <Heart size={18} />
            </Button>
            <Button size="icon" className="bg-slate-700 hover:bg-slate-600 text-white rounded-full">
              <Settings size={18} />
            </Button>
            <Button size="icon" className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl">
              <Plus size={18} />
            </Button>
            <Button size="icon" className="bg-rose-500 hover:bg-rose-600 text-white rounded-lg">
              <X size={18} />
            </Button>
          </div>
        );
      
      case "GhostButton":
        return (
          <div className="flex flex-wrap gap-3">
            <Button className="bg-transparent hover:bg-violet-500/10 text-violet-400 border border-violet-500/30">
              Ghost Violet
            </Button>
            <Button className="bg-transparent hover:bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Ghost Green
            </Button>
            <Button className="bg-transparent hover:bg-rose-500/10 text-rose-400 border border-rose-500/30">
              Ghost Red
            </Button>
          </div>
        );
      
      case "Pill":
        return (
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 rounded-full bg-violet-500 text-white text-sm">Active</span>
            <span className="px-4 py-1.5 rounded-full bg-slate-700 text-slate-300 text-sm">Inactive</span>
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm border border-emerald-500/30">Success</span>
            <span className="px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-sm border border-amber-500/30">Warning</span>
          </div>
        );
      
      case "Input":
        return (
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label className="text-slate-300">Default Input</Label>
              <Input placeholder="Enter text..." className="bg-slate-800 border-slate-700 text-white" />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300">With Icon</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                <Input placeholder="Email address" className="pl-10 bg-slate-800 border-slate-700 text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300">Disabled</Label>
              <Input placeholder="Disabled input" disabled className="bg-slate-800 border-slate-700 text-slate-500 opacity-50" />
            </div>
          </div>
        );
      
      case "Textarea":
        return (
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label className="text-slate-300">Default Textarea</Label>
              <Textarea placeholder="Enter your message..." className="bg-slate-800 border-slate-700 text-white min-h-24" />
            </div>
          </div>
        );
      
      case "Checkbox":
        return (
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="w-5 h-5 rounded border-2 border-slate-600 bg-slate-800 flex items-center justify-center">
                <Check size={14} className="text-violet-500" />
              </div>
              <span className="text-slate-300">Checked option</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="w-5 h-5 rounded border-2 border-slate-600 bg-slate-800"></div>
              <span className="text-slate-300">Unchecked option</span>
            </label>
          </div>
        );
      
      case "Radio":
        return (
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="w-5 h-5 rounded-full border-2 border-violet-500 bg-slate-800 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-violet-500"></div>
              </div>
              <span className="text-slate-300">Option A</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="w-5 h-5 rounded-full border-2 border-slate-600 bg-slate-800"></div>
              <span className="text-slate-300">Option B</span>
            </label>
          </div>
        );
      
      case "Switch":
        return (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-6 rounded-full bg-violet-500 relative cursor-pointer">
                <div className="absolute right-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow"></div>
              </div>
              <span className="text-slate-300">Enabled</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-6 rounded-full bg-slate-700 relative cursor-pointer">
                <div className="absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-slate-400 shadow"></div>
              </div>
              <span className="text-slate-300">Disabled</span>
            </div>
          </div>
        );
      
      case "Badge":
        return (
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-slate-700 text-slate-300">Default</Badge>
            <Badge className="bg-violet-500 text-white">Primary</Badge>
            <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Success</Badge>
            <Badge className="bg-amber-500/20 text-amber-400 border border-amber-500/30">Warning</Badge>
            <Badge className="bg-rose-500/20 text-rose-400 border border-rose-500/30">Error</Badge>
          </div>
        );
      
      case "Tag":
        return (
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-sm border border-slate-700 flex items-center gap-1">
              React <X size={12} className="cursor-pointer hover:text-rose-400" />
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-sm border border-slate-700 flex items-center gap-1">
              TypeScript <X size={12} className="cursor-pointer hover:text-rose-400" />
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-sm border border-slate-700 flex items-center gap-1">
              Tailwind <X size={12} className="cursor-pointer hover:text-rose-400" />
            </span>
          </div>
        );
      
      case "Chip":
        return (
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-400 text-sm border border-violet-500/30">
              Featured
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm border border-emerald-500/30">
              New
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-sm border border-amber-500/30">
              Popular
            </span>
          </div>
        );
      
      case "Avatar":
        return (
          <div className="flex items-center gap-4">
            <Avatar className="w-8 h-8 border-2 border-violet-500">
              <AvatarImage src="" />
              <AvatarFallback className="bg-violet-500 text-white text-xs">SM</AvatarFallback>
            </Avatar>
            <Avatar className="w-10 h-10 border-2 border-emerald-500">
              <AvatarImage src="" />
              <AvatarFallback className="bg-emerald-500 text-white text-sm">MD</AvatarFallback>
            </Avatar>
            <Avatar className="w-12 h-12 border-2 border-amber-500">
              <AvatarImage src="" />
              <AvatarFallback className="bg-amber-500 text-white text-base">LG</AvatarFallback>
            </Avatar>
            <Avatar className="w-16 h-16 border-2 border-rose-500">
              <AvatarImage src="" />
              <AvatarFallback className="bg-rose-500 text-white text-lg">XL</AvatarFallback>
            </Avatar>
          </div>
        );
      
      case "StatusDot":
        return (
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
              <span className="text-slate-300 text-sm">Online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
              <span className="text-slate-300 text-sm">Away</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
              <span className="text-slate-300 text-sm">Offline</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-500"></div>
              <span className="text-slate-300 text-sm">Busy</span>
            </div>
          </div>
        );
      
      case "Spinner":
        return (
          <div className="flex items-center gap-6">
            <div className="w-5 h-5 border-2 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="w-8 h-8 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        );
      
      case "ProgressBar":
        return (
          <div className="space-y-4 w-64">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Progress</span>
                <span className="text-violet-400">25%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-violet-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-400">Progress</span>
                <span className="text-emerald-400">75%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-emerald-500 rounded-full"></div>
              </div>
            </div>
          </div>
        );
      
      case "Heading":
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
      
      case "Code":
        return (
          <code className="px-2 py-1 rounded bg-slate-800 text-violet-400 font-mono text-sm border border-slate-700">
            const x = 42;
          </code>
        );
      
      case "Kbd":
        return (
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700 shadow">
              Ctrl
            </kbd>
            <span className="text-slate-500">+</span>
            <kbd className="px-2 py-1 rounded bg-slate-800 text-slate-300 font-mono text-xs border border-slate-700 shadow">
              C
            </kbd>
          </div>
        );
      
      default:
        return (
          <div className="text-slate-400">
            Select a component to see its variants
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-900 rounded-2xl border border-slate-800 p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold text-lg">{componentName} Component</h3>
        <Badge className="bg-rose-500/20 text-rose-400 border border-rose-500/30">Atom</Badge>
      </div>
      
      <div className="bg-slate-950 rounded-xl p-6 border border-slate-800">
        {renderComponent()}
      </div>
      
      <div className="mt-4 p-4 bg-slate-800/50 rounded-xl">
        <p className="text-slate-400 text-sm">
          <span className="text-violet-400 font-medium">Golden Rule:</span> Atoms contain no business logic. They are pure UI primitives that can be reused across the entire application.
        </p>
      </div>
    </motion.div>
  );
}