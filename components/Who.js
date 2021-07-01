
export const Who = () => {

  return (
    <section className="w-full h-screen bg-gradient-to-r from-pink-600 to-purple-500">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-2">
          <h2 className="pl-7 font-sans font-extrabold text-4xl md:text-7xl ubpixel-antialiased text-black">me, myself, and i</h2>
        </div>
        <div className="col-span-2 ..."><p>Also a really cool human</p></div>
        <div className="row-span-2 col-span-2 ..."><p>Hello, I like coding 'n stuff</p></div>
      </div>
      {/* <span className="pl-7 font-sans font-extrabold text-6xl md:text-9xl ubpixel-antialiased text-black">
        me,<br></br>
        myself,<br></br>
        and i
      </span> */}
    </section>
  )
}