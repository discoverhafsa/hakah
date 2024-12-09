export default function Footer() {
    return (
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h4 className="font-bold mb-4">Find a Store</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Become a Member</a></li>
                <li><a href="#" className="hover:underline">Sign Up for Email</a></li>
                <li><a href="#" className="hover:underline">Send Us Feedback</a></li>
                <li><a href="#" className="hover:underline">Student Discounts</a></li>
              </ul>
            </div>
  
            {/* Column 2 */}
            <div>
              <h4 className="font-bold mb-4">Get Help</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Order Status</a></li>
                <li><a href="#" className="hover:underline">Delivery</a></li>
                <li><a href="#" className="hover:underline">Returns</a></li>
                <li><a href="#" className="hover:underline">Payment Options</a></li>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
  
            {/* Column 3 */}
            <div>
              <h4 className="font-bold mb-4">About Nike</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">News</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Investors</a></li>
                <li><a href="#" className="hover:underline">Sustainability</a></li>
              </ul>
            </div>
          </div>
  
          <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2023 Nike, Inc. All Rights Reserved</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" aria-label="Twitter" className="hover:text-gray-400">Twitter</a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-400">Facebook</a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-400">YouTube</a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-400">Instagram</a>
            </div>
            <div>Made by Hafsa Ahmed </div>
          </div>
        </div>
      </footer>
    );
  }