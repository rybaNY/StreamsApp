import React from 'react';
import { connect } from 'react-redux';
import { create_stream } from '../../actions';
import StreamForm from './StreamForm'


class StreamCreate extends React.Component {
    onSubmit = (formValues) => {
        this.props.create_stream(formValues);
    }

    render() {
        //console.log(this.props)
        return (
            <div>
                <h2>Create a stream</h2>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { create_stream })(StreamCreate);