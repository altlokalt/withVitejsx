import React from "react";

import { Img, Text, Input, Line, List, Button } from "components";
import { CloseSVG } from "../../assets/images";

const EventsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_103 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[1024px] w-[auto]"
          alt="NavigationWebSidebar"
        />
        <div className="flex flex-col items-start justify-end md:ml-[0] ml-[44px] md:mt-[0] mt-[34px] md:px-[20px] md:w-[100%] w-[60%]">
          <div className="md:h-[111px] sm:h-[58px] h-[63px] relative md:w-[100%] w-[97%]">
            <Text
              className="absolute bottom-[0] font-normal left-[0] not-italic text-gray_964 text-left w-[auto]"
              variant="body30"
            >
              Events
            </Text>
            <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-[40px] inset-x-[0] items-center justify-between mx-[auto] p-[12px] rounded-[12px] top-[0] w-[100%]">
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
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mr-[auto] mt-[40px] md:w-[100%] w-[60%]">
            <div className="h-[25px] relative sm:w-[100%] w-[25%]">
              <div className="flex h-[100%] items-center justify-start ml-[auto] w-[auto]">
                <Text
                  className="font-normal not-italic text-gray_522 text-left w-[auto]"
                  variant="body59"
                >
                  Today
                </Text>
              </div>
              <div className="absolute flex flex-col gap-[6px] h-[100%] inset-[0] justify-center m-[auto] w-[100%]">
                <Text
                  className="font-normal mr-[90px] not-italic text-gray_964 text-left w-[auto]"
                  variant="body59"
                >
                  Anytime
                </Text>
                <Line className="bg-gray_964 h-[2px] md:ml-[0] ml-[95px] w-[35%]" />
              </div>
            </div>
            <div className="flex items-center justify-start sm:ml-[0] ml-[42px] sm:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-gray_522 text-left w-[auto]"
                variant="body59"
              >
                Tomorrow
              </Text>
            </div>
            <div className="flex items-center justify-start sm:ml-[0] ml-[46px] sm:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-gray_522 text-left w-[auto]"
                variant="body59"
              >
                This Week
              </Text>
            </div>
            <div className="flex items-center justify-start sm:ml-[0] ml-[47px] sm:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-gray_522 text-left w-[auto]"
                variant="body59"
              >
                This Month
              </Text>
            </div>
            <div className="flex items-center justify-start sm:ml-[0] ml-[49px] sm:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-gray_522 text-left w-[auto]"
                variant="body59"
              >
                Select
              </Text>
            </div>
          </div>
          <div className="flex items-center justify-start mt-[94px] pb-[25px] w-[100%]">
            <List
              className="sm:flex-col flex-row gap-[36px] grid md:grid-cols-1 grid-cols-2 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-[26px] items-center justify-start mb-[25px] sm:ml-[0] w-[100%]">
                <div className="bg-white_A700 flex items-center justify-start p-[29px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <Img
                      src="images/img_image_149x406.png"
                      className="h-[149px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image One"
                    />
                    <div className="flex flex-row items-start justify-between mt-[16px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start sm:pr-[20px] pr-[38px] w-[auto]">
                        <Button className="border-[2px] border-gray_500_33 border-solid cursor-pointer font-normal min-w-[48px] not-italic py-[6px] rounded-[15px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_964 w-[auto]">
                          10
                        </Button>
                        <div className="flex flex-col items-start justify-end w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            Monday
                          </Text>
                          <Text
                            className="font-normal mt-[3px] not-italic text-gray_522 text-left w-[auto]"
                            variant="body67"
                          >
                            December, 2019
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu_bluegray_101.svg"
                        className="h-[34px] mt-[5px] w-[auto]"
                        alt="overflowmenu"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[16px] pr-[3px] pt-[3px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body41"
                      >
                        Fashion Meetup
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Starts at 9:00am in Los Angeles
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[19px] w-[100%]">
                      <Button
                        className="bg-green_402 flex items-center justify-center pl-[9px] pr-[6px] py-[6px] rounded-[4px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_checkmark_white_a700_18x18.svg"
                            className="mr-[3px] text-center"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                          Interested
                        </div>
                      </Button>
                      <div className="flex relative w-[19%]">
                        <div className="flex my-[auto] w-[69%]">
                          <div className="flex h-[28px] items-center justify-start my-[auto] w-[28px]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                              alt="Avatar"
                            />
                          </div>
                          <div className="flex h-[28px] items-center justify-start ml-[-5px] my-[auto] w-[28px] z-[1]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                              alt="Avatar One"
                            />
                          </div>
                        </div>
                        <Button className="bg-gray_964 cursor-pointer font-normal h-[28px] ml-[-5px] my-[auto] not-italic py-[7px] rounded-[8px] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]">
                          +9
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex items-center justify-start p-[29px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[149px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image One"
                    />
                    <div className="flex flex-row items-start justify-between mt-[16px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start sm:pr-[20px] pr-[38px] w-[auto]">
                        <Text
                          className="border-[2px] border-gray_500_33 border-solid font-normal not-italic pb-[2px] pt-[7px] px-[11px] rounded-[15px] text-center text-gray_964 w-[auto]"
                          variant="body41"
                        >
                          10
                        </Text>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            Monday
                          </Text>
                          <Text
                            className="font-normal mt-[3px] not-italic text-gray_522 text-left w-[auto]"
                            variant="body67"
                          >
                            December, 2019
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu_bluegray_101.svg"
                        className="h-[34px] mt-[5px] w-[auto]"
                        alt="overflowmenu One"
                      />
                    </div>
                    <div className="flex flex-col gap-[9px] items-start justify-start mt-[16px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body41"
                      >
                        Fashion Meetup
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Starts at 9:00am in Los Angeles
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[19px] w-[100%]">
                      <Button
                        className="bg-green_402 flex items-center justify-center pl-[9px] pr-[6px] py-[5px] rounded-[4px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_checkmark_white_a700_18x18.svg"
                            className="mr-[3px] text-center"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                          Interested
                        </div>
                      </Button>
                      <div className="flex relative w-[19%]">
                        <div className="flex my-[auto] w-[69%]">
                          <div className="flex h-[28px] items-center justify-start my-[auto] w-[28px]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                              alt="Avatar Two"
                            />
                          </div>
                          <div className="flex h-[28px] items-center justify-start ml-[-5px] my-[auto] w-[28px] z-[1]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                              alt="Avatar Three"
                            />
                          </div>
                        </div>
                        <Button className="bg-gray_964 cursor-pointer font-normal h-[28px] ml-[-5px] my-[auto] not-italic py-[6px] rounded-[8px] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]">
                          +9
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[26px] items-center justify-start sm:ml-[0] w-[100%]">
                <div className="bg-white_A700 flex items-center justify-start p-[29px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Img
                      src="images/img_image_25.png"
                      className="h-[149px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image Three"
                    />
                    <div className="flex flex-row items-start justify-between mt-[17px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start sm:pr-[20px] pr-[38px] w-[auto]">
                        <Button className="border-[2px] border-gray_500_6c border-solid cursor-pointer font-normal min-w-[48px] not-italic py-[8px] rounded-[15px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-gray_964 w-[auto]">
                          10
                        </Button>
                        <div className="flex flex-col items-start justify-end w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            Wednesday
                          </Text>
                          <Text
                            className="font-normal mt-[3px] not-italic text-gray_522 text-left w-[auto]"
                            variant="body67"
                          >
                            December, 2019
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu_bluegray_101.svg"
                        className="h-[38px] mt-[5px] w-[38px]"
                        alt="overflowmenu One"
                      />
                    </div>
                    <Text
                      className="font-normal leading-[30.00px] mt-[17px] not-italic text-gray_964 text-left sm:w-[100%] w-[79%]"
                      variant="body41"
                    >
                      2019 DUB Show at Los Angeles Auto Show
                    </Text>
                    <Text
                      className="font-normal mt-[11px] not-italic text-gray_522 text-left w-[auto]"
                      variant="body59"
                    >
                      Starts at 9:00am in Los Angeles
                    </Text>
                    <div className="flex flex-row items-start justify-between mt-[12px] w-[100%]">
                      <Button
                        className="border-[2px] border-gray_500_33 border-solid flex items-center justify-center pl-[9px] pr-[6px] py-[6px] rounded-[4px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_checkmark_gray_522.svg"
                            className="mr-[3px] text-center"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-gray_964">
                          Interested
                        </div>
                      </Button>
                      <div className="flex items-center justify-start mt-[2px] w-[auto]">
                        <div className="flex relative w-[100%]">
                          <div className="flex my-[auto] w-[69%]">
                            <div className="flex h-[28px] items-center justify-start my-[auto] w-[28px]">
                              <Img
                                src="defaultNoData.png"
                                className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                                alt="Avatar One"
                              />
                            </div>
                            <div className="flex h-[28px] items-center justify-start ml-[-5px] my-[auto] w-[28px] z-[1]">
                              <Img
                                src="defaultNoData.png"
                                className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                                alt="Avatar One One"
                              />
                            </div>
                          </div>
                          <Button className="bg-gray_964 cursor-pointer font-normal h-[28px] ml-[-5px] my-[auto] not-italic py-[7px] rounded-[8px] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]">
                            +9
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex items-center justify-start p-[29px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[149px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image One One"
                    />
                    <div className="flex flex-row items-start justify-between mt-[16px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start sm:pr-[20px] pr-[38px] w-[auto]">
                        <Text
                          className="border-[2px] border-gray_500_33 border-solid font-normal not-italic pb-[2px] pt-[7px] px-[11px] rounded-[15px] text-center text-gray_964 w-[auto]"
                          variant="body41"
                        >
                          10
                        </Text>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            Monday
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_522 text-left w-[auto]"
                            variant="body67"
                          >
                            December, 2019
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu_bluegray_101.svg"
                        className="h-[34px] mt-[5px] w-[auto]"
                        alt="overflowmenu One One"
                      />
                    </div>
                    <div className="flex flex-col gap-[9px] items-start justify-start mt-[16px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body41"
                      >
                        Fashion Meetup
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Starts at 9:00am in Los Angeles
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[19px] w-[100%]">
                      <Button
                        className="bg-green_402 flex items-center justify-center pl-[9px] pr-[6px] py-[5px] rounded-[4px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_checkmark_white_a700_18x18.svg"
                            className="mr-[3px] text-center"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                          Interested
                        </div>
                      </Button>
                      <div className="flex relative w-[19%]">
                        <div className="flex my-[auto] w-[69%]">
                          <div className="flex h-[28px] items-center justify-start my-[auto] w-[28px]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                              alt="Avatar Two One"
                            />
                          </div>
                          <div className="flex h-[28px] items-center justify-start ml-[-5px] my-[auto] w-[28px] z-[1]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                              alt="Avatar Three One"
                            />
                          </div>
                        </div>
                        <Button className="bg-gray_964 cursor-pointer font-normal h-[28px] ml-[-5px] my-[auto] not-italic py-[6px] rounded-[8px] text-[10.32px] text-center text-white_A700 w-[28px] z-[1]">
                          +9
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex h-[875px] items-end justify-start md:ml-[0] ml-[65px] pl-[16px] md:px-[20px] md:w-[100%] w-[22%]"
          style={{ backgroundImage: "url('images/img_side_gray_522.png')" }}
        >
          <div className="bg-gray_964 flex items-center justify-start pb-[40px] sm:px-[20px] px-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[100%]">
            <div className="flex flex-col items-start justify-start mb-[45px] md:w-[100%] w-[97%]">
              <Text
                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                variant="body41"
              >
                My Next Events
              </Text>
              <List
                className="flex-col gap-[40px] grid items-center mt-[37px] w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[140px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image Five"
                    />
                    <div className="flex flex-row gap-[12px] items-center justify-start md:w-[100%] w-[96%]">
                      <div className="flex flex-col gap-[8px] items-start justify-end w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          Dua Lipa Live Concert
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_522 text-left w-[auto]"
                          variant="body59"
                        >
                          December 12, 2019
                        </Text>
                      </div>
                      <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center my-[9px] p-[7px] rounded-[8px] w-[28px]">
                        <Img
                          src="images/img_checkmark_white_a700_18x18.svg"
                          className="h-[14px]"
                          alt="checkmark"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <Img
                      src="images/img_image_27.png"
                      className="h-[140px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image Six"
                    />
                    <div className="flex flex-row gap-[12px] items-center justify-start md:w-[100%] w-[96%]">
                      <div className="flex flex-col gap-[8px] items-start justify-end w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          Dua Lipa Live Concert
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_522 text-left w-[auto]"
                          variant="body59"
                        >
                          December 12, 2019
                        </Text>
                      </div>
                      <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center my-[9px] p-[7px] rounded-[8px] w-[28px]">
                        <Img
                          src="images/img_checkmark_white_a700_18x18.svg"
                          className="h-[14px]"
                          alt="checkmark One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[140px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image Seven"
                    />
                    <div className="flex flex-row gap-[12px] items-center justify-start md:w-[100%] w-[96%]">
                      <div className="flex flex-col gap-[8px] items-start justify-end w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          Dua Lipa Live Concert
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_522 text-left w-[auto]"
                          variant="body59"
                        >
                          December 12, 2019
                        </Text>
                      </div>
                      <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center my-[9px] p-[7px] rounded-[8px] w-[28px]">
                        <Img
                          src="images/img_checkmark_white_a700_18x18.svg"
                          className="h-[14px]"
                          alt="checkmark Two"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </List>
              <Button
                className="flex items-center justify-center mt-[40px] py-[2px] text-center"
                rightIcon={
                  <Img
                    src="images/img_arrowright_gray_522.svg"
                    className="ml-[15px] text-center"
                    alt="arrow_right"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-gray_522 text-left tracking-[1.00px]">
                  See more
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;
