import React from "react";

const sizeClasses = {
  txtRobotoMedium12WhiteA70090: "font-medium font-roboto",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtRobotoRegular12: "font-normal font-roboto",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsMedium36: "font-medium font-poppins",
  txtRobotoRegular14: "font-normal font-roboto",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRubikMedium12: "font-medium font-rubik",
  txtPoppinsRegular16Bluegray90002: "font-normal font-poppins",
  txtPoppinsMedium18Bluegray900: "font-medium font-poppins",
  txtRobotoMedium12: "font-medium font-roboto",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsMedium48: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
