
import { useCountUp } from '../../../hooks/useCountUp';

function AnimatedStat({ 
  end, 
  suffix, 
  label, 
  icon 
}: { 
  end: number; 
  suffix: string; 
  label: string; 
  icon: string;
}) {
  const { count, ref } = useCountUp({ end, duration: 2500, suffix });

  return (
    <div 
      ref={ref}
      className="group relative bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full sm:w-auto sm:min-w-[180px] border-2 border-[#ffd700]/30 hover:border-[#ffd700] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,215,0,0.3)] overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-[#ff0000]/20 to-transparent rounded-full blur-xl"></div>
      <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-br from-[#ffd700]/20 to-transparent rounded-full blur-xl"></div>
      
      <div className="relative flex sm:block items-center gap-4 sm:gap-0">
        <div className="w-12 h-12 sm:w-16 sm:h-16 sm:mx-auto sm:mb-4 relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff0000] to-[#cc0000] rounded-full"></div>
          <div className="absolute inset-[2px] bg-gradient-to-br from-[#ffffff] to-[#f0f0f0] rounded-full"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-0.5 sm:h-1 bg-[#333]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 sm:w-6 sm:h-6 bg-[#333] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full flex items-center justify-center">
                <i className={`${icon} text-xs sm:text-sm text-[#ff0000]`}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 sm:text-center">
          <div className="text-2xl sm:text-4xl font-black text-white sm:mb-2 group-hover:text-[#ffd700] transition-colors duration-300 tracking-tight">
            {count}
          </div>
          <div className="text-gray-400 text-xs sm:text-sm font-bold uppercase tracking-widest">{label}</div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f1f3a]"></div>
      
      {/* Floating Pokeballs - Hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 opacity-20 pokeball-float" style={{ animationDelay: '0s' }}>
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#cc0000] rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-2 bg-[#333]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 bg-[#333] rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden md:block absolute top-40 right-20 w-24 h-24 opacity-15 pokeball-float" style={{ animationDelay: '1s' }}>
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#cc0000] rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1.5 bg-[#333]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-[#333] rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-40 left-1/4 w-20 h-20 opacity-10 pokeball-float" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#cc0000] rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
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
      
      <div className="hidden lg:block absolute top-1/3 right-1/4 w-16 h-16 opacity-10 pokeball-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#3b4cca] to-[#2a3a9f] rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-200 rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-1 bg-[#333]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 bg-[#333] rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sparkle particles - Hidden on mobile */}
      <div className="hidden sm:block absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#ffd700] rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#ff0000] rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-[#3b4cca] rounded-full animate-ping opacity-30" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#ff0000]/20 via-[#ffd700]/20 to-[#3b4cca]/20 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-[#ffd700]/30">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#ff0000] rounded-full animate-pulse"></div>
              <span className="text-[#ffd700] text-xs sm:text-sm font-bold uppercase tracking-widest">One Game. All the Wins.</span>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3b4cca] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
            <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">POKEMON9</span>
            <span className="block mt-1 sm:mt-2 title-shimmer text-4xl sm:text-6xl lg:text-8xl">Casino Australia</span>
            <span className="block text-lg sm:text-3xl lg:text-4xl mt-2 sm:mt-4 font-bold">
              <span className="text-[#ff0000]">Play</span>
              <span className="text-white"> 800+ Games </span>
              <span className="text-[#3b4cca]">with Fast Payouts</span>
            </span>
          </h1>
          
          <p className="text-sm sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
            POKEMON9 Casino has established itself as a reliable gaming destination for Australian players seeking diverse entertainment options and secure transactions. This comprehensive platform combines modern technology with user-friendly features to deliver an engaging casino experience.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-12 max-w-xl sm:max-w-none mx-auto">
            <AnimatedStat end={500} suffix="+" label="Pokies" icon="ri-gamepad-line" />
            <AnimatedStat end={300} suffix="" label="AUD Bonus" icon="ri-gift-line" />
            <AnimatedStat end={24} suffix="/7" label="Support" icon="ri-customer-service-2-line" />
          </div>
          
          <a 
            href="https://pokemon9.org/RFESTER88" 
            className="cta-pulse inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-[#ffd700] via-[#ffed4e] to-[#ffd700] text-[#0a1628] px-8 sm:px-12 py-3 sm:py-5 rounded-full font-black text-base sm:text-xl transition-all duration-300 whitespace-nowrap cursor-pointer border-2 border-[#ffd700]"
          >
            <span>Play Now</span>
            <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#cc0000] rounded-full"></div>
              <div className="absolute inset-0 bg-white rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-[2px] bg-[#333]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#333] rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
