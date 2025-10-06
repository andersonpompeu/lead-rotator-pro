import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceSidebar } from '@/components/ServiceSidebar';
import { Button } from '@/components/ui/button';
import { CheckCircle, Phone } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useServiceContent } from '@/contexts/ServiceContentContext';
import { Helmet } from 'react-helmet';

const ServiceTemplate = () => {
  const { slug } = useParams<{ slug: string }>();
  const { serviceData } = useServiceContent();
  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    window.location.href = '/';
    return null;
  }

  const scrollToForm = () => {
    window.location.href = '/#contact-form';
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `AssistTech - ${service.service}`,
    "description": service.metaDescription,
    "telephone": "+5511999887766",
    "priceRange": service.priceFrom,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    }
  };

  return (
    <>
      <Helmet>
        <title>{service.title}</title>
        <meta name="description" content={service.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <article className="lg:col-span-2 space-y-8">
                <div className="bg-gradient-hero py-8 px-6 rounded-lg">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.h1}</h1>
                  <p className="text-lg text-muted-foreground mb-6">
                    Atendimento rápido em toda São Paulo • Garantia de 90 dias • A partir de {service.priceFrom}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={scrollToForm} className="bg-gradient-primary">
                      Solicitar Orçamento Grátis
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="tel:11999887766">
                        <Phone className="mr-2 h-4 w-4" />
                        (11) 99988-7766
                      </a>
                    </Button>
                  </div>
                </div>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Sobre o Serviço de {service.service}</h2>
                  <div 
                    className="prose max-w-none text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </section>

                <section className="bg-accent/30 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">Problemas Comuns em {service.service}</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.commonProblems.map((problem, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{problem}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
                  <Accordion type="single" collapsible>
                    {service.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              </article>

              <ServiceSidebar />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ServiceTemplate;
