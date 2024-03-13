import illustrationHero from './assets/images/illustration-heroo.png';

const Intro = () => {
    return (  
        <>
            <section className='mt-36 grid mb-40 overflow-x-clip relative
                px-[9vw] midLg:pl-[11vw] xl:pl-[13vw]
                md:mb-48 md:grid-cols-[minmax(0,1fr)_minmax(0,_1fr)] md:gap-4
                md:pr-[4vw] lg:pr-[7vw] midLg:mt-[11.3rem]'>
                

                {/* Illustration Image */}
                <div>
                    <img src= {illustrationHero} alt="Illustration-image"
                    className='w-full md:h-full mb-[5.5rem] md:mb-0' />
                </div>


                {/* Header Text */}
                <div className='text-center md:row-start-1 md:text-left md:self-end'>
                    <h1 className='mb-5 text-3xl font-medium 
                        md:text-[2rem] lg:text-[2.5rem] lg:leading-[3rem]
                        lgXl:text-5xl lgXl:leading-[3.5rem]'> 
                        
                        A Simple Bookmark Manager
                    </h1>

                    <p className='mb-8 text-grayishBlue mx-auto max-w-[38ch] md:mx-0 md:max-w-[45ch] lg:text-lg'>
                        A clean and simple interface to organize your favourite 
                        websites. Open a new browser tab and see your sites load 
                        instantly. Try it for free.
                    </p>

                    <div className='flex justify-center gap-4 md:justify-start'>
                        
                        <button className='px-3 blue-btn midLg:px-6'>
                            
                            Get it on Chrome
                        </button>


                        <button className='px-3 font-medium text-gray-600 transition-bg 
                            bg-zinc-100 border-zinc-100 text-[.9rem] border-2
                            rounded-md shadow-md midLg:hover:bg-transparent
                            midLg:hover:border-gray-600 midLg:px-6'> 
                            
                            Get it on Firefox
                        </button>
                    </div> 
                </div>
            </section>
        </>
    );
};
 
export default Intro;