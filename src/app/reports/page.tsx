import Image from 'next/image'

export default function AnalyticsAndReporting() {
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
                  <a href="/dashboard" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                  <a href="/tokens" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Tokens</a>
                  <a href="/campaigns" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Campaigns</a>
                  <a href="/reports" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>
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
    
      {/* Analytics and Reporting */}
      <div className="p-6">
      <div className="bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-4">Analytics and Reporting</h2>
    
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg text-gray-400 mb-2">Create Report</h3>
          <form>
            {/* Date Range */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200">Date Range</label>
              <div className="mt-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="date" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                <input type="date" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
              </div>
            </div>
    
            {/* Token Type Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200">Token Type</label>
              <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="token1">Token Type 1</option>
                <option value="token2">Token Type 2</option>
                {/* More token types */}
              </select>
            </div>
    
            {/* Affiliate Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-200">Affiliate</label>
              <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="affiliate1">Affiliate 1</option>
                <option value="affiliate2">Affiliate 2</option>
                {/* More affiliates */}
              </select>
            </div>
    
            {/* Submit Button */}
            <div className="flex justify-end">
              <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Generate Report
              </button>
            </div>
          </form>
        </div>
    
        {/* Engagement Metrics Visuals */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg text-gray-400 mb-2">User Engagement</h3>
          <canvas id="engagementMetricsChart" className="h-64">
            {/* Chart.js Graph Placeholder */}
          </canvas>
        </div>
    
        {/* Token Popularity Index */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
          <h3 className="text-lg text-gray-400 mb-2">Token Popularity</h3>
          <canvas id="tokenPopularityIndex" className="h-64">
            {/* Popularity index visual */}
          </canvas>
        </div>
    
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
      <h3 className="text-lg text-gray-400 mb-2">ROI Calculator</h3>
      <form id="roiCalculator">
        {/* Cost Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200">Cost</label>
          <input type="number" id="cost" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none" placeholder="Enter cost" />
        </div>
    
        {/* Earnings Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-200">Earnings</label>
          <input type="number" id="earnings" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none" placeholder="Enter earnings"/>
        </div>
    
        {/* Calculate Button */}
        <div className="mb-4 flex justify-end">
          <button type="button" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md focus:outline-none">
            Calculate ROI
          </button>
        </div>
    
        {/* ROI Display */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-200">ROI</label>
          <div id="roiResult" className="mt-1 p-3 bg-gray-700 rounded-md text-white">Result will appear here</div>
        </div>
      </form>
    </div>
    
        {/* Downloadable Reports */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex justify-end">
          <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition duration-300">
            Download Report
          </button>
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
