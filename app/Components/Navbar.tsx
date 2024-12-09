import Image from "next/image";
import Link from "next/link";

const Navbar= ()=>{
    return(
      
        <>
        <header className=" w-full h-9 flex justify-between items-center px-6 py-4 border-b shadow-sm bg-gray-200">
      {/* Logo */}
      <div className="text-xl font-bold h-6 w-6"><Image src="/Vector.png" alt="logo" height={50} width={50}/></div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <Link href="/allproduct" className="hover:underline">
              Find a Store |
            </Link>
          </li>
          <li> 
            <Link href="/help" className="hover:underline">
              Help |
            </Link>
          </li>
          <li>
            <Link href="/join-us" className="hover:underline">
              Join Us |
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:underline">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
{/* //  second header */}
            

<header className="flex justify-between items-center px-6 py-4 border-b bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/Vector1.png" // Replace with your logo image path
          alt="Logo"
          className="w-14 h-5"
        />
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-4 text-sm font-medium">
          <li>
            <Link href="/allproduct" className="hover:underline">
              New & Featured
            </Link>
          </li>
          <li>
            <Link href="/men" className="hover:underline">
              Men
            </Link>
          </li>
          <li>
            <Link href="/women" className="hover:underline">
              Women
            </Link>
          </li>
          <li>
            <Link href="/kids" className="hover:underline">
              Kids
            </Link>
          </li>
          <li>
            <Link href="/sale" className="hover:underline">
              Sale
            </Link>
          </li>
          <li>
            <Link href="/snkrs" className="hover:underline">
              SNKRS
            </Link>
          </li>
        </ul>
      </nav>

      {/* Search and Icons */}
      <div className="flex items-center">
        {/* Search Bar */}
        <div className="flex items-center border rounded-full px-4 py-1 text-sm bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m2.85-7.65a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="ml-2 bg-transparent outline-none text-sm"
          />
        </div>

        {/* Icons */}
        <button className="hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
            />
          </svg>
        </button>
        <button className="hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h18l-1.5 13H4.5L3 3z"
            />
          </svg>
        </button>
      </div>
    </header>
    </>
    );
}
export default Navbar;