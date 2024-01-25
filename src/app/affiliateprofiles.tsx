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

    {/* Rest of your page content */}
    <div className="p-6">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Affiliate Profiles Section */}
        <div className="bg-gray-800 rounded-lg shadow px-5 py-6 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-300 mb-4">Affiliate Profiles</h3>
              {/* Action Bar */}
          <div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 mb-4">
            Add Affiliate
          </button>
        </div>
          <div className="flex flex-col mb-4">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Affiliate Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Email
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Commission
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Sales Generated
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-700 divide-y divide-gray-600">
                      {/* Dynamic Row Template */}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          John Doe
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          johndoe@example.com
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Active
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          10%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          $5,000
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">View</a>
                          <a href="#" className="text-indigo-600 hover:text-indigo-900 ml-4">Edit</a>
                          <a href="#" className="text-red-600 hover:text-red-900 ml-4">Deactivate</a>
                        </td>
                      </tr>
                      {/* Additional Rows */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Invite Affiliates Section */}
        <div className="mt-8 bg-gray-800 rounded-lg shadow px-5 py-6 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-300">Invite Affiliates</h3>
          <form className="space-y-6 mt-4">
            {/* Email Input */}
            <div>
              {/* ... */}
            </div>
            {/* Custom Message Input */}
            <div>
              <label htmlFor="customMessage" className="block text-sm font-medium text-gray-400">
                Custom Message (optional)
              </label>
              <textarea id="customMessage" 
                        name="customMessage" 
                        rows={3} 
                        placeholder="Add a personal message..." 
                        className="mt-1 block w-full rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
            </div>
            {/* Send Button */}
            <button type="submit" 
                    className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none">
              Send Invite
            </button>
          </form>
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

  </div>
  
{/* Add Affiliate Modal (hidden by default) */}
<div id="addAffiliateModal" className="hidden fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full">
  {/* Modal content */}
  <div className="container mx-auto p-8">
    <div className="bg-white rounded shadow-lg w-full sm:w-1/2 mx-auto">
      {/* Modal header */}
      <div className="border-b px-4 py-2 flex justify-between items-center">
        <h3 className="font-semibold text-lg">Add New Affiliate</h3>
        <button className="text-black close-modal">&times;</button>
      </div>
      {/* Modal body */}
      <div className="p-4">
        <form id="addAffiliateForm">
          {/* Form fields for adding new affiliate */}
          <input type="text" placeholder="Name" className="block w-full p-2 mb-4" />
          <input type="email" placeholder="Email" className="block w-full p-2 mb-4" />
          <input type="text" placeholder="Affiliate Code" className="block w-full p-2 mb-4" />
          {/* More fields as necessary */}
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Create Affiliate
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
  
</main>
  )
}
