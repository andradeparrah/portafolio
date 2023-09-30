
import Link from 'next/link'
import { AnimatedText } from '@/components/AnimatedText'
import { AnimatedImg } from '@/components/AnimatedImg'




export default function Home() {
  return (
    <>
      <div className='w-full h-full px-32 '>
        <main className='flex items-center justify-between w-full '>
          
          <AnimatedImg src='https://cdn.leonardo.ai/users/9a01fe03-e38d-4147-9504-334e27fe8920/generations/cd0c3a2a-dd03-4a69-84b3-1cc20907273d/DreamShaper_v7_Design_an_animestyle_male_character_with_glasse_3.jpg'/>
          <div className='w-1/2'>
              <AnimatedText text={'Turning Vision Into Reality With Code And Design.'}/>
              
              <p className='my-4 font-medium text-base '>
                  
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.

              </p>
              <Link href='/assets/docs/CV.pdf' className='flex items-center justify-center bg-indigo-600 text-slate-100 p-2 rounded-lg text-lg font-bold hover:bg-indigo-400 font-bold ' target={'_blank'} download={true}>
                Curriculum
              </Link>
          </div>
        </main>

      </div>
    </>
  )
}