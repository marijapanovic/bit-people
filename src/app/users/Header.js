import React from 'react';

const Header = (props) =>(
        <>
            <nav>
                 <div className="nav-wrapper">
                     <h1 className="brand-logo center">BIT Persons</h1>
                         <ul className="right">
                            <li  className="about">About</li>
                             <li><i onClick={props.onRefresh} className="fas fa-redo-alt"></i></li>
                             <li><i onClick={() => props.onDisplayChange(props.display === "list" ? "grid" : "list")} className={props.display === "list" ? "fas fa-grip-horizontal":"fa fa-th-list"}></i></li>

                         </ul>
                    </div>
                 </nav>
          </>
);
export default Header;