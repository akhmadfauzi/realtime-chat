import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserListItem } from './UserListItem';
import '../styles/user-list.scss';
// import firebase from 'firebase/app';
import {fetchUsers} from '../redux/actions';

export class UserList extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    
    componentDidMount(){
        console.log(this.props);
    }
    componentDidUpdate(){
        console.log(this.props);
    }
    userList() {
        // let users = [];
        

        // this.props.fetchUsers();

        // let users = ["Barry Fleming","Ikra Carrillo","Leanna Orr","Hammad Garza","Zarah Burrows","Harlee Gallagher","Bert Brown","Felicity Herrera","Hailie Wise","Andreas Wilkinson"];
        // users = users.map((v,i)=>{
        //     return (<UserListItem key={i} id={i} name={v}></UserListItem>)
        // })

        // return users;
    }

    render() {
        const users = this.userList();
        return (
            <div className="user-list">
                {users}
            </div>
        )
    }
}

// const mapStateToProps = (state) => ({
//     "users":state.users
// })

// const mapDispatchToProps = {
//     fetchUsers
// }

export default connect(null, {
    fetchUsers
})(UserList)
