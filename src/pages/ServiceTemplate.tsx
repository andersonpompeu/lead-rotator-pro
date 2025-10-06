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

  const currentUrl = `https://www.assisttech.com.br/servicos/${slug}`;
  
  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${currentUrl}#localbusiness`,
    "name": `AssistTech - ${service.service}`,
    "description": service.metaDescription,
    "url": currentUrl,
    "telephone": "+5511999887766",
    "priceRange": service.priceFrom,
    "image": "https://lovable.dev/opengraph-image-p98pqg.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Paulista, 1000",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01310-100",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-23.5505",
      "longitude": "-46.6333"
    },
    "areaServed": {
      "@type": "City",
      "name": "São Paulo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://www.assisttech.com.br/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": service.service,
        "item": currentUrl
      }
    ]
  };

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Conserto de ${service.service}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "AssistTech",
      "telephone": "+5511999887766"
    },
    "areaServed": {
      "@type": "City",
      "name": "São Paulo"
    },
    "offers": {
      "@type": "Offer",
      "price": service.priceFrom.replace('R$ ', ''),
      "priceCurrency": "BRL"
    }
  };

  return (
    <>
      <Helmet>
        <title>{service.title}</title>
        <meta name="description" content={service.metaDescription} />
        <link rel="canonical" href={currentUrl} />
        
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="São Paulo" />
        
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.metaDescription} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="AssistTech" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={service.title} />
        <meta name="twitter:description" content={service.metaDescription} />
        
        <script type="application/ld+json">{JSON.stringify(schemaLocalBusiness)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
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
