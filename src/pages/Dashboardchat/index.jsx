import React from "react";

import { Img, Text, Line, Button, List } from "components";

const DashboardchatPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-rubik sm:gap-[20px] md:gap-[20px] items-center justify-start mx-[auto] pt-[27px] sm:px-[20px] px-[27px] w-[100%]">
        <Img
          src="images/img_menu_teal_600.svg"
          className="h-[835px] w-[auto]"
          alt="Menu"
        />
        <div className="md:h-[748px] h-[765px] md:ml-[0] ml-[28px] md:px-[20px] relative md:w-[100%] w-[21%]">
          <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[99%]">
            <div className="flex flex-col gap-[48px] justify-start w-[100%]">
              <div className="flex flex-row items-center justify-between ml-[auto] md:w-[100%] w-[79%]">
                <div className="flex items-center justify-start w-[auto]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="font-medium text-cyan_900 text-left tracking-[0.32px] w-[auto]"
                      variant="body50"
                    >
                      Adun Brigez
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_group266.svg"
                  className="h-[5px] w-[auto]"
                  alt="Group266"
                />
              </div>
              <div className="flex flex-col gap-[23px] items-start justify-start w-[100%]">
                <Line className="bg-blue_54 h-[1px] w-[95%]" />
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[28%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <Text
                          className="font-medium text-cyan_900 text-left tracking-[0.36px] w-[auto]"
                          variant="body47"
                        >
                          My Teams
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-end ml-[auto] mt-[30px] md:w-[100%] w-[71%]">
                      <div className="bg-cyan_900 h-[57px] rounded-[28px] w-[57px]"></div>
                      <div className="bg-cyan_900 h-[57px] ml-[28px] rounded-[28px] w-[57px]"></div>
                      <div className="bg-cyan_900 h-[57px] ml-[27px] rounded-[28px] w-[57px]"></div>
                    </div>
                    <div className="flex flex-row items-center justify-start md:ml-[0] ml-[15px] mt-[12px] md:w-[100%] w-[87%]">
                      <Text
                        className="font-normal not-italic text-indigo_900 text-left tracking-[0.28px] w-[auto]"
                        variant="body59"
                      >
                        XTC
                      </Text>
                      <Text
                        className="font-normal ml-[49px] not-italic text-indigo_900 text-left tracking-[0.28px] w-[auto]"
                        variant="body59"
                      >
                        Gasax
                      </Text>
                      <Text
                        className="font-normal ml-[45px] not-italic text-indigo_900 text-left tracking-[0.28px] w-[auto]"
                        variant="body59"
                      >
                        Sobs.
                      </Text>
                      <Text
                        className="font-normal ml-[55px] not-italic text-indigo_900 text-left tracking-[0.28px] w-[auto]"
                        variant="body59"
                      >
                        FIX
                      </Text>
                    </div>
                    <div className="flex items-center justify-start mt-[54px] md:w-[100%] w-[30%]">
                      <div className="flex flex-row gap-[6px] items-start justify-between w-[100%]">
                        <Text
                          className="font-medium text-cyan_900 text-left tracking-[0.36px] w-[auto]"
                          variant="body47"
                        >
                          Chats
                        </Text>
                        <Button className="bg-teal_51 cursor-pointer font-normal leading-[normal] min-w-[37px] not-italic py-[4px] rounded-[12px] text-[13px] text-blue_A101 text-center tracking-[0.26px] w-[auto]">
                          14
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-start mt-[25px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-start w-[100%]">
                          <Img
                            src="images/img_clock_cyan_900.svg"
                            className="h-[56px] w-[56px]"
                            alt="clock"
                          />
                          <div className="flex flex-col items-start justify-start ml-[16px] w-[auto]">
                            <Text
                              className="font-medium text-cyan_900 text-left tracking-[0.32px] w-[auto]"
                              variant="body50"
                            >
                              Babang
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-bluegray_431 text-left tracking-[0.28px] w-[auto]"
                              variant="body59"
                            >
                              Best Ever this vacation
                            </Text>
                          </div>
                          <Text
                            className="bg-blue_A101 flex font-normal h-[24px] items-center justify-center ml-[69px] my-[16px] not-italic rounded-[50%] text-center text-white_A700 tracking-[0.26px] w-[24px]"
                            variant="body61"
                          >
                            1
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[16px] items-end justify-start mt-[29px] md:w-[100%] w-[72%]">
                          <Img
                            src="images/img_clock_cyan_900.svg"
                            className="h-[56px] w-[56px]"
                            alt="clock One"
                          />
                          <div className="flex items-center justify-start mb-[2px] mt-[8px] w-[69%]">
                            <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                              <Text
                                className="font-medium text-cyan_900 text-left tracking-[0.32px] w-[auto]"
                                variant="body50"
                              >
                                Juned Iskandar
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_431 text-left tracking-[0.28px] w-[auto]"
                                variant="body59"
                              >
                                wow. that amazing bro!
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[16px] items-end justify-between mt-[5px] w-[100%]">
                          <Img
                            src="images/img_clock_cyan_900.svg"
                            className="h-[56px] mt-[33px] w-[56px]"
                            alt="clock Two"
                          />
                          <div className="flex flex-col items-start justify-start mb-[2px] w-[auto]">
                            <Line className="bg-bluegray_119 h-[1px] w-[100%]" />
                            <div className="flex items-center justify-start mt-[35px] md:w-[100%] w-[61%]">
                              <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                                <Text
                                  className="font-medium text-cyan_900 text-left tracking-[0.32px] w-[auto]"
                                  variant="body50"
                                >
                                  Abah Anom
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_431 text-left tracking-[0.28px] w-[auto]"
                                  variant="body59"
                                >
                                  What are you waiting?
                                </Text>
                              </div>
                            </div>
                            <Line className="bg-bluegray_119 h-[1px] mt-[5px] w-[100%]" />
                          </div>
                        </div>
                        <div className="flex flex-row gap-[16px] items-center justify-start mt-[29px] md:w-[100%] w-[62%]">
                          <Img
                            src="images/img_clock_cyan_900.svg"
                            className="h-[56px] w-[56px]"
                            alt="clock Three"
                          />
                          <div className="flex items-center justify-start w-[64%]">
                            <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                              <Text
                                className="font-medium text-cyan_900 text-left tracking-[0.32px] w-[auto]"
                                variant="body50"
                              >
                                Mang Ujang
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_431 text-left tracking-[0.28px] w-[auto]"
                                variant="body59"
                              >
                                See you next time!
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Line className="bg-bluegray_119 h-[1px] md:ml-[0] ml-[72px] mt-[8px] w-[78%]" />
                        <div className="flex flex-row gap-[16px] items-center justify-start mt-[29px] md:w-[100%] w-[70%]">
                          <Img
                            src="images/img_clock_cyan_900.svg"
                            className="h-[56px] w-[56px]"
                            alt="clock Four"
                          />
                          <div className="flex items-center justify-start w-[68%]">
                            <div className="flex flex-col gap-[7px] items-start justify-start w-[100%]">
                              <Text
                                className="font-medium text-cyan_900 text-left tracking-[0.32px] w-[auto]"
                                variant="body50"
                              >
                                Steven
                              </Text>
                              <Text
                                className="font-normal not-italic text-bluegray_431 text-left tracking-[0.28px] w-[auto]"
                                variant="body59"
                              >
                                See you again. ADIOS!!
                              </Text>
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
          <div className="absolute bg-cyan_900 h-[57px] left-[1%] rounded-[28px] top-[21%] w-[57px]"></div>
          <div className="absolute bg-cyan_900 h-[51px] left-[0] rounded-[25px] top-[0] w-[51px]"></div>
        </div>
        <div className="flex font-inter md:ml-[0] ml-[31px] md:mt-[0] mt-[12px] md:px-[20px] relative md:w-[100%] w-[61%]">
          <div className="h-[860px] my-[auto] md:w-[100%] w-[76%]">
            <div className="flex m-[auto] w-[100%]">
              <div className="bg-white_A700 flex items-center justify-start my-[auto] p-[32px] sm:px-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[88%]">
                <div className="flex flex-col items-start justify-start mb-[101px] w-[100%]">
                  <div className="bg-gray_68 flex flex-col justify-start p-[3px] rounded-[10px] md:w-[100%] w-[80%]">
                    <Img
                      src="images/img_search_bluegray_207_12x16.svg"
                      className="h-[12px] md:ml-[0] ml-[78px] w-[auto]"
                      alt="search"
                    />
                    <Text
                      className="font-normal mb-[12px] md:ml-[0] ml-[36px] mr-[323px] not-italic text-indigo_303 text-left w-[auto]"
                      variant="body67"
                    >
                      Looking for...
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[30px] w-[100%]">
                    <Text
                      className="font-bold text-indigo_900 text-left w-[auto]"
                      variant="body47"
                    >
                      Babang
                    </Text>
                    <Text
                      className="font-normal sm:ml-[0] ml-[5px] sm:mt-[0] mt-[3px] not-italic text-bluegray_207 text-left w-[auto]"
                      variant="body59"
                    >
                      online
                    </Text>
                    <div className="bg-green_301 h-[6px] mb-[92px] sm:ml-[0] ml-[5px] sm:mt-[0] mt-[11px] rounded-[50%] w-[6px]"></div>
                    <div className="flex sm:flex-1 flex-col gap-[11px] justify-start sm:ml-[0] ml-[193px] sm:mt-[0] mt-[20px] sm:w-[100%] w-[44%]">
                      <div className="h-[65px] relative w-[100%]">
                        <Img
                          src="images/img_arrowup_teal_700.svg"
                          className="absolute bottom-[0] h-[16px] right-[0] rounded-[2px] w-[auto]"
                          alt="arrowup"
                        />
                        <div className="absolute bg-teal_700 flex h-[100%] inset-y-[0] items-center justify-end left-[0] my-[auto] p-[19px] rounded-[10px] w-[auto]">
                          <Text
                            className="font-medium mt-[6px] text-left text-white_A700 w-[auto]"
                            variant="body50"
                          >
                            Hi.. what’s up brother?
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="font-medium md:ml-[0] ml-[159px] text-bluegray_207 text-left w-[auto]"
                        variant="body75"
                      >
                        Today 01:16 PM
                      </Text>
                    </div>
                  </div>
                  <div className="md:h-[82px] h-[87px] md:ml-[0] ml-[5px] relative w-[51%]">
                    <Img
                      src="images/img_group259.svg"
                      className="absolute h-[65px] right-[0] top-[0] w-[auto]"
                      alt="Group259"
                    />
                    <div className="absolute bottom-[0] flex items-center justify-start left-[0] w-[88%]">
                      <div className="flex flex-col gap-[9px] justify-start w-[100%]">
                        <div className="flex flex-row gap-[46px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_clock_cyan_900.svg"
                            className="h-[60px] w-[60px]"
                            alt="clock Five"
                          />
                          <Text
                            className="font-medium text-indigo_900 text-left w-[auto]"
                            variant="body50"
                          >
                            i’m fine. you okay?
                          </Text>
                        </div>
                        <Text
                          className="font-medium md:ml-[0] ml-[74px] text-bluegray_207 text-left w-[auto]"
                          variant="body75"
                        >
                          Today 01:21 PM
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[11px] items-end justify-start md:ml-[0] ml-[316px] mt-[27px] md:w-[100%] w-[44%]">
                    <div className="h-[80px] relative w-[100%]">
                      <Img
                        src="images/img_arrowup_teal_700.svg"
                        className="absolute bottom-[0] h-[16px] right-[0] rounded-[2px] w-[auto]"
                        alt="arrowup One"
                      />
                      <div className="absolute bg-teal_700 flex h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] p-[20px] rounded-[10px] w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700"
                          variant="body59"
                        >
                          Don’t worry, i okay. How <br />
                          about your vacation?
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-medium text-bluegray_207 text-left w-[auto]"
                      variant="body75"
                    >
                      Today 01:36 PM
                    </Text>
                  </div>
                  <div className="md:h-[120px] h-[99px] md:ml-[0] ml-[5px] mt-[26px] relative w-[58%]">
                    <Img
                      src="images/img_group259.svg"
                      className="absolute h-[75px] right-[0] top-[0] w-[auto]"
                      alt="Group259 One"
                    />
                    <div className="absolute bottom-[0] flex items-center justify-start left-[0] w-[87%]">
                      <div className="flex flex-col gap-[21px] justify-start w-[100%]">
                        <div className="flex flex-row gap-[55px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_clock_cyan_900.svg"
                            className="h-[60px] w-[60px]"
                            alt="clock Six"
                          />
                          <Text
                            className="font-medium text-indigo_900 text-left"
                            variant="body61"
                          >
                            Very fun. I&#39;ve taken all my
                            <br />
                            activities
                          </Text>
                        </div>
                        <Text
                          className="font-medium md:ml-[0] ml-[81px] text-bluegray_207 text-left w-[auto]"
                          variant="body75"
                        >
                          Today 01:41 PM
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end ml-[auto] mt-[12px] md:w-[100%] w-[91%]">
                    <div className="bg-cyan_900 h-[55px] mb-[88px] rounded-[10px] w-[55px]"></div>
                    <div className="bg-cyan_900 h-[55px] mb-[88px] sm:ml-[0] ml-[5px] rounded-[10px] w-[55px]"></div>
                    <Button className="bg-blue_A101 cursor-pointer font-medium h-[39px] leading-[normal] mb-[96px] sm:ml-[0] ml-[5px] sm:mt-[0] mt-[8px] py-[11px] rounded-[10px] text-[13px] text-center text-white_A700 w-[39px]">
                      +7
                    </Button>
                    <div className="flex flex-col gap-[15px] items-end justify-start sm:ml-[0] ml-[125px] sm:mt-[0] mt-[55px] sm:w-[100%] w-[44%]">
                      <div className="h-[60px] relative w-[100%]">
                        <Img
                          src="images/img_arrowup_teal_700.svg"
                          className="absolute bottom-[0] h-[16px] right-[0] rounded-[2px] w-[auto]"
                          alt="arrowup Two"
                        />
                        <Button className="absolute bg-teal_700 cursor-pointer font-medium h-[100%] inset-y-[0] leading-[normal] left-[0] min-w-[207px] my-[auto] py-[21px] rounded-[10px] text-[14px] text-center text-white_A700 w-[auto]">
                          Wow... that great.
                        </Button>
                      </div>
                      <Text
                        className="font-medium text-bluegray_207 text-left w-[auto]"
                        variant="body75"
                      >
                        Today 01:56 PM
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_notification_gray_122.svg"
                className="h-[50px] ml-[-82px] mt-[33px] w-[auto] z-[1]"
                alt="notification"
              />
            </div>
            <div className="absolute flex flex-col md:gap-[40px] gap-[593px] h-[max-content] inset-y-[0] justify-start my-[auto] right-[1%] w-[86%]">
              <Img
                src="images/img_miscrophone.svg"
                className="h-[50px] md:ml-[0] ml-[383px] w-[auto]"
                alt="miscrophone"
              />
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                  <div className="flex flex-col gap-[109px] md:gap-[40px] items-start justify-start w-[20%]">
                    <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[48%]">
                      <Img
                        src="images/img_location_bluegray_207.svg"
                        className="h-[13px] w-[auto]"
                        alt="location"
                      />
                      <Img
                        src="images/img_user_bluegray_207.svg"
                        className="h-[14px] w-[auto]"
                        alt="user"
                      />
                    </div>
                    <div className="flex flex-row gap-[19px] items-start justify-start md:ml-[0] ml-[2px] md:w-[100%] w-[99%]">
                      <Line className="bg-bluegray_207 h-[20px] w-[1px]" />
                      <Text
                        className="font-medium text-bluegray_207 text-left w-[auto]"
                        variant="body59"
                      >
                        Massage here
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col md:gap-[40px] gap-[96px] justify-start w-[37%]">
                    <Img
                      src="images/img_location_white_a700_12x19.svg"
                      className="h-[12px] md:ml-[0] ml-[203px] w-[auto]"
                      alt="location One"
                    />
                    <Text
                      className="bg-blue_A101 font-medium h-[45px] mr-[107px] pl-[22px] pr-[35px] sm:px-[20px] py-[14px] rounded-[10px] text-left text-white_A700 w-[115px]"
                      variant="body59"
                    >
                      Send
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start ml-[-52.25px] my-[auto] w-[31%] z-[1]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div
                className="bg-cover bg-no-repeat flex h-[58px] items-start justify-start p-[3px] w-[58px]"
                style={{ backgroundImage: "url('images/img_group52.svg')" }}
              >
                <div className="bg-green_301 h-[10px] mb-[38px] mt-[4px] rounded-[50%] w-[10px]"></div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[26px] md:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-cyan_900 text-left tracking-[0.36px] w-[auto]"
                  variant="body47"
                >
                  Babang
                </Text>
                <Text
                  className="font-normal mt-[4px] not-italic text-bluegray_432 text-center tracking-[0.28px] w-[auto]"
                  variant="body59"
                >
                  Online Now
                </Text>
              </div>
              <div className="flex flex-row gap-[93px] items-start justify-end ml-[auto] mt-[5px] md:w-[100%] w-[49%]">
                <Img
                  src="images/img_call_indigo_900.svg"
                  className="h-[16px] w-[auto]"
                  alt="call"
                />
                <Img
                  src="images/img_menu_indigo_900_17x23.svg"
                  className="h-[17px] w-[auto]"
                  alt="menu One"
                />
              </div>
              <div className="flex flex-col items-start justify-start mt-[20px] md:w-[100%] w-[83%]">
                <div className="flex flex-row font-inter items-end justify-between md:ml-[0] ml-[4px] md:w-[100%] w-[97%]">
                  <div className="flex items-center justify-start mt-[23px] w-[auto]">
                    <div className="flex items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_432 text-left tracking-[0.24px] w-[auto]"
                        variant="body67"
                      >
                        Call
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-bluegray_119 h-[25px] my-[6px] w-[1px]" />
                  <div className="flex items-center justify-start mt-[24px] w-[auto]">
                    <div className="flex items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_432 text-center tracking-[0.24px] w-[auto]"
                        variant="body67"
                      >
                        Massege
                      </Text>
                    </div>
                  </div>
                  <Line className="bg-bluegray_119 h-[25px] my-[6px] w-[1px]" />
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <Text
                        className="font-bold text-center text-cyan_900 tracking-[0.32px] w-[auto]"
                        variant="body50"
                      >
                        ...
                      </Text>
                      <Text
                        className="font-normal mt-[3px] not-italic text-bluegray_432 text-center tracking-[0.24px] w-[auto]"
                        variant="body67"
                      >
                        More
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-rubik gap-[38px] items-start justify-between mt-[63px] w-[100%]">
                  <div className="h-[154px] relative w-[69%]">
                    <div className="h-[154px] m-[auto] w-[100%]">
                      <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                        <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                          <div className="flex flex-col gap-[19px] items-start justify-start md:w-[100%] w-[auto]">
                            <Text
                              className="text-indigo_900 text-left tracking-[0.30px] w-[auto]"
                              variant="body53"
                            >
                              Attachments
                            </Text>
                            <Text
                              className="font-medium text-bluegray_207 text-left tracking-[0.24px] w-[auto]"
                              variant="body67"
                            >
                              Source file
                            </Text>
                          </div>
                          <div className="flex flex-col md:gap-[40px] gap-[63px] justify-start md:ml-[0] ml-[26px] md:w-[100%] w-[84%]">
                            <Img
                              src="images/img_lightbulb_bluegray_207.svg"
                              className="h-[10px] md:ml-[0] ml-[120px] w-[auto]"
                              alt="lightbulb"
                            />
                            <Text
                              className="font-normal mr-[62px] not-italic text-bluegray_207 text-left tracking-[0.24px] w-[auto]"
                              variant="body67"
                            >
                              Final file.pdf
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col gap-[33px] justify-start right-[0] top-[10%] w-[84%]">
                        <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[117px] md:w-[100%] w-[12%]">
                          <Img
                            src="images/img_location_bluegray_207.svg"
                            className="h-[9px] w-[auto]"
                            alt="location Two"
                          />
                          <Img
                            src="images/img_arrowdown_bluegray_207.svg"
                            className="h-[6px] md:ml-[0] ml-[4px] w-[7px]"
                            alt="arrowdown"
                          />
                        </div>
                        <Text
                          className="mr-[34px] not-italic text-bluegray_207 text-left tracking-[0.25px] w-[auto]"
                          variant="body64"
                        >
                          Poco phone.png
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bottom-[18%] flex flex-col gap-[59px] justify-start right-[0] w-[83%]">
                      <Img
                        src="images/img_vector_bluegray_207.svg"
                        className="h-[2px] md:ml-[0] ml-[120px] w-[auto]"
                        alt="Vector"
                      />
                      <Text
                        className="mr-[44px] not-italic text-bluegray_207 text-left tracking-[0.25px] w-[auto]"
                        variant="body64"
                      >
                        Play date.mp3
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-normal mt-[38px] not-italic text-blue_A101 text-left tracking-[0.20px] w-[auto]"
                    variant="body75"
                  >
                    View all
                  </Text>
                </div>
                <Text
                  className="font-rubik mt-[41px] text-indigo_900 text-left tracking-[0.30px] w-[auto]"
                  variant="body53"
                >
                  Picture & Videos
                </Text>
                <List
                  className="flex-col font-rubik gap-[8px] grid items-center mt-[29px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-[10px] items-center justify-between w-[100%]">
                    <div className="bg-cyan_900 h-[72px] rounded-[10px] w-[72px]"></div>
                    <div className="bg-cyan_900 h-[72px] rounded-[10px] w-[72px]"></div>
                    <div className="bg-cyan_900 h-[72px] rounded-[10px] w-[72px]"></div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[10px] items-center justify-between w-[100%]">
                    <div className="bg-cyan_900 h-[72px] rounded-[10px] w-[72px]"></div>
                    <div className="bg-cyan_900 h-[72px] rounded-[10px] w-[72px]"></div>
                    <div className="bg-cyan_900 h-[72px] rounded-[10px] w-[72px]"></div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[10px] items-center justify-between w-[100%]">
                    <div className="bg-cyan_900 h-[72px] rounded-[10px] w-[72px]"></div>
                    <div className="bg-cyan_900 h-[72px] rounded-[10px] w-[72px]"></div>
                    <Button className="bg-blue_A101 cursor-pointer font-medium h-[72px] leading-[normal] py-[26px] rounded-[10px] text-[16px] text-center text-white_A700 tracking-[0.32px] w-[72px]">
                      +25
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

export default DashboardchatPage;
