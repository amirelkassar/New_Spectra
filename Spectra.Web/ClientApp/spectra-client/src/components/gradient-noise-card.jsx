import { cn } from '@/lib/utils';

export const GradientNoiseCard = ({ children, ...props }) => {
  return (
    <div
      {...props}
      style={{
        background:
          'linear-gradient(271.33deg, #10B0C1 41.55%, #3EDDEE 99.96%)',
        ...props?.style,
      }}
      className={cn(
        'p-4 rounded-xl relative before:absolute before:w-full before:h-full before:bg-[url(/noise.webp)] before:bg-cover before:bg-center before:bg-no-repeat before:opacity-10 before:start-0 before:top-0 transition-all text-white',
        props?.className
      )}
    >
      {children}
    </div>
  );
};
