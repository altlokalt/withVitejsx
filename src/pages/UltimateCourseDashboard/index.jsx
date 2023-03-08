import React from "react";

import { Text, Img, Input, Button, List, Line } from "components";
import { CloseSVG } from "../../assets/images";

const UltimateCourseDashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-bluegray_61 flex font-passionone items-start justify-end mx-[auto] sm:pr-[20px] pr-[280px] md:pr-[40px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[40px] items-center justify-start mr-[auto] w-[100%]">
          <aside className="flex flex-col md:hidden justify-start w-[329px]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-gradient15  flex items-end justify-start sm:pl-[20px] pl-[30px] py-[30px] w-[100%]">
                <div className="flex flex-col justify-start mb-[10px] mt-[7px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body17"
                  >
                    Ultimate Course
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex font-poppins h-[95px] items-start justify-start mt-[40px] p-[25px] sm:px-[20px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group156.svg')",
                    }}
                  >
                    <div className="flex flex-row gap-[24px] items-start justify-start my-[6px] md:w-[100%] w-[69%]">
                      <Img
                        src="images/img_grid_purple_800.svg"
                        className="h-[27px] w-[27px]"
                        alt="grid"
                      />
                      <Text
                        className="font-semibold text-left text-purple_700 w-[auto]"
                        variant="body42"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row font-poppins gap-[24px] items-start justify-start md:ml-[0] ml-[25px] mt-[24px] md:w-[100%] w-[54%]">
                    <Img
                      src="images/img_map_purple_50.svg"
                      className="h-[22px] w-[auto]"
                      alt="map"
                    />
                    <Text
                      className="font-normal not-italic text-left text-purple_51 w-[auto]"
                      variant="body42"
                    >
                      My Course
                    </Text>
                  </div>
                  <div className="flex flex-row font-poppins gap-[24px] items-start justify-start md:ml-[0] ml-[25px] mt-[48px] md:w-[100%] w-[50%]">
                    <Img
                      src="images/img_star_purple_50.svg"
                      className="h-[25px] w-[auto]"
                      alt="star"
                    />
                    <Text
                      className="font-normal not-italic text-left text-purple_51 w-[auto]"
                      variant="body42"
                    >
                      Favourite
                    </Text>
                  </div>
                  <div className="flex flex-row font-poppins gap-[28px] items-start justify-start md:ml-[0] ml-[28px] mt-[52px] md:w-[100%] w-[36%]">
                    <Img
                      src="images/img_file_purple_50.svg"
                      className="h-[27px] w-[auto]"
                      alt="file"
                    />
                    <Text
                      className="font-normal not-italic text-left text-purple_51 w-[auto]"
                      variant="body42"
                    >
                      Exam
                    </Text>
                  </div>
                  <div className="flex flex-row font-poppins gap-[28px] items-center justify-start md:ml-[0] ml-[28px] mt-[51px] md:w-[100%] w-[54%]">
                    <Img
                      src="images/img_file_purple_50_27x20.svg"
                      className="h-[27px] w-[auto]"
                      alt="file One"
                    />
                    <Text
                      className="font-normal not-italic text-left text-purple_51 w-[auto]"
                      variant="body42"
                    >
                      Certificate
                    </Text>
                  </div>
                  <div className="flex flex-row font-poppins gap-[24px] items-start justify-start md:ml-[0] ml-[25px] mt-[55px] md:w-[100%] w-[49%]">
                    <Img
                      src="images/img_mail_purple_50.svg"
                      className="h-[20px] w-[auto]"
                      alt="mail"
                    />
                    <Text
                      className="font-normal not-italic text-left text-purple_51 w-[auto]"
                      variant="body42"
                    >
                      Message
                    </Text>
                  </div>
                  <div className="flex flex-row font-poppins gap-[24px] items-start justify-start md:ml-[0] ml-[25px] mt-[50px] md:w-[100%] w-[46%]">
                    <Img
                      src="images/img_settings_purple_50.svg"
                      className="h-[27px] w-[27px]"
                      alt="settings"
                    />
                    <Text
                      className="font-normal not-italic text-left text-purple_51 w-[auto]"
                      variant="body42"
                    >
                      Settings
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col font-poppins gap-[8px] h-[260px] items-center justify-end mt-[332px] p-[29px] sm:px-[20px] md:w-[100%] w-[90%]"
                    style={{
                      backgroundImage:
                        "url('images/img_group4_white_a700.svg')",
                    }}
                  >
                    <div className="md:h-[105px] h-[163px] relative w-[100%]">
                      <div className="absolute bg-bluegray_50_90 bottom-[0] h-[105px] inset-x-[0] mx-[auto] rounded-[52px] w-[105px]"></div>
                      <Img
                        src="images/img_proplans.svg"
                        className="absolute h-[99px] inset-x-[0] mx-[auto] top-[0] w-[auto]"
                        alt="ProPlans"
                      />
                      <Text
                        className="absolute bottom-[3%] font-medium inset-x-[0] leading-[24.00px] mx-[auto] text-center text-gray_961"
                        variant="body44"
                      >
                        <span className="text-gray_961 text-[19px] font-poppins">
                          10 Million People Using
                          <br />
                        </span>
                        <span className="text-gray_961 text-[19px] font-poppins font-semibold">
                          Pro Plans
                        </span>
                      </Text>
                    </div>
                    <Text
                      className="bg-amber_901 font-normal h-[30px] justify-center not-italic px-[20px] py-[3px] rounded-[5px] text-center text-white_A700 w-[110px]"
                      variant="body50"
                    >
                      Upgrade
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col font-poppins gap-[40px] items-center justify-start w-[100%]">
            <header className="flex md:hidden items-center justify-center w-[100%]">
              <ul className="flex md:flex-col flex-row md:hidden items-center justify-center w-[100%] common-row-list">
                <li className="sm:w-[100%] sm:my-[10px] sm:mx-[0] w-[57%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[17px] placeholder:text-gray_900_91 text-gray_900_91 text-left w-[100%]"
                    wrapClassName="bg-white_A703 flex md:w-[100%] pl-[22px] pr-[35px] py-[16px] rounded-[10px] shadow-bs48 sm:px-[20px] sm:w-[100%] w-[57%]"
                    name="Group152"
                    placeholder="Search Course or Instructor"
                    prefix={
                      <Img
                        src="images/img_search_gray_961.svg"
                        className="cursor-pointer mr-[15px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#9010102d"
                          className="cursor-pointer ml-[10px] my-[auto]"
                          onClick={() => setInputvalue("")}
                        />
                      ) : (
                        ""
                      )
                    }
                  ></Input>
                </li>
                <li className="ml-[40px] sm:w-[100%] sm:my-[10px] text-center">
                  <Button
                    className="bg-purple_800 flex items-center justify-center pl-[20px] pr-[19px] py-[15px] rounded-[10px] text-center"
                    leftIcon={
                      <Img
                        src="images/img_settings_white_a700_27x27.svg"
                        className="mr-[15px] text-center"
                        alt="settings"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[20px] text-left text-white_A700">
                      Filter
                    </div>
                  </Button>
                </li>
                <li className="ml-[203px] sm:w-[100%] sm:my-[10px] w-[2%] my-[15px]">
                  <Img
                    src="images/img_alarm_purple_802.svg"
                    className="h-[30px]"
                    alt="alarm"
                  />
                </li>
                <li className="ml-[25px] sm:w-[100%] sm:my-[10px] w-[4%] my-[5px]">
                  <Img
                    src="images/img_imagehere.svg"
                    className="h-[50px]"
                    alt="IMAGEHERE"
                  />
                </li>
                <li className="ml-[15px] sm:w-[100%] sm:my-[10px] w-[auto] my-[15px]">
                  <a
                    className="cursor-pointer font-normal not-italic text-[19px] text-gray_961 text-left"
                    href="javascript:"
                  >
                    Jerome Butler
                  </a>
                </li>
                <li className="mt-[25px] mb-[26px] ml-[15px] sm:w-[100%] sm:my-[10px] w-[1%]">
                  <Img
                    src="images/img_path_gray_961.svg"
                    className="h-[8px]"
                    alt="Path"
                  />
                </li>
              </ul>
            </header>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[40px] items-center justify-start md:w-[100%] w-[69%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                    <div className="flex flex-row md:gap-[40px] items-end justify-between w-[100%]">
                      <Text
                        className="font-semibold mt-[7px] text-gray_961 text-left w-[auto]"
                        variant="body36"
                      >
                        Popular Courses
                      </Text>
                      <Button className="bg-purple_800_67 cursor-pointer font-medium leading-[normal] mb-[3px] min-w-[88px] py-[7px] rounded-[10px] text-[18px] text-center text-purple_800 w-[auto]">
                        See All
                      </Button>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="bg-white_A703 flex flex-1 items-start justify-start p-[20px] rounded-[10px] shadow-bs48 w-[100%]">
                        <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-start md:w-[100%] w-[95%]">
                          <div className="bg-gray_413 flex h-[155px] items-center justify-end p-[10px] rounded-[10px] w-[155px]">
                            <Text
                              className="bg-purple_800_99 font-medium h-[35px] justify-center mt-[100px] px-[19px] py-[2px] rounded-[5px] text-left text-white_A700 w-[80px]"
                              variant="body43"
                            >
                              $175
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start sm:w-[100%] w-[60%]">
                            <Text
                              className="font-semibold leading-[28.00px] text-left text-purple_700"
                              variant="body49"
                            >
                              The Complete Graphic Design <br />
                              Theory for Beginners
                            </Text>
                            <Text
                              className="font-normal mt-[9px] not-italic text-gray_961 text-left w-[auto]"
                              variant="body59"
                            >
                              <span className="text-gray_961 text-[14px] font-poppins">
                                By{" "}
                              </span>
                              <span className="text-purple_700 text-[14px] font-poppins font-medium">
                                Loretta Walters
                              </span>
                            </Text>
                            <div className="flex flex-row items-center justify-start mt-[7px] md:w-[100%] w-[75%]">
                              <Img
                                src="images/img_star_purple_800.svg"
                                className="h-[16px] w-[17px]"
                                alt="star One"
                              />
                              <Img
                                src="images/img_star_purple_800.svg"
                                className="h-[16px] ml-[4px] w-[17px]"
                                alt="star One"
                              />
                              <Img
                                src="images/img_star_purple_800.svg"
                                className="h-[16px] ml-[4px] w-[17px]"
                                alt="star Two"
                              />
                              <Img
                                src="images/img_star_purple_800.svg"
                                className="h-[16px] ml-[4px] w-[17px]"
                                alt="star Three"
                              />
                              <Img
                                src="images/img_mail_purple_800.svg"
                                className="h-[16px] ml-[4px] w-[17px]"
                                alt="mail One"
                              />
                              <Text
                                className="font-normal ml-[13px] not-italic text-gray_900_91 text-left w-[auto]"
                                variant="body50"
                              >
                                4.0 (2,861)
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white_A703 flex flex-1 items-center justify-start p-[20px] rounded-[10px] shadow-bs48 w-[100%]">
                        <div className="flex sm:flex-col flex-row gap-[20px] items-center justify-between md:w-[100%] w-[99%]">
                          <div className="bg-gray_413 flex h-[155px] items-center justify-end p-[10px] rounded-[10px] w-[155px]">
                            <Text
                              className="bg-purple_800_99 font-medium h-[35px] justify-center mt-[100px] px-[16px] py-[2px] rounded-[5px] text-left text-white_A700 w-[80px]"
                              variant="body43"
                            >
                              $299
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start sm:w-[100%] w-[62%]">
                            <Text
                              className="font-semibold leading-[28.00px] text-left text-purple_700"
                              variant="body49"
                            >
                              Beginner Zikon Digital SLR (DSLR)
                              <br />
                              Photography
                            </Text>
                            <Text
                              className="font-normal mt-[8px] not-italic text-gray_961 text-left w-[auto]"
                              variant="body59"
                            >
                              <span className="text-gray_961 text-[14px] font-poppins">
                                By{" "}
                              </span>
                              <span className="text-purple_700 text-[14px] font-poppins font-medium">
                                Roger Hamilton
                              </span>
                            </Text>
                            <div className="flex flex-row items-start justify-start mt-[9px] md:w-[100%] w-[71%]">
                              <Img
                                src="images/img_star_purple_800.svg"
                                className="h-[16px] mt-[4px] w-[17px]"
                                alt="star Two"
                              />
                              <Img
                                src="images/img_star_purple_800.svg"
                                className="h-[16px] ml-[4px] mt-[4px] w-[17px]"
                                alt="star One One"
                              />
                              <Img
                                src="images/img_star_purple_800.svg"
                                className="h-[16px] ml-[4px] mt-[4px] w-[17px]"
                                alt="star Two One"
                              />
                              <Img
                                src="images/img_star_purple_800.svg"
                                className="h-[16px] ml-[4px] mt-[4px] w-[17px]"
                                alt="star Three One"
                              />
                              <Img
                                src="images/img_star_purple_800.svg"
                                className="h-[16px] ml-[4px] mt-[4px] w-[17px]"
                                alt="star Four"
                              />
                              <Text
                                className="font-normal ml-[13px] not-italic text-gray_900_91 text-left w-[auto]"
                                variant="body50"
                              >
                                5.0 (1,963)
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
                    <div className="flex flex-row md:gap-[40px] items-end justify-between w-[100%]">
                      <Text
                        className="font-semibold mt-[6px] text-gray_961 text-left w-[auto]"
                        variant="body36"
                      >
                        Upcoming Courses
                      </Text>
                      <Button className="bg-purple_800_67 cursor-pointer font-medium leading-[normal] mb-[2px] min-w-[88px] py-[7px] rounded-[10px] text-[18px] text-center text-purple_800 w-[auto]">
                        See All
                      </Button>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="bg-white_A703 flex flex-1 items-start justify-end p-[14px] rounded-[10px] shadow-bs48 w-[100%]">
                        <div className="flex flex-col gap-[10px] items-start justify-start md:ml-[0] ml-[6px] mt-[6px] md:w-[100%] w-[92%]">
                          <div className="flex flex-row gap-[20px] items-center justify-start md:w-[100%] w-[86%]">
                            <div className="bg-gray_413 h-[95px] rounded-[10px] w-[95px]"></div>
                            <div className="flex flex-col items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-gray_961 text-left w-[auto]"
                                variant="body47"
                              >
                                Evan Lindsey
                              </Text>
                              <Text
                                className="font-medium mt-[8px] text-gray_900_91 text-left w-[auto]"
                                variant="body59"
                              >
                                Start: 17 April
                              </Text>
                              <Text
                                className="font-medium mt-[9px] text-left text-purple_700 w-[auto]"
                                variant="body50"
                              >
                                $159
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="font-semibold leading-[28.00px] text-left text-purple_700"
                            variant="body49"
                          >
                            The Complete Communication <br />
                            Skills Master Class for Life
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A703 flex flex-1 items-center justify-end p-[14px] rounded-[10px] shadow-bs48 w-[100%]">
                        <div className="flex flex-col gap-[10px] items-start justify-start mt-[6px] md:w-[100%] w-[94%]">
                          <div className="flex flex-row gap-[20px] items-center justify-start md:w-[100%] w-[82%]">
                            <div className="bg-gray_413 h-[95px] rounded-[10px] w-[95px]"></div>
                            <div className="flex flex-col items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-gray_961 text-left w-[auto]"
                                variant="body47"
                              >
                                Clara Marsh
                              </Text>
                              <Text
                                className="font-medium mt-[8px] text-gray_900_91 text-left w-[auto]"
                                variant="body59"
                              >
                                Start: 20 June
                              </Text>
                              <Text
                                className="font-medium mt-[10px] text-left text-purple_700 w-[auto]"
                                variant="body50"
                              >
                                $180
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="font-semibold leading-[28.00px] text-left text-purple_700"
                            variant="body49"
                          >
                            The Complete Financial Analyst <br />
                            Training & Investing Course
                          </Text>
                        </div>
                      </div>
                      <div className="bg-white_A703 flex flex-1 items-start justify-end p-[14px] rounded-[10px] shadow-bs48 w-[100%]">
                        <div className="flex flex-col gap-[10px] items-start justify-start md:ml-[0] ml-[6px] mt-[6px] md:w-[100%] w-[92%]">
                          <div className="flex flex-row gap-[20px] items-center justify-start md:w-[100%] w-[89%]">
                            <div className="bg-gray_413 h-[95px] rounded-[10px] w-[95px]"></div>
                            <div className="flex flex-col items-start justify-start w-[auto]">
                              <Text
                                className="font-medium text-gray_961 text-left w-[auto]"
                                variant="body47"
                              >
                                Keith Jimenez
                              </Text>
                              <Text
                                className="font-medium mt-[8px] text-gray_900_91 text-left w-[auto]"
                                variant="body59"
                              >
                                Start: 13 June
                              </Text>
                              <Text
                                className="font-medium mt-[10px] text-left text-purple_700 w-[auto]"
                                variant="body50"
                              >
                                $229
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="font-semibold leading-[28.00px] text-left text-purple_700"
                            variant="body49"
                          >
                            Digital Marketing Secrets for <br />
                            Beginners - A Complete Course
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <div className="bg-purple_800 flex md:flex-1 items-center justify-start p-[30px] sm:px-[20px] rounded-[10px] shadow-bs48 md:w-[100%] w-[30%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <Img
                    src="images/img_imagehere_gray_413.svg"
                    className="h-[165px] w-[165px]"
                    alt="IMAGEHERE Four"
                  />
                  <Text
                    className="font-semibold mt-[17px] text-center text-white_A700 w-[auto]"
                    variant="body30"
                  >
                    Chris Swanson
                  </Text>
                  <Text
                    className="font-medium mt-[6px] text-center text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Member Since 2020
                  </Text>
                  <div className="flex items-center justify-start mt-[22px] w-[100%]">
                    <div className="gap-[31px] grid grid-cols-2 justify-center min-h-[auto] w-[100%]">
                      <div className="bg-white_A700 flex flex-1 flex-col items-start justify-end p-[10px] rounded-[10px] w-[100%]">
                        <Text
                          className="font-normal font-righteous md:ml-[0] ml-[4px] not-italic text-left text-purple_803 w-[auto]"
                          variant="body28"
                        >
                          17
                        </Text>
                        <Text
                          className="font-medium font-poppins md:ml-[0] ml-[4px] mt-[4px] text-left text-purple_803 w-[auto]"
                          variant="body49"
                        >
                          Complete
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col items-start justify-end p-[9px] rounded-[10px] w-[100%]">
                        <Text
                          className="font-normal font-righteous md:ml-[0] ml-[5px] not-italic text-left text-purple_803 w-[auto]"
                          variant="body28"
                        >
                          35
                        </Text>
                        <Text
                          className="font-medium font-poppins md:ml-[0] ml-[5px] mt-[4px] text-left text-purple_803 w-[auto]"
                          variant="body49"
                        >
                          In Progress
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start p-[10px] rounded-[10px] w-[100%]">
                        <Text
                          className="font-normal font-righteous md:ml-[0] ml-[4px] not-italic text-left text-purple_803 w-[auto]"
                          variant="body28"
                        >
                          59
                        </Text>
                        <Text
                          className="font-medium font-poppins md:ml-[0] ml-[4px] my-[2px] text-left text-purple_803 w-[auto]"
                          variant="body49"
                        >
                          Certificate
                        </Text>
                      </div>
                      <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start p-[10px] rounded-[10px] w-[100%]">
                        <Text
                          className="font-normal font-righteous md:ml-[0] ml-[4px] not-italic text-left text-purple_803 w-[auto]"
                          variant="body28"
                        >
                          284
                        </Text>
                        <Text
                          className="font-medium font-poppins md:ml-[0] ml-[4px] text-left text-purple_803 w-[auto]"
                          variant="body49"
                        >
                          Discussions
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start md:w-[100%] w-[69%]">
                <Text
                  className="font-semibold text-gray_961 text-left w-[auto]"
                  variant="body36"
                >
                  Last Watched
                </Text>
                <div className="bg-white_A703 flex items-center justify-end p-[10px] rounded-[10px] shadow-bs48 w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mb-[3px] mt-[10px] w-[100%]">
                    <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[63%]">
                      <div className="bg-gray_413 h-[354px] rounded-[10px] w-[100%]"></div>
                      <Text
                        className="font-medium mt-[12px] text-gray_961 text-left w-[auto]"
                        variant="body41"
                      >
                        Learning shape and form fundamentals
                      </Text>
                      <div className="flex flex-row items-start justify-start md:ml-[0] ml-[14px] mt-[18px] md:w-[100%] w-[43%]">
                        <Img
                          src="images/img_thumbsup_purple_700.svg"
                          className="h-[21px] w-[21px]"
                          alt="thumbsup"
                        />
                        <Img
                          src="images/img_ticket_gray_961.svg"
                          className="h-[18px] ml-[95px] mt-[2px] w-[auto]"
                          alt="ticket"
                        />
                        <Img
                          src="images/img_download_gray_961.svg"
                          className="h-[21px] ml-[109px] w-[20px]"
                          alt="download"
                        />
                      </div>
                      <div className="flex flex-row gap-[40px] items-center justify-start mt-[4px] md:w-[100%] w-[49%]">
                        <Text
                          className="font-medium text-center text-purple_800 w-[auto]"
                          variant="body54"
                        >
                          25 Like
                        </Text>
                        <Text
                          className="font-medium text-center text-gray_900_87 w-[auto]"
                          variant="body54"
                        >
                          17 Comments
                        </Text>
                        <Text
                          className="font-medium text-center text-gray_900_87 w-[auto]"
                          variant="body54"
                        >
                          Download
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[24px] items-start justify-start md:mt-[0] mt-[5px] md:w-[100%] w-[33%]">
                      <Text
                        className="font-semibold leading-[28.00px] text-left text-purple_803"
                        variant="body49"
                      >
                        The Ultimate Drawing Course from <br />
                        Beginner to Advanced
                      </Text>
                      <List
                        className="flex-col gap-[18px] grid items-center w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <Button className="bg-purple_700 flex h-[45px] items-center justify-center mb-[2px] p-[11px] rounded-[22px] w-[45px]">
                            <Img
                              src="images/img_checkmark_white_a700_45x45.svg"
                              className=""
                              alt="checkmark"
                            />
                          </Button>
                          <Text
                            className="font-medium ml-[15px] text-gray_900_87 text-left"
                            variant="body54"
                          >
                            Getting started with <br />
                            the course
                          </Text>
                          <Text
                            className="font-medium ml-[76px] mt-[12px] text-gray_900_87 text-right w-[auto]"
                            variant="body54"
                          >
                            02:30
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <Button className="bg-purple_700 flex h-[45px] items-center justify-center mb-[2px] p-[11px] rounded-[22px] w-[45px]">
                            <Img
                              src="images/img_checkmark_white_a700_45x45.svg"
                              className=""
                              alt="checkmark One"
                            />
                          </Button>
                          <Text
                            className="font-medium ml-[15px] text-gray_900_87 text-left"
                            variant="body54"
                          >
                            Learn how to draw <br />a realistic eye
                          </Text>
                          <Text
                            className="font-medium ml-[86px] mt-[12px] text-gray_900_87 text-right w-[auto]"
                            variant="body54"
                          >
                            03:40
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <div className="bg-purple_800_67 flex h-[45px] items-center justify-start mb-[2px] rounded-[22px] w-[45px]">
                            <Button className="border-[3px] border-dashed border-purple_700 flex h-[45px] items-center justify-center p-[13px] rounded-[22px] w-[45px]">
                              <Img
                                src="images/img_bookmark_purple_700.svg"
                                className=""
                                alt="bookmark"
                              />
                            </Button>
                          </div>
                          <Text
                            className="font-medium ml-[15px] text-left text-purple_700"
                            variant="body54"
                          >
                            Learning shape and <br />
                            form fundamentals
                          </Text>
                          <Text
                            className="font-medium ml-[80px] mt-[12px] text-purple_803 text-right w-[auto]"
                            variant="body54"
                          >
                            10:26
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <Button className="bg-purple_800_67 flex h-[45px] items-center justify-center mb-[2px] p-[12px] rounded-[22px] w-[45px]">
                            <Img
                              src="images/img_path_purple_700.svg"
                              className=""
                              alt="Path One"
                            />
                          </Button>
                          <Text
                            className="font-medium ml-[15px] text-gray_961 text-left"
                            variant="body54"
                          >
                            Learning values and <br />
                            contrast
                          </Text>
                          <Text
                            className="font-medium ml-[80px] mt-[12px] text-gray_961 text-right w-[auto]"
                            variant="body54"
                          >
                            07:19
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <Button className="bg-purple_800_67 flex h-[45px] items-center justify-center mb-[2px] p-[12px] rounded-[22px] w-[45px]">
                            <Img
                              src="images/img_path_purple_700.svg"
                              className=""
                              alt="Path Two"
                            />
                          </Button>
                          <Text
                            className="font-medium ml-[15px] text-gray_961 text-left"
                            variant="body54"
                          >
                            Learning space and <br />
                            perspective
                          </Text>
                          <Text
                            className="font-medium ml-[80px] mt-[12px] text-gray_961 text-right w-[auto]"
                            variant="body54"
                          >
                            12:48
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-start justify-start w-[100%]">
                          <Button className="bg-purple_800_67 flex h-[45px] items-center justify-center mb-[2px] p-[12px] rounded-[22px] w-[45px]">
                            <Img
                              src="images/img_path_purple_700.svg"
                              className=""
                              alt="Path Three"
                            />
                          </Button>
                          <Text
                            className="font-medium ml-[15px] text-gray_961 text-left"
                            variant="body54"
                          >
                            Creating textures in <br />
                            your drawings
                          </Text>
                          <Text
                            className="font-medium ml-[77px] mt-[12px] text-gray_961 text-right w-[auto]"
                            variant="body54"
                          >
                            06:28
                          </Text>
                        </div>
                      </List>
                    </div>
                    <div className="h-[365px] md:mt-[0] mt-[85px] relative w-[1%] md:w-[100%]">
                      <Line className="bg-gray_302 h-[365px] m-[auto] rounded-[2px] w-[5px]" />
                      <Line className="absolute bg-purple_700 h-[80px] inset-x-[0] mx-[auto] rounded-[2px] top-[0] w-[5px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[30%]">
                <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <Text
                      className="font-semibold mt-[4px] text-gray_961 text-left w-[auto]"
                      variant="body36"
                    >
                      Best Instructor
                    </Text>
                    <Button className="bg-purple_800_67 cursor-pointer font-medium leading-[normal] min-w-[88px] py-[7px] rounded-[10px] text-[18px] text-center text-purple_800 w-[auto]">
                      See All
                    </Button>
                  </div>
                  <div className="bg-white_A703 flex items-end justify-end p-[7px] rounded-[10px] shadow-bs48 w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end mr-[3px] mt-[22px] md:w-[100%] w-[94%]">
                      <div className="flex flex-col gap-[28px] items-center justify-start sm:w-[100%] w-[11%]">
                        <Img
                          src="images/img_imagehere.svg"
                          className="h-[42px] w-[42px]"
                          alt="IMAGEHERE Six"
                        />
                        <Img
                          src="images/img_imagehere.svg"
                          className="h-[42px] w-[42px]"
                          alt="IMAGEHERE Seven"
                        />
                        <Img
                          src="images/img_imagehere.svg"
                          className="h-[42px] w-[42px]"
                          alt="IMAGEHERE Eight"
                        />
                        <Img
                          src="images/img_imagehere.svg"
                          className="h-[42px] w-[42px]"
                          alt="IMAGEHERE Nine"
                        />
                        <Img
                          src="images/img_imagehere.svg"
                          className="h-[42px] w-[42px]"
                          alt="IMAGEHERE Ten"
                        />
                        <Img
                          src="images/img_imagehere.svg"
                          className="h-[42px] w-[42px]"
                          alt="IMAGEHERE Eleven"
                        />
                        <Img
                          src="images/img_imagehere.svg"
                          className="h-[42px] w-[42px]"
                          alt="IMAGEHERE Twelve"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[10px] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-semibold text-left text-purple_700 w-[auto]"
                          variant="body59"
                        >
                          Dennis Guzman
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-bluegray_813 text-left w-[auto]"
                          variant="body59"
                        >
                          5 Design Courses
                        </Text>
                        <Text
                          className="font-semibold mt-[27px] text-left text-purple_700 w-[auto]"
                          variant="body59"
                        >
                          Evelyn Lopez
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_813 text-left w-[auto]"
                          variant="body59"
                        >
                          3 Marketing Courses
                        </Text>
                        <Text
                          className="font-semibold mt-[25px] text-left text-purple_700 w-[auto]"
                          variant="body59"
                        >
                          Albert Diaz
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-bluegray_813 text-left w-[auto]"
                          variant="body59"
                        >
                          3 Photograpy Courses
                        </Text>
                        <Text
                          className="font-semibold mt-[25px] text-left text-purple_700 w-[auto]"
                          variant="body59"
                        >
                          Jean Newton
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_813 text-left w-[auto]"
                          variant="body59"
                        >
                          2 Business Courses
                        </Text>
                        <Text
                          className="font-semibold mt-[26px] text-left text-purple_700 w-[auto]"
                          variant="body59"
                        >
                          Emilie Green
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_813 text-left w-[auto]"
                          variant="body59"
                        >
                          4 Fitness Courses
                        </Text>
                        <Text
                          className="font-semibold mt-[28px] text-left text-purple_700 w-[auto]"
                          variant="body59"
                        >
                          Albert Diaz
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_813 text-left w-[auto]"
                          variant="body59"
                        >
                          5 Marketing Courses
                        </Text>
                        <Text
                          className="font-semibold mt-[27px] text-left text-purple_700 w-[auto]"
                          variant="body59"
                        >
                          Estelle Woods
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_813 text-left w-[auto]"
                          variant="body59"
                        >
                          1 Lifestyle Courses
                        </Text>
                      </div>
                      <div className="flex flex-col items-end justify-start sm:ml-[0] ml-[68px] sm:mt-[0] mt-[11px] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-bluegray_813 text-right w-[auto]"
                          variant="body50"
                        >
                          12k Students
                        </Text>
                        <Text
                          className="font-medium mt-[47px] text-bluegray_813 text-right w-[auto]"
                          variant="body50"
                        >
                          900 Students
                        </Text>
                        <Text
                          className="font-medium mt-[46px] text-bluegray_813 text-right w-[auto]"
                          variant="body50"
                        >
                          867 Students
                        </Text>
                        <Text
                          className="font-medium mt-[45px] text-bluegray_813 text-right w-[auto]"
                          variant="body50"
                        >
                          792 Students
                        </Text>
                        <Text
                          className="font-medium mt-[46px] text-bluegray_813 text-right w-[auto]"
                          variant="body50"
                        >
                          743 Students
                        </Text>
                        <Text
                          className="font-medium mt-[45px] text-bluegray_813 text-right w-[auto]"
                          variant="body50"
                        >
                          640 Students
                        </Text>
                        <Text
                          className="font-medium mt-[46px] text-bluegray_813 text-right w-[auto]"
                          variant="body50"
                        >
                          479 Students
                        </Text>
                      </div>
                      <div className="h-[440px] sm:ml-[0] ml-[15px] relative sm:w-[100%] w-[2%]">
                        <Line className="bg-gray_302 h-[440px] m-[auto] rounded-[2px] w-[5px]" />
                        <Line className="absolute bg-purple_700 h-[80px] inset-x-[0] mx-[auto] rounded-[2px] top-[0] w-[5px]" />
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

export default UltimateCourseDashboardPage;
