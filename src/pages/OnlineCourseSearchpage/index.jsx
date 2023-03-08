import React from "react";

import {
  Text,
  Input,
  Img,
  List,
  Button,
  CheckBox,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

const OnlineCourseSearchpagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_64 flex font-quicksand items-center justify-end mx-[auto] w-[100%]">
        <div className="flex flex-col md:gap-[40px] gap-[70px] items-start justify-end w-[100%]">
          <div className="bg-white_A700 flex items-center justify-start p-[13px] shadow-bs44 w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start ml-[22px] md:px-[20px] w-[94%]">
              <Text
                className="font-bold font-qlassikbold md:mt-[0] mt-[11px] text-left text-light_blue_800 tracking-[-0.55px] w-[auto]"
                variant="body15"
              >
                Duolearning
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-quicksand font-semibold leading-[normal] p-[0] text-[14px] placeholder:text-gray_955 text-gray_955 text-left tracking-[0.30px] w-[100%]"
                wrapClassName="bg-gray_900_0c1 flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[118px] my-[10px] pl-[25px] pr-[35px] py-[17px] rounded-[26px] sm:ml-[0] sm:mt-[0] sm:px-[20px] sm:w-[100%] w-[39%]"
                name="Group1045"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search_black_900.svg"
                    className="cursor-pointer mr-[8px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#1f1e1e"
                      className="cursor-pointer ml-[10px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
              <List
                className="sm:flex-col flex-row font-quicksand gap-[34px] grid grid-cols-3 md:ml-[0] ml-[15px] md:w-[100%] w-[28%]"
                orientation="horizontal"
              >
                <div className="flex items-center justify-start p-[14px] w-[100%]">
                  <Text
                    className="font-semibold mb-[12px] mt-[15px] text-gray_956 text-left tracking-[0.30px] w-[auto]"
                    variant="body59"
                  >
                    Categories
                  </Text>
                </div>
                <div className="flex items-center justify-start p-[3px] w-[100%]">
                  <Text
                    className="font-semibold my-[24px] text-gray_956 text-left tracking-[0.30px] w-[auto]"
                    variant="body59"
                  >
                    Became Tutor
                  </Text>
                </div>
                <div className="flex items-center justify-start p-[8px] w-[100%]">
                  <Text
                    className="font-semibold mb-[18px] mt-[21px] text-gray_956 text-left tracking-[0.30px] w-[auto]"
                    variant="body59"
                  >
                    My Learning
                  </Text>
                </div>
              </List>
              <div className="flex font-quicksand items-center justify-start md:ml-[0] ml-[48px] md:mt-[0] mt-[22px] md:w-[100%] w-[7%]">
                <Button className="bg-yellow_803 cursor-pointer font-bold leading-[normal] min-w-[93px] py-[6px] rounded-[4px] text-[14px] text-center text-white_A700 tracking-[0.30px] w-[auto]">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start mr-[auto] md:px-[20px] md:w-[100%] w-[95%]">
            <aside className="flex flex-col md:hidden justify-start w-[290px]">
              <div className="flex flex-col items-start justify-start mb-[213px] mt-[30px] mx-[auto] w-[80%]">
                <Accordion preExpanded={[0]} className="gap-[29px] w-[100%]">
                  {" "}
                  {[...Array(6)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <div className="flex flex-col gap-[19px] items-start justify-start w-[100%]">
                        <AccordionItemHeading className="w-full">
                          <AccordionItemButton>
                            <AccordionItemState>
                              {({ expanded }) => (
                                <div className="flex flex-row items-start justify-between w-[100%]">
                                  <Text
                                    className="font-bold text-gray_956 text-left tracking-[0.40px] w-[auto]"
                                    variant="body47"
                                  >
                                    Topic
                                  </Text>
                                  {expanded && (
                                    <Img
                                      src="images/img_arrowdown_black_907.svg"
                                      className="h-[24px] w-[24px]"
                                      alt="arrowdown"
                                    />
                                  )}
                                  {!expanded && (
                                    <Img
                                      src="images/img_arrowdown_black_907.svg"
                                      className="h-[24px] w-[24px]"
                                      alt="arrowdown Five"
                                    />
                                  )}
                                </div>
                              )}
                            </AccordionItemState>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="w-full">
                          <div className="flex flex-col gap-[10px] items-start justify-start md:w-[100%] w-[88%]">
                            <CheckBox
                              className="font-medium leading-[normal] text-[16px] text-bluegray_506 text-left tracking-[0.30px]"
                              inputClassName="bg-white_A700 h-[16px] mr-[5px] outline outline-[0.5px] outline-gray_514 rounded-[4px] w-[16px]"
                              label="Film Making"
                              name="FilmMaking"
                            ></CheckBox>
                            <CheckBox
                              className="font-medium leading-[normal] text-[16px] text-bluegray_506 text-left tracking-[0.30px]"
                              inputClassName="bg-white_A700 h-[16px] mr-[5px] outline outline-[0.5px] outline-gray_514 rounded-[4px] w-[16px]"
                              label="Programming"
                              name="Programming"
                            ></CheckBox>
                            <CheckBox
                              className="font-medium leading-[normal] text-[16px] text-bluegray_506 text-left tracking-[0.30px]"
                              inputClassName="bg-white_A700 h-[16px] mr-[5px] outline outline-[0.5px] outline-gray_514 rounded-[4px] w-[16px]"
                              label="Personal Development"
                              name="PersonalDevelopment"
                            ></CheckBox>
                          </div>
                        </AccordionItemPanel>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
                <CheckBox
                  className="font-medium leading-[normal] mt-[19px] text-[16px] text-bluegray_506 text-left tracking-[0.30px]"
                  inputClassName="bg-white_A700 h-[16px] mr-[5px] outline outline-[0.5px] outline-gray_514 rounded-[4px] w-[16px]"
                  label="Caption"
                  name="Caption"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] mt-[10px] text-[16px] text-bluegray_506 text-left tracking-[0.30px]"
                  inputClassName="bg-white_A700 h-[16px] mr-[5px] outline outline-[0.5px] outline-gray_514 rounded-[4px] w-[16px]"
                  label="Quizzes"
                  name="Quizzes"
                ></CheckBox>
                <CheckBox
                  className="font-medium leading-[normal] mt-[10px] text-[16px] text-bluegray_506 text-left tracking-[0.30px]"
                  inputClassName="bg-white_A700 h-[16px] mr-[5px] outline outline-[0.5px] outline-gray_514 rounded-[4px] w-[16px]"
                  label="Practice Test"
                  name="PracticeTest"
                ></CheckBox>
              </div>
            </aside>
            <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row font-montserrat md:gap-[20px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_arrowleft_black_907.svg"
                  className="h-[24px] w-[24px]"
                  alt="arrowleft"
                />
                <Text
                  className="font-semibold md:ml-[0] ml-[10px] text-gray_956 text-left w-[auto]"
                  variant="body50"
                >
                  Back
                </Text>
                <SelectBox
                  className="bg-white_A700 md:flex-1 font-semibold leading-[normal] md:ml-[0] ml-[790px] pb-[13px] pl-[16px] pt-[16px] rounded-[6px] shadow-bs44 text-[16px] text-gray_956 text-left md:w-[100%] w-[19%]"
                  placeholderClassName="text-gray_956"
                  name="Group11Copy"
                  placeholder="Most Relevant"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_black_907.svg"
                      className="h-[24px] mr-[16px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
              <List
                className="flex-col font-quicksand gap-[27px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="h-[472px] relative w-[100%]">
                  <div className="h-[472px] m-[auto] w-[100%]">
                    <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                      <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                        <div className="bg-white_A700 flex md:flex-1 flex-col gap-[16px] items-center justify-start pb-[23px] rounded-[14px] md:w-[100%] w-[32%]">
                          <Img
                            src="images/img_bitmap_blue_200.svg"
                            className="h-[241px] rounded-tl-[14px] rounded-tr-[14px] w-[auto]"
                            alt="Bitmap"
                          />
                          <div className="flex flex-col items-start justify-start md:w-[100%] w-[92%]">
                            <Text
                              className="font-bold text-gray_956 text-left tracking-[0.30px] w-[auto]"
                              variant="body37"
                            >
                              Make Epic Videos for  the Internet!
                            </Text>
                            <div className="flex items-center justify-start mt-[7px] md:w-[100%] w-[auto]">
                              <Text
                                className="font-semibold text-deep_purple_700 text-left tracking-[-0.20px] w-[auto]"
                                variant="body50"
                              >
                                Film Making
                              </Text>
                            </div>
                            <div className="flex font-montserrat items-center justify-end mt-[8px] w-[100%]">
                              <Text
                                className="font-normal mt-[2px] not-italic text-bluegray_506 text-left tracking-[0.30px] w-[auto]"
                                variant="body59"
                              >
                                Ullamcorper malesuada proin libero nunc
                                 consequat interdum. Consectetur.
                              </Text>
                            </div>
                            <Text
                              className="font-bold md:ml-[0] ml-[106px] mt-[24px] text-gray_956 text-left tracking-[0.30px] w-[auto]"
                              variant="body50"
                            >
                              Learn More
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A700 flex md:flex-1 flex-col gap-[16px] items-center justify-start pb-[23px] rounded-[14px] md:w-[100%] w-[32%]">
                          <Img
                            src="images/img_bitmap_blue_200.svg"
                            className="h-[241px] rounded-tl-[14px] rounded-tr-[14px] w-[auto]"
                            alt="Bitmap One"
                          />
                          <div className="flex flex-col items-start justify-start md:w-[100%] w-[88%]">
                            <Text
                              className="font-bold text-gray_956 text-left tracking-[0.30px] w-[auto]"
                              variant="body37"
                            >
                              Facebook Ads Strategies That Make Me 6-Figures
                            </Text>
                            <div className="flex items-center justify-start mt-[3px] md:w-[100%] w-[auto]">
                              <Text
                                className="font-semibold text-deep_purple_700 text-left tracking-[-0.20px] w-[auto]"
                                variant="body50"
                              >
                                Social Media Marketing
                              </Text>
                            </div>
                            <div className="flex font-montserrat items-center justify-end mt-[8px] md:w-[100%] w-[auto]">
                              <Text
                                className="font-normal mt-[2px] not-italic text-bluegray_506 text-left tracking-[0.30px] w-[auto]"
                                variant="body59"
                              >
                                Quisque dapibus ut lectus sed tempus.  Morbi
                                mattis pretium congue.{" "}
                              </Text>
                            </div>
                            <Text
                              className="font-bold md:ml-[0] ml-[106px] mt-[24px] text-gray_956 text-left tracking-[0.30px] w-[auto]"
                              variant="body50"
                            >
                              Learn More
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute backdrop-opacity-[0.5] bg-gray_900_26 blur-[95.00px] h-[472px] inset-y-[0] my-[auto] right-[29%] rounded-bl-[0] rounded-br-[14px] rounded-tl-[0] rounded-tr-[14px] w-[7%]"></div>
                    <div className="absolute backdrop-opacity-[0.5] bg-gray_900_26 blur-[95.00px] h-[472px] inset-y-[0] left-[30%] my-[auto] rotate-[180deg] rounded-bl-[0] rounded-br-[14px] rounded-tl-[0] rounded-tr-[14px] w-[7%]"></div>
                  </div>
                  <div className="absolute bg-white_A700 flex flex-col gap-[16px] h-[max-content] inset-[0] justify-center m-[auto] pb-[23px] rounded-[14px] w-[32%]">
                    <Img
                      src="images/img_bitmap_blue_200.svg"
                      className="h-[241px] rounded-tl-[14px] rounded-tr-[14px] w-[auto]"
                      alt="Bitmap Two"
                    />
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[16px] md:w-[100%] w-[86%]">
                      <Text
                        className="font-bold text-gray_956 text-left tracking-[0.30px] w-[auto]"
                        variant="body37"
                      >
                        Intermediate: Classes,  Interfaces and OOP
                      </Text>
                      <div className="flex items-center justify-start mt-[7px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-semibold text-deep_purple_700 text-left tracking-[-0.20px] w-[auto]"
                          variant="body50"
                        >
                          Programming
                        </Text>
                      </div>
                      <div className="flex font-montserrat items-center justify-end mt-[8px] w-[100%]">
                        <Text
                          className="font-normal mt-[2px] not-italic text-bluegray_506 text-left tracking-[0.30px] w-[auto]"
                          variant="body59"
                        >
                          {" "}
                          Integer gravida pharetra felis, vitae ker  vestibulum
                          nec Integer hendrerit.
                        </Text>
                      </div>
                      <Text
                        className="font-bold md:ml-[0] ml-[106px] mt-[24px] text-gray_956 text-left tracking-[0.30px] w-[auto]"
                        variant="body50"
                      >
                        Learn More
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex-1 gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[100%]">
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[16px] items-center justify-start pb-[24px] rounded-[14px] w-[100%]">
                    <Img
                      src="images/img_bitmap_blue_200.svg"
                      className="h-[241px] rounded-tl-[14px] rounded-tr-[14px] w-[auto]"
                      alt="Bitmap One"
                    />
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[91%]">
                      <Text
                        className="font-bold text-gray_956 text-left tracking-[0.30px] w-[auto]"
                        variant="body37"
                      >
                        Accounting in 60 Minutes  A Brief Introduction
                      </Text>
                      <div className="flex items-center justify-start mt-[7px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-semibold text-deep_purple_700 text-left tracking-[-0.20px] w-[auto]"
                          variant="body50"
                        >
                          Accounting
                        </Text>
                      </div>
                      <div className="flex font-montserrat items-center justify-start mt-[8px] pr-[2px] py-[2px] w-[100%]">
                        <Text
                          className="font-normal mb-[11px] not-italic text-bluegray_506 text-left tracking-[0.30px] w-[auto]"
                          variant="body59"
                        >
                          Curabitur purus nunc, pharetra vitae com modo vel
                          bibendum eu magna.
                        </Text>
                      </div>
                      <Text
                        className="font-bold md:ml-[0] ml-[106px] mt-[24px] text-gray_956 text-left tracking-[0.30px] w-[auto]"
                        variant="body50"
                      >
                        Learn More
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[16px] items-center justify-start pb-[24px] rounded-[14px] shadow-bs44 w-[100%]">
                    <Img
                      src="images/img_bitmap_blue_200.svg"
                      className="h-[241px] rounded-tl-[14px] rounded-tr-[14px] w-[auto]"
                      alt="Bitmap One One"
                    />
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[92%]">
                      <Text
                        className="font-bold text-gray_956 text-left tracking-[0.30px] w-[auto]"
                        variant="body37"
                      >
                        Basic Your Negotiating  Skills 101
                      </Text>
                      <div className="flex items-center justify-start mt-[7px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-semibold text-deep_purple_700 text-left tracking-[-0.20px] w-[auto]"
                          variant="body50"
                        >
                          Personal Development
                        </Text>
                      </div>
                      <div className="flex font-montserrat items-center justify-start mt-[8px] pr-[3px] py-[3px] w-[100%]">
                        <Text
                          className="font-normal mb-[10px] not-italic text-bluegray_506 text-left tracking-[0.30px] w-[auto]"
                          variant="body59"
                        >
                          Ullamcorper malesuada proin libero nunc  consequat
                          interdum. Consectetur.
                        </Text>
                      </div>
                      <Text
                        className="font-bold md:ml-[0] ml-[106px] mt-[24px] text-gray_956 text-left tracking-[0.30px] w-[auto]"
                        variant="body50"
                      >
                        Learn More
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 flex-col gap-[16px] items-center justify-start pb-[24px] rounded-[14px] w-[100%]">
                    <Img
                      src="images/img_bitmap_blue_200.svg"
                      className="h-[241px] rounded-tl-[14px] rounded-tr-[14px] w-[auto]"
                      alt="Bitmap Two One"
                    />
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[87%]">
                      <Text
                        className="font-bold text-gray_956 text-left tracking-[0.30px] w-[auto]"
                        variant="body37"
                      >
                        The Complete Financial  Analyst Course 2020
                      </Text>
                      <div className="flex items-center justify-start mt-[3px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-semibold text-deep_purple_700 text-left tracking-[-0.20px] w-[auto]"
                          variant="body50"
                        >
                          Finance
                        </Text>
                      </div>
                      <div className="flex font-montserrat items-center justify-start mt-[8px] pr-[3px] py-[3px] w-[100%]">
                        <Text
                          className="font-normal mb-[10px] not-italic text-bluegray_506 text-left tracking-[0.30px] w-[auto]"
                          variant="body59"
                        >
                          Phasellus placerat ornare elit, maximus  dignissim
                          nisi semper non.
                        </Text>
                      </div>
                      <Text
                        className="font-bold md:ml-[0] ml-[106px] mt-[24px] text-gray_956 text-left tracking-[0.30px] w-[auto]"
                        variant="body50"
                      >
                        Learn More
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <Button className="bg-yellow_803 cursor-pointer font-bold font-quicksand leading-[normal] min-w-[144px] py-[15px] rounded-[6px] text-[16px] text-center text-white_A700 w-[auto]">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineCourseSearchpagePage;
