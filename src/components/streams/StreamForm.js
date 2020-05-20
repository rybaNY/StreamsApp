import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {

    renderInput({ input, label, meta }) {
        const classError = meta.error && meta.touched ? "field error" : "field"
        return (
            <div className={classError}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                <div className="ui error message">{meta.touched ? meta.error : null}</div>
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="title" component={this.renderInput} label="Enter title" />
                    <Field name="description" component={this.renderInput} label="Enter description" />
                    <button className="ui primary button">Submit</button>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = "Please enter a title"
    }
    if (!formValues.description) {
        errors.description = "Please enter a description"
    }
    return errors
}

export default reduxForm({ form: 'streamForm', validate })(StreamForm);


