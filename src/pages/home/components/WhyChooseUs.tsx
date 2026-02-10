
export default function WhyChooseUs() {
  const whyChooseFeatures = [
    'New Register And Social Media Task Promoting',
    'Deposit Bonus Up to 169.99',
    'Weekly rebate 5% & Weekly Comission 5%',
    'New Members Get Free Chips 10'
  ];

  const vipProgramFeatures = [
    'Deposit 30AUD Can Get One Spin',
    'Earn Golden Egg Point With Every Deposit',
    'Daily Check In Missions',
    'Active Players Qualify For The VIP Program With Extra VIP Bonus'
  ];

  return (
    <section id="why-choose-us" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      <div className="hidden md:block absolute top-20 left-20 w-24 h-24 opacity-10 pokeball-float" style={{ animationDelay: '0.3s' }}>
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#cc0000] rounded-full"></div>
          <div className="absolute inset-0 bg-white rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1.5 bg-[#333]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-[#333] rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-20 right-20 w-20 h-20 opacity-10">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#3b4cca] to-[#2a3a9f] rounded-full"></div>
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
          <span className="text-[#ffd700] text-xs sm:text-sm font-bold uppercase tracking-widest">Exclusive Benefits</span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3b4cca] rounded-full"></div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-8 text-center px-2">
          Why Choose <span className="text-[#ffd700]">POKEMON9</span>?
        </h2>
        
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 sm:mb-12 text-center max-w-4xl mx-auto px-2">
          Discover the exclusive benefits and rewards that make POKEMON9 Casino the premier choice for online gaming enthusiasts.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-[#ffd700]/20">
            <h3 className="text-xl sm:text-2xl font-bold text-[#ffd700] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#ff0000] to-[#cc0000] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-star-line text-white text-xs sm:text-sm"></i>
              </div>
              <span className="leading-tight">Why Choose Pokemon9?</span>
            </h3>
            
            <ul className="space-y-3 sm:space-y-4">
              {whyChooseFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4 text-gray-300 text-sm sm:text-base">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#ffd700] to-[#ffed4e] rounded-full transform rotate-45"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#0a1628] transform rotate-45"></div>
                    </div>
                  </div>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-[#3b4cca]/20">
            <h3 className="text-xl sm:text-2xl font-bold text-[#ffd700] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#3b4cca] to-[#2a3a9f] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-vip-crown-line text-white text-xs sm:text-sm"></i>
              </div>
              <span className="leading-tight">VIP PROGRAM</span>
            </h3>
            
            <div className="mb-4 sm:mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#ffd700]/30 to-transparent"></div>
            </div>
            
            <ul className="space-y-3 sm:space-y-4">
              {vipProgramFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 sm:gap-4 text-gray-300 text-sm sm:text-base">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#ffd700] to-[#ffed4e] rounded-full transform rotate-45"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#0a1628] transform rotate-45"></div>
                    </div>
                  </div>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 sm:mt-8 text-center">
              <a 
                href="https://pokemonau.net/RFESTER88" 
                className="cta-pulse inline-flex items-center gap-2 bg-gradient-to-r from-[#3b4cca] to-[#5a6fd6] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold transition-all duration-200 text-sm sm:text-base whitespace-nowrap cursor-pointer"
              >
                <span>Join VIP Program</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
