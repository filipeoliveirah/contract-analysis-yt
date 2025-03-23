import { api } from "@/lib/api";
import stripePromise from "@/lib/stripe";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../card";
import { Button } from "../button";
import { freeFeatures, premiumFeatures } from "./data";
import { PricingCardProps } from "./types";
import { Check } from "lucide-react";

export function PricingSection() {
  const handleUpgrade = async () => {
    try {
      const response = await api.get("/payments/create-checkout-session");
      const stripe = await stripePromise;
      await stripe?.redirectToCheckout({
        sessionId: response.data.sessionId,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container flex flex-col gap-8 px-4 py-16 bg-gradient-to-b from-background to-background/80">
      <div>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-center">
        Escolha o plano ideal para você
      </h2>
        <p className="text-lg text-muted-foreground mt-4 text-center max-w-3xl mx-auto">
          Selecione o plano perfeito para suas necessidades. Faça upgrade a qualquer momento para
          desbloquear recursos e suporte premium.
        </p></div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <PricingCard
          title="Básico"
          description="Perfeito para iniciantes"
          price="R$0"
          features={freeFeatures}
          buttonText="Conhecer"
          onButtonClick={handleUpgrade}
        />
        <PricingCard
          title="Premium"
          description="Para análise inteligente de contratos"
          price="R$100"
          highlight
          period="/mês"
          features={premiumFeatures}
          buttonText="Fazer Upgrade"
          onButtonClick={handleUpgrade}
        />
      </div>
    </div>
  );
}



function PricingCard({
  title,
  description,
  price,
  features,
  period,
  buttonText,
  highlight,
  onButtonClick,
}: PricingCardProps) {
  return (
    <Card
      className={`flex flex-col ${highlight ? "border-primary shadow-lg" : ""
        } relative overflow-hidden transition-all duration-300`}
    >
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-5xl font-extrabold mb-6">
          {price}
          {period && <span className="text-base font-normal text-muted-foreground">
            {period}
          </span>}
        </p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li className="flex items-center gap-2" key={index}>
              <Check className="h-4 w-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          variant={highlight ? "default" : "outline"}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
