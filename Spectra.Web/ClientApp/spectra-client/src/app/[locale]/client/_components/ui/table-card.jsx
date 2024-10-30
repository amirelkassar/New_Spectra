import { cn } from '@/lib/utils';

export const TableCard = ({ children }) => {
  return children;
};

const CardContainer = ({ children, ...props }) => {
  return (
    <div
      {...props}
      style={{
        boxShadow: '3px 4px 16.9px 0px #0000000D',
        ...props.style,
      }}
      className={cn(
        'p-5 relative rounded-xl transition hover:bg-blueLight',
        props.className
      )}
    >
      {children}
    </div>
  );
};
TableCard.Container = CardContainer;

const CardBody = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'pb-5 border-b-2 border-grayMedium/50',
        props.className
      )}
    >
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-9 text-xs space-y-3'>
          {children}
        </div>
        <span className='col-span-3' />
      </div>
    </div>
  );
};

TableCard.Body = CardBody;

const CardFooter = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'grid grid-cols-3 place-items-center font-medium pt-5',
        props.className
      )}
    >
      {children}
    </div>
  );
};

TableCard.Footer = CardFooter;

const CardAction = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn(
        'absolute top-2 end-3',
        props.className
      )}
    >
      {children}
    </div>
  );
};

TableCard.Action = CardAction;

const CardFallback = ({ children, ...props }) => {
  return (
    <div
      className='p-5 rounded-xl flex items-center justify-center h-40 text-center text-xs border-4 border-blueLight'
      {...props}
    >
      {children}
    </div>
  );
};

TableCard.Fallback = CardFallback;
