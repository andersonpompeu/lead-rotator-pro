import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Clock, Award } from 'lucide-react';
import heroImage from '@/assets/hero-technician.jpg';

export const Hero = () => {
  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-12 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Assistência Técnica de Eletrodomésticos em São Paulo
              </h1>
              <p className="text-lg text-muted-foreground">
                Atendimento Rápido, Profissionais Qualificados, Garantia de Serviço
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                Atendimento 24h
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Garantia de 90 dias
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                Profissionais Certificados
              </Badge>
            </div>

            <Button 
              onClick={scrollToForm} 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6"
            >
              Solicitar Orçamento Grátis
            </Button>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">15min</div>
                <div className="text-sm text-muted-foreground">Tempo Médio de Resposta</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src={heroImage} 
              alt="Técnico profissional realizando manutenção em eletrodoméstico"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
