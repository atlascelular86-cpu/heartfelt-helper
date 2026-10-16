import { z } from 'zod';
export const supportUrl = 'https://wa.me/5511937588251';
export const plans = [
 { id: 'landing', name: 'Landing Page', price: 39.99, label: 'Para transformar visitas em oportunidades.', features: ['Página focada no seu serviço', 'Design exclusivo para sua marca', 'Versão para celular e computador', 'Botão de contato pelo WhatsApp'] },
 { id: 'company', name: 'Site Institucional', price: 59.99, label: 'Sua empresa com a presença que merece.', features: ['Apresentação completa da empresa', 'Páginas de serviços e contato', 'Galeria dos seus trabalhos', 'Design exclusivo para sua marca'] },
 { id: 'system', name: 'Sistema Personalizado', price: 89.99, label: 'Tecnologia para simplificar seu dia a dia.', features: ['Solução para a sua operação', 'Funcionalidades sob medida', 'Interface intuitiva e profissional', 'Proposta conforme a complexidade'] },
] as const;
export const requestSchema = z.object({
 company_name: z.string().trim().min(2).max(100), contact_name: z.string().trim().min(2).max(100),
 email: z.string().trim().email().max(255), phone: z.string().trim().regex(/^[\d\s()+-]{10,20}$/),
 plan: z.enum(['landing','company','system']), description: z.string().trim().min(10).max(2000),
 files: z.array(z.object({ kind: z.enum(['logo','service']), type: z.enum(['image/png','image/jpeg','image/webp']), content: z.string().max(2800000) })).max(6),
});
export type CompanyRequest = z.infer<typeof requestSchema>;
