
import { ReactNode } from 'react';

interface PageSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary';
}

const PageSection = ({ children, className = '', background = 'white' }: PageSectionProps) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-gradient-to-br from-primary/5 to-red-600/5'
  };

  return (
    <section className={`py-20 ${backgroundClasses[background]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default PageSection;
