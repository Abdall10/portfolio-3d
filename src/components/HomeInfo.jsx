import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} alt="arrow" className="w4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi I am <span className="font-semibold mx-2 text-white">Abdallah </span>🙋‍♂️
            <br />
            I am a <span className="font-semibold">Software Engineer .</span>
        </h1>
    ),
    2: (
        <InfoBox
        text="Worked with many companies and picked up many skills along the way "
        link="/about"
        btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
        text="Worked with many companies and picked up many skills along the way "
        link="/projects"
        btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
        text="Worked with many companies and picked up many skills along the way "
        link="/contact"
        btnText="Let's talk"
        />
    ),
}



const HomeInfo = ({ currentStage }) => {
    console.log(currentStage); // Debug: Log the value

  return renderContent[currentStage] || null;
}

export default HomeInfo


