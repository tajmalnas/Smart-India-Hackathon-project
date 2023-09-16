import FeaturesCard from "../FeaturesCard/FeaturesCard";
import "./Features.css";

const data = [
    {
        id:1,
        image: "/assets/images 1.png",
        heading: "Demographic Dropout",
        content: "Explore our 'Demographic Dropout Awareness' feature, dedicated to addressing disparities in education"
    },
    {
        id:2,
        image: "/assets/5464420_2853472 1.png",
        heading: "Multi Level Filtering",
        content: "Introducing Multi-Level Filtering: Our website's advanced feature allows you to refine search results and information with precision. Easily navigate and find what matters most to you, streamlining your online experience."
    },
    {
        id:3,
        image: "/assets/11668515_20943614 1.png",
        heading: "Time Series Analysis",
        content: "Unlock the power of Time Series Analysis: Dive deep into historical data trends, identify patterns, and make informed decisions based on temporal insights. Explore our tools to harness the value of time-varying data."
    },
    {
        id:4,
        image: "/assets/10780348_19198985 1.png",
        heading: "Comparative Analysis",
        content: "Conduct Comparative Analysis effortlessly: Compare, contrast, and gain valuable insights by juxtaposing data sets, products, or options. Empower your decision-making with our intuitive comparative analysis tools"
    },
    {
        id:5,
        image: "/assets/10783070_19198754 1.png",
        heading: "Dropout awareness",
        content: "Raise Dropout Awareness: Join our initiative to shine a light on educational disparities and empower individuals with the knowledge and resources needed to combat the issue. Together, we can create a more equitable future."
    },
    {
        id:6,
        image: "/assets/12334781_4936930 1.png",
        heading: "Predictive Analysis",
        content: "Experience the Power of Predictive Analysis: Uncover hidden trends, forecast future outcomes, and make data-driven decisions with confidence. Our predictive analysis tools help you stay ahead of the curve."
    }
];

const Features = () => {
    return (
        <div className="features">
            <div className="title">Our Features</div>
            <div className="cards__box">
                {data.map((item) => {
                    return (
                        <FeaturesCard key={item.id} image={item.image} heading={item.heading} content={item.content} />
                    );
                })}
            </div>
        </div>
    );
}

export default Features;