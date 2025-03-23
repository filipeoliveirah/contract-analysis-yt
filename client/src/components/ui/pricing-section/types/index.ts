export interface PricingCardProps {
    title: string;
    description: string;
    price: string;
    period?: string;
    features: string[];
    buttonText: string;
    highlight?: boolean;
    onButtonClick: () => void;
  }