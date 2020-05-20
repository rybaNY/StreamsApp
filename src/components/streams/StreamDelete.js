import React, { Component } from 'react';
import { fetch_stream, delete_stream } from '../../actions'
import Modal from '../../modal';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class StreamDelete extends Component {
    componentDidMount() {
        this.props.fetch_stream(this.props.match.params.id)
    }

    renderActions() {
        return (
            <>
                <button className='ui button negative' onClick={() => this.props.delete_stream(this.props.match.params.id)}>Delete</button>
                <Link to='/' className="ui cancel button">Cancel</Link>
            </>
        )
    }

    renderContent = () => {
        if (!this.props.stream) {
            return `Are you sure you want to delete stream`
        }
        return `Are you sure you want to delete stream: '${this.props.stream.title}'`
    }

    render() {
        return (
            <>
                <Modal header='Delete Stream' content={this.renderContent()} renderActions={this.renderActions()} />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetch_stream, delete_stream })(StreamDelete);
