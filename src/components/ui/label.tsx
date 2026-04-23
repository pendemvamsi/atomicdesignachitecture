// src/components/ui/label.tsx
export const Label = ({ children, className }: any) => {
  return (
    <label className={`text-sm font-medium ${className}`}>
      {children}
    </label>
  );
};