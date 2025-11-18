import { Link } from 'react-router-dom';

function Navbar() {
    return (    
        <nav>
            
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/functional">Functional Component</Link>
            {" | "}
            <Link to="/hooks">Hooks</Link>
        </nav>
    );
}

export default Navbar;