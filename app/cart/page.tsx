
import Link from "next/link";

const Cart = () =>{
return(
    <>
<div className="container mx-auto px-4 py-8">
{/* ... Rest of the HTML code ... */}
</div>

<div className="container mx-auto px-4 py-8">
  <div className="flex flex-col md:flex-row">
    <div className="md:w-1/2">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Bag</h2>
        <div className="flex mb-4">
          <img src="/Image4.png" alt="Product Image" className="w-24 h-24 rounded-md" />
          <div className="ml-4">
            <p className="text-lg font-semibold">Nike Dri-FIT ADV TechKnit Ultra</p>
            <p className="text-gray-600">Mens Short-Sleeve Running Top</p>
            <p className="text-gray-600">Ashen Slate/Cobalt Bliss</p>
            <p className="text-gray-600">Size L</p>
            <p className="text-gray-600">Quantity 1</p>
          </div>
        </div>
        <div className="flex mb-4">
          <img src="/Image3.png" alt="Product Image" className="w-24 h-24 rounded-md" />
          <div className="ml-4">
            <p className="text-lg font-semibold">Nike Air Max 97 SE</p>
            <p className="text-gray-600">Mens Shoes</p>
            <p className="text-gray-600">Flat Pewter/Light Bone/Black/White</p>
            <p className="text-gray-600">Size 8</p>
            <p className="text-gray-600">Quantity 1</p>
          </div>
        </div>
      </div>
    </div>

    <div className="md:w-1/2 md:ml-8">
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Summary</h2>
        <div className="mb-2">
          <p className="text-gray-600">Subtotal</p>
          <p className="text-lg font-semibold">₹20 890.00</p>
        </div>
        <div className="mb-2">
          <p className="text-gray-600">Estimated Delivery & Handling</p>
          <p className="text-lg font-semibold">Free</p>
        </div>
        <hr className="my-4" />
        <div className="mb-4">
          <p className="text-lg font-bold">Total</p>
          <p className="text-2xl font-semibold">₹20 890.00</p>
        </div>
        <Link href="./checkoutpage"><button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg"> Checkout</button></Link>
      </div>
    </div>
  </div>
</div>
</>
)}
export default Cart;