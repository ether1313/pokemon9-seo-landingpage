
export default function Payments() {
  const paymentMethods = [
    {
      method: 'Visa / Mastercard',
      depositTime: 'Instant',
      withdrawalTime: '3–5 business days',
      limits: 'AUD 20 / AUD 5,000'
    },
    {
      method: 'Apple Pay',
      depositTime: 'Instant',
      withdrawalTime: '1–3 business days',
      limits: 'AUD 20 / AUD 3,000'
    },
    {
      method: 'Google Pay',
      depositTime: 'Instant',
      withdrawalTime: '1–3 business days',
      limits: 'AUD 20 / AUD 3,000'
    },
    {
      method: 'PayID',
      depositTime: 'Instant',
      withdrawalTime: 'Instant – 24 hours',
      limits: 'AUD 20 / AUD 10,000'
    },
    {
      method: 'Osko',
      depositTime: 'Instant',
      withdrawalTime: 'Instant – 24 hours',
      limits: 'AUD 20 / AUD 10,000'
    },
    {
      method: 'Amopay',
      depositTime: 'Instant',
      withdrawalTime: '1–2 business days',
      limits: 'AUD 20 / AUD 5,000'
    },
    {
      method: 'SpeedPay',
      depositTime: 'Instant',
      withdrawalTime: '1–2 business days',
      limits: 'AUD 20 / AUD 5,000'
    }
  ];
  

  return (
    <section id="payments" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      <div className="hidden md:block absolute top-20 left-20 w-16 h-16 opacity-10 pokeball-float" style={{ animationDelay: '1s' }}>
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffd700] to-[#cc9900] rounded-full"></div>
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
          <span className="text-[#ffd700] text-xs sm:text-sm font-bold uppercase tracking-widest">Poké Mart</span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3b4cca] rounded-full"></div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-8 text-center">
          Payment Methods for <span className="text-[#ffd700]">Australian Players</span>
        </h2>
        
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 sm:mb-12 text-center max-w-4xl mx-auto px-2">
          POKEMON9 Casino supports various payment options tailored to Australian banking preferences, ensuring convenient deposits and withdrawals for local players.
        </p>
        
        <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8 border border-[#ffd700]/20">
          {/* Mobile: Card layout */}
          <div className="block sm:hidden space-y-3">
            {paymentMethods.map((payment, index) => (
              <div key={index} className="bg-[#0f1f3a]/50 rounded-lg p-4 border border-gray-700/30">
                <div className="flex items-center gap-2 text-white text-sm font-semibold mb-3">
                  <div className="w-2 h-2 bg-[#ff0000] rounded-full"></div>
                  {payment.method}
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[#ffd700]">Deposit:</span>
                    <span className="text-gray-300 ml-1">{payment.depositTime}</span>
                  </div>
                  <div>
                    <span className="text-[#ffd700]">Withdrawal:</span>
                    <span className="text-gray-300 ml-1">{payment.withdrawalTime}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[#ffd700]">Limits:</span>
                    <span className="text-gray-300 ml-1">{payment.limits}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Desktop: Table layout */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-[#ffd700]/30">
                  <th className="text-left py-4 px-4 text-[#ffd700] font-semibold text-sm">Payment Method</th>
                  <th className="text-left py-4 px-4 text-[#ffd700] font-semibold text-sm">Deposit Time</th>
                  <th className="text-left py-4 px-4 text-[#ffd700] font-semibold text-sm">Withdrawal Time</th>
                  <th className="text-left py-4 px-4 text-[#ffd700] font-semibold text-sm">Min/Max Limits</th>
                </tr>
              </thead>
              <tbody>
                {paymentMethods.map((payment, index) => (
                  <tr key={index} className="border-b border-gray-700/50 hover:bg-[#ff0000]/5 transition-colors">
                    <td className="py-4 px-4 text-white text-sm font-medium flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#ff0000] rounded-full"></div>
                      {payment.method}
                    </td>
                    <td className="py-4 px-4 text-gray-300 text-sm">{payment.depositTime}</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">{payment.withdrawalTime}</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">{payment.limits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mb-6 sm:mb-8">
          <img 
            src="/transaction.jpg" 
            alt="Pokemon9 live transaction panel" 
            className="w-full rounded-xl sm:rounded-2xl"
          />
        </div>
        
        <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-[#3b4cca]/20">
          <h3 className="text-xl sm:text-2xl font-bold text-[#ffd700] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#3b4cca] to-[#2a3a9f] rounded-full flex items-center justify-center flex-shrink-0">
              <i className="ri-shield-check-line text-white text-xs sm:text-sm"></i>
            </div>
            <span className="leading-tight">Security and Processing Standards</span>
          </h3>
          
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
            <p>
              All financial transactions undergo encryption protocols meeting international banking standards. The casino processes withdrawal requests within 24 hours during business days, with additional time required for banking institution processing.
            </p>
            <p>
              Australian players benefit from fee-free deposits on most payment methods, though some withdrawal options may incur nominal processing charges. Currency conversion rates follow real-time market standards when applicable.
            </p>
          </div>
          
          <div className="mt-5 sm:mt-6 text-center">
            <a 
              href="https://pokemon9.org/RFESTER88" 
              className="cta-pulse inline-flex items-center gap-2 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-[#0a1628] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold transition-all duration-200 text-sm sm:text-base whitespace-nowrap cursor-pointer"
            >
              <span>Deposit Now</span>
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
