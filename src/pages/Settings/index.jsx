import React from "react";

import {
  Img,
  Text,
  Button,
  Input,
  SelectBox,
  Line,
  TextArea,
  List,
} from "components";
import { CloseSVG } from "../../assets/images";

const SettingsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_907 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-[20px] md:gap-[20px] items-start mx-[auto] pb-[34px] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[302px]">
          <div className="flex flex-col gap-[50px] items-start justify-start my-[34px] w-[100%]">
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
            <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start px-[18px] w-[100%]">
              <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                <Text
                  className="font-normal md:ml-[0] ml-[16px] not-italic text-black_908 text-left tracking-[0.12px] w-[auto]"
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
                  <div className="bg-gray_900_5f flex font-outfit items-start justify-end p-[8px] rounded-[10px] w-[100%]">
                    <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[43%]">
                      <Img
                        src="images/img_settings_gray_965.svg"
                        className="h-[24px] w-[24px]"
                        alt="settings"
                      />
                      <Text
                        className="font-medium mt-[2px] text-gray_965 text-left tracking-[0.18px] w-[auto]"
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
            <div className="font-urbanist md:h-[243px] h-[258px] md:ml-[0] ml-[34px] relative w-[78%]">
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
        </aside>
        <div className="flex flex-1 flex-col gap-[34px] items-center justify-start md:px-[20px] w-[100%]">
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
          <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start md:w-[100%] w-[95%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[10px] items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                <Text
                  className="font-normal not-italic text-black_908 text-left w-[auto]"
                  variant="body37"
                >
                  General Settings
                </Text>
                <Text
                  className="font-normal not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
                  variant="body59"
                >
                  Update your photo and personal details here.
                </Text>
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row gap-[20px] items-center justify-between md:w-[100%] w-[43%]">
                <Text
                  className="font-normal not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
                  variant="body59"
                >
                  Every changes automaticly saved
                </Text>
                <div className="flex flex-row gap-[12px] items-center justify-between sm:w-[100%] w-[50%]">
                  <Button className="bg-gray_965 cursor-pointer font-normal min-w-[106px] not-italic py-[12px] rounded-[8px] text-[14px] text-center text-white_A700 tracking-[0.14px] w-[auto]">
                    Preview
                  </Button>
                  <Button className="bg-gray_123 cursor-pointer font-normal min-w-[106px] not-italic py-[12px] rounded-[8px] text-[14px] text-center text-gray_523 tracking-[0.14px] w-[auto]">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start md:w-[100%] w-[66%]">
                <div className="bg-white_A700 flex flex-col items-start justify-end outline outline-[0.5px] outline-gray_123 py-[24px] rounded-[15px] shadow-bs70 w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[24px] not-italic text-black_908 text-left tracking-[0.18px] w-[auto]"
                    variant="body47"
                  >
                    Personal Information
                  </Text>
                  <Line className="bg-gray_123 h-[1px] mt-[24px] w-[100%]" />
                  <div className="flex items-center justify-start md:ml-[0] ml-[24px] mt-[32px] md:w-[100%] w-[94%]">
                    <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between w-[100%]">
                          <div className="flex md:flex-1 flex-col gap-[12px] items-start justify-start md:w-[100%] w-[49%]">
                            <Text
                              className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                              variant="body50"
                            >
                              <span className="text-black_908 text-[16px] font-urbanist">
                                First Name
                              </span>
                              <span className="text-red_603 text-[16px] font-urbanist">
                                *
                              </span>
                            </Text>
                            <Input
                              className="font-normal not-italic p-[0] text-[14px] placeholder:text-black_908 text-black_908 text-left tracking-[0.14px] w-[100%]"
                              wrapClassName="border-[1px] border-gray_423 border-solid flex pl-[16px] pr-[35px] py-[17px] rounded-[8px] sm:pr-[20px] w-[100%]"
                              name="SearchInput One"
                              placeholder="Kevin"
                              prefix={
                                <Img
                                  src="images/img_user_3.svg"
                                  className="mr-[12px] my-[auto]"
                                  alt="user"
                                />
                              }
                            ></Input>
                          </div>
                          <div className="flex md:flex-1 flex-col gap-[12px] items-start justify-start md:w-[100%] w-[49%]">
                            <Text
                              className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                              variant="body50"
                            >
                              <span className="text-black_908 text-[16px] font-urbanist">
                                Last Name
                              </span>
                              <span className="text-red_603 text-[16px] font-urbanist">
                                *
                              </span>
                            </Text>
                            <Input
                              className="font-normal not-italic pl-[16px] sm:pr-[20px] pr-[35px] py-[17px] text-[14px] placeholder:text-black_908 text-black_908 text-left tracking-[0.14px] w-[100%]"
                              wrapClassName="border-[1px] border-gray_423 border-solid rounded-[8px] w-[100%]"
                              name="SearchInput Two"
                              placeholder="Cranel"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                            variant="body50"
                          >
                            <span className="text-black_908 text-[16px] font-urbanist">
                              Email Address
                            </span>
                            <span className="text-red_603 text-[16px] font-urbanist">
                              *
                            </span>
                          </Text>
                          <Input
                            className="font-normal not-italic p-[0] text-[14px] placeholder:text-black_908 text-black_908 text-left tracking-[0.14px] w-[100%]"
                            wrapClassName="border-[1px] border-gray_423 border-solid flex pl-[16px] pr-[14px] py-[17px] rounded-[8px] w-[100%]"
                            type="email"
                            name="email"
                            placeholder="hello.kevincranel@workmail.com"
                            prefix={
                              <Img
                                src="images/img_checkmark_gray_523.svg"
                                className="mr-[12px] my-[auto]"
                                alt="checkmark"
                              />
                            }
                            suffix={
                              <Img
                                src="images/img_checkmark_green_602.svg"
                                className="ml-[35px] my-[auto]"
                                alt="checkmark"
                              />
                            }
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                            variant="body50"
                          >
                            Username
                          </Text>
                          <Input
                            className="p-[0] w-[100%]"
                            wrapClassName="border-[1px] border-gray_423 border-solid flex pb-[13px] pl-[16px] pr-[14px] pt-[14px] rounded-[8px] w-[100%]"
                            name="searchinput Three"
                            placeholder=""
                            prefix={
                              <Img
                                src="images/img_calendar_gray_523.svg"
                                className="mr-[35px] my-[auto]"
                                alt="calendar"
                              />
                            }
                            suffix={
                              <Img
                                src="images/img_checkmark_green_602.svg"
                                className="ml-[35px] my-[auto]"
                                alt="checkmark"
                              />
                            }
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[11px] items-start justify-start pt-[2px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                            variant="body50"
                          >
                            Biography
                          </Text>
                          <TextArea
                            className="bg-transparent border-[1px] border-gray_423 border-solid font-normal not-italic pb-[35px] pl-[16px] sm:pr-[20px] pr-[35px] pt-[22px] rounded-[8px] text-[14px] placeholder:text-black_908 text-black_908 text-left tracking-[0.14px] w-[100%]"
                            name="searchinput Four"
                            placeholder="Dedicated to create amazing for art exhibition information please check link below:"
                          ></TextArea>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                          variant="body50"
                        >
                          Website
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] text-[14px] placeholder:text-black_908 text-black_908 text-left tracking-[0.14px] w-[100%]"
                          wrapClassName="border-[1px] border-gray_423 border-solid flex pl-[16px] pr-[35px] py-[17px] rounded-[8px] sm:pr-[20px] w-[100%]"
                          name="weburl"
                          placeholder="weloveart.com/kevincranel"
                          prefix={
                            <Img
                              src="images/img_globe_gray_523.svg"
                              className="mr-[12px] my-[auto]"
                              alt="globe"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[32px] items-center justify-end outline outline-[0.5px] outline-gray_123 py-[26px] rounded-[15px] shadow-bs70 w-[100%]">
                  <div className="flex flex-col gap-[22px] justify-start w-[100%]">
                    <Text
                      className="font-normal md:ml-[0] ml-[24px] not-italic text-black_908 text-left tracking-[0.18px] w-[auto]"
                      variant="body47"
                    >
                      Notification Settings
                    </Text>
                    <Line className="bg-gray_123 h-[1px] w-[100%]" />
                  </div>
                  <List
                    className="flex-col gap-[13px] grid items-center w-[94%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                          variant="body50"
                        >
                          Item Sold
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
                          variant="body59"
                        >
                          When someone purchased one of your items
                        </Text>
                      </div>
                      <Img
                        src="images/img_camera_gray_965.svg"
                        className="h-[24px] w-[auto]"
                        alt="camera"
                      />
                    </div>
                    <Line className="self-center h-[1px] bg-gray_123 w-[100%]" />
                    <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                          variant="body50"
                        >
                          Auction Expirates
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
                          variant="body59"
                        >
                          When a timed auction you created ends
                        </Text>
                      </div>
                      <Img
                        src="images/img_camera_black_900.svg"
                        className="h-[24px] w-[auto]"
                        alt="camera One"
                      />
                    </div>
                    <Line className="self-center h-[1px] bg-gray_123 w-[100%]" />
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex sm:flex-1 flex-col gap-[10px] items-start justify-start sm:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                          variant="body50"
                        >
                          Owned Item Updates
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
                          variant="body59"
                        >
                          When a significant update occurs for one of the items
                          you have purchased on Enefthy
                        </Text>
                      </div>
                      <Img
                        src="images/img_camera_black_900.svg"
                        className="h-[24px] w-[auto]"
                        alt="camera Two"
                      />
                    </div>
                    <Line className="self-center h-[1px] bg-gray_123 w-[100%]" />
                    <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                          variant="body50"
                        >
                          Successful Purchase
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
                          variant="body59"
                        >
                          When you successfully buy an item
                        </Text>
                      </div>
                      <Img
                        src="images/img_camera_gray_965.svg"
                        className="h-[24px] w-[auto]"
                        alt="camera Three"
                      />
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start md:w-[100%] w-[31%]">
                <div className="bg-white_A700 flex flex-col gap-[32px] items-center justify-end outline outline-[0.5px] outline-gray_123 py-[24px] rounded-[15px] shadow-bs70 w-[100%]">
                  <div className="flex flex-col gap-[24px] justify-start w-[100%]">
                    <Text
                      className="font-normal md:ml-[0] ml-[24px] not-italic text-black_908 text-left tracking-[0.18px] w-[auto]"
                      variant="body47"
                    >
                      Your Photo
                    </Text>
                    <Line className="bg-gray_123 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[24px] items-start justify-start md:w-[100%] w-[86%]">
                    <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[68%]">
                      <Img
                        src="images/img_ellipse1023.png"
                        className="h-[64px] md:h-[auto] rounded-[50%] w-[64px]"
                        alt="Ellipse1023"
                      />
                      <div className="flex flex-col gap-[9px] items-start justify-start w-[58%]">
                        <Text
                          className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                          variant="body50"
                        >
                          Edit your photo
                        </Text>
                        <div className="flex flex-row font-outfit gap-[10px] items-start justify-start md:w-[100%] w-[92%]">
                          <Text
                            className="font-normal not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
                            variant="body59"
                          >
                            Delete
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-red_603 tracking-[0.14px] w-[auto]"
                            variant="body59"
                          >
                            Update
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col gap-[16px] items-center justify-start outline-[0.5px] outline-dashed outline-gray_966 p-[14px] rounded-[15px] w-[100%]">
                      <Img
                        src="images/img_user_gray_70.svg"
                        className="h-[48px] rounded-[50%] w-[48px]"
                        alt="user Three"
                      />
                      <div className="flex flex-col gap-[9px] items-center justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-center text-gray_965 tracking-[0.14px] w-[auto]"
                          variant="body59"
                        >
                          Click to upload or drag and drop
                        </Text>
                        <Text
                          className="font-normal leading-[15.60px] not-italic text-center text-gray_523 tracking-[0.12px]"
                          variant="body67"
                        >
                          PNG, JPG or Gif
                          <br />
                          Max 20Mb
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[31px] items-center justify-end outline outline-[0.5px] outline-gray_123 py-[23px] rounded-[15px] shadow-bs70 w-[100%]">
                  <div className="flex flex-col gap-[24px] justify-start w-[100%]">
                    <Text
                      className="font-normal md:ml-[0] ml-[24px] not-italic text-black_908 text-left tracking-[0.18px] w-[auto]"
                      variant="body47"
                    >
                      Social Linked
                    </Text>
                    <Line className="bg-gray_123 h-[1px] w-[100%]" />
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start md:w-[100%] w-[86%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Img
                        src="images/img_signal_blue_a203.svg"
                        className="h-[28px] w-[auto]"
                        alt="signal"
                      />
                      <Button className="bg-green_602 cursor-pointer font-normal min-w-[96px] not-italic py-[6px] rounded-[8px] text-[14px] text-center text-white_A700 tracking-[0.14px] w-[auto]">
                        Connected
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[9px] items-start justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                        variant="body50"
                      >
                        Edit your photo
                      </Text>
                      <Text
                        className="font-normal leading-[25.20px] not-italic text-gray_523 text-left tracking-[0.14px]"
                        variant="body59"
                      >
                        Use Google to sign in to your account.
                        <br />
                        Click here to learn more.
                      </Text>
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

export default SettingsPage;
