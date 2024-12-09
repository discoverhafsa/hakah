import Image from 'next/image';
import Link from 'next/link';

const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div>
        <Image
          src="/shoe1.png" 
          alt="Product Image"
          layout="responsive"
          width={100}
          height={100}
          objectFit="cover"
          className='w-28 h-28 rounded border'
        />
      </div>
      <div className="p-4 text-centre items-center">
        <h3 className="text-lg font-semibold">Nike Air Force 1 PLT.AF.ORM</h3>
        <p className="text-gray-600 mt-2">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its Inside Out inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
        </p>
        <div className="flex items-center mt-4">
          <span className="text-2xl font-semibold">৳ 8,695.00</span>
          <Link href="/cart" className="text-center items-center ml-4 text-white bg-black hover:bg-gray-800 px-4 py-2 rounded-md">
              Add To Cart
        
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;