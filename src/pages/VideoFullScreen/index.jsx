import React from "react";

import { Img, Text, Button, Line } from "components";

const VideoFullScreenPage = () => {
  return (
    <>
      <div className="bg-gray_103 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar_indigo_a206.svg"
          className="h-[1024px] w-[auto]"
          alt="NavigationWebSidebar"
        />
        <div className="flex items-center justify-start md:ml-[0] ml-[5px] md:px-[20px] md:w-[100%] w-[89%]">
          <div className="flex md:flex-col flex-row gap-[10px] items-center justify-between w-[100%]">
            <Img
              src="images/img_leftindicator.svg"
              className="h-[128px] w-[auto]"
              alt="LeftIndicator"
            />
            <div className="h-[874px] relative md:w-[100%] w-[99%]">
              <Img
                src="images/img_modalbackground_874x1255.png"
                className="h-[874px] m-[auto] object-cover rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[100%]"
                alt="ModalBackground"
              />
              <div className="absolute bottom-[1%] flex flex-col md:gap-[40px] gap-[641px] inset-x-[0] items-center justify-start mx-[auto] w-[95%]">
                <div className="flex items-center justify-start md:w-[100%] w-[97%]">
                  <div className="flex flex-col gap-[52px] items-start justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                      <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[12%]">
                        <div className="flex flex-row gap-[10px] items-start justify-between w-[100%]">
                          <div className="flex items-center justify-start w-[36%]">
                            <Img
                              src="images/img_avatar_15.png"
                              className="h-[36px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                              alt="Avatar"
                            />
                          </div>
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body59"
                            >
                              Edward Ford
                            </Text>
                            <Text
                              className="font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                              variant="body67"
                            >
                              5min ago
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 flex-row items-start justify-between sm:w-[100%] w-[26%]">
                        <Button
                          className="bg-white_A700_33 flex items-center justify-center mb-[4px] pl-[9px] pr-[8px] py-[5px] rounded-[4px] text-center"
                          leftIcon={
                            <Img
                              src="images/img_favorite_bluegray_101.svg"
                              className="mr-[6px] text-center"
                              alt="favorite"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                            326
                          </div>
                        </Button>
                        <Button
                          className="bg-white_A700_33 flex items-center justify-center mb-[4px] pl-[9px] pr-[8px] py-[5px] rounded-[4px] text-center"
                          leftIcon={
                            <Img
                              src="images/img_laptop_bluegray_101.svg"
                              className="mr-[6px] text-center"
                              alt="laptop"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                            148
                          </div>
                        </Button>
                        <Button
                          className="bg-white_A700_33 flex items-center justify-center mb-[4px] pl-[9px] pr-[7px] py-[5px] rounded-[4px] text-center"
                          leftIcon={
                            <Img
                              src="images/img_reply_white_a700_14x14.svg"
                              className="mr-[5px] text-center"
                              alt="reply"
                            />
                          }
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                            Share
                          </div>
                        </Button>
                        <Img
                          src="images/img_overflowmenu_bluegray_101.svg"
                          className="h-[31px] w-[auto]"
                          alt="overflowmenu"
                        />
                      </div>
                    </div>
                    <Text
                      className="font-normal leading-[36.00px] not-italic text-left text-white_A700"
                      variant="body30"
                    >
                      Tropical Fresh Tourism Is Back In Full Swing
                      <br />
                      In Cancun Mexico
                    </Text>
                  </div>
                </div>
                <div className="flex items-center justify-end pt-[17px] w-[100%]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex flex-col gap-[11px] items-center justify-start w-[100%]">
                      <div className="h-[2px] relative w-[100%]">
                        <Line className="absolute bg-white_A700_33 h-[2px] inset-x-[0] mx-[auto] rounded-[1px] top-[0] w-[100%]" />
                        <div className="absolute bottom-[0] h-[2px] left-[0] md:w-[100%] w-[60%]">
                          <Line className="bg-white_A700_a2 h-[2px] m-[auto] rounded-[1px] w-[100%]" />
                          <Line className="absolute bg-light_blue_200 h-[2px] inset-y-[0] left-[0] my-[auto] rounded-[1px] w-[89%]" />
                        </div>
                      </div>
                      <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          01:23
                        </Text>
                        <Text
                          className="font-normal not-italic text-right text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          05:46
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoFullScreenPage;
