import React from 'react';
import UsersPageCard from '../users/UserPageCard';

const HeaderPost = () => (
    <>
        <nav>
            <div className="nav-wrapper">
                <h1 className="brand-logo center">BIT Persons</h1>

                <ul className="right">

                    <li><a href="index.html"><i className="fas fa-redo-alt"></i></a></li>
                    {/* <li><a href="#"><i className="fas fa-grip-horizontal"></i></a></li> */}
                    <li><a href="#" ><i className="fas fa-th-list"></i></a></li>
                    {/* <input type=" text" onChange={this.handlerChange} /> */}
                </ul>
            </div>

        </nav>
    </>
);

export default HeaderPost;