import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex items-center justify-center gap-5 bg-stone-700 py-4 text-2xl text-white">
            <Link to='/'>Home</Link>
            <Link to='/addcoffee'>Add Coffee</Link>
            <Link to='/updatecoffee'>Update Coffee</Link>
        </div>
    );
};

export default Navbar;