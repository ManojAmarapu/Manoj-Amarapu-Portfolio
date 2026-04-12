export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-teal-400 mb-10 text-center tracking-tight relative">
          About Me
          <span className="block mx-auto mt-2 w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" />
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Photo */}
          <div className="flex justify-center md:justify-end pr-0 md:pr-10">
            <img
              src="/photo2.jpg"
              alt="Manoj Kumar"
              className="w-full max-w-sm rounded-2xl shadow-2xl shadow-teal-900/20 border border-teal-800/40 object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Right: Education + Objective */}
          <div className="flex flex-col justify-center">
            <div className="bg-teal-900/20 border border-teal-700/30 rounded-2xl p-6 mb-6 hover:-translate-y-2 hover:bg-gray-800/80 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-900/20 transition-all duration-300">
              <h3 className="text-teal-400 font-semibold mb-3 text-lg">🎓 Education</h3>
              <p className="text-white font-semibold text-sm mb-1">Bachelor of Technology in Computer Science &amp; Engineering</p>
              <p className="text-gray-400 text-sm">Ramachandra College of Engineering, Eluru</p>
              <p className="text-gray-500 text-sm mt-1">2022 – 2026</p>
            </div>
            <div className="pt-3">
              <h3 className="text-teal-400 font-semibold mb-2 text-lg">🎯 Objective</h3>
              <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed tracking-wide">
                Final-year Computer Science student with hands-on experience building scalable, production-grade software solutions across full-stack environments. Skilled in designing modular applications and implementing secure backend systems. Passionate about writing clean, maintainable code and solving complex engineering problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
