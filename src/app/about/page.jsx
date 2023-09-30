import { Cards } from '@/components/Cards'
import React from 'react'


const page = () => {
  return (
    <section className=''>
    <h1 className="w-full h-full px-32 py-8 text-4xl font-bold text-center">About Me</h1>

    <p className="py-8 px-10 text-center" >Hello, Im Horacio Andrade, a 29-year-old web developer with a unique blend of skills and experience. I hold a degree in Industrial Engineering and have a background in operations, which has provided me with a strong foundation in problem-solving and process optimization.</p>

    <p className='py-8 px-10 text-center'>Over the years, Ive seamlessly merged my engineering mindset with my passion for web development, creating a dynamic skill set that allows me to approach coding challenges with a fresh perspective. My journey in the world of web development has led me to specialize in a wide range of technologies, including HTML, CSS, Tailwind CSS, Bootstrap, Node.js, Next.js, and React.</p>

    <h2 className='w-full h-full px-32 py-8 text-4xl font-bold text-center'>Skills</h2> 
        <div className='py-8 px-20 grid grid-cols-4'>
          <Cards
            img="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png" alt="HTML"
          />

          <Cards
            img="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202020css3htmllogosocialsocialmedia-115668_115633.png" alt="CSS"
          />

          <Cards
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" atl="javascript"
          />
          <Cards
            img="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png" atl="bootstrap" 
          />
          <Cards
            img="https://velog.velcdn.com/images/diso592/post/8c07ebac-2637-48b8-ae55-41915e2e30bf/image.png" atl="tailwind"
          />
          <Cards
            img="https://cdn.icon-icons.com/icons2/691/PNG/512/google_firebase_icon-icons.com_61475.png" alt="firebase"
          />  
          <Cards
            img="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png" alt="mongodb"
          />   
            <Cards
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react"
           />   
          <Cards
            img="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png" alt="nextjs"
          />        
          <Cards
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="nodejs"
          />        
          <Cards
            img="https://images.ctfassets.net/piwi0eufbb2g/4Z0rRL8R7hcHJhmSNoePV3/005e4dd6d10c7ffb1156662c171ea65e/express_img.jpg?w=1200&h=630" alt="expressjs"
          />   
      </div>
        <ul className='py-8 px-10 list-disc'>
          <li className='py-2'>Full-Stack Proficiency: I am well-versed in both front-end and back-end development, enabling me to create cohesive and efficient web solutions.</li>
          <li className='py-2'>Responsive Design: Crafting visually appealing and user-friendly websites using HTML, CSS, and Bootstrap is my forte. I understand the importance of a responsive design for an optimal user experience across all devices.</li>
          <li className='py-2'>Modern JavaScript: I leverage the power of React and Next.js to build interactive and dynamic web applications that are not only visually engaging but also highly functional.</li>
          <li className='py-2'>Efficient Back-End: With Node.js, I develop robust server-side applications, ensuring that your web projects are as performant as they are beautiful.</li>
          <li className='py-2'>Problem Solver: My background in industrial engineering equips me with analytical thinking and problem-solving skills, allowing me to identify and address challenges efficiently.</li>
        </ul>

          
          <h3 className='w-full h-full px-32 py-12 text-4xl font-bold text-center'>Badges</h3>   

          <div className='w-full h-full px-96 flex gap-8'>
          <Cards
            img="https://images.credly.com/size/340x340/images/791d0469-ca15-4bc9-b9b3-2b8dca821b62/image.png" alt="badge"
          />  
          <Cards
            img="https://images.credly.com/size/340x340/images/71ed1274-3d7c-40f4-9194-e464643719e3/image.png" alt="badge2"
          />  
          <Cards
            img="https://images.credly.com/size/340x340/images/50a7358c-80d1-4a5d-a1d7-a9e0997de2be/image.png" alt="badge3"
          />  
          <Cards
            img="https://images.credly.com/size/340x340/images/5a6985ec-c5f8-4c59-8668-8278971a368e/image.png" alt="badge4"
          />  

          </div> 
          
                
    </section>
  )
}

export default page