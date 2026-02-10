
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How long does POKEMON9 casino account verification take?',
      answer: 'Account verification typically completes within 1 hour after submitting required documents. Australian players need valid au phone number verification for the registration process.'
    },
    {
      question: 'Is POKEMON9 Casino legal for Australian players?',
      answer: 'POKEMON9 Casino operates under Curacao Gaming Authority licensing and accepts Australian players in compliance with applicable regulations. Players should verify local gambling laws in their jurisdiction.'
    },
    {
      question: 'What is the minimum withdrawal amount at POKEMON9?',
      answer: 'The minimum withdrawal amount is AUD 50 for most payment methods, with some e-wallet options allowing withdrawals as low as AUD 20.'
    },
    {
      question: 'Can I play POKEMON9 Casino games on mobile devices?',
      answer: 'Yes, POKEMON9 Casino offers full mobile compatibility through web browsers without requiring app downloads. All games and features function normally on smartphones and tablets.'
    },
    {
      question: 'How do I claim the POKEMON9 no deposit bonus?',
      answer: 'The no deposit bonus activates automatically upon successful account verification. Free spins appear in your account within 24 hours of verification completion.'
    },
    {
      question: 'What customer support options are available?',
      answer: 'POKEMON9 Casino provides 24/7 live chat support and email assistance as well as whatsapp and telegram bonus group support. Response times average under 5 minutes for live chat and within 24 hours for email inquiries.'
    },
    {
      question: 'Are there withdrawal limits at POKEMON9 Casino?',
      answer: 'Standard players can withdraw up to AUD 5,000 per transaction and AUD 20,000 per month. VIP members receive higher limits based on their status level.'
    },
    {
      question: 'Which software providers power POKEMON9 Casino games?',
      answer: 'The casino features games from JILI, BOOONGO, CQ9 Gaming, Imperium Games, RICH Gaming, VPower, ACE333, Joker, and several other established providers ensuring quality and fairness.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#16213e] to-[#1a1a2e] relative overflow-hidden">
      <div className="hidden md:block absolute bottom-20 right-20 w-24 h-24 opacity-10 pokeball-float" style={{ animationDelay: '0.7s' }}>
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

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#ff0000] rounded-full"></div>
          <span className="text-[#ffd700] text-xs sm:text-sm font-bold uppercase tracking-widest">Pokédex</span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3b4cca] rounded-full"></div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-8 sm:mb-12 text-center">
          Frequently Asked <span className="text-[#ffd700]">Questions</span>
        </h2>
        
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] rounded-xl sm:rounded-2xl overflow-hidden border border-[#ffd700]/20 hover:border-[#ffd700]/40 transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-[#ff0000]/5 transition-colors cursor-pointer"
              >
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-0.5 sm:mt-0 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#ff0000] to-[#cc0000] rounded-full"></div>
                    <div className="absolute inset-0 bg-white rounded-full" style={{ clipPath: 'inset(50% 0 0 0)' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-[1px] sm:h-[2px] bg-[#333]"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#333] rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-sm sm:text-base pr-2">{faq.question}</h3>
                </div>
                <i className={`${openIndex === index ? 'ri-subtract-line' : 'ri-add-line'} text-[#ffd700] text-xl sm:text-2xl flex-shrink-0`}></i>
              </button>
              
              {openIndex === index && (
                <div className="px-4 pb-4 sm:px-6 sm:pb-6 pl-[52px] sm:pl-[72px]">
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-6">Still have questions? Our support team is ready to help!</p>
          <a 
            href="https://pokemonau.net/RFESTER88" 
            className="cta-pulse inline-flex items-center gap-2 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-[#0a1628] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold transition-all duration-200 text-sm sm:text-base whitespace-nowrap cursor-pointer"
          >
            <span>Contact Support</span>
            <i className="ri-customer-service-2-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
