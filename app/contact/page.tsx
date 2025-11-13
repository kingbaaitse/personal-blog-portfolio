'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, X, Sparkles } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import ContactIllustration from '@/components/illustrations/ContactIllustration'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [showDialog, setShowDialog] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const submitData = new FormData()
      submitData.append('name', formData.name)
      submitData.append('email', formData.email)
      submitData.append('subject', formData.subject)
      submitData.append('message', formData.message)
      
      const response = await fetch('https://formsubmit.co/leatile.m.baaitse@gmail.com', {
        method: 'POST',
        body: submitData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        setShowDialog(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => {
          setShowDialog(false)
          setStatus('idle')
        }, 8000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <ScrollReveal />
      {/* Confetti Success Dialog */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-brutalist-white border-4 border-brutalist-black rounded-2xl p-6 max-w-md w-full transform animate-bounce-in shadow-brutalist-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowDialog(false)}
              className="absolute -top-2 -right-2 bg-brutalist-accent border-2 border-brutalist-black rounded-full p-2 hover:scale-110 transition-transform"
            >
              <X size={16} />
            </button>
            
            {/* Success Icon with Animation */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-brutalist-accent border-4 border-brutalist-black rounded-full flex items-center justify-center animate-pulse-slow">
                  <CheckCircle size={32} className="text-brutalist-white" />
                </div>
                {/* Sparkles around the check */}
                <Sparkles size={16} className="absolute -top-2 -left-2 text-brutalist-accent animate-float" />
                <Sparkles size={16} className="absolute -top-2 -right-2 text-brutalist-accent animate-float" style={{ animationDelay: '0.5s' }} />
                <Sparkles size={16} className="absolute -bottom-2 -left-2 text-brutalist-accent animate-float" style={{ animationDelay: '1s' }} />
                <Sparkles size={16} className="absolute -bottom-2 -right-2 text-brutalist-accent animate-float" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
            
            {/* Success Message */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-brutalist-black">
                Thank You {formData.name || 'Friend'}! 🎉
              </h2>
              <p className="text-lg text-brutalist-gray mb-6 leading-relaxed">
                Your message has been successfully sent! I'm excited to read what you have to say and will get back to you as soon as possible.
              </p>
              
              {/* Confetti Elements */}
              <div className="relative h-20 mb-4">
                <div className="absolute top-0 left-1/4 w-3 h-3 bg-brutalist-accent rounded-full animate-bounce"></div>
                <div className="absolute top-4 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute top-2 left-3/4 w-4 h-4 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                <div className="absolute top-6 left-1/6 w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute top-3 left-5/6 w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.8s' }}></div>
                <div className="absolute top-8 left-2/6 w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-5 left-4/6 w-4 h-4 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '1.2s' }}></div>
              </div>
              
              <p className="text-sm text-brutalist-gray font-medium">
                Keep an eye on your inbox for my response! ✨
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center scroll-reveal">
          <div className="inline-block px-6 py-2 bg-brutalist-accent border-4 border-brutalist-black mb-6">
            <p className="text-lg font-bold">GET IN TOUCH</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            LET'S CONNECT
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-brutalist-gray max-w-3xl mx-auto">
            Have a project in mind? Looking for an intern? Or just want to chat about data analytics? 
            I'd love to hear from you!
          </p>
        </div>

        {/* Add Contact Illustration */}
        <div className="mb-12 scroll-reveal">
          <ContactIllustration />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 scroll-reveal">
            <div className="brutalist-card p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">CONTACT INFO</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4 p-4 border-4 border-brutalist-black dark:border-brutalist-white">
                  <Mail size={10} className="sm:size-10 lg:size-10 flex-shrink-0 text-brutalist-accent dark:text-yellow-400" />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold mb-1">Email</h3>
                    <a href="mailto:leatile.m.baaitse@gmail.com" className="text-base sm:text-lg hover:text-brutalist-accent dark:hover:text-yellow-400 transition-colors break-words">
                      leatile.m.baaitse@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 border-4 border-brutalist-black dark:border-brutalist-white">
                  <Phone size={10} className="sm:size-10 lg:size-10 flex-shrink-0 text-brutalist-accent dark:text-yellow-400" />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold mb-1">Phone</h3>
                    <a href="tel:+26771419498" className="text-base sm:text-lg hover:text-brutalist-accent dark:hover:text-yellow-400 transition-colors">
                      +267 71 419 498
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 border-4 border-brutalist-black dark:border-brutalist-white">
                  <MapPin size={10} className="sm:size-10 lg:size-10 flex-shrink-0 text-brutalist-accent dark:text-yellow-400" />
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl font-bold mb-1">Location</h3>
                    <p className="text-base sm:text-lg">Gaborone, Botswana</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="brutalist-card p-6 sm:p-8 bg-brutalist-accent dark:bg-yellow-400 text-brutalist-black">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">AVAILABILITY</h3>
              <p className="text-base sm:text-lg leading-relaxed">
                Currently seeking internship opportunities and open to freelance projects. 
                Available for full-time positions starting Summer 2025.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="brutalist-card p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">SEND A MESSAGE</h2>

            {status === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 border-4 border-brutalist-black dark:border-red-500 flex items-center gap-3">
                <CheckCircle size={24} className="text-red-600 dark:text-red-400" />
                <p className="font-bold text-sm sm:text-base">Failed to send message. Please try again or email me directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-base sm:text-lg font-bold mb-2">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="brutalist-input w-full text-base sm:text-lg"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base sm:text-lg font-bold mb-2">
                  YOUR EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="brutalist-input w-full text-base sm:text-lg"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-base sm:text-lg font-bold mb-2">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="brutalist-input w-full text-base sm:text-lg"
                  placeholder="Internship Opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base sm:text-lg font-bold mb-2">
                  MESSAGE *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="brutalist-input w-full resize-none text-base sm:text-lg"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="brutalist-button w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg py-3 sm:py-4"
              >
                {status === 'sending' ? (
                  <>SENDING...</>
                ) : (
                  <>
                    <Send size={20} />
                    SEND MESSAGE
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 sm:p-8 border-4 border-brutalist-black dark:border-brutalist-white bg-brutalist-white dark:bg-gray-900">
            <p className="text-xl sm:text-2xl font-bold mb-4">PREFER SOCIAL MEDIA?</p>
            <p className="text-base sm:text-lg text-brutalist-gray dark:text-gray-400 mb-6">
              Connect with me on all platforms and follow my journey
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
              <a 
                href="https://linkedin.com/in/kingbaaitse" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#E8F4F8] text-[#0077B5] px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-bold border-4 border-brutalist-black shadow-brutalist transition-all duration-300 hover:shadow-brutalist-lg hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <img src="/images/linkedin.png" alt="LinkedIn" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>LINKEDIN</span>
              </a>
              <a 
                href="https://github.com/kingbaaitse" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#F6F8FA] text-[#333333] px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-bold border-4 border-brutalist-black shadow-brutalist transition-all duration-300 hover:shadow-brutalist-lg hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <img src="/images/github.png" alt="GitHub" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>GITHUB</span>
              </a>
              <a 
                href="https://twitter.com/kingbaaitse" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#F7F9FA] text-[#000000] px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-bold border-4 border-brutalist-black shadow-brutalist transition-all duration-300 hover:shadow-brutalist-lg hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <img src="/images/twitter.png" alt="X" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>X</span>
              </a>
              <a 
                href="https://instagram.com/kingbaaitse" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-br from-[#FFF5F5] via-[#FFF0F5] to-[#F5F0FF] text-[#E4405F] px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-bold border-4 border-brutalist-black shadow-brutalist transition-all duration-300 hover:shadow-brutalist-lg hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <img src="/images/instagram.png" alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>INSTAGRAM</span>
              </a>
              <a 
                href="https://facebook.com/kingbaaitse" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#E8F4FD] text-[#1877F2] px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-bold border-4 border-brutalist-black shadow-brutalist transition-all duration-300 hover:shadow-brutalist-lg hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <img src="/images/facebook.png" alt="Facebook" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>FACEBOOK</span>
              </a>
              <a 
                href="https://threads.net/kingbaaitse" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#F8F8F8] text-[#000000] px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm font-bold border-4 border-brutalist-black shadow-brutalist transition-all duration-300 hover:shadow-brutalist-lg hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <img src="/images/threads.png" alt="Threads" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>THREADS</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
