import React from "react";

import { Button, Img, Text } from "components";

const DashboardDesktopTalentrequest = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 items-start justify-start w-[149px] md:w-full">
          <div className="flex flex-col gap-[22px] items-start justify-start w-[149px]">
            <Text
              className="text-blue_gray-900 text-lg w-auto"
              size="txtPoppinsMedium18Bluegray900"
            >
              {props?.totalemployees}
            </Text>
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-blue_gray-900 w-full"
              size="txtPoppinsMedium48"
            >
              {props?.twohundredsixteen}
            </Text>
          </div>
          <div className="flex flex-col gap-1 items-start justify-start w-[147px]">
            <Text
              className="text-gray-700 text-xs w-full"
              size="txtRobotoRegular12"
            >
              {props?.p120men}
            </Text>
            <Text
              className="text-gray-700 text-xs w-full"
              size="txtRobotoRegular12"
            >
              {props?.p96women}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-5 h-[123px] md:h-auto items-end justify-start w-auto">
          <div className="md:h-[69px] h-[79px] relative w-full">
            <div className="h-[79px] m-auto w-full">
              <Text
                className="mb-[-4.27px] ml-[42px] text-red-A200 text-xs z-[1]"
                size="txtRubikMedium12"
              >
                {props?.two}
              </Text>
              <div className="h-[69px] mt-auto mx-auto w-full">
                <Img
                  className="absolute h-[41px] inset-x-[0] mx-auto top-[0]"
                  src="images/img_vector2.svg"
                  alt="vectorTwo"
                />
                <Img
                  className="absolute h-[69px] inset-[0] justify-center m-auto object-cover"
                  src="images/img_vector3.png"
                  alt="vectorThree"
                />
              </div>
            </div>
            <Img
              className="absolute h-4 left-[39%] top-[14%] w-4"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </div>
          <Button
            className="!text-blue_gray-900_02 cursor-pointer font-roboto min-w-[107px] text-center text-xs"
            shape="round"
            color="deep_orange_50"
            size="xs"
            variant="fill"
          >
            {props?.framefiftyone}
          </Button>
        </div>
      </div>
    </>
  );
};

DashboardDesktopTalentrequest.defaultProps = {
  totalemployees: "Total Employees",
  twohundredsixteen: "216",
  p120men: "120 Men",
  p96women: "96 Women",
  two: "+2%",
  framefiftyone: "+2% Past month",
};

export default DashboardDesktopTalentrequest;
