import Image from 'next/image'

export default function CampaignSetup() {
  return (
    
    <main className="bg-gray-900 text-white">

    {/*Navigation Bar */}
    <nav className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/*Logo and Brand Name */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="https://placehold.co/40x40" alt="Logo"/>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/*Navigation Links */}
                <a href="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                <a href="/tokens" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tokens</a>
                <a href="/campaigns" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Campaigns</a>
                <a href="/reports" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>
                {/*More links as needed */}
              </div>
            </div>
          </div>
          {/*Profile/Settings Dropdown */}
          <div className="ml-3 relative">
            <div>
              <button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="https://placehold.co/40x40" alt=""/>
              </button>
            </div>
            {/*Dropdown Menu */}
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
              <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
              <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
              <a href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    {/*Rest of your page content */}
    <div className="p-6">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/*Campaign Setup Section */}
          <div className="bg-gray-800 rounded-lg shadow px-5 py-6 sm:px-6 mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-300">Campaign Setup</h2>

            {/*Campaign Creation Form */}
            <form id="campaignCreationForm">
              {/*Campaign Name */}
              <div className="mb-4">
                <label htmlFor="campaignName" className="block text-sm font-medium text-gray-400">Campaign Name</label>
                <input type="text" id="campaignName" name="campaignName" required className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500"/>
              </div>

              {/*Campaign Description */}
              <div className="mb-4">
                <label htmlFor="campaignDescription" className="block text-sm font-medium text-gray-400">Description</label>
                <textarea id="campaignDescription" name="campaignDescription" rows={4} className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500"></textarea>
              </div>

              {/*Start & End Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-400">Start Date</label>
                  <input type="date" id="startDate" name="startDate" required className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500"/>
                </div>
                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-400">End Date</label>
                  <input type="date" id="endDate" name="endDate" required className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500"/>
                </div>
              </div>

              {/*Token Selection */}
              <div className="mb-4">
                <label htmlFor="tokens" className="block text-sm font-medium text-gray-400">Select Tokens</label>
                <select id="tokens" name="tokens" multiple className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500">
                  {/*Options dynamically populated from available tokens */}
                </select>
              </div>

              {/*Objectives */}
              <div className="mb-4">
                <label htmlFor="objectives" className="block text-sm font-medium text-gray-400">Objectives</label>
                <input type="text" id="objectives" name="objectives" required className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500"/>
              </div>

              {/*Budget Allocation */}
              <div className="mb-4">
                <label htmlFor="budget" className="block text-sm font-medium text-gray-400">Budget Allocation</label>
                <input type="number" id="budget" name="budget" required className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-indigo-500"/>
              </div>

              {/*Action Buttons */}
              <div className="flex justify-end space-x-3">
                <button type="button" className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition duration-300">Save Draft</button>
                <button type="submit" className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded transition duration-300">Launch Campaign</button>
              </div>
            </form>
          </div>
        </div>

        {/*Campaign Tracking Section */}
        <div className="bg-gray-800 rounded-lg shadow px-5 py-6 sm:px-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-300">Campaign Tracking</h2>

          {/*Real-Time Performance Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/*KPI Cards */}
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-white">Total Clicks</h3>
              <p className="text-2xl font-semibold text-indigo-300">1,234</p>
              {/*More KPIs like 'Total Conversions', 'Engagement Rate', etc. */}
            </div>

            {/*Interactive Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/*Conversion Rate Chart */}
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-white">Conversion Rate Over Time</h3>
                <canvas id="conversionRateChart" className="mt-4 h-64"></canvas>
              </div>

              {/*Token Distribution Chart */}
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-white">Token Distribution</h3>
                <canvas id="tokenDistributionChart" className="mt-4 h-64"></canvas>
              </div>
            </div>
          </div>

          {/*Token Distribution Table */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-300 mb-4">Token Distribution</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-700 divide-y divide-gray-600 rounded-md overflow-hidden">
                <thead className="bg-gray-600">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Token Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Distributed
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Redeemed
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Remaining
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-700 divide-y divide-gray-600">
                  {/*Sample Row 1 */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Alpha Token
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      1000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      600
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      400
                    </td>
                  </tr>
                  {/*Sample Row 2 */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Beta Token
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      1500
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      800
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      700
                    </td>
                  </tr>
                  {/*Sample Row 3 */}
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Gamma Token
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      2000
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      500
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      1500
                    </td>
                  </tr>
                  {/*Additional rows as needed */}
                </tbody>
              </table>
            </div>
          </div>

          {/*Additional analytics and tracking tools as needed */}
        </div>

      </div>

      {/*Footer */}
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

    </div>
    </main>
  )
}
