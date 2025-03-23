import { cn } from "@/lib/utils";
import {
  ArrowRight,
  FileSearch,
  Globe,
  Hourglass,
  PiggyBank,
  Scale,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    title: "Análise com IA",
    description:
      "Utilize IA avançada para analisar contratos de forma rápida e precisa.",
    icon: FileSearch,
  },
  {
    title: "Identificação de Riscos",
    description: "Identifique potenciais riscos e oportunidades em seus contratos.",
    icon: ShieldCheck,
  },
  {
    title: "Negociação Simplificada",
    description: "Acelere o processo de negociação com insights baseados em IA.",
    icon: Hourglass,
  },
  {
    title: "Redução de Custos",
    description: "Reduza significativamente os custos legais através da automação.",
    icon: PiggyBank,
  },
  {
    title: "Conformidade Aprimorada",
    description: "Garanta que seus contratos atendam a todos os requisitos regulatórios.",
    icon: Scale,
  },
  {
    title: "Resposta mais Rápida",
    description: "Complete revisões de contratos em minutos, em vez de horas.",
    icon: Zap,
  },
];

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6 flex flex-col items-center max-w-6xl mx-auto">
        <Link
          href={"/dashboard"}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "px-4 py-2 mb-4 rounded-full hidden md:flex"
          )}
        >
          <span className="mr-3 hidden md:block">
            <Sparkles className="size-3.5" />
          </span>
          Métricas inteligentes para contratos de sucesso
        </Link>
        <div className="text-center mb-12 w-full">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4">
            Revolucione Seus Contratos utilizando IA
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Aproveite o poder da IA para analisar, entender e otimizar seus
            contratos em pouco tempo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              className="inline-flex items-center justify-center text-lg"
              size={"lg"}
            >
              Começar
              <ArrowRight className="ml-2 size-5" />
            </Button>
            <Button
              className="inline-flex items-center justify-center text-lg"
              size={"lg"}
              variant={"outline"}
            >
              Saiba Mais
              <Globe className="ml-2 size-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
            {features.map((feature) => (
              <Card key={feature.title} className="h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}