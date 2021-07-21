import Image from 'next/image'
import { url } from 'vfile-message'
// import imageOne from '../public/images/cool.png'

export const Work = () => {

  return (
    <>
    
    <style jsx>{`
    
    .image1 {
      content: url("https://randomwordgenerator.com/img/picture-generator/52e4d7434f51a914f1dc8460962e33791c3ad6e04e5074417d2c7ed09f4acc_640.jpg")
    }
  
    .image2 {
      content: url("https://randomwordgenerator.com/img/picture-generator/55e8d146425bb10ff3d8992cc12c30771037dbf852547848702a7fd19545_640.jpg")
    }
  
    .image3 {
      content: url("https://randomwordgenerator.com/img/picture-generator/55e8d24b4257ac14f1dc8460962e33791c3ad6e04e507440752972d3924cc6_640.jpg")
    }
  
    .image4 {
      content: url("https://randomwordgenerator.com/img/picture-generator/55e0d44b4b56a414f1dc8460962e33791c3ad6e04e5074417c2d78d2954bcd_640.jpg")
    }
  
    .image5 {
      content: url("https://randomwordgenerator.com/img/picture-generator/5ee3dc414954b10ff3d8992cc12c30771037dbf85254794e732f7ad7934e_640.jpg")
    }
    `}</style>
  
    <section className="pt-24 w-full h-screen bg-gradient-to-r from-pink-600 to-purple-500">
      <h2 className="pl-7 font-sans font-extrabold text-4xl md:text-7xl ubpixel-antialiased text-black">
        projects i've worked on
      </h2>

      <section className="grid grid-flow-row auto-rows-max flex flex-wrap items-center justify-center py-10">
        <section className="bg-white w-1/2 space-y-3 px-6 py-4 rounded-3xl shadow-lg border flex flex-col">
          <div className="shadow-2xl relative">
            <div className="mySlides ">
              <div className="image1"></div>
            </div>

          </div>
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
    </>
  )

}

  