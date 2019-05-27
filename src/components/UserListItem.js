import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import '../styles/user-list-item.scss';
import { Link } from "react-router-dom";

export class UserListItem extends Component {
    

    render() {
        return (
            <div className="user-li">
                <Link to={`/conversation/${this.props.name}`}><UserProfile name={this.props.name} status={this.props.status}></UserProfile></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListItem)
