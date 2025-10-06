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
  return (
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
  );
};

export default Home;
