import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded" };
const variants = {
  fill: {
    red_A200: "bg-red-A200 text-white-A700",
    deep_orange_50: "bg-deep_orange-50",
  },
};
const sizes = { xs: "p-1", sm: "p-2" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["red_A200", "deep_orange_50"]),
};

export { Button };
