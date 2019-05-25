import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import '../styles/user-list-item.scss';
import { Link } from "react-router-dom";

export class UserListItem extends Component {
    

    render() {
        return (
            <div className="user-li">
                <Link to={`/conversation/${this.props.id}`}><UserProfile name={this.props.name}></UserProfile></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListItem)
