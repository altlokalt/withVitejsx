import React from "react";

import { Img, Text, Button, Line, List } from "components";

const VideoAnalysisPage = () => {
  return (
    <>
      <div className="bg-gray_61 font-poppins h-[957px] mx-[auto] sm:pr-[20px] md:pr-[40px] pr-[45px] relative w-[100%]">
        <div className="absolute md:h-[412px] h-[873px] right-[5%] top-[0] md:w-[100%] w-[82%]">
          <div className="absolute md:h-[412px] h-[854px] inset-[0] justify-center m-[auto] w-[100%]">
            <div className="absolute md:h-[337px] h-[477px] left-[0] top-[0] md:w-[100%] w-[91%]">
              <div className="absolute bg-teal_501 flex flex-col gap-[24px] inset-x-[0] items-start justify-start mx-[auto] p-[27px] sm:px-[20px] top-[0] w-[100%]">
                <div className="flex flex-row gap-[6px] items-center justify-start md:ml-[0] ml-[13px] md:w-[100%] w-[12%]">
                  <Img
                    src="images/img_arrowleft_white_a700_9x5.svg"
                    className="h-[9px] w-[auto]"
                    alt="arrowleft"
                  />
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body59"
                  >
                    Back to Discover
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mb-[157px] md:ml-[0] ml-[13px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    variant="body41"
                  >
                    Meetings with the Financial Team
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body54"
                  >
                    29 July 2019 - Los Angeles
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[93%]">
                <div className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex md:flex-1 h-[337px] items-center justify-start md:w-[100%] w-[58%]"
                    style={{
                      backgroundImage: "url('images/img_group267.svg')",
                    }}
                  >
                    <div className="bg-black_900_67 flex items-center justify-end p-[133px] sm:px-[20px] md:px-[40px] rounded-[10px] w-[100%]">
                      <Button className="bg-teal_501 flex h-[70px] items-center justify-center p-[21px] sm:px-[20px] rounded-[50%] w-[70px]">
                        <Img
                          src="images/img_path16.svg"
                          className=""
                          alt="PathSixteen"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[20px] items-center justify-start md:w-[100%] w-[41%]">
                    <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="bg-white_A700 flex sm:flex-1 items-center justify-start p-[8px] rounded-[10px] shadow-bs50 sm:w-[100%] w-[48%]">
                        <div className="flex flex-col items-center justify-start mb-[5px] md:w-[100%] w-[72%]">
                          <div className="flex flex-row gap-[10px] items-start justify-start md:w-[100%] w-[92%]">
                            <Img
                              src="images/img_airplane_teal_501.svg"
                              className="h-[11px] mt-[3px] w-[auto]"
                              alt="airplane"
                            />
                            <Text
                              className="font-bold text-left text-teal_501 w-[auto]"
                              variant="body54"
                            >
                              Eye Tracking
                            </Text>
                          </div>
                          <Text
                            className="font-medium mt-[4px] text-black_900 text-center"
                            variant="body61"
                          >
                            <span className="text-black_900 text-[13px] font-poppins">
                              The eyeball{" "}
                            </span>
                            <span className="text-pink_504 text-[13px] font-poppins">
                              looks up <br />
                            </span>
                            <span className="text-black_900 text-[13px] font-poppins">
                              is feeling{" "}
                            </span>
                            <span className="text-pink_504 text-[13px] font-poppins">
                              bored
                            </span>
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex sm:flex-1 items-end justify-start p-[7px] rounded-[10px] shadow-bs50 sm:w-[100%] w-[48%]">
                        <div className="flex flex-col gap-[6px] justify-start mb-[7px] mr-[25px] md:w-[100%] w-[63%]">
                          <div className="flex flex-row gap-[10px] items-start justify-start mr-[20px] md:w-[100%] w-[84%]">
                            <Img
                              src="images/img_camera_teal_501.svg"
                              className="h-[11px] mt-[5px] w-[auto]"
                              alt="camera"
                            />
                            <Text
                              className="font-bold text-left text-teal_501 w-[auto]"
                              variant="body54"
                            >
                              Photon-X
                            </Text>
                          </div>
                          <Text
                            className="font-medium md:ml-[0] ml-[33px] text-center text-gray_962"
                            variant="body61"
                          >
                            3D data
                            <br />
                            From Subject
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                      <Button
                        className="bg-white_A700 flex items-center justify-center pl-[35px] pr-[34px] py-[20px] rounded-[10px] shadow-bs50 sm:px-[20px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_music_teal_501.svg"
                            className="mr-[10px] text-center"
                            alt="music"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-bold leading-[normal] text-[15px] text-left text-teal_501">
                          Audio Sensors
                        </div>
                      </Button>
                      <div className="bg-white_A700 flex sm:flex-1 items-center justify-start p-[7px] rounded-[10px] shadow-bs50 sm:w-[100%] w-[auto]">
                        <div className="flex flex-col gap-[6px] items-center justify-start mb-[5px] md:w-[100%] w-[92%]">
                          <div className="flex flex-row gap-[10px] items-start justify-center md:w-[100%] w-[61%]">
                            <Img
                              src="images/img_arrowdown_teal_501.svg"
                              className="h-[13px] mt-[3px] w-[14px]"
                              alt="arrowdown"
                            />
                            <Text
                              className="font-bold text-left text-teal_501 w-[auto]"
                              variant="body54"
                            >
                              Heart Rate
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-evenly w-[100%]">
                            <Text
                              className="font-bold mt-[4px] text-gray_962 text-left w-[auto]"
                              variant="body39"
                            >
                              76
                            </Text>
                            <Text
                              className="font-light mt-[14px] text-gray_962 text-left w-[auto]"
                              variant="body59"
                            >
                              bpm
                            </Text>
                            <Img
                              src="images/img_car_teal_501.svg"
                              className="h-[40px] w-[auto]"
                              alt="car"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between w-[100%]">
                      <div className="bg-white_A700 flex sm:flex-1 items-center justify-start p-[8px] rounded-[10px] shadow-bs50 sm:w-[100%] w-[48%]">
                        <div className="flex flex-col items-center justify-start mb-[3px] md:w-[100%] w-[75%]">
                          <div className="flex flex-row gap-[10px] items-start justify-start w-[100%]">
                            <Img
                              src="images/img_favorite_teal_501.svg"
                              className="h-[14px] w-[15px]"
                              alt="favorite"
                            />
                            <Text
                              className="font-bold text-left text-teal_501 w-[auto]"
                              variant="body54"
                            >
                              Breathing Rate
                            </Text>
                          </div>
                          <div className="flex flex-row items-end justify-between mt-[3px] md:w-[100%] w-[93%]">
                            <div className="h-[43px] relative w-[40%]">
                              <Img
                                src="images/img_minimize_teal_501.svg"
                                className="absolute h-[43px] inset-[0] justify-center m-[auto] w-[auto]"
                                alt="minimize"
                              />
                              <div className="absolute bg-white_A700_a2 h-[23px] inset-x-[0] mx-[auto] top-[0] w-[100%]"></div>
                            </div>
                            <Text
                              className="font-bold h-[35px] mt-[7px] text-gray_962 text-left w-[auto]"
                              variant="body39"
                            >
                              5.5
                            </Text>
                            <Text
                              className="font-light mb-[3px] mt-[18px] text-gray_962 text-left w-[auto]"
                              variant="body59"
                            >
                              ppm
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A700 flex sm:flex-1 items-center justify-start p-[6px] rounded-[10px] shadow-bs50 sm:w-[100%] w-[48%]">
                        <div className="flex flex-col gap-[6px] items-center justify-start mb-[7px] md:w-[100%] w-[79%]">
                          <div className="flex flex-row gap-[10px] items-center justify-start w-[100%]">
                            <Img
                              src="images/img_group86.svg"
                              className="h-[17px] w-[auto]"
                              alt="GroupEightySix"
                            />
                            <Text
                              className="font-bold text-left text-teal_501 w-[auto]"
                              variant="body54"
                            >
                              Posture Position
                            </Text>
                          </div>
                          <Text
                            className="font-medium text-center text-gray_962"
                            variant="body61"
                          >
                            Forward body as if
                            <br />
                            brave to challenge
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-white_A700 bottom-[0] flex items-start justify-start sm:px-[20px] px-[22px] right-[0] rounded-[10px] shadow-bs51 w-[95%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[70%]">
                <div className="flex flex-col gap-[17px] items-center justify-start md:mt-[0] mt-[17px] md:w-[100%] w-[97%]">
                  <div className="bg-teal_52 flex flex-col items-start justify-end p-[4px] rounded-[5px] w-[100%]">
                    <Text
                      className="font-bold md:ml-[0] ml-[12px] mt-[8px] text-left text-teal_501 w-[auto]"
                      variant="body61"
                    >
                      00:00 - 00:30
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] md:ml-[0] ml-[12px] not-italic text-gray_962 text-left"
                      variant="body61"
                    >
                      <span className="text-gray_962 text-[13px] font-poppins">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut
                        <br />
                      </span>
                      <span className="text-gray_962 text-[13px] font-poppins">
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco
                        <br />
                        laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in
                        <br />
                        voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat.
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col relative w-[100%]">
                    <div className="md:h-[138px] h-[160px] mx-[auto] w-[100%]">
                      <div className="absolute bg-teal_52 flex inset-x-[0] items-start justify-start mx-[auto] p-[16px] rounded-[5px] top-[0] w-[100%]">
                        <Text
                          className="font-bold mb-[62px] mt-[21px] text-left text-teal_501 w-[auto]"
                          variant="body61"
                        >
                          00:31 - 01:00
                        </Text>
                      </div>
                      <Text
                        className="absolute bottom-[0] font-normal inset-x-[0] leading-[26.00px] mx-[auto] not-italic text-gray_962 text-left"
                        variant="body61"
                      >
                        <span className="text-gray_962 text-[13px] font-poppins">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut
                          <br />
                        </span>
                        <span className="text-gray_962 text-[13px] font-poppins">
                          labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco
                          <br />
                          laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure dolor in reprehenderit in
                          <br />
                          voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat.
                        </span>
                      </Text>
                    </div>
                    <div className="flex items-center justify-start mt-[-5.13px] mx-[auto] w-[100%] z-[1]">
                      <div className="flex items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[100%]">
                        <div className="h-[84px] relative rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[100%]">
                          <div className="absolute bg-teal_53 flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[3px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[100%]">
                            <Text
                              className="font-bold mb-[58px] md:ml-[0] ml-[13px] text-left text-teal_501 w-[auto]"
                              variant="body61"
                            >
                              01:01 - 01:30
                            </Text>
                          </div>
                          <Text
                            className="absolute bottom-[0] font-normal leading-[26.00px] left-[2%] not-italic text-gray_962 text-left"
                            variant="body61"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut
                            <br />
                            labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco
                            <br />
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in
                            <br />
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="bg-teal_501 md:h-[5px] h-[68px] mb-[327px] md:ml-[0] ml-[11px] md:mt-[0] mt-[17px] rounded-[2px] md:w-[100%] w-[5px]" />
                <Line className="bg-gray_319 md:h-[1px] h-[412px] md:ml-[0] ml-[11px] md:w-[100%] w-[1px]" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] flex flex-col gap-[15px] items-center justify-start right-[13%] w-[26%]">
            <div
              className="bg-cover bg-no-repeat flex flex-row h-[60px] items-center justify-start p-[15px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group268.svg')" }}
            >
              <Button
                className="bg-white_A700 flex items-center justify-center pl-[8px] pr-[7px] py-[6px] rounded-[5px] text-center"
                leftIcon={
                  <Img
                    src="images/img_plus_teal_501.svg"
                    className="mr-[7px] text-center"
                    alt="plus"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[12px] text-left text-teal_501">
                  Notes
                </div>
              </Button>
              <div className="flex flex-col ml-[32px] relative w-[7%]">
                <Text
                  className="font-bold mx-[auto] text-left text-white_A700 w-[auto]"
                  variant="body59"
                >
                  All
                </Text>
                <div className="bg-white_A700 h-[2px] mt-[-0.32px] w-[100%] z-[1]"></div>
              </div>
              <div className="flex flex-row gap-[26px] items-center justify-center ml-[24px] w-[45%]">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body59"
                >
                  Positive
                </Text>
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body59"
                >
                  Intense
                </Text>
              </div>
            </div>
            <List
              className="flex-col gap-[15px] grid items-center w-[91%]"
              orientation="vertical"
            >
              <div className="flex flex-col relative w-[100%]">
                <div className="bg-teal_52 h-[65px] mx-[auto] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[100%]"></div>
                <div className="flex flex-col gap-[8px] items-start justify-end mb-[auto] mt-[-64.5px] mx-[auto] outline outline-[0.5px] outline-teal_52 p-[2px] rounded-[4px] w-[100%] z-[1]">
                  <Text
                    className="font-medium leading-[26.00px] md:ml-[0] ml-[8px] mt-[2px] text-gray_962 text-left"
                    variant="body61"
                  >
                    <span className="text-gray_962 text-[13px] font-poppins">
                      00:15 - Ut enim ad minim veniam,
                      <br />
                    </span>
                    <span className="text-gray_962 text-[13px] font-poppins">
                      quis nostrud exercitation ullamco labori
                    </span>
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] md:ml-[0] ml-[8px] not-italic text-gray_962 text-left"
                    variant="body61"
                  >
                    starting from here he looks
                    <br />
                    uncomfortable and wants to end as
                    <br />
                    soon as possible
                  </Text>
                </div>
              </div>
              <div className="md:h-[118px] h-[119px] relative w-[100%]">
                <div className="absolute bg-teal_52 h-[65px] inset-x-[0] mx-[auto] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] top-[0] w-[100%]"></div>
                <div className="absolute flex flex-col gap-[8px] h-[100%] inset-[0] items-start justify-center m-[auto] outline outline-[0.5px] outline-teal_52 p-[2px] rounded-[4px] w-[100%]">
                  <Text
                    className="font-medium leading-[26.00px] md:ml-[0] ml-[8px] mt-[2px] text-gray_962 text-left"
                    variant="body61"
                  >
                    01:08 - sed do eiusmod tempor incidiunt
                    <br />
                    ut labore et dolore magna aliqua
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] md:ml-[0] ml-[8px] not-italic text-gray_962 text-left"
                    variant="body61"
                  >
                    he could not answer well and
                    <br />
                    looked down a lot
                  </Text>
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="absolute bottom-[0] flex font-pacifico left-[0] md:w-[100%] w-[89%]">
          <aside className="flex flex-col md:hidden justify-start my-[auto] w-[18%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-gray_100 flex items-center justify-start py-[18px] w-[100%]">
                <div className="flex flex-col gap-[10px] justify-start mb-[279px] w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[48px] not-italic text-left text-teal_501 w-[auto]"
                    variant="body37"
                  >
                    Analysis
                  </Text>
                  <div className="flex flex-col font-poppins justify-start w-[100%]">
                    <Line className="bg-gray_320 h-[1px] w-[100%]" />
                    <Text
                      className="font-bold md:ml-[0] ml-[48px] mt-[29px] text-gray_962 text-left w-[auto]"
                      variant="body67"
                    >
                      Browse Video
                    </Text>
                    <div className="bg-teal_501 flex flex-row gap-[15px] items-center justify-start mr-[38px] mt-[12px] p-[11px] rounded-bl-[0] rounded-br-[20px] rounded-tl-[0] rounded-tr-[20px] md:w-[100%] w-[85%]">
                      <Img
                        src="images/img_search_white_a700_13x13.svg"
                        className="h-[13px] ml-[36px] w-[13px]"
                        alt="search"
                      />
                      <Text
                        className="font-medium text-gray_69 text-left w-[auto]"
                        variant="body67"
                      >
                        Discover
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[48px] mt-[11px] md:w-[100%] w-[30%]">
                      <Img
                        src="images/img_television_gray_706.svg"
                        className="h-[13px] w-[13px]"
                        alt="television"
                      />
                      <Text
                        className="font-medium text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        Recent
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[48px] mt-[22px] md:w-[100%] w-[35%]">
                      <Img
                        src="images/img_call_gray_706.svg"
                        className="h-[18px] w-[auto]"
                        alt="call"
                      />
                      <Text
                        className="font-medium text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        Trending
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[48px] mt-[23px] md:w-[100%] w-[36%]">
                      <Img
                        src="images/img_user_gray_706.svg"
                        className="h-[12px] w-[13px]"
                        alt="user"
                      />
                      <Text
                        className="font-medium text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        Following
                      </Text>
                    </div>
                    <Text
                      className="font-bold md:ml-[0] ml-[48px] mt-[42px] text-gray_962 text-left w-[auto]"
                      variant="body67"
                    >
                      Your Video
                    </Text>
                    <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[48px] mt-[24px] md:w-[100%] w-[36%]">
                      <Img
                        src="images/img_favorite_gray_706.svg"
                        className="h-[11px] mt-[3px] w-[auto]"
                        alt="favorite One"
                      />
                      <Text
                        className="font-medium text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        Favourite
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[47px] mt-[24px] md:w-[100%] w-[42%]">
                      <Img
                        src="images/img_clock_gray_706.svg"
                        className="h-[13px] w-[13px]"
                        alt="clock"
                      />
                      <Text
                        className="font-medium text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        Play History
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[16px] items-start justify-start md:ml-[0] ml-[48px] mt-[23px] md:w-[100%] w-[39%]">
                      <Img
                        src="images/img_upload_gray_706.svg"
                        className="h-[13px] w-[12px]"
                        alt="upload"
                      />
                      <Text
                        className="font-medium text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        My Upload
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[48px] mt-[23px] md:w-[100%] w-[47%]">
                      <Img
                        src="images/img_download_gray_706.svg"
                        className="h-[13px] w-[13px]"
                        alt="download"
                      />
                      <Text
                        className="font-medium text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        My Download
                      </Text>
                    </div>
                    <Text
                      className="font-bold md:ml-[0] ml-[48px] mt-[43px] text-gray_962 text-left w-[auto]"
                      variant="body67"
                    >
                      Playlist
                    </Text>
                    <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[48px] mt-[22px] md:w-[100%] w-[36%]">
                      <Img
                        src="images/img_upload_gray_706_13x13.svg"
                        className="h-[13px] w-[13px]"
                        alt="upload One"
                      />
                      <Text
                        className="font-medium text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        New York
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[48px] mt-[23px] md:w-[100%] w-[30%]">
                      <Img
                        src="images/img_upload_gray_706_13x13.svg"
                        className="h-[13px] mt-[2px] w-[13px]"
                        alt="upload Two"
                      />
                      <Text
                        className="font-medium text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        Boston
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[48px] mt-[24px] md:w-[100%] w-[42%]">
                      <Img
                        src="images/img_upload_gray_706_13x13.svg"
                        className="h-[13px] w-[13px]"
                        alt="upload Three"
                      />
                      <Text
                        className="font-medium text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        Los Angeles
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[48px] mt-[23px] md:w-[100%] w-[38%]">
                      <Img
                        src="images/img_upload_gray_706_13x13.svg"
                        className="h-[13px] w-[13px]"
                        alt="upload Four"
                      />
                      <Text
                        className="font-medium text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        Las Vegas
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[48px] mt-[20px] md:w-[100%] w-[53%]">
                      <Img
                        src="images/img_upload_gray_706_13x13.svg"
                        className="h-[13px] w-[13px]"
                        alt="upload Five"
                      />
                      <Text
                        className="font-medium text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        Finance Division
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[48px] mt-[23px] md:w-[100%] w-[53%]">
                      <Img
                        src="images/img_upload_gray_706_13x13.svg"
                        className="h-[13px] w-[13px]"
                        alt="upload Six"
                      />
                      <Text
                        className="font-medium text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        Product Division
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div
            className="bg-cover bg-no-repeat font-poppins md:h-[50px] h-[80px] ml-[-238px] mr-[auto] mt-[auto] p-[15px] w-[100%] z-[1]"
            style={{ backgroundImage: "url('images/img_player.svg')" }}
          >
            <div className="h-[50px] m-[auto] md:w-[100%] w-[95%]">
              <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_imagehere_gray_521.svg"
                    className="h-[50px] w-[auto]"
                    alt="IMAGEHERE"
                  />
                  <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[15px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-gray_962 text-left w-[auto]"
                      variant="body54"
                    >
                      Meetings with Holding Company
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_962 text-left w-[auto]"
                      variant="body61"
                    >
                      19 August 2019 - New York
                    </Text>
                  </div>
                  <Img
                    src="images/img_contrast_gray_422.svg"
                    className="h-[15px] md:ml-[0] ml-[42px] w-[auto]"
                    alt="contrast"
                  />
                  <Button className="bg-teal_501 flex h-[35px] items-center justify-center md:ml-[0] ml-[15px] md:mt-[0] my-[7px] p-[10px] rounded-[17px] w-[35px]">
                    <Img
                      src="images/img_path162.svg"
                      className=""
                      alt="Path162"
                    />
                  </Button>
                  <Img
                    src="images/img_contrast_gray_422.svg"
                    className="h-[15px] md:ml-[0] ml-[15px] w-[auto]"
                    alt="contrast One"
                  />
                  <Text
                    className="font-normal md:ml-[0] ml-[26px] not-italic text-gray_962 text-left w-[auto]"
                    variant="body69"
                  >
                    00:00
                  </Text>
                  <Img
                    src="images/img_group64.png"
                    className="md:flex-1 h-[34px] sm:h-[auto] md:ml-[0] ml-[11px] object-cover md:w-[100%] w-[auto]"
                    alt="GroupSixtyFour"
                  />
                  <Text
                    className="font-normal md:ml-[0] ml-[11px] not-italic text-gray_962 text-left w-[auto]"
                    variant="body69"
                  >
                    05:00
                  </Text>
                  <Button
                    className="bg-teal_501 flex items-center justify-center md:ml-[0] md:mt-[0] ml-[161px] my-[10px] px-[18px] py-[7px] rounded-[3px] sm:ml-[0] sm:mt-[0] text-center"
                    leftIcon={
                      <Img
                        src="images/img_download_white_a700.svg"
                        className="mr-[5px] text-center"
                        alt="download"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[11px] text-left text-white_A700">
                      Download
                    </div>
                  </Button>
                </div>
              </div>
              <Line className="absolute bg-gray_422 h-[3px] inset-y-[0] my-[auto] right-[24%] rounded-[1px] w-[35%]" />
            </div>
            <div className="absolute bg-white_A700 flex h-[max-content] inset-y-[0] items-center justify-start left-[41%] my-[auto] rounded-[5px] w-[11px]">
              <Img
                src="images/img_contrast_teal_501.svg"
                className="h-[9px] w-[9px]"
                alt="contrast Two"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoAnalysisPage;
