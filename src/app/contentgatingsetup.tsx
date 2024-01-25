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
                <a href="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard</a>
                <a href="/tokens" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Tokens</a>
                <a href="/campaigns" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Campaigns</a>
                <a href="/reports" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Reports</a>

                {/* More links as needed */}
              </div>
            </div>
          </div>

          {/* Profile/Settings Dropdown */}
          <div className="ml-3 relative">
            <div>
              <button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="https://placehold.co/40x40" alt=""/>
              </button>
            </div>

            {/* Dropdown Menu */}
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
              <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              <a href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

      {/* Content Gating Setup Section */}
      <div className="bg-gray-800 rounded-lg shadow px-5 py-6 sm:px-6 mb-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-300">Content Gating Setup</h2>

        {/* Gated Content Configuration Form */}
        <form id="contentGatingForm" className="mb-6">
          {/* Content Title */}
          <div className="mb-4">
            <label htmlFor="contentTitle" className="block text-sm font-medium text-gray-400">Content Title</label>
            <input type="text" id="contentTitle" name="contentTitle" required className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500"/>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="contentDescription" className="block text-sm font-medium text-gray-400">Description</label>
            <textarea id="contentDescription" name="contentDescription" rows={3} className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500"></textarea>
          </div>

          {/* Access Token Selection */}
          <div className="mb-4">
            <label htmlFor="accessToken" className="block text-sm font-medium text-gray-400">Access Token</label>
            <select id="accessToken" name="accessToken" className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500">
              {/* Options dynamically populated from available tokens */}
            </select>
          </div>

          {/* Content URL/Upload */}
          <div className="mb-4">
            <label htmlFor="contentUrl" className="block text-sm font-medium text-gray-400">Content URL/Upload</label>
            <input type="text" id="contentUrl" name="contentUrl" className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500"/>
            {/* Alternatively, provide an upload button for content files */}
          </div>

          {/* Activation Toggle */}
          <div className="mb-6">
            <label htmlFor="contentActive" className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" id="contentActive" name="contentActive" className="sr-only"/>
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
              <div className="ml-3 text-sm font-medium text-gray-400">Active</div>
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Content</button>
        </form>

        {/* List/Grid of Existing Gated Content */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Existing Gated Content</h3>
          {/* Dynamic List/Grid Placeholder */}
          {/* Include Title, Token Required, Status, and Actions like Edit/Delete */}
        </div>
      </div>

      {/* Subscriber Management Section */}
      <div className="bg-gray-800 rounded-lg shadow px-5 py-6 sm:px-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-300">Subscriber Management</h2>

        {/* Search and Filter Bar */}
        <div className="mb-4">
          <input type="search" placeholder="Search subscribers..." className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500"/>
          {/* Additional filters can be implemented here */}
        </div>

        {/* Subscriber List Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-700 divide-y divide-gray-600 rounded-md overflow-hidden">
            <thead className="bg-gray-600">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Subscriber Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Access Token
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Content Accessed
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-700 divide-y divide-gray-600">
              {/* Dynamic Rows for Subscriber Data */}
              {/* Sample Row */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  Jane Doe
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Token XYZ
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  5 Articles, 3 Videos
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">View Details</a>
                  <a href="#" className="text-red-600 hover:text-red-900 ml-4">Revoke Access</a>
                </td>
              </tr>
              {/* Additional rows */}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-300">
            Showing 1 to 10 of 200 entries
          </span>
          <nav aria-label="Pagination">
            <ul className="inline-flex items-center space-x-2">
              <li><button className="px-3 py-1 rounded-md bg-gray-700 text-white hover:bg-gray-600">Prev</button></li>
              {/* Page Numbers */}
              <li><button className="px-3 py-1 rounded-md bg-gray-700 text-white hover:bg-gray-600">1</button></li>
              <li><button className="px-3 py-1 rounded-md bg-gray-700 text-white hover:bg-gray-600">2</button></li>
              <li>...</li>
              <li><button className="px-3 py-1 rounded-md bg-gray-700 text-white hover:bg-gray-600">5</button></li>
              <li><button className="px-3 py-1 rounded-md bg-gray-700 text-white hover:bg-gray-600">Next</button></li>
            </ul>
          </nav>
        </div>


      </div>

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
