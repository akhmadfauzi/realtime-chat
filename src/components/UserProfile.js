import React, { Component } from 'react';
import { connect } from 'react-redux';

export class UserProfile extends Component {

    render() {
        return (
            <div className="profile">
                <div className="profile__image"><img src="http://placekitten.com/32/32" alt="user" /></div>
                <div className="profile__detail">
                    <div className="detail">
                        <div className="detail__name">{this.props.name}</div>
                        <div className="detail__status">online</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
