import React from 'react';
import { connect } from 'react-redux';
import { fetch_stream, edit_stream } from '../../actions';
import StreamForm from './StreamForm'
import _ from 'lodash'


class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetch_stream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        console.log(formValues)
        this.props.edit_stream(this.props.match.params.id, formValues);
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h2>Edit a stream</h2>
                <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit} />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetch_stream, edit_stream })(StreamEdit);