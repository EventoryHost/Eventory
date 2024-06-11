import Link from "next/link";
import Image from "next/image";

const Nav: React.FC = () => {
    return (
        <nav className="flex justify-between items-center w-full shadow-lg px-4">
            <div className="flex items-center gap-5">
                <Link href="/" className="flex items-center gap-1">
                    <Image
                        src="/Frame 30.svg"
                        alt="promptshare logo"
                        width={60}
                        height={60}
                        className="object-contain"
                    />
                </Link>
                <Link href="/about" className="text-sm ">About</Link>
                <Link href="/venues" className="text-sm ">Venues</Link>
                <Link href="/vendors" className="text-sm ">Vendors</Link>
                <Link href="/events" className="text-sm ">Events</Link>
                <Link href="/special-services" className="text-sm ">Special Services</Link>
                <Link href="/business" className="text-sm ">Business</Link>
            </div>
            <div className="flex justify-center items-center mr-4">
                <form className="relative flex-grow mx-auto">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-[27rem] p-2 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search for vendors, occasions or location" required />
                    </div>
                </form>
                <div className="flex flex-1 justify-between items-center">
                    <div className="border-gray-500 p-2 flex gap-6 w-full">
                        <div className="flex flex-col items-center ml-9">
                            <Link href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                </svg>
                                <p className="text-xs ">cart</p>
                            </Link>
                        </div>
                        <div className="flex flex-col items-center">
                            <Link href="/" className="flex flex-col items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                                <p className="text-xs ">profile</p>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
