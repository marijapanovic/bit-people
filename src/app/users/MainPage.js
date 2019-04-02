import React from 'react';
import HeaderPost from './Header';
import UsersPage from './UsersPage';
import FooterPost from './Footer';
import UsersPageCard from './UserPageCard'

class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.handleDisplayChange = this.handleDisplayChange.bind(this);
        this.state = {
            display: 'list'
        }
    }

    handleDisplayChange(newDisplay) {
        this.setState({display: newDisplay});
    }

    render() {
        let body;
        if (this.state.display === "list") {
            body = <UsersPage />;
        } else {
            body = <UsersPageCard />;
        }
        return (
            <>
                <HeaderPost display={this.state.display} onDisplayChange={this.handleDisplayChange} />
                {body}
                <FooterPost />
            </>
        )
    }
}

export default MainPage
