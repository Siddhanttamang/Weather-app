import {useState} from 'react';
function SearchBar({onSearch}){
    const [searchQuery,setSearchQuery]= useState("");
    function handleSubmit(e){
        e.preventDefault();
        if(!searchQuery.trim()) return;
        onSearch(searchQuery);


    }


    return ( <div>
            <form onSubmit={handleSubmit} className="flex flex-row gap-2">
                <input 
                type="text"
                placeholder="Enter City"
                className="p-2 border border-gray-500 rounded-xl text-gray-700
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e)=>{setSearchQuery(e.target.value)}}
                />
                <button type="submit" className="p-2 rounded-2xl focus:ring-2 focus:ring-blue-600 hover:ring-2 hover:ring-blue-600 bg-gray-800 cursor-pointer text-white">
                    Get Weather
                </button>
            </form>
            </div>)
}
export default SearchBar;