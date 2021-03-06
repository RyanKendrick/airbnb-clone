import Header from "./components/Header";
import Footer from "./components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns/esm";


function Search() {
    const router = useRouter();
    // ES6 Destructuring to eliminate need for router.query + [name]
    const { location, startDate, endDate, numOfGuests } = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;


   

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />

            <main className='flex'>
                <section className='flex-grow pt-15 py-5'>
                    <p className='text-xs'>300+ Stays - {range} - for {numOfGuests} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Search;



