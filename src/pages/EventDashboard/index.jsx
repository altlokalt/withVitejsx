import React from "react";

import { Img, Text, Input, Button, List, Line, Radio } from "components";
import { CloseSVG } from "../../assets/images";

const EventDashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex font-poppins items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between w-[100%]">
          <Img
            src="images/img_group48095690.svg"
            className="h-[900px] w-[auto]"
            alt="Group48095690"
          />
          <div className="flex md:flex-1 flex-col items-center justify-start md:px-[20px] md:w-[100%] w-[auto]">
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[5px] items-start justify-start md:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-bluegray_812 text-left w-[auto]"
                  variant="body26"
                >
                  Hi, Nashiho Kim
                </Text>
                <Text
                  className="font-normal not-italic text-gray_614 text-left w-[auto]"
                  variant="body50"
                >
                  What’s new event fot you?
                </Text>
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[60%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_614 text-gray_614 text-left w-[100%]"
                  wrapClassName="bg-white_A700 flex pl-[16px] pr-[35px] py-[13px] rounded-[16px] sm:pr-[20px] sm:w-[100%] w-[auto]"
                  name="Search"
                  placeholder="Search"
                  prefix={
                    <Img
                      src="images/img_search_gray_614.svg"
                      className="cursor-pointer mr-[8px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#727272"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
                <Button className="bg-white_A700 flex h-[48px] items-center justify-center p-[12px] rounded-[16px] shadow-bs45 w-[48px]">
                  <Img
                    src="images/img_notification_gray_959.svg"
                    className="h-[24px]"
                    alt="notification"
                  />
                </Button>
                <Button className="bg-white_A700 flex h-[48px] items-center justify-center p-[12px] rounded-[16px] shadow-bs45 w-[48px]">
                  <Img
                    src="images/img_mail_gray_960.svg"
                    className="h-[24px]"
                    alt="mail"
                  />
                </Button>
              </div>
            </div>
            <div className="bg-gradient14  flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[30px] p-[29px] sm:px-[20px] rounded-[16px] w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[16px] items-start justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[51%]">
                <Text
                  className="capitalize font-semibold text-left text-white_A700 sm:w-[100%] w-[80%]"
                  variant="body37"
                >
                  Virtuan Event UI / UX Designer 2022{" "}
                </Text>
                <Text
                  className="font-normal leading-[20.00px] not-italic text-left text-white_A700_8e w-[100%]"
                  variant="body59"
                >
                  let&#39;s create a new event with a great and experienced
                  mentor and lots of people in attendance
                </Text>
                <div className="flex items-center justify-start md:w-[100%] w-[35%]">
                  <Button className="bg-indigo_600 cursor-pointer font-medium leading-[normal] min-w-[136px] py-[13px] rounded-[16px] text-[14px] text-center text-white_A700 w-[auto]">
                    Join Event
                  </Button>
                </div>
              </div>
              <Img
                src="images/img_star1_18x18.svg"
                className="h-[18px] mb-[100px] md:ml-[0] ml-[25px] md:mt-[0] mt-[75px] w-[18px]"
                alt="StarOne"
              />
              <Img
                src="images/img_star4_18x18.svg"
                className="h-[18px] mb-[16px] md:ml-[0] ml-[28px] md:mt-[0] mt-[159px] w-[18px]"
                alt="StarFour"
              />
              <Img
                src="images/img_star5_18x18.svg"
                className="h-[18px] mb-[155px] md:ml-[0] ml-[26px] md:mt-[0] mt-[20px] w-[18px]"
                alt="StarFive"
              />
              <Img
                src="images/img_star6_18x18.svg"
                className="h-[18px] mb-[134px] md:ml-[0] ml-[172px] md:mt-[0] mt-[41px] w-[18px]"
                alt="StarSix"
              />
              <Img
                src="images/img_star7.svg"
                className="h-[18px] mb-[46px] md:ml-[0] ml-[43px] md:mt-[0] mt-[129px] w-[18px]"
                alt="StarSeven"
              />
            </div>
            <div className="flex items-center justify-start mt-[31px] w-[100%]">
              <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                  <Text
                    className="font-semibold text-bluegray_812 text-left w-[auto]"
                    variant="body43"
                  >
                    Interested Events
                  </Text>
                  <Text
                    className="font-normal mt-[3px] not-italic text-bluegray_900_b7 text-left w-[auto]"
                    variant="body59"
                  >
                    View All
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                  orientation="horizontal"
                >
                  <div className="bg-gray_600_8e flex flex-1 items-center justify-end p-[16px] rounded-[16px] w-[100%]">
                    <div className="bg-white_A700_0f flex items-center justify-end mt-[153px] p-[16px] rounded-[16px] w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row gap-[31px] items-center justify-between w-[100%]">
                          <div className="flex flex-col gap-[6px] items-center justify-start w-[auto]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body59"
                            >
                              3D Modeling
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700_b7 w-[auto]"
                              variant="body67"
                            >
                              By Pak Muhidin
                            </Text>
                          </div>
                          <Button className="bg-blue_601 cursor-pointer font-medium leading-[normal] min-w-[83px] my-[6px] py-[7px] rounded-[16px] text-[12px] text-center text-white_A700 w-[auto]">
                            Seminar
                          </Button>
                        </div>
                        <div className="bg-gray_65 flex items-center justify-start mt-[15px] p-[8px] rounded-[16px] w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                              <Img
                                src="images/img_location_black_900_16x16.svg"
                                className="h-[16px] w-[16px]"
                                alt="location"
                              />
                              <Text
                                className="sm:flex-1 font-normal leading-[16.00px] not-italic text-bluegray_900_b7 text-left sm:w-[100%] w-[88%]"
                                variant="body75"
                              >
                                Jagoran Street, No 231 West Java Sukabumi City
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[9px] items-center justify-between mt-[16px] w-[100%]">
                          <Img
                            src="images/img_user_black_900.svg"
                            className="h-[32px] w-[auto]"
                            alt="user"
                          />
                          <div className="flex flex-row gap-[6px] items-start justify-between w-[57%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body75"
                            >
                              23 Feb 2022
                            </Text>
                            <div className="bg-blue_601 h-[4px] my-[5px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body75"
                            >
                              6:00 PM
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_600_8e flex flex-1 items-center justify-end p-[16px] rounded-[16px] w-[100%]">
                    <div className="bg-white_A700_0f flex items-center justify-start mt-[153px] p-[15px] rounded-[16px] w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                          <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                            <Text
                              className="font-semibold text-left text-white_A700 w-[auto]"
                              variant="body59"
                            >
                              Tuan Pameran
                            </Text>
                            <Text
                              className="font-normal not-italic text-left text-white_A700_b7 w-[auto]"
                              variant="body67"
                            >
                              By Jennifer Ask
                            </Text>
                          </div>
                          <Button className="bg-deep_orange_501 cursor-pointer font-medium leading-[normal] mb-[5px] min-w-[81px] mt-[8px] py-[7px] rounded-[16px] text-[12px] text-center text-white_A700 w-[auto]">
                            Event
                          </Button>
                        </div>
                        <div className="bg-white_A700 flex items-center justify-start mt-[15px] p-[8px] rounded-[16px] w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                              <Img
                                src="images/img_location_black_900_16x16.svg"
                                className="h-[16px] w-[16px]"
                                alt="location One"
                              />
                              <Text
                                className="sm:flex-1 font-normal leading-[16.00px] not-italic text-bluegray_900_b7 text-left sm:w-[100%] w-[88%]"
                                variant="body75"
                              >
                                Karteng Street, No 231 West Java Cibadak City
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-between mt-[16px] w-[100%]">
                          <Img
                            src="images/img_user_black_900.svg"
                            className="h-[32px] w-[auto]"
                            alt="user One"
                          />
                          <div className="flex flex-row gap-[6px] items-start justify-between w-[57%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body75"
                            >
                              23 Feb 2022
                            </Text>
                            <div className="bg-deep_orange_502 h-[4px] my-[5px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body75"
                            >
                              6:00 PM
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray_600_8e flex flex-1 items-center justify-end p-[16px] rounded-[16px] w-[100%]">
                    <div className="bg-white_A700_0f flex items-center justify-start mt-[153px] p-[15px] rounded-[16px] w-[100%]">
                      <div className="flex flex-col items-center justify-start w-[100%]">
                        <div className="flex items-center justify-start w-[100%]">
                          <div className="flex flex-row gap-[34px] items-center justify-between w-[100%]">
                            <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                              <Text
                                className="font-semibold text-left text-white_A700 w-[auto]"
                                variant="body59"
                              >
                                Productions
                              </Text>
                              <Text
                                className="font-normal not-italic text-left text-white_A700_b7 w-[auto]"
                                variant="body67"
                              >
                                By John Lenan
                              </Text>
                            </div>
                            <Button className="bg-deep_purple_A207 cursor-pointer font-medium leading-[normal] min-w-[83px] my-[7px] py-[7px] rounded-[16px] text-[12px] text-center text-white_A700 w-[auto]">
                              Seminar
                            </Button>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex items-center justify-start mt-[14px] p-[8px] rounded-[16px] w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <div className="flex flex-row gap-[8px] items-start justify-start w-[100%]">
                              <Img
                                src="images/img_location_black_900_16x16.svg"
                                className="h-[16px] w-[16px]"
                                alt="location Two"
                              />
                              <Text
                                className="sm:flex-1 font-normal leading-[16.00px] not-italic text-bluegray_900_b7 text-left sm:w-[100%] w-[88%]"
                                variant="body75"
                              >
                                Bubuy Street, No 231 West Java Cijulang City
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[9px] items-center justify-between mt-[16px] w-[100%]">
                          <Img
                            src="images/img_user_black_900.svg"
                            className="h-[32px] w-[auto]"
                            alt="user Two"
                          />
                          <div className="flex flex-row gap-[6px] items-start justify-between w-[57%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body75"
                            >
                              23 Feb 2022
                            </Text>
                            <div className="bg-deep_purple_A207 h-[4px] my-[5px] rounded-[50%] w-[4px]"></div>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body75"
                            >
                              6:00 PM
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex md:flex-1 flex-col gap-[26px] items-center justify-center p-[32px] md:px-[20px] md:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[22px] items-center justify-start mt-[9px] w-[100%]">
              <div className="flex flex-row items-start justify-between w-[100%]">
                <Text
                  className="font-semibold text-bluegray_812 text-left w-[auto]"
                  variant="body43"
                >
                  My Ticket
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_900_b7 text-left w-[auto]"
                  variant="body59"
                >
                  View All
                </Text>
              </div>
              <div
                className="bg-cover bg-no-repeat md:h-[318px] h-[366px] p-[17px] relative w-[100%]"
                style={{
                  backgroundImage: "url('images/img_group48096183.svg')",
                }}
              >
                <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[87%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="font-semibold text-bluegray_812 text-left w-[auto]"
                        variant="body39"
                      >
                        SUM 32{" "}
                      </Text>
                      <Text
                        className="capitalize font-normal not-italic text-bluegray_900_b7 text-right w-[auto]"
                        variant="body59"
                      >
                        april 22th 2022
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[79px] items-center justify-start mt-[23px] md:w-[100%] w-[79%]">
                      <div className="flex flex-col gap-[9px] items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-bluegray_812 text-left w-[auto]"
                          variant="body47"
                        >
                          New York
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900_b7 text-left w-[auto]"
                          variant="body59"
                        >
                          City
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-bluegray_812 text-left w-[auto]"
                          variant="body47"
                        >
                          Bussines
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900_b7 text-left w-[auto]"
                          variant="body59"
                        >
                          Rate
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[22px] md:w-[100%] w-[63%]">
                      <div className="flex flex-col gap-[7px] items-center justify-start w-[auto]">
                        <Text
                          className="font-semibold text-bluegray_812 text-left w-[auto]"
                          variant="body47"
                        >
                          23a{" "}
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900_b7 text-left w-[auto]"
                          variant="body59"
                        >
                          Gate
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-bluegray_812 text-left w-[auto]"
                          variant="body47"
                        >
                          7b
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_900_b7 text-left w-[auto]"
                          variant="body59"
                        >
                          Seat
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_group48096177.svg"
                      className="h-[120px] mt-[2px] w-[auto]"
                      alt="Group48096177"
                    />
                  </div>
                </div>
                <Line className="absolute bg-black_900_33 bottom-[31%] h-[1px] inset-x-[0] mx-[auto] w-[90%]" />
              </div>
            </div>
            <div className="flex flex-col gap-[14px] items-center justify-start mb-[8px] w-[100%]">
              <div className="flex flex-row items-start justify-between w-[100%]">
                <Text
                  className="font-semibold text-bluegray_812 text-left w-[auto]"
                  variant="body43"
                >
                  Upcoming Event
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_900_b7 text-left w-[auto]"
                  variant="body59"
                >
                  View All
                </Text>
              </div>
              <List
                className="flex-col gap-[16px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="bg-white_A700 hover:cursor-pointer flex flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[16px] hover:shadow-bs39 shadow-bs39 w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Radio
                      value="SaweranEvent"
                      className="font-semibold leading-[normal] text-[16px] text-bluegray_812 text-left"
                      inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                      checked={false}
                      name="SaweranEvent"
                      label="Saweran Event"
                    ></Radio>
                    <div className="flex flex-row gap-[8px] items-center justify-center mt-[6px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-bluegray_800_b7 text-left w-[auto]"
                        variant="body59"
                      >
                        Monday, June,10th 2022
                      </Text>
                      <div className="bg-deep_orange_502 h-[6px] rounded-[50%] w-[6px]"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_800_b7 text-left w-[auto]"
                        variant="body59"
                      >
                        9:00 PM
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[22px] w-[100%]">
                      <Text
                        className="font-medium text-indigo_600 text-left w-[auto]"
                        variant="body59"
                      >
                        180 Members
                      </Text>
                      <Img
                        src="images/img_ticket_black_900.svg"
                        className="h-[32px] w-[auto]"
                        alt="ticket"
                      />
                    </div>
                  </div>
                </div>
                <div className="hover:cursor-pointer flex flex-1 items-center justify-start hover:shadow-bs39 w-[100%]">
                  <div className="bg-white_A700 flex items-center justify-start p-[24px] sm:px-[20px] rounded-[16px] shadow-bs39 w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <Radio
                        value="SungkemEvent"
                        className="font-semibold leading-[normal] text-[16px] text-bluegray_812 text-left"
                        inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                        checked={false}
                        name="SaweranEventOne"
                        label="Sungkem Event"
                      ></Radio>
                      <div className="flex flex-row gap-[8px] items-center justify-center mt-[2px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_800_b7 text-left w-[auto]"
                          variant="body59"
                        >
                          Monday, June 23th 2022
                        </Text>
                        <div className="bg-deep_purple_A207 h-[6px] rounded-[50%] w-[6px]"></div>
                        <Text
                          className="font-normal not-italic text-bluegray_800_b7 text-left w-[auto]"
                          variant="body59"
                        >
                          12:00 PM
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[27px] w-[100%]">
                        <Text
                          className="font-medium text-indigo_600 text-left w-[auto]"
                          variant="body59"
                        >
                          1400 Members
                        </Text>
                        <Img
                          src="images/img_ticket_black_900.svg"
                          className="h-[32px] w-[auto]"
                          alt="ticket One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDashboardPage;
