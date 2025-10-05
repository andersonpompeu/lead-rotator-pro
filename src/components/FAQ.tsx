import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQ = () => {
  const faqs = [
    {
      question: 'Qual o prazo para atendimento?',
      answer: 'Entramos em contato em até 15 minutos após o recebimento da solicitação. O agendamento da visita técnica é feito conforme sua disponibilidade, podendo ser no mesmo dia.',
    },
    {
      question: 'Vocês cobram a visita técnica?',
      answer: 'A visita técnica tem um custo de R$ 50, que é abatido do valor do serviço caso você aprove o orçamento.',
    },
    {
      question: 'Trabalham com quais marcas?',
      answer: 'Atendemos todas as marcas de eletrodomésticos: Brastemp, Consul, Electrolux, LG, Samsung, Panasonic, Philco, entre outras.',
    },
    {
      question: 'O serviço tem garantia?',
      answer: 'Sim! Todos os nossos reparos têm garantia de 90 dias, tanto para mão de obra quanto para peças substituídas.',
    },
    {
      question: 'Quais formas de pagamento aceitam?',
      answer: 'Aceitamos dinheiro, PIX, cartão de débito e crédito (em até 3x sem juros).',
    },
    {
      question: 'Atendem aos finais de semana?',
      answer: 'Sim! Atendemos de segunda a sábado, das 8h às 18h. Para emergências, temos plantão 24h.',
    },
    {
      question: 'Como solicito o orçamento?',
      answer: 'É simples! Preencha o formulário nesta página com as informações do seu eletrodoméstico e entraremos em contato rapidamente.',
    },
    {
      question: 'Vocês cobrem qual região?',
      answer: 'Atendemos toda a cidade de São Paulo e região metropolitana.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
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
  );
};
