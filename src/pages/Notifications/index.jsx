import React from "react";

import { Img, Input, Text, Button, List } from "components";
import { CloseSVG } from "../../assets/images";

const NotificationsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_103 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[1024px] w-[auto]"
          alt="NavigationWebSidebar"
        />
        <div className="flex flex-col items-center justify-end md:ml-[0] ml-[65px] md:mt-[0] mt-[34px] md:px-[20px] md:w-[100%] w-[59%]">
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] items-center justify-between p-[12px] rounded-[12px] w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
              wrapClassName="bg-white_A700 flex md:w-[100%] pl-[9px] pr-[35px] py-[7px] sm:pr-[20px] sm:w-[100%] w-[auto]"
              name="FrameOne"
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
            <Text
              className="font-normal mr-[29px] not-italic text-gray_522 text-left tracking-[1.00px] w-[auto]"
              variant="body67"
            >
              Filters
            </Text>
          </div>
          <div className="bg-white_A700 flex flex-col gap-[29px] justify-end mt-[25px] sm:pl-[20px] pl-[25px] py-[25px] rounded-[12px] w-[100%]">
            <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[4px] mr-[30px] mt-[3px] rounded-[12px] md:w-[100%] w-[97%]">
              <Text
                className="font-normal not-italic text-gray_964 text-left w-[auto]"
                variant="body41"
              >
                Featured Stories
              </Text>
              <Button
                className="bg-gray_500_36 flex items-center justify-center px-[11px] py-[4px] rounded-[12px] text-center"
                rightIcon={
                  <Img
                    src="images/img_arrowright_gray_964.svg"
                    className="ml-[2px] text-center rounded-[7px]"
                    alt="arrow_right"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-gray_964 text-left">
                  See more
                </div>
              </Button>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-end md:ml-[0] ml-[14px] pr-[165px] sm:pr-[20px] md:pr-[40px] rounded-[12px] md:w-[100%] w-[99%]">
              <div className="bg-light_blue_200_33 flex items-center justify-start md:mt-[0] my-[8px] p-[9px] rounded-[12px] md:w-[100%] w-[7%]">
                <Img
                  src="images/img_plus_light_blue_200.svg"
                  className="h-[18px] rounded-[50%] w-[82%]"
                  alt="plus"
                />
              </div>
              <List
                className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 md:w-[100%] w-[90%]"
                orientation="horizontal"
              >
                <div className="flex items-center justify-start rounded-[12px] shadow-bs61 w-[100%]">
                  <div className="flex h-[55px] md:h-[65px] justify-end relative rounded-[12px] w-[100%]">
                    <div className="absolute bg-gradient18  p-[2px] rounded-[12px] w-[100%] ">
                      <div className="bg-white_A700 border-solid h-[65px] mt-[auto] mx-[auto] rounded-[12px] w-[65px]"></div>
                    </div>
                    <Img
                      src="images/img_image_54x54.png"
                      className="absolute bottom-[0] h-[54px] inset-x-[0] mx-[auto] object-cover rounded-[12px] w-[54px]"
                      alt="Image One"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[12px] shadow-bs61 w-[100%]">
                  <div className="flex h-[55px] md:h-[65px] justify-end relative rounded-[12px] w-[100%]">
                    <div className="absolute bg-gradient18  p-[2px] rounded-[12px] w-[100%] ">
                      <div className="bg-white_A700 border-solid h-[65px] mt-[auto] mx-[auto] rounded-[12px] w-[65px]"></div>
                    </div>
                    <Img
                      src="images/img_image_17.png"
                      className="absolute bottom-[0] h-[54px] inset-x-[0] mx-[auto] object-cover rounded-[12px] w-[54px]"
                      alt="Image Two"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[12px] shadow-bs61 w-[100%]">
                  <div className="flex h-[55px] md:h-[65px] justify-end relative rounded-[12px] w-[100%]">
                    <div className="border-[2px] border-gray_500_66 border-solid h-[65px] mt-[auto] mx-[auto] rounded-[12px] w-[65px]"></div>
                    <Img
                      src="images/img_image_18.png"
                      className="absolute bottom-[0] h-[54px] inset-x-[0] mx-[auto] object-cover rounded-[12px] w-[54px]"
                      alt="Image Three"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[12px] shadow-bs61 w-[100%]">
                  <div className="flex h-[55px] md:h-[65px] justify-end relative rounded-[12px] w-[100%]">
                    <div className="absolute bg-gradient18  p-[2px] rounded-[12px] w-[100%] ">
                      <div className="bg-white_A700 border-solid h-[65px] mt-[auto] mx-[auto] rounded-[12px] w-[65px]"></div>
                    </div>
                    <Img
                      src="images/img_image_19.png"
                      className="absolute bottom-[0] h-[54px] inset-x-[0] mx-[auto] object-cover rounded-[12px] w-[54px]"
                      alt="Image Four"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[12px] shadow-bs61 w-[100%]">
                  <div className="flex h-[55px] md:h-[65px] justify-end relative rounded-[12px] w-[100%]">
                    <div className="absolute bg-gradient18  p-[2px] rounded-[12px] w-[100%] ">
                      <div className="bg-white_A700 border-solid h-[65px] mt-[auto] mx-[auto] rounded-[12px] w-[65px]"></div>
                    </div>
                    <Img
                      src="images/img_image_20.png"
                      className="absolute bottom-[0] h-[54px] inset-x-[0] mx-[auto] object-cover rounded-[12px] w-[54px]"
                      alt="Image Five"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[12px] shadow-bs61 w-[100%]">
                  <div className="flex h-[55px] md:h-[65px] justify-end relative rounded-[12px] w-[100%]">
                    <div className="absolute bg-gradient18  p-[2px] rounded-[12px] w-[100%] ">
                      <div className="bg-white_A700 border-solid h-[65px] mt-[auto] mx-[auto] rounded-[12px] w-[65px]"></div>
                    </div>
                    <Img
                      src="images/img_image_21.png"
                      className="absolute bottom-[0] h-[54px] inset-x-[0] mx-[auto] object-cover rounded-[12px] w-[54px]"
                      alt="Image Six"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[12px] shadow-bs61 w-[100%]">
                  <div className="flex h-[55px] md:h-[65px] justify-end relative rounded-[12px] w-[100%]">
                    <div className="absolute bg-gradient18  p-[2px] rounded-[12px] w-[100%] ">
                      <div className="bg-white_A700 border-solid h-[65px] mt-[auto] mx-[auto] rounded-[12px] w-[65px]"></div>
                    </div>
                    <Img
                      src="images/img_image_22.png"
                      className="absolute bottom-[0] h-[54px] inset-x-[0] mx-[auto] object-cover rounded-[12px] w-[54px]"
                      alt="Image Seven"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start rounded-[12px] shadow-bs61 w-[100%]">
                  <div className="flex h-[55px] md:h-[65px] justify-end relative rounded-[12px] w-[100%]">
                    <div className="absolute bg-gradient18  p-[2px] rounded-[12px] w-[100%] ">
                      <div className="bg-white_A700 border-solid h-[65px] mt-[auto] mx-[auto] rounded-[12px] w-[65px]"></div>
                    </div>
                    <Img
                      src="images/img_image_23.png"
                      className="absolute bottom-[0] h-[54px] inset-x-[0] mx-[auto] object-cover rounded-[12px] w-[54px]"
                      alt="Image Eight"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="bg-white_A700 flex items-center justify-start mt-[25px] p-[25px] sm:px-[20px] rounded-[12px] w-[100%]">
            <div className="flex flex-col gap-[46px] items-center justify-start mb-[4px] md:w-[100%] w-[99%]">
              <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                <div className="flex flex-row gap-[15px] items-center justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[20%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[32px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                      alt="Avatar"
                    />
                  </div>
                  <Text
                    className="font-normal not-italic text-gray_522 text-left w-[auto]"
                    variant="body59"
                  >
                    What are you thinking?{" "}
                  </Text>
                </div>
                <Img
                  src="images/img_overflowmenu_bluegray_101_38x38.svg"
                  className="h-[38px] mt-[4px] w-[38px]"
                  alt="overflowmenu"
                />
              </div>
              <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                <Img
                  src="images/img_icons_gray_103.svg"
                  className="h-[38px] w-[auto]"
                  alt="Icons"
                />
                <Button className="bg-indigo_A206 cursor-pointer font-normal min-w-[121px] not-italic py-[20px] rounded-[29px] text-[14px] text-center text-white_A700 w-[auto]">
                  Share
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-col items-start justify-start mt-[25px] p-[25px] sm:px-[20px] rounded-[12px] w-[100%]">
            <div className="flex flex-row sm:gap-[40px] items-start justify-between md:ml-[0] ml-[4px] md:w-[100%] w-[99%]">
              <div className="flex flex-row gap-[10px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[64px] w-[auto]">
                <Img
                  src="defaultNoData.png"
                  className="h-[41px] md:h-[auto] object-cover rounded-[12px] w-[31%]"
                  alt="Image Nine"
                />
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-gray_964 text-left w-[auto]"
                    variant="body59"
                  >
                    Dustin Housto
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                    variant="body67"
                  >
                    5min ago
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_overflowmenu_bluegray_101.svg"
                className="h-[36px] mt-[5px] w-[auto]"
                alt="overflowmenu One"
              />
            </div>
            <Text
              className="font-normal md:ml-[0] ml-[4px] mt-[41px] not-italic text-gray_522 text-left w-[auto]"
              variant="body59"
            >
              Whether its a driving tour, a cruise or a bus, leaf viewing is a
              great way to spend a fall vacation 😂
            </Text>
            <div className="flex items-center justify-start md:ml-[0] ml-[4px] mt-[22px] md:w-[100%] w-[99%]">
              <div className="flex md:flex-col flex-row gap-[18px] items-center justify-between w-[100%]">
                <Img
                  src="defaultNoData.png"
                  className="md:flex-1 h-[225px] sm:h-[auto] object-cover rounded-[8px] md:w-[100%] w-[auto]"
                  alt="PhotoOne"
                />
                <div className="flex md:flex-1 flex-col gap-[12px] items-center justify-start md:w-[100%] w-[auto]">
                  <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_photo2.png"
                      className="sm:flex-1 h-[106px] md:h-[auto] object-cover rounded-[8px] sm:w-[100%] w-[auto]"
                      alt="PhotoTwo"
                    />
                    <Img
                      src="defaultNoData.png"
                      className="sm:flex-1 h-[106px] md:h-[auto] object-cover rounded-[8px] sm:w-[100%] w-[auto]"
                      alt="PhotoThree"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-between w-[100%]">
                    <Img
                      src="images/img_photo4.png"
                      className="sm:flex-1 h-[106px] md:h-[auto] object-cover rounded-[8px] sm:w-[100%] w-[auto]"
                      alt="PhotoFour"
                    />
                    <div className="h-[106px] relative sm:w-[100%] w-[48%]">
                      <Img
                        src="images/img_photo5.png"
                        className="h-[106px] m-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="PhotoFive"
                      />
                      <Button
                        className="absolute bg-white_A700 flex h-[max-content] inset-[0] items-center justify-center m-[auto] px-[9px] py-[6px] rounded-[4px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_settings_bluegray_101_14x14.svg"
                            className="mr-[6px] text-center right-[3%] absolute"
                            alt="settings"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-gray_964 text-left">
                          15
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start md:ml-[0] ml-[4px] mt-[48px] md:w-[100%] w-[99%]">
              <div className="flex flex-row gap-[5px] items-start justify-start w-[8%]">
                <Img
                  src="images/img_favorite_bluegray_101.svg"
                  className="h-[14px] ml-[5px] mt-[7px] w-[14px]"
                  alt="favorite"
                />
                <Text
                  className="font-normal mt-[4px] not-italic text-gray_964 text-left w-[auto]"
                  variant="body59"
                >
                  326
                </Text>
              </div>
              <div className="flex flex-row gap-[6px] items-start justify-center ml-[15px] w-[8%]">
                <Img
                  src="images/img_laptop_bluegray_101.svg"
                  className="h-[14px] ml-[4px] mt-[7px] w-[14px]"
                  alt="laptop"
                />
                <Text
                  className="font-normal mr-[12px] mt-[4px] not-italic text-gray_964 text-left w-[auto]"
                  variant="body59"
                >
                  148
                </Text>
              </div>
              <Button
                className="bg-gray_100_6c flex items-center justify-center ml-[662px] pl-[10px] pr-[11px] py-[2px] rounded-[4px] text-center"
                rightIcon={
                  <Img
                    src="images/img_reply_gray_964.svg"
                    className="ml-[1px] text-center"
                    alt="reply"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-gray_964 text-left">
                  Share
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex h-[875px] items-center justify-start md:ml-[0] ml-[30px] p-[40px] md:px-[20px] md:w-[100%] w-[26%]"
          style={{ backgroundImage: "url('images/img_group83.svg')" }}
        >
          <div className="flex flex-col gap-[24px] items-end justify-start mb-[18px] mt-[5px] md:w-[100%] w-[98%]">
            <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[35%]">
              <Button className="bg-gray_964 flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                <Img
                  src="images/img_close_white_a700.svg"
                  className="h-[22px]"
                  alt="close"
                />
              </Button>
              <div className="h-[48px] relative w-[48px]">
                <Img
                  src="images/img_image_16.png"
                  className="h-[48px] m-[auto] object-cover rounded-[12px] w-[48px]"
                  alt="Image Ten"
                />
                <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[48px]">
                  <Img
                    src="defaultNoData.png"
                    className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                    alt="Avatar One"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end pt-[76px] w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <div className="flex flex-row items-center justify-start w-[100%]">
                  <div className="bg-red_A204 h-[8px] my-[20px] rounded-[50%] w-[8px]"></div>
                  <div className="flex h-[28px] items-center justify-start ml-[10px] w-[28px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                      alt="Avatar Two"
                    />
                  </div>
                  <div className="flex flex-row gap-[10px] items-start justify-center ml-[10px] w-[44%]">
                    <div className="flex items-center justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        Gunther Ackner
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body67"
                    >
                      4min
                    </Text>
                  </div>
                  <Img
                    src="defaultNoData.png"
                    className="h-[49px] md:h-[auto] ml-[84px] object-cover rounded-[8px] w-[49px]"
                    alt="Photo"
                  />
                </div>
                <div className="flex items-center justify-start mt-[40px] w-[100%]">
                  <div className="flex flex-col gap-[22px] justify-start w-[100%]">
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <div className="bg-red_A204 h-[8px] mb-[29px] mt-[10px] rounded-[50%] w-[8px]"></div>
                      <div className="flex h-[28px] items-center justify-start ml-[10px] w-[28px]">
                        <Img
                          src="images/img_avatar_50.png"
                          className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                          alt="Avatar Three"
                        />
                      </div>
                      <div className="flex flex-col gap-[6px] items-start justify-start ml-[10px] mt-[4px] w-[50%]">
                        <div className="flex flex-row gap-[7px] items-start justify-start md:w-[100%] w-[76%]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body59"
                          >
                            Marriet Miles
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body67"
                          >
                            4min
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          sent you a friend request
                        </Text>
                      </div>
                      <Button className="bg-white_A700_33 flex h-[38px] items-center justify-center mb-[3px] ml-[73px] mt-[6px] p-[10px] rounded-[12px] w-[38px]">
                        <Img
                          src="images/img_camera_bluegray_101_38x38.svg"
                          className="h-[18px]"
                          alt="camera"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[56px] md:w-[100%] w-[48%]">
                      <Button
                        className="bg-green_402 flex items-center justify-center px-[10px] py-[6px] rounded-[4px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_checkmark_white_a700_18x18.svg"
                            className="mr-[4px] text-center"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700">
                          Add
                        </div>
                      </Button>
                      <Button
                        className="bg-gray_900_6c1 flex items-center justify-center pl-[12px] pr-[5px] py-[6px] rounded-[4px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_close_white_a700.svg"
                            className="mr-[4px] text-center"
                            alt="close"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700">
                          Ignore
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start mt-[40px] w-[100%]">
                  <div className="bg-red_A204 h-[8px] mb-[29px] mt-[10px] rounded-[50%] w-[8px]"></div>
                  <div className="flex h-[28px] items-center justify-start ml-[10px] w-[28px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                      alt="Avatar Four"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px] items-start justify-start ml-[10px] mt-[4px] w-[50%]">
                    <div className="flex flex-row gap-[7px] items-start justify-start md:w-[100%] w-[76%]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        Marriet Miles
                      </Text>
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body67"
                      >
                        4min
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      sent you a friend request
                    </Text>
                  </div>
                  <Button className="bg-white_A700_33 flex h-[38px] items-center justify-center mb-[3px] ml-[73px] mt-[6px] p-[10px] rounded-[12px] w-[38px]">
                    <Img
                      src="images/img_favorite_bluegray_101_11x14.svg"
                      className="h-[18px]"
                      alt="favorite One"
                    />
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-end mt-[40px] pl-[18px] w-[100%]">
                  <div className="flex h-[28px] items-center justify-start w-[28px]">
                    <Img
                      src="images/img_avatar_52.png"
                      className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                      alt="Avatar Five"
                    />
                  </div>
                  <div className="flex flex-row gap-[10px] items-start justify-center ml-[10px] w-[46%]">
                    <div className="flex items-center justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        Gunther Ackner
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body67"
                    >
                      4min
                    </Text>
                  </div>
                  <Img
                    src="defaultNoData.png"
                    className="h-[49px] md:h-[auto] ml-[84px] object-cover rounded-[8px] w-[49px]"
                    alt="Photo One"
                  />
                </div>
                <List
                  className="flex-col gap-[40px] grid items-center mt-[40px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 items-end justify-start pl-[18px] w-[100%]">
                    <div className="flex flex-col gap-[22px] justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-start w-[100%]">
                        <div className="flex h-[28px] items-center justify-start w-[28px]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                            alt="Avatar Six"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start ml-[10px] mt-[4px] w-[53%]">
                          <div className="flex flex-row gap-[7px] items-start justify-start md:w-[100%] w-[76%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body59"
                            >
                              Marriet Miles
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body67"
                            >
                              4min
                            </Text>
                          </div>
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body59"
                          >
                            sent you a friend request
                          </Text>
                        </div>
                        <div className="bg-white_A700_33 flex items-center justify-start mb-[3px] ml-[70px] mt-[6px] p-[10px] rounded-[12px] w-[13%]">
                          <Img
                            src="images/img_camera_bluegray_101_38x38.svg"
                            className="h-[18px] w-[19px]"
                            alt="camera One"
                          />
                        </div>
                      </div>
                      <Button
                        className="bg-gray_964 flex items-center justify-center md:ml-[0] ml-[38px] mr-[197px] pl-[10px] pr-[8px] py-[6px] rounded-[4px] sm:ml-[0] text-center"
                        leftIcon={
                          <Img
                            src="images/img_checkmark_white_a700_18x18.svg"
                            className="mr-[4px] text-center"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700">
                          Added
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-start pl-[18px] w-[100%]">
                    <div className="flex flex-col gap-[22px] justify-start w-[100%]">
                      <div className="flex flex-row items-start justify-start w-[100%]">
                        <div className="flex h-[28px] items-center justify-start w-[28px]">
                          <Img
                            src="images/img_avatar_54.png"
                            className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                            alt="Avatar Seven"
                          />
                        </div>
                        <div className="flex flex-col gap-[6px] items-start justify-start ml-[10px] mt-[4px] w-[53%]">
                          <div className="flex flex-row gap-[7px] items-start justify-start md:w-[100%] w-[76%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body59"
                            >
                              Marriet Miles
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body67"
                            >
                              4min
                            </Text>
                          </div>
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body59"
                          >
                            sent you a friend request
                          </Text>
                        </div>
                        <div className="bg-white_A700_33 flex items-center justify-start mb-[3px] ml-[70px] mt-[6px] p-[10px] rounded-[12px] w-[13%]">
                          <Img
                            src="images/img_camera_bluegray_101_38x38.svg"
                            className="h-[18px] w-[19px]"
                            alt="camera Two"
                          />
                        </div>
                      </div>
                      <Img
                        src="images/img_ticket_gray_964.svg"
                        className="h-[8px] md:ml-[0] ml-[38px] w-[auto]"
                        alt="ticket"
                      />
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationsPage;
