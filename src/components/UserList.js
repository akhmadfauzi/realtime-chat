import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UserListItem } from './UserListItem';
import '../styles/user-list.scss';
export class UserList extends Component {
    static propTypes = {
        prop: PropTypes
    }

    userList(){
        let users = [];
        for (let i = 0; i <= 10; i++) {
            users = [...users, (<UserListItem></UserListItem>)];
        }

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
