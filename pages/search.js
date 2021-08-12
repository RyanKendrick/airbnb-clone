import Header from "./components/Header";
import Footer from "./components/Footer";


function Search() {
    return (
        <div>
            <Header />

            <main className='flex'>
                <section>
                    <p className='text-xs'>300+ Stays for 5 Guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in ????</h1>
                    <div className='hidden lg:inline-flex'>
                        <p className='px-4 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out shadow-lg'>Cancellation Flexibility</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Search
