import { Card, CardContent } from '@/components/ui/card';
import { Zap, Award, Shield, DollarSign, Package, MapPin } from 'lucide-react';

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Atendimento Rápido',
      description: 'Respondemos em minutos e agendamos conforme sua disponibilidade',
    },
    {
      icon: Award,
      title: 'Profissionais Qualificados',
      description: 'Técnicos certificados e com anos de experiência',
    },
    {
      icon: Shield,
      title: 'Garantia de Serviço',
      description: 'Todos os reparos com garantia de 90 dias',
    },
    {
      icon: DollarSign,
      title: 'Preço Justo',
      description: 'Orçamento sem compromisso e valores transparentes',
    },
    {
      icon: Package,
      title: 'Peças Originais',
      description: 'Utilizamos apenas peças de qualidade garantida',
    },
    {
      icon: MapPin,
      title: 'Atendimento em toda São Paulo',
      description: 'Cobrimos todos os bairros da capital',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por Que Nos Escolher
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diferenciais que fazem toda a diferença no seu atendimento
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
