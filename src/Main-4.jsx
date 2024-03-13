import { useState } from 'react';
import faqContent from './Faq-content';

const Faq = () => {

    const [openFaq, setOpenFaq] = useState(null);
    
    const handleFaqClick = (index) => {
        setOpenFaq(openFaq === index ? null : index); //The toggle effect
    };
    
    return ( 
        <>
            <section className="mt-32 text-center padding-inline lg:mt-60">
                <h2 className="h2"> Frequently Asked Questions </h2>
                
                <p className="p">
                    Here are some of our FAQs. If you have 
                    any other questions you’d like answered
                    please feel free to email us.   
                </p>


                <dl className="grid w-full gap-6 mt-20 text-start mx-auto max-w-[446px] lg:mt-14 lg:max-w-[535px] lg:text-lg">
                    {
                        faqContent.map((faq, index) => (
                            
                            <div key={index} 
                                className='border-b border-gray-300'>
                                
                                <div 
                                    aria-label='Toggle FAQ response'
                                            
                                    onClick={() => {
                                        handleFaqClick(index);
                                    }}
                                    
                                    className={`${index === 0 ? 'lg:border-t lg:pt-4' : ''} flex justify-between pb-4 cursor-pointer transition-text lg:hover:text-softRed`}>
                                    
                                    <dt> {faq.question} </dt>
      
                                    <button
                                        aria-label='Toggle FAQ response'>
                                        
                                        {/* Arrow-Icon */}
                                        <svg 
                                            className={`${openFaq === index ? 
                                            'rotate-180' : ''} transition-All`}
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="18" height="12" >
                                            
                                            <path fill="none" stroke={ openFaq === index ? 
                                                "hsl(0, 94%, 66%)" : "#5267DF" } 
                                                stroke-width="3" d="M1 1l8 8 8-8"
                                            />
                                        </svg> 
                                        
                                    </button>
                                    
                                </div>
                            
                                
                                <dd aria-hidden={openFaq === index ? 'false' : 'true'}
                                
                                    className={`${openFaq === index ? 
                                    'opacity-100 max-h-[17rem] pt-8 pb-3' : 
                                    'max-h-0 opacity-0 overflow-hidden'} 
                                    transition-All text-grayishBlue 
                                    leading-7  lg:leading-[2]`}>
                                        
                                    {faq.response}
                                </dd>
                                
                            </div>  
                        ))
                    }
                </dl>

                <button className="px-6 mt-10 blue-btn lg:mt-14"> More Info </button>
            </section>
            
        </>
    );
};
 
export default Faq;