import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserListItem } from './UserListItem';
import '../styles/user-list.scss';
// import firebase from 'firebase/app';
import { fetchUsers } from '../redux/actions';

const loggedUser = window.sessionStorage.getItem('loggedUser');
const mapStateToProps = (state) => ({
    users: state.users ? state.users : {},
    loggedUser: state.user ? state.user : (loggedUser ? JSON.parse(loggedUser) : {})
})

const mapDispatchToProps = {
    fetchUsers
}

class UserList extends Component {
    constructor(props){
        super(props)
        this.props.fetchUsers();
    }
    // componentDidMount(){
        
    // }
    userList() {
        let profile = [];
        const users = this.props.users;
        const loggedUser = this.props.loggedUser;
        for (const key in users) {
            if(loggedUser.username !== users[key].username){
                profile = [...profile,(<UserListItem key={users[key].id} id={users[key].id} name={users[key].username} status={users[key].online}></UserListItem>)]
            }
        }
        return profile;
    }

    render() {
        console.log(this.props.users);
        const users = this.props.users  ? this.userList() : 'loading';
        return (
            <div className="user-list">
                {users}
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
