import Link from 'next/link';
import Logo from '../public/images/myLogo.svg'

export const Navbar = () => {
	return (
		<>
			<nav className='flex items center flex-wrap bg-red-400 p-3 '>
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

				<button className='inline-flex p-3 hover:bg-green-600 rounded text-white ml-auto hover:text-white outline-none'>
					<svg
						className='w-10 h-10'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>

				<div className='hidden w-full lg:inline-flix lg:flex-grow lg:w-auot'>
					
				</div>
			</nav>	
		</>
	)
}