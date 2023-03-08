import React from "react";

import { Img, Text, Button, Input, SelectBox, List } from "components";
import { CloseSVG } from "../../assets/images";

const SavedPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_907 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
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
                    <div className="bg-gray_900_5f flex font-outfit items-start justify-start p-[10px] rounded-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] md:w-[100%] w-[38%]">
                        <Img
                          src="images/img_favorite_gray_965.svg"
                          className="h-[24px] w-[24px]"
                          alt="favorite"
                        />
                        <Text
                          className="font-medium text-gray_965 text-left tracking-[0.18px] w-[auto]"
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
                          alt="clock One"
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
        <div className="flex flex-1 flex-col gap-[34px] items-center justify-start md:mt-[0] mt-[7px] md:px-[20px] w-[100%]">
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
          <div className="flex flex-col font-urbanist items-start justify-start md:w-[100%] w-[94%]">
            <Text
              className="font-normal not-italic text-left text-white_A700 tracking-[0.34px] w-[auto]"
              variant="body23"
            >
              Saved
            </Text>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[22px] w-[100%]">
              <div className="flex md:flex-1 sm:flex-col flex-row gap-[24px] items-center justify-between md:w-[100%] w-[45%]">
                <Button
                  className="flex items-center justify-center outline outline-[0.5px] outline-gray_123 p-[16px] rounded-[14px] text-center"
                  leftIcon={
                    <Img
                      src="images/img_user_2.svg"
                      className="mr-[10px] text-center"
                      alt="user"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                    Category
                  </div>
                </Button>
                <Button
                  className="flex items-center justify-center outline outline-[0.5px] outline-gray_123 pl-[16px] pr-[17px] py-[16px] rounded-[14px] text-center"
                  leftIcon={
                    <Img
                      src="images/img_note2.svg"
                      className="mr-[10px] text-center"
                      alt="note-2"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                    Collection
                  </div>
                </Button>
                <Button
                  className="flex items-center justify-center outline outline-[0.5px] outline-gray_123 pl-[16px] pr-[17px] py-[16px] rounded-[14px] text-center"
                  leftIcon={
                    <Img
                      src="images/img_clock_white_a700_24x24.svg"
                      className="mr-[10px] text-center"
                      alt="clock"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                    Price Range
                  </div>
                </Button>
              </div>
              <Button
                className="flex items-center justify-center outline outline-[0.5px] outline-gray_123 pl-[16px] pr-[17px] py-[16px] rounded-[14px] text-center"
                leftIcon={
                  <Img
                    src="images/img_menu_1.svg"
                    className="mr-[10px] text-center"
                    alt="menu"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                  Filter & Sort
                </div>
              </Button>
            </div>
            <List
              className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[34px] w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start p-[6px] rounded-[15px] shadow-bs70 w-[100%]">
                <div className="h-[140px] relative w-[100%]">
                  <Img
                    src="images/img_rectangle2044_8.png"
                    className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                    alt="Rectangle2044"
                  />
                  <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                    <Button className="bg-gray_900_27 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                      2h 4m 32s
                    </Button>
                    <Button className="bg-gray_900_27 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                      <Img
                        src="images/img_favorite_red_603_30x30.svg"
                        className=""
                        alt="favorite One"
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
                      Diehard BATTERY-SILVER
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                      variant="body67"
                    >
                      By Ralph Edwards
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
                          2,78 ETH
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
                    src="images/img_rectangle2044_4.png"
                    className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                    alt="Rectangle2044 One"
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
                        src="images/img_favorite_red_603_30x30.svg"
                        className=""
                        alt="favorite Two"
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
                      Bosch Spark Plug
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                      variant="body67"
                    >
                      By Guy Hawkins
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
                          alt="sort One"
                        />
                        <Text
                          className="font-normal not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
                          variant="body59"
                        >
                          8,99 ETH
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
                    src="images/img_rectangle2044.png"
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
                        src="images/img_favorite_red_603_30x30.svg"
                        className=""
                        alt="favorite Three"
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
                      Valvoline Engine Oil
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                      variant="body67"
                    >
                      By Albert Flores
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
                          51,23 ETH
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
                    <Button className="bg-gray_900_27 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                      2h 4m 32s
                    </Button>
                    <Button className="bg-gray_900_27 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                      <Img
                        src="images/img_favorite_red_603_30x30.svg"
                        className=""
                        alt="favorite Four"
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
                      Fram Oil Filter
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                      variant="body67"
                    >
                      By Jerome Bell
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
                          alt="sort Three"
                        />
                        <Text
                          className="font-normal not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
                          variant="body59"
                        >
                          25,00 ETH
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_965 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                      Place a Bid
                    </Button>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedPage;
