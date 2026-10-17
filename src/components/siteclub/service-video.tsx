import video from '@/assets/siteclub-explicativo.mp4.asset.json';
import poster from '@/assets/siteclub-video-poster.jpg.asset.json';

export function ServiceVideo() {
 return <section className="service-video-section" aria-labelledby="service-video-title">
  <div className="site-width">
   <div className="section-heading"><div><span className="eyebrow">CONHEÇA O SITECLUB</span><h2 id="service-video-title">Seu próximo site começa aqui.</h2></div></div>
   <video className="service-video" controls playsInline preload="metadata" poster={poster.url} aria-label="Vídeo explicativo dos serviços Siteclub">
    <source src={video.url} type="video/mp4"/>
    Seu navegador não suporta este vídeo. <a href={video.url}>Abrir vídeo explicativo</a>
   </video>
  </div>
 </section>;
}