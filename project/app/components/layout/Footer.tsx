export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-4">ShopHub</h2>
            <p className="text-gray-400 mb-4">
              Premium online shopping experience with the best products and unmatched customer service.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">All Products</a></li>
              <li><a href="/categories" className="text-gray-400 hover:text-white transition-colors">Categories</a></li>
              <li><a href="/featured" className="text-gray-400 hover:text-white transition-colors">Featured</a></li>
              <li><a href="/new-arrivals" className="text-gray-400 hover:text-white transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="/press" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="/returns" className="text-gray-400 hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ShopHub. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/cookies" className="text-gray-400 text-sm hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}