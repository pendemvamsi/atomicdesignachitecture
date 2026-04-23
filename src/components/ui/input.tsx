// src/components/ui/input.tsx
export const Input = ({ className, ...props }: any) => {
  return (
    <input
      className={`px-3 py-2 rounded-md outline-none ${className}`}
      {...props}
    />
  );
};