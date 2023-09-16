/* eslint-disable react/prop-types */
import './FeaturesCard.css';

const FeaturesCard = (props) => {
    console.log(props);
    return (
        <div className="features__card" >
            <img className="image" src={props.image} alt="Not Found" />
            <div className="heading">
                {props.heading}
            </div>
            <div className="content">
                <div>
                    {props.content}
                </div>
            </div>
        </div>
);
}
export default FeaturesCard;