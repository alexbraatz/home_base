import Link from 'next/link'
import Script from 'next/experimental-script'

export const Contact = () => {

  return (
    <section className="pt-24 w-full h-screen bg-gradient-to-r from-pink-600 to-purple-500">
      
      <>
        <Script src="https://kit.fontawesome.com/d15b84a4d3.js" crossorigin="anonymous"></Script>
      </>

      <h2 className="pl-7 font-sans font-extrabold text-4xl md:text-7xl ubpixel-antialiased text-black">
        contact
      </h2>

      <div className="fa-6x">
        <a href="https://www.linkedin.com/in/alexjbraatz/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-solid fa-linkedin fa-beat"></i>
        </a>

        <a href="https://github.com/alexbraatz" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github fa-flip"></i>
        </a>
      </div>

    </section>
  )
}