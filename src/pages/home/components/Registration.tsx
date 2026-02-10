
export default function Registration() {
  return (
    <section id="registration" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] relative overflow-hidden">
      <div className="hidden md:block absolute top-20 right-20 w-24 h-24 opacity-10 pokeball-float">
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

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#ff0000] rounded-full"></div>
          <span className="text-[#ffd700] text-xs sm:text-sm font-bold uppercase tracking-widest">Step Into the Action</span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#3b4cca] rounded-full"></div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 sm:mb-8 text-center">
          Registration and <span className="text-[#ffd700]">Account Verification</span>
        </h2>
        
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 sm:mb-12 text-center max-w-4xl mx-auto px-2">
          Creating an account at POKEMON9 Casino follows a straightforward three-step process designed to get players started quickly while ensuring security compliance.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-[#ff0000]/20">
            <h3 className="text-xl sm:text-2xl font-bold text-[#ffd700] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#ff0000] to-[#cc0000] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-user-add-line text-white text-xs sm:text-sm"></i>
              </div>
              <span className="leading-tight">Account Creation Process</span>
            </h3>
            
            <div className="mb-4 sm:mb-6">
              <img 
                src="/register.jpg" 
                alt="POKEMON9 Casino registration form interface" 
                className="w-full rounded-lg"
              />
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
              <p>
              New users begin by clicking the Register button and filling in the required details on the registration form. Users must enter their full name (which must match the name on their bank account), mobile number, and create a secure password between 6–20 characters. A referrer code may be entered if available, but this field is optional.
              </p>
              <p>
              To verify the mobile number, users should click the GET CODE button to receive a verification code via SMS. Enter the received code in the verification field, then click REGISTER to complete the registration process.
              </p>
              <p>
              Once registration is successful, users can log in immediately using their mobile number and password.
              </p>
            </div>
            
            <div className="mt-5 sm:mt-6 text-center">
              <a 
                href="https://pokemonau.net/RFESTER88" 
                className="cta-pulse inline-flex items-center gap-2 bg-gradient-to-r from-[#ffd700] to-[#ffed4e] text-[#0a1628] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold transition-all duration-200 text-sm sm:text-base whitespace-nowrap cursor-pointer"
              >
                <span>Register Now</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#1a2942] to-[#0f1f3a] rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-[#3b4cca]/20">
            <h3 className="text-xl sm:text-2xl font-bold text-[#ffd700] mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-[#3b4cca] to-[#2a3a9f] rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-login-box-line text-white text-xs sm:text-sm"></i>
              </div>
              <span className="leading-tight">POKEMON9 Casino Login Features</span>
            </h3>
            
            <div className="mb-4 sm:mb-6">
              <img 
                src="/login.jpg" 
                alt="POKEMON9 secure login page with 2FA" 
                className="w-full rounded-lg"
              />
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed">
              <p>
              Once registered, users can access the POKEMON9 platform by entering their mobile number or username along with their password on the login page. Passwords must meet the required length of 6–20 characters.
              </p>
              <p>
              If users forget their password, they may select the Forgot Password option to recover access to their account. New users who do not yet have an account can click REGISTER to proceed with account creation.
              </p>
              <p>
              The login interface is designed for quick and straightforward access across devices.
              </p>
            </div>
            
            <div className="mt-5 sm:mt-6 text-center">
              <a 
                href="https://pokemonau.net/RFESTER88" 
                className="cta-pulse inline-flex items-center gap-2 bg-gradient-to-r from-[#3b4cca] to-[#5a6fd6] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold transition-all duration-200 text-sm sm:text-base whitespace-nowrap cursor-pointer"
              >
                <span>Login Now</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
