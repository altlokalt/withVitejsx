import React from "react";

import { Img, Line, Text, Button, List } from "components";

const DekstopTwoPage = () => {
  return (
    <>
      <div className="bg-gray_954 flex font-montserrat items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <Img
            src="images/img_sidebar_gray_905.svg"
            className="h-[1024px] w-[auto]"
            alt="Sidebar"
          />
          <div className="flex md:flex-1 flex-col gap-[22px] items-center justify-start md:px-[20px] md:w-[100%] w-[92%]">
            <div className="bg-gray_905 flex md:flex-col flex-row md:gap-[20px] items-center justify-start p-[14px] w-[100%]">
              <div className="bg-bluegray_911 flex md:flex-1 flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[18px] md:mt-[0] my-[10px] p-[8px] rounded-[26px] md:w-[100%] w-[39%]">
                <Img
                  src="images/img_search_white_a700_24x24.svg"
                  className="h-[24px] ml-[16px] w-[24px]"
                  alt="search"
                />
                <Line className="bg-bluegray_501 h-[36px] w-[1px]" />
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body59"
                >
                  Search...
                </Text>
              </div>
              <Button className="bg-bluegray_938 flex h-[52px] items-center justify-center md:ml-[0] ml-[278px] md:mt-[0] my-[10px] p-[14px] rounded-[50%] w-[52px]">
                <Img
                  src="images/img_car_white_a700.svg"
                  className="h-[24px]"
                  alt="car"
                />
              </Button>
              <Button className="bg-bluegray_938 flex h-[52px] items-center justify-center md:ml-[0] ml-[16px] md:mt-[0] my-[10px] p-[14px] rounded-[50%] w-[52px]">
                <Img
                  src="images/img_notification_white_a700.svg"
                  className="h-[24px]"
                  alt="notification"
                />
              </Button>
              <Line className="bg-bluegray_711 md:h-[1px] h-[72px] md:ml-[0] ml-[24px] md:w-[100%] w-[1px]" />
              <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[24px] md:w-[100%] w-[24%]">
                <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                  <div className="bg-light_green_200 h-[52px] rounded-[50%] w-[52px]"></div>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body47"
                    >
                      Maswell Edwinson
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_303 text-left w-[auto]"
                      variant="body67"
                    >
                      New User
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[18px] w-[18px]"
                  alt="arrowdown"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[32px] items-start justify-between md:w-[100%] w-[98%]">
              <div className="flex flex-col gap-[41px] items-center justify-start md:mt-[0] mt-[14px] md:w-[100%] w-[63%]">
                <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[97%]">
                    <div className="flex flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[auto]">
                      <Text
                        className="font-bold text-left text-white_A700 w-[auto]"
                        variant="body22"
                      >
                        Welcome Back, Maxwell
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_301 text-left w-[auto]"
                        variant="body50"
                      >
                        A happy day with your favorite musics
                      </Text>
                    </div>
                    <Img
                      src="images/img_action.svg"
                      className="h-[46px] sm:mt-[0] mt-[23px] w-[104px]"
                      alt="action"
                    />
                  </div>
                  <div className="bg-light_green_200 flex items-center justify-start rounded-[16px] w-[100%]">
                    <div className="bg-gradient13  flex flex-col items-start justify-center p-[24px] sm:px-[20px] rounded-[16px] w-[100%]">
                      <div className="bg-yellow_600_4c flex flex-row gap-[8px] items-center justify-start mt-[123px] px-[16px] py-[8px] rounded-[18px] w-[auto]">
                        <div className="bg-yellow_601 h-[10px] rounded-[50%] w-[10px]"></div>
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body50"
                        >
                          LIVESTREAM
                        </Text>
                      </div>
                      <Text
                        className="font-semibold mt-[8px] text-left text-white_A700 w-[auto]"
                        variant="body26"
                      >
                        Live Bigger Music Peformance{" "}
                      </Text>
                      <Text
                        className="font-normal mb-[8px] mt-[5px] not-italic text-left text-white_A700"
                        variant="body67"
                      >
                        Listen to live music concerts directly through the
                        streaming that we <br />
                        provide for free...
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[22px] items-center justify-start w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body37"
                      >
                        Top Weekly Trending
                      </Text>
                      <div className="flex flex-row gap-[16px] items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-gray_301 text-left w-[auto]"
                          variant="body50"
                        >
                          Show More
                        </Text>
                        <Img
                          src="images/img_arrowright_gray_307.svg"
                          className="h-[24px] w-[24px]"
                          alt="arrowright"
                        />
                      </div>
                    </div>
                    <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                      <List
                        className="flex-col gap-[8px] grid items-center w-[100%]"
                        orientation="vertical"
                      >
                        <div className="border-b-[1px] border-bluegray_602 border-solid flex flex-1 items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[96%]">
                            <Text
                              className="font-light text-gray_303 text-left w-[auto]"
                              variant="body37"
                            >
                              03
                            </Text>
                            <div className="bg-light_green_200 flex h-[50px] items-center justify-start md:ml-[0] ml-[25px] rounded-[50%] w-[50px]">
                              <div className="bg-light_green_200 h-[50px] rounded-[50%] w-[50px]"></div>
                            </div>
                            <Text
                              className="font-medium md:ml-[0] ml-[16px] text-gray_303 text-left w-[auto]"
                              variant="body43"
                            >
                              Heat Waves
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[72px] not-italic text-gray_303 text-left w-[auto]"
                              variant="body50"
                            >
                              Glass Animals
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[78px] not-italic text-gray_303 text-left w-[auto]"
                              variant="body50"
                            >
                              02:56
                            </Text>
                            <Img
                              src="images/img_action_bluegray_113.svg"
                              className="h-[32px] md:ml-[0] ml-[73px] w-[126px]"
                              alt="action One"
                            />
                          </div>
                        </div>
                        <div className="bg-amber_400_4c border-b-[1px] border-bluegray_602 border-solid flex flex-1 items-center justify-start p-[16px] w-[100%]">
                          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[97%]">
                            <Text
                              className="font-medium h-[30px] text-left text-white_A701 w-[auto]"
                              variant="body37"
                            >
                              02
                            </Text>
                            <div className="bg-light_green_200 h-[50px] md:ml-[0] ml-[24px] rounded-[50%] w-[50px]"></div>
                            <Text
                              className="font-semibold md:ml-[0] ml-[16px] text-left text-white_A701 w-[auto]"
                              variant="body43"
                            >
                              Stay
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] ml-[148px] text-left text-white_A701 w-[auto]"
                              variant="body50"
                            >
                              The Kid Laroi, Justin...
                            </Text>
                            <Text
                              className="font-medium md:ml-[0] ml-[16px] text-left text-white_A701 w-[auto]"
                              variant="body50"
                            >
                              02:20
                            </Text>
                            <Img
                              src="images/img_action_white_a700.svg"
                              className="h-[32px] md:ml-[0] ml-[71px] w-[127px]"
                              alt="action Two"
                            />
                          </div>
                        </div>
                        <div className="border-b-[1px] border-bluegray_602 border-solid flex flex-1 items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[96%]">
                            <Text
                              className="font-light text-gray_303 text-left w-[auto]"
                              variant="body37"
                            >
                              01
                            </Text>
                            <div className="bg-light_green_200 h-[50px] md:ml-[0] ml-[31px] rounded-[50%] w-[50px]"></div>
                            <Text
                              className="font-medium md:ml-[0] ml-[16px] text-gray_303 text-left w-[auto]"
                              variant="body43"
                            >
                              Easy On Me
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[74px] not-italic text-gray_303 text-left w-[auto]"
                              variant="body50"
                            >
                              Adele
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[144px] not-italic text-gray_303 text-left w-[auto]"
                              variant="body50"
                            >
                              03:46
                            </Text>
                            <Img
                              src="images/img_action_bluegray_113_32x126.svg"
                              className="h-[32px] md:ml-[0] ml-[71px] w-[126px]"
                              alt="action Three"
                            />
                          </div>
                        </div>
                        <div className="border-b-[1px] border-bluegray_602 border-solid flex flex-1 items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[96%]">
                            <Text
                              className="font-light h-[29px] text-gray_303 text-left w-[auto]"
                              variant="body37"
                            >
                              03
                            </Text>
                            <div className="bg-light_green_200 h-[50px] md:ml-[0] ml-[25px] w-[50px]"></div>
                            <Text
                              className="font-medium md:ml-[0] ml-[16px] text-gray_303 text-left w-[auto]"
                              variant="body43"
                            >
                              Dynamite
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[92px] not-italic text-gray_303 text-left w-[auto]"
                              variant="body50"
                            >
                              BTS
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[159px] not-italic text-gray_303 text-left w-[auto]"
                              variant="body50"
                            >
                              02:56
                            </Text>
                            <Img
                              src="images/img_action_bluegray_113.svg"
                              className="h-[32px] md:ml-[0] ml-[73px] w-[126px]"
                              alt="action Four"
                            />
                          </div>
                        </div>
                        <div className="border-b-[1px] border-bluegray_602 border-solid flex flex-1 items-center justify-start p-[16px] rounded-[12px] w-[100%]">
                          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[96%]">
                            <Text
                              className="font-light h-[29px] text-gray_303 text-left w-[auto]"
                              variant="body37"
                            >
                              03
                            </Text>
                            <div className="bg-light_green_200 flex h-[50px] items-center justify-start md:ml-[0] ml-[25px] rounded-[50%] w-[50px]">
                              <div className="bg-light_green_200 h-[50px] rounded-[50%] w-[50px]"></div>
                            </div>
                            <Text
                              className="font-medium md:ml-[0] ml-[16px] text-gray_303 text-left w-[auto]"
                              variant="body43"
                            >
                              Heat Waves
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[72px] not-italic text-gray_303 text-left w-[auto]"
                              variant="body50"
                            >
                              Glass Animals
                            </Text>
                            <Text
                              className="font-normal md:ml-[0] ml-[78px] not-italic text-gray_303 text-left w-[auto]"
                              variant="body50"
                            >
                              02:56
                            </Text>
                            <Img
                              src="images/img_action_bluegray_113.svg"
                              className="h-[32px] md:ml-[0] ml-[73px] w-[126px]"
                              alt="action Five"
                            />
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_905 flex flex-col gap-[44px] items-center justify-start mb-[58px] p-[32px] sm:px-[20px] md:w-[100%] w-[35%]">
                <div className="flex flex-col items-start justify-start mt-[11px] w-[100%]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    variant="body37"
                  >
                    Top Weekly Artist
                  </Text>
                  <div className="flex flex-row gap-[12px] items-start justify-start mt-[29px] w-[auto]">
                    <Button className="bg-amber_600 cursor-pointer font-normal leading-[normal] min-w-[112px] not-italic sm:px-[20px] px-[24px] py-[12px] rounded-[22px] text-[16px] text-center text-white_A701 w-[auto]">
                      Popular
                    </Button>
                    <Button className="border-[1px] border-amber_600 border-solid cursor-pointer font-normal leading-[normal] min-w-[85px] not-italic sm:px-[20px] px-[24px] py-[12px] rounded-[22px] text-[16px] text-center text-white_A701 w-[auto]">
                      New
                    </Button>
                    <Button className="border-[1px] border-amber_600 border-solid cursor-pointer font-normal leading-[normal] min-w-[97px] not-italic sm:px-[20px] px-[24px] py-[12px] rounded-[22px] text-[16px] text-center text-white_A701 w-[auto]">
                      Saved
                    </Button>
                  </div>
                  <List
                    className="flex-col grid items-start mt-[24px] sm:w-[100%] w-[auto]"
                    orientation="vertical"
                  >
                    <div className="border-b-[1px] border-bluegray_801 border-solid flex flex-row items-center justify-between py-[16px] sm:w-[100%] w-[385px]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                        <Img
                          src="images/img_close_light_green_200.svg"
                          className="h-[52px] w-[52px]"
                          alt="close"
                        />
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-left text-white_A701 w-[auto]"
                            variant="body47"
                          >
                            Justin Bieber
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_117 text-left w-[auto]"
                            variant="body67"
                          >
                            1.8 M | song monthly playback
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-amber_600_7f flex h-[34px] items-center justify-center p-[8px] rounded-[50%] w-[34px]">
                        <Img
                          src="images/img_arrowright_white_a700_34x34.svg"
                          className=""
                          alt="arrowright One"
                        />
                      </Button>
                    </div>
                    <div className="border-b-[1px] border-bluegray_801 border-solid flex flex-row items-center justify-between py-[16px] sm:w-[100%] w-[385px]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                        <Img
                          src="images/img_close_light_green_200.svg"
                          className="h-[52px] w-[52px]"
                          alt="close One"
                        />
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-left text-white_A701 w-[auto]"
                            variant="body47"
                          >
                            Black Pink
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_117 text-left w-[auto]"
                            variant="body67"
                          >
                            1.5 M | song monthly playback
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-amber_600_7f flex h-[34px] items-center justify-center p-[8px] rounded-[50%] w-[34px]">
                        <Img
                          src="images/img_arrowright_white_a700_34x34.svg"
                          className=""
                          alt="arrowright Two"
                        />
                      </Button>
                    </div>
                    <div className="border-b-[1px] border-bluegray_801 border-solid flex flex-row items-center justify-between py-[16px] sm:w-[100%] w-[385px]">
                      <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                        <Img
                          src="images/img_close_light_green_200.svg"
                          className="h-[52px] w-[52px]"
                          alt="close Two"
                        />
                        <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-left text-white_A701 w-[auto]"
                            variant="body47"
                          >
                            Ed Sheeran
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_117 text-left w-[auto]"
                            variant="body67"
                          >
                            1.2 M | song monthly playback
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-amber_600_7f flex h-[34px] items-center justify-center p-[8px] rounded-[50%] w-[34px]">
                        <Img
                          src="images/img_arrowright_white_a700_34x34.svg"
                          className=""
                          alt="arrowright Three"
                        />
                      </Button>
                    </div>
                  </List>
                </div>
                <div className="flex flex-col gap-[33px] items-start justify-start mb-[54px] w-[100%]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    variant="body37"
                  >
                    Now Playing
                  </Text>
                  <div className="flex flex-col relative w-[100%]">
                    <div className="flex md:h-[180px] h-[256px] justify-end mx-[auto] w-[100%]">
                      <div className="absolute bg-light_green_200 h-[180px] inset-x-[0] mx-[auto] rounded-[16px] top-[0] w-[180px]"></div>
                      <Text
                        className="font-semibold mb-[34px] mt-[auto] mx-[auto] text-left text-white_A700 w-[auto]"
                        variant="body43"
                      >
                        Stay ~ The Kid Laroi, Justin Bieber
                      </Text>
                      <div className="absolute bottom-[0] flex flex-row gap-[22px] inset-x-[0] items-start justify-between mx-[auto] w-[100%]">
                        <Text
                          className="font-light mt-[60px] text-bluegray_118 text-left w-[auto]"
                          variant="body50"
                        >
                          0:45
                        </Text>
                        <div className="h-[10px] relative w-[69%]">
                          <div className="absolute bottom-[0] h-[4px] inset-x-[0] mx-[auto] w-[100%]">
                            <Line className="absolute bg-amber_600_75 h-[3px] inset-x-[0] mx-[auto] top-[0] w-[100%]" />
                            <Line className="absolute bg-amber_600 h-[4px] inset-y-[0] left-[0] my-[auto] w-[61%]" />
                          </div>
                          <Img
                            src="images/img_oval.svg"
                            className="absolute h-[10px] inset-y-[0] my-[auto] right-[37%] w-[auto]"
                            alt="Oval"
                          />
                        </div>
                        <Text
                          className="font-light mt-[60px] text-bluegray_118 text-right w-[auto]"
                          variant="body50"
                        >
                          02:20
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_action_amber_600.svg"
                      className="h-[42px] mt-[-12px] mx-[auto] w-[132px] z-[1]"
                      alt="action Six"
                    />
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

export default DekstopTwoPage;
