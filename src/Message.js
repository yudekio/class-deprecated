import React from "react";
import PropTypes from "prop-types";

const Message = (props) => {
  return <div>{props.text}</div>;
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  //   //some specific JS primitive
  //   optionalArray: PropTypes.array,
  //   optionalBool: PropTypes.bool,
  //   optionalFunc: PropTypes.func,
  //   optionalNumber: PropTypes.number,
  //   optionalObject: PropTypes.object,
  //   optionalString: PropTypes.string,
  //   optionalSymbol: PropTypes.symbol,
  //   //if a value of a prop is necessary
  //   numberType: React.PropTypes.number.isRequired,
};

Message.defaultProps = {
  text: "Default value",
};

export default Message;
