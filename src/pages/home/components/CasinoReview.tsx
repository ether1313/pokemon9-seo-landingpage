
export default function CasinoReview() {
  const specs = [
    { label: 'License', value: 'Curacao Gaming Authority & Pagcor' },
    { label: 'Minimum Deposit', value: 'AUD 20' },
    { label: 'Maximum Deposit', value: 'AUD 5,000' },
    { label: 'Supported Languages', value: 'English' },
    { label: 'Year Established', value: '2020' },
    { label: 'Game Count', value: '800+ titles' },
    { label: 'Software Providers', value: 'JILI, BOOONGO, CQ9 Gaming, Imperium Games, RICH Gaming, VPower, ACE333, Joker' },
    { label: 'Customer Support', value: '24/7 Live Chat, WhatsApp, Telegram, Email' }
  ];

  return (
    <section id="casino-review" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1f3a] to-[#16213e] relative overflow-hidden">
      <div className="hidden sm:block absolute bottom-20 left-10 w-16 h-16 opacity-10">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#3b4cca] to-[#2a3a9f] rounded-full"></div>
          <div className="absolute inset-0 bg-white rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1 bg-[#333]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 bg-[#333] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#ff0000] rounded-full"></div>
          <span className="text-[#ffd700] text-xs sm:text-sm font-bold uppercase tracking-widest">Quick Guide</span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3b4cca] rounded-full"></div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6 sm:mb-8 text-center">
          PKM9 <span className="text-[#ffd700]">Casino Review</span>
        </h2>
        
        <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8 border border-[#ffd700]/20">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
            PKM9 Casino operates as a fully licensed online gaming platform designed specifically for the Australian market. The casino focuses on providing a balanced selection of games while maintaining strict security protocols and responsible gaming practices.
          </p>
          
          {/* Mobile: Card layout, Desktop: Table layout */}
          <div className="block sm:hidden space-y-3">
            {specs.map((spec, index) => (
              <div key={index} className="bg-[#0f1f3a]/50 rounded-lg p-3 border border-gray-700/30">
                <div className="flex items-center gap-2 text-[#ffd700] text-xs font-semibold mb-1">
                  <div className="w-1.5 h-1.5 bg-[#ff0000] rounded-full"></div>
                  {spec.label}
                </div>
                <div className="text-white text-sm">{spec.value}</div>
              </div>
            ))}
          </div>
          
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#ffd700]/30">
                  <th className="text-left py-4 px-4 text-[#ffd700] font-semibold text-sm">Parameter</th>
                  <th className="text-left py-4 px-4 text-[#ffd700] font-semibold text-sm">Details</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, index) => (
                  <tr key={index} className="border-b border-gray-700/50 hover:bg-[#ff0000]/5 transition-colors">
                    <td className="py-4 px-4 text-gray-400 text-sm font-medium flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#ff0000] rounded-full"></div>
                      {spec.label}
                    </td>
                    <td className="py-4 px-4 text-white text-sm">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4 sm:mt-6">
            The platform maintains compliance with international gaming standards while catering to local preferences. PKM9 Casino implements advanced encryption technology to protect user data and financial transactions.
          </p>
        </div>
      </div>
    </section>
  );
}
