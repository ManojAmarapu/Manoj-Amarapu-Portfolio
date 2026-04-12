export default function Contact() {
  const contactItems = [
    {
      icon: '📧',
      label: 'Email',
      value: 'amarapumanoj@gmail.com',
      href: 'mailto:amarapumanoj@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91-7989344419',
      href: 'tel:+917989344419',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/manoj-amarapu',
      href: 'https://www.linkedin.com/in/manoj-amarapu',
      external: true,
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/ManojAmarapu',
      href: 'https://github.com/ManojAmarapu',
      external: true,
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Eluru, Andhra Pradesh',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-teal-400 mb-2 tracking-tight text-center">
          Contact Me
        </h2>
        <span className="block mx-auto mb-10 w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact info */}
          <div className="bg-gray-900/70 border border-teal-800/30 rounded-2xl p-6">
            <h3 className="text-teal-400 font-semibold mb-5 text-lg">📞 Contact Information</h3>
            <div className="space-y-3">
              {contactItems.map(({ icon, label, value, href, external }) => {
                const Wrapper = href ? 'a' : 'div';
                const props = href
                  ? {
                      href,
                      ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                      className:
                        'flex items-center gap-4 p-3 bg-teal-900/20 border border-teal-800/30 rounded-xl hover:bg-teal-400/10 hover:border-teal-500/40 hover:translate-x-2 transition-all duration-200 text-white no-underline',
                    }
                  : {
                      className:
                        'flex items-center gap-4 p-3 bg-teal-900/20 border border-teal-800/30 rounded-xl',
                    };
                return (
                  <Wrapper key={label} {...props}>
                    <span className="text-xl min-w-8 text-center">{icon}</span>
                    <div>
                      <span className="text-teal-400 text-xs font-semibold block">{label}</span>
                      <span className="text-gray-300 text-sm">{value}</span>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* Personal info + hobbies */}
          <div className="bg-gray-900/70 border border-teal-800/30 rounded-2xl p-6">
            <h3 className="text-teal-400 font-semibold mb-5 text-lg">👤 Personal Information</h3>
            <div className="space-y-3 mb-6">
              {[
                ['Languages', 'English, Telugu, Hindi'],
                ['Degree', 'B.Tech CSE (2022–2026)'],
                ['College', 'Ramachandra College of Engineering, Eluru'],
                ['Available for', 'Internships & Full-time'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-2 border-b border-teal-900/30 text-sm">
                  <span className="text-teal-400 font-semibold">{label}:</span>
                  <span className="text-gray-400">{value}</span>
                </div>
              ))}
            </div>
            <div>
              <span className="text-teal-400 font-semibold text-sm">🎨 Hobbies &amp; Interests:</span>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Drawing & Digital Sketching', 'Tech Fests & Hackathons', 'Sci-fi Documentaries', 'Productivity Tools'].map(h => (
                  <span key={h} className="bg-teal-900/20 border border-teal-800/30 px-3 py-1 rounded-full text-xs text-gray-300">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
