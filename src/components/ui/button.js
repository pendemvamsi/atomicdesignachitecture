import { jsx as _jsx } from "react/jsx-runtime";
// src/components/ui/button.tsx
import React from "react";
import clsx from "clsx";
export const Button = ({ children, className, size, variant, ...props }) => {
    return (_jsx("button", { className: clsx("px-4 py-2 rounded-md text-sm font-medium transition", size === "icon" && "p-2", variant === "outline" && "border", className), ...props, children: children }));
};
//# sourceMappingURL=button.js.map