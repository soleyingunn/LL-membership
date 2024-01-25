import Image from 'next/image'

export default function MembershipDashboard() {
  return (
    <main className="bg-gray-900 text-white">
    {/* <-- Navigation Bar -->! */}


    {/* <!-- Rest of your page content --> */}
    <div className="p-6">
      <div className="max-w-6xl mx-auto p-6">

        {/* <!-- Enhanced Welcome Section with User Interaction --> */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold">Welcome Back, [User Name]</h1>
            <p className="text-gray-400 mt-2">Your dashboard is updated with the latest token insights.</p>
          </div>
          <div className="space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Create Token</button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">View Reports</button>
          </div>
        </div>

        {/* <!-- Total Tokens Minted and Additional Stats --> */}
      <div className="grid grid-cols-4 gap-4 mb-6">
    
    {/* <!-- Mini-card 1: Total Tokens Minted --> */}
    <div className="bg-gray-800 rounded-2xl p-4">
      <div className="flex flex-col items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-300">Total Tokens Minted</h3>
        <p className="text-2xl font-bold text-white" id="totalTokensMinted">1,234</p>
        <p className="text-sm text-gray-400">Updated just now</p>
      </div>
    </div>
    
    {/* <!-- Mini-card 2: Minting Trends --> */}
    <div className="bg-gray-800 rounded-2xl p-4">
      <div className="flex flex-col items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-300">Minting Trends</h3>
        {/* <!-- Placeholder for Mini-Chart --> */}
        <canvas id="miniMintingTrendChart" className="max-w-full h-24"></canvas>
      </div>
    </div>
    
    {/* <!-- Mini-card 1: Total Tokens Minted --> */}
    <div className="bg-gray-800 rounded-2xl p-4">
      <div className="flex flex-col items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-300">Total Tokens Minted</h3>
        <p className="text-2xl font-bold text-white" id="totalTokensMinted">1,234</p>
        <p className="text-sm text-gray-400">Updated just now</p>
      </div>
    </div>
    
    {/* <!-- Mini-card 2: Minting Trends --> */}
    <div className="bg-gray-800 rounded-2xl p-4">
      <div className="flex flex-col items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-300">Minting Trends</h3>
        {/* <!-- Placeholder for Mini-Chart --> */}
        <canvas id="miniMintingTrendChart" className="max-w-full h-24"></canvas>
      </div>
    </div>
    
  </div>

        {/* <!-- Enhanced Interactive Charts --> */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-800 rounded-2xl p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Sales Trends</h3>
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                {/* <!-- Time Range Selector and Filters --> */}
                <div className="flex justify-between items-center mb-4">
                  {/* <!-- Time Range Selector --> */}
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Week</button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Month</button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Year</button>
                  </div>
                  {/* <!-- Additional Filters or Controls --> */}
                  <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Filter Data</button>
                </div>

              </div>
            </div>
            <div className="relative">
              <canvas id="salesTrendChart"></canvas>
            </div>
          </div>

          {/* <!-- Token Usage Stats Chart --> */}
          <div className="bg-gray-800 rounded-2xl p-4 mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Token Usage Stats</h3>

            {/* <!-- Filters for Token Stats --> */}
            <div className="flex justify-between items-center mb-4">
              {/* <!-- Token Type Filter --> */}
              <div className="flex space-x-2">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">NFTs</button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Utility Tokens</button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Others</button>
              </div>

              {/* <!-- Additional Filters or Controls --> */}
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Filter Data</button>
            </div>

            {/* <!-- Chart Container --> */}
            <div className="relative">
              <canvas id="tokenUsageChart"></canvas>
            </div>
          </div>
        </div>

        {/* <!-- Your Campaigns Section --> */}
        <div className="bg-gray-800 rounded-2xl p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-300">Your Campaigns</h2>
            <div className="overflow-hidden overflow-x-auto">
                <table className="min-w-full text-sm divide-y divide-gray-700">
                    <tbody className="text-xs uppercase text-gray-400 bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">Campaign Name</th>
                            <th scope="col" className="px-6 py-3">Status</th>
                            <th scope="col" className="px-6 py-3">Tokens Distributed</th>
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </tbody>
                    <tbody className="divide-y divide-gray-700">
                        {/* <!-- Campaign Row --> */}
                        <tr className="bg-gray-700 hover:bg-gray-600">
                            <td className="px-6 py-4">Campaign Name #1</td>
                            <td className="px-6 py-4">Active</td>
                            <td className="px-6 py-4">1,200</td>
                            <td className="px-6 py-4 flex space-x-2">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">View Details</button>
                                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Edit</button>
                                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Pause</button>
                            </td>
                        </tr>
                        {/* <!-- Repeat for other campaigns --> */}
                    </tbody>
                </table>
            </div>
        </div>
        
        {/* <!-- Activity Stream Section --> */}
        <div className="bg-gray-800 rounded-2xl p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">Latest Activity</h2>
          <div className="space-y-4 overflow-y-auto" /* style="max-height: 400px;" */>
            {/* <!-- Individual Activity Item --> */}
            <div className="bg-gray-700 rounded-lg p-3 flex items-center space-x-4">
              <div className="icon-placeholder">
                {/* <!-- Dynamic Icon based on activity type --> */}
              </div>
              <div>
                <p className="text-sm text-gray-300">New token "Artwork Series" created</p>
                <p className="text-xs text-gray-400">15 minutes ago</p>
              </div>
            </div>
            {/* <!-- Repeat for each activity --> */}
            <div className="text-center mt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                View All Activities
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Quick Navigation Panel --> */}
        <div className="flex justify-between bg-gray-800 p-4 rounded-2xl">
          {/* <!-- Navigation Shortcut 1 --> */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300" /* onClick="location.href='/create-token'" */>
            Create Token
          </button>

          {/* <!-- Navigation Shortcut 2 --> */}
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-300" /* onClick="location.href='//campaigns'" */>
            Manage Campaigns
          </button>

          {/* <!-- Navigation Shortcut 3 --> */}
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300" /* onClick="location.href='/analytics'" */>
            View Analytics
          </button>

          {/* <!-- Navigation Shortcut 4 --> */}
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300" /* onClick="location.href='/reports'" */>
            Generate Reports
          </button>

          {/* <!-- More Shortcuts as Needed --> */}
        </div>

      </div>
    </div>
  </main>

  )
}
