export interface Professional {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  foto: string;
  especialidades: string[];
  ativo: boolean;
  leadsRecebidos: number;
  leadsConvertidos: number;
  tempoMedioResposta: number;
}

export interface Lead {
  id: string;
  timestamp: Date;
  nomeCliente: string;
  telefone: string;
  email: string;
  cep: string;
  tipoAparelho: string;
  descricaoProblema: string;
  melhorHorario: string;
  profissionalDesignado: string;
  status: 'pendente' | 'em_atendimento' | 'convertido' | 'perdido';
}

export interface Service {
  id: string;
  nome: string;
  icon: string;
  descricao: string;
  precoBase: string;
  slug: string;
}
