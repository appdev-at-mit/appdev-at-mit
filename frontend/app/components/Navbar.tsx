import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-dark-blue">Full Stack @ MIT</Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/team" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-dark-blue transition duration-300">
              Team
            </Link>
            <Link href="/products" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-dark-blue transition duration-300">
              Products
            </Link>
            <Link href="/support" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-dark-blue transition duration-300">
              Sponsor
            </Link>
            <Link href="/apply" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium hover:border-dark-blue transition duration-300">
              Apply
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
