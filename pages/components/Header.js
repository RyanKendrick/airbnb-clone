import Image from "next/image";

function Header() {
    return (
        <header>
            <h1>I AM THE HEADERS</h1>

            {/* Left Div */}
            <div>
                <Image 
                    src="https://links.papareact.com/qd3"
                    layout="fill"
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
