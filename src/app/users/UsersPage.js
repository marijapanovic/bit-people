import React from 'react';
import fetchUsers from '../../services/fetchData';

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
        if (this.props.display === "grid") {
            return (
                <ul className="row">
    
                    {this.state.users.map((user) => (
                        <li key={user.id} className={`card col s4 m3${user.genderAdditionalClass}`} >
                        
                            <div className="card-image">
                                <img src={user.picture.large} alt=""/>
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
            
        } else if(this.props.display === "list"){
            return (
                <>
                    <div className="row">
                        <div className="card">
                            <ul className="collection">
                                {this.state.users.map((user) => (
                                    <li key={user.id} className={`collection-item avatar${user.genderAdditionalClass}`}>
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
                </>
            )
        }
        else{
            return (
            <>
            <div>"Error"</div>
            </>
            )
        }
       
    }
}

export default UsersPage
