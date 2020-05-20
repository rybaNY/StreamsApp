import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetch_streams } from '../../actions';
import { Link } from 'react-router-dom'


class StreamList extends Component {
    componentDidMount() {
        this.props.fetch_streams();
    }

    renderAdminButtons = (stream) => {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className='ui button negative'>
                        Delete
                    </Link>
                </div>
            )
        }

    }

    renderStreams = () => {
        return this.props.currentStreams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdminButtons(stream)}
                    <i className="large middle aligned camera icon"></i>
                    <div className="content">
                        <div>{stream.title}</div>
                        <div>{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    renderCreateBtn = () => {
        if (this.props.isSignedIn) {
            return (
                <Link to="/streams/new">
                    <button className="ui button primary">Create Stream</button>
                </Link>
            )
        }
    }

    render() {
        return (
            <div>
                <h2 style={{ textAlign: 'center' }}>Streams</h2>
                <div className="ui celled list">
                    {this.renderStreams()}
                </div>
                <div style={{ textAlign: 'right' }}>{this.renderCreateBtn()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        currentStreams: Object.values(state.streams), // Object.values() - change object to array
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetch_streams })(StreamList);
