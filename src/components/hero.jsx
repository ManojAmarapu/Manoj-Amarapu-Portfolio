export default function Hero() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 pt-24 pb-12 max-w-6xl mx-auto gap-12">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-teal-400 to-white bg-clip-text text-transparent">
            A. M. Manoj Kumar
          </span>
        </h1>
        <p className="text-gray-400 text-xl mb-2 font-light">Computer Science Engineering Student</p>
        <p className="text-teal-400 mb-8 text-base">📍 Eluru, Andhra Pradesh</p>
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 px-7 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/30 text-sm"
          >
            Get In Touch
          </a>
          <a
            href="/Manoj_Amarapu_Resume.pdf"
            download
            className="px-7 py-3 rounded-full text-teal-400 font-semibold border-2 border-teal-400 hover:bg-teal-400/10 transition-all duration-300 hover:-translate-y-1 text-sm"
          >
            ⬇ Download Resume
          </a>
        </div>
      </div>

      {/* Profile Photo with rotating ring */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative flex items-center justify-center">
          {/* Rotating ring */}
          <div
            className="w-72 h-72 rounded-full flex items-center justify-center p-1"
            style={{
              background: 'conic-gradient(#64ffda 0%, #00d4aa 33%, #111827 34%, #111827 49%, #64ffda 50%, #00d4aa 83%, #111827 84%, #111827 100%)',
              animation: 'spin 8s linear infinite',
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
              <img
                src="/photo1.jpg"
                alt="A. M. Manoj Kumar"
                className="w-full h-full object-cover rounded-full"
                style={{ transform: 'rotate(180deg)' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl font-extrabold text-teal-400">MK</div>';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe for ring spin */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
