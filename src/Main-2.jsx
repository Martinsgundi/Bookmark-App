import { useState } from "react";
import tabContent from "./Tab-contents";

const Features = () => {
    
    const [activeTab, setActiveTab] = useState(0);
    
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    
    return ( 
        <>
            <section className="text-center padding-inline md:text-start"> 
                <div>
                    <h2 className='text-center h2'>
                        Features
                    </h2>

                    <p className='text-center p'>
                        Our aim is to make it quick and easy for you to access 
                        your favourite websites. Your bookmarks sync between 
                        your devices so you can access them on the go.
                    </p>
                </div>


                <div>
                    
                    {/* Tab changer/slider */}
                    <div className="mb-16">
                        <ul className="mx-auto grid text-[1.1rem] text-gray-500 text-center md:grid-cols-3 lg:w-[80%] xl:w-[70%]">
                            <li 
                                onClick={() => handleTabClick(0)} 
                                    
                                className={`${activeTab === 0 ? 'tab-focus' : ''} py-4 border-gray-300 border-y md:pb-7 md:border-t-0 midLg:cursor-pointer midLg:hover:text-softRed`}>
                                Simple Bookmarking 
                            </li>
                            
                            
                            <li 
                                onClick={() => handleTabClick(1)} 
                                
                                className={`${activeTab === 1 ? 'tab-focus' : ''} py-4 border-b border-gray-300 md:pl-7 midLg:cursor-pointer midLg:hover:text-softRed`}>
                                Speedy Searching 
                            </li>
                            
                            
                            <li 
                                onClick={() => handleTabClick(2)} 
                                
                                className={`${activeTab === 2 ? 'tab-focus' : ''} py-4 border-b border-gray-300 midLg:cursor-pointer midLg:hover:text-softRed`}>
                                Easy Sharing 
                            </li>
                        </ul>
                    </div>


                    {/* Tab contents */}
                    <div>
                        
                        {tabContent.map((tab, index) => (
                            
                            <div 
                                key={index}
                                aria-hidden={ activeTab !== index ? 'true' : 'false' }
                                className={ activeTab !== index ? 'hidden' : 'md:grid md:gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,_1fr)]' }>
                                
                                {/* Rendered tab content based on the value of activeTab */}
                                
                                {/* Tab-Image */}
                                <div className="mb-16 md:mb-0"> 
                                    <img src={tab.imageSrc} 
                                        alt={`Illustration features tab-${index + 1}`} 
                                        className="mx-auto md:h-full"
                                    />
                                </div>
                                

                                {/* Tab-Text feature */}
                                <div className="self-center justify-self-end">
                                    <h2 className='h2'>
                                        {tab.title}
                                    </h2>
                                    
                                    <p className='mx-auto mb-11 text-grayishBlue 
                                        max-w-[38ch] md:mx-0 md:mb-8 lg:text-lg'>
                                        {tab.description}
                                    </p>
                                    
                                    <button className='px-6 blue-btn'>
                                        More Info 
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};
 
export default Features;