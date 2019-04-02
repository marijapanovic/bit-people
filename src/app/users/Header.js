import React from 'react';
//import UsersPageCard from '../users/UserPageCard';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.displayChangeClick = this.displayChangeClick.bind(this);
    }

    displayChangeClick() {
        if (this.props.display === "list") {
            this.props.onDisplayChange("grid");
        } else {
            this.props.onDisplayChange("list");
        }
    }

    render() {
        const hrefClassName = this.props.display === "list" ? "fa fa-th-list" : "fas fa-grip-horizontal";
        return (
            <>
        <nav>
            <div className="nav-wrapper">
                <h1 className="brand-logo center">BIT Persons</h1>

                <ul className="right">
                    <li><i onClick={this.props.onRefresh} className="fas fa-redo-alt"></i></li>
                    <li><i onClick={this.displayChangeClick} className={hrefClassName}></i></li>

                </ul>
            </div>

        </nav>
    </>
        )
    }
}

export default Header


