import React from "react";

import { Img, Text, Input, Button, List, Radio, Line } from "components";
import { CloseSVG } from "../../assets/images";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

const JobfinderOnePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_62 flex font-poppins items-center justify-end mx-[auto] sm:pr-[20px] pr-[40px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1400px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="h-[874px] relative md:w-[100%] w-[6%]">
            <div className="h-[874px] m-[auto] w-[100%]">
              <aside className="flex flex-col md:hidden justify-start m-[auto] w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="bg-white_A700 flex flex-col items-center justify-center p-[27px] sm:px-[20px] w-[100%]">
                    <Img
                      src="images/img_clock_bluegray_904.svg"
                      className="h-[20px] mt-[189px] w-[auto]"
                      alt="clock"
                    />
                    <Img
                      src="images/img_user_bluegray_904_20x24.svg"
                      className="h-[20px] mt-[37px] w-[auto]"
                      alt="user"
                    />
                    <Img
                      src="images/img_car_bluegray_904.svg"
                      className="h-[20px] mt-[37px] w-[auto]"
                      alt="car"
                    />
                    <Img
                      src="images/img_settings_bluegray_904_20x24.svg"
                      className="h-[20px] mb-[435px] mt-[37px] w-[auto]"
                      alt="settings"
                    />
                  </div>
                </div>
              </aside>
              <div className="absolute bg-gradient12  flex inset-x-[0] items-center justify-start mx-[auto] p-[14px] top-[15%] w-[100%]">
                <Img
                  src="images/img_grid_blue_a201.svg"
                  className="h-[20px] w-[auto]"
                  alt="grid"
                />
              </div>
            </div>
            <div className="absolute bg-bluegray_101 flex inset-x-[0] items-center justify-start mx-[auto] p-[27px] sm:px-[20px] top-[6%] w-[100%]">
              <Img
                src="images/img_checkmark_bluegray_904.svg"
                className="h-[24px] my-[2px] w-[24px]"
                alt="checkmark"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-[0] mt-[28px] md:w-[100%] w-[92%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[19%]">
                <div className="flex flex-col gap-[5px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-bluegray_810 text-left w-[auto]"
                    variant="body37"
                  >
                    Welcome, Amanda
                  </Text>
                  <Text
                    className="font-light text-gray_508 text-left w-[auto]"
                    variant="body50"
                  >
                    Tue, 07 June 2022
                  </Text>
                </div>
              </div>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[16px] placeholder:text-gray_508 text-gray_508 text-left w-[100%]"
                wrapClassName="bg-white_A700 flex mb-[13px] md:ml-[0] md:mt-[0] md:w-[100%] ml-[551px] mt-[7px] pb-[8px] pl-[20px] pr-[35px] pt-[12px] rounded-[8px] sm:ml-[0] sm:mt-[0] sm:pr-[20px] sm:w-[100%] w-[28%]"
                name="Group47735"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search_gray_508.svg"
                    className="cursor-pointer mr-[16px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#ada7a7"
                      className="cursor-pointer ml-[10px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
              <div className="bg-white_A700 flex md:flex-1 items-center justify-start mb-[13px] md:ml-[0] ml-[20px] md:mt-[0] mt-[7px] p-[11px] rounded-[10px] md:w-[100%] w-[5%]">
                <Img
                  src="images/img_notification_gray_508.svg"
                  className="h-[20px] w-[auto]"
                  alt="notification"
                />
              </div>
              <div className="bg-black_900_33 flex md:flex-1 items-center justify-end mb-[13px] md:ml-[0] ml-[20px] md:mt-[0] mt-[7px] rounded-[10px] md:w-[100%] w-[5%]">
                <Img
                  src="images/img_checkmark_bluegray_904.svg"
                  className="h-[24px] mt-[19px] w-[24px]"
                  alt="checkmark One"
                />
              </div>
            </div>
            <div className="bg-black_900_33 flex items-end justify-end mt-[42px] p-[24px] sm:px-[20px] rounded-[10px] w-[100%]">
              <div className="flex flex-col justify-start mr-[120px] md:w-[100%] w-[76%]">
                <Text
                  className="font-semibold md:ml-[0] ml-[268px] text-left text-white_A700 w-[auto]"
                  variant="body26"
                >
                  1,876 Available Jobs
                </Text>
                <div className="flex md:flex-col flex-row md:gap-[40px] items-end justify-between ml-[auto] mt-[15px] md:w-[100%] w-[92%]">
                  <Text
                    className="font-light leading-[27.00px] text-center text-white_A700_99 w-[auto]"
                    variant="body50"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor
                  </Text>
                  <Img
                    src="images/img_checkmark_bluegray_904.svg"
                    className="h-[24px] mb-[5px] md:mt-[0] mt-[25px] w-[24px]"
                    alt="checkmark Two"
                  />
                </div>
                <div className="bg-white_A700 flex flex-row items-center justify-end mr-[145px] mt-[24px] p-[6px] rounded-[8px] md:w-[100%] w-[85%]">
                  <Img
                    src="images/img_search_gray_508_24x24.svg"
                    className="h-[24px] w-[24px]"
                    alt="search One"
                  />
                  <Text
                    className="font-normal ml-[16px] not-italic text-black_900 text-left w-[auto]"
                    variant="body50"
                  >
                    Design
                  </Text>
                  <Button
                    className="bg-gray_62 flex items-center justify-center ml-[469px] px-[16px] py-[8px] rounded-[4px] text-center"
                    leftIcon={
                      <Img
                        src="images/img_location_gray_508.svg"
                        className="mr-[16px] text-center"
                        alt="location"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[16px] text-gray_508 text-left">
                      Solo, Indonesia
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[32px] items-start justify-between mt-[32px] w-[100%]">
              <List
                className="md:flex-1 flex-col gap-[20px] grid md:w-[100%] w-[68%]"
                orientation="vertical"
              >
                <div className="bg-white_A700 flex items-center justify-start my-[0] p-[20px] rounded-[10px] w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between w-[100%]">
                    <Button className="bg-gray_62 flex h-[68px] items-center justify-center mb-[99px] p-[22px] sm:px-[20px] rounded-[50%] w-[68px]">
                      <Img
                        src="images/img_checkmark_bluegray_904.svg"
                        className="h-[24px]"
                        alt="checkmark Three"
                      />
                    </Button>
                    <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[15px] md:w-[100%] w-[auto]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                        <Text
                          className="font-medium text-black_900 text-left w-[auto]"
                          variant="body37"
                        >
                          UI/UX Designer
                        </Text>
                        <Radio
                          value="2045hourly"
                          className="font-medium leading-[normal] sm:text-[20px] md:text-[22px] text-[24px] text-blue_A201 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          checked={false}
                          name="2045hourly"
                          label="2045 hourly"
                        ></Radio>
                      </div>
                      <Text
                        className="font-light leading-[27.00px] mt-[10px] text-black_900_87 text-left w-[100%]"
                        variant="body50"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor
                      </Text>
                      <div className="flex flex-row gap-[16px] items-center justify-start mt-[16px] md:w-[100%] w-[24%]">
                        <Button className="bg-blue_A200_63 cursor-pointer font-normal leading-[normal] min-w-[72px] not-italic py-[6px] rounded-[5px] text-[14px] text-blue_A201 text-center w-[auto]">
                          Design
                        </Button>
                        <Button className="bg-blue_A200_63 cursor-pointer font-normal leading-[normal] min-w-[89px] not-italic py-[6px] rounded-[5px] text-[14px] text-blue_A201 text-center w-[auto]">
                          Full-Time
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex items-center justify-start my-[0] p-[20px] rounded-[10px] w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between w-[100%]">
                    <Button className="bg-gray_62 flex h-[68px] items-center justify-center mb-[99px] p-[22px] sm:px-[20px] rounded-[50%] w-[68px]">
                      <Img
                        src="images/img_checkmark_bluegray_904.svg"
                        className="h-[24px]"
                        alt="checkmark Four"
                      />
                    </Button>
                    <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[15px] md:w-[100%] w-[auto]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                        <Text
                          className="font-medium text-black_900 text-left w-[auto]"
                          variant="body37"
                        >
                          UI/UX Designer
                        </Text>
                        <Radio
                          value="2045hourly"
                          className="font-medium leading-[normal] sm:text-[20px] md:text-[22px] text-[24px] text-blue_A201 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          checked={false}
                          name="2045hourlyOne"
                          label="2045 hourly"
                        ></Radio>
                      </div>
                      <Text
                        className="font-light leading-[27.00px] mt-[10px] text-black_900_87 text-left w-[100%]"
                        variant="body50"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor
                      </Text>
                      <div className="flex flex-row gap-[16px] items-center justify-start mt-[16px] md:w-[100%] w-[24%]">
                        <Button className="bg-blue_A200_63 cursor-pointer font-normal leading-[normal] min-w-[72px] not-italic py-[6px] rounded-[5px] text-[14px] text-blue_A201 text-center w-[auto]">
                          Design
                        </Button>
                        <Button className="bg-blue_A200_63 cursor-pointer font-normal leading-[normal] min-w-[89px] not-italic py-[6px] rounded-[5px] text-[14px] text-blue_A201 text-center w-[auto]">
                          Full-Time
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex items-center justify-start my-[0] p-[20px] rounded-[10px] w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[24px] items-start justify-between w-[100%]">
                    <Button className="bg-gray_62 flex h-[68px] items-center justify-center mb-[99px] p-[22px] sm:px-[20px] rounded-[50%] w-[68px]">
                      <Img
                        src="images/img_checkmark_bluegray_904.svg"
                        className="h-[24px]"
                        alt="checkmark Five"
                      />
                    </Button>
                    <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[16px] md:w-[100%] w-[auto]">
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                        <Text
                          className="font-medium text-black_900 text-left w-[auto]"
                          variant="body37"
                        >
                          UI/UX Designer
                        </Text>
                        <Radio
                          value="2045hourly"
                          className="font-medium leading-[normal] sm:text-[20px] md:text-[22px] text-[24px] text-blue_A201 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          checked={false}
                          name="2045hourlyTwo"
                          label="2045 hourly"
                        ></Radio>
                      </div>
                      <Text
                        className="font-light leading-[27.00px] mt-[12px] text-black_900_87 text-left w-[100%]"
                        variant="body50"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor
                      </Text>
                      <div className="flex flex-row gap-[16px] items-center justify-start mt-[16px] md:w-[100%] w-[24%]">
                        <Button className="bg-blue_A200_63 cursor-pointer font-normal leading-[normal] min-w-[72px] not-italic py-[6px] rounded-[5px] text-[14px] text-blue_A201 text-center w-[auto]">
                          Design
                        </Button>
                        <Button className="bg-blue_A200_63 cursor-pointer font-normal leading-[normal] min-w-[89px] not-italic py-[6px] rounded-[5px] text-[14px] text-blue_A201 text-center w-[auto]">
                          Full-Time
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="bg-white_A700 flex md:flex-1 flex-col gap-[20px] items-start justify-start mb-[61px] p-[19px] rounded-[10px] md:w-[100%] w-[30%]">
                <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[24%]">
                  <Img
                    src="images/img_settings_blue_a201.svg"
                    className="h-[24px] w-[24px]"
                    alt="settings One"
                  />
                  <Text
                    className="font-medium text-blue_A201 text-left w-[auto]"
                    variant="body50"
                  >
                    Filter
                  </Text>
                </div>
                <Accordion preExpanded={[0]} className="gap-[19px] w-[100%]">
                  {" "}
                  {[...Array(8)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <div className="flex items-center justify-start pb-[20px] w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-black_900 text-left w-[auto]"
                            variant="body50"
                          >
                            Date Posted
                          </Text>
                          {!expanded && (
                            <Img
                              src="images/img_arrowdown_bluegray_904_24x24.svg"
                              className="h-[24px] w-[24px]"
                              alt="arrowdown"
                            />
                          )}
                        </div>
                      </div>
                      <Line className="self-center h-[1px] bg-gray_209 w-[100%]" />
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobfinderOnePage;
