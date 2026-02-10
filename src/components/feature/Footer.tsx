
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] py-8 sm:py-12 relative overflow-hidden">
      <div className="hidden sm:block absolute top-10 left-10 w-12 h-12 opacity-10">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#cc0000] rounded-full"></div>
          <div className="absolute inset-0 bg-white rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-[2px] bg-[#333]"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-[#333] rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="hidden sm:block absolute bottom-10 right-10 w-16 h-16 opacity-10">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#cc0000] rounded-full"></div>
            <div className="absolute inset-0 bg-white rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-[2px] bg-[#333]"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#333] rounded-full flex items-center justify-center">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <span className="text-xl sm:text-2xl font-black text-white">PKM<span className="text-[#ffd700]">9</span></span>
        </div>
        
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="bg-white/30 rounded-xl p-4 sm:p-6">
            <img 
              src="/footer-banner.png" 
              alt="Certifications and Payment Methods" 
              className="w-full max-w-6xl h-auto object-contain"
            />
          </div>
        </div>
        
        <div className="text-center text-gray-400 text-xs sm:text-sm">
          <p className="mb-3 sm:mb-4 px-2">
            Please gamble responsibly. PKM9 Australia Online Casino is licensed by the Curacao Gaming Authority. Players must be 18+ years old.
          </p>
        </div>
      </div>
    </footer>
  );
}
