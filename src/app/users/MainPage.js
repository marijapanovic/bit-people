import React from 'react';
import Header from './Header';
import UsersPage from './UsersPage';
import FooterPost from './Footer';




class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.handleDisplayChange = this.handleDisplayChange.bind(this);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.state = {
            display: (localStorage.getItem('view') === null) ? 'list' : localStorage.getItem('view'),
            pageKey: new Date(),
        }
    }
    handleRefresh() {
        this.setState({
            pageKey: new Date()
        });
    }
    handleDisplayChange(newDisplay) {
        this.setState({
            display: newDisplay
        });
    }

    render() {
        return (
            <>
                <Header
                    display={this.state.display}
                    onDisplayChange={this.handleDisplayChange}
                    onRefresh={this.handleRefresh}
                />

                <UsersPage display={this.state.display}
                    key={this.state.pageKey}
                    onChange={this.handleInputChange}

                />

                <FooterPost />
            </>
        )
    }
}

export default MainPage
