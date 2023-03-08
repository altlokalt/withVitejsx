import React from "react";

import { Img, Input, Text, List, Button } from "components";
import { CloseSVG } from "../../assets/images";

const Home1Page = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_103 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar_indigo_a206.svg"
          className="h-[1024px] w-[auto]"
          alt="NavigationWebSidebar"
        />
        <div className="flex items-center justify-end md:ml-[0] ml-[65px] md:mt-[0] mt-[34px] md:px-[20px] md:w-[100%] w-[53%]">
          <div className="flex flex-col gap-[25px] items-center justify-start w-[100%]">
            <div className="bg-white_A700 flex md:flex-col flex-row gap-[13px] items-center justify-start p-[12px] rounded-[12px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                wrapClassName="bg-white_A700 flex md:w-[100%] pl-[9px] pr-[35px] py-[7px] sm:pr-[20px] sm:w-[100%] w-[89%]"
                name="FrameOne"
                placeholder="Search in social…"
                prefix={
                  <Img
                    src="images/img_search_bluegray_101.svg"
                    className="cursor-pointer mr-[15px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#8f92a1"
                      className="cursor-pointer ml-[10px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
              <Text
                className="font-normal not-italic text-gray_522 text-left tracking-[1.00px] w-[auto]"
                variant="body67"
              >
                Filters
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start md:w-[100%] w-[50%]">
                <div className="bg-white_A700 h-[160px] md:h-[91px] p-[25px] sm:px-[20px] relative rounded-[12px] w-[100%]">
                  <div className="absolute bottom-[16%] flex flex-row inset-x-[0] items-start justify-between mx-[auto] w-[85%]">
                    <List
                      className="sm:flex-col flex-row gap-[10px] grid grid-cols-3 w-[auto]"
                      orientation="horizontal"
                    >
                      <div className="bg-gray_103 flex items-center justify-end p-[5px] rounded-[8px] w-[100%]">
                        <Img
                          src="images/img_iconcamera.svg"
                          className="h-[11px] w-[auto]"
                          alt="IconCamera"
                        />
                      </div>
                      <div className="bg-gray_103 flex items-end justify-end p-[5px] rounded-[8px] w-[100%]">
                        <Img
                          src="images/img_videocamera_gray_522.svg"
                          className="h-[11px] w-[auto]"
                          alt="videocamera"
                        />
                      </div>
                      <div className="bg-gray_103 flex items-center justify-end p-[5px] rounded-[8px] w-[100%]">
                        <Img
                          src="images/img_plus_gray_522.svg"
                          className="h-[11px] w-[auto]"
                          alt="plus"
                        />
                      </div>
                    </List>
                    <Button
                      className="bg-indigo_A206 flex items-center justify-center px-[11px] py-[4px] rounded-[4px] text-center"
                      rightIcon={
                        <Img
                          src="images/img_arrowright_white_a700_14x14.svg"
                          className="ml-[0] text-center"
                          alt="arrow_right"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700">
                        Share
                      </div>
                    </Button>
                  </div>
                  <div className="absolute bottom-[16%] flex flex-row inset-x-[0] items-start justify-start mx-[auto] w-[84%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="Avatar"
                      />
                    </div>
                    <div className="bg-white_A700 flex items-start justify-start ml-[5px] p-[10px] rounded-[19px] w-[auto]">
                      <Text
                        className="font-normal mb-[52px] not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        What are you thinking?{" "}
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex items-center justify-end p-[6px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col items-center justify-start mt-[18px] md:w-[100%] w-[87%]">
                    <div className="flex flex-row items-start justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[50%]">
                        <Img
                          src="images/img_image_9.png"
                          className="h-[40px] md:h-[auto] object-cover rounded-[12px] w-[auto]"
                          alt="Image One"
                        />
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            Edward Ford
                          </Text>
                          <Text
                            className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                            variant="body67"
                          >
                            5min ago
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu_bluegray_101.svg"
                        className="h-[35px] mt-[5px] w-[auto]"
                        alt="overflowmenu"
                      />
                    </div>
                    <div className="flex flex-col gap-[14px] items-center justify-start mt-[25px] pt-[2px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Tourism Is Back In Full Swing In Cancun Mexico
                      </Text>
                      <div className="h-[153px] relative w-[100%]">
                        <Img
                          src="images/img_image_153x320.png"
                          className="h-[153px] m-[auto] object-cover rounded-[8px] w-[100%]"
                          alt="Image Two"
                        />
                        <div className="absolute bg-gray_900_66 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[60px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[100%]">
                          <div className="bg-white_A700_99 flex items-center justify-end p-[8px] rounded-[12px] md:w-[100%] w-[19%]">
                            <Img
                              src="images/img_play_white_a700_15x18.svg"
                              className="h-[15px] w-[auto]"
                              alt="play"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[25px] w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[44%]">
                        <div className="flex flex-row gap-[5px] items-center justify-start p-[4px] w-[48%]">
                          <Img
                            src="images/img_favorite_bluegray_101_11x14.svg"
                            className="h-[11px] w-[auto]"
                            alt="favorite"
                          />
                          <Text
                            className="font-normal not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            326
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6px] items-center justify-center p-[4px] w-[46%]">
                          <Img
                            src="images/img_laptop_bluegray_101.svg"
                            className="h-[11px] w-[auto]"
                            alt="laptop"
                          />
                          <Text
                            className="font-normal mr-[8px] not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            148
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center p-[4px] w-[24%]">
                        <Text
                          className="font-normal ml-[6px] not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          Share
                        </Text>
                        <Img
                          src="images/img_reply_gray_964.svg"
                          className="h-[11px] mr-[6px] w-[auto]"
                          alt="reply"
                        />
                      </div>
                    </div>
                    <div className="border-[2px] border-gray_500_33 border-solid flex flex-row gap-[15px] items-center justify-evenly mt-[17px] p-[3px] rounded-[4px] w-[100%]">
                      <Input
                        className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                        wrapClassName="bg-white_A700 flex mt-[7px] py-[4px] sm:w-[100%] w-[83%]"
                        name="FrameFive"
                        placeholder="Write a comment…"
                        suffix={
                          <Img
                            src="images/img_user_bluegray_101.svg"
                            className="ml-[12px] my-[auto]"
                            alt="user"
                          />
                        }
                      ></Input>
                      <Img
                        src="images/img_send_indigo_a206.svg"
                        className="h-[14px] w-[14px]"
                        alt="send"
                      />
                    </div>
                    <div className="flex items-center justify-start mt-[17px] w-[100%]">
                      <div className="flex flex-col gap-[10px] items-center justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                          <div className="flex flex-row items-start justify-evenly w-[auto]">
                            <div className="flex h-[28px] items-center justify-start w-[28px]">
                              <Img
                                src="defaultNoData.png"
                                className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                                alt="Avatar One"
                              />
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_964 text-left w-[auto]"
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
                        <div className="md:h-[44px] h-[52px] relative w-[100%]">
                          <div className="absolute bottom-[0] flex items-center justify-start left-[0] w-[14%]">
                            <div className="flex flex-row gap-[15px] items-center justify-between w-[100%]">
                              <Img
                                src="images/img_favorite_red_a204.svg"
                                className="h-[11px] w-[auto]"
                                alt="favorite One"
                              />
                              <Img
                                src="images/img_laptop_bluegray_101.svg"
                                className="h-[11px] w-[auto]"
                                alt="laptop One"
                              />
                            </div>
                          </div>
                          <Text
                            className="absolute font-normal inset-x-[0] leading-[22.00px] mx-[auto] not-italic text-gray_522 text-left top-[0] w-[100%]"
                            variant="body59"
                          >
                            Awesome Edward, remeber that five tips for low cost
                            holidays I sent you?
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start mt-[25px] w-[100%]">
                      <div className="flex flex-col items-start justify-start w-[100%]">
                        <div className="flex flex-row items-center justify-between md:w-[100%] w-[99%]">
                          <div className="flex flex-row items-start justify-evenly w-[auto]">
                            <div className="flex h-[28px] items-center justify-start w-[28px]">
                              <Img
                                src="defaultNoData.png"
                                className="h-[28px] md:h-[auto] object-cover rounded-[8px] w-[28px]"
                                alt="Avatar Two"
                              />
                            </div>
                            <Text
                              className="font-normal not-italic text-gray_964 text-left w-[auto]"
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
                          className="font-normal mt-[9px] not-italic text-gray_522 text-left w-[auto]"
                          variant="body59"
                        >
                          Awesome Edward, remeber that five tips for low cost
                          holidays I sent you?
                        </Text>
                        <div className="flex flex-row gap-[15px] items-center justify-start mt-[24px] md:w-[100%] w-[14%]">
                          <Img
                            src="images/img_favorite_red_a204.svg"
                            className="h-[11px] w-[auto]"
                            alt="favorite Two"
                          />
                          <Img
                            src="images/img_laptop_bluegray_101.svg"
                            className="h-[11px] w-[auto]"
                            alt="laptop Two"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start md:w-[100%] w-[47%]">
                <div className="bg-white_A700 flex flex-col items-center justify-end p-[29px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <div className="flex flex-row gap-[10px] items-center justify-between w-[66%]">
                      <Img
                        src="images/img_image_48x48.png"
                        className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                        alt="Image Three"
                      />
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
                    <Img
                      src="images/img_overflowmenu_bluegray_101.svg"
                      className="h-[38px] w-[38px]"
                      alt="overflowmenu One"
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] items-center justify-start mt-[30px] w-[100%]">
                    <Img
                      src="images/img_image_150x290.png"
                      className="h-[150px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image Four"
                    />
                    <div className="flex md:h-[139px] h-[92px] justify-end relative w-[100%]">
                      <Text
                        className="font-normal mb-[2px] mt-[auto] not-italic text-indigo_A206 text-left tracking-[1.00px] w-[auto]"
                        variant="body67"
                      >
                        Read More
                      </Text>
                      <div className="absolute flex flex-col gap-[15px] h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-gray_964 text-left w-[100%]"
                          variant="body50"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo, and More
                        </Text>
                        <Text
                          className="font-normal leading-[20.00px] not-italic text-gray_522 text-left w-[100%]"
                          variant="body59"
                        >
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[16px] w-[100%]">
                    <div className="flex flex-row gap-[5px] items-center justify-start p-[6px] w-[23%]">
                      <Img
                        src="images/img_favorite_bluegray_101.svg"
                        className="h-[14px] w-[14px]"
                        alt="favorite Three"
                      />
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        326
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[22%]">
                      <Img
                        src="images/img_laptop_bluegray_101.svg"
                        className="h-[14px] w-[14px]"
                        alt="laptop Three"
                      />
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        148
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center ml-[77px] p-[6px] w-[26%]">
                      <Text
                        className="font-normal ml-[3px] not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        Share
                      </Text>
                      <Img
                        src="images/img_reply_gray_964.svg"
                        className="h-[14px] mr-[4px] w-[14px]"
                        alt="reply One"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex items-center justify-start p-[23px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col items-center justify-start my-[2px] md:w-[100%] w-[98%]">
                    <div className="flex flex-col gap-[43px] items-start justify-start md:w-[100%] w-[98%]">
                      <div className="flex flex-row items-start justify-between w-[100%]">
                        <div className="flex flex-row gap-[10px] items-center justify-between w-[61%]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[40px] md:h-[auto] object-cover rounded-[12px] w-[auto]"
                            alt="Image Five"
                          />
                          <div className="flex flex-col items-start justify-start w-[auto]">
                            <Text
                              className="font-normal not-italic text-gray_964 text-left w-[auto]"
                              variant="body59"
                            >
                              Dustin Houston
                            </Text>
                            <Text
                              className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                              variant="body67"
                            >
                              5min ago
                            </Text>
                          </div>
                        </div>
                        <Img
                          src="images/img_overflowmenu_bluegray_101.svg"
                          className="h-[35px] mt-[5px] w-[auto]"
                          alt="overflowmenu Two"
                        />
                      </div>
                      <Text
                        className="font-normal not-italic text-gray_522 text-left w-[auto]"
                        variant="body59"
                      >
                        Whether its a driving tour 😂
                      </Text>
                    </div>
                    <div className="flex items-center justify-start mt-[4px] md:w-[100%] w-[98%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[136px] md:h-[auto] object-cover rounded-[8px] w-[auto]"
                          alt="image Six"
                        />
                        <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_image_64x80.png"
                            className="h-[64px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                            alt="image Seven"
                          />
                          <div className="h-[64px] relative w-[100%]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[64px] m-[auto] object-cover rounded-[8px] w-[100%]"
                              alt="image Eight"
                            />
                            <div className="absolute flex flex-row gap-[6px] h-[max-content] inset-[0] items-center justify-center m-[auto] p-[3px] w-[68%]">
                              <Img
                                src="images/img_settings_bluegray_101.svg"
                                className="h-[14px] ml-[5px] w-[14px]"
                                alt="settings"
                              />
                              <Text
                                className="font-normal mr-[5px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body59"
                              >
                                17
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[21px] md:w-[100%] w-[98%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[48%]">
                        <div className="flex flex-row gap-[5px] items-center justify-start p-[2px] w-[48%]">
                          <Img
                            src="images/img_favorite_bluegray_101_11x14.svg"
                            className="h-[11px] ml-[3px] w-[auto]"
                            alt="favorite Four"
                          />
                          <Text
                            className="font-normal not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            326
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6px] items-center justify-center p-[2px] w-[46%]">
                          <Img
                            src="images/img_laptop_bluegray_101.svg"
                            className="h-[11px] ml-[2px] w-[auto]"
                            alt="laptop Four"
                          />
                          <Text
                            className="font-normal mr-[10px] not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            148
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center p-[2px] w-[26%]">
                        <Text
                          className="font-normal ml-[7px] not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          Share
                        </Text>
                        <Img
                          src="images/img_reply_gray_964.svg"
                          className="h-[11px] mr-[8px] w-[auto]"
                          alt="reply Two"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[874px] md:ml-[0] ml-[30px] overflow-auto md:px-[20px] relative md:w-[100%] w-[30%]">
          <div
            className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-end justify-center m-[auto] p-[25px] sm:px-[20px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group83.svg')" }}
          >
            <div className="flex flex-col gap-[52px] items-center justify-start mr-[14px] mt-[19px] md:w-[100%] w-[86%]">
              <div className="flex flex-col gap-[176px] md:gap-[40px] justify-start w-[100%]">
                <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[37%]">
                  <Button className="bg-light_blue_200 cursor-pointer font-normal h-[48px] not-italic py-[10px] rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]">
                    1
                  </Button>
                  <div className="flex h-[48px] items-center justify-start w-[48px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                      alt="Avatar Three"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[41px] items-start justify-start mr-[10px] md:w-[100%] w-[97%]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body41"
                  >
                    Who to Follow
                  </Text>
                  <List
                    className="flex-col gap-[30px] grid items-center mb-[15px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="Avatar Four"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-end w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          Cammy Hedling
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body67"
                        >
                          Los Angeles, CA
                        </Text>
                      </div>
                      <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                        <Img
                          src="images/img_camera_bluegray_101.svg"
                          className="h-[14px]"
                          alt="camera"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="images/img_avatar_24.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="Avatar Five"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-end w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          Cammy Hedling
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body67"
                        >
                          Los Angeles, CA
                        </Text>
                      </div>
                      <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                        <Img
                          src="images/img_camera_bluegray_101.svg"
                          className="h-[14px]"
                          alt="camera One"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                      <div className="flex h-[38px] items-center justify-start w-[38px]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                          alt="Avatar Six"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-end w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          Cammy Hedling
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body67"
                        >
                          Los Angeles, CA
                        </Text>
                      </div>
                      <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center my-[5px] p-[7px] rounded-[8px] w-[28px]">
                        <Img
                          src="images/img_camera_bluegray_101.svg"
                          className="h-[14px]"
                          alt="camera Two"
                        />
                      </Button>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col gap-[39px] items-start justify-start py-[3px] md:w-[100%] w-[97%]">
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body41"
                >
                  Trend Topics
                </Text>
                <List
                  className="flex-col gap-[30px] grid items-center mb-[18px] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Button className="bg-green_402 cursor-pointer font-normal h-[38px] not-italic py-[10px] rounded-[12px] text-[14px] text-center text-white_A700 w-[38px]">
                      #1
                    </Button>
                    <Text
                      className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      MadeInAmerica
                    </Text>
                    <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center ml-[126px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_checkmark_white_a700_18x18.svg"
                        className="h-[14px]"
                        alt="checkmark"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Button className="bg-green_402 cursor-pointer font-normal h-[38px] not-italic py-[10px] rounded-[12px] text-[14px] text-center text-white_A700 w-[38px]">
                      #2
                    </Button>
                    <Text
                      className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      MadeInAmerica
                    </Text>
                    <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center ml-[126px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_checkmark_white_a700_18x18.svg"
                        className="h-[14px]"
                        alt="checkmark One"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-[100%]">
                    <Button className="bg-green_402 cursor-pointer font-normal h-[38px] not-italic py-[10px] rounded-[12px] text-[14px] text-center text-white_A700 w-[38px]">
                      #3
                    </Button>
                    <Text
                      className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      MadeInAmerica
                    </Text>
                    <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center ml-[126px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_checkmark_white_a700_18x18.svg"
                        className="h-[14px]"
                        alt="checkmark Two"
                      />
                    </Button>
                  </div>
                </List>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col gap-[31px] items-start justify-start right-[0] top-[13%] w-[93%]">
            <Text
              className="font-normal not-italic text-left text-white_A700 w-[auto]"
              variant="body41"
            >
              Featured Stories
            </Text>
            <List
              className="sm:flex-col flex-row gap-[20px] grid grid-cols-6 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="flex flex-1 items-center justify-end shadow-bs61 w-[100%]">
                <div className="bg-gradient18  p-[2px] rounded-[12px] w-[100%] ">
                  <div className="bg-gray_103 border-solid flex h-[48px] items-center justify-start p-[4px] rounded-[12px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[40px] md:h-[auto] object-cover rounded-[9px] w-[40px]"
                      alt="Image Nine"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-end shadow-bs61 w-[100%]">
                <div className="bg-gradient18  p-[2px] rounded-[12px] w-[100%] ">
                  <div className="bg-gray_103 border-solid flex h-[48px] items-center justify-start p-[4px] rounded-[12px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[40px] md:h-[auto] object-cover rounded-[9px] w-[40px]"
                      alt="Image Ten"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-end shadow-bs61 w-[100%]">
                <div className="bg-gradient18  p-[2px] rounded-[12px] w-[100%] ">
                  <div className="bg-gray_103 border-solid flex h-[48px] items-center justify-start p-[4px] rounded-[12px]">
                    <Img
                      src="images/img_image_12.png"
                      className="h-[40px] md:h-[auto] object-cover rounded-[9px] w-[40px]"
                      alt="Image Eleven"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-end shadow-bs61 w-[100%]">
                <div className="bg-gradient18  p-[2px] rounded-[12px] w-[100%] ">
                  <div className="bg-gray_103 border-solid flex h-[48px] items-center justify-start p-[4px] rounded-[12px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[40px] md:h-[auto] object-cover rounded-[9px] w-[40px]"
                      alt="Image Twelve"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-end shadow-bs61 w-[100%]">
                <div className="bg-gradient18  p-[2px] rounded-[12px] w-[100%] ">
                  <div className="bg-gray_103 border-solid flex h-[48px] items-center justify-start p-[4px] rounded-[12px]">
                    <Img
                      src="images/img_image_14.png"
                      className="h-[40px] md:h-[auto] object-cover rounded-[9px] w-[40px]"
                      alt="Image Thirteen"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-end shadow-bs61 w-[100%]">
                <div className="bg-gradient18  p-[2px] rounded-[12px] w-[100%] ">
                  <div className="bg-gray_103 border-solid flex h-[48px] items-center justify-start p-[4px] rounded-[12px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[40px] md:h-[auto] object-cover rounded-[9px] w-[40px]"
                      alt="Image Fourteen"
                    />
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

export default Home1Page;
