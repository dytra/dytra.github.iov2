// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div>
      <div className="spacer h-10"></div>
      <div className="hero flex">
        <div className="left flex-1">
          <h1 className="text-5xl">Hi there! 👋</h1>
          <div className="mt-3">
            <div>
              <p className="text-gray-400">I am a Frontend Web Developer with a passion for creating visually stunning, responsive websites. My expertise includes HTML, CSS, JavaScript, and React. I strive to improve my skills and deliver high-quality, user-friendly websites that meet client and user needs.</p>
            </div>
            <div>
              <a href="#" className="bg-black text-white py-5">Connect With Me</a>
            </div>
          </div>
        </div>
        <div className="right flex-1">
          <span>test</span>
        </div>

      </div>
    </div>
  )
}
