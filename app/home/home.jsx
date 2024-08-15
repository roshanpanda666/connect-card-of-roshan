
import React from 'react'
import Name from '../name/name'
import Typingeffect from '../typingeffect/typingeffect'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='flex justify-center item-center'>
        
       

        {/* the center things */}

           
        <div className='flex justify-center items-center absolute h-[100vh]'>
            <div className='flex flex-col justify-center item-center'>


                <div className='flex justify-center items-center'>
                    <div className='lg:h-[30rem] lg:w-[30rem] h-[24rem] w-[24rem] bg-orange-600 rounded-full'>



                        <div className='lg:hidden block'>
                        <div className='relative flex flex-col justify-center items-center mt-32'>
                            <div className='text-4xl -rotate-90 -ml-40 text-gray-900'>SABYA<span className='text-amber-100'>SACHI</span></div>

                            <div className='flex flex-col text-[0.9rem] -mr-32'>
                                <div className='text-amber-100'>be the change</div>
                                <div className='ml-10 text-gray-900'>you wish to see</div>
                            </div>

                            <div className='mt-12 ml-48 text-gray-900 text-2xl'>
                                <Typingeffect></Typingeffect>
                            </div>

                            <div className=' flex -ml-10 -mt-11'>
                                <div className='flex justify-center item-center   -mt-16'>
                                <div className='relative'>
                                    <Image
                                        src="/me.png"
                                        width={400}
                                        height={400}
                                        alt="Picture of the author"
                                        />
                                    </div>
                                    <div className='mt-44 absolute'>

                                    <div className='ml-64 text-gray-900 text-center w-48'>
                                        connect<br></br> with me
                                        <div className='text-[0.8rem]'>
                                        connect with me in other social media platform
feel free to ask any query related my fields 
                                        </div>
                                        <div className='flex justify-center item-center gap-6'>
                                        <div className=' h-[30px] w-[30px] bg-gray-900 text-center flex justify-center items-center cursor-pointer mt-2'></div>
                                        <div className=' h-[30px] w-[30px] bg-gray-900 text-center flex justify-center items-center cursor-pointer mt-2'></div>
                                        <div className=' h-[30px] w-[30px] bg-gray-900 text-center flex justify-center items-center cursor-pointer mt-2'></div>
                                        <div className=' h-[30px] w-[30px] bg-gray-900 text-center flex justify-center items-center cursor-pointer mt-2'></div>

                                        </div>
                                    </div>
                                </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        </div>


                    </div>
                </div>

                    <div className='text-[7rem] lg:block hidden -mt-[30rem] relative'>
                    <Name></Name>
                    </div>
                <div className='flex relative justify-center item-center '>
                    <div className='text-gray-900 text-4xl hidden lg:block'>
                        <Typingeffect></Typingeffect>
                    </div>
                </div>

               

                <div className='flex justify-center items-center '>
                    <div className='relative -mb-16 hidden lg:block'>
                    <Image
                        src="/me.png"
                        width={400}
                        height={400}
                        alt="Picture of the author"
                        />
                    </div>
                    
                </div>
          
            </div>
        </div>
        <div className='flex justify-center items-center'>

                {/* left side background */}

                
            <div className='bg-gray-900 h-[100vh] w-[50vw] flex flex-col gap-[30rem]'>
                <div className='relative text-amber-100 ml-8'>
                connect-card
                </div>

                <div className='lg:block hidden'>
                <div className='flex flex-col ml-8'>
                    <div className='text-amber-100 lg:block hidden'>
                        what i do
                    </div>
                    <div className='w-96 text-[0.7rem] mt-2 text-amber-100 lg:block hidden'>
                    I thrive on creativity and logic, blending my passion for coding, design, and writing with a critical mind. Innovation fuels my journey through web, app, and AI development
                    </div>

                    <div className='flex gap-3 text-[0.7rem] mt-2 text-amber-100'>
                        <div className='mt-2 lg:block hidden'>checkout my portfolio</div>
                    <div className='border-[3px] border-amber-100 h-[30px] w-[90px] text-center flex justify-center items-center cursor-pointer'> portfolio</div>
                    </div>
                </div>
                </div>
                
            </div> 

                {/* right side background */}
            <div className='bg-amber-100 h-[100vh] w-[50vw] flex justify-center items-center'>

            <div className='lg:hidden block'>
            <div className='flex flex-col relative -mt-[20.3rem] text-center'>
                <div className='text-gray-900'>
                    what i do
                </div>
                <div className='text-gray-900 text-[0.7rem] mt-4'>
                I thrive on creativity and logic, blending my passion for coding, design, and writing with a critical mind. Innovation fuels my journey through web, app, and AI development
                </div>
               <div className='flex justify-center items-center'>
               <div className='border-[3px] bg-slate-900 border-amber-100 h-[30px] w-[100px] text-center flex justify-center items-center cursor-pointer text-amber-100'> portfolio</div>

               </div>
                
            </div>
            </div>
            

                <div className='lg:block hidden'>
                <div className='flex flex-col ml-[20rem] mt-[27rem] text-end'>
                        
                        <div className='text-gray-900'>
                            connect with me 
                        </div>
                        <div className='w-96 text-[0.7rem] mt-2 text-gray-900'>
                            connect with me in other social media platform
                            feel free to ask any query related my fields 
                        </div>

                        <div className=' hidden lg:block'>
                            <div className='flex gap-3 text-[0.7rem] mt-2 text-gray-900'>
                            <div className=' h-[30px] w-[30px] bg-gray-900 text-center flex justify-center items-center cursor-pointer mt-2'></div>
                            <div className=' h-[30px] w-[30px] bg-gray-900 text-center flex justify-center items-center cursor-pointer mt-2'></div>
                            <div className=' h-[30px] w-[30px] bg-gray-900 text-center flex justify-center items-center cursor-pointer mt-2'></div>
                            <div className=' h-[30px] w-[30px] bg-gray-900 text-center flex justify-center items-center cursor-pointer mt-2'></div>
                        </div>
                            
                    
                </div>
            </div>
                </div>
                    
            </div>
        </div>
      
    </div>
  )
}

export default Home
