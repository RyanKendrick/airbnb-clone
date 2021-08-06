import Image from "next/image";
import { 
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,
    MenuIcon,    
} from '@heroicons/react/solid';

function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            {/* <h1>I AM THE HEADERS</h1> */}
 
            {/* Left Div */}
            <div className='relative h-10 cursor-pointer my-auto'>
                <Image 
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* Middle Div */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400' type="text" placeholder="Start your search" />
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
            </div>

            {/* Right Div */}
            <div className='flex items-center space-x-4 justify-end text-gray-500'>
                <p>Become a Host</p>
                <GlobeAltIcon className='h-6 cursor-pointer'/>

                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                    <MenuIcon className='h-6 cursor-pointer' />
                    <UserCircleIcon className='h-6 cursor-pointer' />
                </div>
                {/* <UsersIcon className='h-6 cursor-pointer' /> */}
            </div>
        </header>
    )
}

export default Header
