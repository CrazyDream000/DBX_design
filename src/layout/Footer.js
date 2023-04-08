import logo from '../assest/img/Logo.png';
import searchicon from '../assest/img/Search.png';
import arr_right from '../assest/img/arrow-right.png';
import '../assest/css/Footer.css'
 import React from 'react'
function Footer() {
  return (
    <footer className="footer-container flex flex-row items-center justify-center p-5">
      <div className='p-5 max-lg:flex flex-col footer-content-container  max-lg:w-full'>
        <div className='lg:inline-block float-left max-lg:block'>
         <div className='flex flex-row text-left lg:gap-16 max-lg:justify-between items-start gap-2'>
            <div className='flex flex-col'>
                <div className='title font-bold text-sm'>General</div>
                <div className='title text-sm mt-2'>Chat</div>
            </div>
            <div className='flex flex-col'>
                <div className='title font-bold text-sm'>EcoSystem</div>
                <div className='title text-sm mt-2'>Main Website</div>
                <div className='title text-sm mt-2'>Mobile bank Application</div>
            </div>
            <div className='flex flex-col'>
                <div className='title font-bold text-sm'>Bridge</div>
                <div className='title text-sm mt-2'>Swaport Bridge</div>
            </div>
            <div className='flex flex-col'>
                <div className='title font-bold text-sm'>DBX exchanges</div>
                <div className='title text-sm mt-2'>Bitforex</div>
                <div className='title text-sm mt-2'>Bitmart</div>
                <div className='title text-sm mt-2'>LBank</div>
                <div className='title text-sm mt-2'>Whitebit</div>
                <div className='title text-sm mt-2'>Latoken</div>
                <div className='title text-sm mt-2'>Probit</div>
                <div className='title text-sm mt-2'>Coinsbit</div>
                <div className='title text-sm mt-2'>Uniswap</div>
                <div className='title text-sm mt-2'>Bitforex</div>
            </div>
          </div> 
        </div>
        <div className='lg:inline-block float-right max-lg:block'>
          <div className='flex flex-col text-left'>
            <img className="w-10 h-10" src={logo}></img>
            <div className='text-sm leading-8 mt-2'>
              DBX Explorer is a tool for inspecting <br/>
              and analyzing DBX Smart Network. <br/>
              Blockchain explorer for DBX Smart Network.
            </div>
            <div class="flex flex-row">
              <div className=''>
                <a href="https://github.com/dima0dev/">
                  <span class="ico-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                </a>
              </div>
              <div className='ml-2'>
                <a href=""><span class="ico-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-discord" viewBox="0 2 16 16">
                      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
                  </svg>
                </span></a>
              </div>
                <div className='ml-3'>
                  <a href="https://t.me/@dima0dev"><span class="ico-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 20">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      
    </footer>
  );
}

export default Footer;