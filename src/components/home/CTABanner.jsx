import { Link } from 'react-router-dom'

function CTABanner() {
  const headline = "Ready to get started?"
  const subtext = "Let's bring your ideas to life."
  const whatsappNumber = "2348038786037"

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a0f2c] rounded-3xl p-12 text-center relative overflow-hidden">

          {/* Background glow effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-600/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              {headline}
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              {subtext}
            </p>

            {/* ✅ Three buttons now */}
            <div className="flex flex-wrap justify-center gap-4">

              {/* Start a Project */}
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-white text-[#0a0f2c] font-bold rounded-xl hover:bg-gray-100 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                Start a Project
              </Link>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.054 23.447a.5.5 0 0 0 .609.61l5.704-1.49A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.009-1.374l-.36-.213-3.726.973.997-3.634-.234-.374A9.818 9.818 0 1 1 12 21.818z"/>
                </svg>
                Chat on WhatsApp
              </a>

              {/* ✅ UTL AI Chat button */}
              <button
                onClick={() => {
                  // ✅ This finds the chat button and clicks it automatically
                  document.querySelector('[title="Chat with UTL AI"]')?.click()
                }}
                className="flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Chat with UTL AI
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTABanner