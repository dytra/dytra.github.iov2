// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div>
      <div className="spacer h-10"></div>
      <div className="hero flex flex-col md:flex-row">
        <div className="left md:w-1/2">
          <h1 className="text-5xl font-bold">Hi there! 👋</h1>
          <div className="mt-3">
            <div>
            <p className="text-gray-400 leading-7">I am a Frontend Web Developer with a passion for creating visually stunning, responsive websites. My expertise includes HTML, CSS, JavaScript, and React. I strive to improve my skills and deliver high-quality, user-friendly websites that meet client and user needs.</p>
            </div>
            <div className="mt-3 flex space-x-3">
              <a href="#" className="inline-block bg-black text-white rounded-md px-6 py-3">Work With Me</a>
              <a href="#" className="inline-block bg-white text-black border border-black rounded-md px-6 py-3">See My Work</a>
            </div>
          </div>
        </div>
        <div className="right md:w-1/2">
          <span>test</span>
        </div>

      </div>
    </div>
  )
}
