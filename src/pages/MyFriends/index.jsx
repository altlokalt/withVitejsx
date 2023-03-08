import React from "react";

import { Img, Input, Text, Button, List } from "components";
import { CloseSVG } from "../../assets/images";

const MyFriendsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_103 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar_indigo_a206.svg"
          className="h-[1024px] w-[auto]"
          alt="NavigationWebSidebar"
        />
        <div className="flex flex-col gap-[42px] items-center justify-start md:ml-[0] ml-[65px] md:mt-[0] mt-[34px] md:px-[20px] md:w-[100%] w-[53%]">
          <div className="bg-white_A700 flex md:flex-col flex-row gap-[13px] items-center justify-start p-[12px] rounded-[12px] w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
              wrapClassName="bg-white_A700 flex md:w-[100%] pl-[9px] pr-[35px] py-[7px] sm:pr-[20px] sm:w-[100%] w-[89%]"
              name="FrameOne"
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
            <Text
              className="font-normal not-italic text-gray_522 text-left tracking-[1.00px] w-[auto]"
              variant="body67"
            >
              Filters
            </Text>
          </div>
          <div className="flex flex-col gap-[34px] items-center justify-start w-[100%]">
            <div className="flex flex-row sm:gap-[40px] items-center justify-between pr-[9px] w-[100%]">
              <Text
                className="font-normal not-italic text-gray_964 text-left w-[auto]"
                variant="body30"
              >
                My Friends
              </Text>
              <Button
                className="flex items-center justify-center pb-[3px] pt-[1px] text-center"
                rightIcon={
                  <Img
                    src="images/img_computer_bluegray_101.svg"
                    className="ml-[3px] text-center"
                    alt="computer"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-gray_964 text-left">
                  Filter
                </div>
              </Button>
            </div>
            <div className="flex items-center justify-start w-[100%]">
              <div className="md:gap-[20px] gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[19px] w-[58px]">
                    <Img
                      src="images/img_avatar_32.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="Avatar"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[44%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_964 w-[auto]"
                      variant="body50"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[2px] not-italic text-center text-gray_522 w-[auto]"
                      variant="body67"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_402 flex items-center justify-center mt-[15px] pl-[9px] pr-[7px] py-[6px] rounded-[4px] text-center"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_white_a700_18x18.svg"
                          className="mr-[4px] text-center"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[19px] w-[58px]">
                    <Img
                      src="images/img_avatar_33.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="Avatar One"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[44%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_964 w-[auto]"
                      variant="body50"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[2px] not-italic text-center text-gray_522 w-[auto]"
                      variant="body67"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_402 flex items-center justify-center mt-[15px] pl-[9px] pr-[7px] py-[6px] rounded-[4px] text-center"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_white_a700_18x18.svg"
                          className="mr-[4px] text-center"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[19px] w-[58px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="Avatar Two"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[44%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_964 w-[auto]"
                      variant="body50"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[2px] not-italic text-center text-gray_522 w-[auto]"
                      variant="body67"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_402 flex items-center justify-center mt-[15px] pl-[9px] pr-[7px] py-[6px] rounded-[4px] text-center"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_white_a700_18x18.svg"
                          className="mr-[4px] text-center"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[19px] w-[58px]">
                    <Img
                      src="images/img_avatar_35.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="Avatar Three"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[44%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_964 w-[auto]"
                      variant="body50"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[2px] not-italic text-center text-gray_522 w-[auto]"
                      variant="body67"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_402 flex items-center justify-center mt-[15px] pl-[9px] pr-[7px] py-[6px] rounded-[4px] text-center"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_white_a700_18x18.svg"
                          className="mr-[4px] text-center"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[19px] w-[58px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="Avatar Four"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[44%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_964 w-[auto]"
                      variant="body50"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[2px] not-italic text-center text-gray_522 w-[auto]"
                      variant="body67"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_402 flex items-center justify-center mt-[15px] pl-[9px] pr-[7px] py-[6px] rounded-[4px] text-center"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_white_a700_18x18.svg"
                          className="mr-[4px] text-center"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[19px] w-[58px]">
                    <Img
                      src="images/img_avatar_37.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="Avatar Five"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[44%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_964 w-[auto]"
                      variant="body50"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[2px] not-italic text-center text-gray_522 w-[auto]"
                      variant="body67"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_402 flex items-center justify-center mt-[15px] pl-[9px] pr-[7px] py-[6px] rounded-[4px] text-center"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_white_a700_18x18.svg"
                          className="mr-[4px] text-center"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[19px] w-[58px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="Avatar Six"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[44%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_964 w-[auto]"
                      variant="body50"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[2px] not-italic text-center text-gray_522 w-[auto]"
                      variant="body67"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_402 flex items-center justify-center mt-[15px] pl-[9px] pr-[7px] py-[6px] rounded-[4px] text-center"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_white_a700_18x18.svg"
                          className="mr-[4px] text-center"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[19px] w-[58px]">
                    <Img
                      src="images/img_avatar_39.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="Avatar Seven"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[44%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_964 w-[auto]"
                      variant="body50"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[2px] not-italic text-center text-gray_522 w-[auto]"
                      variant="body67"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_402 flex items-center justify-center mt-[15px] pl-[9px] pr-[7px] py-[6px] rounded-[4px] text-center"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_white_a700_18x18.svg"
                          className="mr-[4px] text-center"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[20px] rounded-[12px] w-[100%]">
                  <div className="flex h-[58px] items-center justify-start mt-[19px] w-[58px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[58px] md:h-[auto] object-cover rounded-[18px] w-[58px]"
                      alt="Avatar Eight"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[44%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_964 w-[auto]"
                      variant="body50"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[2px] not-italic text-center text-gray_522 w-[auto]"
                      variant="body67"
                    >
                      @BillyGreen
                    </Text>
                    <Button
                      className="bg-green_402 flex items-center justify-center mt-[15px] pl-[9px] pr-[7px] py-[6px] rounded-[4px] text-center"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_white_a700_18x18.svg"
                          className="mr-[4px] text-center"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                        Freinds
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex h-[874px] items-end justify-end md:ml-[0] ml-[30px] p-[25px] md:px-[20px] md:w-[100%] w-[30%]"
          style={{ backgroundImage: "url('images/img_group83.svg')" }}
        >
          <div className="flex flex-col gap-[24px] justify-start mr-[14px] mt-[19px] md:w-[100%] w-[86%]">
            <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[37%]">
              <Button className="bg-light_blue_200 cursor-pointer font-normal h-[48px] not-italic py-[10px] rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]">
                1
              </Button>
              <div className="flex h-[48px] items-center justify-start w-[48px]">
                <Img
                  src="defaultNoData.png"
                  className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                  alt="Avatar Nine"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[41px] items-start justify-start mr-[10px] md:w-[100%] w-[97%]">
              <Text
                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                variant="body41"
              >
                Who to Follow
              </Text>
              <List
                className="flex-col gap-[30px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="Avatar Ten"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-end w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body67"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_101.svg"
                      className="h-[14px]"
                      alt="camera"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_19.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="Avatar Eleven"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-end w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body67"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_101.svg"
                      className="h-[14px]"
                      alt="camera One"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_41.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="Avatar Twelve"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-end w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body67"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_101.svg"
                      className="h-[14px]"
                      alt="camera Two"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="Avatar Thirteen"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-end w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body67"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_101.svg"
                      className="h-[14px]"
                      alt="camera Three"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="Avatar Fourteen"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-end w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body67"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_101.svg"
                      className="h-[14px]"
                      alt="camera Four"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_22.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="Avatar Fifteen"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-end w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body67"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_101.svg"
                      className="h-[14px]"
                      alt="camera Five"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_43.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="Avatar Sixteen"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-end w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body67"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_101.svg"
                      className="h-[14px]"
                      alt="camera Six"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_44.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="Avatar Seventeen"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-end w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body67"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_101.svg"
                      className="h-[14px]"
                      alt="camera Seven"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="Avatar Eighteen"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-end w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body67"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_101.svg"
                      className="h-[14px]"
                      alt="camera Eight"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_46.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="Avatar Nineteen"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-end w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body67"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_101.svg"
                      className="h-[14px]"
                      alt="camera Nine"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_47.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="Avatar Twenty"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body67"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_101.svg"
                      className="h-[14px]"
                      alt="camera Ten"
                    />
                  </Button>
                </div>
                <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="images/img_avatar_48.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="Avatar TwentyOne"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      Cammy Hedling
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body67"
                    >
                      Los Angeles, CA
                    </Text>
                  </div>
                  <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                    <Img
                      src="images/img_camera_bluegray_101.svg"
                      className="h-[14px]"
                      alt="camera Eleven"
                    />
                  </Button>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyFriendsPage;
