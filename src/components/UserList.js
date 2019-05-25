import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserListItem } from './UserListItem';
import '../styles/user-list.scss';
export class UserList extends Component {
    

    userList(){
        let users = ["Barry Fleming","Ikra Carrillo","Leanna Orr","Hammad Garza","Zarah Burrows","Harlee Gallagher","Bert Brown","Felicity Herrera","Hailie Wise","Andreas Wilkinson"];
        users = users.map((v,i)=>{
            return (<UserListItem key={i} id={i} name={v}></UserListItem>)
        })

        return users;
    }

    render() {
        const users = this.userList()
        return (
            <div className="user-list">
                {users}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
