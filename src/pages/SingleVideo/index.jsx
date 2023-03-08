import React from "react";

import { Img, Text, Line, List, Button, Input } from "components";

const SingleVideoPage = () => {
  return (
    <>
      <div className="bg-gray_103 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[1024px] w-[auto]"
          alt="NavigationWebSidebar"
        />
        <div className="sm:h-[1185px] h-[875px] md:h-[932px] md:px-[20px] relative md:w-[100%] w-[89%]">
          <div className="sm:h-[1185px] h-[875px] md:h-[932px] m-[auto] w-[100%]">
            <Img
              src="images/img_sidebar_white_a700.svg"
              className="h-[875px] m-[auto] w-[auto]"
              alt="ModalDesktopWhite"
            />
            <div className="absolute flex flex-col gap-[33px] h-[max-content] inset-y-[0] items-center justify-start left-[7%] my-[auto] w-[56%]">
              <div className="flex flex-col gap-[34px] items-start justify-start w-[100%]">
                <div
                  className="bg-cover bg-no-repeat flex h-[49px] items-center justify-end p-[11px] rounded-[12px] md:w-[100%] w-[13%]"
                  style={{
                    backgroundImage:
                      "url('images/img_buttonresponsivewithicon.svg')",
                  }}
                >
                  <div className="flex flex-row gap-[10px] items-start justify-center mt-[4px] md:w-[100%] w-[76%]">
                    <Img
                      src="images/img_arrowleft_gray_522.svg"
                      className="h-[18px] mt-[3px] w-[18px]"
                      alt="arrowleft"
                    />
                    <Text
                      className="font-normal not-italic text-gray_522 text-left w-[auto]"
                      variant="body59"
                    >
                      Back
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col md:gap-[40px] gap-[91px] items-center justify-start w-[100%]">
                  <div className="h-[308px] relative w-[100%]">
                    <Img
                      src="images/img_videobackground.png"
                      className="h-[308px] m-[auto] object-cover rounded-[12px] w-[100%]"
                      alt="VideoBackground"
                    />
                    <div className="absolute bottom-[6%] flex inset-x-[0] items-center justify-start mx-[auto] pb-[6px] w-[95%]">
                      <div className="h-[5px] relative w-[100%]">
                        <Text
                          className="font-normal mb-[-0.75px] ml-[auto] mt-[auto] not-italic text-right text-white_A700 w-[auto] z-[1]"
                          variant="body67"
                        >
                          05:46
                        </Text>
                        <Text
                          className="font-normal mb-[-0.75px] mt-[auto] not-italic text-left text-white_A700 w-[auto] z-[1]"
                          variant="body67"
                        >
                          01:23
                        </Text>
                        <div className="h-[1px] mt-[auto] mx-[auto] w-[100%]">
                          <Line className="bg-white_A700_33 h-[1px] m-[auto] rounded-[1px] w-[100%]" />
                          <div className="absolute h-[1px] inset-y-[0] left-[0] my-[auto] sm:w-[100%] w-[60%]">
                            <Line className="bg-white_A700_cc h-[1px] m-[auto] rounded-[1px] w-[100%]" />
                            <Line className="absolute bg-light_blue_200 h-[1px] inset-y-[0] left-[0] my-[auto] rounded-[1px] w-[89%]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[17px] items-center justify-start w-[100%]">
                      <div className="sm:h-[126px] h-[61px] relative w-[100%]">
                        <Text
                          className="font-normal leading-[36.00px] m-[auto] not-italic text-gray_964 text-left w-[100%]"
                          variant="body30"
                        >
                          Tropical Fresh Tourism Is Back In Full Swing In Cancun
                          Mexico
                        </Text>
                        <div className="absolute bottom-[5%] flex sm:flex-col flex-row sm:gap-[40px] inset-x-[0] items-center justify-between mx-[auto] w-[100%]">
                          <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[19%]">
                            <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                              <div className="flex h-[48px] items-center justify-start w-[48px]">
                                <Img
                                  src="images/img_avatar_15.png"
                                  className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                                  alt="Avatar"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start w-[auto]">
                                <Text
                                  className="font-normal not-italic text-gray_964 text-left w-[auto]"
                                  variant="body59"
                                >
                                  Katherine Cole
                                </Text>
                                <Text
                                  className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                                  variant="body67"
                                >
                                  5min ago
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex sm:flex-1 flex-row items-start justify-between sm:w-[100%] w-[37%]">
                            <div className="flex flex-row gap-[5px] items-center justify-start mt-[4px] p-[6px] w-[auto]">
                              <Img
                                src="images/img_favorite_bluegray_101.svg"
                                className="h-[14px] w-[14px]"
                                alt="favorite"
                              />
                              <Text
                                className="font-normal not-italic text-gray_964 text-left w-[auto]"
                                variant="body59"
                              >
                                326
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[6px] items-center justify-start mt-[4px] p-[5px] w-[auto]">
                              <Img
                                src="images/img_laptop_bluegray_101.svg"
                                className="h-[14px] w-[14px]"
                                alt="laptop"
                              />
                              <Text
                                className="font-normal not-italic text-gray_964 text-left w-[auto]"
                                variant="body59"
                              >
                                148
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-center mt-[3px] p-[6px] w-[auto]">
                              <Img
                                src="images/img_reply_gray_964.svg"
                                className="h-[14px] ml-[4px] w-[14px]"
                                alt="reply"
                              />
                              <Text
                                className="font-normal ml-[4px] not-italic text-gray_964 text-left w-[auto]"
                                variant="body59"
                              >
                                Share
                              </Text>
                            </div>
                            <Img
                              src="images/img_overflowmenu_bluegray_101_38x38.svg"
                              className="h-[38px] w-[38px]"
                              alt="overflowmenu"
                            />
                          </div>
                        </div>
                      </div>
                      <Text
                        className="font-normal leading-[22.00px] not-italic text-gray_522 text-left w-[100%]"
                        variant="body59"
                      >
                        Cancun is back, better than ever! Over a hundred Mexico
                        resorts have reopened and the state tourism minister
                        predicts Cancun will draw as many visitors in 2006 as it
                        did two years ago. And the travel deals are great! If
                        you haven’t been, now may be the best time to take a
                        vacation to Cancun.
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-start justify-start md:w-[100%] w-[47%]">
                      <div className="h-[17px] relative w-[15%]">
                        <div className="absolute bg-gray_500_48 h-[17px] inset-[0] justify-center m-[auto] rounded-[4px] w-[100%]"></div>
                        <Text
                          className="absolute bottom-[0] font-normal not-italic right-[13%] text-center text-gray_522 w-[auto]"
                          variant="body67"
                        >
                          Travel
                        </Text>
                      </div>
                      <Text
                        className="bg-gray_500_48 font-normal h-[17px] justify-center not-italic pl-[9px] pr-[6px] rounded-[4px] text-center text-gray_522 w-[57px]"
                        variant="body67"
                      >
                        Mexico
                      </Text>
                      <div className="md:h-[17px] h-[18px] relative w-[12%]">
                        <div className="absolute bg-gray_500_48 h-[17px] inset-x-[0] mx-[auto] rounded-[4px] top-[0] w-[100%]"></div>
                        <Text
                          className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-center text-gray_522 w-[max-content]"
                          variant="body67"
                        >
                          Vlog
                        </Text>
                      </div>
                      <div className="md:h-[17px] h-[18px] relative w-[12%]">
                        <div className="absolute bg-gray_500_48 h-[17px] inset-x-[0] mx-[auto] rounded-[4px] top-[0] w-[100%]"></div>
                        <Text
                          className="absolute bottom-[0] font-normal not-italic right-[17%] text-center text-gray_522 w-[auto]"
                          variant="body67"
                        >
                          Tips
                        </Text>
                      </div>
                      <Text
                        className="bg-gray_500_48 font-normal h-[17px] justify-center not-italic px-[7px] rounded-[4px] text-center text-gray_522 w-[65px]"
                        variant="body67"
                      >
                        Vacation
                      </Text>
                      <div className="h-[17px] relative w-[17%]">
                        <div className="absolute bg-gray_500_48 h-[17px] inset-[0] justify-center m-[auto] rounded-[4px] w-[100%]"></div>
                        <Text
                          className="absolute bottom-[0] font-normal not-italic right-[10%] text-center text-gray_522 w-[auto]"
                          variant="body67"
                        >
                          Cancun
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[21px] items-start justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_964 text-left w-[auto]"
                  variant="body59"
                >
                  Related Videos
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                  orientation="horizontal"
                >
                  <div className="h-[115px] relative w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[115px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image Three"
                    />
                    <div className="absolute bg-gray_900_7e1 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[38px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_66 flex h-[38px] items-center justify-center p-[10px] rounded-[12px] w-[38px]">
                        <Img
                          src="images/img_play_white_a700_15x18.svg"
                          className="h-[18px]"
                          alt="play"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="h-[115px] relative w-[100%]">
                    <Img
                      src="images/img_image_29.png"
                      className="h-[115px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image Four"
                    />
                    <div className="absolute bg-gray_900_7e1 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[38px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_66 flex h-[38px] items-center justify-center p-[10px] rounded-[12px] w-[38px]">
                        <Img
                          src="images/img_play_white_a700_15x18.svg"
                          className="h-[18px]"
                          alt="play One"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="h-[115px] relative w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[115px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image Five"
                    />
                    <div className="absolute bg-gray_900_7e1 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[38px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <Button className="bg-white_A700_66 flex h-[38px] items-center justify-center p-[10px] rounded-[12px] w-[38px]">
                        <Img
                          src="images/img_play_white_a700_15x18.svg"
                          className="h-[18px]"
                          alt="play Two"
                        />
                      </Button>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="absolute bg-gray_964 flex flex-col md:gap-[40px] gap-[70px] h-[100%] inset-y-[0] items-center justify-start my-[auto] pb-[40px] sm:px-[20px] px-[40px] right-[0] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[31%]">
            <div className="flex flex-col gap-[39px] items-start justify-start md:w-[100%] w-[96%]">
              <Text
                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                variant="body41"
              >
                Comments (148)
              </Text>
              <List
                className="flex-col gap-[32px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                      <div className="flex flex-row items-end justify-evenly w-[auto]">
                        <div className="flex h-[28px] items-center justify-start w-[28px]">
                          <Img
                            src="images/img_avatar_56.png"
                            className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                            alt="Avatar One"
                          />
                        </div>
                        <Text
                          className="font-normal my-[5px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          Billy Green
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_522 text-left w-[auto]"
                        variant="body67"
                      >
                        20min ago
                      </Text>
                    </div>
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-left text-white_A700 w-[100%]"
                      variant="body59"
                    >
                      Awesome Edward, remeber that five tips for low cost
                      holidays I sent you?
                    </Text>
                    <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[14%]">
                      <Img
                        src="images/img_favorite_red_a204.svg"
                        className="h-[14px] w-[14px]"
                        alt="favorite One"
                      />
                      <Img
                        src="images/img_laptop_bluegray_101.svg"
                        className="h-[14px] w-[14px]"
                        alt="laptop One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                      <div className="flex flex-row items-end justify-evenly w-[auto]">
                        <div className="flex h-[28px] items-center justify-start w-[28px]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                            alt="Avatar Two"
                          />
                        </div>
                        <Text
                          className="font-normal my-[5px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          Billy Green
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_522 text-left w-[auto]"
                        variant="body67"
                      >
                        20min ago
                      </Text>
                    </div>
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-left text-white_A700 w-[100%]"
                      variant="body59"
                    >
                      Awesome Edward, remeber that five tips for low cost{" "}
                    </Text>
                    <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[14%]">
                      <Img
                        src="images/img_favorite_bluegray_101_11x14.svg"
                        className="h-[14px] w-[14px]"
                        alt="favorite Two"
                      />
                      <Img
                        src="images/img_laptop_bluegray_101.svg"
                        className="h-[14px] w-[14px]"
                        alt="laptop Two"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                      <div className="flex flex-row items-end justify-evenly w-[auto]">
                        <div className="flex h-[28px] items-center justify-start w-[28px]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                            alt="Avatar Three"
                          />
                        </div>
                        <Text
                          className="font-normal my-[5px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          Billy Green
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_522 text-left w-[auto]"
                        variant="body67"
                      >
                        20min ago
                      </Text>
                    </div>
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-left text-white_A700 w-[100%]"
                      variant="body59"
                    >
                      Awesome Edward, remeber that five tips for low cost
                      holidays I sent you?
                    </Text>
                    <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[14%]">
                      <Img
                        src="images/img_favorite_red_a204.svg"
                        className="h-[14px] w-[14px]"
                        alt="favorite Three"
                      />
                      <Img
                        src="images/img_laptop_bluegray_101.svg"
                        className="h-[14px] w-[14px]"
                        alt="laptop Three"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                      <div className="flex flex-row items-end justify-evenly w-[auto]">
                        <div className="flex h-[28px] items-center justify-start w-[28px]">
                          <Img
                            src="images/img_avatar_58.png"
                            className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                            alt="Avatar Four"
                          />
                        </div>
                        <Text
                          className="font-normal my-[5px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          Billy Green
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_522 text-left w-[auto]"
                        variant="body67"
                      >
                        20min ago
                      </Text>
                    </div>
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-left text-white_A700 w-[100%]"
                      variant="body59"
                    >
                      Awesome Edward, remeber that five tips for low cost{" "}
                    </Text>
                    <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[14%]">
                      <Img
                        src="images/img_favorite_bluegray_101_11x14.svg"
                        className="h-[14px] w-[14px]"
                        alt="favorite Four"
                      />
                      <Img
                        src="images/img_laptop_bluegray_101.svg"
                        className="h-[14px] w-[14px]"
                        alt="laptop Four"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                      <div className="flex flex-row items-end justify-evenly w-[auto]">
                        <div className="flex h-[28px] items-center justify-start w-[28px]">
                          <Img
                            src="images/img_avatar_52.png"
                            className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                            alt="Avatar Five"
                          />
                        </div>
                        <Text
                          className="font-normal my-[5px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          Billy Green
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_522 text-left w-[auto]"
                        variant="body67"
                      >
                        20min ago
                      </Text>
                    </div>
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-left text-white_A700 w-[100%]"
                      variant="body59"
                    >
                      Awesome Edward, remeber that five tips for low cost
                      holidays I sent you?
                    </Text>
                    <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[14%]">
                      <Img
                        src="images/img_favorite_red_a204.svg"
                        className="h-[14px] w-[14px]"
                        alt="favorite Five"
                      />
                      <Img
                        src="images/img_laptop_bluegray_101.svg"
                        className="h-[14px] w-[14px]"
                        alt="laptop Five"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="bg-white_A700 flex flex-row gap-[25px] items-center justify-center p-[11px] rounded-[4px] md:w-[100%] w-[96%]">
              <Input
                className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                wrapClassName="bg-white_A700 flex ml-[4px] pl-[2px] pr-[1px] py-[4px] sm:w-[100%] w-[82%]"
                name="FrameFive"
                placeholder="Write a comment…"
                suffix={
                  <Img
                    src="images/img_user_bluegray_101_14x14.svg"
                    className="ml-[12px] my-[auto]"
                    alt="user"
                  />
                }
              ></Input>
              <Img
                src="images/img_send_indigo_a206.svg"
                className="h-[14px] mr-[15px] w-[14px]"
                alt="send"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleVideoPage;
