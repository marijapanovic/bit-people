import React from 'react';
import fetchUsers from '../../services/fetchData';
//import Users from './../../entities/users';

class UsersPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetchUsers()
            .then((users) => {
                this.setState({
                    users: users
                })
            })
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="card">
                        <ul className="collection">
                            {this.state.users.map((user) => (
                                <li key={user.id} className="collection-item avatar">
                                    <img src={user.picture.medium} alt="" className="circle" />
                                    <p className="title">{user.name}</p>
                                    <p><i className="fas fa-envelope"></i>  {user.email}</p>
                                    <p><i className="fas fa-birthday-cake"></i>  {user.dateOfBirth.toDateString()}</p>
                                </li>
                            )
                            )}
                        </ul>
                    </div>
                </div>

                {/*             
                <div>
                    <div>

                        <ul className="collection">

                            <li key={this.state.id} className="collection-item avatar">
                                <img src={this.state.picture} alt="" className="circle" />
                                <p className="title">{this.state.name}</p>
                                <p>{this.state.email}</p>
                                <p>{this.state.dateOfBirth}</p>
                            </li>

                        </ul>
                    </div>
                </div> */}
            </>
        )
    }
}

export default UsersPage
