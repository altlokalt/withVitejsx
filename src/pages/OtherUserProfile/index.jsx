import React from "react";

import { Img, Text, Button, Input, SelectBox, Line } from "components";
import { CloseSVG } from "../../assets/images";

const OtherUserProfilePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <div className="bg-gray_907 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-[20px] md:gap-[20px] items-center mx-[auto] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[302px]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="bg-gray_70 border-[1px] border-gray_123 border-solid flex flex-col items-start justify-start py-[34px] w-[100%]">
              <div className="flex flex-row gap-[14px] items-center justify-start md:ml-[0] ml-[34px] md:w-[100%] w-[59%]">
                <Img
                  src="defaultNoData.png"
                  className="h-[56px] md:h-[auto] rounded-[50%] w-[56px]"
                  alt="Ellipse1015"
                />
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <Text
                    className="font-semibold text-black_908 text-left tracking-[0.18px] w-[auto]"
                    variant="body47"
                  >
                    Kevin Cranel
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
                    variant="body59"
                  >
                    @kecrane
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start mt-[50px] px-[18px] w-[100%]">
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[16px] not-italic text-gray_966 text-left tracking-[0.12px] w-[auto]"
                    variant="body67"
                  >
                    GENERAL
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[2px] md:w-[100%] w-[55%]">
                        <Img
                          src="images/img_clock_gray_523.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock"
                        />
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Dashboard
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-end p-[8px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[46%]">
                        <Img
                          src="images/img_car_gray_523.svg"
                          className="h-[24px] w-[24px]"
                          alt="car"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Message
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-end p-[8px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[44%]">
                        <Img
                          src="images/img_settings_gray_523.svg"
                          className="h-[24px] w-[24px]"
                          alt="settings"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Settings
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[16px] not-italic text-gray_966 text-left tracking-[0.12px] w-[auto]"
                    variant="body67"
                  >
                    MARKETPLACE
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[2px] md:w-[100%] w-[42%]">
                        <Img
                          src="images/img_user_gray_523.svg"
                          className="h-[24px] w-[24px]"
                          alt="user"
                        />
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Market
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[3px] md:w-[100%] w-[51%]">
                        <Img
                          src="images/img_mail_gray_523.svg"
                          className="h-[24px] w-[24px]"
                          alt="mail"
                        />
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Active Bid
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] md:w-[100%] w-[39%]">
                        <Img
                          src="images/img_clock_gray_523_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Saved
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[16px] not-italic text-gray_966 text-left tracking-[0.12px] w-[auto]"
                    variant="body67"
                  >
                    MY PROFILE
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[3px] md:w-[100%] w-[51%]">
                        <Img
                          src="images/img_user_gray_523_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="user One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Collection
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[4px] md:w-[100%] w-[39%]">
                        <Img
                          src="images/img_computer_gray_523.svg"
                          className="h-[24px] w-[24px]"
                          alt="computer"
                        />
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Wallet
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-end p-[8px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] pr-[4px] md:w-[100%] w-[41%]">
                        <Img
                          src="images/img_clock_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock Two"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          History
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-urbanist h-[258px] md:h-[292px] md:ml-[0] ml-[34px] mt-[49px] relative w-[78%]">
                <div className="absolute bg-gray_965 bottom-[0] h-[233px] inset-x-[0] mx-[auto] rounded-[15px] w-[234px]"></div>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[91%]">
                  <Button className="bg-white_A700 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] shadow-bs69 w-[50px]">
                    <Img
                      src="images/img_question_gray_965.svg"
                      className="h-[24px]"
                      alt="question"
                    />
                  </Button>
                  <Text
                    className="font-normal mt-[16px] not-italic text-left text-white_A700 tracking-[0.18px] w-[auto]"
                    variant="body47"
                  >
                    Help Center
                  </Text>
                  <div className="flex flex-col gap-[29px] items-center justify-start mt-[10px] w-[100%]">
                    <Text
                      className="font-normal leading-[25.20px] not-italic text-center text-gray_423 tracking-[0.14px]"
                      variant="body59"
                    >
                      Having trouble in Enefti?
                      <br />
                      Please contact us for more question
                    </Text>
                    <Button className="bg-white_A700 cursor-pointer font-normal min-w-[206px] not-italic py-[11px] rounded-[10px] text-[14px] text-center text-gray_965 tracking-[0.14px] w-[auto]">
                      Go To Help Center
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col items-center justify-start md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] items-center justify-between outline outline-[0.5px] outline-gray_123 p-[34px] sm:px-[20px] w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-gray_523 text-gray_523 text-left tracking-[0.14px] w-[100%]"
              wrapClassName="bg-white_A700 border-[1px] border-gray_321 border-solid flex md:mt-[0] md:w-[100%] my-[2px] pl-[16px] pr-[35px] py-[16px] rounded-[15px] sm:mt-[0] sm:pr-[20px] sm:w-[100%] w-[45%]"
              name="SearchInput"
              placeholder="Search items, collections, and users"
              prefix={
                <Img
                  src="images/img_search_gray_523.svg"
                  className="cursor-pointer mr-[16px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#93989a"
                    className="cursor-pointer ml-[10px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
            ></Input>
            <div className="flex md:flex-1 flex-row font-urbanist gap-[30px] items-center justify-center md:mt-[0] my-[2px] md:w-[100%] w-[32%]">
              <Button
                className="flex items-center justify-center outline outline-[0.5px] outline-gray_123 pl-[16px] pr-[20px] py-[16px] rounded-[10px] text-center"
                leftIcon={
                  <Img
                    src="images/img_sort_gray_965.svg"
                    className="mr-[10px] text-center"
                    alt="sort"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-black_908 text-left tracking-[0.16px]">
                  3,421 ETH
                </div>
              </Button>
              <Button className="flex h-[52px] items-center justify-center outline outline-[0.5px] outline-gray_123 p-[14px] rounded-[50%] w-[52px]">
                <Img
                  src="images/img_lock_black_908.svg"
                  className="h-[24px]"
                  alt="lock"
                />
              </Button>
              <SelectBox
                className="sm:w-[100%] w-[27%]"
                placeholderClassName=""
                name="user Two"
                placeholder=""
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_ellipse_1020.png"
                    className="h-[52px] mr-[35px] w-[52px] rounded-[50%]"
                    alt="Ellipse 1020"
                  />
                }
              ></SelectBox>
            </div>
          </div>
          <div className="flex flex-col font-urbanist relative w-[100%]">
            <Img
              src="images/img_rectangle2057_257x1118.png"
              className="h-[260px] mx-[auto] object-cover w-[100%]"
              alt="Rectangle2057"
            />
            <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between mt-[-84px] mx-[auto] w-[95%] z-[1]">
              <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-center mb-[272px] p-[18px] rounded-[15px] shadow-bs70 md:w-[100%] w-[23%]">
                <div className="flex flex-col gap-[16px] items-center justify-start mt-[16px] md:w-[100%] w-[87%]">
                  <Img
                    src="defaultNoData.png"
                    className="h-[100px] md:h-[auto] rounded-[50%] w-[100px]"
                    alt="Ellipse1022"
                  />
                  <div className="flex flex-col gap-[5px] items-center justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_908 text-left tracking-[0.20px] w-[auto]"
                      variant="body43"
                    >
                      Eleanor Pena
                    </Text>
                    <div className="flex flex-row gap-[9px] items-start justify-between w-[100%]">
                      <Text
                        className="font-normal mt-[2px] not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                        variant="body67"
                      >
                        0x864784f44ajf84bskw4w...
                      </Text>
                      <Img
                        src="images/img_copy.svg"
                        className="h-[18px] w-[18px]"
                        alt="copy"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mb-[8px] w-[100%]">
                  <Text
                    className="font-normal leading-[25.20px] not-italic text-center text-gray_523 tracking-[0.14px] w-[100%]"
                    variant="body59"
                  >
                    Dedicated to create amazing for art exhibition information
                    please check link below:
                  </Text>
                  <div className="flex flex-row gap-[6px] items-center justify-center mt-[21px] py-[2px] md:w-[100%] w-[45%]">
                    <Img
                      src="images/img_globe_black_908.svg"
                      className="h-[18px] w-[18px]"
                      alt="globe"
                    />
                    <Text
                      className="font-normal not-italic text-black_908 text-left tracking-[0.12px] w-[auto]"
                      variant="body67"
                    >
                      artistictea.io
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-between mt-[22px] md:w-[100%] w-[87%]">
                    <Button className="bg-gray_965 cursor-pointer font-normal min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                      Follow
                    </Button>
                    <Button className="flex h-[32px] items-center justify-center outline outline-[0.5px] outline-gray_123 p-[7px] rounded-[8px] w-[32px]">
                      <Img
                        src="images/img_arrowup_black_908.svg"
                        className="h-[18px]"
                        alt="arrowup"
                      />
                    </Button>
                    <Button className="flex h-[32px] items-center justify-center outline outline-[0.5px] outline-gray_123 p-[7px] rounded-[8px] w-[32px]">
                      <Img
                        src="images/img_camera_black_908.svg"
                        className="h-[18px]"
                        alt="camera"
                      />
                    </Button>
                  </div>
                  <Line className="bg-gray_123 h-[1px] mt-[24px] w-[100%]" />
                  <Text
                    className="font-normal mt-[29px] not-italic text-center text-gray_523 tracking-[0.14px] w-[auto]"
                    variant="body59"
                  >
                    Joined April 2021
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[34px] items-center justify-start md:mt-[0] mt-[118px] md:w-[100%] w-[75%]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex sm:flex-1 flex-row gap-[12px] items-center justify-between sm:w-[100%] w-[44%]">
                    <Button
                      className="bg-black_908 flex items-center justify-center pl-[12px] pr-[13px] py-[9px] rounded-[18px] text-center"
                      leftIcon={
                        <Img
                          src="images/img_grid_white_a700_20x20.svg"
                          className="mr-[10px] text-center"
                          alt="grid"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700 tracking-[0.14px]">
                        Created
                      </div>
                    </Button>
                    <div className="flex flex-row gap-[10px] items-center justify-center p-[8px] w-[auto]">
                      <Img
                        src="images/img_folder_gray_523.svg"
                        className="h-[20px] ml-[4px] w-[20px]"
                        alt="folder"
                      />
                      <Text
                        className="font-normal mr-[4px] not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
                        variant="body59"
                      >
                        Collection
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center p-[7px] w-[auto]">
                      <Img
                        src="images/img_clock_24x24.svg"
                        className="h-[20px] ml-[4px] w-[20px]"
                        alt="clock Three"
                      />
                      <Text
                        className="font-normal mr-[5px] not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
                        variant="body59"
                      >
                        History
                      </Text>
                    </div>
                  </div>
                  <Input
                    value={inputvalue1}
                    onChange={(e) => setInputvalue1(e?.target?.value)}
                    className="flex-1 font-normal not-italic p-[0] text-[12px] placeholder:text-gray_523 text-gray_523 text-left tracking-[0.12px] w-[100%]"
                    wrapClassName="border-[1px] border-gray_321 border-solid flex pl-[14px] pr-[35px] py-[10px] rounded-[8px] sm:pr-[20px] sm:w-[100%] w-[26%]"
                    name="SearchInput One"
                    placeholder="Search by name"
                    prefix={
                      <Img
                        src="images/img_search_gray_523.svg"
                        className="cursor-pointer mr-[14px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue1?.length > 0 ? (
                        <CloseSVG
                          color="#93989a"
                          className="cursor-pointer ml-[10px] my-[auto]"
                          onClick={() => setInputvalue1("")}
                        />
                      ) : (
                        ""
                      )
                    }
                  ></Input>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="gap-[19px] md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs70 w-[100%]">
                      <div className="h-[140px] relative w-[100%]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044"
                        />
                        <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                          <Button className="bg-gray_900_27 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            2h 4m 32s
                          </Button>
                          <Button className="bg-gray_900_27 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_favorite_red_603.svg"
                              className=""
                              alt="favorite"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:w-[100%] w-[94%]">
                        <div className="flex flex-col items-start justify-start pt-[2px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                            variant="body50"
                          >
                            Person Melirik Kesamping
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                            variant="body67"
                          >
                            By Eleanor Pena
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_523 text-left tracking-[0.10px] w-[auto]"
                              variant="body75"
                            >
                              Current Bid
                            </Text>
                            <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                              <Img
                                src="images/img_sort_gray_965.svg"
                                className="h-[16px] w-[16px]"
                                alt="sort"
                              />
                              <Text
                                className="font-normal not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
                                variant="body59"
                              >
                                2,42 ETH
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-gray_965 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            Place a Bid
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs70 w-[100%]">
                      <div className="h-[140px] relative w-[100%]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 One"
                        />
                        <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                          <Button className="bg-gray_900_27 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            2h 4m 32s
                          </Button>
                          <Button className="bg-gray_900_27 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_clock_white_a700_30x30.svg"
                              className=""
                              alt="clock Four"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:w-[100%] w-[94%]">
                        <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                            variant="body50"
                          >
                            Building Reflection Xd
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                            variant="body67"
                          >
                            By Eleanor Pena
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_523 text-left tracking-[0.10px] w-[auto]"
                              variant="body75"
                            >
                              Current Bid
                            </Text>
                            <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                              <Img
                                src="images/img_sort_gray_965.svg"
                                className="h-[16px] w-[16px]"
                                alt="sort One"
                              />
                              <Text
                                className="font-normal not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
                                variant="body59"
                              >
                                52,12 ETH
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-gray_965 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            Place a Bid
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs70 w-[100%]">
                      <div className="h-[140px] relative w-[100%]">
                        <Img
                          src="images/img_rectangle2044_11.png"
                          className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 Two"
                        />
                        <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                          <Text
                            className="bg-gray_900_27 font-normal h-[28px] not-italic pl-[10px] sm:pr-[20px] pr-[30px] py-[6px] rounded-[14px] text-left text-white_A700 tracking-[0.12px] w-[75px]"
                            variant="body67"
                          >
                            Ended
                          </Text>
                          <Button className="bg-gray_900_27 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_clock_white_a700_30x30.svg"
                              className=""
                              alt="clock Five"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:w-[100%] w-[94%]">
                        <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                            variant="body50"
                          >
                            Natural Atomic Circle
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                            variant="body67"
                          >
                            By Eleanor Pena
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_523 text-left tracking-[0.10px] w-[auto]"
                              variant="body75"
                            >
                              Fixed Price
                            </Text>
                            <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                              <Img
                                src="images/img_sort_gray_965.svg"
                                className="h-[16px] w-[16px]"
                                alt="sort Two"
                              />
                              <Text
                                className="font-normal not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
                                variant="body59"
                              >
                                22,52 ETH
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-gray_965 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            Place a Bid
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs70 w-[100%]">
                      <div className="h-[140px] relative w-[100%]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 Three"
                        />
                        <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                          <Text
                            className="bg-gray_900_27 font-normal h-[28px] not-italic pl-[10px] sm:pr-[20px] pr-[30px] py-[6px] rounded-[14px] text-left text-white_A700 tracking-[0.12px] w-[75px]"
                            variant="body67"
                          >
                            Ended
                          </Text>
                          <Button className="bg-gray_900_27 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_clock_white_a700_30x30.svg"
                              className=""
                              alt="clock Six"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:w-[100%] w-[94%]">
                        <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                            variant="body50"
                          >
                            Uowaw Your Face is Good
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                            variant="body67"
                          >
                            By Eleanor Pena
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_523 text-left tracking-[0.10px] w-[auto]"
                              variant="body75"
                            >
                              Fixed Price
                            </Text>
                            <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                              <Img
                                src="images/img_sort_gray_965.svg"
                                className="h-[16px] w-[16px]"
                                alt="sort Three"
                              />
                              <Text
                                className="font-normal not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
                                variant="body59"
                              >
                                1,32 ETH
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-gray_965 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            Place a Bid
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs70 w-[100%]">
                      <div className="h-[140px] relative w-[100%]">
                        <Img
                          src="images/img_rectangle2044_16.png"
                          className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 Four"
                        />
                        <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                          <Button className="bg-gray_900_27 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            2h 4m 32s
                          </Button>
                          <Button className="bg-gray_900_27 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_clock_white_a700_30x30.svg"
                              className=""
                              alt="clock Seven"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:w-[100%] w-[94%]">
                        <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                            variant="body50"
                          >
                            One Blooded Hand
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                            variant="body67"
                          >
                            By Eleanor Pena
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_523 text-left tracking-[0.10px] w-[auto]"
                              variant="body75"
                            >
                              Current Bid
                            </Text>
                            <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                              <Img
                                src="images/img_sort_gray_965.svg"
                                className="h-[16px] w-[16px]"
                                alt="sort Four"
                              />
                              <Text
                                className="font-normal not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
                                variant="body59"
                              >
                                5,52 ETH
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-gray_965 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            Place a Bid
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs70 w-[100%]">
                      <div className="h-[140px] relative w-[100%]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Rectangle2044 Five"
                        />
                        <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                          <Button className="bg-gray_900_27 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            2h 4m 32s
                          </Button>
                          <Button className="bg-gray_900_27 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                            <Img
                              src="images/img_favorite_red_603.svg"
                              className=""
                              alt="favorite One"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:w-[100%] w-[94%]">
                        <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                            variant="body50"
                          >
                            Oldtown Artistic Alley
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                            variant="body67"
                          >
                            By Eleanor Pena
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_523 text-left tracking-[0.10px] w-[auto]"
                              variant="body75"
                            >
                              Current Bid
                            </Text>
                            <div className="flex flex-row font-urbanist gap-[6px] items-start justify-start mt-[4px] w-[100%]">
                              <Img
                                src="images/img_sort_gray_965.svg"
                                className="h-[16px] w-[16px]"
                                alt="sort Five"
                              />
                              <Text
                                className="font-normal not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
                                variant="body59"
                              >
                                1,224 ETH
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-gray_965 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                            Place a Bid
                          </Button>
                        </div>
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

export default OtherUserProfilePage;
