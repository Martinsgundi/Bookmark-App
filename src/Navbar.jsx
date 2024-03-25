import logoImage from './assets/images/logo-bookmark.svg';
import logoImage2 from './assets/images/logo-bookmark2.svg';
import facebookIcon from './assets/images/icon-facebook.svg';
import twitterIcon from './assets/images/icon-twitter.svg';
import { useState } from 'react';

const Navbar = () => {

    // To toggle the state of mobile nav-menu
    const [hamburgerIcon, setHamburgerIcon] = useState(false);
    
    // To toggle the hidden state of bg-overlay
    const [bgOverlay, setBgOverlay] = useState(true);

    // To toggle the hidden state of Mobile Menu Text
    const [menuText, setMenuText] = useState(true);

    return (  
        <>
            <nav aria-label='header-navigation'>
                <div className='text-lg'>
                    <div className= {`${!hamburgerIcon ? 'bg-[#aae4]' : ''}
                        fixed top-0 left-0 z-20 flex items-center 
                        justify-between w-full py-8 padding-inline`}>

                        {/* Brand Logo */}
                        <div> 
                            {!hamburgerIcon ? 
                                <a href="/" aria-label='Go to Homepage'> 
                                    <img src= {logoImage} alt="BOOKMARK" /> 
                                </a> 
                                : 
                                <a href="/" aria-label='Go to Homepage'>
                                    <img src= {logoImage2} alt="BOOKMARK" /> 
                                </a>
                            }  
                        </div>


                        {/* Mobile Harmburger Icon */}
                        <button 
                            aria-label='Click to open menu'
                            onClick={() => {
                                setHamburgerIcon(!hamburgerIcon);
                                setBgOverlay(!bgOverlay);
                                setMenuText(!menuText);
                            }}

                            className={`hamburger midLg:hidden z-10 ${hamburgerIcon ? 'active' : ''}`}>
                            
                            <span className="bar bg-veryDarkBlue"></span>
                            <span className="bar bg-veryDarkBlue mt-[4px]"></span>
                            <span className="bar bg-veryDarkBlue mt-[4px]"></span>
                        </button>


                        {/* Desktop nav-list */}
                        <ul className='items-center hidden gap-10 text-sm tracking-wider uppercase midLg:flex'>
                            <li> <a className='softRed-hover' href="#"> Features </a> </li>
                            <li> <a className='softRed-hover' href="#"> Pricing </a> </li>
                            <li> <a className='softRed-hover' href="#"> Contact </a> </li>
                            <li> 
                                <a className='px-8 py-2 font-medium text-gray-200 border-2 rounded-md shadow-lg transition-bg bg-softRed border-softRed hover:text-softRed hover:bg-white' href="#"> 
                                    Login 
                                </a>                          
                            </li>
                        </ul>
                    </div>         
                    

                    {/* Mobile Menu */}
                    <div aria-hidden= {`${menuText ? 'true' : 'false'}`}
                    className={`${menuText ? 'hidden' : ''}  
                    padding-inline uppercase text-center fixed w-full  
                    z-20 overflow-hidden text-white h-full top-28`}>
                        
                        <ul className='sm:w-2/3 sm:mx-auto tracking-[3px]'>
                            <li> <a className='block py-4 border-y border-slate-500' href="#"> Features </a> </li>
                            <li> <a className='block py-4 border-b border-slate-500' href="#"> Pricing </a> </li>
                            <li> <a className='block py-4 border-b border-slate-500' href="#"> Contact </a> </li>
                            <li> <a className='block py-2 mt-6 border-2 rounded-md' href="#"> Login </a> </li>
                        </ul>


                        {/* Social Icons */}
                        <div className='relative flex justify-center gap-10 top-40'>
                            <a href="#" aria-label='Visit our Facebook page'>
                                <img src= {facebookIcon} alt="facbook-icon" />                               
                            </a>

                            <a href="#" aria-label='Visit our Twitter(X) page'>
                                <img src= {twitterIcon} alt="twitter-icon" />                               
                            </a>
                        </div>
                    </div>    
                </div>
            </nav>
            
            
            {/* Background-overlay */}
            <div aria-hidden= {`${menuText ? 'true' : 'false'}`} 
                className={`${bgOverlay ? 'opacity-0' : ''} 
                z-10 fixed top-0 left-0 w-full pointer-events-none h-full
                bg-veryDarkBlue/90 transition-all duration-500 ease-out`}>                
            </div>
        </>
    );
}
 
export default Navbar;

