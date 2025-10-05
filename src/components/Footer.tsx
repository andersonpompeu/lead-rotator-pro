import { Wrench, Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="h-6 w-6" />
              <span className="text-xl font-bold">AssistTech</span>
            </div>
            <p className="text-background/80 text-sm">
              Assistência técnica especializada em eletrodomésticos com profissionais qualificados e garantia de serviço.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Conserto de Geladeira</li>
              <li>Conserto de Máquina de Lavar</li>
              <li>Conserto de Fogão</li>
              <li>Conserto de Micro-ondas</li>
              <li>Outros Eletrodomésticos</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (11) 99988-7766
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                contato@assisttech.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                São Paulo - SP
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Horário de Atendimento</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Segunda a Sábado
              </li>
              <li className="ml-6">8h às 18h</li>
              <li className="mt-2">Plantão 24h para emergências</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} AssistTech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
