const achievements = [
  {
    icon: '📝',
    title: 'Gate 2026',
    description: 'Qualified Graduate Aptitude Test in Engineering in 2026',
  },
  {
    icon: '🥈',
    title: 'Group Discussion',
    description: 'Secured 2nd place in the College-Wide Group Discussion competition',
  },
  {
    icon: '🎭',
    title: 'Fashion Show Organizer',
    description: 'Successfully organized the annual college fashion show event during the 2025 college fest',
  },
  {
    icon: '🏒',
    title: 'Hockey Player',
    description: 'Played at the district level in hockey competitions',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-teal-400 mb-2 tracking-tight">Achievements</h2>
        <span className="block mx-auto mb-10 w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((ach) => (
            <div
              key={ach.title}
              className="bg-gray-900/70 border border-teal-800/30 rounded-2xl p-6 text-center hover:-translate-y-2 hover:border-teal-500/50 hover:shadow-xl hover:shadow-teal-900/20 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{ach.icon}</div>
              <h3 className="text-teal-400 font-bold text-base mb-2">{ach.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{ach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
