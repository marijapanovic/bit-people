
import React from 'react';
import fetchUsers from '../../services/fetchData';
import HeaderPost from '../users/Header';
//import Users from './../../entities/users';

class UsersPageCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            listItems: localStorage.getItem('state')
        }
    }

    handlerChange() {
        // console.log("this.state.listItems");
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
            <ul className="row">

                {this.state.users.map((user) => (
                    <li key={user.id} className="card col s4 m3">

                        <div className="card-image">
                            <img src={user.picture.large} />
                            <span className="card-title">{user.name}</span>
                        </div>

                        <div className="card-content">
                            <p>{user.email}</p>
                            <p> Birth date: {user.dateOfBirth.getDate()}.{user.dateOfBirth.getMonth() + 1}.{user.dateOfBirth.getFullYear()}.</p>
                        </div>

                    </li>
                )
                )}
            </ul>
        )
    }
}

export default UsersPageCard;