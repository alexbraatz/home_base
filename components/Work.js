import Link from 'next/link'

export const Work = () => {

  return (
    <section className="pt-24 w-full h-screen bg-gradient-to-r from-pink-600 to-purple-500">
      <h2 className="pl-7 font-sans font-extrabold text-4xl md:text-7xl ubpixel-antialiased text-black">
        projects i've worked on
      </h2>

      <section className="flex flex-nowrap items-center justify-center py-10">
        <section className="bg-white w-1/2 space-y-3 px-6 py-4 rounded-3xl shadow-lg border flex flex-col">
          <img src="https://tailwindui.com/img/components/home-screens.02-card-layout-with-sidebar-xl.png"
            className="w-full h-32 object-cover rounded-xl hover:filter hover:brightnexx-75 transition"/>
          
          <div className="flex font-sans justify-between items-center">
            <h3 className="font-semibold">Pocket Guru</h3>
          </div>
          <ul className="flex space-x-2">
            <li className="bg-blue-400 text-white text-md px-4 rounded-3xl">JavaScript</li>
            <li className="bg-green-400 text-white text-md px-4 rounded-3xl">React</li>
          </ul>
          <div className="text-gray-600 font-light">Words about Pocket Guru</div>
          <a href="https://pocket-guru.herokuapp.com/#/home" target="_blank" rel="noopener noreferrer">
          <button className="bg-gray-800 text-white py-1 rounded-2xl">Visit</button>
          </a>
        </section>

        <section className="bg-white w-1/2 space-y-3 px-6 py-4 rounded-3xl shadow-lg border flex flex-col">
          <img src="https://tailwindui.com/img/components/home-screens.02-card-layout-with-sidebar-xl.png"
            className="w-full h-32 object-cover rounded-xl hover:filter hover:brightnexx-75 transition"/>
          
          <div className="flex font-sans justify-between items-center">
            <h3 className="font-semibold">NeuroType</h3>
          </div>
          <ul className="flex space-x-2">
            <li className="bg-blue-400 text-white text-md px-4 rounded-3xl">JavaScript</li>
            <li className="bg-green-400 text-white text-md px-4 rounded-3xl">React</li>
          </ul>
          <div className="text-gray-600 font-light">Words about NeuroType</div>
          <a href="https://neurotype.herokuapp.com/#/home" target="_blank" rel="noopener noreferrer">
          <button className="bg-gray-800 text-white py-1 rounded-2xl">Visit</button>
          </a>
        </section>
      </section>

    </section>
  )

}

// <!-- component -->
{/* <main class="flex items-center justify-center py-10">
  <section class="bg-white w-1/2 space-y-3 px-6 py-4 rounded-3xl shadow-lg border flex flex-col">
    <img src="https://tailwindui.com/img/components/home-screens.02-card-layout-with-sidebar-xl.png" class="w-full h-32 object-cover rounded-xl hover:filter hover:brightness-75 transition" />
    <div class="flex justify-between items-center">
      <h3 class="font-semibold">Presentation for MARS company</h3>
      <div class="font-extrabold">...</div>
    </div>
    <ul class="flex space-x-2">
      <li class="bg-blue-400 text-white text-md px-4 rounded-3xl">iOS App</li>
      <li class="bg-green-400 text-white text-md px-4 rounded-3xl">Android</li>
    </ul>
    <div class="text-gray-600 font-light">Request content for presentation from the Product Manager. Get it done by Wednesday so that it can be presented in the meetings with VC capitalists.</div>
    <button class="bg-gray-800 text-white py-1 rounded-2xl">MARK DONE</button>
  </section>
</main> */}

  