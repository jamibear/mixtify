import "../styles/Hero.css";
import Auth from "./Auth";

const Hero = () => {
    return (
        <div className="hero">
            <h1 className="logo">mixtify</h1>
            <p className="subtitle">this is your top songs and artists in spotify</p>
            <Auth />
        </div>
    );
};

export default Hero;
