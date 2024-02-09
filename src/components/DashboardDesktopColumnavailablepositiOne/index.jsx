import React from "react";

import { Text } from "components";

const DashboardDesktopColumnavailablepositiOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-blue_gray-900 text-lg w-full"
          size="txtPoppinsMedium18Bluegray900"
        >
          {props?.availablepositiontext}
        </Text>
        <Text
          className="text-4xl sm:text-[32px] md:text-[34px] text-blue_gray-900 w-full"
          size="txtPoppinsMedium36"
        >
          {props?.twentyfourtext}
        </Text>
        <Text
          className="text-base text-red-A200 w-full"
          size="txtRobotoRegular16"
        >
          {props?.urgentlyneededtext}
        </Text>
      </div>
    </>
  );
};

DashboardDesktopColumnavailablepositiOne.defaultProps = {
  availablepositiontext: "Available Position",
  twentyfourtext: "24",
  urgentlyneededtext: "4 Urgently needed",
};

export default DashboardDesktopColumnavailablepositiOne;
