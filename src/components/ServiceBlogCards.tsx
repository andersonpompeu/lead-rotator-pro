import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import geladeiraImg from '@/assets/services/geladeira.jpg';
import maquinaLavarImg from '@/assets/services/maquina-lavar.jpg';
import fogaoImg from '@/assets/services/fogao.jpg';
import microOndasImg from '@/assets/services/micro-ondas.jpg';
import lavaLoucasImg from '@/assets/services/lava-loucas.jpg';
import freezerImg from '@/assets/services/freezer.jpg';
import arCondicionadoImg from '@/assets/services/ar-condicionado.jpg';
import tanquinhoImg from '@/assets/services/tanquinho.jpg';

const servicePosts = [
  {
    slug: 'conserto-geladeira',
    title: 'Conserto de Geladeira',
    excerpt: 'Assistência técnica especializada para geladeiras e refrigeradores. Atendimento rápido e garantido.',
    image: geladeiraImg,
  },
  {
    slug: 'conserto-maquina-lavar',
    title: 'Conserto de Máquina de Lavar',
    excerpt: 'Reparo profissional para máquinas de lavar roupa. Todas as marcas e modelos.',
    image: maquinaLavarImg,
  },
  {
    slug: 'conserto-fogao',
    title: 'Conserto de Fogão',
    excerpt: 'Manutenção e reparo de fogões e cooktops. Serviço especializado com garantia.',
    image: fogaoImg,
  },
  {
    slug: 'conserto-micro-ondas',
    title: 'Conserto de Micro-ondas',
    excerpt: 'Assistência técnica para micro-ondas. Diagnóstico preciso e reparo rápido.',
    image: microOndasImg,
  },
  {
    slug: 'conserto-lava-loucas',
    title: 'Conserto de Lava-louças',
    excerpt: 'Reparo profissional de lava-louças. Técnicos especializados e peças originais.',
    image: lavaLoucasImg,
  },
  {
    slug: 'conserto-freezer',
    title: 'Conserto de Freezer',
    excerpt: 'Manutenção e conserto de freezers verticais e horizontais. Atendimento qualificado.',
    image: freezerImg,
  },
  {
    slug: 'conserto-ar-condicionado',
    title: 'Conserto de Ar Condicionado',
    excerpt: 'Assistência técnica completa para ar condicionado. Instalação, manutenção e reparo.',
    image: arCondicionadoImg,
  },
  {
    slug: 'conserto-tanquinho',
    title: 'Conserto de Tanquinho',
    excerpt: 'Reparo de tanquinhos e lavadoras portáteis. Serviço rápido e eficiente.',
    image: tanquinhoImg,
  },
];

export const ServiceBlogCards = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Guias Completos de Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça em detalhes nossos serviços especializados de assistência técnica
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicePosts.map((post) => (
            <Link
              key={post.slug}
              to={`/servicos/${post.slug}`}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={`Serviço de ${post.title} em São Paulo - Técnico especializado`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Ler mais
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
