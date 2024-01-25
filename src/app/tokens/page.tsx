import Image from 'next/image'

export default function CreateToken() {
  return (
    <div className="max-w-6xl mx-auto p-6">
  
      {/* Token Creation Section */}
      <div className="bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-300">Create New Token</h2>
        <form id="tokenCreationForm" className="space-y-6" >
  
          {/* Token Metadata Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  
            {/* Token Name Input */}
            <div>
              <label htmlFor="tokenName" className="block text-sm font-medium text-gray-400">Token Name</label>
              <input type="text" id="tokenName" name="tokenName" required className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
            </div>
  
            {/* Token Description Input */}
            <div>
              <label htmlFor="tokenDescription" className="block text-sm font-medium text-gray-400">Description</label>
              <textarea id="tokenDescription" name="tokenDescription" rows={4} required className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
            </div>
  
            {/* Additional Token Property Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  
              {/* Expiry Date Input */}
              <div>
                <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-400">Expiry Date (optional)</label>
                <input type="date" id="expiryDate" name="expiryDate" className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
              </div>
  
              {/* Token Usage Rules */}
              <div className="md:col-span-2">
                <label htmlFor="usageRules" className="block text-sm font-medium text-gray-400">Usage Rules</label>
                <select id="usageRules" className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option value="access_control">Access Control</option>
                  <option value="time_bound">Time-bound</option>
                  <option value="usage_limit">Usage Limit</option>
                  {/* Other rule types */}
                </select>
              </div>
  
              {/* Token Type Selector */}
              <div>
                <label htmlFor="tokenType" className="block text-sm font-medium text-gray-400">Token Type</label>
                <select id="tokenType" name="tokenType" className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option value="subscription">Subscription</option>
                  <option value="access">Access</option>
                  <option value="discount">Discount</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
  
              {/* Additional Properties */}
              <div className="md:col-span-2">
                <label htmlFor="additionalProperties" className="block text-sm font-medium text-gray-400">Additional Properties</label>
                <textarea id="additionalProperties" name="additionalProperties" rows={3} className="mt-1 block w-full rounded-md bg-gray-700 text-white border-gray-600 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
              </div>
            </div>
  
            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 md:col-span-2">
              <button type="button" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-300">Preview</button>
              <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">Mint Token</button>
            </div>
          </div>
        </form>
      </div>
  
      {/* Usage Rules Dynamic Section */}
      <div id="dynamicUsageRules" className="grid grid-cols-1 gap-6">
        {/* Placeholder for dynamic input fields based on selected usage rules */}
      </div>
  
      {/* Token Inventory Section */}
      <div className="bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-300">Token Inventory</h2>
  
        {/* Advanced Filtering Options */}
        <div className="flex flex-wrap justify-between items-center mb-4">
          {/* Search Input */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <input type="text" id="searchTokens" placeholder="Search by token name..." className="rounded-md bg-gray-700 text-white border-gray-600 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
          </div>
          {/* Filtering and Sorting Selectors */}
          <div className="flex space-x-2">
            {/* Filter Dropdown */}
            <select id="filterType" className="rounded-md bg-gray-700 text-white border-gray-600 focus:border-indigo-300">
              <option>Filter by Type</option>
              <option>Subscription</option>
              <option>Access</option>
              <option>Discount</option>
            </select>
            {/* Sort Dropdown */}
            <select id="sortTokens" 
                    className="rounded-md bg-gray-700 text-white border-gray-600 focus:border-indigo-300">
              <option>Sort By</option>
              <option>Most Recent</option>
              <option>Oldest</option>
              <option>Most Used</option>
            </select>
          </div>
        </div>
  
        {/* Token List Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-700">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">Token Name</th>
                <th scope="col" className="px-6 py-3">Type</th>
                <th scope="col" className="px-6 py-3">Amount</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700 text-gray-300">
  {/* Token List Table Rows */}
  <tbody className="divide-y divide-gray-700 text-gray-300">
      {/* Example Row 1 */}
      <tr>
          <td className="px-6 py-4">Token Alpha</td>
          <td className="px-6 py-4">Subscription</td>
          <td className="px-6 py-4">100</td>
          <td className="px-6 py-4 text-right">
              <button className="text-indigo-500 hover:text-indigo-600">Edit</button>
              <button className="text-red-500 hover:text-red-600 ml-4">Delete</button>
          </td>
      </tr>
      {/* Example Row 2 */}
      <tr>
          <td className="px-6 py-4">Token Beta</td>
          <td className="px-6 py-4">Access</td>
          <td className="px-6 py-4">250</td>
          <td className="px-6 py-4 text-right">
              <button className="text-indigo-500 hover:text-indigo-600">Edit</button>
              <button className="text-red-500 hover:text-red-600 ml-4">Delete</button>
          </td>
      </tr>
      {/* Example Row 3 */}
      <tr>
          <td className="px-6 py-4">Token Gamma</td>
          <td className="px-6 py-4">Discount</td>
          <td className="px-6 py-4">500</td>
          <td className="px-6 py-4 text-right">
              <button className="text-indigo-500 hover:text-indigo-600">Edit</button>
              <button className="text-red-500 hover:text-red-600 ml-4">Delete</button>
          </td>
      </tr>
      {/* More rows can be added dynamically from backend data */}
  </tbody>
  
            </tbody>
          </table>
        </div>
  
        {/* Pagination */}
        <nav className="mt-4" aria-label="Table navigation">
          <ul className="inline-flex items-center">
            <li><button className="px-3 py-1 rounded-md rounded-l-lg bg-gray-700 text-white" rel="prev">Previous</button></li>
            {/* Placeholder for pagination numbers */}
            <li><button className="px-3 py-1 rounded-md bg-gray-700 text-white">1</button></li>
            <li><button className="px-3 py-1 rounded-md bg-gray-700 text-white">2</button></li>
            <li><span className="px-3 py-1">...</span></li>
            <li><button className="px-3 py-1 rounded-md bg-gray-700 text-white">10</button></li>
            <li><button className="px-3 py-1 rounded-md rounded-r-lg bg-gray-700 text-white" rel="next">Next</button></li>
          </ul>
        </nav>
  
        {/* Feedback Messages */}
        <div id="feedbackMessages" className="mt-4 hidden">
          <p className="text-green-500">Action successful</p>
          {/* More feedback messages here */}
        </div>
  
      </div>
  
      <div id="feedbackMessages" className="hidden">
        <p className="text-green-500">Token created successfully!</p>
        {/* More feedback messages here */}
      </div>
  
    </div>
  
      
  )
}
