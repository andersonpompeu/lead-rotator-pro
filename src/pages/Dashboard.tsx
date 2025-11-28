import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLeads } from '@/contexts/LeadContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, TrendingUp, Clock, CheckCircle, RotateCcw, Home, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProfessionalsManagement } from '@/components/dashboard/ProfessionalsManagement';
import { LeadsHistory } from '@/components/dashboard/LeadsHistory';
import { MetricsChart } from '@/components/dashboard/MetricsChart';
import { ServiceContentManagement } from '@/components/dashboard/ServiceContentManagement';
import { Loader2 } from 'lucide-react';

const Dashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { professionals, leads, currentRotationIndex, resetRotation } = useLeads();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  const activeProfessionals = professionals.filter(p => p.ativo);
  const todayLeads = leads.filter(l => {
    const today = new Date().setHours(0, 0, 0, 0);
    const leadDate = new Date(l.timestamp).setHours(0, 0, 0, 0);
    return leadDate === today;
  });

  const convertedLeads = leads.filter(l => l.status === 'convertido');
  const conversionRate = leads.length > 0 ? ((convertedLeads.length / leads.length) * 100).toFixed(1) : '0';
  
  const avgResponseTime = professionals.length > 0
    ? (professionals.reduce((acc, p) => acc + p.tempoMedioResposta, 0) / professionals.length).toFixed(0)
    : '0';

  const nextProfessional = activeProfessionals[currentRotationIndex % activeProfessionals.length];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">Dashboard Administrativo</h1>
            <div className="flex gap-2">
              <Link to="/">
                <Button variant="outline">
                  <Home className="h-4 w-4 mr-2" />
                  Voltar ao Site
                </Button>
              </Link>
              <Button variant="outline" onClick={signOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Leads Hoje</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{todayLeads.length}</div>
              <p className="text-xs text-muted-foreground">Total: {leads.length} leads</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{conversionRate}%</div>
              <p className="text-xs text-muted-foreground">{convertedLeads.length} convertidos</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Profissionais Ativos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeProfessionals.length}</div>
              <p className="text-xs text-muted-foreground">Total: {professionals.length}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Tempo Médio Resposta</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{avgResponseTime}min</div>
              <p className="text-xs text-muted-foreground">Média geral</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Sistema de Rodízio</CardTitle>
            <CardDescription>
              Próximo profissional a receber lead: {nextProfessional ? nextProfessional.nome : 'Nenhum profissional ativo'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  Posição atual: {currentRotationIndex % activeProfessionals.length + 1} de {activeProfessionals.length}
                </div>
              </div>
              <Button onClick={resetRotation} variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Resetar Sequência
              </Button>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="professionals" className="space-y-6">
          <TabsList>
            <TabsTrigger value="professionals">Profissionais</TabsTrigger>
            <TabsTrigger value="leads">Histórico de Leads</TabsTrigger>
            <TabsTrigger value="metrics">Métricas</TabsTrigger>
            <TabsTrigger value="content">Conteúdo SEO</TabsTrigger>
          </TabsList>

          <TabsContent value="professionals">
            <ProfessionalsManagement />
          </TabsContent>

          <TabsContent value="leads">
            <LeadsHistory />
          </TabsContent>

          <TabsContent value="metrics">
            <MetricsChart />
          </TabsContent>

          <TabsContent value="content">
            <ServiceContentManagement />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
