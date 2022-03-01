import React, { Component } from 'react';

// uncontrolled Component
class ContactForm_Validation extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        picture: ''
    }
    tfHandler = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    render() {
        return (

            <div>
                <div className="col">
                    <h3>Add a new Contact - Form Validation Demo</h3>
                    <form className='form'>
                        <div className="form-group row">
                            <label htmlFor="" className="control-label col-md-2">
                                Name
                            </label>
                            <div className="col-md-2">
                                <input value={this.state.name} onChange={this.tfHandler} name="name" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="control-label col-md-2">
                                Email
                            </label>
                            <div className="col-md-2">
                                <input value={this.state.email} onChange={this.tfHandler} name="email" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="control-label col-md-2">
                                Phone No.
                            </label>
                            <div className="col-md-2">
                                <input value={this.state.phone} onChange={this.tfHandler} name="phone" type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="control-label col-md-2">
                                Picture
                            </label>
                            <div className="col-md-2">
                                <input value={this.state.picture} onChange={this.tfHandler} name="picture" type="text" className="form-control" />
                            </div>
                        </div>
                        <button className="btn btn-primary">Save Data</button>
                    </form>
                </div>
                <div className="col">
                    <p>{JSON.stringify(this.state)}</p>
                </div>

            </div>

        );
    };
};

export default ContactForm_Validation;