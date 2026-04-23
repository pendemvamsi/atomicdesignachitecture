import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Lock, Calendar, Upload, Star, ChevronDown, Check, X, Plus, Minus } from "lucide-react";
import { Button } from "../ui/button";
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
  const [selectedMolecule, setSelectedMolecule] = useState<string | null>(null);
  const [rating, setRating] = useState(3);
  const [quantity, setQuantity] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const renderMoleculeDemo = () => {
    switch (selectedMolecule) {
      case "form-field":
        return (
          <div className="space-y-4 max-w-sm">
            <div className="space-y-2">
              <Label className="text-slate-300">Email Address</Label>
              <Input placeholder="Enter your email" className="bg-slate-800 border-slate-700 text-white" />
              <p className="text-slate-500 text-xs">We'll never share your email.</p>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300">Username *</Label>
              <Input placeholder="Choose a username" className="bg-slate-800 border-rose-500 text-white" />
              <p className="text-rose-400 text-xs">Username is required</p>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300">Bio</Label>
              <textarea
                placeholder="Tell us about yourself..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-slate-600 min-h-20"
              />
            </div>
          </div>
        );
      
      case "search-bar":
        return (
          <div className="space-y-4 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search components..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-10 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search with button..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-24 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-amber-500 text-white px-3 py-1 rounded-md text-sm font-medium hover:bg-amber-600">
                Search
              </button>
            </div>
          </div>
        );
      
      case "password-field":
        return (
          <div className="space-y-4 max-w-sm">
            <div className="space-y-2">
              <Label className="text-slate-300">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-12 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>
        );
      
      case "file-upload":
        return (
          <div className="space-y-4 max-w-sm">
            <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center hover:border-amber-500 transition-colors cursor-pointer">
              <Upload className="mx-auto text-slate-500 mb-2" size={32} />
              <p className="text-white font-medium mb-1">Drop files here</p>
              <p className="text-slate-500 text-sm">or click to browse</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                <Upload className="text-slate-400" size={18} />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">document.pdf</p>
                <p className="text-slate-500 text-xs">2.4 MB</p>
              </div>
              <button className="text-slate-400 hover:text-rose-400">
                <X size={18} />
              </button>
            </div>
          </div>
        );
      
      case "rating":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="p-1"
                >
                  <Star
                    size={28}
                    className={`transition-colors ${
                      star <= rating
                        ? "text-amber-400 fill-amber-400"
                        : "text-slate-600"
                    }`}
                  />
                </button>
              ))}
              <span className="ml-2 text-slate-400 text-sm">{rating}/5</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={20}
                  className={`${
                    star <= 4 ? "text-amber-400 fill-amber-400" : "text-slate-600"
                  }`}
                />
              ))}
              <span className="ml-2 text-slate-400 text-sm">4.0 (128 reviews)</span>
            </div>
          </div>
        );
      
      case "quantity-selector":
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="text-white font-medium text-lg w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-white">
                <Minus size={14} />
              </button>
              <span className="text-white font-medium w-8 text-center">1</span>
              <button className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-white">
                <Plus size={14} />
              </button>
            </div>
          </div>
        );
      
      case "date-picker":
        return (
          <div className="space-y-4 max-w-xs">
            <div className="space-y-2">
              <Label className="text-slate-300">Select Date</Label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="MM/DD/YYYY"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-10 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl p-3 border border-slate-700">
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                  <span key={day} className="text-slate-500 text-xs">{day}</span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 28 }, (_, i) => (
                  <button
                    key={i}
                    className={`w-7 h-7 rounded-lg text-xs ${
                      i === 14
                        ? "bg-amber-500 text-white"
                        : "text-slate-400 hover:bg-slate-700"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      
      case "dropdown":
        return (
          <div className="space-y-4 max-w-xs">
            <div className="space-y-2">
              <Label className="text-slate-300">Select Option</Label>
              <div className="relative">
                <button className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-left text-white flex items-center justify-between">
                  <span>Choose an option</span>
                  <ChevronDown size={18} className="text-slate-500" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300">With Selection</Label>
              <div className="relative">
                <button className="w-full bg-slate-800 border border-amber-500 rounded-lg px-4 py-2.5 text-left text-white flex items-center justify-between">
                  <span>Option 2</span>
                  <ChevronDown size={18} className="text-amber-500" />
                </button>
              </div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
              {["Option 1", "Option 2", "Option 3", "Option 4"].map((option, i) => (
                <button
                  key={option}
                  className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between ${
                    i === 1
                      ? "bg-amber-500/20 text-amber-400"
                      : "text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  <span>{option}</span>
                  {i === 1 && <Check size={16} />}
                </button>
              ))}
            </div>
          </div>
        );
      
      default:
        return <p className="text-slate-400">Select a molecule to see its demo</p>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Molecules
            <span className="text-amber-500 ml-2">~100</span>
          </h1>
          <p className="text-slate-400">
            Combinations of atoms. Small logic allowed for simple interactions.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
            Small Logic
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
            Composed
          </span>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {molecules.map((molecule) => (
          <motion.div
            key={molecule.id}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            onClick={() => setSelectedMolecule(selectedMolecule === molecule.id ? null : molecule.id)}
            className={`p-4 rounded-xl border cursor-pointer transition-all ${
              selectedMolecule === molecule.id
                ? "bg-amber-500/10 border-amber-500/50"
                : "bg-slate-900 border-slate-800 hover:border-amber-500/30"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-medium">{molecule.name}</h3>
              <Badge className="bg-slate-800 text-slate-400">{molecule.category}</Badge>
            </div>
            <p className="text-slate-500 text-sm">{molecule.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {selectedMolecule && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-semibold text-lg">
              {molecules.find((m) => m.id === selectedMolecule)?.name}
            </h3>
            <Badge className="bg-amber-500/20 text-amber-400 border border-amber-500/30">Molecule</Badge>
          </div>
          <div className="bg-slate-950 rounded-xl p-6 border border-slate-800">
            {renderMoleculeDemo()}
          </div>
          <div className="mt-4 p-4 bg-slate-800/50 rounded-xl">
            <p className="text-slate-400 text-sm">
              <span className="text-amber-400 font-medium">Golden Rule:</span> Molecules combine atoms with small amounts of logic. They handle simple state like toggles and selections.
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}