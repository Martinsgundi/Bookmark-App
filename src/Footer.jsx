import { useState } from "react";
import logoImage3 from "./assets/images/logo-bookmark3.svg";
import HoverableSvg from "./HoverSvg";
import errorImg from "./assets/images/icon-error.svg";

const Footer = () => {

    // Input Value
    const [isInputValue, setIsInputValue] = useState('');
    const [isvalidEmail, setIsValidEmail] = useState(true);
    
    const handleEmailVerification = (e) => {
        e.preventDefault();
        
        // RegEx to check email validity
        const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/.test(isInputValue);
        
        setIsValidEmail(isValid);
    };
    
    return ( 
        <div className="mt-32">

            {/* softBlue-bg */}
            <div className="py-16 text-center text-white bg-softBlue padding-inline">
                
                <p className="text-[.75rem] tracking-[5px] mb-3 lg:mb-8"> 35,000+ ALREADY JOINED </p>

                <h2 className="h2 mx-auto max-w-[20ch]"> Stay up-to-date with what we’re doing </h2>

                <form 
                    onSubmit={(e) => {
                      handleEmailVerification(e);
                    }}
                
                    className={`${!isvalidEmail ? 'gap-10 md:gap-5' : 'gap-5'} grid mt-8 
                    mx-auto md:w-fit md:grid-cols-[minmax(0,_1fr)_minmax(0,_auto)] lg:mt-10`}>
                    
            
                    <div className={`${!isvalidEmail ? 
                        'error border-softRed border-2 rounded-md' : 
                        ''} relative w-full max-w-[300px] mx-auto`}>
                        
                        <input type="text"
                            onChange={(e) => setIsInputValue(e.target.value)}
                            
                            className={`w-full px-5 py-3 rounded-md 
                            outline-none  text-grayishBlue 
                            placeholder:text-gray-300 md:mr-7 `} 
                            
                            placeholder="Enter your email address"
                        />   
                        
                        { !isvalidEmail &&
                            <img src={errorImg} 
                                alt="Error-Icon" 
                                className="absolute right-4 top-1/3"
                            />
                        }
                    </div>
                   
                   
                    <button 
                        className={`w-full mx-auto max-w-[300px]  
                        text-[0.9375rem] text-gray-200 bg-softRed md:border-2
                        rounded-md py-3 transition-bg  md:border-softRed md:w-[125px] 
                        md:py-2 md:px-4 md:hover:bg-white md:hover:text-softRed`}>
                        
                        Contact Us 
                    </button>
                </form>
            </div>
            

            {/* veryDarkBlue-bg */}
            <div className="text-center text-white bg-veryDarkBlue py-9 padding-inline">
                <nav className="midLg:flex midLg:justify-between" aria-label="footer-navigation">
                    <div className="midLg:flex midLg:gap-16 midLg:items-center">
                        <div>
                            <a href="/" aria-label="Go to Homepage">
                                <img src= {logoImage3} 
                                alt="BOOKMARK"  
                                className="mx-auto" />
                            </a>
                        </div>

                        <ul className="grid gap-8 tracking-widest uppercase my-9 midLg:text-[0.8rem] midLg:grid-cols-3 midLg:my-0">  
                            <li> <a className="softRed-hover" href="#"> Features </a> </li>
                            <li> <a className="softRed-hover" href="#"> Pricing </a> </li>
                            <li> <a className="softRed-hover" href="#"> Contact </a> </li>
                        </ul>
                    </div>

                    <div className='relative flex justify-center gap-10'>
                        
                        {/* Facebook logo */}
                        <a href="/" aria-label="Visit our Facebook page">
                            <HoverableSvg>
                                <path fill="#fff" fill-rule="evenodd" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                            </HoverableSvg>
                        </a>

                        {/* Twitter logo */}
                        <a href="/" aria-label="Visit our Twitter(X) page">
                            <HoverableSvg>            
                                <path fill="#FFF" fill-rule="evenodd" d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"/>
                            </HoverableSvg>
                        </a>
                        
                    </div>
                </nav>
            </div>
          
        </div>
    );
};
 
export default Footer;