import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Refrigerator, Wind, Flame, Droplets, Waves, Droplet, Fan } from 'lucide-react';
import { services } from '@/data/sampleData';

const iconMap: { [key: string]: any } = {
  'Refrigerator': Refrigerator,
  'WashingMachine': Waves,
  'Flame': Flame,
  'Microwave': Fan,
  'Droplets': Droplets,
  'Wind': Wind,
  'ToyBrick': Fan,
  'Droplet': Droplet,
};

export const Services = () => {
  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Atendemos todos os tipos de eletrodomésticos com profissionais especializados
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Refrigerator;
            return (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.nome}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.descricao}
                  </p>
                  <p className="text-primary font-semibold">
                    A partir de {service.precoBase}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={scrollToForm}
                    variant="outline" 
                    className="w-full"
                  >
                    Solicitar Reparo
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
