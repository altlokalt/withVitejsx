import React from "react";

import { Img, Line, Text, Button, Input, List } from "components";
import { CloseSVG } from "../../assets/images";

const DarkChatsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-abel sm:gap-[20px] md:gap-[20px] items-start mx-[auto] sm:pr-[20px] pr-[241px] md:pr-[40px] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start w-[75px]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-bluegray_912 border-[1px] border-bluegray_913 border-solid flex items-end justify-start w-[100%]">
                <div className="flex flex-col gap-[38px] items-start justify-start mb-[26px] mt-[20px] md:w-[100%] w-[74%]">
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[95%]">
                    <Img
                      src="images/img_location_green_400.svg"
                      className="h-[30px] w-[30px]"
                      alt="location"
                    />
                    <div className="flex flex-row gap-[21px] items-start justify-between mt-[42px] w-[100%]">
                      <Img
                        src="images/img_settings_green_400.svg"
                        className="h-[28px] w-[28px]"
                        alt="settings"
                      />
                      <Line className="bg-green_400 h-[20px] mb-[6px] mt-[2px] w-[2px]" />
                    </div>
                    <Img
                      src="images/img_computer_bluegray_405.svg"
                      className="h-[28px] mt-[42px] w-[28px]"
                      alt="computer"
                    />
                    <Img
                      src="images/img_user_bluegray_405.svg"
                      className="h-[28px] mt-[42px] w-[28px]"
                      alt="user"
                    />
                    <Img
                      src="images/img_call_bluegray_405.svg"
                      className="h-[28px] mt-[42px] w-[28px]"
                      alt="call"
                    />
                    <Img
                      src="images/img_bookmark.svg"
                      className="h-[28px] mt-[42px] w-[28px]"
                      alt="bookmark"
                    />
                    <Img
                      src="images/img_settings_bluegray_405.svg"
                      className="h-[28px] mt-[42px] w-[28px]"
                      alt="settings One"
                    />
                    <Img
                      src="images/img_brightness.svg"
                      className="h-[28px] mt-[480px] w-[28px]"
                      alt="brightness"
                    />
                  </div>
                  <div className="bg-gray_110 flex h-[36px] items-center justify-start p-[3px] rounded-[50%] w-[36px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[30px] md:h-[auto] rounded-[50%] w-[30px]"
                      alt="User One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="bg-gray_910 flex flex-1 items-center justify-start md:px-[20px] py-[22px] shadow-bs10 w-[100%]">
          <div className="flex flex-col items-center justify-start mb-[126px] w-[100%]">
            <div className="flex flex-col gap-[19px] items-center justify-start md:w-[100%] w-[84%]">
              <div className="flex flex-row items-start justify-between w-[100%]">
                <Text
                  className="font-normal not-italic text-bluegray_202 text-left w-[auto]"
                  variant="body42"
                >
                  Chats
                </Text>
                <Button className="bg-green_400_19 flex items-center justify-center p-[7px] rounded-[3px] w-[31px]">
                  <Img
                    src="images/img_plus_green_400.svg"
                    className="h-[13px]"
                    alt="plus"
                  />
                </Button>
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_504 text-gray_504 text-left w-[100%]"
                  wrapClassName="bg-bluegray_912 flex pl-[16px] pr-[17px] py-[11px] rounded-[4px] w-[100%]"
                  name="SearchBtn"
                  placeholder="Search here.."
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        className="cursor-pointer ml-[35px] my-[auto]"
                        onClick={() => setInputvalue("")}
                        color="#8f9198"
                      />
                    ) : (
                      <Img
                        src="images/img_search_bluegray_202_15x15.svg"
                        className="cursor-pointer ml-[35px] my-[auto]"
                        alt="search"
                      />
                    )
                  }
                ></Input>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start mt-[38px] w-[100%]">
              <Text
                className="font-normal md:ml-[0] ml-[23px] not-italic text-gray_504 text-left uppercase w-[auto]"
                variant="body69"
              >
                Favourites
              </Text>
              <div className="bg-green_400 flex flex-row items-end justify-start mt-[15px] p-[5px] w-[100%]">
                <div className="flex h-[29px] items-center justify-start ml-[19px] w-[29px]">
                  <div className="h-[29px] relative w-[29px]">
                    <Img
                      src="images/img_user_28x28.png"
                      className="h-[29px] m-[auto] object-cover rounded-[14px] w-[29px]"
                      alt="UserOne"
                    />
                    <div className="absolute bg-teal_A700 border-[2px] border-gray_910 border-solid bottom-[0] h-[10px] right-[0] rounded-[50%] w-[10px]"></div>
                  </div>
                </div>
                <Text
                  className="font-normal ml-[8px] my-[5px] not-italic text-left text-white_A700 w-[auto]"
                  variant="body59"
                >
                  Bella Cote
                </Text>
                <div className="flex items-center justify-start mb-[4px] ml-[140px] mt-[7px] w-[auto]">
                  <Text
                    className="bg-gray_100_3f h-[18px] justify-center not-italic px-[4px] py-[2px] rounded-[4px] text-left text-white_A700 w-[20px]"
                    variant="body71"
                  >
                    18
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[24px] mt-[5px] md:w-[100%] w-[38%]">
                <div className="flex flex-row gap-[8px] items-end justify-start md:w-[100%] w-[85%]">
                  <div className="flex h-[29px] items-center justify-start w-[29px]">
                    <div className="h-[29px] relative w-[29px]">
                      <Img
                        src="images/img_user2_29x29.png"
                        className="h-[29px] m-[auto] object-cover rounded-[14px] w-[29px]"
                        alt="UserTwo"
                      />
                      <div className="absolute bg-teal_A700 border-[2px] border-gray_910 border-solid bottom-[0] h-[10px] right-[0] rounded-[50%] w-[10px]"></div>
                    </div>
                  </div>
                  <Text
                    className="font-normal my-[5px] not-italic text-bluegray_202 text-left tracking-[-0.40px] w-[auto]"
                    variant="body59"
                  >
                    Steven Jury
                  </Text>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start mt-[9px] md:w-[100%] w-[93%]">
                  <div className="flex h-[29px] items-center justify-start w-[29px]">
                    <div className="flex h-[29px] items-center justify-start w-[29px]">
                      <div className="bg-green_400 md:h-[18px] h-[29px] pl-[5px] pt-[5px] relative rounded-[14px] w-[29px]">
                        <Text
                          className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic text-left text-white_A700 tracking-[-0.40px] w-[max-content]"
                          variant="body59"
                        >
                          JP
                        </Text>
                        <div className="absolute bg-teal_A700 border-[2px] border-gray_910 border-solid bottom-[0] h-[10px] right-[0] rounded-[50%] w-[10px]"></div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-normal not-italic text-bluegray_202 text-left tracking-[-0.40px] w-[auto]"
                    variant="body59"
                  >
                    James Pinard
                  </Text>
                </div>
                <div className="flex flex-row gap-[8px] items-center justify-start mt-[10px] w-[100%]">
                  <div className="flex h-[29px] items-center justify-start w-[29px]">
                    <div className="h-[29px] relative w-[29px]">
                      <Img
                        src="images/img_user4_29x29.png"
                        className="h-[29px] m-[auto] object-cover rounded-[14px] w-[29px]"
                        alt="UserFour"
                      />
                      <div className="absolute bg-teal_A700 border-[2px] border-gray_910 border-solid bottom-[0] h-[10px] right-[0] rounded-[50%] w-[10px]"></div>
                    </div>
                  </div>
                  <Text
                    className="font-normal not-italic text-bluegray_202 text-left tracking-[-0.40px] w-[auto]"
                    variant="body59"
                  >
                    Alissa Richards
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[53px] items-center justify-start mt-[53px] md:w-[100%] w-[84%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_504 text-left uppercase w-[auto]"
                      variant="body69"
                    >
                      DIRECT MESSAGES
                    </Text>
                    <Button className="bg-green_400_19 flex items-center justify-center p-[7px] rounded-[3px] w-[31px]">
                      <Img
                        src="images/img_plus_green_400.svg"
                        className="h-[13px]"
                        alt="plus One"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-start mt-[13px] md:w-[100%] w-[49%]">
                    <div className="flex h-[29px] items-center justify-start w-[29px]">
                      <div className="h-[29px] relative w-[29px]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[29px] m-[auto] object-cover rounded-[14px] w-[29px]"
                          alt="UserOne One"
                        />
                        <div className="absolute bg-teal_A700 border-[2px] border-gray_910 border-solid bottom-[0] h-[10px] right-[0] rounded-[50%] w-[10px]"></div>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_202 text-left w-[auto]"
                      variant="body59"
                    >
                      Nicholas Staten
                    </Text>
                  </div>
                  <div className="flex flex-row items-end justify-start mt-[9px] w-[100%]">
                    <div className="flex h-[29px] items-center justify-start w-[29px]">
                      <div className="h-[29px] relative w-[29px]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[29px] m-[auto] object-cover rounded-[14px] w-[29px]"
                          alt="UserTwo One"
                        />
                        <div className="absolute bg-teal_A700 border-[2px] border-gray_910 border-solid bottom-[0] h-[10px] right-[0] rounded-[50%] w-[10px]"></div>
                      </div>
                    </div>
                    <Text
                      className="font-normal ml-[8px] my-[5px] not-italic text-bluegray_202 text-left tracking-[-0.10px] w-[auto]"
                      variant="body59"
                    >
                      Kathryn Swarey
                    </Text>
                    <div className="flex items-center justify-start mb-[3px] ml-[119px] mt-[7px] w-[auto]">
                      <Text
                        className="bg-gray_500_2d h-[19px] justify-center not-italic px-[4px] py-[2px] rounded-[4px] text-gray_504 text-left tracking-[-0.10px] w-[14px]"
                        variant="body71"
                      >
                        8
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[10px] grid mt-[10px] w-[48%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[100%]">
                      <div className="flex h-[29px] items-center justify-start w-[29px]">
                        <div className="h-[29px] relative w-[29px]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[29px] m-[auto] object-cover rounded-[14px] w-[29px]"
                            alt="UserThree"
                          />
                          <div className="absolute bg-teal_A700 border-[2px] border-gray_910 border-solid bottom-[0] h-[10px] right-[0] rounded-[50%] w-[10px]"></div>
                        </div>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_202 text-left w-[auto]"
                        variant="body59"
                      >
                        Robert Ledonne
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[8px] items-end justify-start md:w-[100%] w-[83%]">
                      <div className="flex h-[29px] items-center justify-start w-[29px]">
                        <div className="h-[29px] relative w-[29px]">
                          <Img
                            src="images/img_user2_29x29.png"
                            className="h-[29px] m-[auto] object-cover rounded-[14px] w-[29px]"
                            alt="UserFour One"
                          />
                          <div className="absolute bg-teal_A700 border-[2px] border-gray_910 border-solid bottom-[0] h-[10px] right-[0] rounded-[50%] w-[10px]"></div>
                        </div>
                      </div>
                      <Text
                        className="font-normal my-[5px] not-italic text-bluegray_202 text-left tracking-[-0.10px] w-[auto]"
                        variant="body59"
                      >
                        Steven Jury
                      </Text>
                    </div>
                  </List>
                  <div className="flex flex-row gap-[8px] items-center justify-start mt-[10px] md:w-[100%] w-[45%]">
                    <div className="flex h-[29px] items-center justify-start w-[29px]">
                      <div className="flex h-[29px] items-center justify-start w-[29px]">
                        <div className="bg-green_400 flex flex-row h-[29px] items-center justify-end pl-[5px] pt-[5px] rounded-[14px] w-[29px]">
                          <Text
                            className="font-normal mb-[5px] not-italic text-left text-white_A700 tracking-[-0.40px] w-[auto]"
                            variant="body59"
                          >
                            JL
                          </Text>
                          <div className="bg-teal_A700 border-[2px] border-gray_910 border-solid h-[10px] mt-[13px] rounded-[50%] w-[10px]"></div>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_202 text-left tracking-[-0.10px] w-[auto]"
                      variant="body59"
                    >
                      Jessica Lewis
                    </Text>
                  </div>
                  <div className="flex flex-row items-end justify-start mt-[10px] w-[100%]">
                    <div className="flex h-[29px] items-center justify-start w-[29px]">
                      <div className="h-[29px] relative w-[29px]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[29px] m-[auto] object-cover rounded-[14px] w-[29px]"
                          alt="UserFive"
                        />
                        <div className="absolute bg-teal_A700 border-[2px] border-gray_910 border-solid bottom-[0] h-[10px] right-[0] rounded-[50%] w-[10px]"></div>
                      </div>
                    </div>
                    <Text
                      className="font-normal ml-[8px] my-[5px] not-italic text-bluegray_202 text-left tracking-[-0.10px] w-[auto]"
                      variant="body59"
                    >
                      John Foss
                    </Text>
                    <div className="flex items-center justify-start ml-[147px] my-[5px] w-[auto]">
                      <Text
                        className="bg-gray_500_2d h-[19px] justify-center not-italic px-[4px] py-[2px] rounded-[4px] text-gray_504 text-left tracking-[-0.10px] w-[14px]"
                        variant="body71"
                      >
                        5
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-start mt-[9px] md:w-[100%] w-[47%]">
                    <div className="flex h-[29px] items-center justify-start w-[29px]">
                      <div className="h-[29px] relative w-[29px]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[29px] m-[auto] object-cover rounded-[14px] w-[29px]"
                          alt="UserSix"
                        />
                        <div className="absolute bg-teal_A700 border-[2px] border-gray_910 border-solid bottom-[0] h-[10px] right-[0] rounded-[50%] w-[10px]"></div>
                      </div>
                    </div>
                    <Text
                      className="font-normal not-italic text-bluegray_202 text-left w-[auto]"
                      variant="body59"
                    >
                      Gloria Underhill
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_504 text-left uppercase w-[auto]"
                      variant="body69"
                    >
                      Channels
                    </Text>
                    <Button className="bg-green_400_19 flex items-center justify-center p-[7px] rounded-[3px] w-[31px]">
                      <Img
                        src="images/img_plus_green_400.svg"
                        className="h-[13px]"
                        alt="plus Two"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row items-end justify-start mt-[13px] w-[100%]">
                    <Button className="bg-bluegray_900_3f cursor-pointer font-normal h-[29px] leading-[normal] not-italic py-[5px] rounded-[14px] text-[14px] text-bluegray_202 text-center tracking-[-0.30px] w-[29px]">
                      #
                    </Button>
                    <Text
                      className="font-normal ml-[8px] my-[5px] not-italic text-bluegray_202 text-left tracking-[-0.10px] w-[auto]"
                      variant="body59"
                    >
                      Landing Design
                    </Text>
                    <div className="flex items-center justify-start mb-[4px] ml-[116px] mt-[7px] w-[auto]">
                      <Text
                        className="bg-gray_500_2d h-[18px] justify-center not-italic px-[4px] rounded-[4px] text-gray_504 text-left tracking-[-0.10px] w-[20px]"
                        variant="body71"
                      >
                        12
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[8px] items-end justify-start mt-[10px] md:w-[100%] w-[47%]">
                    <Button className="bg-bluegray_900_3f cursor-pointer font-normal h-[29px] leading-[normal] not-italic py-[5px] rounded-[14px] text-[14px] text-bluegray_202 text-center tracking-[-0.30px] w-[29px]">
                      #
                    </Button>
                    <Text
                      className="font-normal my-[5px] not-italic text-bluegray_202 text-left tracking-[-0.30px] w-[auto]"
                      variant="body59"
                    >
                      Design Phase 2
                    </Text>
                  </div>
                  <div className="flex flex-row items-end justify-start mt-[9px] w-[100%]">
                    <Button className="bg-bluegray_900_3f cursor-pointer font-normal h-[29px] leading-[normal] not-italic py-[5px] rounded-[14px] text-[14px] text-bluegray_202 text-center tracking-[-0.30px] w-[29px]">
                      #
                    </Button>
                    <Text
                      className="font-normal ml-[8px] my-[5px] not-italic text-bluegray_202 text-left tracking-[-0.10px] w-[auto]"
                      variant="body59"
                    >
                      Brand Suggestion
                    </Text>
                    <div className="flex items-center justify-start mb-[4px] ml-[103px] mt-[7px] w-[auto]">
                      <Text
                        className="bg-gray_500_2d h-[18px] justify-center not-italic px-[4px] rounded-[4px] text-gray_504 text-left tracking-[-0.10px] w-[20px]"
                        variant="body71"
                      >
                        85
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[8px] items-center justify-start mt-[10px] md:w-[100%] w-[35%]">
                    <Button className="bg-bluegray_900_3f cursor-pointer font-normal h-[29px] leading-[normal] not-italic py-[5px] rounded-[14px] text-[14px] text-bluegray_202 text-center tracking-[-0.30px] w-[29px]">
                      #
                    </Button>
                    <Text
                      className="font-normal not-italic text-bluegray_202 text-left tracking-[-0.10px] w-[auto]"
                      variant="body59"
                    >
                      Reporting
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[1080px] relative w-[100%]">
          <Img
            src="images/img_bgimg_1080x1545.png"
            className="h-[1080px] m-[auto] object-cover w-[100%]"
            alt="bgimg"
          />
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
            <Line className="bg-bluegray_910 h-[1px] w-[100%]" />
            <div className="bg-bluegray_900_7f flex md:flex-col flex-row md:gap-[20px] items-center justify-end p-[24px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_user_gray_504_15x15.svg"
                className="h-[22px] w-[22px]"
                alt="user Two"
              />
              <Img
                src="images/img_user_gray_504_22x22.svg"
                className="h-[22px] md:ml-[0] ml-[21px] w-[22px]"
                alt="user Three"
              />
              <div className="flex md:flex-1 items-center justify-start mb-[2px] md:ml-[0] ml-[18px] md:w-[100%] w-[88%]">
                <Input
                  className="font-normal leading-[normal] not-italic pl-[16px] pr-[12px] py-[12px] text-[14px] placeholder:text-gray_504 text-gray_504 text-left w-[100%]"
                  wrapClassName="bg-bluegray_910 border-[1px] border-bluegray_910 border-solid rounded-[6px] w-[100%]"
                  name="Typeyourmessage One"
                  placeholder="Type your message..."
                ></Input>
              </div>
              <Img
                src="images/img_microphone.svg"
                className="h-[22px] md:ml-[0] ml-[18px] w-[22px]"
                alt="microphone"
              />
              <Button className="bg-green_400 border-[1px] border-green_400 border-solid flex h-[43px] items-center justify-center mb-[2px] md:ml-[0] ml-[15px] p-[10px] rounded-[6px] w-[43px]">
                <Img
                  src="images/img_send_white_a700.svg"
                  className="h-[22px]"
                  alt="send"
                />
              </Button>
            </div>
          </div>
          <div className="absolute flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] w-[97%]">
            <div className="flex items-center justify-start md:w-[100%] w-[14%]">
              <div className="flex flex-col justify-start w-[100%]">
                <Text
                  className="bg-gray_801 font-normal h-[47px] md:ml-[0] ml-[44px] not-italic pl-[19px] sm:pr-[20px] pr-[35px] py-[13px] rounded-[3px] text-left text-shadow-ts text-white_A700_cc w-[162px]"
                  variant="body54"
                >
                  Good morning 😊
                </Text>
                <div className="flex flex-row gap-[16px] items-end justify-start md:w-[100%] w-[44%]">
                  <div className="flex h-[28px] items-center justify-start w-[28px]">
                    <Img
                      src="images/img_user_28x28.png"
                      className="h-[28px] md:h-[auto] rounded-[50%] w-[28px]"
                      alt="user Four"
                    />
                  </div>
                  <Text
                    className="mt-[10px] not-italic text-gray_504 text-left w-[auto]"
                    variant="body66"
                  >
                    10:07 am
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start md:ml-[0] ml-[1051px] mt-[24px] md:w-[100%] w-[30%]">
              <div className="flex flex-col gap-[12px] justify-start w-[100%]">
                <div className="bg-green_400_3a flex items-start justify-end p-[11px] rounded-[3px] w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[7px] mt-[2px] not-italic text-left text-white_A700_cc w-[auto]"
                    variant="body54"
                  >
                    Good morning, How are you? What about our next meeting?
                  </Text>
                </div>
                <div className="flex flex-row gap-[7px] items-start justify-end ml-[auto] md:w-[100%] w-[15%]">
                  <Img
                    src="images/img_cursor.svg"
                    className="h-[14px] w-[14px]"
                    alt="cursor"
                  />
                  <Text
                    className="not-italic text-gray_504 text-left w-[auto]"
                    variant="body66"
                  >
                    10:12 am
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start mt-[26px] md:w-[100%] w-[56%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[44px] md:w-[100%] w-[95%]">
                  <Input
                    className="font-normal leading-[normal] not-italic pl-[19px] sm:pr-[20px] pr-[35px] py-[13px] text-[15px] text-left placeholder:text-white_A700_cc text-white_A700_cc w-[100%]"
                    wrapClassName="bg-gray_801 rounded-[3px] shadow-bs10 sm:w-[100%] w-[60%]"
                    name="time Two"
                    placeholder="Yeah everything is fine. Our next meeting tomorrow at 10.00 AM"
                  ></Input>
                  <Input
                    className="font-normal leading-[normal] not-italic pl-[19px] sm:pr-[20px] pr-[35px] py-[13px] text-[15px] text-left placeholder:text-white_A700_cc text-white_A700_cc w-[100%]"
                    wrapClassName="bg-gray_801 rounded-[3px] shadow-bs10 w-[100%]"
                    name="msgFour"
                    placeholder="Hey, I&#39;m going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁."
                  ></Input>
                </div>
                <div className="flex flex-row gap-[16px] items-end justify-start md:w-[100%] w-[11%]">
                  <div className="flex h-[28px] items-center justify-start w-[28px]">
                    <Img
                      src="images/img_user_28x28.png"
                      className="h-[28px] md:h-[auto] rounded-[50%] w-[28px]"
                      alt="user Five"
                    />
                  </div>
                  <Text
                    className="mb-[2px] mt-[9px] not-italic text-gray_504 text-left w-[auto]"
                    variant="body66"
                  >
                    10:13 am
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start md:ml-[0] ml-[1342px] mt-[24px] md:w-[100%] w-[11%]">
              <div className="flex flex-col gap-[12px] justify-start w-[100%]">
                <Text
                  className="bg-green_400_3a font-normal h-[46px] not-italic pb-[11px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[14px] rounded-[3px] text-left text-white_A700_cc w-[155px]"
                  variant="body54"
                >
                  Wow that&#39;s great
                </Text>
                <div className="flex flex-row gap-[7px] items-start justify-end ml-[auto] md:w-[100%] w-[43%]">
                  <Img
                    src="images/img_cursor.svg"
                    className="h-[14px] w-[14px]"
                    alt="cursor One"
                  />
                  <Text
                    className="not-italic text-gray_504 text-left w-[auto]"
                    variant="body66"
                  >
                    10:14 am
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start mt-[27px] md:w-[100%] w-[24%]">
              <div className="flex flex-col justify-start w-[100%]">
                <List
                  className="sm:flex-col flex-row gap-[10px] grid grid-cols-2 md:ml-[0] ml-[45px] w-[88%]"
                  orientation="horizontal"
                >
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="h-[99px] relative w-[100%]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[99px] m-[auto] object-cover rounded-[4px] w-[100%]"
                        alt="ImgOne"
                      />
                      <div className="absolute bg-gray_800_b2 bottom-[13%] flex items-center justify-end p-[2px] right-[6%] rounded-[3px] w-[18%]">
                        <Img
                          src="images/img_settings_white_a700.svg"
                          className="h-[18px] mt-[2px] w-[18px]"
                          alt="settings Two"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="h-[99px] relative w-[100%]">
                      <Img
                        src="images/img_img2.png"
                        className="h-[99px] m-[auto] object-cover rounded-[4px] w-[100%]"
                        alt="ImgTwo"
                      />
                      <div className="absolute bg-gray_800_b2 bottom-[13%] flex items-center justify-end p-[2px] right-[6%] rounded-[3px] w-[18%]">
                        <Img
                          src="images/img_settings_white_a700.svg"
                          className="h-[18px] mt-[2px] w-[18px]"
                          alt="settings Three"
                        />
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row gap-[16px] items-end justify-start md:w-[100%] w-[26%]">
                  <div className="flex h-[28px] items-center justify-start w-[28px]">
                    <Img
                      src="images/img_user_28x28.png"
                      className="h-[28px] md:h-[auto] rounded-[50%] w-[28px]"
                      alt="user Six"
                    />
                  </div>
                  <Text
                    className="mt-[10px] not-italic text-gray_504 text-left w-[auto]"
                    variant="body66"
                  >
                    10:15 am
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start md:ml-[0] ml-[1124px] mt-[24px] md:w-[100%] w-[25%]">
              <div className="flex flex-col gap-[11px] justify-start w-[100%]">
                <div className="bg-green_400_3a flex items-center justify-end p-[11px] rounded-[3px] w-[100%]">
                  <div className="border-[1px] border-green_400 border-solid flex items-center justify-start p-[17px] rounded-[6px] md:w-[100%] w-[95%]">
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Button className="bg-green_400_33 flex h-[38px] items-center justify-center p-[8px] rounded-[50%] w-[38px]">
                        <Img
                          src="images/img_clock_green_400.svg"
                          className="h-[20px]"
                          alt="clock"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-start ml-[16px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_202 text-left w-[auto]"
                          variant="body59"
                        >
                          design-phase-1-approved.pdf
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_504 text-left w-[auto]"
                          variant="body61"
                        >
                          12.5 MB
                        </Text>
                      </div>
                      <Img
                        src="images/img_download_gray_504.svg"
                        className="h-[20px] ml-[71px] mt-[6px] w-[20px]"
                        alt="download"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[7px] items-start justify-end ml-[auto] md:w-[100%] w-[18%]">
                  <Img
                    src="images/img_cursor.svg"
                    className="h-[14px] w-[14px]"
                    alt="cursor Two"
                  />
                  <Text
                    className="not-italic text-gray_504 text-left w-[auto]"
                    variant="body66"
                  >
                    10:16 am
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[16px] items-start justify-start mt-[27px] w-[10%] md:w-[100%]">
              <div className="flex h-[28px] items-center justify-start mt-[28px] w-[28px]">
                <Img
                  src="images/img_user_28x28.png"
                  className="h-[28px] md:h-[auto] rounded-[50%] w-[28px]"
                  alt="user Seven"
                />
              </div>
              <Text
                className="bg-gray_801 font-normal h-[47px] mb-[9px] not-italic pl-[19px] sm:pr-[20px] pr-[33px] py-[13px] rounded-[3px] text-left text-shadow-ts text-white_A700_cc w-[97px]"
                variant="body54"
              >
                typing...
              </Text>
            </div>
          </div>
          <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
            <div className="bg-bluegray_900_0c flex items-center justify-end pt-[22px] w-[100%]">
              <div className="flex flex-col gap-[26px] items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[97%]">
                  <div className="h-[38px] relative w-[38px]">
                    <Img
                      src="images/img_user_38x38.png"
                      className="h-[38px] m-[auto] rounded-[50%] w-[38px]"
                      alt="User Eight"
                    />
                    <div className="absolute bg-teal_A700 border-[2px] border-gray_910 border-solid bottom-[0] h-[10px] right-[0] rounded-[50%] w-[10px]"></div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[16px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_202 text-left w-[auto]"
                      variant="body47"
                    >
                      Bella Cote
                    </Text>
                    <Text
                      className="mt-[3px] not-italic text-gray_504 text-left w-[auto]"
                      variant="body60"
                    >
                      Online
                    </Text>
                  </div>
                  <Img
                    src="images/img_search_bluegray_202.svg"
                    className="h-[22px] md:ml-[0] ml-[1133px] w-[22px]"
                    alt="search"
                  />
                  <Img
                    src="images/img_call_bluegray_202.svg"
                    className="h-[22px] md:ml-[0] ml-[30px] w-[22px]"
                    alt="call One"
                  />
                  <Img
                    src="images/img_videocamera_bluegray_202.svg"
                    className="h-[22px] md:ml-[0] ml-[31px] w-[22px]"
                    alt="videocamera"
                  />
                  <Img
                    src="images/img_info_bluegray_202.svg"
                    className="h-[22px] md:ml-[0] ml-[29px] w-[22px]"
                    alt="info"
                  />
                  <Img
                    src="images/img_overflowmenu_bluegray_202.svg"
                    className="h-[22px] md:ml-[0] ml-[30px] w-[22px]"
                    alt="overflowmenu"
                  />
                </div>
                <Line className="bg-bluegray_910 h-[1px] w-[100%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DarkChatsPage;
