import ContactForm from "./ContactForm";
import EpisodeCard from "./EpisodeCard";
import PodcastPlayer from "./PodcastPlayer";

export default function Home() {
  const episodes = [
    {
      id: 1,
      title: "Introducción a los Gorilas de Espalda Plateada",
      description: "En este episodio inaugural, exploramos el fascinante mundo de los gorilas de espalda plateada, su hábitat y comportamiento social.",
      audioSrc: "/Simbelonga.mp3",
      date: "15 de Marzo, 2025",
      duration: "32:45",
      image: "/20250325_1617_Gorilla Beach Podcast_simple_compose_01jq6y2nxffmrb8n399nmkzw9p.mp4"
    },
    {
      id: 2,
      title: "La Vida Social de los Gorilas",
      description: "Descubre cómo se organizan las familias de gorilas y el papel fundamental del macho alfa de espalda plateada.",
      audioSrc: "/2def.mp3",
      date: "22 de Marzo, 2025",
      duration: "28:15",
      image: "/20250325_1615_Gorilla Podcast Session_simple_compose_01jq6xz8w0fxjaymx52mm1hpkr.mp4"
    },
    {
      id: 3,
      title: "Conservación y Amenazas",
      description: "Analizamos los esfuerzos de conservación y las principales amenazas que enfrentan los gorilas de espalda plateada en la actualidad.",
      audioSrc: "/1def.mp3",
      date: "29 de Marzo, 2025",
      duration: "35:20",
      image: "/20250324_1924_Gorilla Podcast Power_simple_compose_01jq4pctcteb2r5gmzt00385am.mp4"
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <video src="/public/20250324_1804_Gorilla Podcast Vibes_simple_compose_01jq4hsxwvetqt4ks0mpr8ed0v.mp4" width={1920} height={1080} autoPlay muted loop></video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="block text-green-400">SIMBELONGA</span>
            </h1>
            <div className="w-20 h-1 bg-green-500 mb-8"></div>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Un viaje sonoro al corazón de la selva, explorando la majestuosidad 
              y misterio de los gorilas de espalda plateada.
            </p>
            <div className="flex space-x-4 text-white">
              <a href="#episodios" className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors uppercase tracking-wide text-sm font-medium">
                Escuchar ahora
              </a>
              <a href="#contacto" className="px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors uppercase tracking-wide text-sm font-medium">
                Suscribirse
              </a>
            </div>
          </div>
        </div>
        
        {/* Paw prints */}
        <div className="absolute bottom-10 right-10 flex space-x-4">
          <div className="paw-print opacity-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" fill="rgba(255,255,255,0.2)"/>
              <path d="M7 10C8.10457 10 9 9.10457 9 8C9 6.89543 8.10457 6 7 6C5.89543 6 5 6.89543 5 8C5 9.10457 5.89543 10 7 10Z" fill="rgba(255,255,255,0.2)"/>
              <path d="M17 10C18.1046 10 19 9.10457 19 8C19 6.89543 18.1046 6 17 6C15.8954 6 15 6.89543 15 8C15 9.10457 15.8954 10 17 10Z" fill="rgba(255,255,255,0.2)"/>
              <path d="M7 18C8.10457 18 9 17.1046 9 16C9 14.8954 8.10457 14 7 14C5.89543 14 5 14.8954 5 16C5 17.1046 5.89543 18 7 18Z" fill="rgba(255,255,255,0.2)"/>
              <path d="M17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z" fill="rgba(255,255,255,0.2)"/>
            </svg>
          </div>
          <div className="paw-print opacity-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" fill="rgba(255,255,255,0.2)"/>
              <path d="M7 10C8.10457 10 9 9.10457 9 8C9 6.89543 8.10457 6 7 6C5.89543 6 5 6.89543 5 8C5 9.10457 5.89543 10 7 10Z" fill="rgba(255,255,255,0.2)"/>
              <path d="M17 10C18.1046 10 19 9.10457 19 8C19 6.89543 18.1046 6 17 6C15.8954 6 15 6.89543 15 8C15 9.10457 15.8954 10 17 10Z" fill="rgba(255,255,255,0.2)"/>
              <path d="M7 18C8.10457 18 9 17.1046 9 16C9 14.8954 8.10457 14 7 14C5.89543 14 5 14.8954 5 16C5 17.1046 5.89543 18 7 18Z" fill="rgba(255,255,255,0.2)"/>
              <path d="M17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z" fill="rgba(255,255,255,0.2)"/>
            </svg>
          </div>
          <div className="paw-print opacity-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" fill="rgba(255,255,255,0.2)"/>
              <path d="M7 10C8.10457 10 9 9.10457 9 8C9 6.89543 8.10457 6 7 6C5.89543 6 5 6.89543 5 8C5 9.10457 5.89543 10 7 10Z" fill="rgba(255,255,255,0.2)"/>
              <path d="M17 10C18.1046 10 19 9.10457 19 8C19 6.89543 18.1046 6 17 6C15.8954 6 15 6.89543 15 8C15 9.10457 15.8954 10 17 10Z" fill="rgba(255,255,255,0.2)"/>
              <path d="M7 18C8.10457 18 9 17.1046 9 16C9 14.8954 8.10457 14 7 14C5.89543 14 5 14.8954 5 16C5 17.1046 5.89543 18 7 18Z" fill="rgba(255,255,255,0.2)"/>
              <path d="M17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z" fill="rgba(255,255,255,0.2)"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Latest Episode */}
      <section id="home" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-1 bg-green-500 mb-6"></div>
            <span className="text-xs font-light text-gray-300">Ningún animal a sufrido daños durante esta escena, AI powered</span>
            <h2 className="text-3xl font-light text-white uppercase tracking-widest mb-2 mt-4">Último Episodio</h2>
            <p className="text-gray-400 text-center max-w-xl">Sumérgete en nuestro contenido más reciente sobre el fascinante mundo de los gorilas de espalda plateada</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <PodcastPlayer 
              title={episodes[0].title}
              audioSrc={episodes[0].audioSrc}
              image={episodes[0].image}
              description={episodes[0].description}
            />
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section id="episodios" className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-1 bg-green-500 mb-6"></div>
            <h2 className="text-3xl font-light uppercase text-gray-100 tracking-widest mb-2">Todos los Episodios</h2>
            <p className="text-gray-400 text-center max-w-xl">Explora nuestra colección completa de episodios sobre los gorilas de espalda plateada</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {episodes.map(episode => (
              <EpisodeCard 
                key={episode.id}
                title={episode.title}
                description={episode.description}
                audioSrc={episode.audioSrc}
                date={episode.date}
                duration={episode.duration}
                image={episode.image}
              />
            ))}
          </div>
          
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="elegant-card p-8 rounded-lg relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 opacity-5">
                <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" fill="white"/>
                  <path d="M7 10C8.10457 10 9 9.10457 9 8C9 6.89543 8.10457 6 7 6C5.89543 6 5 6.89543 5 8C5 9.10457 5.89543 10 7 10Z" fill="white"/>
                  <path d="M17 10C18.1046 10 19 9.10457 19 8C19 6.89543 18.1046 6 17 6C15.8954 6 15 6.89543 15 8C15 9.10457 15.8954 10 17 10Z" fill="white"/>
                  <path d="M7 18C8.10457 18 9 17.1046 9 16C9 14.8954 8.10457 14 7 14C5.89543 14 5 14.8954 5 16C5 17.1046 5.89543 18 7 18Z" fill="white"/>
                  <path d="M17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z" fill="white"/>
                </svg>
              </div>
              
              <h3 className="text-2xl font-light uppercase tracking-widest mb-6 text-green-400">Nuestro Proceso</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Cada episodio de "Gorilas Plateados" es meticulosamente investigado y producido para ofrecerte la mejor experiencia auditiva y el contenido más preciso sobre estos fascinantes primates.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-medium mb-4 text-white">Proceso Creativo</h4>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">01.</span>
                      <span>Investigación exhaustiva con primatólogos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">02.</span>
                      <span>Redacción de guion narrativo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">03.</span>
                      <span>Grabación con equipo profesional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">04.</span>
                      <span>Edición y masterización de audio</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium mb-4 text-white">Herramientas</h4>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span>Audacity para grabación y edición</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span>FFmpeg para optimización</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span>Micrófonos Blue Yeti</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span>Bibliotecas de música libre de derechos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <div className="w-16 h-1 bg-green-500 mb-6"></div>
            <h2 className="text-3xl font-light uppercase tracking-widest mb-2">Participa</h2>
            <p className="text-gray-400 text-center max-w-xl">Comparte tus ideas, experiencias o conocimientos sobre los gorilas de espalda plateada</p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center text-center">
            <div className="mb-8 md:mb-0">
              <div className="text-2xl font-light tracking-wider mb-2">
                <span className="font-bold text-green-500">SIMBELONGA</span>
              </div>
              <p className="text-gray-500">© 2025 - Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </footer> 
    </div>
  )
}

