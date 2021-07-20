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
      
      <p><i class="fas fa-thumbs-up fa-5x"></i></p>
        <i class="fa-solid fa-check"></i>
        <i class="fa-github-square fa-brands"></i>
      

    </section>
  )
}