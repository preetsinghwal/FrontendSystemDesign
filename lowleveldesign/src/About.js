import { LANG } from "./utils/langConstants";
import './App.css';

const About = ({lang}) => {

    const data = LANG[lang];
    console.log(data);
    return (
        <div className="about-us">
            <div className="title">{data.title1}</div>
            <p>{data.desc}</p>
            <div className="title">{data.title2}</div>
            <p>{data.desc}</p>
            <div className="title">{data.title3}</div>
            <p>{data.desc}</p>
        </div>
    )
}

export default About;