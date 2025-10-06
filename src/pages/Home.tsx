import { Helmet } from 'react-helmet';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { ServiceBlogCards } from '@/components/ServiceBlogCards';
import { HowItWorks } from '@/components/HowItWorks';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { DashboardAccess } from '@/components/DashboardAccess';

const Home = () => {
  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.assisttech.com.br/#organization",
    "name": "AssistTech - Assistência Técnica de Eletrodomésticos",
    "image": "https://lovable.dev/opengraph-image-p98pqg.png",
    "description": "Assistência técnica especializada em eletrodomésticos em São Paulo. Atendimento 24h, garantia de 90 dias.",
    "url": "https://www.assisttech.com.br",
    "telephone": "+5511999887766",
    "priceRange": "R$ 60 - R$ 500",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "14:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "São Paulo",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "SP",
        "addressCountry": "BR"
      }
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "-23.5505",
        "longitude": "-46.6333"
      },
      "geoRadius": "50000"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "sameAs": [
      "https://www.facebook.com/assisttech",
      "https://www.instagram.com/assisttech"
    ]
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
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>AssistTech - Assistência Técnica de Eletrodomésticos em São Paulo | Atendimento 24h</title>
        <meta name="description" content="Assistência técnica especializada em eletrodomésticos em São Paulo. Profissionais qualificados, atendimento rápido, garantia de 90 dias. Conserto de geladeira, máquina de lavar, fogão e mais." />
        <link rel="canonical" href="https://www.assisttech.com.br/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaOrganization)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaBreadcrumb)}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <ServiceBlogCards />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <CTASection />
        <Footer />
        <DashboardAccess />
      </div>
    </>
  );
};

export default Home;
