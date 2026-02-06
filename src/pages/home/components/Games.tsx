
export default function Games() {
  const popularSlots = [
    {
      name: 'JILI',
      image: '/jili.png',
      description: 'JILI Games is big on promotional features, suite of promotional tools includes tournaments, "Must-Hit By" features, linking jackpots, and more. A standout feature is the "Must-Hit By" jackpot, a unique offering that ensures the jackpot is awarded when it reaches a specific target, adding an extra layer of thrill for players.'
    },
    {
      name: 'BOOONGO',
      image: '/booongo.png',
      description: 'Booongo’s latest slots were crafted to engage quickly, expand easily, and perform across regions. Their recently released titles show up in real retention data, boosting replays and session time. Operators we work with see a clear pattern: when slots pair fast spins with feature-packed mechanics, players stay longer.'
    },
    {
      name: 'ACE333',
      image: '/ace333.png',
      description: 'ACE333 slot games feature immersive themes, multi-payline layouts, and engaging bonus mechanics such as Free Spins, Wilds, Scatters, and special multipliers, offering players varied gameplay experiences and rewarding win opportunities.'
    }
  ];

  return (
    <section id="games" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#16213e] to-[#1a1a2e] relative overflow-hidden">
      <div className="hidden md:block absolute bottom-40 right-10 w-20 h-20 opacity-10 pokeball-float" style={{ animationDelay: '0.5s' }}>
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#cc0000] rounded-full"></div>
          <div className="absolute inset-0 bg-white rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1 bg-[#333]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-[#333] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#ff0000] rounded-full"></div>
          <span className="text-[#ffd700] text-xs sm:text-sm font-bold uppercase tracking-widest">Battle Arena</span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3b4cca] rounded-full"></div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-8 text-center">
          Popular Games and <span className="text-[#ffd700]">Gaming Sections</span>
        </h2>
        
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 sm:mb-12 text-center max-w-4xl mx-auto px-2">
          POKEMON9 Casino organizes its gaming library into clearly defined categories, making navigation simple for players with different preferences and experience levels.
        </p>
        
        <div className="space-y-6 sm:space-y-12">
          <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-[#ff0000]/20">
            <h3 className="text-xl sm:text-2xl font-bold text-[#ffd700] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#ff0000] to-[#cc0000] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-slot-machine-line text-white text-xs sm:text-sm"></i>
              </div>
              <span className="leading-tight">Slot Games Collection</span>
            </h3>
            
            <div className="mb-4 sm:mb-6">
              <img 
                src="/slot-games.jpg" 
                alt="Popular slot games collection" 
                className="w-full rounded-lg"
              />
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
              <p>
              The Slots section brings together a wide selection of popular games powered by well-known providers such as VPlus, WF Gaming, Booongo, JILI, CQ9 Gaming, and IG (Imperium Games). Each provider offers its own style of slot gameplay, ranging from classic formats to fast-paced, feature-rich titles.
              </p>
              <p>
              Players can explore a variety of HOT-tagged slot games, with frequent updates and rotating highlights to keep the experience fresh. The platform focuses on variety and accessibility, allowing users to switch easily between different providers and discover new slot content in one place.
              </p>
            </div>
            
            <div className="mt-5 sm:mt-6 text-center">
              <a 
                href="https://pokemon9.org/RFESTER88" 
                className="cta-pulse inline-flex items-center gap-2 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-[#0a1628] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold transition-all duration-200 text-sm sm:text-base whitespace-nowrap cursor-pointer"
              >
                <span>Play Slots</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-[#3b4cca]/20">
            <h3 className="text-xl sm:text-2xl font-bold text-[#ffd700] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#3b4cca] to-[#2a3a9f] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-live-line text-white text-xs sm:text-sm"></i>
              </div>
              <span className="leading-tight">Table Games and Live Casino</span>
            </h3>
            
            <div className="mb-4 sm:mb-6">
              <img 
                src="table-games.jpg" 
                alt="Live dealer tables with HD streaming" 
                className="w-full rounded-lg"
              />
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
              <p>
              The Live Casino section features a curated selection of table-style games powered by recognised providers such as CT855 Live Casino, Sexy Baccarat, Big Gaming, Playtech, Dream Gaming, and YEEBET. Each provider offers its own take on classic live-play experiences, focusing on smooth gameplay and clear game presentation.
              </p>
              <p>
              Players can access popular live formats including baccarat and other dealer-hosted table games, with multiple providers available to suit different preferences. The layout allows users to switch easily between platforms and choose their preferred live casino environment in one place.
              </p>
            </div>
            
            <div className="mt-5 sm:mt-6 text-center">
              <a 
                href="https://pokemon9.org/RFESTER88" 
                className="cta-pulse inline-flex items-center gap-2 bg-gradient-to-r from-[#3b4cca] to-[#5a6fd6] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold transition-all duration-200 text-sm sm:text-base whitespace-nowrap cursor-pointer"
              >
                <span>Play Live</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#ffd700] mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#cc0000] rounded-full"></div>
                <div className="absolute inset-0 bg-white rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-[1px] bg-[#333]"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#333] rounded-full"></div>
                </div>
              </div>
              Popular Slots Recommended
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {popularSlots.map((slot, index) => (
                <div key={index} className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] rounded-xl sm:rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-[#ffd700]/20 hover:border-[#ffd700]/60 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                  <div className="h-48 sm:h-56 lg:h-64 bg-[#0a1628] flex items-center justify-center relative">
                    <img 
                      src={slot.image} 
                      alt={slot.name} 
                      className="w-full h-full object-contain p-2"
                    />
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 opacity-80">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#cc0000] rounded-full"></div>
                      <div className="absolute inset-0 bg-white rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-[2px] bg-[#333]"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#333] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 border-t border-[#ff0000]/30">
                    <h4 className="text-lg sm:text-xl font-bold text-[#ffd700] mb-2 sm:mb-3">{slot.name}</h4>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{slot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
