import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Phone, Clock, Shield, MapPin } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ServicePage = () => {
  const scrollToForm = () => {
    window.location.href = '/#contact-form';
  };

  const serviceFAQs = [
    {
      question: 'Quanto custa o conserto de geladeira em São Paulo?',
      answer: 'O valor varia conforme o problema identificado. A visita técnica custa R$ 80 (abatido do serviço). Reparos comuns começam a partir de R$ 150. Fornecemos orçamento detalhado antes de iniciar qualquer reparo.',
    },
    {
      question: 'Quais marcas de geladeira vocês atendem?',
      answer: 'Atendemos todas as marcas: Brastemp, Consul, Electrolux, LG, Samsung, Panasonic, Philco, Frost Free, Duplex, Side by Side e todas as demais.',
    },
    {
      question: 'Qual o prazo para conserto de geladeira?',
      answer: 'Na maioria dos casos, o reparo é realizado na mesma visita. Para problemas que necessitem peças específicas, o prazo pode variar de 24h a 72h.',
    },
    {
      question: 'O serviço tem garantia?',
      answer: 'Sim! Oferecemos garantia de 90 dias para todos os serviços realizados, incluindo mão de obra e peças substituídas.',
    },
    {
      question: 'Atendem em quais bairros de São Paulo?',
      answer: 'Atendemos em toda São Paulo, incluindo Centro, Zona Sul (Morumbi, Vila Mariana, Moema), Zona Norte (Santana, Tucuruvi), Zona Leste (Tatuapé, Mooca) e Zona Oeste (Pinheiros, Butantã).',
    },
  ];

  const commonProblems = [
    'Geladeira não está gelando adequadamente',
    'Freezer formando gelo em excesso',
    'Barulho excessivo ou ruído estranho',
    'Vazamento de água',
    'Luz interna não funciona',
    'Porta não veda corretamente',
    'Compressor não liga',
    'Temperatura irregular',
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-12 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Conserto de Geladeira em São Paulo - Assistência Técnica Especializada
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Técnicos qualificados para reparo de geladeiras de todas as marcas. Atendimento rápido em toda São Paulo com garantia de 90 dias.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={scrollToForm} size="lg" className="bg-gradient-primary">
                  Solicitar Orçamento Grátis
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:11999887766">
                    <Phone className="mr-2 h-5 w-5" />
                    (11) 99988-7766
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Assistência Técnica de Geladeira em São Paulo
              </h2>
              <div className="prose max-w-none text-muted-foreground space-y-4">
                <p>
                  Quando sua geladeira apresenta problemas, você precisa de uma solução rápida e confiável. Nossa equipe de técnicos especializados oferece serviços de conserto de geladeira em São Paulo, atendendo todos os bairros da capital com agilidade e profissionalismo.
                </p>
                <p>
                  Com mais de 10 anos de experiência no mercado, nossa assistência técnica é referência em conserto de geladeiras, oferecendo diagnóstico preciso e reparo eficiente. Trabalhamos com todas as marcas e modelos, desde geladeiras simples até modelos Frost Free, Duplex e Side by Side.
                </p>
                <p>
                  Nossos profissionais são certificados e utilizam apenas peças originais ou de primeira linha, garantindo a qualidade e durabilidade do reparo. Além disso, todos os serviços contam com garantia de 90 dias, demonstrando nossa confiança no trabalho realizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Problemas Comuns em Geladeiras
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {commonProblems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Por Que Escolher Nossa Assistência Técnica?
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Atendimento Rápido</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Respondemos em até 15 minutos e agendamos a visita conforme sua disponibilidade, podendo ser no mesmo dia.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Garantia de 90 Dias</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Todos os reparos incluem garantia de 90 dias para mão de obra e peças, sem custo adicional.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Técnicos Qualificados</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Profissionais certificados com anos de experiência em conserto de geladeiras de todas as marcas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle>Toda São Paulo</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Atendemos todos os bairros de São Paulo e região metropolitana com a mesma qualidade.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Perguntas Frequentes sobre Conserto de Geladeira
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {serviceFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Precisa Consertar sua Geladeira?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Solicite um orçamento gratuito agora mesmo e tenha seu problema resolvido com rapidez e qualidade.
              </p>
              <Button 
                onClick={scrollToForm}
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                Solicitar Orçamento Grátis
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "AssistTech - Assistência Técnica de Eletrodomésticos",
          "image": "https://example.com/logo.png",
          "@id": "",
          "url": "https://example.com",
          "telephone": "+5511999887766",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -23.5505,
            "longitude": -46.6333
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "08:00",
            "closes": "18:00"
          },
          "priceRange": "$$"
        })}
      </script>
    </div>
  );
};

export default ServicePage;
