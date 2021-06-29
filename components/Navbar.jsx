import Link from 'next/link';

export const Navbar = () => {
	return (
		<>
			<nav className='flex items center flex-wrap bg-green-300 p-3 '>
				<Link href='/'>
					<a className='inline-flex items-center p-2 mr-4 '>
							
					</a>
				</Link>

			</nav>	
		</>
	)
}