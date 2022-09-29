import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder25: "rounded-radius25",
  RoundedBorder4: "rounded-radius4",
  icbCircleBorder14: "rounded-radius14",
  icbCircleBorder44: "rounded-radius44",
};
const variants = {
  Outline: "bg-white_A700_33 text-indigo_50",
  OutlineBluegray400:
    "border-bluegray_400 border-bw15 border-solid text-gray_50",
  FillBlue400: "bg-blue_400 text-white_A700",
  OutlineIndigo90020: "bg-teal_900 shadow-bs1 text-white_A700",
  icbFillWhiteA700: "bg-white_A700",
  icbOutlineBlack90014: "bg-white_A700 shadow-bs",
};
const sizes = {
  sm: "lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
  md: "lg:p-[14px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
  lg: "lg:p-[21px] xl:p-[24px] p-[27px] 3xl:p-[32px]",
  smIcn: "p-[4px]",
  mdIcn: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  lgIcn: "lg:p-[23px] xl:p-[26px] p-[30px] 3xl:p-[36px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
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
  shape: PropTypes.oneOf([
    "CircleBorder25",
    "RoundedBorder4",
    "icbCircleBorder14",
    "icbCircleBorder44",
  ]),
  variant: PropTypes.oneOf([
    "Outline",
    "OutlineBluegray400",
    "FillBlue400",
    "OutlineIndigo90020",
    "icbFillWhiteA700",
    "icbOutlineBlack90014",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn", "lgIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "icbCircleBorder14",
  variant: "icbFillWhiteA700",
  size: "sm",
};

export { Button };
