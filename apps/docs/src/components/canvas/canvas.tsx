import { cx } from '@aphrodite-ui/react';

export interface CanvasProps {
  children: React.ReactNode;
  className?: string;
}

export function Canvas(props: CanvasProps) {
  const { children, className } = props;
  return (
    <div className="pb-4">
      <div
        className={cx(
          'p-4 border rounded-xl mt-6  border-neutral-6 overflow-x-auto',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
