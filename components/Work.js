import Link from 'next/link'

export const Work = () => {

  return (
    <section className="pt-24 w-full h-screen bg-gradient-to-r from-pink-600 to-purple-500">
      <h2 className="pl-7 font-sans font-extrabold text-4xl md:text-7xl ubpixel-antialiased text-black">
        projects i've worked on
      </h2>

      <Link href="https://pocket-guru.herokuapp.com/#/home">
        <button>Pocket Guru</button>
      </Link>

      <Link href="https://neurotype.herokuapp.com/#/home">
        <button>Neurotype</button>
      </Link>
    </section>
  )

}