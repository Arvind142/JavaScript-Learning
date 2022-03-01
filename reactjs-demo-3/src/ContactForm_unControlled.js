import React, { Component } from 'react';

// uncontrolled Component
class ContactForm_unControlled extends Component {
    addNewContact = (event) =>{
        console.log('Add new contact');
        event.preventDefault(); // so that page doesnt refresh
        const name = this.refs['name'].value;
        const email = this.refs.email.value;
        const phone = this.refs.phone.value;
        const picture = this.refs.picture.value;
        const p1 = [name,email,phone,picture];
        console.log(p1);
        this.refs.name.value="";
        this.refs.phone.value="";
        this.refs.email.value="";
        this.refs.picture.value="";
    }
    render() {
        return (
            <div>
                <h3>Add a new Contact - unControlled</h3>
                <form className='form' onSubmit={this.addNewContact}>
                    <div className="form-group row">
                        <label htmlFor="" className="control-label col-md-4">
                            Name
                        </label>
                        <div className="col-md-8">
                            <input type="text" ref ="name" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="control-label col-md-4">
                            Email
                        </label>
                        <div className="col-md-8">
                            <input type="text" ref="email" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="control-label col-md-4">
                            Phone-No
                        </label>
                        <div className="col-md-8">
                            <input type="text" ref="phone" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="control-label col-md-4">
                            Picture
                        </label>
                        <div className="col-md-8">
                            <input type="text" ref="picture" className="form-control" />
                        </div>
                    </div>
                    <button className="btn btn-primary">Save Data</button>
                </form>
            </div>
        );
    };
};

export default ContactForm_unControlled;