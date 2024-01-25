import Image from 'next/image'

export default function Home() {
  return (
    
    <main className="bg-gray-900 text-white">

    {/* Navigation Bar */}
    <nav className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="https://placehold.co/40x40" alt="Logo"/>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                
                {/* Navigation Links */}
                <a href="/dashboard" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard</a>
                <a href="/tokens" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Tokens</a>
                <a href="/campaigns" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Campaigns</a>
                <a href="/reports" 
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Reports</a>
                
                {/* More links as needed */}
              </div>
            </div>
          </div>
          
          {/* Profile/Settings Dropdown */}
          <div className="ml-3 relative">
            <div>
              <button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" 
                      id="user-menu" 
                      aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" 
                    src="https://placehold.co/40x40" alt=""/>
              </button>
            </div>
            
            {/* Dropdown Menu */}
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 hidden" 
                role="menu" 
                aria-orientation="vertical" 
                aria-labelledby="user-menu">
              <a href="/profile" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                role="menuitem">Your Profile</a>
              <a href="/settings" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                role="menuitem">Settings</a>
              <a href="/logout" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" 
                role="menuitem">Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    {/* Rest of your page content */}
    <div className="p-6">

    </div>

    {/* Footer */}
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="/about" className="hover:underline">About</a>
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:underline">Terms of Service</a>
            <a href="/contact" className="hover:underline">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>

    </main>
  )
}
