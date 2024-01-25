import Image from 'next/image'

export default function Home() {
  return (
    
    <main className="bg-gray-900 text-white">
      {/* <!-- Navigation Bar --> */}
      <nav className="bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* <!-- Logo and Brand Name --> */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src="https://placehold.co/40x40" alt="Logo" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* <!-- Navigation Links --> */}
                  <a href="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                  <a href="/tokens" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tokens</a>
                  <a href="/campaigns" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Campaigns</a>
                  <a href="/reports" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>
                  {/* <!-- More links as needed --> */}
                </div>
              </div>
            </div>
            {/* <!-- Profile/Settings Dropdown --> */}
            <div className="ml-3 relative">
              <div>
                <button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="https://placehold.co/40x40" alt="" />
                </button>
              </div>
              {/* <!-- Dropdown Menu --> */}
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

        {/* <!-- Loyalty Program Setup Section --> */}
        <div className="bg-gray-800 rounded-lg shadow px-5 py-6 sm:px-6 mb-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-300">Loyalty Program Setup</h2>

          {/* <!-- Configuration Form --> */}
          <form id="loyaltyProgramForm">
            {/* <!-- Program Name --> */}
            <div className="mb-4">
              <label htmlFor="programName" className="block text-sm font-medium text-gray-400">Program Name</label>
              <input type="text" id="programName" name="programName" required className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500" />
            </div>

            {/* <!-- Earning Criteria --> */}
            <div className="mb-4">
              <label htmlFor="earningCriteria" className="block text-sm font-medium text-gray-400">Earning Criteria</label>
              <select id="earningCriteria" name="earningCriteria" className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500">
                <option value="purchase">Per Purchase</option>
                <option value="action">Specific Actions</option>
                {/* <!-- Additional options --> */}
              </select>
            </div>

            {/* <!-- Token Value --> */}
            <div className="mb-4">
              <label htmlFor="tokenValue" className="block text-sm font-medium text-gray-400">Token Value</label>
              <input type="number" id="tokenValue" name="tokenValue" min="0" step="0.01" required className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500" />
            </div>

            {/* <!-- Redemption Options --> */}
            <div className="mb-4">
              <label htmlFor="redemptionOptions" className="block text-sm font-medium text-gray-400">Redemption Options</label>
              <textarea id="redemptionOptions" name="redemptionOptions" rows={3} className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500"></textarea>
            </div>

            {/* <!-- Expiration Rules --> */}
            <div className="mb-4">
              <label htmlFor="expirationRules" className="block text-sm font-medium text-gray-400">Expiration Rules</label>
              <input type="text" id="expirationRules" name="expirationRules" required className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500" />
            </div>

            {/* <!-- Program Activation Toggle --> */}
            <div className="flex items-center mb-4">
              <label htmlFor="programActive" className="block text-sm font-medium text-gray-400 mr-2">Program Active</label>
              <input type="checkbox" id="programActive" name="programActive" className="rounded text-indigo-600 focus:ring-indigo-500" />
            </div>

            {/* <!-- Action Buttons --> */}
            <div className="flex justify-end space-x-3">
              <button type="button" className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition duration-300">Cancel</button>
              <button type="submit" className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded transition duration-300">Save Changes</button>
            </div>
          </form>
        </div>

        {/* <!-- Customer Rewards Table --> */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-700 divide-y divide-gray-600 rounded-md overflow-hidden">
            <thead className="bg-gray-600">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Tokens Earned
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Tokens Redeemed
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Remaining Tokens
                </th>
                {/* <!-- More columns can be added as needed --> */}
              </tr>
            </thead>
            <tbody className="bg-gray-700 divide-y divide-gray-600">
              {/* <!-- Dynamic Rows for Customer Data -->
              <!-- Sample Row --> */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  John Doe
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  100
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  50
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  50
                </td>
              </tr>
              {/* <!-- Additional rows can be dynamically generated --> */}
            </tbody>
          </table>
        </div>

      </div>

      {/* <!-- Footer --> */}
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
