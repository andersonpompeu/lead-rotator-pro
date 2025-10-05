import { MessageSquare, Calendar, Wrench, CheckCircle } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Você solicita o orçamento',
      description: 'Preencha o formulário com os dados do seu eletrodoméstico',
    },
    {
      icon: Calendar,
      title: 'Profissional entra em contato',
      description: 'Em minutos um técnico qualificado entrará em contato',
    },
    {
      icon: Wrench,
      title: 'Visita técnica agendada',
      description: 'Agendamos a visita no melhor horário para você',
    },
    {
      icon: CheckCircle,
      title: 'Problema resolvido',
      description: 'Reparo realizado com garantia de 90 dias',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Processo simples e rápido em 4 passos
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-md">
                  <step.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
