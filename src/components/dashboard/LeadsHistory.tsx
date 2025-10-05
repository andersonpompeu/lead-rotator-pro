import { useState } from 'react';
import { useLeads } from '@/contexts/LeadContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Lead } from '@/types';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const LeadsHistory = () => {
  const { leads, professionals, updateLeadStatus } = useLeads();
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredLeads = statusFilter === 'all' 
    ? leads 
    : leads.filter(l => l.status === statusFilter);

  const getProfessionalName = (id: string) => {
    const professional = professionals.find(p => p.id === id);
    return professional?.nome || 'Desconhecido';
  };

  const getStatusBadge = (status: Lead['status']) => {
    const variants = {
      'pendente': 'secondary',
      'em_atendimento': 'default',
      'convertido': 'default',
      'perdido': 'destructive',
    };

    const labels = {
      'pendente': 'Pendente',
      'em_atendimento': 'Em Atendimento',
      'convertido': 'Convertido',
      'perdido': 'Perdido',
    };

    return (
      <Badge variant={variants[status] as any} className={status === 'convertido' ? 'bg-success' : ''}>
        {labels[status]}
      </Badge>
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Histórico de Leads</CardTitle>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filtrar por status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="pendente">Pendente</SelectItem>
              <SelectItem value="em_atendimento">Em Atendimento</SelectItem>
              <SelectItem value="convertido">Convertido</SelectItem>
              <SelectItem value="perdido">Perdido</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredLeads.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Nenhum lead encontrado</p>
          ) : (
            filteredLeads.map((lead) => (
              <Card key={lead.id} className="p-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold">{lead.nomeCliente}</h4>
                      {getStatusBadge(lead.status)}
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>📞 {lead.telefone}</p>
                      <p>📦 {lead.tipoAparelho}</p>
                      <p>📍 CEP: {lead.cep}</p>
                    </div>
                  </div>
                  <div>
                    <div className="space-y-1 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-medium">Data:</span>{' '}
                        {format(new Date(lead.timestamp), "dd 'de' MMMM 'às' HH:mm", { locale: ptBR })}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Profissional:</span>{' '}
                        {getProfessionalName(lead.profissionalDesignado)}
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Problema:</span> {lead.descricaoProblema}
                      </p>
                      {lead.melhorHorario && (
                        <p className="text-muted-foreground">
                          <span className="font-medium">Melhor horário:</span> {lead.melhorHorario}
                        </p>
                      )}
                    </div>
                    <div className="mt-3">
                      <Select
                        value={lead.status}
                        onValueChange={(value) => updateLeadStatus(lead.id, value as Lead['status'])}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pendente">Pendente</SelectItem>
                          <SelectItem value="em_atendimento">Em Atendimento</SelectItem>
                          <SelectItem value="convertido">Convertido</SelectItem>
                          <SelectItem value="perdido">Perdido</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};
