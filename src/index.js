import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BioSections from './sections.js';
import ResumePDF from './docs/Ryan_Jones_Resume.pdf';
import './index.css';

class HamburgerMenu extends Component {
    render() {
        let menuItems = this.props.items.map((i, key) => {
            if(i.type === 'image' || i.type === 'experience' || i.title === '') return '';
            return (
                <a key={key} href={'#' + i.id}><li className="menu-item"># {i.title}</li></a>
            );
        });

        return (
            <div className="hamburger-menu" onClick={() => {this.props.handleClick()}}>
                <ul className="no-style">
                    {menuItems}
                </ul>
            </div>
        );
    }
}

class Hamburger extends Component {
    render() {
        return (
            <div className={this.props.active ? 'x-icon' : 'nav-icon'} onClick={() => {this.props.handleClick()}}>
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

    handleClick() {
        this.setState({active : !this.state.active});
    }

    render() {
        let menu = this.state.active? (<HamburgerMenu handleClick={() => {this.handleClick()}} items={BioSections}/>) : ('');
        return (
            <div>
                <div className="navigation">
                     <div className="header-name">Ryan Jones</div>
                    <Hamburger handleClick={() => {this.handleClick()}} active={this.state.active}/>
                </div>
                {menu}
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

class Experience extends Component {
    render() {
        let exp = this.props.exp;
        return (
            <div className="section">
                <div className="exp-title">
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-company exp-location">{exp.location}</div>
                </div>
                <div className="exp-duration">{exp.position}</div>
                <div className="exp-duration">{exp.duration}</div>
                <div className="section-text">{exp.text}</div>
            </div>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <a 
                        className="link-text"
                        href="https://linkedin.com/in/ryanjonescode"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {'{'} LinkedIn {'}'}
                    </a>
                    <a 
                        className="link-text"
                        href="https://github.com/leftshiftjones"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {'{'} Github {'}'}
                    </a>
                    <a 
                        className="link-text"
                        href="https://github.com/leftshiftjones/portfolio"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {'{'} Portfolio {'}'}
                    </a>
                    <a 
                        className="link-text"
                        href={ResumePDF}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {'{'} Resume {'}'}
                    </a>
                </div>
                <div className="footer">Site built using React | Hosted by Github</div>
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
            } else if(s.type === 'experience') {
                return (
                    <Experience key={key} exp={s} />
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