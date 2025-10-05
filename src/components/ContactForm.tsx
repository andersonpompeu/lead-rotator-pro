import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLeads } from '@/contexts/LeadContext';
import { services } from '@/data/sampleData';
import { toast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const { addLead } = useLeads();
  const [formData, setFormData] = useState({
    nomeCliente: '',
    telefone: '',
    email: '',
    cep: '',
    tipoAparelho: '',
    descricaoProblema: '',
    melhorHorario: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nomeCliente.trim()) {
      newErrors.nomeCliente = 'Nome é obrigatório';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    } else if (!/^\d{10,11}$/.test(formData.telefone.replace(/\D/g, ''))) {
      newErrors.telefone = 'Telefone inválido';
    }

    if (!formData.cep.trim()) {
      newErrors.cep = 'CEP é obrigatório';
    } else if (!/^\d{5}-?\d{3}$/.test(formData.cep)) {
      newErrors.cep = 'CEP inválido';
    }

    if (!formData.tipoAparelho) {
      newErrors.tipoAparelho = 'Selecione o tipo de aparelho';
    }

    if (!formData.descricaoProblema.trim()) {
      newErrors.descricaoProblema = 'Descrição do problema é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Erro no formulário',
        description: 'Por favor, corrija os campos destacados.',
        variant: 'destructive',
      });
      return;
    }

    addLead(formData);

    setFormData({
      nomeCliente: '',
      telefone: '',
      email: '',
      cep: '',
      tipoAparelho: '',
      descricaoProblema: '',
      melhorHorario: '',
    });

    toast({
      title: 'Solicitação enviada!',
      description: 'Um profissional entrará em contato em breve.',
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Solicite seu Orçamento</CardTitle>
              <CardDescription>
                Preencha os dados abaixo e receba atendimento em minutos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nomeCliente">Nome Completo *</Label>
                    <Input
                      id="nomeCliente"
                      value={formData.nomeCliente}
                      onChange={(e) => setFormData({ ...formData, nomeCliente: e.target.value })}
                      className={errors.nomeCliente ? 'border-destructive' : ''}
                    />
                    {errors.nomeCliente && (
                      <p className="text-sm text-destructive">{errors.nomeCliente}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                    <Input
                      id="telefone"
                      placeholder="(11) 99999-9999"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className={errors.telefone ? 'border-destructive' : ''}
                    />
                    {errors.telefone && (
                      <p className="text-sm text-destructive">{errors.telefone}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cep">CEP *</Label>
                    <Input
                      id="cep"
                      placeholder="00000-000"
                      value={formData.cep}
                      onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
                      className={errors.cep ? 'border-destructive' : ''}
                    />
                    {errors.cep && (
                      <p className="text-sm text-destructive">{errors.cep}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipoAparelho">Tipo de Aparelho *</Label>
                  <Select
                    value={formData.tipoAparelho}
                    onValueChange={(value) => setFormData({ ...formData, tipoAparelho: value })}
                  >
                    <SelectTrigger className={errors.tipoAparelho ? 'border-destructive' : ''}>
                      <SelectValue placeholder="Selecione o aparelho" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.nome}>
                          {service.nome}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.tipoAparelho && (
                    <p className="text-sm text-destructive">{errors.tipoAparelho}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descricaoProblema">Descrição do Problema *</Label>
                  <Textarea
                    id="descricaoProblema"
                    placeholder="Descreva o que está acontecendo com seu aparelho..."
                    value={formData.descricaoProblema}
                    onChange={(e) => setFormData({ ...formData, descricaoProblema: e.target.value })}
                    className={errors.descricaoProblema ? 'border-destructive' : ''}
                    rows={4}
                  />
                  {errors.descricaoProblema && (
                    <p className="text-sm text-destructive">{errors.descricaoProblema}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="melhorHorario">Melhor Horário para Contato</Label>
                  <Select
                    value={formData.melhorHorario}
                    onValueChange={(value) => setFormData({ ...formData, melhorHorario: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o horário" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Manhã">Manhã (8h - 12h)</SelectItem>
                      <SelectItem value="Tarde">Tarde (12h - 18h)</SelectItem>
                      <SelectItem value="Qualquer horário">Qualquer horário</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
