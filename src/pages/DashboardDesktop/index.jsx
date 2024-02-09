import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Slider,
  Text,
} from "components";
import DashboardDesktopRowoutingschedule from "components/DashboardDesktopRowoutingschedule";
import DashboardDesktopRowthisistitle from "components/DashboardDesktopRowthisistitle";

const durationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const durationTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const admirraJohnOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardDesktopPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images\dashboard (1).png"
          alt="icdashboard"
        />
      ),
      label: "Dashboard",
      href: "/dashboarddesktop",
      active: window.location.pathname === "/dashboarddesktop",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_icrecruitment.svg"
          alt="icrecruitment"
        />
      ),
      label: "Recruitment",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_iccalendar.svg"
          alt="iccalendar"
        />
      ),
      label: "Schedule",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_icemployee.svg"
          alt="icemployee"
        />
      ),
      label: "Employee",
    },
    {
      icon: (
        <Img
          className="h-6 my-0.5 w-6"
          src="images/img_icdepartment.svg"
          alt="icdepartment"
        />
      ),
      label: "Department",
    },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-roboto sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[242px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
        >
          <Img
            className="h-[62px] mt-5 mx-auto w-[169px]"
            src="images/img_frame88.svg"
            alt="frameEightyEight"
          />
          <Menu
            menuItemStyles={{
              button: {
                padding: "13px 13px 13px 29px",
                gap: "24px",
                color: "#686868",
                fontSize: "16px",
                [`&:hover, &.ps-active`]: {
                  color: "#ff5151",
                  fontWeight: "500 !important",
                },
              },
            }}
            className="flex flex-col items-center justify-start mb-[272px] mt-[50px] w-full"
          >
            <div className="flex flex-col gap-[11px] items-center justify-start w-full">
              <Text
                className="text-gray-700_87 text-xs w-auto"
                size="txtRobotoMedium12"
              >
                MAIN MENU
              </Text>
              <div className="flex flex-col font-poppins items-center justify-start w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[11px] items-center justify-start mt-[50px] w-full">
              <Text
                className="text-gray-700_87 text-xs w-auto"
                size="txtRobotoMedium12"
              >
                OTHER
              </Text>
              <div className="flex flex-col font-poppins items-center justify-start w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-6 my-0.5 w-6"
                      src="images/img_icsupport.svg"
                      alt="icsupport"
                    />
                  }
                >
                  <Text className="flex-1 mt-1 w-auto">Support</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-6 my-0.5 w-6"
                      src="images/img_icsettings.svg"
                      alt="icsettings"
                    />
                  }
                >
                  <Text className="flex-1 mt-1 w-auto">Settings</Text>
                </MenuItem>
              </div>
            </div>
          </Menu>
        </Sidebar>
        <div className="flex-1 font-poppins md:h-[478px] h-[900px] md:px-5 relative w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col m-auto sm:pr-5 pr-[34px] py-[34px] w-full"
            style={{ backgroundImage: "url('images/img_group1.svg')" }}
          >
            <div className="mt-[68px] overflow-x-auto w-full">
              <div className="md:h-[391px] h-[410px] relative w-full">
                <div className="absolute flex flex-col items-center justify-start left-[21%] max-w-screen-sm pr-2.5 py-2.5 top-[0] w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto text-left"
                    size="txtPoppinsMedium24"
                  >
                    Dashboard
                  </Text>
                </div>
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 4 },
                    1050: { items: 7 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[1.00] absolute"
                  ref={sliderRef}
                  className="absolute bottom-[0] inset-x-[0] mx-auto w-full"
                  items={[...Array(21)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="bg-blue_gray-900 flex flex-col items-center justify-start mx-2.5 pb-[26px] rounded-[10px]">
                        <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                          <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start sm:pl-5 pl-6 pr-2.5 py-2.5 rounded-tl-[10px] rounded-tr-[10px] w-[427px] sm:w-full">
                            <Text
                              className="text-lg text-white-A700 w-auto"
                              size="txtPoppinsMedium18"
                            >
                              Recently Activity
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[26px] items-start justify-start w-[87%] md:w-full">
                            <div className="flex flex-col gap-1.5 items-start justify-start w-[340px]">
                              <Text
                                className="text-white-A700_90 text-xs w-full"
                                size="txtRobotoMedium12WhiteA70090"
                              >
                                10.40 AM, Fri 10 Sept 2021
                              </Text>
                              <Text
                                className="text-lg text-white-A700 w-full"
                                size="txtPoppinsMedium18"
                              >
                                You Posted a New Job
                              </Text>
                              <Text
                                className="leading-[20.00px] max-w-[340px] md:max-w-full text-sm text-white-A700_a2"
                                size="txtRobotoRegular14"
                              >
                                Kindly check the requirements and terms of work
                                and make sure everything is right.
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[38px] items-center justify-between w-[369px]">
                              <Text
                                className="text-sm text-white-A700 w-auto"
                                size="txtPoppinsRegular14"
                              >
                                Today you makes 12 Activity
                              </Text>
                              <Button
                                className="cursor-pointer font-medium h-[38px] leading-[normal] min-w-[139px] text-center text-sm"
                                shape="round"
                                color="red_A200"
                                size="sm"
                                variant="fill"
                              >
                                See All Activity
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-2 items-center justify-end ml-[51px] mt-[-NaNpx] pt-4 rounded-[12px] w-[54%] z-[1]">
              <div className="flex flex-col gap-4 items-center justify-start w-[94%] md:w-full">
                <div className="flex flex-row gap-[26px] items-start justify-between w-[598px] md:w-full">
                  <Text
                    className="text-blue_gray-900 text-lg w-auto"
                    size="txtPoppinsMedium18Bluegray900"
                  >
                    Announcement
                  </Text>
                  <SelectBox
                    className="border border-gray-200 border-solid font-roboto text-left text-xs w-1/4 sm:w-full"
                    placeholderClassName="text-gray-700"
                    indicator={
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="duration"
                    options={durationOptionsList}
                    isSearchable={false}
                    placeholder="Today, 13 Sep 2021"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                </div>
                <List
                  className="flex flex-col gap-2 items-center w-full"
                  orientation="vertical"
                >
                  <DashboardDesktopRowoutingschedule className="bg-gray-50 border border-gray-300 border-solid flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[95px] items-center justify-start px-4 py-3 rounded-md w-[600px] md:w-full" />
                  <DashboardDesktopRowoutingschedule
                    className="bg-gray-50 border border-gray-300 border-solid flex md:flex-1 sm:flex-col flex-row sm:gap-10 gap-[95px] items-center justify-start px-4 py-3 rounded-md w-[600px] md:w-full"
                    outingscheduletext="Meeting HR Department"
                    durationtext="Yesterday, 12:30 PM"
                    televisionimage="images/img_frame57.svg"
                  />
                </List>
              </div>
              <div className="h-[122px] sm:h-[157px] md:h-[92px] relative w-full">
                <DashboardDesktopRowoutingschedule
                  className="absolute bg-gray-50 border border-gray-300 border-solid flex sm:flex-col flex-row sm:gap-10 gap-[95px] inset-x-[0] items-center justify-between mx-auto px-4 py-3 rounded-md top-[0] w-[600px] md:w-full"
                  outingscheduletext="IT Department need two more talents for UX/UI Designer position"
                  durationtext="Yesterday, 09:15 AM"
                  televisionimage="images/img_frame57.svg"
                />
                <div className="absolute bg-white-A700 border border-gray-300 border-solid bottom-[0] flex flex-col h-[39px] md:h-auto inset-x-[0] items-center justify-center max-w-screen-sm mx-auto p-2.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                  <Text
                    className="text-center text-red-A200 text-sm w-auto"
                    size="txtPoppinsMedium14"
                  >
                    See All Announcement
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-2 items-center justify-end ml-auto mr-4 mt-[-70px] pt-[21px] rounded-[12px] w-[36%] z-[1]">
              <div className="flex flex-col items-start justify-start w-[91%] md:w-full">
                <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] w-[386px] sm:w-full">
                  <Text
                    className="text-blue_gray-900 text-lg w-auto"
                    size="txtPoppinsMedium18Bluegray900"
                  >
                    Upcoming Schedule
                  </Text>
                  <SelectBox
                    className="border border-gray-200 border-solid font-roboto text-left text-xs w-[38%] sm:w-full"
                    placeholderClassName="text-gray-700"
                    indicator={
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="duration_Two"
                    options={durationTwoOptionsList}
                    isSearchable={false}
                    placeholder="Today, 13 Sep 2021"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  />
                </div>
                <Text
                  className="mt-[19px] text-gray-700 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Priority
                </Text>
                <Input
                  name="frameSixtyEight"
                  placeholder="Review candidate applications"
                  className="p-0 placeholder:text-blue_gray-900_02 text-base text-left w-full"
                  wrapClassName="border border-gray-300 border-solid flex mt-[9px] w-[387px] sm:w-full"
                  suffix={
                    <Img
                      className="mt-2 mb-auto ml-[35px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  }
                ></Input>
                <Text
                  className="mt-[11px] text-gray-700 text-xs"
                  size="txtPoppinsRegular12"
                >
                  Other
                </Text>
                <Input
                  name="frameSixtyNine"
                  placeholder="Interview with candidates"
                  className="p-0 placeholder:text-blue_gray-900_02 text-base text-left w-full"
                  wrapClassName="border border-gray-300 border-solid flex mt-2.5 w-[387px] sm:w-full"
                  suffix={
                    <Img
                      className="mt-2.5 mb-auto ml-[35px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  }
                ></Input>
                <DashboardDesktopRowthisistitle
                  className="bg-gray-50 border border-gray-300 border-solid flex sm:flex-col flex-row gap-[29px] items-center justify-start mt-2 px-4 py-2.5 rounded-md w-[387px] sm:w-full"
                  meetingduration="Today - 09.15 AM"
                />
              </div>
              <div className="h-14 sm:h-[119px] relative w-full">
                <DashboardDesktopRowthisistitle
                  className="absolute bg-gray-50 border border-gray-300 border-solid flex sm:flex-col flex-row gap-[29px] h-full inset-[0] items-center justify-start m-auto px-4 py-2.5 rounded-md w-[387px] sm:w-full"
                  meetingtitle="Sort Front-end developer candidates"
                />
                <div className="absolute bg-white-A700 border border-gray-300 border-solid bottom-[0] flex flex-col h-[39px] md:h-auto inset-x-[0] items-center justify-center mx-auto p-2.5 rounded-bl-[10px] rounded-br-[10px] w-[427px] sm:w-full">
                  <Text
                    className="text-center text-red-A200 text-sm w-auto"
                    size="txtPoppinsMedium14"
                  >
                    Creat a New Schedule
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto md:pl-10 sm:pl-5 pl-[50px] top-[0] w-auto">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1147px] w-full">
              <Input
                name="frameSeventySix"
                placeholder="Search"
                className="!placeholder:text-gray-400_01 !text-gray-400_01 p-0 text-base text-left w-full"
                wrapClassName="border border-gray-300 border-solid flex md:flex-1 rounded w-[343px] md:w-full"
                suffix={
                  <Img
                    className="mt-auto mb-px h-6 ml-[35px]"
                    src="images/img_frame_9.svg"
                    alt="Frame 9"
                  />
                }
                size="xs"
              ></Input>
              <div className="flex flex-row gap-[30px] items-center justify-center md:pr-10 sm:pr-5 pr-[50px] py-6 w-[363px]">
                <Img
                  className="h-6 w-6"
                  src="images/img_icroundnotifications.svg"
                  alt="icroundnotifica"
                />
                <Img
                  className="h-6 w-6"
                  src="images/img_bichatleftdotsfill.svg"
                  alt="bichatleftdotsf"
                />
                <div className="flex flex-row gap-3 h-[42px] md:h-auto items-center justify-start w-auto">
                  <div className="flex flex-col h-[42px] items-center justify-start w-[42px]">
                    <Img
                      className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                      src="images/img_unsplashoh2s9xaclhc.png"
                      alt="unsplashoh2s9xa"
                    />
                  </div>
                  <SelectBox
                    className="font-medium text-base text-blue_gray-900 text-left w-[73%] sm:w-full"
                    placeholderClassName="text-blue_gray-900"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown_blue_gray_500.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="frameEleven"
                    options={admirraJohnOptionsList}
                    isSearchable={false}
                    placeholder="Admirra John"
                  />
                </div>
              </div>
            </div>
            {/* <Line className="bg-blue_gray-50 h-px rotate-[90deg] w-full" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardDesktopPage;
