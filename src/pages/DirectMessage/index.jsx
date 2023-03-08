import React from "react";

import { Img, Input, Text, List, Button, Line } from "components";
import { CloseSVG } from "../../assets/images";

const DirectMessagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_103 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
          <Img
            src="images/img_navigationwebsidebar.svg"
            className="h-[874px] w-[auto]"
            alt="NavigationWebSidebar"
          />
          <div className="flex md:flex-1 flex-col gap-[34px] items-center justify-start md:px-[20px] md:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[51px] items-center justify-start md:w-[100%] w-[92%]">
              <div className="flex flex-row gap-[15px] items-start justify-between md:w-[100%] w-[98%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                  wrapClassName="bg-white_A700 flex pb-[12px] pl-[20px] pr-[35px] pt-[20px] rounded-[12px] sm:pr-[20px] sm:w-[100%] w-[82%]"
                  name="Search"
                  placeholder="Search in social…"
                  prefix={
                    <Img
                      src="images/img_search_bluegray_101.svg"
                      className="cursor-pointer mr-[15px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#8f92a1"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
                <div className="bg-green_402 flex items-center justify-end mt-[5px] p-[9px] rounded-[12px] w-[14%]">
                  <Img
                    src="images/img_laptop_bluegray_101.svg"
                    className="h-[22px] mt-[3px] w-[22px]"
                    alt="laptop"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[47px] items-start justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_964 text-left w-[auto]"
                  variant="body30"
                >
                  Inbox
                </Text>
                <div className="flex flex-row items-start justify-start w-[100%]">
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_964 text-left w-[auto]"
                      variant="body59"
                    >
                      Direct Messages
                    </Text>
                  </div>
                  <div className="flex items-center justify-start ml-[24px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_522 text-left w-[auto]"
                      variant="body59"
                    >
                      Group Chat
                    </Text>
                  </div>
                  <div className="flex items-center justify-start ml-[26px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_522 text-left w-[auto]"
                      variant="body59"
                    >
                      Archived
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[100%]">
              <List
                className="flex-col gap-[34px] grid items-center w-[90%]"
                orientation="vertical"
              >
                <div className="h-[41px] my-[0] relative w-[100%]">
                  <div className="absolute flex flex-col items-end justify-start right-[0] top-[7%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_522 text-right w-[auto]"
                      variant="body67"
                    >
                      3:03pm
                    </Text>
                    <Text
                      className="bg-red_A204 font-normal h-[14px] justify-center mt-[3px] not-italic pt-[2px] px-[6px] rounded-[6px] text-center text-white_A700 tracking-[1.00px] w-[17px]"
                      variant="body75"
                    >
                      1
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[41px] relative w-[25%]">
                      <Img
                        src="defaultNoData.png"
                        className="absolute h-[41px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[96%]"
                        alt="Avatar"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_103 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_402 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[2px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[41px] my-[0] relative w-[100%]">
                  <div className="absolute flex flex-col items-end justify-start right-[0] top-[7%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_522 text-right w-[auto]"
                      variant="body67"
                    >
                      3:03pm
                    </Text>
                    <Text
                      className="bg-red_A204 font-normal h-[14px] justify-center mt-[3px] not-italic pt-[2px] px-[6px] rounded-[6px] text-center text-white_A700 tracking-[1.00px] w-[17px]"
                      variant="body75"
                    >
                      1
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[41px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_26.png"
                        className="absolute h-[41px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[96%]"
                        alt="Avatar One"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_103 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_402 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[2px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[41px] my-[0] relative w-[100%]">
                  <div className="absolute flex flex-col items-end justify-start right-[0] top-[7%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_522 text-right w-[auto]"
                      variant="body67"
                    >
                      3:03pm
                    </Text>
                    <Text
                      className="bg-red_A204 font-normal h-[14px] justify-center mt-[3px] not-italic pt-[2px] px-[6px] rounded-[6px] text-center text-white_A700 tracking-[1.00px] w-[17px]"
                      variant="body75"
                    >
                      1
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[41px] relative w-[25%]">
                      <Img
                        src="defaultNoData.png"
                        className="absolute h-[41px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[96%]"
                        alt="Avatar Two"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_103 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_402 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[2px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="bg-white_A700 flex items-center justify-end mt-[17px] p-[17px] rounded-[12px] w-[100%]">
                <div className="h-[41px] relative w-[99%]">
                  <div className="absolute flex items-end justify-start right-[0] top-[7%] w-[auto]">
                    <Text
                      className="font-normal mb-[17px] not-italic text-gray_522 text-right w-[auto]"
                      variant="body67"
                    >
                      Yesterday
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[41px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_28.png"
                        className="absolute h-[41px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[96%]"
                        alt="Avatar Three"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_103 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_402 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[2px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="flex-col gap-[34px] grid items-center mt-[17px] w-[90%]"
                orientation="vertical"
              >
                <div className="h-[41px] relative w-[100%]">
                  <div className="absolute flex items-end justify-start right-[0] top-[7%] w-[auto]">
                    <Text
                      className="font-normal mb-[17px] not-italic text-gray_522 text-right w-[auto]"
                      variant="body67"
                    >
                      Yesterday
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[41px] relative w-[25%]">
                      <Img
                        src="defaultNoData.png"
                        className="absolute h-[41px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[96%]"
                        alt="Avatar Four"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_103 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_402 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[2px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[41px] relative w-[100%]">
                  <div className="absolute flex items-end justify-start right-[0] top-[7%] w-[auto]">
                    <Text
                      className="font-normal mb-[18px] not-italic text-gray_522 text-right w-[auto]"
                      variant="body67"
                    >
                      Oct 26
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[41px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_30.png"
                        className="absolute h-[41px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[96%]"
                        alt="Avatar Five"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_103 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_402 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[2px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[41px] relative w-[100%]">
                  <div className="absolute flex flex-col items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[47px] right-[0] top-[7%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_522 text-right w-[auto]"
                      variant="body67"
                    >
                      Oct 26
                    </Text>
                    <Text
                      className="bg-red_A204 font-normal h-[14px] justify-center mt-[4px] not-italic pt-[2px] px-[6px] rounded-[6px] text-center text-white_A700 tracking-[1.00px] w-[17px]"
                      variant="body75"
                    >
                      1
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[41px] relative w-[25%]">
                      <Img
                        src="defaultNoData.png"
                        className="absolute h-[41px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[96%]"
                        alt="Avatar Six"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_103 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_402 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[2px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="h-[40px] relative w-[100%]">
                  <div className="absolute flex flex-col items-end justify-start sm:pl-[20px] md:pl-[40px] pl-[47px] right-[0] top-[8%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_522 text-right w-[auto]"
                      variant="body67"
                    >
                      Oct 26
                    </Text>
                    <Text
                      className="bg-red_A204 font-normal h-[14px] justify-center mt-[4px] not-italic pt-[2px] px-[6px] rounded-[6px] text-center text-white_A700 tracking-[1.00px] w-[17px]"
                      variant="body75"
                    >
                      1
                    </Text>
                  </div>
                  <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] sm:pr-[20px] md:pr-[40px] pr-[87px] w-[84%]">
                    <div className="h-[40px] relative w-[25%]">
                      <Img
                        src="images/img_avatar_40x48.png"
                        className="absolute h-[40px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[96%]"
                        alt="Avatar Seven"
                      />
                      <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                        <div className="bg-gray_103 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                        <div className="absolute bg-green_402 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[2px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="h-[874px] pl-[5px] md:px-[20px] relative md:w-[100%] w-[56%]">
            <div className="h-[874px] m-[auto] w-[100%]">
              <div className="h-[874px] m-[auto] w-[100%]">
                <Img
                  src="images/img_side.svg"
                  className="h-[874px] m-[auto] w-[auto]"
                  alt="ModalDesktopWhite"
                />
                <div className="absolute bottom-[4%] flex md:flex-col flex-row gap-[15px] inset-x-[0] items-center justify-start mx-[auto] w-[88%]">
                  <div className="bg-indigo_A206 flex items-center justify-start md:mt-[0] my-[4px] p-[10px] rounded-[12px] md:w-[100%] w-[7%]">
                    <Img
                      src="images/img_plus_white_a700_19x22.svg"
                      className="h-[19px] w-[auto]"
                      alt="plus"
                    />
                  </div>
                  <div className="bg-gray_103 flex flex-row sm:gap-[40px] items-start justify-between p-[10px] rounded-[12px] md:w-[100%] w-[91%]">
                    <Text
                      className="font-normal ml-[9px] mt-[11px] not-italic text-gray_522 text-left w-[auto]"
                      variant="body59"
                    >
                      Start typing…
                    </Text>
                    <Img
                      src="images/img_user_bluegray_101.svg"
                      className="h-[18px] mr-[9px] mt-[9px] w-[18px]"
                      alt="user"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col gap-[8px] h-[max-content] inset-[0] items-start justify-center m-[auto] w-[87%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                  <div className="flex md:flex-1 flex-row gap-[15px] items-center justify-between mb-[62px] md:w-[100%] w-[30%]">
                    <div className="flex h-[58px] items-center justify-start w-[58px]">
                      <div className="h-[58px] relative w-[58px]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[58px] m-[auto] object-cover rounded-[16px] w-[58px]"
                          alt="Avatar Eight"
                        />
                        <Img
                          src="images/img_settings_white_a700_11x15.svg"
                          className="absolute h-[15px] right-[0] top-[0] w-[15px]"
                          alt="settings"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body41"
                      >
                        Marriet Miles
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Online
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_camera_bluegray_101.svg"
                    className="h-[32px] md:ml-[0] ml-[254px] md:mt-[0] mt-[88px] w-[32px]"
                    alt="camera"
                  />
                  <Img
                    src="images/img_call_gray_522.svg"
                    className="h-[25px] md:ml-[0] ml-[40px] md:mt-[0] mt-[91px] w-[25px]"
                    alt="call"
                  />
                  <Img
                    src="images/img_videocamera_gray_522.svg"
                    className="h-[25px] md:ml-[0] ml-[40px] md:mt-[0] mt-[91px] w-[25px]"
                    alt="videocamera"
                  />
                  <Img
                    src="images/img_overflowmenu_bluegray_101.svg"
                    className="h-[25px] md:ml-[0] ml-[40px] md:mt-[0] mt-[91px] w-[25px]"
                    alt="overflowmenu"
                  />
                </div>
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[44%]">
                  <div className="flex items-center justify-start pb-[9px] w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-between w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="Avatar Nine"
                        />
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start w-[83%]">
                        <div className="flex flex-row gap-[9px] items-start justify-start md:w-[100%] w-[57%]">
                          <Text
                            className="font-normal mt-[2px] not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            Anne Carry
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_522 text-left w-[auto]"
                            variant="body67"
                          >
                            4min
                          </Text>
                        </div>
                        <div className="bg-gray_103 flex flex-row items-center justify-between p-[10px] rounded-[12px] w-[100%]">
                          <Button className="bg-light_blue_200_33 flex h-[38px] items-center justify-center p-[10px] rounded-[12px] w-[38px]">
                            <Img
                              src="images/img_forward_light_blue_200.svg"
                              className="h-[18px]"
                              alt="forward"
                            />
                          </Button>
                          <Line className="bg-gray_500_7e h-[4px] my-[17px] rounded-[2px] w-[68%]" />
                          <Text
                            className="font-normal not-italic text-gray_522 text-right w-[auto]"
                            variant="body67"
                          >
                            0:06
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[40px] grid mt-[40px] w-[84%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[15px] items-start justify-between pb-[3px] pr-[3px] w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="Avatar Ten"
                        />
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start mb-[7px] w-[79%]">
                        <div className="flex flex-row gap-[9px] items-start justify-start md:w-[100%] w-[72%]">
                          <Text
                            className="font-normal not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_522 text-left w-[auto]"
                            variant="body67"
                          >
                            4min
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_522 text-left w-[auto]"
                          variant="body59"
                        >
                          Yes, I saw his post yesterday
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-between pb-[3px] pr-[3px] w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="Avatar Eleven"
                        />
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start mb-[7px] w-[79%]">
                        <div className="flex flex-row gap-[9px] items-start justify-start md:w-[100%] w-[72%]">
                          <Text
                            className="font-normal not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_522 text-left w-[auto]"
                            variant="body67"
                          >
                            4min
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-gray_522 text-left w-[auto]"
                          variant="body59"
                        >
                          Yes, I saw his post yesterday
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex items-center justify-start mt-[40px] pb-[9px] w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-between w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="Avatar Twelve"
                        />
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start w-[83%]">
                        <div className="flex flex-row gap-[9px] items-start justify-start md:w-[100%] w-[57%]">
                          <Text
                            className="font-normal mt-[2px] not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            Anne Carry
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_522 text-left w-[auto]"
                            variant="body67"
                          >
                            4min
                          </Text>
                        </div>
                        <div className="bg-gray_103 flex flex-row items-center justify-between p-[10px] rounded-[12px] w-[100%]">
                          <Button className="bg-light_blue_200_33 flex h-[38px] items-center justify-center p-[10px] rounded-[12px] w-[38px]">
                            <Img
                              src="images/img_forward_light_blue_200.svg"
                              className="h-[18px]"
                              alt="forward One"
                            />
                          </Button>
                          <Line className="bg-gray_500_7e h-[4px] my-[17px] rounded-[2px] w-[68%]" />
                          <Text
                            className="font-normal not-italic text-gray_522 text-right w-[auto]"
                            variant="body67"
                          >
                            0:06
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[15px] items-start justify-start mt-[40px] pb-[3px] pr-[3px] md:w-[100%] w-[84%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="Avatar Thirteen"
                      />
                    </div>
                    <div className="flex flex-col gap-[12px] items-start justify-start mb-[7px] w-[79%]">
                      <div className="flex flex-row gap-[9px] items-start justify-start md:w-[100%] w-[72%]">
                        <Text
                          className="font-normal not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          Marriet Miles
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_522 text-left w-[auto]"
                          variant="body67"
                        >
                          4min
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Yes, I saw his post yesterday
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start mt-[30px] md:w-[100%] w-[29%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="Avatar Fourteen"
                      />
                    </div>
                    <Img
                      src="images/img_signal_gray_522.svg"
                      className="h-[13px] w-[auto]"
                      alt="signal"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-row gap-[20px] items-center justify-center right-[5%] top-[5%] w-[15%]">
              <Button className="bg-light_blue_200 cursor-pointer font-normal h-[48px] not-italic py-[10px] rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]">
                1
              </Button>
              <div className="flex h-[48px] items-center justify-start w-[48px]">
                <Img
                  src="defaultNoData.png"
                  className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                  alt="Avatar Fifteen"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectMessagePage;
