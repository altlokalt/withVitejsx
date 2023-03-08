import React from "react";

import { Img, Text, Button, List } from "components";

const SingleEventPage = () => {
  return (
    <>
      <div className="bg-gray_103 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[1024px] w-[auto]"
          alt="NavigationWebSidebar"
        />
        <div className="h-[875px] sm:h-[884px] md:px-[20px] relative md:w-[100%] w-[89%]">
          <div className="h-[875px] sm:h-[884px] m-[auto] w-[100%]">
            <Img
              src="images/img_sidebar_white_a700.svg"
              className="h-[875px] m-[auto] w-[auto]"
              alt="ModalDesktopWhite"
            />
            <div className="absolute md:h-[750px] h-[782px] sm:h-[884px] inset-y-[0] left-[7%] my-[auto] md:w-[100%] w-[56%]">
              <div className="absolute flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] w-[100%]">
                <div className="flex flex-col gap-[10px] justify-start w-[100%]">
                  <div className="flex items-center justify-start md:w-[100%] w-[22%]">
                    <div className="flex flex-row gap-[10px] items-center justify-between md:w-[100%] w-[98%]">
                      <div className="flex h-[48px] items-center justify-start w-[48px]">
                        <Img
                          src="images/img_avatar_15.png"
                          className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                          alt="Avatar"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          Gunther Ackner
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                          variant="body67"
                        >
                          3 days ago
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-end ml-[auto] md:w-[100%] w-[31%]">
                    <div className="flex flex-row items-start justify-start mt-[4px] p-[5px] w-[31%]">
                      <Img
                        src="images/img_reply_gray_964.svg"
                        className="h-[14px] ml-[5px] mt-[2px] w-[14px]"
                        alt="reply"
                      />
                      <Text
                        className="font-normal ml-[4px] not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        Share
                      </Text>
                    </div>
                    <Button
                      className="bg-green_402 flex items-center justify-center ml-[15px] mt-[4px] pl-[9px] pr-[6px] py-[5px] rounded-[4px] text-center"
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
                    <Img
                      src="images/img_overflowmenu_bluegray_101_38x38.svg"
                      className="h-[32px] ml-[15px] w-[auto]"
                      alt="overflowmenu"
                    />
                  </div>
                </div>
                <Img
                  src="images/img_image_281x794.png"
                  className="h-[281px] md:h-[auto] mt-[38px] object-cover rounded-[8px] w-[100%]"
                  alt="Image Two"
                />
                <div className="md:h-[160px] h-[48px] mt-[112px] relative md:w-[100%] w-[77%]">
                  <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] w-[69%]">
                    <List
                      className="sm:flex-col flex-row md:gap-[40px] gap-[90px] grid sm:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-1 flex-row gap-[10px] items-center justify-between sm:ml-[0] w-[100%]">
                        <Button className="bg-gray_103 flex h-[48px] items-center justify-center p-[15px] rounded-[12px] w-[48px]">
                          <Img
                            src="images/img_clock_bluegray_101.svg"
                            className="h-[18px]"
                            alt="clock"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-end w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            12 December, 2019{" "}
                          </Text>
                          <Text
                            className="font-normal mt-[3px] not-italic text-gray_522 text-left w-[auto]"
                            variant="body67"
                          >
                            From 9:00am to 6:00pm
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-[10px] items-center justify-between sm:ml-[0] w-[100%]">
                        <Button className="bg-gray_103 flex h-[48px] items-center justify-center p-[15px] rounded-[12px] w-[48px]">
                          <Img
                            src="images/img_reply_gray_964_48x48.svg"
                            className="h-[18px]"
                            alt="reply One"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            $60 - $90
                          </Text>
                          <Text
                            className="font-normal my-[2px] not-italic text-gray_522 text-left w-[auto]"
                            variant="body67"
                          >
                            +30% Taxes
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                  <Text
                    className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-gray_964 text-left w-[max-content]"
                    variant="body30"
                  >
                    2019 DUB Show at Los Angeles Auto Show
                  </Text>
                </div>
                <div className="flex flex-col gap-[27px] items-start justify-start mt-[4px] py-[2px] w-[100%]">
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_964 text-left w-[auto]"
                      variant="body50"
                    >
                      Event Description
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-gray_522 text-left w-[100%]"
                      variant="body59"
                    >
                      For evidence of the double standard, we need look no
                      farther than Arlington, Oregon, where Mayor Carmen
                      Kontur-Gronquist was recalled in a 142-139 vote after the
                      town’s denizens discovered that the mayor’s MySpace page
                      featured photos of her in lingerie. Although
                      Kontur-Gronquist is alleging election fraud and
                      challenging the returns, and even though the mayoral
                      position was unpaid, no one is arguing that her MySpace
                      page did her in.{" "}
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-start mb-[2px] md:w-[100%] w-[48%]">
                    <div className="h-[17px] relative sm:w-[100%] w-[11%]">
                      <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                        <div className="bg-gray_100_90 flex items-start justify-end rounded-[4px] w-[100%]">
                          <Text
                            className="font-normal md:ml-[0] ml-[6px] not-italic text-left text-white_A700 w-[auto]"
                            variant="body67"
                          >
                            Car
                          </Text>
                        </div>
                      </div>
                      <div className="absolute h-[17px] inset-[0] justify-center m-[auto] w-[100%]">
                        <div className="absolute bg-gray_100_90 h-[17px] inset-[0] justify-center m-[auto] rounded-[4px] w-[100%]"></div>
                        <Text
                          className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-center text-gray_522 w-[max-content]"
                          variant="body67"
                        >
                          Car
                        </Text>
                      </div>
                    </div>
                    <div className="md:h-[17px] h-[18px] relative sm:w-[100%] w-[22%]">
                      <div className="absolute bg-gray_100_90 h-[17px] inset-x-[0] mx-[auto] rounded-[4px] top-[0] w-[100%]"></div>
                      <Text
                        className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-center text-gray_522 w-[max-content]"
                        variant="body67"
                      >
                        Los Angeles
                      </Text>
                    </div>
                    <Text
                      className="bg-gray_100_90 font-normal h-[17px] justify-center not-italic pl-[8px] pr-[5px] rounded-[4px] text-center text-gray_522 w-[70px]"
                      variant="body67"
                    >
                      Exhibition
                    </Text>
                    <div className="h-[17px] relative sm:w-[100%] w-[12%]">
                      <div className="absolute bg-gray_100_90 h-[17px] inset-[0] justify-center m-[auto] rounded-[4px] w-[100%]"></div>
                      <Text
                        className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-center text-gray_522 w-[max-content]"
                        variant="body67"
                      >
                        Auto
                      </Text>
                    </div>
                    <div className="h-[17px] relative sm:w-[100%] w-[12%]">
                      <div className="absolute bg-gray_100_90 h-[17px] inset-[0] justify-center m-[auto] rounded-[4px] w-[100%]"></div>
                      <Text
                        className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-center text-gray_522 w-[max-content]"
                        variant="body67"
                      >
                        DUB
                      </Text>
                    </div>
                    <div className="h-[17px] relative sm:w-[100%] w-[13%]">
                      <div className="absolute bg-gray_100_90 h-[17px] inset-[0] justify-center m-[auto] rounded-[4px] w-[100%]"></div>
                      <Text
                        className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-center text-gray_522 w-[max-content]"
                        variant="body67"
                      >
                        Show
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="absolute bg-gray_103 flex items-center justify-center left-[0] pl-[20px] pr-[22px] py-[20px] rounded-[12px] sm:pr-[20px] text-center top-[0]"
                leftIcon={
                  <Img
                    src="images/img_arrowleft_gray_522.svg"
                    className="mr-[10px] text-center right-[1%] absolute"
                    alt="arrow_left"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-gray_522 text-left">
                  Back
                </div>
              </Button>
            </div>
          </div>
          <div
            className="absolute bg-cover bg-no-repeat flex h-[100%] inset-y-[0] items-center justify-start my-[auto] pl-[16px] right-[0] w-[32%]"
            style={{ backgroundImage: "url('images/img_side_gray_522.png')" }}
          >
            <div className="bg-gray_964 flex flex-col md:gap-[40px] gap-[60px] items-center justify-start pb-[40px] sm:px-[20px] px-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[100%]">
              <div className="flex items-center justify-start md:w-[100%] w-[97%]">
                <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body41"
                  >
                    Address
                  </Text>
                  <Img
                    src="defaultNoData.png"
                    className="h-[240px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
                    alt="Image Three"
                  />
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[10px] items-center justify-between w-[52%]">
                      <Button className="bg-white_A700_33 flex h-[48px] items-center justify-center p-[15px] rounded-[12px] w-[48px]">
                        <Img
                          src="images/img_map_bluegray_101.svg"
                          className="h-[18px]"
                          alt="map"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-start pr-[2px] py-[2px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          Los Angeles, CA
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_522 text-left w-[auto]"
                          variant="body67"
                        >
                          189 The Grove Dr
                        </Text>
                      </div>
                    </div>
                    <Button className="border-[2px] border-gray_500_99 border-solid cursor-pointer font-normal min-w-[82px] not-italic py-[6px] rounded-[4px] text-[14px] text-center text-white_A700 w-[auto]">
                      Directions
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[41px] items-start justify-start mb-[28px] md:w-[100%] w-[97%]">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body41"
                >
                  Friends Interested
                </Text>
                <List
                  className="flex-col gap-[30px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="Avatar One"
                      />
                    </div>
                    <Text
                      className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      MadeInAmerica
                    </Text>
                    <Button className="bg-green_402 flex h-[28px] items-center justify-center ml-[161px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_checkmark_white_a700_18x18.svg"
                        className="h-[14px]"
                        alt="checkmark"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="Avatar Two"
                      />
                    </div>
                    <Text
                      className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      MadeInAmerica
                    </Text>
                    <Button className="bg-green_402 flex h-[28px] items-center justify-center ml-[161px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_checkmark_white_a700_18x18.svg"
                        className="h-[14px]"
                        alt="checkmark One"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="images/img_avatar_41.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="Avatar Three"
                      />
                    </div>
                    <Text
                      className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      MadeInAmerica
                    </Text>
                    <Button className="bg-green_402 flex h-[28px] items-center justify-center ml-[161px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_checkmark_white_a700_18x18.svg"
                        className="h-[14px]"
                        alt="checkmark Two"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="images/img_avatar_60.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="Avatar Four"
                      />
                    </div>
                    <Text
                      className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      MadeInAmerica
                    </Text>
                    <Button className="bg-green_402 flex h-[28px] items-center justify-center ml-[161px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_checkmark_white_a700_18x18.svg"
                        className="h-[14px]"
                        alt="checkmark Three"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="images/img_avatar_48.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="Avatar Five"
                      />
                    </div>
                    <Text
                      className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      MadeInAmerica
                    </Text>
                    <Button className="bg-green_402 flex h-[28px] items-center justify-center ml-[161px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_checkmark_white_a700_20x20.svg"
                        className="h-[14px]"
                        alt="checkmark Four"
                      />
                    </Button>
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

export default SingleEventPage;
