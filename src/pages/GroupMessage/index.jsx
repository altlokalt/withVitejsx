import React from "react";

import { Img, Input, Text, List, Button, Line } from "components";
import { CloseSVG } from "../../assets/images";

const GroupMessagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_103 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
          <Img
            src="images/img_navigationwebsidebar.svg"
            className="h-[875px] w-[auto]"
            alt="NavigationWebSidebar"
          />
          <div className="flex md:flex-1 flex-col gap-[34px] items-start justify-start md:mt-[0] mt-[34px] md:px-[20px] md:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[51px] justify-start md:w-[100%] w-[95%]">
              <div className="flex sm:flex-col flex-row gap-[14px] items-start justify-end ml-[auto] md:w-[100%] w-[95%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                  wrapClassName="bg-white_A700 flex pb-[12px] pl-[20px] pr-[35px] pt-[20px] rounded-[12px] sm:pr-[20px] sm:w-[100%] w-[85%]"
                  name="Search"
                  placeholder="Search in social…"
                  prefix={
                    <Img
                      src="images/img_search_bluegray_101_18x18.svg"
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
                <div className="bg-green_402 flex items-center justify-end sm:mt-[0] mt-[5px] p-[9px] rounded-[12px] sm:w-[100%] w-[12%]">
                  <Img
                    src="images/img_laptop_bluegray_101.svg"
                    className="h-[22px] mt-[3px] w-[22px]"
                    alt="laptop"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[47px] items-start justify-start mr-[13px] md:w-[100%] w-[97%]">
                <Text
                  className="font-normal not-italic text-gray_964 text-left w-[auto]"
                  variant="body30"
                >
                  Inbox
                </Text>
                <div className="flex flex-row items-start justify-start md:w-[100%] w-[89%]">
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_522 text-left w-[auto]"
                      variant="body59"
                    >
                      Direct Messages
                    </Text>
                  </div>
                  <div className="flex items-center justify-start ml-[24px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_964 text-left w-[auto]"
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
            <div className="flex flex-col gap-[44px] items-center justify-start w-[100%]">
              <List
                className="flex-col gap-[9px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex md:flex-1 sm:flex-col flex-row gap-[5px] items-start justify-start mx-[auto] my-[0] md:w-[100%] w-[90%]">
                  <div className="flex flex-row gap-[15px] items-start justify-start pr-[124px] sm:pr-[20px] md:pr-[40px] sm:w-[100%] w-[85%]">
                    <div className="flex flex-col relative w-[51px]">
                      <div className="flex mx-[auto] w-[100%]">
                        <div className="flex h-[28px] items-center justify-start my-[auto] w-[28px]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                            alt="Avatar"
                          />
                        </div>
                        <Img
                          src="images/img_image_28x28.png"
                          className="h-[28px] ml-[-5px] my-[auto] object-cover rounded-[8px] w-[28px] z-[1]"
                          alt="Image One"
                        />
                      </div>
                      <Button className="bg-gray_964 cursor-pointer font-normal h-[28px] mt-[-5px] mx-[auto] not-italic py-[7px] rounded-[6px] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]">
                        +9
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[5px] items-start justify-start mt-[4px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        Close Friends
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start sm:mt-[0] mt-[3px] sm:w-[100%] w-[auto]">
                    <Text
                      className="font-normal mt-[2px] not-italic text-gray_522 text-right w-[auto]"
                      variant="body67"
                    >
                      3:03pm
                    </Text>
                    <Text
                      className="bg-red_A204 flex font-normal h-[18px] items-center justify-center mt-[3px] not-italic rounded-[6px] text-center text-white_A700 w-[18px]"
                      variant="body75"
                    >
                      1
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start my-[0] p-[17px] rounded-[12px] w-[100%]">
                  <div className="flex sm:flex-col flex-row gap-[5px] items-start justify-start md:w-[100%] w-[98%]">
                    <div className="flex flex-row gap-[15px] items-start justify-start pr-[124px] sm:pr-[20px] md:pr-[40px] sm:w-[100%] w-[85%]">
                      <div className="flex flex-col relative w-[25%]">
                        <div className="flex mx-[auto] w-[100%]">
                          <div className="flex h-[28px] items-center justify-start my-[auto] w-[28px]">
                            <Img
                              src="images/img_avatar_62.png"
                              className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                              alt="Avatar One"
                            />
                          </div>
                          <Img
                            src="images/img_image_24x28.png"
                            className="h-[24px] ml-[-5px] object-cover rounded-[8px] w-[55%] z-[1]"
                            alt="Image Two"
                          />
                        </div>
                        <Text
                          className="bg-gray_964 h-[20px] justify-center mt-[-5px] mx-[auto] not-italic pt-[7px] px-[7px] rounded-[6px] text-center text-white_A700 w-[28px] z-[1]"
                          variant="body73"
                        >
                          +9
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          Close Friends
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_522 text-left w-[auto]"
                          variant="body59"
                        >
                          Thank you for sharing
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-start sm:mt-[0] mt-[2px] sm:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_522 text-right w-[auto]"
                        variant="body67"
                      >
                        3:03pm
                      </Text>
                      <Text
                        className="bg-red_A204 font-normal h-[15px] justify-center mt-[3px] not-italic pt-[2px] px-[6px] rounded-[6px] text-center text-white_A700 w-[18px]"
                        variant="body75"
                      >
                        1
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex sm:flex-col flex-row gap-[5px] items-start justify-start md:w-[100%] w-[90%]">
                <div className="flex flex-row gap-[15px] items-start justify-start pr-[177px] sm:pr-[20px] md:pr-[40px] sm:w-[100%] w-[85%]">
                  <div className="flex relative w-[33%]">
                    <div className="flex items-center justify-start my-[auto] w-[55%]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[17px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Avatar Two"
                      />
                    </div>
                    <Img
                      src="defaultNoData.png"
                      className="h-[17px] ml-[-5px] my-[auto] object-cover rounded-[8px] w-[55%] z-[1]"
                      alt="Image Three"
                    />
                  </div>
                  <div className="flex items-center justify-start mt-[3px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_964 text-left w-[auto]"
                      variant="body59"
                    >
                      Close Friends
                    </Text>
                  </div>
                </div>
                <div className="flex items-end justify-start sm:mt-[0] mt-[3px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-gray_522 text-right w-[auto]"
                    variant="body67"
                  >
                    3:03pm
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[875px] pl-[5px] md:px-[20px] relative md:w-[100%] w-[56%]">
            <Img
              src="defaultNoData.png"
              className="h-[875px] m-[auto] object-cover w-[auto]"
              alt="ModalDesktopWhite"
            />
            <div className="absolute flex flex-col gap-[37px] md:h-[auto] h-[max-content] inset-[0] items-end justify-center m-[auto] w-[795px]">
              <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[15%]">
                <Button className="bg-light_blue_200 cursor-pointer font-normal h-[48px] not-italic py-[10px] rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]">
                  1
                </Button>
                <div className="flex h-[48px] items-center justify-start w-[48px]">
                  <Img
                    src="defaultNoData.png"
                    className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                    alt="Avatar Three"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="flex items-center justify-start md:w-[100%] w-[99%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-1 flex-row gap-[20px] items-center justify-between pr-[10px] md:w-[100%] w-[38%]">
                      <div className="flex relative w-[55%]">
                        <div className="flex my-[auto] w-[69%]">
                          <div className="flex h-[58px] items-center justify-start my-[auto] w-[58px]">
                            <Img
                              src="images/img_avatar_63.png"
                              className="h-[58px] md:h-[auto] object-cover rounded-[16px] w-[58px]"
                              alt="Avatar Four"
                            />
                          </div>
                          <div className="flex h-[58px] items-center justify-start ml-[-10px] my-[auto] w-[58px] z-[1]">
                            <Img
                              src="images/img_avatar_64.png"
                              className="h-[58px] md:h-[auto] object-cover rounded-[16px] w-[58px]"
                              alt="Avatar Five"
                            />
                          </div>
                        </div>
                        <Button className="bg-gray_964 cursor-pointer font-normal h-[58px] ml-[-10px] my-[auto] not-italic py-[15px] rounded-[16px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 w-[58px] z-[1]">
                          +4
                        </Button>
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body41"
                      >
                        Beach Trip
                      </Text>
                    </div>
                    <Img
                      src="images/img_call_gray_522.svg"
                      className="h-[21px] md:ml-[0] ml-[335px] w-[auto]"
                      alt="call"
                    />
                    <Img
                      src="images/img_videocamera_gray_522.svg"
                      className="h-[21px] md:ml-[0] ml-[40px] w-[auto]"
                      alt="videocamera"
                    />
                    <Img
                      src="images/img_overflowmenu_bluegray_101_38x38.svg"
                      className="h-[21px] md:ml-[0] ml-[40px] w-[auto]"
                      alt="overflowmenu"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[40px] items-start justify-start mt-[26px] md:w-[100%] w-[40%]">
                  <List
                    className="flex-col gap-[40px] grid w-[79%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[15px] items-start justify-between my-[0] pb-[3px] pr-[3px] w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar_19.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="Avatar Six"
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
                    <div className="flex flex-row gap-[15px] items-start justify-between my-[0] pb-[3px] pr-[3px] w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar_41.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="Avatar Seven"
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
                  <List
                    className="flex-col gap-[40px] grid items-center w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 items-center justify-start pb-[9px] w-[100%]">
                      <div className="flex flex-row gap-[15px] items-start justify-between w-[100%]">
                        <div className="flex h-[38px] items-center justify-start w-[38px]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                            alt="Avatar Eight"
                          />
                        </div>
                        <div className="flex flex-col gap-[9px] items-start justify-start w-[84%]">
                          <div className="flex flex-row gap-[7px] items-start justify-start md:w-[100%] w-[53%]">
                            <Text
                              className="font-normal not-italic text-gray_964 text-left w-[auto]"
                              variant="body59"
                            >
                              Gunther Ackner
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_522 text-left w-[auto]"
                              variant="body67"
                            >
                              4min
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[80px] md:h-[auto] object-cover rounded-[8px] w-[80px]"
                              alt="PhotoTwo"
                            />
                            <Img
                              src="images/img_photo3_80x80.png"
                              className="h-[80px] md:h-[auto] object-cover rounded-[8px] w-[80px]"
                              alt="PhotoThree"
                            />
                            <Img
                              src="images/img_photo5_80x80.png"
                              className="h-[80px] md:h-[auto] object-cover rounded-[8px] w-[80px]"
                              alt="PhotoFive"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 items-center justify-start pb-[9px] md:w-[100%] w-[95%]">
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
                  </List>
                  <div className="flex flex-row gap-[15px] items-start justify-start pb-[3px] pr-[3px] md:w-[100%] w-[79%]">
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
                </div>
                <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between mt-[30px] w-[100%]">
                  <div className="bg-indigo_A206 flex md:flex-1 items-center justify-end md:mt-[0] my-[4px] p-[10px] rounded-[12px] md:w-[100%] w-[auto]">
                    <Img
                      src="images/img_plus_white_a700_19x22.svg"
                      className="h-[19px] w-[auto]"
                      alt="plus"
                    />
                  </div>
                  <Input
                    className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                    wrapClassName="bg-gray_103 flex md:w-[100%] pb-[10px] pt-[21px] px-[20px] rounded-[12px] sm:w-[100%] w-[auto]"
                    name="Field"
                    placeholder="Start typing…"
                    suffix={
                      <Img
                        src="images/img_user_bluegray_101_14x14.svg"
                        className="ml-[35px] my-[auto]"
                        alt="user"
                      />
                    }
                  ></Input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupMessagePage;
