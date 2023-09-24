import Link from 'next/link'
import { AnimatedText } from '@/components/AnimatedText'
import { AnimatedImg } from '@/components/AnimatedImg'


export default function Home() {
  return (
    <>
      <div className='w-full h-full p-32'>
        <main className='flex items-center justify-between w-full'>
          <AnimatedImg src={"https://cdn.leonardo.ai/users/9a01fe03-e38d-4147-9504-334e27fe8920/generations/cd0c3a2a-dd03-4a69-84b3-1cc20907273d/DreamShaper_v7_Design_an_animestyle_male_character_with_glasse_3.jpg"} />
          <div className='w-1/2'>
            <AnimatedText text={'Crafting Digital Experiences: My Journey as a Web Developer'}/>
            <p className='my-4 font-medium text-base'>Welcome to my digital playground, where I transform ideas into captivating online realities. As a web developer, I thrive on the limitless possibilities of the digital world. With every line of code, I sculpt elegant user experiences that leave a lasting impression. Join me on this journey through the ever-evolving landscape of web development, where innovation meets artistry, and dreams become pixels. Let's build the future together, one website at a time.</p>
            <Link href='/assets/docs/CV.pdf' className='flex items-center justify-center bg-slate-950 text-slate-100 p-2 rounded-lg text-lg hover:bg-slate-100 hover:text-slate-900' target={'_blank'} download='true'>Curriculum</Link>
          </div>
        </main>

      </div>
    </>
  )
}
