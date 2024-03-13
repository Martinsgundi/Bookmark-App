import browsers from "./Browsers";
    
const Download = () => {
    return (  
        <>
            <section className="mt-40 text-center padding-inline">
                <div>
                    <h2 className="h2">
                        Download the extension
                    </h2>

                    <p className="p">
                        We’ve got more browsers in the pipeline. 
                        Please do let us know if you’ve got a 
                        favourite you’d like us to prioritize.
                    </p>
                </div>


                <div>
                    <div className="grid gap-12 lg:grid-cols-3 lg:gap-8 lg:w-fit lg:mx-auto">
                        
                        {
                            browsers.map((browser, index) => (
                                
                                <div key={index} 
                                    className={`${index === 1 ? 'lg:bottom-[-2.5rem]' : ''} 
                                    ${index === 2 ? 'lg:bottom-[-5rem]' : ''} relative px-6 
                                    pt-12 pb-6 mx-auto shadow-lg rounded-2xl w-fit sm:px-24 
                                    lg:px-6 lg:w-full lg:max-w-[290px]`}>
                                        
                                        
                                    <img className="mx-auto mb-6"
                                    src={browser.imgSrc} 
                                    alt={browser.alt} />

                                    <h3 className='mb-2 text-xl font-medium'> 
                                        {browser.header} 
                                    </h3>

                                    <p className='mb-8 text-grayishBlue'> 
                                        {browser.version} 
                                    </p>

                                    {/* Dotted lines */}
                                    <div className="dotted"> </div>

                                    <button className='px-9 mt-7 blue-btn lg:px-4 lgXl:px-9 '> Add & Install Extension </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};
 
export default Download;
