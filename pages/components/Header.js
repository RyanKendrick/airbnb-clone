import Image from "next/image";
import { SearchIcon } from '@heroicons/react/solid';

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
            <div>
                <input type="text" placeholder="Start your search" />
                <SearchIcon className='h-8 bg-red-400'/>
            </div>

            {/* Right Div */}
            <div></div>
        </header>
    )
}

export default Header
