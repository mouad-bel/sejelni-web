declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';
  
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }
  
  export const ArrowRight: ComponentType<LucideProps>;
  export const Play: ComponentType<LucideProps>;
  export const Check: ComponentType<LucideProps>;
  export const X: ComponentType<LucideProps>;
  export const Crown: ComponentType<LucideProps>;
  export const Zap: ComponentType<LucideProps>;
  export const ChevronDown: ComponentType<LucideProps>;
  export const Building2: ComponentType<LucideProps>;
  export const Lock: ComponentType<LucideProps>;
  export const ArrowLeft: ComponentType<LucideProps>;
  export const Copy: ComponentType<LucideProps>;
  export const Star: ComponentType<LucideProps>;
  export const Quote: ComponentType<LucideProps>;
  export const Mail: ComponentType<LucideProps>;
  export const Phone: ComponentType<LucideProps>;
  export const MapPin: ComponentType<LucideProps>;
  export const Clock: ComponentType<LucideProps>;
  export const Send: ComponentType<LucideProps>;
  export const Facebook: ComponentType<LucideProps>;
  export const Twitter: ComponentType<LucideProps>;
  export const Linkedin: ComponentType<LucideProps>;
  export const Instagram: ComponentType<LucideProps>;
  export const Menu: ComponentType<LucideProps>;
  export const ChevronLeft: ComponentType<LucideProps>;
  export const ChevronRight: ComponentType<LucideProps>;
}