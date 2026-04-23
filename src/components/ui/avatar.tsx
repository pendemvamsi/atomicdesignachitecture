// src/components/ui/avatar.tsx
export const Avatar = ({ children, className }: any) => {
  return (
    <div className={`rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

export const AvatarImage = ({ src }: any) => {
  return <img src={src} alt="" className="w-full h-full object-cover" />;
};

export const AvatarFallback = ({ children, className }: any) => {
  return (
    <div className={`flex items-center justify-center w-full h-full ${className}`}>
      {children}
    </div>
  );
};