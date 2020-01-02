import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BioSections from './sections.js';
import ResumePDF from './docs/Ryan_Jones_Resume.pdf';

class HamburgerMenu extends Component {
    render() {
        return (
            <div></div>
        );
    }
}

class Hamburger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    toggleClass() {
        const currentState = this.state.active;
        this.setState({active: !currentState});
    }

    render() {
        return (
            <div 
                className={this.state.active ? 'nav-icon is-active' : 'nav-icon'}
                onClick={() => { this.toggleClass() }}
            >
                <div></div>
            </div>
        );
    }
}

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active : false
        };
    }

    render() {
        return (
            <div>
                <div className="navigation">
                     <div className="header-name">Ryan Jones</div>
                    {/* <Hamburger /> */}
                </div>
                {/* <HamburgerMenu active={this.state.active}/> */}
            </div>
        );
    }
}

class Image extends Component {
    render() {
        return (
            <div className="no-style">
                <img 
                    className="site-image" 
                    src={this.props.src} 
                    alt={this.props.alt}
                    ></img>
                <div className="caption">
                    {this.props.caption}
                </div>
            </div>
        );
    }
}

class Section extends Component {
    render() {
        return (
            <div className="section" id={this.props.data.id}>
                <h1 className="section-title">{this.props.data.title}</h1>
                <div className="section-text" dangerouslySetInnerHTML={{__html: this.props.data.text}}></div>
            </div>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a 
                    className="link-text"
                    href="https://linkedin.com/in/ryanjonescode"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    LinkedIn
                </a>
                <a 
                    className="link-text"
                    href="https://github.com/leftshiftjones"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Github
                </a>
                <a 
                    className="link-text"
                    href="https://github.com/leftshiftjones/portfolio"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Portfolio
                </a>
                <a 
                    className="link-text"
                    href={ResumePDF}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Resume
                </a>
            </div>
        );
    }
}

class Site extends Component {
    render() {
        let sections = BioSections.map((s, key) => {
            if(s.type === 'image') {
                return (
                    <Image key={key} src={s.src} alt={s.alt} caption={s.caption} />
                );
            }
            return (
                <Section key={key} data={s} />
            );
        });

        return(
            <div>
                <NavBar/>
                {sections}
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Site />, document.getElementById('root'));