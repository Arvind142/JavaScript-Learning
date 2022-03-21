import { Component } from "react";
import './Header.css'
import Sharingan from "./Sharingan";
class Header extends Component {
    render(props) {
        return (
            <nav className="navbar navbar-light nav-bar-element-header fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand">
                    <Sharingan path='images/Sharingan.png' /> &nbsp;|&nbsp;Arvind Choudhary
                    </a>
                </div>
            </nav>
        );
    }
}

export default Header;