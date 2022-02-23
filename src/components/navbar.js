// imports
import * as React from 'react';
import { ReactComponent as GithubIcon } from '../icons/github.svg';
import { ReactComponent as LinkedInIcon } from '../icons/linkedin.svg';

    function Navbar( props) {
        return (
            <nav className="navbar">
                <ul className="navbar-nav"></ul>     
            </nav>
        );
}

function NavItem(props) {

    const [open, setOpen] = React.useState(false);

    return (
        <li className="nav-item">
            <a href= "#" className="icon-button" onClick={() => setOpen(!open)}>{props.icon}</a>
            {/* show children if open is true for icon */}
            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    
    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>


                {props.children}

                <span className="icon-button">{props.rightIcon}</span>

                </a>
        )
    }

    return (
        <div className="dropdown">

        </div>
    );
}