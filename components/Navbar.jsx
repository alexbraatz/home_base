import Link from 'next/link';
import Logo from '../public/images/myLogo.svg'

export const Navbar = () => {
	return (
		<>
			<nav className='flex items center flex-wrap bg-green-300 p-3 '>
				<Link href='/'>
					<a className='inline-flex items-center p-2 mr-4 '>
						<span className='text-xl text-white font-bold uppercase tracking-wide'>
							Alexx Braatz
								<svg
									viewBox='0 0 200 200'
									xmlns='http://www.w3.org/2000/svg'
									className='h-22 w-22 mr-0'
								>
									<Logo />
								</svg>
								
						</span>
					</a>
				</Link>

			</nav>	
		</>
	)
}