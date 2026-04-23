// src/components/ui/textarea.tsx
export const Textarea = ({ className, ...props }: any) => {
  return (
    <textarea
      className={`px-3 py-2 rounded-md outline-none ${className}`}
      {...props}
    />
  );
};