const experiences = [
  {
    icon: '🎯',
    title: 'IBM SkillsBuild',
    date: 'June 2024',
    description:
      "Completed multiple IBM SkillsBuild courses, including AI Fundamentals, Resume Writing with Generative AI, Interview Preparation, and Workplace Research. Earned IBM SkillsBuild badge.",
    side: 'left',
  },
  {
    icon: '💼',
    title: 'Vault of Codes Internship',
    date: 'July 2024 – August 2024',
    description:
      "Completed an internship focused on leveraging Prompt Engineering to create an innovative Recipe Generator project, enhancing skills in AI-based development.",
    side: 'left',
  },
  {
    icon: '☁️',
    title: 'Microsoft Azure Workshop',
    date: 'October 2024',
    description:
      "Gained practical knowledge on Artificial Intelligence, Machine Learning, and Deep Learning using Azure tools. Experience with NLP, Image Processing, and Chatbot Development.",
    side: 'right',
  },
  {
    icon: '☁️',
    title: 'Google Cloud Internship',
    date: '2025',
    description:
      "Engineered AI-driven application workflows using Google Cloud Generative AI APIs, implementing prompt optimization strategies and structured API integrations across end-to-end cloud-based pipelines for intelligent automation use cases.",
    side: 'right',
  },
  {
    icon: '🤖',
    title: 'AI Workshop by Mentorly AI',
    date: 'March 2024',
    description:
      "Participated in comprehensive AI workshop covering fundamental concepts and practical applications of artificial intelligence technologies.",
    side: 'right',
  },
  {
    icon: '💼',
    title: 'IBM Cloud Internship',
    date: '2025',
    description:
      "Developed a Health Advisory AI solution using IBM Cloud tools, incorporating structured input validation and severity-based recommendation logic to deliver context-aware healthcare insights across multiple advisory scenarios.",
    side: 'left',
  },
  {
    icon: '📚',
    title: 'Data Structures Workshop',
    date: 'March 2024',
    description:
      "Enhanced understanding of data structures and algorithms through hands-on workshop sessions and practical implementations.",
    side: 'left',
  },
  {
    icon: '💻',
    title: 'C Programming Workshop',
    date: 'October 2023',
    description:
      "Strengthened programming fundamentals through intensive C programming workshop with practical coding exercises.",
    side: 'right',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-teal-400 mb-2 tracking-tight">
          Experience &amp; Certifications
        </h2>
        <span className="block mx-auto mb-10 w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" />
        <div className="grid md:grid-cols-2 gap-5 text-left">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="bg-gray-800/60 border border-teal-800/30 rounded-2xl p-6 hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">{exp.icon}</span>
                <div>
                  <h3 className="text-teal-400 font-bold text-base">{exp.title}</h3>
                  <p className="text-gray-500 text-xs italic mt-0.5">{exp.date}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
