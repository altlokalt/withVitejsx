import React from "react";

import { Img, Text, Line, Button, Switch, List } from "components";

const CityTempPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-ubuntu items-center justify-end mx-[auto] pt-[16px] px-[16px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[38px] items-center justify-between max-w-[1526px] mt-[2px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="md:h-[883px] sm:h-[911px] h-[980px] relative md:w-[100%] w-[18%]">
            <div className="md:h-[883px] sm:h-[911px] h-[980px] m-[auto] w-[100%]">
              <div className="absolute bg-gray_60 flex flex-col h-[100%] inset-y-[0] items-start justify-end left-[0] my-[auto] p-[15px] rounded-[20px] w-[93%]">
                <div className="flex flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[28px] mt-[82px] md:w-[100%] w-[63%]">
                  <Img
                    src="images/img_bookmark_indigo_a203.svg"
                    className="h-[30px] w-[auto]"
                    alt="bookmark"
                  />
                  <Text
                    className="font-bold text-indigo_900 text-left w-[auto]"
                    variant="body35"
                  >
                    HouSmart.
                  </Text>
                </div>
                <div className="md:h-[184px] h-[22px] md:ml-[0] ml-[20px] mt-[165px] relative w-[49%]">
                  <div className="absolute flex flex-row gap-[26px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
                    <Img
                      src="images/img_computer_indigo_303.svg"
                      className="h-[16px] w-[auto]"
                      alt="computer"
                    />
                    <Text
                      className="font-normal not-italic text-indigo_303 text-left w-[auto]"
                      variant="body50"
                    >
                      Devices
                    </Text>
                  </div>
                  <Img
                    src="images/img_signal_indigo_303.svg"
                    className="absolute bottom-[0] h-[11px] left-[8%] w-[auto]"
                    alt="signal"
                  />
                </div>
                <div className="md:h-[130px] sm:h-[158px] h-[168px] md:ml-[0] ml-[25px] mt-[51px] relative w-[47%]">
                  <div className="absolute md:h-[73px] h-[93px] inset-x-[0] mx-[auto] top-[0] w-[98%]">
                    <div className="absolute flex items-center justify-start right-[0] top-[0] w-[auto]">
                      <Text
                        className="font-normal not-italic text-indigo_303 text-left w-[auto]"
                        variant="body50"
                      >
                        Statistic
                      </Text>
                    </div>
                    <div className="absolute flex flex-col md:gap-[40px] gap-[60px] h-[100%] inset-y-[0] justify-start left-[0] my-[auto] w-[82%]">
                      <Img
                        src="images/img_user_indigo_303_14x18.svg"
                        className="h-[14px] w-[auto]"
                        alt="user"
                      />
                      <Text
                        className="font-normal md:ml-[0] ml-[37px] not-italic text-indigo_303 text-left w-[auto]"
                        variant="body50"
                      >
                        Users
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bottom-[0] flex flex-col md:gap-[40px] gap-[68px] inset-x-[0] justify-start mx-[auto] w-[100%]">
                    <Img
                      src="images/img_checkmark_indigo_303.svg"
                      className="h-[20px] w-[auto]"
                      alt="checkmark"
                    />
                    <Text
                      className="font-normal md:ml-[0] ml-[39px] not-italic text-indigo_303 text-left w-[auto]"
                      variant="body50"
                    >
                      Security
                    </Text>
                  </div>
                </div>
                <div className="bg-indigo_A203 flex flex-col gap-[26px] items-start justify-end mb-[5px] mt-[258px] p-[22px] sm:px-[20px] rounded-[10px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body50"
                  >
                    Contact Support
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[2px] not-italic text-left text-white_A700"
                    variant="body67"
                  >
                    Any questions or <br />
                    inquiries let us know
                  </Text>
                </div>
              </div>
              <div className="absolute bg-white_A700 h-[58px] right-[0] rounded-[20px] top-[25%] w-[96%]"></div>
            </div>
            <div className="absolute flex flex-col gap-[25px] justify-start left-[15%] top-[23%] w-[36%]">
              <Img
                src="images/img_home_indigo_a203.svg"
                className="h-[18px] w-[auto]"
                alt="home"
              />
              <Text
                className="font-normal md:ml-[0] ml-[42px] not-italic text-indigo_900 text-left w-[auto]"
                variant="body50"
              >
                Rooms
              </Text>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[5px] justify-start md:w-[100%] w-[81%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-end justify-start md:ml-[0] ml-[43px] md:w-[100%] w-[97%]">
              <div className="h-[28px] md:h-[30px] mb-[13px] relative md:w-[100%] w-[11%]">
                <Text
                  className="absolute bottom-[0] font-normal not-italic right-[0] text-indigo_303 text-left w-[auto]"
                  variant="body59"
                >
                  Looking for room?
                </Text>
                <Img
                  src="images/img_search_bluegray_207.svg"
                  className="absolute h-[17px] left-[0] top-[0] w-[auto]"
                  alt="search"
                />
              </div>
              <div className="bg-indigo_900 h-[30px] md:ml-[0] ml-[810px] md:mt-[0] mt-[12px] rounded-[50%] w-[30px]"></div>
              <Img
                src="images/img_notification_indigo_900.svg"
                className="h-[20px] mb-[16px] md:ml-[0] ml-[191px] md:mt-[0] mt-[5px] w-[auto]"
                alt="notification"
              />
            </div>
            <div className="flex flex-col md:gap-[40px] gap-[64px] items-start justify-start md:w-[100%] w-[96%]">
              <Line className="bg-blue_54 h-[2px] md:ml-[0] ml-[4px] w-[60%]" />
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start md:w-[100%] w-[61%]">
                  <div className="flex flex-col gap-[26px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-indigo_900 text-left w-[auto]"
                      variant="body37"
                    >
                      <span className="md:text-[22px] sm:text-[20px] text-indigo_900 text-[24px] font-ubuntu font-bold">
                        Hello
                      </span>
                      <span className="md:text-[22px] sm:text-[20px] text-indigo_900 text-[24px] font-ubuntu">
                        , Alex
                      </span>
                      <span className="md:text-[22px] sm:text-[20px] text-indigo_900 text-[24px] font-ubuntu">
                        ander !
                      </span>
                    </Text>
                    <div className="bg-gray_948 flex items-end justify-end p-[16px] rounded-[20px] w-[100%]">
                      <div className="flex md:flex-col flex-row gap-[50px] items-center justify-end mr-[4px] mt-[3px] md:w-[100%] w-[93%]">
                        <div className="flex flex-col items-start justify-start md:w-[100%] w-[59%]">
                          <Text
                            className="font-bold md:ml-[0] ml-[2px] text-left text-white_A700 w-[auto]"
                            variant="body26"
                          >
                            Living Rooms
                          </Text>
                          <Text
                            className="font-medium mt-[41px] text-left text-white_A700 w-[auto]"
                            variant="body50"
                          >
                            3 Devices in room
                          </Text>
                          <Text
                            className="font-normal mt-[15px] not-italic text-gray_416 text-left"
                            variant="body50"
                          >
                            In the room the living room has several devices{" "}
                            <br />
                            that can be connected easily and quickly.
                          </Text>
                          <div className="flex flex-row items-end justify-between mt-[15px] w-[100%]">
                            <div className="flex flex-col gap-[14px] items-start justify-start mt-[25px] w-[45%]">
                              <Text
                                className="font-medium text-left text-white_A700 w-[auto]"
                                variant="body59"
                              >
                                Electricity usage
                              </Text>
                              <div className="bg-white_A700 flex items-start justify-end p-[6px] rounded-[10px] w-[100%]">
                                <div className="flex flex-row gap-[11px] items-center justify-start md:ml-[0] ml-[5px] mr-[auto] md:w-[100%] w-[76%]">
                                  <Button className="bg-indigo_A203 flex h-[42px] items-center justify-center p-[11px] rounded-[10px] w-[42px]">
                                    <Img
                                      src="images/img_reply_white_a700.svg"
                                      className=""
                                      alt="reply"
                                    />
                                  </Button>
                                  <div className="flex flex-col items-start justify-start w-[auto]">
                                    <Text
                                      className="font-medium text-indigo_900 text-left w-[auto]"
                                      variant="body59"
                                    >
                                      94 kwh
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-indigo_303 text-left w-[auto]"
                                      variant="body75"
                                    >
                                      Intensity days
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[44px] justify-start w-[45%]">
                              <Img
                                src="images/img_group4.svg"
                                className="h-[13px] md:ml-[0] ml-[99px] w-[auto]"
                                alt="GroupFour"
                              />
                              <div className="bg-white_A700 flex items-start justify-end p-[6px] rounded-[10px] w-[100%]">
                                <div className="flex flex-row gap-[11px] items-start justify-start md:ml-[0] ml-[5px] mr-[auto] md:w-[100%] w-[82%]">
                                  <div className="bg-indigo_A203 h-[42px] rounded-[10px] w-[42px]"></div>
                                  <div className="flex flex-col items-start justify-start mt-[4px] w-[auto]">
                                    <Text
                                      className="font-medium text-indigo_900 text-left w-[auto]"
                                      variant="body59"
                                    >
                                      35%
                                    </Text>
                                    <Text
                                      className="font-normal not-italic text-indigo_303 text-left w-[auto]"
                                      variant="body75"
                                    >
                                      Montly capacity
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-indigo_A203 flex items-center justify-start p-[23px] sm:px-[20px] rounded-[20px] md:w-[100%] w-[34%]">
                          <div className="flex flex-col items-start justify-start mb-[19px] mt-[12px] md:w-[100%] w-[96%]">
                            <div className="flex flex-row gap-[49px] items-start justify-start md:w-[100%] w-[95%]">
                              <Img
                                src="images/img_settings_white_a700_87x87.svg"
                                className="h-[87px] w-[87px]"
                                alt="settings"
                              />
                              <Img
                                src="images/img_menu_white_a700_39x12.svg"
                                className="h-[39px] mt-[10px] w-[auto]"
                                alt="menu"
                              />
                            </div>
                            <Text
                              className="font-bold mt-[48px] text-left text-white_A700 w-[auto]"
                              variant="body50"
                            >
                              <span className="text-white_A700 text-[16px] font-ubuntu">
                                LIVING{" "}
                              </span>
                              <span className="text-white_A700 text-[16px] font-ubuntu font-normal not-italic">
                                ROOM
                              </span>
                            </Text>
                            <div className="flex flex-row items-start justify-start mt-[16px] md:w-[100%] w-[53%]">
                              <Text
                                className="font-bold text-left text-white_A700 w-[auto]"
                                variant="body22"
                              >
                                -05
                              </Text>
                              <div className="border-[1px] border-solid border-white_A700 h-[6px] ml-[12px] mt-[18px] rounded-[50%] w-[6px]"></div>
                              <Text
                                className="font-normal ml-[2px] mt-[17px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body50"
                              >
                                c
                              </Text>
                            </div>
                            <Text
                              className="font-normal mt-[21px] not-italic text-left text-white_A700"
                              variant="body67"
                            >
                              Power saving using this tool <br />
                              is about 45% .
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between md:w-[100%] w-[98%]">
                    <div
                      className="bg-cover bg-no-repeat flex h-[336px] items-center justify-end p-[10px] md:w-[100%] w-[33%]"
                      style={{
                        backgroundImage:
                          "url('images/img_imagehere_indigo_900.svg')",
                      }}
                    >
                      <div className="bg-white_A700 flex items-start justify-start mt-[191px] p-[18px] rounded-[20px] md:w-[100%] w-[96%]">
                        <div className="flex flex-col items-start justify-start mb-[12px] md:ml-[0] ml-[2px] md:w-[100%] w-[82%]">
                          <div className="flex flex-row gap-[6px] items-end justify-between w-[100%]">
                            <Text
                              className="font-medium text-indigo_900 text-left w-[auto]"
                              variant="body50"
                            >
                              Workspace
                            </Text>
                            <Text
                              className="font-light mt-[6px] text-indigo_303 text-left w-[auto]"
                              variant="body75"
                            >
                              4 Devices
                            </Text>
                          </div>
                          <Text
                            className="font-normal mt-[23px] not-italic text-indigo_303 text-left w-[auto]"
                            variant="body75"
                          >
                            53% of Montly Goals
                          </Text>
                          <Text
                            className="font-normal mt-[11px] not-italic text-indigo_303 text-left w-[auto]"
                            variant="body75"
                          >
                            Monitoring ON
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start md:mt-[0] mt-[34px] md:w-[100%] w-[59%]">
                      <Text
                        className="font-medium md:ml-[0] ml-[6px] text-indigo_900 text-left w-[auto]"
                        variant="body50"
                      >
                        Smart Area in Home
                      </Text>
                      <div className="h-[39px] md:h-[53px] md:ml-[0] ml-[5px] mt-[14px] relative sm:w-[100%] w-[95%]">
                        <Text
                          className="font-normal m-[auto] not-italic text-indigo_303 text-left"
                          variant="body59"
                        >
                          Select the next section to see how much electricity
                          intensity <br />
                          is being used at this time.
                        </Text>
                        <Img
                          src="images/img_bed.svg"
                          className="absolute h-[28px] left-[29%] top-[8%] w-[auto]"
                          alt="Bed"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[39px] w-[100%]">
                        <div className="bg-gray_60 flex flex-col gap-[12px] items-center justify-center p-[27px] sm:px-[20px] rounded-[10px] w-[auto]">
                          <Text
                            className="capitalize font-medium mt-[77px] text-indigo_900 text-left tracking-[0.60px] w-[auto]"
                            variant="body67"
                          >
                            Bedrooms
                          </Text>
                          <Text
                            className="font-normal mb-[3px] not-italic text-center text-indigo_303"
                            variant="body75"
                          >
                            5 Devices
                            <br />
                            Connected
                          </Text>
                        </div>
                        <div className="bg-gray_60 flex flex-col items-center justify-end p-[30px] sm:px-[20px] rounded-[10px] w-[29%]">
                          <Img
                            src="images/img_calculator_indigo_900_24x41.svg"
                            className="h-[24px] mt-[31px] w-[auto]"
                            alt="calculator"
                          />
                          <Text
                            className="capitalize font-medium mt-[18px] text-indigo_900 text-left tracking-[0.60px] w-[auto]"
                            variant="body67"
                          >
                            Kitchen
                          </Text>
                          <Text
                            className="font-normal mt-[12px] not-italic text-center text-indigo_303"
                            variant="body75"
                          >
                            2 Devices
                            <br />
                            Connected
                          </Text>
                        </div>
                        <div className="bg-gray_60 flex flex-col gap-[12px] items-center justify-center p-[22px] sm:px-[20px] rounded-[10px] w-[auto]">
                          <Text
                            className="capitalize font-medium mt-[82px] text-indigo_900 text-left tracking-[0.60px] w-[auto]"
                            variant="body67"
                          >
                            Study Room
                          </Text>
                          <Text
                            className="font-normal mb-[8px] not-italic text-center text-indigo_303"
                            variant="body75"
                          >
                            3 Devices
                            <br />
                            Connected
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_settings_indigo_900.svg"
                  className="h-[25px] md:ml-[0] ml-[29px] md:mt-[0] mt-[549px] w-[auto]"
                  alt="settings One"
                />
                <div className="flex md:flex-1 items-center justify-start md:ml-[0] ml-[39px] md:mt-[0] mt-[6px] md:w-[100%] w-[22%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="font-medium text-indigo_900 text-left w-[auto]"
                      variant="body37"
                    >
                      My Devices
                    </Text>
                    <div className="flex flex-row gap-[20px] items-center justify-between mt-[28px] md:w-[100%] w-[98%]">
                      <div className="border-[1px] border-blue_54 border-solid flex flex-col gap-[15px] items-center justify-end p-[26px] sm:px-[20px] rounded-[20px] w-[46%]">
                        <Text
                          className="font-medium mt-[48px] text-indigo_900 text-left w-[auto]"
                          variant="body67"
                        >
                          AC
                        </Text>
                        <Switch
                          onColor="#25396f"
                          offColor="#e9eaf0"
                          onHandleColor="#ffffff"
                          offHandleColor="#ffffff"
                          value={true}
                          className="w-[64%]"
                        />
                      </div>
                      <div className="md:h-[149px] h-[164px] relative w-[46%]">
                        <div className="absolute border-[1px] border-blue_54 border-solid flex flex-col gap-[15px] h-[max-content] inset-[0] items-center justify-center m-[auto] p-[26px] sm:px-[20px] rounded-[20px] w-[100%]">
                          <Text
                            className="font-medium mt-[48px] text-bluegray_207 text-left w-[auto]"
                            variant="body67"
                          >
                            Television
                          </Text>
                          <Switch
                            onColor="#25396f"
                            offColor="#e9eaf0"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={false}
                            className="w-[64%]"
                          />
                        </div>
                        <Img
                          src="images/img_signal_bluegray_207.svg"
                          className="absolute bottom-[0] h-[13px] left-[28%] w-[auto]"
                          alt="signal One"
                        />
                        <Img
                          src="images/img_vector_indigo_900.svg"
                          className="absolute h-[20px] right-[27%] top-[0] w-[auto]"
                          alt="Vector"
                        />
                      </div>
                    </div>
                    <div className="border-[1px] border-blue_54 border-solid flex items-end justify-end mt-[11px] p-[6px] rounded-[20px] md:w-[100%] w-[98%]">
                      <div className="flex flex-col gap-[11px] justify-start mr-[22px] mt-[34px] md:w-[100%] w-[69%]">
                        <div className="flex flex-row gap-[38px] items-start justify-between w-[100%]">
                          <Text
                            className="font-medium text-bluegray_207 text-left w-[auto]"
                            variant="body59"
                          >
                            Wifi Hotspot
                          </Text>
                          <Switch
                            onColor="#25396f"
                            offColor="#e9eaf0"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={false}
                            className="w-[auto]"
                          />
                        </div>
                        <Img
                          src="images/img_camera_bluegray_207.svg"
                          className="h-[20px] md:ml-[0] ml-[108px] w-[21px]"
                          alt="camera"
                        />
                      </div>
                    </div>
                    <div className="border-[1px] border-blue_54 border-solid flex flex-row items-center justify-between mt-[20px] p-[29px] sm:px-[20px] rounded-[20px] md:w-[100%] w-[98%]">
                      <Text
                        className="font-medium ml-[30px] text-bluegray_207 text-left w-[auto]"
                        variant="body59"
                      >
                        Lamps
                      </Text>
                      <Switch
                        onColor="#25396f"
                        offColor="#e9eaf0"
                        onHandleColor="#ffffff"
                        offHandleColor="#ffffff"
                        value={false}
                        className="mb-[9px] mt-[13px] w-[auto]"
                      />
                    </div>
                    <Text
                      className="font-medium mt-[55px] text-indigo_900 text-left w-[auto]"
                      variant="body37"
                    >
                      Friend at home
                    </Text>
                    <List
                      className="flex-col gap-[30px] grid items-center mt-[38px] w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                        <div className="bg-indigo_900 h-[40px] rounded-[10px] w-[40px]"></div>
                        <Text
                          className="font-normal ml-[21px] not-italic text-indigo_900 text-left w-[auto]"
                          variant="body50"
                        >
                          Smith Walker
                        </Text>
                        <Img
                          src="images/img_arrowright_gray_416.svg"
                          className="h-[12px] ml-[94px] w-[auto]"
                          alt="arrowright"
                        />
                      </div>
                      <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                        <div className="bg-indigo_900 h-[40px] rounded-[10px] w-[40px]"></div>
                        <Text
                          className="font-normal ml-[21px] not-italic text-indigo_900 text-left w-[auto]"
                          variant="body50"
                        >
                          Wesker Adrian
                        </Text>
                        <Img
                          src="images/img_arrowright_gray_416.svg"
                          className="h-[12px] ml-[85px] w-[auto]"
                          alt="arrowright One"
                        />
                      </div>
                      <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                        <div className="bg-indigo_900 h-[40px] rounded-[10px] w-[40px]"></div>
                        <Text
                          className="font-normal ml-[21px] not-italic text-indigo_900 text-left w-[auto]"
                          variant="body50"
                        >
                          Elia Hadid
                        </Text>
                        <Img
                          src="images/img_arrowright_gray_416.svg"
                          className="h-[12px] ml-[117px] w-[auto]"
                          alt="arrowright Two"
                        />
                      </div>
                    </List>
                  </div>
                </div>
                <Img
                  src="images/img_computer_bluegray_207.svg"
                  className="h-[18px] md:ml-[0] ml-[83px] md:mt-[0] mt-[65px] w-[auto]"
                  alt="computer One"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CityTempPage;
