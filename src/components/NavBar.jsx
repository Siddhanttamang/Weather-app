import {Link} from 'react-router-dom'
import SearchBar from './SearchBar';
function NavBar({onSearch}){
    return(  <div className="flex w-full justify-items-start items-center px-16 py-4 gap-4">
      <div className="text-gray-700 font-bold pr-6">
        <Link to="/">Weather</Link>
      </div>

      <SearchBar onSearch={onSearch} />
    </div>)

}
export default NavBar;