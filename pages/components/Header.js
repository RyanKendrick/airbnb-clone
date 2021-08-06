import Image from "next/image";

function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3ß bg-white shadow-md py-5 px-5'>
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
            <div></div>

            {/* Right Div */}
            <div></div>
        </header>
    )
}

export default Header
