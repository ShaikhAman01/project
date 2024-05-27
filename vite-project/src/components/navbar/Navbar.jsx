import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import cartImg from "../../assets/shopping-bag.png"

const Navbar = () => {
    // navList Data
    // const navList = (
    //     <ul className="flex space-x-3 text-dark font-medium text-md px-5 ">
        
    //         {/* Home */}
    //         <li>
    //             <Link to={'/'}>Home</Link>
    //         </li>

    //         {/* All Product */}
    //         <li>
    //             <Link to={'/allproduct'}>Shop</Link>
    //         </li>

    //          {/* Search Bar  */}
    //          <SearchBar />

    //         {/* Signup */}
    //         <li>
    //             <Link to={'/signup'}>Signup</Link>
    //         </li>

    //         {/* User */}
    //         <li>
    //             <Link to={'/'}>User</Link>
    //         </li>

    //         {/* Admin */}
    //         {/* <li>
    //             <Link to={'/'}>Admin</Link>
    //         </li> */}

    //         {/* logout */}
    //         {/* <li>
    //             logout
    //         </li> */}

    //         {/* Cart */}
    //         <li>
    //             <Link to={'/cart'}>
    //             <img className="w-6 h-auto" src={cartImg} alt="cart" />
    //             </Link>
    //         </li>
    //     </ul>
    // )
    
      return (
        <nav className="bg-white-500 sticky top-0">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0 flex items-center">
                    <Link to={'/'}>
                        <h2 className="font-bold text-customRed text-2xl">Quantum</h2>
                    </Link>
                    {/* Home */}
                    <Link to={'/'} className="ml-6 text-black font-medium">Home</Link>
                    {/* Shop */}
                    <Link to={'/allproduct'} className="ml-6 text-black font-medium">Shop</Link>
                </div>
    
                {/* right  */}
                <div className="right flex items-center">
                    {/* Search Bar */}
                    <SearchBar />
                    {/* Signup */}
                    <Link to={'/signup'} className="ml-6 text-black font-medium">Signup</Link>
                    {/* Cart */}
                    <Link to={'/cart'} className="ml-6">
                        <img className="w-6 h-auto" src={cartImg} alt="cart" />
                    </Link>
                    {/* User */}
                    <Link to={'/'} className="ml-3 text-black font-medium">User</Link>
                </div>
            </div>
        </nav>
    );
    
}

export default Navbar;