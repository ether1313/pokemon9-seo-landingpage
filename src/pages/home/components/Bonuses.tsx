
export default function Bonuses() {
  const bonusStructure = [
    'All bonus terms and conditions apply as stated on the promotion page.',
  ];

  return (
    <section id="bonuses" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#16213e] to-[#1a1a2e] relative overflow-hidden">
      <div className="hidden sm:block absolute top-10 right-10 w-20 h-20 opacity-10">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#cc0000] rounded-full"></div>
          <div className="absolute inset-0 bg-white rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1 bg-[#333]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-[#333] rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#ff0000] rounded-full"></div>
          <span className="text-[#ffd700] text-xs sm:text-sm font-bold uppercase tracking-widest">Catch Your Rewards</span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3b4cca] rounded-full"></div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-8 text-center px-2">
          POKEMON9 <span className="text-[#ffd700]">No Deposit Bonus</span> and Promotions
        </h2>
        
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 sm:mb-12 text-center max-w-4xl mx-auto px-2">
          POKEMON9 Casino structures its promotional offerings to provide value across different player segments, with particular attention to welcome packages and ongoing rewards.
        </p>
        
        <div className="space-y-6 sm:space-y-12">
          <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-[#ffd700]/20">
            <h3 className="text-xl sm:text-2xl font-bold text-[#ffd700] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#ff0000] to-[#cc0000] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-gift-line text-white text-xs sm:text-sm"></i>
              </div>
              <span className="leading-tight">Welcome Package Structure</span>
            </h3>
            
            <div className="mb-4 sm:mb-6">
              <img 
                src="/welcomeBonus.jpg" 
                alt="Welcome bonus information" 
                className="w-full rounded-lg"
              />
            </div>
            
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
            New members are eligible for a 50% Slot Unlimited Bonus, available once only for first-time claims. To activate this promotion, a minimum deposit of AUD 50 is required. The maximum bonus that can be received under this offer is up to AUD 250.
            </p>
            
            <div className="bg-[#0f1f3a]/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-[#ff0000]/20">
              <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">This bonus can be used on all slot games and slot products on the platform. However, it is not applicable to live games, fishing games, or free games.</p>
              <ul className="space-y-2 sm:space-y-3">
                {bonusStructure.map((bonus, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 relative">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#cc0000] rounded-full"></div>
                      <div className="absolute inset-0 bg-white rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-[1px] bg-[#333]"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#333] rounded-full"></div>
                      </div>
                    </div>
                    <span>{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-6 sm:mt-8 text-center">
              <a 
                href="https://pokemon9.org/RFESTER88" 
                className="cta-pulse inline-flex items-center gap-2 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-[#0a1628] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold transition-all duration-200 text-sm sm:text-base whitespace-nowrap cursor-pointer"
              >
                <span>Claim Bonus Now</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-[#3b4cca]/20">
            <h3 className="text-xl sm:text-2xl font-bold text-[#ffd700] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#3b4cca] to-[#2a3a9f] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-calendar-line text-white text-xs sm:text-sm"></i>
              </div>
              <span className="leading-tight">Ongoing Promotional Calendar</span>
            </h3>
            
            <div className="mb-4 sm:mb-6">
              <img 
                src="/promotions.jpg" 
                alt="Promotions bonus information" 
                className="w-full rounded-lg"
              />
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
              <p>
              Registered players can access a variety of daily and weekly promotional offers displayed in the information and slot bonus sections. These include daily rollover rebates, weekly commission rewards, and weekly rebate programs, each with clearly stated percentages.
              </p>
              <p>
              Slot players benefit from multiple bonus options such as daily slot bonuses, slot unlimited bonuses, slot welcome bonuses, and random bonuses on every deposit, depending on the selected promotion. Limited-time collaborations and themed events may also be available, as shown in the slot game bonus section.
              </p>
              <p>
              In addition, the platform features a daily deposit progressive bonus system, where different deposit ranges unlock corresponding bonus rewards. All promotions are subject to their individual terms and conditions as shown on the promotion page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
