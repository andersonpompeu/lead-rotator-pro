import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Costa',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
      service: 'Conserto de Geladeira',
      rating: 5,
      text: 'Excelente atendimento! O técnico chegou no horário, foi muito profissional e resolveu o problema rapidamente. Recomendo!',
    },
    {
      name: 'Pedro Alves',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro',
      service: 'Conserto de Máquina de Lavar',
      rating: 5,
      text: 'Muito satisfeito com o serviço. Preço justo, garantia e qualidade. Minha máquina ficou como nova!',
    },
    {
      name: 'Lucia Ferreira',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucia',
      service: 'Conserto de Fogão',
      rating: 5,
      text: 'Atendimento impecável desde o primeiro contato. O profissional foi educado e explicou tudo que seria feito.',
    },
    {
      name: 'Roberto Silva',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto',
      service: 'Conserto de Micro-ondas',
      rating: 5,
      text: 'Rapidez e eficiência! Entrei em contato pela manhã e no mesmo dia já estava resolvido. Parabéns!',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Avaliações reais de quem já confiou em nossos serviços
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mb-3"
                  />
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{testimonial.service}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
