import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="navbar mx-auto inset-x-0 bottom-28 z-10">
                <div className="navbar-nav active">
                    <span className="nav-item">Home</span>
                </div>
                <div className="navbar-nav">
                    <span className="nav-item">Projects</span>
                </div>
                <div className="navbar-nav">
                    <span className="nav-item">About</span>
                </div>
                <div className="navbar-nav">
                    <span className="nav-item">Contact</span>
                </div>

                {/*<ul className="">*/}
                {/*    <li className='nav-item'>*/}
                {/*        <a href="sass.html">Sass</a>*/}
                {/*    </li>*/}
                {/*    <li className='nav-item'>*/}
                {/*        <a href="badges.html">Components</a>*/}
                {/*    </li>*/}
                {/*    <li className='nav-item'>*/}
                {/*        <a href="collapsible.html">JavaScript</a>*/}
                {/*    </li>*/}
                {/*</ul>*/}

            </nav>
        </>
    );
};

export default Navbar;
