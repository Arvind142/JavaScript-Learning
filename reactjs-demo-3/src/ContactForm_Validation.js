import React, { Component } from 'react';

// uncontrolled Component
class ContactForm_Validation extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        picture: '',
        formErrors: {
            name: 'Name is required',
            email: 'Email is required',
            phone: 'phoneNo. is required',
        },
        errorMessages: null
    }
    tfHandler = (evt) => {
        let { name, value } = evt.target;
        let { formErrors } = this.state;

        switch (name) {
            case 'name':
                if (!value || value.length == 0) {
                    formErrors.name = 'Name is required';
                }
                else if (value.length < 3 || value.length > 20) {
                    formErrors.name = 'Name must be atleast 3 characters long';
                }
                else {
                    formErrors.name = '';
                }
                break;
            case 'email':
                if (!value || value.length == 0) {
                    formErrors.email = 'Email is required';
                }
                else if (!value.match(/^([A-z][A-z0-9]+)@([A-z]+)(\.)(com|in|co\.in|live)$/)) {
                    formErrors.email = 'Email must be atleast 8 characters long and should end with wither com/in/co.in/live';
                }
                else {
                    formErrors.email = '';

                }
                break;
            case 'phone':
                if (!value || value.length == 0) {
                    formErrors.phone = 'phone is required';
                }
                else if (!value.match(/^[0-9]{10,12}$/)) {
                    formErrors.phone = 'not a valid phone number';
                }
                else {
                    formErrors.phone = '';
                }
                break;
            default:
                break;
        }

        this.setState({ [name]: value ,formErrors});
    }
    validateForm = (formErrors) => {
        let valid = true;
        Object.values(formErrors).forEach(err => valid =  valid && err.length>0);
        return valid;
    }
    submitHandler = (evt) => {
        let formErrors=this.state.formErrors;
        evt.preventDefault();
        console.log(this.state);
        if(this.validateForm(formErrors)){
            alert('All iZZ well');
        }
        else{
            alert('Form is not valid');
            let errmsgs=Object.values(formErrors).map((err,index) => err.length==0?null:<li key={index}>{err}</li>);
            this.setState({errorMessages:errmsgs});
        }
    }
    render() {
        return (
            <div className="row">
                <div className="col">
                    <h3>Add a new Contact - Form Validation</h3>
                    <form className='form' onSubmit={this.submitHandler}>
                        <div className="form-group row">
                            <label htmlFor="" className="control-label col-md-4">
                                Name
                            </label>
                            <div className="col-md-8">
                                <input value={this.state.name} onChange={this.tfHandler} name="name" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="control-label col-md-4">
                                Email
                            </label>
                            <div className="col-md-8">
                                <input value={this.state.email} onChange={this.tfHandler} name="email" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="control-label col-md-4">
                                Phone No.
                            </label>
                            <div className="col-md-8">
                                <input value={this.state.phone} onChange={this.tfHandler} name="phone" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="control-label col-md-4">
                                Picture
                            </label>
                            <div className="col-md-8">
                                <input value={this.state.picture} onChange={this.tfHandler} name="picture" type="text" className="form-control" />
                            </div>
                        </div>
                        <button className="btn btn-primary">Save Data</button>
                    </form>
                    <ul>{this.state.errorMessages}</ul>
                </div>
                <div className="col">
                    <h3>Current State</h3>
                    <pre>{JSON.stringify(this.state, null, 3)}</pre>
                </div>
            </div>

        );
    };
};

export default ContactForm_Validation;