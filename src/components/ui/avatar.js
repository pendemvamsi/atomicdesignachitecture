import { jsx as _jsx } from "react/jsx-runtime";
// src/components/ui/avatar.tsx
export const Avatar = ({ children, className }) => {
    return (_jsx("div", { className: `rounded-full overflow-hidden ${className}`, children: children }));
};
export const AvatarImage = ({ src }) => {
    return _jsx("img", { src: src, alt: "", className: "w-full h-full object-cover" });
};
export const AvatarFallback = ({ children, className }) => {
    return (_jsx("div", { className: `flex items-center justify-center w-full h-full ${className}`, children: children }));
};
//# sourceMappingURL=avatar.js.map