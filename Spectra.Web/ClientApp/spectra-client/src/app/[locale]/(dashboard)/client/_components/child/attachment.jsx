import FileOutline from '@/assets/icons/file-outline';
import { cn } from '@/lib/utils';

export const Attachment = ({ children, ...props }) => {
  return (
    <div
      className={cn(
        'flex items-center gap-3',
        props?.className
      )}
    >
      {children}
    </div>
  );
};

const Icon = ({ children, ...props }) => {
  if (children) return <>{children}</>;

  return (
    <FileOutline
      {...props}
      className={cn(
        'size-6 mdl:size-8 shrink-0 text-greenMain',
        props?.className
      )}
    />
  );
};

Attachment.Icon = Icon;

const Name = ({ children, ...props }) => {
  return (
    <p
      className={cn(
        'font-Medium text-sm mdl:text-xl truncate',
        props?.className
      )}
    >
      {children}
    </p>
  );
};

Attachment.Name = Name;

const SizeAndDate = ({ children, ...props }) => {
  return (
    <span
      {...props}
      dir='ltr'
      className={cn(
        'text-xs mdl:text-base text-grayDark',
        props?.className
      )}
    >
      {children}
    </span>
  );
};

Attachment.SizeAndDate = SizeAndDate;
