import { z } from 'zod';
export const supportUrl = 'https://wa.me/5511937588251';
export const websiteDeliveryDays = 3;
export const plans = [
 { id: 'landing', name: 'Landing Page', price: 39.99, label: 'Para transformar visitas em oportunidades.', description: 'Uma página dedicada a apresentar seu serviço e levar o visitante até o contato com sua empresa.', audience: 'Ideal para divulgar um serviço ou uma oferta.', features: ['Seu serviço em uma página: apresentação, benefícios e contato', 'Identidade visual alinhada à sua logo e à sua marca', 'Layout adaptado para celular e computador', 'Botão de WhatsApp para conversar com seus visitantes'] },
 { id: 'company', name: 'Site Institucional', price: 59.99, label: 'Sua empresa com a presença que merece.', description: 'Um site para reunir sua história, apresentar seus serviços e mostrar os trabalhos que sua empresa já realizou.', audience: 'Ideal para empresas que querem apresentar seu negócio por completo.', features: ['Apresentação da empresa e das informações do seu negócio', 'Páginas dedicadas aos serviços e aos canais de contato', 'Galeria com as fotos dos trabalhos que você enviar', 'Design personalizado com a identidade da sua empresa'] },
 { id: 'system', name: 'Sistema Personalizado', price: 89.99, label: 'Tecnologia para simplificar seu dia a dia.', description: 'Uma solução planejada a partir da sua rotina. As funcionalidades e o escopo são definidos conforme a necessidade da operação.', audience: 'Ideal para negócios que precisam de uma solução própria.', features: ['Planejamento da solução conforme a sua operação', 'Funcionalidades definidas de acordo com sua necessidade', 'Interface profissional para facilitar o uso no dia a dia', 'Orçamento personalizado conforme o escopo e a complexidade'] },
] as const;
export const requestSchema = z.object({
 company_name: z.string().trim().min(2).max(100), contact_name: z.string().trim().min(2).max(100),
 email: z.string().trim().email().max(255), phone: z.string().trim().regex(/^[\d\s()+-]{10,20}$/),
 plan: z.enum(['landing','company','system']), description: z.string().trim().min(10).max(2000),
 files: z.array(z.object({ kind: z.enum(['logo','service']), type: z.enum(['image/png','image/jpeg','image/webp']), content: z.string().max(2800000) })).max(6),
});
export type CompanyRequest = z.infer<typeof requestSchema>;
