import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Professional, Lead } from '@/types';
import { initialProfessionals, initialLeads } from '@/data/sampleData';
import { toast } from '@/hooks/use-toast';

interface LeadContextType {
  professionals: Professional[];
  leads: Lead[];
  currentRotationIndex: number;
  addLead: (lead: Omit<Lead, 'id' | 'timestamp' | 'profissionalDesignado' | 'status'>) => void;
  updateProfessional: (id: string, updates: Partial<Professional>) => void;
  updateLeadStatus: (id: string, status: Lead['status']) => void;
  resetRotation: () => void;
  addProfessional: (professional: Omit<Professional, 'id'>) => void;
  deleteProfessional: (id: string) => void;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export const LeadProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [professionals, setProfessionals] = useState<Professional[]>(initialProfessionals);
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [currentRotationIndex, setCurrentRotationIndex] = useState(0);

  const addLead = (leadData: Omit<Lead, 'id' | 'timestamp' | 'profissionalDesignado' | 'status'>) => {
    const activeProfessionals = professionals.filter(p => p.ativo);
    
    if (activeProfessionals.length === 0) {
      toast({
        title: "Erro ao distribuir lead",
        description: "Não há profissionais ativos no momento.",
        variant: "destructive",
      });
      return;
    }

    const assignedProfessional = activeProfessionals[currentRotationIndex % activeProfessionals.length];
    
    const newLead: Lead = {
      ...leadData,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
      profissionalDesignado: assignedProfessional.id,
      status: 'pendente',
    };

    setLeads(prev => [newLead, ...prev]);
    
    setProfessionals(prev => prev.map(p => 
      p.id === assignedProfessional.id 
        ? { ...p, leadsRecebidos: p.leadsRecebidos + 1 }
        : p
    ));

    setCurrentRotationIndex(prev => (prev + 1) % activeProfessionals.length);

    toast({
      title: "Lead recebido!",
      description: `Distribuído para ${assignedProfessional.nome}`,
    });
  };

  const updateProfessional = (id: string, updates: Partial<Professional>) => {
    setProfessionals(prev => prev.map(p => 
      p.id === id ? { ...p, ...updates } : p
    ));
  };

  const updateLeadStatus = (id: string, status: Lead['status']) => {
    setLeads(prev => prev.map(l => 
      l.id === id ? { ...l, status } : l
    ));

    if (status === 'convertido') {
      const lead = leads.find(l => l.id === id);
      if (lead) {
        setProfessionals(prev => prev.map(p => 
          p.id === lead.profissionalDesignado 
            ? { ...p, leadsConvertidos: p.leadsConvertidos + 1 }
            : p
        ));
      }
    }
  };

  const resetRotation = () => {
    setCurrentRotationIndex(0);
    toast({
      title: "Rodízio resetado",
      description: "A sequência de distribuição foi reiniciada.",
    });
  };

  const addProfessional = (professionalData: Omit<Professional, 'id'>) => {
    const newProfessional: Professional = {
      ...professionalData,
      id: Math.random().toString(36).substr(2, 9),
    };
    setProfessionals(prev => [...prev, newProfessional]);
    toast({
      title: "Profissional adicionado",
      description: `${professionalData.nome} foi cadastrado com sucesso.`,
    });
  };

  const deleteProfessional = (id: string) => {
    setProfessionals(prev => prev.filter(p => p.id !== id));
    toast({
      title: "Profissional removido",
      description: "O profissional foi removido do sistema.",
    });
  };

  return (
    <LeadContext.Provider
      value={{
        professionals,
        leads,
        currentRotationIndex,
        addLead,
        updateProfessional,
        updateLeadStatus,
        resetRotation,
        addProfessional,
        deleteProfessional,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
};

export const useLeads = () => {
  const context = useContext(LeadContext);
  if (context === undefined) {
    throw new Error('useLeads must be used within a LeadProvider');
  }
  return context;
};
