import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import UserProfile from './UserProfile';
import '../styles/user-list-item.scss';

export class UserListItem extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="user-li">
                <UserProfile></UserProfile>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListItem)
