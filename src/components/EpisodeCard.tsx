import { useState, useRef } from "react"

interface EpisodeCardProps {
  title: string
  description: string
  audioSrc: string
  date: string
  duration: string
  image: string
}

export default function EpisodeCard({ title, description, audioSrc, date, duration, image }: EpisodeCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="elegant-card rounded-lg overflow-hidden transition-elegant hover:transform hover:scale-[1.02]">
      <div className="relative h-48">
        <video src={image} autoPlay loop muted></video>
        <div className="absolute h-67 inset-0 object-cover bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <div className="flex justify-between items-center text-xs text-gray-300 mb-1">
          </div>
        </div>
      </div>
      <div className="p-5 bg-zinc-900 mt-20">
        <h3 className="text-xl font-medium mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-5 text-sm line-clamp-3">{description}</p>

        <audio ref={audioRef} src={audioSrc} className="hidden" />

        <button
          onClick={togglePlay}
          className="w-full bg-transparent border border-green-600 hover:bg-green-600/20 text-green-400 py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors"
        >
          {isPlaying ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm uppercase tracking-wider">Pausar</span>
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm uppercase tracking-wider">Escuchar</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

