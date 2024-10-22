import { cn } from '@/lib/utils';

export const GradientCard = ({ children, ...props }) => {
  return (
    <div
      {...props}
      style={{
        background:
          'linear-gradient(91.44deg, #EFFAFC 0.15%, #E9F7FF 33.45%, #D3EDFC 98.36%)',
        boxShadow: '0px 14px 114px -27px #E8F7FF',
      }}
      className={cn(
        'rounded-2xl p-5 my-5 mx-auto',
        props.className
      )}
    >
      {children}
    </div>
  );
};
