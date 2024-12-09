import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Nike Air Max 1",
      price: "PKR 17,000",
      image: "/Rectangle.png",
    },
    {
      id: 2,
      name: "Nike Court Vision Low Next Nature",
      price: "PKR 13,000",
      image: "/Rectangle1.png",
    },
    {
        id: 3,
        name: "Nike Air Force 1 PLT.AF.ORM",
        price: "PKR 18,000",
        image: "/shoe1.png",
      },
      {
        id: 4,
        name: "Nike Air Force 1 React",
        price: "PKR 20,000",
        image: "/Rectangle2.png",
      },
      {
        id: 5,
        name: "Air Jordan 1 Elevate Low",
        price: "PKR 14,000",
        image: "/Rectangle3.png",
      },
      {
        id: 6,
        name: "Nike Court Vision Low ",
        price: "PKR 13,000",
        image: "/Rectangle4.png",
      },
  
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white p-4 shadow-md">
        <h1 className="text-center text-xl font-bold">Product Listing</h1>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-md"
              />
              <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-500">{product.price}</p>
             <button className="mt-4 w-full bg-blue-500 text-white py-2 items-center rounded-lg hover:bg-blue-600">
             <Link href="./productdetails" >
                Add to Cart </Link>
              </button> 
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}