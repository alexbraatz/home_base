import Link from 'next/link';
import Logo from '../public/images/myLogo.svg'
import { useState } from 'react'

export const Navbar = () => {

	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	return (
		<>
			{/* Creates the logo w/name */}

			<nav className='flex items-center flex-wrap bg-red-400 p-3 '>
				<Link href='/'>
					<a className='inline-flex items-center p-2 mr-4 '>
			
								<svg
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
									className='h-12 w-12 mr-0'
								>
									<Logo />
								</svg>
								<span className='text-xl text-white font-bold lowercase tracking-wide'>
									Alexx Braatz
								</span>
							
					</a>
				</Link>
				
				{/* Creates hamburger menu */}

				<button 
					className='inline-flex p-3 hover:bg-red-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
					onClick={handleClick}
				>
				<svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={3}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>

				{/* Creates inline menu options to display */}

        <div className={`${ active ? '' : 'hidden'} hidden w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
					{/* Use ternary operator in div to decide to or not to display content of the div*/}

          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                whois
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                work
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                about
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                contact me
              </a>
            </Link>
          </div>
        </div>
			</nav>	
		</>
	)
}