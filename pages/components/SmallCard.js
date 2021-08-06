import Image from "next/dist/client/image";

function SmallCard({img, location, distance}) {
    return (
        <div>

            {/* Left side */}
            <div className='relative h-16 w-16'>
                <Image className='rounded-lg'
                    src={img}
                    layout='fill'
                    />
            </div>
            
        </div>
    )
}

export default SmallCard
