import Link from 'next/link';
import Logo from '../public/images/myLogo.svg'

export const Navbar = () => {
	return (
		<>
			<nav className='flex items center flex-wrap bg-green-300 p-3 '>
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

			</nav>	
		</>
	)
}