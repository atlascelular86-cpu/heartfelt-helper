import { describe, it, expect } from 'vitest';
import { plans, supportUrl, requestSchema } from '@/lib/siteclub';
describe('Siteclub business rules', () => {
 it('landing page costs R$39.99', () => expect(plans.find(p => p.id === 'landing')?.price).toBe(39.99));
 it('company website costs R$59.99', () => expect(plans.find(p => p.id === 'company')?.price).toBe(59.99));
 it('systems start at R$89.99', () => expect(plans.find(p => p.id === 'system')?.price).toBe(89.99));
 it('help reaches the requested WhatsApp', () => expect(supportUrl).toBe('https://wa.me/5511937588251'));
 it('accepts company data and rejects invalid email', () => { const data = { company_name:'Empresa',contact_name:'Cliente', email:'cliente@example.com',phone:'11999999999',plan:'landing',description:'Serviços de arquitetura.',files:[] }; expect(requestSchema.safeParse(data).success).toBe(true); expect(requestSchema.safeParse({...data,email:'invalid'}).success).toBe(false); });
});
