import {Link} from 'react-router-dom'
import SearchBar from './SearchBar';
function NavBar({onSearch}){
    return(  <div className="flex w-full justify-items-start items-center  bg-indigo-200 p-3 gap-4">
      <div className="text-gray-700 font-bold mx-10">
        <Link to="/">Weather</Link>
      </div>

      <SearchBar onSearch={onSearch} />
    </div>)

}
export default NavBar;