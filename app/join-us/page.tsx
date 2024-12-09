import Link from 'next/link';
import Image from 'next/image';

const BecomeANikeMember = () => {
  return (
    <div className="bg-white py-10 w-[380px] ml-[500px]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <Image src="/Vector1.png" alt="Nike Logo" width={20} height={20} className="w-5 h-5" />
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center">Become a Nike Member</h2>
        <p className="text-lg mb-4 text-center">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="text-sm text-gray-500 mt-1">
              Get a Nike Member Reward every year on your Birthday.
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              id="country"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="India">India</option>
              {/* Add more country options here */}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <div className="mt-1 flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="mr-2"
              />
              <label htmlFor="male" className="mr-4">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="mr-2"
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="mb-4">
            <input
              type="checkbox"
              id="emailUpdates"
              className="mr-2"
            />
            <label htmlFor="emailUpdates">
              Sign up for emails to get updates from Nike on products, offers and your Member benefits
            </label>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            By creating an account, you agree to Nikes{' '}
            <Link href="/privacy-policy"  className="text-blue-500">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link href="/terms-of-use" className="text-blue-500">
              Terms of Use
            </Link>
            .
          </p>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 w-full"
          >
            JOIN US
          </button>
        </form>
        <p className="text-center mt-4">
          Already a Member?{' '}
          <Link href="/sign-in" className="text-blue-500">Sign In.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BecomeANikeMember;