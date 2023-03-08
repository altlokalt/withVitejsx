import React from "react";

import { Img, Input, Text, List, Button } from "components";
import { CloseSVG } from "../../assets/images";

const MyProfilePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_103 flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
          <Img
            src="images/img_navigationwebsidebar.svg"
            className="h-[875px] w-[auto]"
            alt="NavigationWebSidebar"
          />
          <div className="flex md:flex-1 flex-col gap-[19px] items-center justify-start md:ml-[0] ml-[44px] md:mt-[0] mt-[40px] md:px-[20px] md:w-[100%] w-[59%]">
            <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] items-center justify-between p-[12px] rounded-[12px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                wrapClassName="bg-white_A700 flex md:w-[100%] pl-[9px] pr-[35px] py-[7px] sm:pr-[20px] sm:w-[100%] w-[auto]"
                name="FrameOne"
                placeholder="Search in social…"
                prefix={
                  <Img
                    src="images/img_search_bluegray_101_18x18.svg"
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
                className="font-normal mr-[29px] not-italic text-gray_522 text-left tracking-[1.00px] w-[auto]"
                variant="body67"
              >
                Filters
              </Text>
            </div>
            <div className="bg-gray_103 flex items-center justify-start md:w-[100%] w-[91%]">
              <div className="flex md:flex-col flex-row gap-[29px] items-start justify-between w-[100%]">
                <List
                  className="md:flex-1 flex-col gap-[30px] grid md:w-[100%] w-[53%]"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 flex flex-col items-center justify-start my-[0] p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[63px] w-[auto]">
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
                    <div className="flex flex-col items-start justify-start mt-[30px] pb-[2px] w-[100%]">
                      <Img
                        src="images/img_image_150x290.png"
                        className="h-[150px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Image One"
                      />
                      <div className="flex flex-col gap-[15px] items-center justify-start mt-[20px] w-[100%]">
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
                      <Text
                        className="font-normal mt-[31px] not-italic text-gray_522 text-left tracking-[1.00px] w-[auto]"
                        variant="body67"
                      >
                        Read More
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[16px] w-[100%]">
                      <div className="flex sm:flex-1 flex-row gap-[5px] items-center justify-start p-[6px] sm:w-[100%] w-[17%]">
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
                      <div className="flex sm:flex-1 flex-row gap-[6px] items-center justify-start sm:ml-[0] ml-[10px] p-[5px] sm:w-[100%] w-[17%]">
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
                      <div className="flex sm:flex-1 flex-row items-center justify-center sm:ml-[0] ml-[173px] p-[6px] sm:w-[100%] w-[20%]">
                        <Text
                          className="font-normal ml-[3px] not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          Share
                        </Text>
                        <Img
                          src="images/img_reply_gray_964.svg"
                          className="h-[14px] mr-[4px] w-[14px]"
                          alt="reply"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-center justify-end my-[0] pt-[30px] sm:px-[20px] px-[30px] rounded-[12px] w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[63px] w-[auto]">
                        <Img
                          src="images/img_image_48x48.png"
                          className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                          alt="Image Two"
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
                    <div className="flex flex-col items-start justify-start mt-[30px] w-[100%]">
                      <Img
                        src="images/img_image_150x386.png"
                        className="h-[150px] sm:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Image One One"
                      />
                      <div className="flex flex-col gap-[15px] items-center justify-end mt-[20px] w-[100%]">
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
                      <Text
                        className="font-normal mt-[60px] not-italic text-gray_522 text-left tracking-[1.00px] w-[auto]"
                        variant="body67"
                      >
                        Read More
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[96px] w-[100%]">
                      <div className="flex sm:flex-1 flex-row gap-[5px] items-start justify-start pt-[5px] px-[5px] sm:w-[100%] w-[17%]">
                        <Img
                          src="images/img_iconheartregular.svg"
                          className="h-[1px] mt-[3px] w-[auto]"
                          alt="IconHeartRegular"
                        />
                        <Text
                          className="font-normal not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          326
                        </Text>
                      </div>
                      <div className="flex sm:flex-1 flex-row gap-[6px] items-start justify-start sm:ml-[0] ml-[10px] pt-[5px] px-[5px] sm:w-[100%] w-[17%]">
                        <Img
                          src="images/img_iconcomment.svg"
                          className="h-[1px] mt-[3px] w-[auto]"
                          alt="IconComment"
                        />
                        <Text
                          className="font-normal not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          148
                        </Text>
                      </div>
                      <div className="flex sm:flex-1 flex-row items-start justify-center sm:ml-[0] ml-[173px] pt-[5px] px-[5px] sm:w-[100%] w-[20%]">
                        <Text
                          className="font-normal ml-[5px] not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          Share
                        </Text>
                        <Img
                          src="images/img_iconshare.svg"
                          className="h-[1px] mr-[6px] mt-[3px] w-[auto]"
                          alt="IconShare"
                        />
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start md:w-[100%] w-[45%]">
                  <div className="bg-white_A700 flex items-center justify-start p-[25px] sm:px-[20px] rounded-[12px] w-[100%]">
                    <div className="flex items-center justify-start pt-[21px] md:w-[100%] w-[98%]">
                      <div className="flex items-center justify-start pb-[28px] w-[100%]">
                        <List
                          className="flex-col gap-[9px] grid h-[320px] items-center w-[320px]"
                          orientation="vertical"
                        >
                          <div className="flex flex-row gap-[10px] items-center justify-between my-[0] w-[100%]">
                            <Img
                              src="images/img_image_100x100.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="Image Four"
                            />
                            <Img
                              src="images/img_image_42.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="Image One Two"
                            />
                            <Img
                              src="defaultNoData.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="Image Two"
                            />
                          </div>
                          <div className="flex flex-row gap-[10px] items-center justify-between my-[0] w-[100%]">
                            <Img
                              src="images/img_image_44.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="Image Five"
                            />
                            <Img
                              src="images/img_image_45.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="Image One Three"
                            />
                            <Img
                              src="defaultNoData.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="Image Two One"
                            />
                          </div>
                          <div className="flex flex-row gap-[10px] items-center justify-between my-[0] w-[100%]">
                            <Img
                              src="images/img_image_47.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="Image Six"
                            />
                            <Img
                              src="defaultNoData.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="Image One Four"
                            />
                            <Img
                              src="images/img_image_49.png"
                              className="h-[100px] md:h-[auto] object-cover rounded-[12px] w-[100px]"
                              alt="Image Two Two"
                            />
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex items-center justify-end p-[25px] sm:px-[20px] rounded-[12px] w-[100%]">
                    <List
                      className="flex-col gap-[25px] grid items-center pt-[44px] w-[98%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                        <div className="h-[58px] md:h-[69px] relative w-[38%]">
                          <Img
                            src="images/img_image_58x120.png"
                            className="h-[58px] m-[auto] object-cover rounded-[8px] w-[100%]"
                            alt="Image Seven"
                          />
                          <div className="absolute flex h-[58px] md:h-[69px] inset-[0] justify-end m-[auto] w-[100%]">
                            <div className="bg-gray_900_7e1 h-[69px] mt-[auto] mx-[auto] rounded-[8px] w-[100%]"></div>
                            <Img
                              src="images/img_play_white_a700_15x18.svg"
                              className="absolute bottom-[7%] h-[38px] inset-x-[0] mx-[auto] w-[38px]"
                              alt="play"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal leading-[20.00px] not-italic text-gray_964 text-left w-[100%]"
                            variant="body59"
                          >
                            Tropical Fresh Tourism Is Back In Full Swing In{" "}
                          </Text>
                          <Text
                            className="font-normal mt-[2px] not-italic text-gray_522 text-left w-[auto]"
                            variant="body59"
                          >
                            2 days ago
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                        <div className="h-[58px] relative w-[38%]">
                          <Img
                            src="images/img_image_50.png"
                            className="h-[58px] m-[auto] object-cover rounded-[8px] w-[100%]"
                            alt="Image Eight"
                          />
                          <div className="absolute bg-gray_900_7e1 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[10px] rounded-[8px] w-[100%]">
                            <Img
                              src="images/img_play_white_a700_15x18.svg"
                              className="h-[38px] w-[38px]"
                              alt="play One"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal leading-[20.00px] not-italic text-gray_964 text-left w-[100%]"
                            variant="body59"
                          >
                            How Timberland created the visual campaign of the{" "}
                          </Text>
                          <Text
                            className="font-normal mt-[2px] not-italic text-gray_522 text-left w-[auto]"
                            variant="body59"
                          >
                            2 days ago
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[100%]">
                        <div className="h-[58px] relative w-[38%]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[58px] m-[auto] object-cover rounded-[8px] w-[100%]"
                            alt="Image Nine"
                          />
                          <div className="absolute bg-gray_900_7e1 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[10px] rounded-[8px] w-[100%]">
                            <Img
                              src="images/img_play_white_a700_15x18.svg"
                              className="h-[38px] w-[38px]"
                              alt="play Two"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-normal leading-[20.00px] not-italic text-gray_964 text-left w-[100%]"
                            variant="body59"
                          >
                            Take your mobile photography to the next{" "}
                          </Text>
                          <Text
                            className="font-normal mt-[2px] not-italic text-gray_522 text-left w-[auto]"
                            variant="body59"
                          >
                            2 days ago
                          </Text>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 h-[875px] items-end justify-end md:ml-[0] ml-[19px] p-[5px] md:px-[20px] md:w-[100%] w-[27%]"
            style={{ backgroundImage: "url('images/img_right.png')" }}
          >
            <div className="flex flex-col gap-[11px] justify-start mr-[35px] mt-[40px] md:w-[100%] w-[74%]">
              <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[38%]">
                <Button className="bg-light_blue_200 cursor-pointer font-normal h-[48px] not-italic py-[10px] rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]">
                  1
                </Button>
                <div className="flex h-[48px] items-center justify-start w-[48px]">
                  <Img
                    src="defaultNoData.png"
                    className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                    alt="Avatar"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[30px] items-center justify-start mr-[22px] md:w-[100%] w-[93%]">
                <div className="flex flex-col items-center justify-start md:w-[100%] w-[76%]">
                  <div className="flex h-[108px] items-center justify-start w-[108px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[108px] md:h-[auto] object-cover rounded-[36px] w-[108px]"
                      alt="Avatar One"
                    />
                  </div>
                  <Text
                    className="font-normal mt-[9px] not-italic text-center text-white_A700 w-[auto]"
                    variant="body30"
                  >
                    Edward Ford
                  </Text>
                  <Text
                    className="font-normal mt-[7px] not-italic text-center text-gray_522 w-[auto]"
                    variant="body59"
                  >
                    @edwardford
                  </Text>
                </div>
                <div className="flex flex-row gap-[25px] items-center justify-center pr-[2px] md:w-[100%] w-[71%]">
                  <div className="flex flex-row gap-[6px] items-center justify-start w-[41%]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body50"
                    >
                      518
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_522 text-left w-[auto]"
                      variant="body50"
                    >
                      Posts
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-center w-[47%]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body50"
                    >
                      22k
                    </Text>
                    <Text
                      className="font-normal mx-[3px] not-italic text-gray_522 text-left w-[auto]"
                      variant="body50"
                    >
                      Friends
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <Button className="bg-green_402 cursor-pointer font-normal min-w-[217px] not-italic py-[20px] rounded-[29px] text-[14px] text-center text-white_A700 w-[auto]">
                      Edit Profile
                    </Button>
                    <Button className="border-[2px] border-gray_500_33 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                      <Img
                        src="images/img_overflowmenu_bluegray_101.svg"
                        className="h-[22px]"
                        alt="overflowmenu Two"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start justify-start mt-[40px] pt-[2px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[1.00px] w-[auto]"
                      variant="body67"
                    >
                      About
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-left text-white_A700_cc"
                      variant="body59"
                    >
                      Travel, Adventure & Lifestyle
                      <br />
                      Photographer & Digital Influencer
                      <br />
                      Nikon Ambassador
                      <br />
                      Let&#39;s Work:
                      <br />
                      ed.ford@mail.com
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-start mt-[58px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body50"
                    >
                      Friends
                    </Text>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="gap-[15px] grid grid-cols-5 justify-center min-h-[auto] w-[100%]">
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_45x45.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Two"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Three"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_2.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Four"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Five"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_4.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Six"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Seven"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_6.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Eight"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_7.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Nine"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_8.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Ten"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Eleven"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_10.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Twelve"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_11.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Thirteen"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Fourteen"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="images/img_avatar_13.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Fifteen"
                          />
                        </div>
                        <div className="flex flex-1 h-[45px] items-center justify-start w-[100%]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Sixteen"
                          />
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
    </>
  );
};

export default MyProfilePage;
