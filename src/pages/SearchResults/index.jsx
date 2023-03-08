import React from "react";

import { Img, Text, Input, Button, Radio, List } from "components";
import { CloseSVG } from "../../assets/images";

const SearchResultsPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_103 flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
          <Img
            src="images/img_navigationwebsidebar_indigo_a206.svg"
            className="h-[1024px] w-[auto]"
            alt="NavigationWebSidebar"
          />
          <div className="flex md:flex-1 flex-col gap-[32px] items-center justify-start md:ml-[0] ml-[65px] md:mt-[0] mt-[40px] md:px-[20px] md:w-[100%] w-[53%]">
            <div className="flex flex-col md:gap-[40px] gap-[63px] items-center justify-start w-[100%]">
              <div className="p-[0] w-[100%]">
                <div className="flex md:flex-col flex-row gap-[22px] items-center justify-center ml-[640px] mr-[30px] mt-[15px] w-[12%]">
                  <Text
                    className="font-normal not-italic text-gray_522 text-left tracking-[1.00px] w-[auto]"
                    variant="body67"
                  >
                    Filters
                  </Text>
                  <Text
                    className="bg-red_A204 flex h-[28px] items-center justify-center not-italic rounded-[8px] text-center text-white_A700 w-[28px]"
                    variant="body73"
                  >
                    1
                  </Text>
                </div>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-gray_964 text-gray_964 text-left w-[100%]"
                  wrapClassName="bg-white_A700 flex ml-[20px] mr-[130px] pl-[0] pr-[35px] py-[7px] sm:pr-[20px] sm:w-[100%] w-[81%]"
                  name="FrameTwo"
                  placeholder="Nass"
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
                        color="#1e1f20"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
              </div>
              <div className="flex flex-col items-start justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_964 text-left w-[auto]"
                  variant="body41"
                >
                  People
                </Text>
                <div className="flex items-center justify-start mt-[5px] w-[100%]">
                  <div className="md:gap-[20px] gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                    <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-[22px] sm:px-[20px] rounded-[12px] w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-center ml-[8px] pr-[9px] w-[auto]">
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
                            variant="body50"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="font-normal mt-[2px] not-italic text-gray_522 text-left w-[auto]"
                            variant="body67"
                          >
                            @louisaingram
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="bg-indigo_A206 flex items-center justify-center mr-[8px] mt-[17px] pl-[9px] pr-[8px] py-[6px] rounded-[4px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_checkmark_white_a700_18x18.svg"
                            className="mr-[6px] text-center"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                          Add
                        </div>
                      </Button>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-[22px] sm:px-[20px] rounded-[12px] w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-center ml-[8px] pr-[9px] w-[auto]">
                        <div className="flex h-[48px] items-center justify-start w-[48px]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                            alt="Avatar One"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_964 text-left w-[auto]"
                            variant="body50"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="font-normal mt-[2px] not-italic text-gray_522 text-left w-[auto]"
                            variant="body67"
                          >
                            @louisaingram
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="bg-indigo_A206 flex items-center justify-center mr-[8px] mt-[17px] pl-[9px] pr-[8px] py-[6px] rounded-[4px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_checkmark_white_a700_18x18.svg"
                            className="mr-[6px] text-center"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                          Add
                        </div>
                      </Button>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-[22px] sm:px-[20px] rounded-[12px] w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-center ml-[8px] pr-[9px] w-[auto]">
                        <div className="flex h-[48px] items-center justify-start w-[48px]">
                          <Img
                            src="images/img_avatar_17.png"
                            className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                            alt="Avatar Two"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_964 text-left w-[auto]"
                            variant="body50"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="font-normal mt-[2px] not-italic text-gray_522 text-left w-[auto]"
                            variant="body67"
                          >
                            @louisaingram
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="bg-indigo_A206 flex items-center justify-center mr-[8px] mt-[17px] pl-[9px] pr-[8px] py-[6px] rounded-[4px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_checkmark_white_a700_18x18.svg"
                            className="mr-[6px] text-center"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                          Add
                        </div>
                      </Button>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-row items-center justify-between p-[22px] sm:px-[20px] rounded-[12px] w-[100%]">
                      <div className="flex flex-row gap-[15px] items-center justify-center ml-[8px] pr-[9px] w-[auto]">
                        <div className="flex h-[48px] items-center justify-start w-[48px]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                            alt="Avatar Three"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_964 text-left w-[auto]"
                            variant="body50"
                          >
                            Logan Nasser
                          </Text>
                          <Text
                            className="font-normal mt-[2px] not-italic text-gray_522 text-left w-[auto]"
                            variant="body67"
                          >
                            @louisaingram
                          </Text>
                        </div>
                      </div>
                      <Button
                        className="bg-indigo_A206 flex items-center justify-center mr-[8px] mt-[17px] pl-[9px] pr-[8px] py-[6px] rounded-[4px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_checkmark_white_a700_18x18.svg"
                            className="mr-[6px] text-center"
                            alt="checkmark"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                          Add
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <Button
                  className="border-[2px] border-gray_500_6c border-solid flex items-center justify-center mt-[99px] px-[11px] py-[6px] rounded-[4px] text-center"
                  rightIcon={
                    <Img
                      src="images/img_arrowright_gray_964.svg"
                      className="ml-[2px] text-center"
                      alt="arrow_right"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-gray_964 text-left">
                    See more
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[41px] items-start justify-start md:mt-[0] mt-[28px] md:w-[100%] w-[49%]">
                    <Text
                      className="font-normal not-italic text-gray_964 text-left w-[auto]"
                      variant="body41"
                    >
                      Posts
                    </Text>
                    <div className="bg-white_A700 flex flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
                      <div className="flex flex-row items-center justify-between w-[100%]">
                        <div className="flex flex-row gap-[10px] items-center justify-between pr-[9px] w-[66%]">
                          <Img
                            src="images/img_image_48x48.png"
                            className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                            alt="Image One"
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
                          alt="overflowmenu"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start mt-[30px] w-[100%]">
                        <Img
                          src="images/img_image_150x305.png"
                          className="h-[150px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
                          alt="Image Two"
                        />
                        <div className="flex flex-col gap-[15px] items-center justify-start mt-[20px] w-[100%]">
                          <Text
                            className="font-normal leading-[22.00px] not-italic text-gray_964 text-left w-[100%]"
                            variant="body50"
                          >
                            The Best Fashion Instagrams of the Week: Céline
                            Dion, Lizzo, and More
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
                        <Text
                          className="font-normal mt-[9px] not-italic text-gray_522 text-left tracking-[1.00px] w-[auto]"
                          variant="body67"
                        >
                          Read More
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-start mt-[16px] w-[100%]">
                        <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[22%]">
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
                        <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[21%]">
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
                        <div className="flex flex-row items-center justify-center ml-[92px] p-[5px] w-[25%]">
                          <Text
                            className="font-normal ml-[5px] not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            Share
                          </Text>
                          <Img
                            src="images/img_reply_gray_964.svg"
                            className="h-[14px] mr-[6px] w-[14px]"
                            alt="reply"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 items-center justify-start mb-[279px] p-[23px] sm:px-[20px] rounded-[12px] md:w-[100%] w-[49%]">
                    <div className="flex flex-col items-center justify-start my-[2px] md:w-[100%] w-[98%]">
                      <div className="flex flex-col gap-[43px] items-start justify-start md:w-[100%] w-[98%]">
                        <div className="flex flex-row items-start justify-between w-[100%]">
                          <div className="flex flex-row gap-[10px] items-center justify-between w-[58%]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[40px] md:h-[auto] object-cover rounded-[12px] w-[auto]"
                              alt="Image Three"
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
                            alt="overflowmenu One"
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
                            src="images/img_image_136x210.png"
                            className="h-[136px] md:h-[auto] object-cover rounded-[8px] w-[auto]"
                            alt="image Four"
                          />
                          <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[64px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                              alt="image Five"
                            />
                            <div className="h-[64px] relative w-[100%]">
                              <Img
                                src="defaultNoData.png"
                                className="h-[64px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                alt="image Six"
                              />
                              <div className="absolute flex flex-row gap-[7px] h-[max-content] inset-[0] items-center justify-center m-[auto] p-[3px] w-[67%]">
                                <Img
                                  src="images/img_settings_bluegray_101.svg"
                                  className="h-[14px] ml-[5px] w-[14px]"
                                  alt="settings"
                                />
                                <Text
                                  className="font-normal mr-[7px] not-italic text-left text-white_A700 w-[auto]"
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
                        <div className="flex flex-row gap-[10px] items-center justify-between w-[46%]">
                          <div className="flex flex-row gap-[5px] items-center justify-start p-[4px] w-[48%]">
                            <Img
                              src="images/img_favorite_bluegray_101.svg"
                              className="h-[11px] w-[auto]"
                              alt="favorite One"
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
                              alt="laptop One"
                            />
                            <Text
                              className="font-normal mr-[8px] not-italic text-gray_964 text-left w-[auto]"
                              variant="body59"
                            >
                              148
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-center p-[4px] w-[25%]">
                          <Text
                            className="font-normal ml-[6px] not-italic text-gray_964 text-left w-[auto]"
                            variant="body59"
                          >
                            Share
                          </Text>
                          <Img
                            src="images/img_reply_gray_964.svg"
                            className="h-[11px] mr-[6px] w-[auto]"
                            alt="reply One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 h-[874px] items-end justify-start md:ml-[0] ml-[30px] pl-[20px] md:pr-[20px] md:w-[100%] w-[30%]"
            style={{ backgroundImage: "url('images/img_side_gray_522.png')" }}
          >
            <div className="bg-gray_964 flex flex-col md:gap-[40px] gap-[60px] items-center justify-start pb-[40px] sm:px-[20px] px-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[100%]">
              <div className="bg-red_A204 h-[162px] pt-[9px] relative rounded-[12px] w-[99%]">
                <Radio
                  value="GoPremium"
                  className="font-normal mb-[-11.38px] ml-[20px] not-italic sm:text-[18px] md:text-[20px] text-[22px] text-left text-white_A700 z-[1]"
                  inputClassName="bg-gray_900_33 h-[19px] mb-[undefinedpx] mr-[5px] w-[19px] z-[1]"
                  checked={false}
                  name="TitleOne"
                  label="Go Premium"
                ></Radio>
                <div className="flex flex-col gap-[25px] items-start justify-start mb-[undefinedpx] mt-[auto] mx-[auto] w-[85%] z-[1]">
                  <Text
                    className="font-normal leading-[22.00px] not-italic text-left text-white_A700"
                    variant="body59"
                  >
                    Try premium membership and enjoy
                    <br />a full experience of our community.
                  </Text>
                  <Button
                    className="bg-gray_900_33 flex items-center justify-center px-[11px] py-[6px] rounded-[12px] text-center"
                    rightIcon={
                      <Img
                        src="images/img_arrowright_white_a700_14x14.svg"
                        className="ml-[2px] text-center rounded-[7px]"
                        alt="arrow_right"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700">
                      See more
                    </div>
                  </Button>
                </div>
                <div className="flex items-center justify-start mt-[auto] mx-[auto] w-[100%]">
                  <div className="flex flex-row items-start justify-between w-[100%]">
                    <div className="bg-green_402 h-[87px] mb-[50px] rounded-[43px] w-[19%]"></div>
                    <Img
                      src="images/img_oval_92x165.png"
                      className="h-[92px] md:h-[auto] mt-[45px] object-cover w-[auto]"
                      alt="Oval One"
                    />
                  </div>
                </div>
              </div>
              <List
                className="flex-col md:gap-[40px] gap-[60px] grid items-center w-[99%]"
                orientation="vertical"
              >
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body41"
                  >
                    Who to Follow
                  </Text>
                  <div className="flex flex-row items-start justify-start mt-[41px] w-[100%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="Avatar Four"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-end ml-[10px] w-[auto]">
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
                    <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center ml-[40px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_camera_bluegray_101.svg"
                        className="h-[14px]"
                        alt="camera"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[30px] w-[100%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="images/img_avatar_19.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="Avatar One"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-end ml-[10px] w-[auto]">
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
                    <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center ml-[40px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_camera_bluegray_101.svg"
                        className="h-[14px]"
                        alt="camera One"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row items-start justify-start mt-[30px] w-[100%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="Avatar Two"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-end ml-[10px] w-[auto]">
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
                    <Button className="bg-indigo_A206 flex h-[28px] items-center justify-center ml-[40px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_camera_bluegray_101.svg"
                        className="h-[14px]"
                        alt="camera Two"
                      />
                    </Button>
                  </div>
                  <Button
                    className="flex items-center justify-center mt-[42px] py-[2px] text-center"
                    rightIcon={
                      <Img
                        src="images/img_arrowright_gray_522.svg"
                        className="ml-[11px] text-center"
                        alt="arrow_right"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-gray_522 text-left tracking-[1.00px]">
                      See more
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body41"
                  >
                    Friends
                  </Text>
                  <div className="flex flex-row items-center justify-start mt-[41px] w-[100%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="images/img_avatar_21.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="Avatar Five"
                      />
                    </div>
                    <Text
                      className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      MadeInAmerica
                    </Text>
                    <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center ml-[136px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_checkmark_white_a700_18x18.svg"
                        className="h-[14px]"
                        alt="checkmark"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[30px] w-[100%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="images/img_avatar_22.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="Avatar One One"
                      />
                    </div>
                    <Text
                      className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      MadeInAmerica
                    </Text>
                    <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center ml-[136px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_checkmark_white_a700_18x18.svg"
                        className="h-[14px]"
                        alt="checkmark One"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row items-center justify-start mt-[30px] w-[100%]">
                    <div className="flex h-[38px] items-center justify-start w-[38px]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                        alt="Avatar Two One"
                      />
                    </div>
                    <Text
                      className="font-normal ml-[10px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      MadeInAmerica
                    </Text>
                    <Button className="bg-white_A700_33 flex h-[28px] items-center justify-center ml-[136px] my-[5px] p-[7px] rounded-[8px] w-[28px]">
                      <Img
                        src="images/img_checkmark_white_a700_18x18.svg"
                        className="h-[14px]"
                        alt="checkmark Two"
                      />
                    </Button>
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

export default SearchResultsPage;
