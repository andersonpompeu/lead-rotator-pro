import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

export const CTASection = () => {
  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Precisa de Assistência Técnica Agora?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Não perca tempo! Entre em contato agora e receba atendimento imediato de nossos profissionais qualificados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToForm}
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              Solicitar Orçamento Grátis
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a href="tel:11999887766">
                <Phone className="mr-2 h-5 w-5" />
                (11) 99988-7766
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
