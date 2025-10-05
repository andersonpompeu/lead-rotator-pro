import { useState } from 'react';
import { useLeads } from '@/contexts/LeadContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserPlus, Trash2 } from 'lucide-react';
import { Professional } from '@/types';

export const ProfessionalsManagement = () => {
  const { professionals, updateProfessional, addProfessional, deleteProfessional } = useLeads();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newProfessional, setNewProfessional] = useState({
    nome: '',
    telefone: '',
    email: '',
    foto: '',
    especialidades: [] as string[],
    ativo: true,
    leadsRecebidos: 0,
    leadsConvertidos: 0,
    tempoMedioResposta: 15,
  });

  const handleAddProfessional = () => {
    if (!newProfessional.nome || !newProfessional.telefone) {
      return;
    }

    const foto = newProfessional.foto || `https://api.dicebear.com/7.x/avataaars/svg?seed=${newProfessional.nome}`;
    
    addProfessional({
      ...newProfessional,
      foto,
    });

    setNewProfessional({
      nome: '',
      telefone: '',
      email: '',
      foto: '',
      especialidades: [],
      ativo: true,
      leadsRecebidos: 0,
      leadsConvertidos: 0,
      tempoMedioResposta: 15,
    });
    setIsAddDialogOpen(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Gerenciamento de Profissionais</CardTitle>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="h-4 w-4 mr-2" />
                Adicionar Profissional
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Novo Profissional</DialogTitle>
                <DialogDescription>
                  Cadastre um novo profissional no sistema
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome *</Label>
                  <Input
                    id="nome"
                    value={newProfessional.nome}
                    onChange={(e) => setNewProfessional({ ...newProfessional, nome: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input
                    id="telefone"
                    value={newProfessional.telefone}
                    onChange={(e) => setNewProfessional({ ...newProfessional, telefone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newProfessional.email}
                    onChange={(e) => setNewProfessional({ ...newProfessional, email: e.target.value })}
                  />
                </div>
                <Button onClick={handleAddProfessional} className="w-full">
                  Cadastrar
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {professionals.map((professional) => (
            <Card key={professional.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={professional.foto}
                    alt={professional.nome}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{professional.nome}</h4>
                    <p className="text-sm text-muted-foreground">{professional.telefone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium">Leads: {professional.leadsRecebidos}</p>
                    <p className="text-sm text-muted-foreground">
                      Convertidos: {professional.leadsConvertidos} (
                      {professional.leadsRecebidos > 0
                        ? ((professional.leadsConvertidos / professional.leadsRecebidos) * 100).toFixed(0)
                        : '0'}
                      %)
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant={professional.ativo ? 'default' : 'secondary'}>
                      {professional.ativo ? 'Ativo' : 'Inativo'}
                    </Badge>
                    <Switch
                      checked={professional.ativo}
                      onCheckedChange={(checked) =>
                        updateProfessional(professional.id, { ativo: checked })
                      }
                    />
                  </div>

                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteProfessional(professional.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
