import React from "react";

import { Button, Img, Text, Input, List, Line, CheckBox } from "components";
import { CloseSVG } from "../../assets/images";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

const MacBookProTwoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex font-poppins items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[220px]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-white_A700 border-[1px] border-indigo_58 border-solid flex flex-col items-start justify-start p-[24px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col gap-[26px] items-center justify-start md:ml-[0] ml-[16px] mt-[16px] md:w-[100%] w-[72%]">
                  <div className="flex flex-row gap-[14px] items-start justify-start w-[100%]">
                    <Button className="bg-teal_200 flex h-[30px] items-center justify-center p-[5px] rounded-[6px] w-[30px]">
                      <Img
                        src="images/img_user_orange_a203.svg"
                        className="h-[20px]"
                        alt="user"
                      />
                    </Button>
                    <Text
                      className="font-bold mt-[4px] text-left text-teal_200 tracking-[4.68px] w-[auto]"
                      variant="body47"
                    >
                      <span className="text-teal_200 text-[18px] font-poppins">
                        Sij
                      </span>
                      <span className="text-orange_A204 text-[18px] font-poppins">
                        obs
                      </span>
                    </Text>
                  </div>
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="flex flex-row gap-[20px] items-end justify-between w-[100%]">
                      <Img
                        src="images/img_grid_bluegray_305.svg"
                        className="h-[36px] w-[auto]"
                        alt="grid"
                      />
                      <div className="flex items-center justify-start mt-[14px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_305 text-left w-[auto]"
                          variant="body59"
                        >
                          Dashboard
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-[40px] rounded-[24px] shadow-bs36 md:w-[100%] w-[91%]">
                  <div className="bg-teal_200 flex items-start justify-start p-[12px] rounded-[24px] w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[79%]">
                      <Img
                        src="images/img_search_white_a700.svg"
                        className="h-[24px] w-[24px]"
                        alt="search"
                      />
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        Find Job
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[302px] md:gap-[40px] items-start justify-start mb-[21px] md:ml-[0] ml-[16px] mt-[5px] md:w-[100%] w-[64%]">
                  <div className="flex flex-col relative w-[100%]">
                    <div className="flex flex-col mx-[auto] w-[100%]">
                      <div className="flex items-center justify-start mx-[auto] w-[100%]">
                        <div className="flex flex-row gap-[20px] items-end justify-start w-[100%]">
                          <Img
                            src="images/img_clock_bluegray_305.svg"
                            className="h-[58px] w-[auto]"
                            alt="clock"
                          />
                          <Text
                            className="font-normal mt-[35px] not-italic text-bluegray_305 text-left w-[auto]"
                            variant="body59"
                          >
                            Schedule
                          </Text>
                        </div>
                      </div>
                      <div className="flex items-center justify-start mt-[-2.35px] mx-[auto] w-[99%] z-[1]">
                        <div className="flex flex-row gap-[20px] items-end justify-start w-[100%]">
                          <Img
                            src="images/img_mail_bluegray_305.svg"
                            className="h-[66px] w-[auto]"
                            alt="mail"
                          />
                          <Text
                            className="font-normal mt-[45px] not-italic text-bluegray_305 text-left w-[auto]"
                            variant="body59"
                          >
                            Message
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[20px] items-end justify-between mt-[-15.01px] w-[88%] z-[1]">
                      <Img
                        src="images/img_user_bluegray_305.svg"
                        className="h-[78px] w-[auto]"
                        alt="user One"
                      />
                      <div className="flex items-center justify-start mt-[56px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_305 text-left w-[auto]"
                          variant="body59"
                        >
                          Partner
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start md:w-[100%] w-[93%]">
                    <div className="flex flex-row gap-[20px] items-end justify-start w-[100%]">
                      <Img
                        src="images/img_group1736.svg"
                        className="h-[144px] w-[auto]"
                        alt="Group1736"
                      />
                      <Text
                        className="font-normal mt-[122px] not-italic text-bluegray_305 text-left w-[auto]"
                        variant="body59"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col items-start justify-start md:mt-[0] mt-[40px] md:px-[20px] w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-bluegray_305 text-bluegray_305 text-left tracking-[0.04px] w-[100%]"
              wrapClassName="bg-white_A700 flex pl-[24px] pr-[35px] py-[13px] rounded-[24px] sm:px-[20px] w-[100%]"
              name="Group1738"
              placeholder="Search for a job . . ."
              prefix={
                <Img
                  src="images/img_search_bluegray_305.svg"
                  className="cursor-pointer mr-[16px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#8f9cac"
                    className="cursor-pointer ml-[10px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
            ></Input>
            <Text
              className="font-medium mt-[34px] text-bluegray_811 text-left tracking-[0.05px] w-[auto]"
              variant="body47"
            >
              Showing 18 Jobs
            </Text>
            <List
              className="flex-col gap-[24px] grid items-center mt-[21px] w-[100%]"
              orientation="vertical"
            >
              <div className="bg-white_A700 flex flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[30px] shadow-bs37 w-[100%]">
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start my-[13px] w-[100%]">
                  <Button className="bg-yellow_600 flex h-[60px] items-center justify-center p-[18px] rounded-[5px] w-[60px]">
                    <Img
                      src="images/img_twitter_white_a700_60x60.svg"
                      className="h-[24px]"
                      alt="twitter"
                    />
                  </Button>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-end justify-start md:w-[100%] w-[91%]">
                    <div className="flex flex-col gap-[9px] items-start justify-start mb-[4px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-semibold text-bluegray_811 text-left tracking-[0.05px] w-[auto]"
                        variant="body50"
                      >
                        Twitter inc
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_305 text-left tracking-[0.04px] w-[auto]"
                        variant="body59"
                      >
                        UI Designer
                      </Text>
                    </div>
                    <Button className="bg-teal_200_c6 cursor-pointer font-normal leading-[normal] min-w-[109px] md:ml-[0] ml-[146px] md:mt-[0] my-[5px] not-italic py-[12px] rounded-[24px] text-[16px] text-center text-white_A700 tracking-[0.05px] w-[auto]">
                      {" "}
                      Remote
                    </Button>
                    <Button className="bg-teal_200_c6 cursor-pointer font-normal leading-[normal] min-w-[123px] md:ml-[0] ml-[24px] md:mt-[0] my-[5px] not-italic py-[12px] rounded-[24px] text-[16px] text-center text-white_A700 tracking-[0.05px] w-[auto]">
                      UI Design
                    </Button>
                    <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[40px] md:mt-[0] mt-[4px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_305 text-left tracking-[0.04px] w-[auto]"
                        variant="body59"
                      >
                        Team
                      </Text>
                      <Text
                        className="font-medium text-bluegray_811 text-left tracking-[0.05px] w-[auto]"
                        variant="body50"
                      >
                        <span className="text-bluegray_811 text-[16px] font-poppins">
                          $90{" "}
                        </span>
                        <span className="text-bluegray_305 text-[14px] font-poppins font-normal not-italic">
                          /Hours
                        </span>
                      </Text>
                    </div>
                    <Img
                      src="images/img_overflowmenu_bluegray_811.svg"
                      className="h-[24px] md:ml-[0] ml-[51px] md:mt-[0] my-[17px] w-[24px]"
                      alt="overflowmenu"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[30px] shadow-bs37 w-[100%]">
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start my-[13px] w-[100%]">
                  <Button className="bg-orange_A204 flex h-[60px] items-center justify-center p-[18px] rounded-[5px] w-[60px]">
                    <Img
                      src="images/img_facebook_white_a700_60x60.svg"
                      className="h-[24px]"
                      alt="facebook"
                    />
                  </Button>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-end justify-start md:w-[100%] w-[91%]">
                    <div className="flex flex-col gap-[7px] items-start justify-start mb-[5px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-semibold text-bluegray_811 text-left tracking-[0.05px] w-[auto]"
                        variant="body50"
                      >
                        Facebook
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_305 text-left tracking-[0.04px] w-[auto]"
                        variant="body59"
                      >
                        UI/UX Designer
                      </Text>
                    </div>
                    <Button className="bg-teal_200_c6 cursor-pointer font-normal leading-[normal] min-w-[109px] md:ml-[0] ml-[127px] md:mt-[0] my-[4px] not-italic py-[12px] rounded-[24px] text-[16px] text-center text-white_A700 tracking-[0.05px] w-[auto]">
                      {" "}
                      Part Time
                    </Button>
                    <Button className="bg-teal_200_c6 cursor-pointer font-normal leading-[normal] min-w-[123px] md:ml-[0] ml-[24px] md:mt-[0] my-[4px] not-italic py-[12px] rounded-[24px] text-[16px] text-center text-white_A700 tracking-[0.05px] w-[auto]">
                      UI/UX
                    </Button>
                    <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[40px] md:mt-[0] mt-[4px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-gray_400 text-left tracking-[0.04px] w-[auto]"
                        variant="body59"
                      >
                        Team
                      </Text>
                      <Text
                        className="font-medium text-bluegray_811 text-left tracking-[0.05px] w-[auto]"
                        variant="body50"
                      >
                        <span className="text-bluegray_811 text-[16px] font-poppins">
                          $200{" "}
                        </span>
                        <span className="text-bluegray_305 text-[14px] font-poppins font-normal not-italic">
                          /Month
                        </span>
                      </Text>
                    </div>
                    <Img
                      src="images/img_overflowmenu_bluegray_811.svg"
                      className="h-[24px] md:ml-[0] ml-[38px] md:mt-[0] my-[16px] w-[24px]"
                      alt="overflowmenu One"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[30px] shadow-bs37 w-[100%]">
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start my-[13px] w-[100%]">
                  <Button className="bg-blue_303 flex h-[60px] items-center justify-center p-[18px] rounded-[5px] w-[60px]">
                    <Img
                      src="images/img_airplane_white_a700_60x60.svg"
                      className="h-[24px]"
                      alt="airplane"
                    />
                  </Button>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-end justify-start md:w-[100%] w-[91%]">
                    <div className="flex flex-col gap-[7px] items-start justify-start mb-[6px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-semibold text-bluegray_811 text-left tracking-[0.05px] w-[auto]"
                        variant="body50"
                      >
                        Beat Studio
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_305 text-left tracking-[0.04px] w-[auto]"
                        variant="body59"
                      >
                        UX Reseaches
                      </Text>
                    </div>
                    <Button className="bg-teal_200_c6 cursor-pointer font-normal leading-[normal] min-w-[109px] md:ml-[0] ml-[132px] md:mt-[0] my-[5px] not-italic py-[12px] rounded-[24px] text-[16px] text-center text-white_A700 tracking-[0.05px] w-[auto]">
                      {" "}
                      Remote
                    </Button>
                    <Button className="bg-teal_200_c6 cursor-pointer font-normal leading-[normal] min-w-[123px] md:ml-[0] ml-[24px] md:mt-[0] my-[5px] not-italic py-[12px] rounded-[24px] text-[16px] text-center text-white_A700 tracking-[0.05px] w-[auto]">
                      UX Resrch
                    </Button>
                    <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[40px] md:mt-[0] mt-[4px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_305 text-left tracking-[0.04px] w-[auto]"
                        variant="body59"
                      >
                        Team
                      </Text>
                      <Text
                        className="font-medium text-bluegray_811 text-left tracking-[0.05px] w-[auto]"
                        variant="body50"
                      >
                        <span className="text-bluegray_811 text-[16px] font-poppins">
                          $150{" "}
                        </span>
                        <span className="text-bluegray_305 text-[14px] font-poppins font-normal not-italic">
                          /Month
                        </span>
                      </Text>
                    </div>
                    <Img
                      src="images/img_overflowmenu_bluegray_811.svg"
                      className="h-[24px] md:ml-[0] ml-[42px] md:mt-[0] my-[17px] w-[24px]"
                      alt="overflowmenu Two"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[30px] shadow-bs37 w-[100%]">
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start my-[13px] w-[100%]">
                  <Button className="bg-deep_orange_102 flex h-[60px] items-center justify-center p-[18px] rounded-[5px] w-[60px]">
                    <Img
                      src="images/img_eye_white_a700_60x60.svg"
                      className="h-[24px]"
                      alt="eye"
                    />
                  </Button>
                  <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[91%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                      <div className="flex md:flex-1 flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="font-semibold text-bluegray_811 text-left tracking-[0.05px] w-[auto]"
                          variant="body50"
                        >
                          Wahyu Coorprate
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_305 text-left tracking-[0.04px] w-[auto]"
                          variant="body59"
                        >
                          Creative Designer
                        </Text>
                      </div>
                      <Button className="bg-teal_200_c6 cursor-pointer font-normal leading-[normal] min-w-[109px] md:ml-[0] ml-[85px] md:mt-[0] my-[3px] not-italic py-[12px] rounded-[24px] text-[16px] text-center text-white_A700 tracking-[0.05px] w-[auto]">
                        Full Time
                      </Button>
                      <Button className="bg-teal_200_c6 cursor-pointer font-normal leading-[normal] min-w-[123px] md:ml-[0] ml-[24px] md:mt-[0] my-[3px] not-italic py-[12px] rounded-[24px] text-[16px] text-center text-white_A700 tracking-[0.05px] w-[auto]">
                        Creative
                      </Button>
                      <div className="flex md:flex-1 flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[40px] md:mt-[0] mt-[2px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-bluegray_305 text-left tracking-[0.04px] w-[auto]"
                          variant="body59"
                        >
                          Team
                        </Text>
                        <Text
                          className="font-medium text-bluegray_811 text-left tracking-[0.05px] w-[auto]"
                          variant="body50"
                        >
                          <span className="text-bluegray_811 text-[16px] font-poppins">
                            $168{" "}
                          </span>
                          <span className="text-bluegray_305 text-[14px] font-poppins font-normal not-italic">
                            /Month
                          </span>
                        </Text>
                      </div>
                      <Img
                        src="images/img_overflowmenu_bluegray_811.svg"
                        className="h-[24px] md:ml-[0] ml-[42px] md:mt-[0] mt-[15px] w-[24px]"
                        alt="overflowmenu Three"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 items-center justify-start p-[24px] sm:px-[20px] rounded-[30px] shadow-bs37 w-[100%]">
                <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start my-[13px] w-[100%]">
                  <Button className="bg-deep_orange_700 flex h-[60px] items-center justify-center p-[18px] rounded-[5px] w-[60px]">
                    <Img
                      src="images/img_settings_white_a700_60x60.svg"
                      className="h-[24px]"
                      alt="settings One"
                    />
                  </Button>
                  <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-end justify-start md:w-[100%] w-[91%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start mb-[5px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-semibold text-bluegray_811 text-left tracking-[0.05px] w-[auto]"
                        variant="body50"
                      >
                        Balad IT
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_305 text-left tracking-[0.04px] w-[auto]"
                        variant="body59"
                      >
                        UI Designer
                      </Text>
                    </div>
                    <Button className="bg-teal_200_c6 cursor-pointer font-normal leading-[normal] min-w-[109px] md:ml-[0] ml-[152px] md:mt-[0] my-[5px] not-italic py-[12px] rounded-[24px] text-[16px] text-center text-white_A700 tracking-[0.05px] w-[auto]">
                      {" "}
                      Remote
                    </Button>
                    <Button className="bg-teal_200_c6 cursor-pointer font-normal leading-[normal] min-w-[123px] md:ml-[0] ml-[24px] md:mt-[0] my-[5px] not-italic py-[12px] rounded-[24px] text-[16px] text-center text-white_A700 tracking-[0.05px] w-[auto]">
                      UI Design
                    </Button>
                    <div className="flex flex-col gap-[8px] items-start justify-start md:ml-[0] ml-[40px] md:mt-[0] mt-[5px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-bluegray_305 text-left tracking-[0.04px] w-[auto]"
                        variant="body59"
                      >
                        Team
                      </Text>
                      <Text
                        className="font-medium text-bluegray_811 text-left tracking-[0.05px] w-[auto]"
                        variant="body50"
                      >
                        <span className="text-bluegray_811 text-[16px] font-poppins">
                          $94{" "}
                        </span>
                        <span className="text-bluegray_305 text-[14px] font-poppins font-normal not-italic">
                          /Hours
                        </span>
                      </Text>
                    </div>
                    <Img
                      src="images/img_overflowmenu_bluegray_811.svg"
                      className="h-[24px] md:ml-[0] ml-[51px] md:mt-[0] my-[17px] w-[24px]"
                      alt="overflowmenu Four"
                    />
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-1 flex-col mb-[23px] md:px-[20px] relative w-[100%]">
            <div className="bg-white_A700 border-[1px] border-indigo_58 border-solid flex flex-col items-start justify-end m-[auto] p-[24px] sm:px-[20px] w-[100%]">
              <div className="flex flex-row items-center justify-start mr-[auto] mt-[15px] md:w-[100%] w-[95%]">
                <div className="bg-gray_400 h-[40px] rounded-[50%] w-[40px]"></div>
                <div className="flex flex-col items-start justify-start ml-[16px] w-[auto]">
                  <Text
                    className="font-medium text-bluegray_811 text-left tracking-[0.04px] w-[auto]"
                    variant="body59"
                  >
                    Adedes rierals
                  </Text>
                  <Text
                    className="font-normal mt-[3px] not-italic text-bluegray_305 text-left tracking-[0.04px] w-[auto]"
                    variant="body67"
                  >
                    UI Designer
                  </Text>
                </div>
                <Img
                  src="images/img_overflowmenu_bluegray_811.svg"
                  className="h-[24px] ml-[85px] w-[24px]"
                  alt="overflowmenu Five"
                />
              </div>
              <div className="flex flex-col gap-[12px] items-start justify-start mt-[29px] md:w-[100%] w-[95%]">
                <Text
                  className="font-medium text-bluegray_811 text-left tracking-[0.06px] w-[auto]"
                  variant="body43"
                >
                  Filters{" "}
                </Text>
                <Line className="bg-indigo_58 h-[1px] w-[100%]" />
              </div>
              <div className="h-[664px] md:h-[680px] mt-[16px] relative w-[95%]">
                <div className="absolute flex items-center justify-start left-[0] top-[2%] w-[64%]">
                  <div className="flex flex-col gap-[132px] md:gap-[40px] items-start justify-start w-[100%]">
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="h-[47px] relative w-[100%]">
                        <div className="absolute bottom-[0] flex flex-row gap-[18px] inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                          <div className="bg-teal_200 h-[24px] rounded-[5px] w-[24px]"></div>
                          <Text
                            className="font-normal not-italic text-bluegray_811 text-left tracking-[0.04px] w-[auto]"
                            variant="body59"
                          >
                            <span className="text-bluegray_811 text-[14px] font-poppins">
                              Full Time Jobs{" "}
                            </span>
                            <span className="text-bluegray_305 text-[14px] font-poppins">
                              (18)
                            </span>
                          </Text>
                        </div>
                        <Img
                          src="images/img_checkmark.svg"
                          className="absolute h-[47px] inset-y-[0] left-[0] my-[auto] w-[auto]"
                          alt="checkmark"
                        />
                      </div>
                    </div>
                    <div className="h-[79px] relative w-[91%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[78px] mb-[-25px] mt-[auto] w-[auto] z-[1]"
                        alt="checkmark One"
                      />
                      <div className="flex flex-row gap-[16px] items-center justify-start mt-[auto] mx-[auto] w-[100%]">
                        <div className="bg-teal_200 h-[26px] rounded-[5px] w-[26px]"></div>
                        <Text
                          className="font-normal not-italic text-bluegray_811 text-left tracking-[0.04px] w-[auto]"
                          variant="body59"
                        >
                          <span className="text-bluegray_811 text-[14px] font-poppins">
                            UI Designer{" "}
                          </span>
                          <span className="text-bluegray_305 text-[14px] font-poppins">
                            (30)
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[85px] left-[0] top-[35%] w-[66%]">
                  <Img
                    src="images/img_checkmark.svg"
                    className="h-[84px] mb-[-25px] mt-[auto] w-[auto] z-[1]"
                    alt="checkmark Two"
                  />
                  <div className="flex flex-row gap-[16px] items-center justify-start mt-[auto] mx-[auto] w-[100%]">
                    <div className="bg-teal_200 h-[26px] rounded-[5px] w-[26px]"></div>
                    <Text
                      className="font-normal not-italic text-bluegray_811 text-left tracking-[0.04px] w-[auto]"
                      variant="body59"
                    >
                      <span className="text-bluegray_811 text-[14px] font-poppins">
                        UI/UX Designer{" "}
                      </span>
                      <span className="text-bluegray_305 text-[14px] font-poppins">
                        (10)
                      </span>
                    </Text>
                  </div>
                </div>
                <Accordion
                  preExpanded={[0]}
                  className="absolute gap-[25px] inset-[0] justify-center m-[auto] w-[100%]"
                >
                  {" "}
                  {[...Array(3)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <div className="flex flex-col gap-[25px] items-start justify-start w-[100%]">
                        <AccordionItemHeading className="w-full">
                          <AccordionItemButton>
                            <AccordionItemState>
                              {({ expanded }) => (
                                <div className="flex flex-row items-start justify-between w-[100%]">
                                  <Text
                                    className="font-medium text-bluegray_811 text-left tracking-[0.05px] w-[auto]"
                                    variant="body50"
                                  >
                                    Job Empoyment
                                  </Text>
                                  {expanded && (
                                    <Img
                                      src="images/img_arrowdown_bluegray_811.svg"
                                      className="h-[24px] w-[24px]"
                                      alt="arrowdown"
                                    />
                                  )}
                                  {!expanded && (
                                    <Img
                                      src="images/img_arrowdown_bluegray_811.svg"
                                      className="h-[24px] w-[24px]"
                                      alt="arrowdown Two"
                                    />
                                  )}
                                </div>
                              )}
                            </AccordionItemState>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="w-full">
                          <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[63%]">
                            <div className="flex flex-col relative w-[100%]">
                              <div className="flex flex-row gap-[18px] items-end justify-between mx-[auto] w-[100%]">
                                <Img
                                  src="images/img_trash_teal_200.svg"
                                  className="h-[53px] w-[auto]"
                                  alt="trash"
                                />
                                <div className="flex items-center justify-start mt-[31px] w-[auto]">
                                  <Text
                                    className="font-normal not-italic text-bluegray_811 text-left tracking-[0.04px] w-[auto]"
                                    variant="body59"
                                  >
                                    <span className="text-bluegray_811 text-[14px] font-poppins">
                                      Part time Jobs{" "}
                                    </span>
                                    <span className="text-bluegray_305 text-[14px] font-poppins">
                                      (8)
                                    </span>
                                  </Text>
                                </div>
                              </div>
                              <div className="h-[59px] mt-[-19px] mx-[auto] w-[100%] z-[1]">
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="h-[59px] mb-[-24px] mt-[auto] w-[auto] z-[1]"
                                  alt="checkmark Three"
                                />
                                <div className="flex flex-row gap-[18px] items-center justify-start mt-[auto] mx-[auto] w-[100%]">
                                  <div className="bg-teal_200 h-[24px] rounded-[5px] w-[24px]"></div>
                                  <Text
                                    className="font-normal not-italic text-bluegray_811 text-left tracking-[0.04px] w-[auto]"
                                    variant="body59"
                                  >
                                    <span className="text-bluegray_811 text-[14px] font-poppins">
                                      Remote Jobs{" "}
                                    </span>
                                    <span className="text-bluegray_305 text-[14px] font-poppins">
                                      (28)
                                    </span>
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <CheckBox
                              className="font-normal leading-[normal] not-italic text-[14px] text-bluegray_305 text-left tracking-[0.04px]"
                              inputClassName="bg-white_A700 border-[1px] border-indigo_58 border-solid h-[24px] mr-[5px] rounded-[5px] w-[24px]"
                              label="Internship (6)"
                              name="InternshipSix"
                            ></CheckBox>
                          </div>
                        </AccordionItemPanel>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
              <CheckBox
                className="font-normal leading-[normal] mt-[16px] not-italic text-[14px] text-bluegray_305 text-left tracking-[0.04px]"
                inputClassName="border-[1px] border-bluegray_305 border-solid h-[26px] mr-[5px] rounded-[5px] w-[26px]"
                label="$200 - $460 (20)"
                name="20046020"
              ></CheckBox>
            </div>
            <CheckBox
              className="font-normal leading-[normal] ml-[24px] mt-[-9px] not-italic text-[14px] text-bluegray_305 text-left tracking-[0.04px] z-[1]"
              inputClassName="border-[1px] border-bluegray_305 border-solid h-[26px] mr-[5px] mt-[-NaNpx] rounded-[5px] w-[26px] z-[1]"
              label="$460 - $700  (1)"
              name="4607001"
            ></CheckBox>
          </div>
        </div>
      </div>
    </>
  );
};

export default MacBookProTwoPage;
