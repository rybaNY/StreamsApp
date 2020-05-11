import React, { Component } from 'react';
import { connect } from 'react-redux'
import { sign_in, sign_out } from '../actions'

class Auth extends Component {
    componentDidMount() {
        window.gapi.load('client: auth2', () => {
            window.gapi.client.init({
                clientId: '299608931165-rf7tddgprnb46gqusbhal79dk07aopkn.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })

    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.sign_in(this.auth.currentUser.get().getId());
        } else {
            this.props.sign_out()
        }
    }

    signInClick = () => {
        this.auth.signIn()
    }


    signOutClick = () => {
        this.auth.signOut()
    }

    renderLoginButton = () => {
        if (!this.props.isSignedIn) {
            return (
                <button onClick={this.signInClick} className='ui google button'>
                    <i className="google icon"></i>
                    Sign in with google
                </button >
            )
        } if (this.props.isSignedIn) {
            return (
                <button onClick={this.signOutClick} className='ui google button'>
                    <i className="google icon"></i>
                    Sign out
                </button >
            )
        }
        else {
            return null
        }
    }

    render() {
        return (
            <div>
                {this.renderLoginButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { sign_in, sign_out })(Auth);
