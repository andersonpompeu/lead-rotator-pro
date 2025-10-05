import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Clock, MapPin, Star } from 'lucide-react';
import { services } from '@/data/sampleData';
import { Link } from 'react-router-dom';

export const ServiceSidebar = () => {
  const scrollToForm = () => {
    window.location.href = '/#contact-form';
  };

  const recentPosts = [
    { title: 'Como identificar problemas na geladeira', date: '15/12/2024' },
    { title: '5 sinais que sua máquina precisa de manutenção', date: '10/12/2024' },
    { title: 'Quando trocar o compressor da geladeira', date: '05/12/2024' },
  ];

  return (
    <aside className="space-y-6">
      {/* CTA Card */}
      <Card className="bg-gradient-primary text-primary-foreground">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-3">Precisa de Ajuda?</h3>
          <p className="mb-4 text-primary-foreground/90">
            Solicite um orçamento gratuito agora mesmo!
          </p>
          <Button 
            onClick={scrollToForm}
            variant="secondary" 
            className="w-full mb-3"
          >
            Solicitar Orçamento
          </Button>
          <Button 
            variant="outline" 
            className="w-full bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <a href="tel:11999887766">
              <Phone className="mr-2 h-4 w-4" />
              (11) 99988-7766
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Horário de Atendimento */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Horário de Atendimento
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Segunda a Sexta</span>
            <span className="font-medium">8h às 18h</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sábado</span>
            <span className="font-medium">8h às 14h</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Emergências</span>
            <span className="font-medium">24h</span>
          </div>
        </CardContent>
      </Card>

      {/* Área de Atendimento */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Áreas Atendidas
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <ul className="space-y-1 text-muted-foreground">
            <li>• Zona Sul: Morumbi, Vila Mariana, Moema</li>
            <li>• Zona Norte: Santana, Tucuruvi</li>
            <li>• Zona Leste: Tatuapé, Mooca</li>
            <li>• Zona Oeste: Pinheiros, Butantã</li>
            <li>• Centro: República, Sé</li>
          </ul>
        </CardContent>
      </Card>

      {/* Avaliações */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Avaliação dos Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-warning text-warning" />
              ))}
            </div>
            <span className="font-bold text-2xl">4.9</span>
          </div>
          <p className="text-sm text-muted-foreground">Baseado em 500+ avaliações</p>
        </CardContent>
      </Card>

      {/* Outros Serviços */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Outros Serviços</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {services.slice(0, 5).map((service) => (
              <li key={service.id}>
                <Link 
                  to={`/servicos/${service.slug}`}
                  className="text-sm text-primary hover:underline"
                >
                  {service.nome}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Posts Recentes */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Posts Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {recentPosts.map((post, index) => (
              <li key={index} className="pb-3 border-b last:border-0">
                <h4 className="text-sm font-medium mb-1">{post.title}</h4>
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </aside>
  );
};
