import { Button } from '@/components/ui/button';
import { Phone, Wrench } from 'lucide-react';

export const Header = () => {
  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Wrench className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">AssistTech</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:11999887766" className="hidden sm:flex items-center gap-2 text-sm text-primary font-medium">
              <Phone className="h-4 w-4" />
              (11) 99988-7766
            </a>
            <Button onClick={scrollToForm} className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
