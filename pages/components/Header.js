import Image from "next/image";

function Header() {
    return (
        <header>
            <h1>I AM THE HEADERS</h1>

            {/* Left Div */}
            <div className='relative flex items-center h-10'>
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
