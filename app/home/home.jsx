
import React from 'react'
import Name from '../name/name'
import Typingeffect from '../typingeffect/typingeffect'
import Image from 'next/image'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
const Home = () => {
  return (
    <div className='flex justify-center item-center h-[100vh]'>
        
       

        {/* the center things */}

           
        <div className='flex justify-center items-center absolute h-[100vh]'>
            <div className='flex flex-col justify-center item-center'>


                <div className='flex justify-center items-center'>
                    <div className='lg:h-[30rem] lg:w-[30rem] h-[24rem] w-[24rem] bg-orange-600 rounded-full'>



                        <div className='lg:hidden block'>
                        <div className='relative flex flex-col justify-center items-center mt-32'>
                            <div className='text-4xl -rotate-90 -ml-64 text-gray-900 '>SABYA<span className='text-amber-100'>SACHI</span></div>

                            <div className='flex flex-col text-[0.9rem] -mr-32'>
                                <div className='text-amber-100'>be the change</div>
                                <div className='ml-10 text-gray-900'>you wish to see</div>
                            </div>

                            <div className='mt-12 ml-48 text-gray-900 text-2xl'>
                                <Typingeffect></Typingeffect>
                            </div>

                            <div className=' flex -ml-36 -mt-11'>
                                <div className='flex justify-center item-center   -mt-[15%]'>
                                    <div className='relative'>
                                        <Image
                                            src="/me.png"
                                            width={400}
                                            height={400}
                                            alt="Picture of the author"
                                            />
                                    </div>
                                    
                                    <div className='mt-44 absolute'>

                                    <div className='ml-80 text-gray-900 text-center w-48 '>
                                        connect<br></br> with me
                                        <div className='text-[0.8rem]'>
                                        connect with me in other social media platform
                                        feel free to ask any query related my fields 
                                        </div>
                                        <div className='flex justify-center item-center gap-3 ml-3'>
                                        <a href="https://github.com/roshanpanda666"><div className=' h-[30px] w-[30px] text-center flex justify-center items-center cursor-pointer mt-2 text-2xl hover:text-white'><FaGithub /></div></a>
                                       <a href="https://www.linkedin.com/in/sabyasachi-panda-351870256/"><div className=' h-[30px] w-[30px] text-center flex justify-center items-center cursor-pointer mt-2 text-2xl hover:text-blue-500'><FaLinkedin /></div></a>
                                       <a href="https://www.instagram.com/sabyasachi_panda_/"><div className=' h-[30px] w-[30px] text-center flex justify-center items-center cursor-pointer mt-2 hover:text-red-400 text-2xl'><FaInstagram /></div></a> 
                                       <a href="https://x.com/Roshan_panda007"><div className=' h-[30px] w-[30px] text-center flex justify-center items-center cursor-pointer mt-2 text-2xl hover:text-gray-400'><FaXTwitter /></div></a> 
                                       <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXDzFbHmGcXcjXTmtMfzDBjrjpDcvzDQGdfxTxHLlsKNLbxgWNJtMtgQMFDLSlBCWGmhL"><div className=' h-[30px] w-[30px] text-center flex justify-center items-center cursor-pointer mt-2 text-2xl hover:text-red-500'><SiGmail /></div></a>
                                       

                                        </div>
                                    </div>
                                </div>
                                
                                </div>
                                
                                
                            </div>
                            <div className='bg-orange-600 h-10 w-[100vw] text-[0.5rem] flex justify-center items-center text-center lg:block '>
                                    designed and developed by Sabyasachi
                                </div>
                            
                        </div>
                        </div>


                    </div>
                </div>

                    <div className='text-[7rem] lg:block hidden -mt-[30rem] relative text-center    '>
                    <Name></Name>
                    </div>


                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex relative justify-center item-center'>
                        <div className='text-gray-900 text-4xl hidden lg:block'>
                            <Typingeffect></Typingeffect>
                        </div>
                        </div>
                        <div className='flex gap-44 mt-14'>
                            <div className='text-amber-100 lg:block hidden'>be the change</div>
                            <div className='text-gray-900 lg:block hidden'>you wish to see</div>
                        </div>
                    </div>
                

               

                <div className='flex justify-center items-center flex-col text-center relative'>
                    <div className='relative bottom-0 hidden lg:block'>
                    <Image
                        src="/me.png"
                        width={400}
                        height={400}
                        alt="Picture of the author"
                        />
                        
                    </div>

                    <div className='bg-orange-500 h-10 w-[95vw] -mb-4  hidden lg:block '></div>
                    <div className='hidden lg:block text-[0.8rem]'>designed and developed by Sabyasachi</div>
                </div>
                <div>
                            
                </div>
                
          
            </div>
        </div>
        <div className='flex justify-center items-center'>

                {/* left side background */}

                
            <div className='bg-gray-900 h-[100vh] w-[50vw] flex flex-col '>
                <div className='relative text-amber-100 ml-8'>
                connect-card
                </div>

                <div className='lg:block hidden'>
                <div className='flex flex-col ml-8 mt-[30.3rem]'>
                    <div className='text-amber-100 lg:block hidden'>
                        what i do
                    </div>
                    <div className='w-96 text-[0.7rem] mt-2 text-amber-100 lg:block hidden'>
                    I thrive on creativity and logic, blending my passion for coding, design, and writing with a critical mind. Innovation fuels my journey through web, app, and AI development
                    </div>

                    <div className='flex gap-3 text-[0.7rem] mt-2 text-amber-100'>
                        <div className='mt-2 lg:block hidden'>checkout my portfolio</div>
                        
                        <div className='border-[3px] border-amber-100 h-[30px] w-[90px] text-center flex justify-center items-center cursor-pointer z-50'> <a href="https://portfolio-of-sabyasachipanda.vercel.app/">portfolio</a> </div>
                    
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
                <a href="https://portfolio-of-sabyasachipanda.vercel.app/"><div className='border-[3px] bg-slate-900 border-amber-100 h-[30px] w-[100px] text-center flex justify-center items-center cursor-pointer text-amber-100'> portfolio</div></a>
               

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
                            <div className='flex gap-3 text-[0.7rem] mt-2 text-gray-900 relative'>
                            <div className=' h-[30px] w-[30px] text-center flex justify-center items-center cursor-pointer mt-2 text-2xl hover:text-white'><FaGithub /></div>
                            <a href="https://github.com/roshanpanda666"><div className=' h-[30px] w-[30px] text-center flex justify-center items-center cursor-pointer mt-2 text-2xl hover:text-white'><FaGithub /></div></a>
                                       <a href="https://www.linkedin.com/in/sabyasachi-panda-351870256/"><div className=' h-[30px] w-[30px] text-center flex justify-center items-center cursor-pointer mt-2 text-2xl hover:text-blue-500'><FaLinkedin /></div></a>
                                       <a href="https://www.instagram.com/sabyasachi_panda_/"><div className=' h-[30px] w-[30px] text-center flex justify-center items-center cursor-pointer mt-2 hover:text-red-400 text-2xl'><FaInstagram /></div></a> 
                                       <a href="https://x.com/Roshan_panda007"><div className=' h-[30px] w-[30px] text-center flex justify-center items-center cursor-pointer mt-2 text-2xl hover:text-gray-400'><FaXTwitter /></div></a> 
                                       <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXDzFbHmGcXcjXTmtMfzDBjrjpDcvzDQGdfxTxHLlsKNLbxgWNJtMtgQMFDLSlBCWGmhL"><div className=' h-[30px] w-[30px] text-center flex justify-center items-center cursor-pointer mt-2 text-2xl hover:text-red-500'><SiGmail /></div></a>
                        
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
