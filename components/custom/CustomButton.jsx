"use client";

import PropTypes from "prop-types";

const CustomButton = ({title, handleClick, btnType, btnStyles, btnTitleStyle}) => {
  return (
    <button
    disabled={false}
    onClick={handleClick}
    type={btnType}
    className={btnStyles}
    >
        <span className={btnTitleStyle}>{title}</span>
    </button>
  )
}

CustomButton.propTypes = {
    title: PropTypes.node.isRequired,
    handleClick: PropTypes.func,
    btnType: PropTypes.string,
    btnStyles: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    btnTitleStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default CustomButton;
