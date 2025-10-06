import { useState } from 'react';
import { useServiceContent, ServiceSlug, ServiceContent } from '@/contexts/ServiceContentContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Save, Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const serviceOptions: { value: ServiceSlug; label: string }[] = [
  { value: 'conserto-geladeira', label: 'Conserto de Geladeira' },
  { value: 'conserto-maquina-lavar', label: 'Conserto de Máquina de Lavar' },
  { value: 'conserto-fogao', label: 'Conserto de Fogão' },
  { value: 'conserto-micro-ondas', label: 'Conserto de Micro-ondas' },
  { value: 'conserto-lava-loucas', label: 'Conserto de Lava-louças' },
  { value: 'conserto-freezer', label: 'Conserto de Freezer' },
  { value: 'conserto-ar-condicionado', label: 'Conserto de Ar Condicionado' },
  { value: 'conserto-tanquinho', label: 'Conserto de Tanquinho' },
];

export const ServiceContentManagement = () => {
  const { serviceData, updateServiceContent } = useServiceContent();
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<ServiceSlug>('conserto-geladeira');
  const [editedContent, setEditedContent] = useState<ServiceContent>(serviceData[selectedService]);

  const handleServiceChange = (value: ServiceSlug) => {
    setSelectedService(value);
    setEditedContent(serviceData[value]);
  };

  const handleSave = () => {
    updateServiceContent(selectedService, editedContent);
    toast({
      title: 'Conteúdo Atualizado',
      description: 'As alterações foram salvas com sucesso.',
    });
  };

  const handleAddProblem = () => {
    setEditedContent(prev => ({
      ...prev,
      commonProblems: [...prev.commonProblems, '']
    }));
  };

  const handleRemoveProblem = (index: number) => {
    setEditedContent(prev => ({
      ...prev,
      commonProblems: prev.commonProblems.filter((_, i) => i !== index)
    }));
  };

  const handleProblemChange = (index: number, value: string) => {
    setEditedContent(prev => ({
      ...prev,
      commonProblems: prev.commonProblems.map((p, i) => i === index ? value : p)
    }));
  };

  const handleAddFAQ = () => {
    setEditedContent(prev => ({
      ...prev,
      faqs: [...prev.faqs, { question: '', answer: '' }]
    }));
  };

  const handleRemoveFAQ = (index: number) => {
    setEditedContent(prev => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index)
    }));
  };

  const handleFAQChange = (index: number, field: 'question' | 'answer', value: string) => {
    setEditedContent(prev => ({
      ...prev,
      faqs: prev.faqs.map((faq, i) => 
        i === index ? { ...faq, [field]: value } : faq
      )
    }));
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link'],
      ['clean']
    ],
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Gerenciar Conteúdo SEO
            </CardTitle>
            <CardDescription>
              Edite o conteúdo das páginas de serviço otimizadas para SEO
            </CardDescription>
          </div>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Salvar Alterações
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="service-select">Selecionar Serviço</Label>
          <Select value={selectedService} onValueChange={handleServiceChange}>
            <SelectTrigger id="service-select">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Básico</TabsTrigger>
            <TabsTrigger value="description">Descrição</TabsTrigger>
            <TabsTrigger value="problems">Problemas</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4">
            <div>
              <Label htmlFor="title">Título da Página (SEO)</Label>
              <Input
                id="title"
                value={editedContent.title}
                onChange={(e) => setEditedContent(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Título otimizado para SEO"
              />
            </div>

            <div>
              <Label htmlFor="meta">Meta Description</Label>
              <Textarea
                id="meta"
                value={editedContent.metaDescription}
                onChange={(e) => setEditedContent(prev => ({ ...prev, metaDescription: e.target.value }))}
                placeholder="Descrição para mecanismos de busca"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="h1">H1 (Título Principal)</Label>
              <Input
                id="h1"
                value={editedContent.h1}
                onChange={(e) => setEditedContent(prev => ({ ...prev, h1: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="service">Nome do Serviço</Label>
                <Input
                  id="service"
                  value={editedContent.service}
                  onChange={(e) => setEditedContent(prev => ({ ...prev, service: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="price">Preço Inicial</Label>
                <Input
                  id="price"
                  value={editedContent.priceFrom}
                  onChange={(e) => setEditedContent(prev => ({ ...prev, priceFrom: e.target.value }))}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="description" className="space-y-4">
            <div>
              <Label>Descrição do Serviço (HTML)</Label>
              <div className="mt-2">
                <ReactQuill
                  theme="snow"
                  value={editedContent.description}
                  onChange={(value) => setEditedContent(prev => ({ ...prev, description: value }))}
                  modules={modules}
                  className="bg-background"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Mínimo recomendado: 300 palavras para SEO
              </p>
            </div>
          </TabsContent>

          <TabsContent value="problems" className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Problemas Comuns</Label>
              <Button onClick={handleAddProblem} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar Problema
              </Button>
            </div>
            <div className="space-y-2">
              {editedContent.commonProblems.map((problem, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={problem}
                    onChange={(e) => handleProblemChange(index, e.target.value)}
                    placeholder={`Problema ${index + 1}`}
                  />
                  <Button
                    onClick={() => handleRemoveProblem(index)}
                    size="icon"
                    variant="destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faqs" className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Perguntas Frequentes</Label>
              <Button onClick={handleAddFAQ} size="sm" variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Adicionar FAQ
              </Button>
            </div>
            <div className="space-y-4">
              {editedContent.faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 space-y-3">
                        <div>
                          <Label>Pergunta</Label>
                          <Input
                            value={faq.question}
                            onChange={(e) => handleFAQChange(index, 'question', e.target.value)}
                            placeholder="Digite a pergunta"
                          />
                        </div>
                        <div>
                          <Label>Resposta</Label>
                          <Textarea
                            value={faq.answer}
                            onChange={(e) => handleFAQChange(index, 'answer', e.target.value)}
                            placeholder="Digite a resposta"
                            rows={3}
                          />
                        </div>
                      </div>
                      <Button
                        onClick={() => handleRemoveFAQ(index)}
                        size="icon"
                        variant="destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
