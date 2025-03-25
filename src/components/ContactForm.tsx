import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    audioFile: null as File | null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        audioFile: e.target.files![0],
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus({
        success: true,
        message: "¡Gracias por tu mensaje! Te responderemos pronto.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        audioFile: null,
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="elegant-card p-8 rounded-lg relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 opacity-5">
        <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
            fill="white"
          />
          <path
            d="M7 10C8.10457 10 9 9.10457 9 8C9 6.89543 8.10457 6 7 6C5.89543 6 5 6.89543 5 8C5 9.10457 5.89543 10 7 10Z"
            fill="white"
          />
          <path
            d="M17 10C18.1046 10 19 9.10457 19 8C19 6.89543 18.1046 6 17 6C15.8954 6 15 6.89543 15 8C15 9.10457 15.8954 10 17 10Z"
            fill="white"
          />
          <path
            d="M7 18C8.10457 18 9 17.1046 9 16C9 14.8954 8.10457 14 7 14C5.89543 14 5 14.8954 5 16C5 17.1046 5.89543 18 7 18Z"
            fill="white"
          />
          <path
            d="M17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z"
            fill="white"
          />
        </svg>
      </div>

      {submitStatus && (
        <div
          className={`mb-8 p-4 rounded-md ${submitStatus.success ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"}`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-300 text-sm uppercase tracking-wider mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-300 text-sm uppercase tracking-wider mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-300 text-sm uppercase tracking-wider mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-white"
          />
        </div>

        <div>
          <label htmlFor="audioFile" className="block text-gray-300 text-sm uppercase tracking-wider mb-2">
            Comparte tu Audio (opcional)
          </label>
          <div className="border border-dashed border-zinc-700 rounded-md p-4 text-center">
            <input
              type="file"
              id="audioFile"
              name="audioFile"
              accept="audio/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="audioFile" className="cursor-pointer flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-400 mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="text-gray-400 text-sm">Arrastra tu archivo o haz clic para seleccionar</span>
              <span className="text-gray-500 text-xs mt-1">MP3, WAV (máx. 10MB)</span>
            </label>
            {formData.audioFile && (
              <div className="mt-2 text-green-400 text-sm">Archivo seleccionado: {formData.audioFile.name}</div>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md transition-colors uppercase tracking-wider text-sm font-medium ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
    </div>
  )
}

