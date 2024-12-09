import Image from "next/image";

const shoes = [
  {
    name: "Nike Air Max Pulse",
    price: "₹13,995",
    category: "Women's Shoes",
    image: "/Image1.png", // Update with your image URL
  },
  {
    name: "Nike Air Max Pulse",
    price: "₹13,995",
    category: "Men's Shoes",
    image: "/Image2.png", // Update with your image URL
  },
  {
    name: "Nike Air Max 97 SE",
    price: "₹16,995",
    category: "Men's Shoes",
    image: "/Image3.png", // Update with your image URL
  },
];

export default function AirMaxGallery() {
  return (
    <>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Best of Air Max</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shoes.map((shoe, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src={shoe.image}
              alt={shoe.name}
              className="w-full object-cover rounded-md"
            />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{shoe.name}</h3>
              <p className="text-gray-500">{shoe.category}</p>
              <p className="text-gray-800 font-bold mt-2">{shoe.price}</p>
            </div>
          </div>

          
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-8">
  <h2 className="text-2xl font-bold mb-6">Featured</h2>
  </div>
            
{/* runing image */}
<div className="relative h-screen flex items-center justify-center bg-gray-100">
<div className="absolute inset-0 overflow-hidden">
  {/* Background Image */}
  
  <div className="flex justify-center items-center h-screen">
  <img
    src="/Image5.png" // Replace this with the path to your image
    alt="Running"
    className=" w-full "
  />
  </div>
</div>

<div className="relative text-center p-6">
  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
    STEP INTO WHAT FEELS GOOD
  </h1>
  <p className="text-lg md:text-xl text-white mb-6">
    Cause everyone should know the feeling of running in that perfect pair.
  </p>
  <button className="bg-black text-white py-3 px-6 rounded-md text-lg hover:bg-gray-800 transition">
    Find Your Shoe
  </button>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 py-8">
  <h2 className="text-2xl font-bold mb-6">Dont Miss</h2>
  </div>

  <div className="relative h-screen flex items-center justify-center bg-gray-100">
<div className="absolute inset-0 overflow-hidden">

  
  <div className="flex justify-center items-center h-screen">
  <img
    src="/Image6.png" 
    alt="Running"
    className=" w-full h-full "
  />
  </div>
  </div>
  </div>

                    <div className="w-full h-[229px] pt-7 text-center items-center">
                        <h6 className="text-lg font-bold">FLIGHT ESSENTIALS</h6>
                        <p className="text-sm pt-2 ">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
                        <button className="bg-black rounded-2xl text-white mt-4 text-sm px-2 py-2 ">Shop</button> 
                    </div>

                    <div className="max-w-7xl mx-auto px-4 py-4">
  <h2 className="text-2xl font-bold mb-6">The Essentials</h2>
  </div>

  <div className="bg-white py-8">
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div>
    <Image src="/Image88.png" alt="image 88" className="h-full w-full object-cover" height={200} width={200}
     /> 

  </div>
  <div>
  <Image src="/Image89.png" alt="image 88" className="h-full w-full object-cover" height={200} width={200}
    />
  </div>
  <div>
  <Image src="/Imsge90.png" alt="image 88" className="h-full w-full object-cover" height={200} width={200}
    />
  </div>
  </div>
  </div>

  <div className=" flex justify-around px-28 w-full h-[229px] pt-7 text-center items-center">
  <ul>
  <h6 className="text-lg font-bold py-2">icon</h6>  
    <li className="hover:underline">Air Force 1</li>
    <li className="hover:underline">Hurache</li>
    <li className="hover:underline">Air Max 90</li>
    <li className="hover:underline">Air Max 95</li>
  </ul>
  <ul>
  <h6 className="text-lg font-bold py-2">shoes</h6>
  <li className="hover:underline">All Shoes</li>
  <li className="hover:underline">Coustme Shoes</li>
  <li className="hover:underline">Jordan Shoes</li>
  <li className="hover:underline">Running Shoes</li>
  </ul>
  <ul>
  <h6 className="text-lg font-bold py-2">clothing</h6>
  <li className="hover:underline">All Clothing</li>
  <li className="hover:underline">Modest Wear</li>
  <li className="hover:underline">Hoodie and PullOvers</li>
  <li className="hover:underline">Shirts & Tops</li>
  </ul>
  <ul>
  <h6 className="text-lg font-bold py-2">kids</h6>
  <li className="hover:underline">Infant and Toodler Shoes</li>
  <li className="hover:underline">Kids Shoes</li>
  <li className="hover:underline">Kids Jordan Shoes</li>
  <li className="hover:underline">Kids Basketball Shoes</li>
  </ul>
  </div>
    </>

  )};