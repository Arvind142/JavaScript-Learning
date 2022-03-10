import { Component } from "react";

class Header extends Component {
    render(props) {
        return (
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a className="alert" href="https://www.linkedin.com/in/arvind-choudhary-0b0a82171/" target="_blank"><img src="images/linkedin.gif" className="rounded-circle img-fluid" alt="linkedIn" width="30" height="30" /></a></li>
                        <li className="nav-item"><a className="alert" href="mailto:arvindchoudhary142@yahoo.in"><img src="images/mailbox.gif" className="rounded-circle img-fluid" alt="mailBox" width="30" height="30" /> </a></li>
                        <li className="nav-item"><a className="alert" href="https://github.com/Arvind142" target="_blank"><img src="images/github.gif" className="rounded-circle img-fluid" alt="github" width="30" height="30" />
                        </a></li> 
                        <li className="nav-item"><a className="alert" href="https://arvind-choudhary.medium.com/" target="_blank"><img src="images/medium.png" className="rounded-circle img-fluid" alt="medium" width="30" height="30" />
                        </a></li>
                    </ul>
                    <p className="text-center text-muted"> - Arvind Choudhary - </p>
                </footer>
        );
    }
}

export default Header;