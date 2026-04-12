const projects = [
  {
    title: "🌐 Demographic Networking Platform",
    date: "2024",
    description:
      "Engineered a real-time proximity-based networking platform using the MERN stack, enabling sub-second location-aware clustering across dynamic user sessions through MongoDB geospatial indexing and real-time low-latency messaging via Socket.io with secure OAuth-based REST API authentication.",
    github: "https://github.com/ManojAmarapu/Demographic",
    live: "https://demographic-alpha.vercel.app/welcome",
  },
  {
    title: "🍽️ Flavor Forge",
    date: "August 2024",
    description:
      "Architected a full-stack recipe generation application using React, TypeScript, and MongoDB, enabling real-time ingredient-based query processing across authenticated user sessions, persistent recipe storage, and globally synchronized favorites across multiple user flows within a production-grade UI.",
    github: "https://github.com/ManojAmarapu/FlavorForge",
    live: "https://flavorforge-app.vercel.app",
  },
  {
    title: "🏥 Health Insight",
    date: "2024",
    description:
      "Designed a React-based healthcare intelligence platform utilizing Jaccard similarity scoring for symptom analysis, confidence-ranked predictions, interactive Recharts dashboards, and modular service-layer architecture with optimized client-side state management.",
    github: "https://github.com/ManojAmarapu/HealthAI-Insight",
    live: "https://healthai-insight.vercel.app",
  },
  {
    title: "📊 Visual Metrics",
    date: "July 2024",
    description:
      "Designed and developed a responsive analytics dashboard using React, implementing dynamic data visualization through interactive charts and metric components, optimized layout rendering for multi-device compatibility, and structured modular components for scalable data-driven insights and real-time user interaction.",
    github: "https://github.com/ManojAmarapu/VisualMetrics",
    live: "https://visual-metrics.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-teal-400 mb-2 tracking-tight">Projects</h2>
        <span className="block mx-auto mb-10 w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" />
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="bg-gray-900/70 border border-teal-800/30 p-6 rounded-2xl hover:-translate-y-2 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-900/20 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold text-teal-400 mb-1">{proj.title}</h3>
              <p className="text-gray-500 text-xs mb-3 italic">{proj.date}</p>
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">{proj.description}</p>
              <div className="flex flex-wrap gap-3 mt-auto">
                <a
                  href={proj.github}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 border border-teal-700/50 bg-teal-900/20 hover:bg-teal-400/20 hover:border-teal-400/60 px-4 py-2 rounded-full w-fit transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🐙 GitHub
                </a>
                <a
                  href={proj.live}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 border border-teal-700/50 bg-teal-900/20 hover:bg-teal-400/20 hover:border-teal-400/60 px-4 py-2 rounded-full w-fit transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🚀 Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
