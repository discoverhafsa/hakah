import React from "react";
import Image
 from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Left Section */}
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 lg:pr-6">
            <h2 className="text-xl font-semibold mb-4">How would you like to get your order?</h2>
            <p className="text-sm text-gray-600 mb-4">
              Customs regulation for India requires a copy of the recipients KYC. The address on the KYC needs to match
              the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC.
            </p>
            <button className="w-full bg-black text-white py-2 rounded-lg mb-6">Deliver It</button>

            {/* Address Form */}
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Postal Code</label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Locality</label>
                  <input
                    type="text"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">State/Territory</label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black">
                    <option>India</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                />
              </div>

              {/* PAN */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">PAN</label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                />
              </div>

              <div className="flex items-center mb-6">
                <input type="checkbox" className="h-4 w-4 text-black border-gray-300 rounded" />
                <label className="ml-2 text-sm text-gray-600">
                  I have read and consent to the terms and conditions.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
              >
                Continue
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md mt-6 lg:mt-0">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            <div className="flex items-center justify-between mb-2">
            <Image src="/Image4.png" alt="image" height={100} width={100}/>
              <p className="text-gray-600">Nike Dri-FIT ADV TechKnit</p>
              <p className="font-semibold">₹3,895</p>
            </div>
            <div className="flex items-center justify-between mb-2">
            <Image src="/Image3.png" alt="image" height={100} width={100}/>
              <p className="text-gray-600">Nike Air Max 97 SE</p>
              <p className="font-semibold">₹16,995</p>
            </div>
            <div className="flex items-center justify-between font-semibold text-lg mt-4">
                
              <p>Total</p>
              <p>₹20,890</p>
            </div>
            <p className="text-gray-600 text-sm mt-2">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
          </div>
        </div>
      </div>
    </div>
  );
}