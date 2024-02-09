import React from "react";

import { Img, Text } from "components";

const DashboardDesktopRowthisistitle = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
          <Text
            className="leading-[24.00px] max-w-[283px] md:max-w-full text-[15px] text-blue_gray-900_02"
            size="txtPoppinsRegular15"
          >
            {props?.meetingtitle}
          </Text>
          {!!props?.meetingduration ? (
            <Text
              className="text-gray-700 text-xs w-full"
              size="txtRobotoRegular12"
            >
              {props?.meetingduration}
            </Text>
          ) : null}
        </div>
        <Img
          className="h-6 w-[68px]"
          src="images/img_settings.svg"
          alt="settings_Three"
        />
      </div>
    </>
  );
};

DashboardDesktopRowthisistitle.defaultProps = {
  meetingtitle: "Short meeting with product designer from IT Departement",
};

export default DashboardDesktopRowthisistitle;
