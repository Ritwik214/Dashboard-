import React from "react";

import { Img, Text } from "components";

const DashboardDesktopRowoutingschedule = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
          <Text
            className="text-base text-blue_gray-900_02 w-full"
            size="txtPoppinsRegular16Bluegray90002"
          >
            {props?.outingscheduletext}
          </Text>
          <Text
            className="text-gray-700 text-xs w-full"
            size="txtRobotoRegular12"
          >
            {props?.durationtext}
          </Text>
        </div>
        <Img
          className="h-6 w-[68px]"
          alt="television"
          src={props?.televisionimage}
        />
      </div>
    </>
  );
};

DashboardDesktopRowoutingschedule.defaultProps = {
  outingscheduletext: "Outing schedule for every departement",
  durationtext: "5 Minutes ago",
  televisionimage: "images/img_television.svg",
};

export default DashboardDesktopRowoutingschedule;
