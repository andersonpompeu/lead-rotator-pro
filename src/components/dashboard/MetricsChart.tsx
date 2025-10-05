import { useLeads } from '@/contexts/LeadContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export const MetricsChart = () => {
  const { professionals, leads } = useLeads();

  const professionalData = professionals.map(p => ({
    name: p.nome,
    leads: p.leadsRecebidos,
    convertidos: p.leadsConvertidos,
  }));

  const statusData = [
    { name: 'Pendente', value: leads.filter(l => l.status === 'pendente').length, color: 'hsl(var(--secondary))' },
    { name: 'Em Atendimento', value: leads.filter(l => l.status === 'em_atendimento').length, color: 'hsl(var(--primary))' },
    { name: 'Convertido', value: leads.filter(l => l.status === 'convertido').length, color: 'hsl(var(--success))' },
    { name: 'Perdido', value: leads.filter(l => l.status === 'perdido').length, color: 'hsl(var(--destructive))' },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Distribuição por Status</CardTitle>
          <CardDescription>Status atual de todos os leads</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Leads por Profissional</CardTitle>
          <CardDescription>Total de leads recebidos e convertidos</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={professionalData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="leads" fill="hsl(var(--primary))" name="Recebidos" />
              <Bar dataKey="convertidos" fill="hsl(var(--success))" name="Convertidos" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Resumo de Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {professionals.map((professional) => {
              const conversionRate = professional.leadsRecebidos > 0
                ? ((professional.leadsConvertidos / professional.leadsRecebidos) * 100).toFixed(1)
                : '0';

              return (
                <div key={professional.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src={professional.foto}
                      alt={professional.nome}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-medium">{professional.nome}</h4>
                      <p className="text-sm text-muted-foreground">
                        {professional.especialidades.join(', ') || 'Todas especialidades'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8 text-sm">
                    <div className="text-center">
                      <p className="font-semibold text-2xl">{professional.leadsRecebidos}</p>
                      <p className="text-muted-foreground">Leads</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-2xl">{professional.leadsConvertidos}</p>
                      <p className="text-muted-foreground">Convertidos</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-2xl">{conversionRate}%</p>
                      <p className="text-muted-foreground">Taxa</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-2xl">{professional.tempoMedioResposta}min</p>
                      <p className="text-muted-foreground">Resposta</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
