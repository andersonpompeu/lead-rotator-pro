import { createContext, useContext, useState, ReactNode } from 'react';
import { serviceData as initialServiceData } from '@/data/serviceContent';

export type ServiceSlug = 
  | 'conserto-geladeira'
  | 'conserto-maquina-lavar'
  | 'conserto-fogao'
  | 'conserto-micro-ondas'
  | 'conserto-lava-loucas'
  | 'conserto-freezer'
  | 'conserto-ar-condicionado'
  | 'conserto-tanquinho';

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceContent {
  title: string;
  metaDescription: string;
  h1: string;
  service: string;
  priceFrom: string;
  description: string;
  commonProblems: string[];
  faqs: ServiceFAQ[];
}

export type ServiceDataType = {
  [key in ServiceSlug]: ServiceContent;
};

interface ServiceContentContextType {
  serviceData: ServiceDataType;
  updateServiceContent: (slug: ServiceSlug, content: ServiceContent) => void;
}

const ServiceContentContext = createContext<ServiceContentContextType | undefined>(undefined);

export const ServiceContentProvider = ({ children }: { children: ReactNode }) => {
  const [serviceData, setServiceData] = useState<ServiceDataType>(initialServiceData as ServiceDataType);

  const updateServiceContent = (slug: ServiceSlug, content: ServiceContent) => {
    setServiceData(prev => ({
      ...prev,
      [slug]: content
    }));
  };

  return (
    <ServiceContentContext.Provider value={{ serviceData, updateServiceContent }}>
      {children}
    </ServiceContentContext.Provider>
  );
};

export const useServiceContent = () => {
  const context = useContext(ServiceContentContext);
  if (!context) {
    throw new Error('useServiceContent must be used within ServiceContentProvider');
  }
  return context;
};
