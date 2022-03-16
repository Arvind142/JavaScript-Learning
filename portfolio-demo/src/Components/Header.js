import { Component } from "react";

class Header extends Component {
    render(props) {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src="favicon.ico" alt="" width="30" height="30" className="d-inline-block align-text-top" />
                        &nbsp;|&nbsp;Arvind Choudhary
                    </a>
                </div>
            </nav>
        );
    }
}

export default Header;