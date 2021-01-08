import './styles.css';
import { ReactComponent as Youtube } from './youtube.svg'
import { ReactComponent as Instagram } from './instagram.svg'
import { ReactComponent as Linkedin } from './linkedin.svg'
function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="http://" target="new">
                    <Youtube />
                </a>
                <a href="http://" target="new">
                    <Linkedin />                    
                </a>
                <a href="http://" target="new">
                    <Instagram />
                </a>
            </div>
        </footer>
    )

}

export default Footer;