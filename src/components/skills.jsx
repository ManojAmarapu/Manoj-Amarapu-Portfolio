const skillCategories = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: ["Python", "Java", "C", "C++", "JavaScript"]
  },
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "RESTful APIs"]
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MongoDB", "SQL"]
  },
  {
    title: "Cloud Platforms",
    icon: "☁️",
    skills: ["Google Cloud", "IBM Cloud"]
  },
  {
    title: "Tools & Version Control",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/80">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-teal-400 mb-2 tracking-tight">
          Technical Skills
        </h2>
        <span className="block mx-auto mb-12 w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {skillCategories.map(category => (
            <div 
              key={category.title} 
              className="bg-gray-800/60 border border-teal-800/30 rounded-2xl p-6 hover:-translate-y-2 hover:bg-gray-800/80 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-900/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-teal-400 font-bold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="bg-teal-900/30 border border-teal-700/40 px-3 py-1 rounded-full text-xs font-semibold text-teal-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
