import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
const examples = [ { quote: 'Um site que apresenta nossos serviços com clareza e valoriza cada projeto.', name: 'Empresa de arquitetura', initials: 'AR' }, { quote: 'Nossa marca merece uma presença profissional, no computador e no celular.', name: 'Negócio local', initials: 'NL' }, { quote: 'Uma solução sob medida para organizar os processos e facilitar a rotina.', name: 'Empresa de serviços', initials: 'ES' } ];
export function Testimonials() {
 const [current, setCurrent] = useState(0);
 const [paused, setPaused] = useState(false);
 const [hovered, setHovered] = useState(false);
 const [focused, setFocused] = useState(false);
 const [reducedMotion, setReducedMotion] = useState(false);
 useEffect(() => {
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  const update = () => setReducedMotion(media.matches);
  update(); media.addEventListener('change', update);
  return () => media.removeEventListener('change', update);
 }, []);
 const stopped = paused || hovered || focused || reducedMotion;
 useEffect(() => {
  if (stopped) return;
  const timer = setInterval(() => setCurrent(value => (value + 1) % examples.length), 6000);
  return () => clearInterval(timer);
 }, [stopped]);
 const example = examples[current];
 if (!example) return null;
 return <section className="testimonial-section site-width" aria-label="Depoimentos ilustrativos" aria-roledescription="carrossel"
  onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
  onFocus={() => setFocused(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
  <div><span className="eyebrow">CONEXÕES QUE FAZEM A DIFERENÇA</span><h2>Seu próximo capítulo<br/>começa aqui.</h2><p className="text-muted-foreground">Depoimentos ilustrativos. Relatos reais em breve.</p></div>
  <div className="testimonial-content">
   <div className="testimonial-controls"><Quote className="text-primary" size={34}/><span className="text-muted-foreground">{current + 1} / {examples.length}</span>
    <Button variant="outline" size="icon" disabled={reducedMotion} aria-label={paused ? 'Reproduzir depoimentos' : 'Pausar depoimentos'} title={paused ? 'Reproduzir depoimentos' : 'Pausar depoimentos'} onClick={() => setPaused(value => !value)}>{paused || reducedMotion ? <Play/> : <Pause/>}</Button>
   </div>
   <div aria-live={stopped ? 'polite' : 'off'} aria-atomic="true"><blockquote key={current}>“{example.quote}”</blockquote><div className="testimonial-person"><span>{example.initials}</span><div><strong>{example.name}</strong><p>Exemplo ilustrativo</p></div></div></div>
   <div className="testimonial-navigation"><Button variant="outline" size="icon" aria-label="Depoimento anterior" title="Depoimento anterior" onClick={() => setCurrent(value => (value + examples.length - 1) % examples.length)}><ArrowLeft/></Button><Button variant="outline" size="icon" aria-label="Próximo depoimento" title="Próximo depoimento" onClick={() => setCurrent(value => (value + 1) % examples.length)}><ArrowRight/></Button></div>
  </div>
 </section>;
}
