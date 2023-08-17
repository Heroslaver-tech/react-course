import Proptypes from "prop-types";
import { FiCheckCircle } from "react-icons/fi";

export default function Button({ background, width, height, text }) {
    //props: can be {attribute} or "props", to use like props.attribute
    return (
        <button
            style={{ background: background, width: width, height: height}}
        >
            <FiCheckCircle style={{paddingRight:'10px'}}/>
            {text}
        </button>
    );
}

//Help to set the correct attribute format in the component Button
Button.prototype = {
    background: Proptypes.string.isRequired,
    width: Proptypes.string.isRequired,
    height: Proptypes.string.isRequired,
    text: Proptypes.string,
};

//Set default values to attributes
Button.defaultProps = {
    text: "no tengo texto",
};
