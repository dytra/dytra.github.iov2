import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const menus = [
    {
      label: "HOME"
    },
    {
      label: "ABOUT",
    },
    {
      label: "MY WORK"
    },
    {
      label: "CONTACT",
      classes: "bg-black px-4 py-3 text-white rounded-md"
    }
  ];
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <main className="container md:max-w-5xl mx-auto">
          <nav className="flex pt-3 items-center">
            <div className="logo">
              <span className='font-semibold'>dytrafolio</span>
            </div>
            <div className="menu-container ml-auto">
              <ul className="flex gap-5">
                {menus.map(menu => {
                  return (
                    <li className="menu-item font-medium"><a href="" className={menu.classes}>{menu.label}</a></li>
                  )
                })}
              </ul>
            </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
