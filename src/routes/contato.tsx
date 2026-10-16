import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { MessageCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { SiteShell } from '@/components/siteclub/shell';
import { CompanyForm } from '@/components/siteclub/company-form';
import { Button } from '@/components/ui/button';
import { supportUrl } from '@/lib/siteclub';
import logo from '@/assets/siteclub-logo.asset.json';
export const Route = createFileRoute('/contato')({ validateSearch: z.object({ plano: z.enum(['landing','company','system']).catch('landing') }), head: () => ({ meta: [{title:'Comece seu projeto — Siteclub'},{name:'description',content:'Envie as informações da sua empresa, logo e fotos dos serviços para começar seu site ou sistema com o Siteclub.'},{property:'og:title',content:'Seu próximo projeto começa no Siteclub'},{property:'og:description',content:'Conte sua história. Vamos construir sua presença digital.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}] }), component: Contact });
function Contact() { const { plano } = Route.useSearch(); return <SiteShell><main className="site-width contact-page"><section className="contact-intro"><span className="eyebrow">VAMOS CONSTRUIR SEU PRÓXIMO PASSO</span><h1>Conte sua história.<br/>Nós criamos<br/><span className="text-primary">sua presença.</span></h1><p>Envie os detalhes da sua empresa para começarmos a conversar sobre seu projeto.</p><img src={logo.url} alt="Siteclub — sites e sistemas por assinatura" width={1536} height={1024} loading="lazy" className="contact-logo"/><div className="contact-help"><p>Prefere conversar primeiro?</p><Button asChild variant="outline"><a href={supportUrl} target="_blank" rel="noreferrer"><MessageCircle/>(11) 93758-8251<ArrowUpRight/></a></Button></div><p className="privacy-note"><ShieldCheck/>Suas informações e fotos são privadas.</p></section><CompanyForm initialPlan={plano}/></main></SiteShell>; }
