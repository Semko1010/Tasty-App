import fb from "../../img/face.png"
import yt from "../../img/youtube.png"
import insta from "../../img/insta.png"

const Footer = () => {
    return (
        <section className="Footer">
            <a href="https://www.instagram.de"><img src={insta} target="_blank" alt="insta" /></a>
            <a href="https://www.youtube.de"><img src={yt} target="_blank" alt="yt" /></a>
            <a href="https://www.facebook.de"><img src={fb} target="_blank" alt="fb" /></a>
        </section>
    );
}

export default Footer;