import React from "react";

import { Img, Button, Text, List } from "components";

const UserProfilePage = () => {
  return (
    <>
      <div className="bg-gray_103 flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
          <Img
            src="images/img_navigationwebsidebar.svg"
            className="h-[874px] w-[auto]"
            alt="NavigationWebSidebar"
          />
          <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start md:mt-[0] mt-[40px] md:px-[20px] md:w-[100%] w-[auto]">
            <Button
              className="bg-gray_500_33 flex items-center justify-center pl-[20px] pr-[22px] py-[20px] rounded-[12px] sm:pr-[20px] text-center"
              leftIcon={
                <Img
                  src="images/img_arrowleft_gray_522.svg"
                  className="mr-[10px] text-center"
                  alt="arrow_left"
                />
              }
            >
              <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-gray_522 text-left">
                Back
              </div>
            </Button>
            <div className="bg-white_A700 flex items-center justify-end pt-[30px] sm:px-[20px] px-[30px] rounded-[12px] w-[100%]">
              <div className="flex flex-col gap-[30px] items-center justify-start mt-[10px] w-[100%]">
                <div className="flex flex-col gap-[30px] items-center justify-start md:w-[100%] w-[76%]">
                  <div className="flex flex-col items-center justify-start md:w-[100%] w-[95%]">
                    <div className="flex h-[108px] items-center justify-start w-[108px]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[108px] md:h-[auto] object-cover rounded-[36px] w-[108px]"
                        alt="Avatar"
                      />
                    </div>
                    <Text
                      className="font-normal mt-[9px] not-italic text-center text-gray_964 w-[auto]"
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
                  <div className="flex flex-row gap-[22px] items-center justify-between px-[6px] w-[100%]">
                    <div className="flex flex-row gap-[10px] items-center justify-start w-[42%]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
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
                    <div className="flex flex-row gap-[8px] items-center justify-center w-[48%]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body50"
                      >
                        22k
                      </Text>
                      <Text
                        className="font-normal mr-[2px] not-italic text-gray_522 text-left w-[auto]"
                        variant="body50"
                      >
                        Friends
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <Button
                      className="bg-green_402 flex items-center justify-center px-[35px] py-[20px] rounded-[12px] sm:px-[20px] text-center"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_white_a700_18x18.svg"
                          className="mr-[8px] text-center"
                          alt="checkmark"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700">
                        Freinds
                      </div>
                    </Button>
                    <Img
                      src="images/img_mail_bluegray_101.svg"
                      className="h-[48px] w-[48px]"
                      alt="mail"
                    />
                    <Button className="border-[2px] border-gray_500_33 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                      <Img
                        src="images/img_overflowmenu_bluegray_101.svg"
                        className="h-[22px]"
                        alt="overflowmenu"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start justify-start mt-[40px] pt-[2px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_964 text-left tracking-[1.00px] w-[auto]"
                      variant="body67"
                    >
                      About
                    </Text>
                    <Text
                      className="font-normal leading-[22.00px] not-italic text-gray_522 text-left"
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
                      className="font-normal not-italic text-gray_964 text-left w-[auto]"
                      variant="body50"
                    >
                      Friends
                    </Text>
                    <List
                      className="flex-col gap-[15px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-[100%]">
                        <div className="flex h-[45px] items-center justify-start w-[45px]">
                          <Img
                            src="images/img_avatar_45x45.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar One"
                          />
                        </div>
                        <div className="flex h-[45px] items-center justify-start w-[45px]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar One"
                          />
                        </div>
                        <div className="flex h-[45px] items-center justify-start w-[45px]">
                          <Img
                            src="images/img_avatar_2.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Two"
                          />
                        </div>
                        <div className="flex h-[45px] items-center justify-start w-[45px]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Three"
                          />
                        </div>
                        <div className="flex h-[45px] items-center justify-start w-[45px]">
                          <Img
                            src="images/img_avatar_4.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Four"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-[100%]">
                        <div className="flex h-[45px] items-center justify-start w-[45px]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Two"
                          />
                        </div>
                        <div className="flex h-[45px] items-center justify-start w-[45px]">
                          <Img
                            src="images/img_avatar_6.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar One One"
                          />
                        </div>
                        <div className="flex h-[45px] items-center justify-start w-[45px]">
                          <Img
                            src="images/img_avatar_7.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Two One"
                          />
                        </div>
                        <div className="flex h-[45px] items-center justify-start w-[45px]">
                          <Img
                            src="images/img_avatar_8.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Three One"
                          />
                        </div>
                        <div className="flex h-[45px] items-center justify-start w-[45px]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Four One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-[15px] items-center justify-between w-[100%]">
                        <div className="flex h-[45px] items-center justify-start w-[45px]">
                          <Img
                            src="images/img_avatar_10.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Three"
                          />
                        </div>
                        <div className="flex h-[45px] items-center justify-start w-[45px]">
                          <Img
                            src="images/img_avatar_11.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar One Two"
                          />
                        </div>
                        <div className="flex h-[45px] items-center justify-start w-[45px]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Two Two"
                          />
                        </div>
                        <div className="flex h-[45px] items-center justify-start w-[45px]">
                          <Img
                            src="images/img_avatar_13.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Three Two"
                          />
                        </div>
                        <div className="flex h-[45px] items-center justify-start w-[45px]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[45px] md:h-[auto] object-cover rounded-[14px] w-[45px]"
                            alt="Avatar Four Two"
                          />
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:h-[1024px] h-[1141px] md:px-[20px] relative md:w-[100%] w-[56%]">
            <div
              className="absolute bg-cover bg-no-repeat flex h-[1024px] inset-x-[0] items-center justify-start mx-[auto] p-[40px] sm:px-[20px] top-[0] w-[100%]"
              style={{ backgroundImage: "url('images/img_side.svg')" }}
            >
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mb-[891px] mt-[5px] md:w-[100%] w-[97%]">
                <div className="flex flex-row items-start justify-between sm:w-[100%] w-[40%]">
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[15%]">
                    <Text
                      className="font-normal not-italic text-gray_964 text-left w-[auto]"
                      variant="body59"
                    >
                      Posts
                    </Text>
                    <div className="bg-gray_964 h-[2px] w-[100%]"></div>
                  </div>
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-center text-gray_522 w-[auto]"
                      variant="body59"
                    >
                      Photos
                    </Text>
                  </div>
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-center text-gray_522 w-[auto]"
                      variant="body59"
                    >
                      Videos
                    </Text>
                  </div>
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-center text-gray_522 w-[auto]"
                      variant="body59"
                    >
                      Events
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-[20px] items-center justify-between sm:w-[100%] w-[17%]">
                  <Button className="bg-light_blue_200 cursor-pointer font-normal h-[48px] not-italic py-[10px] rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]">
                    1
                  </Button>
                  <div className="flex h-[48px] items-center justify-start w-[48px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                      alt="Avatar Four"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] w-[87%]">
              <List
                className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-[30px] items-center justify-start mb-[80px] sm:ml-[0] w-[100%]">
                  <div className="bg-white_A700 border-[2px] border-gray_500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[66%]">
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
                        alt="overflowmenu One"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[30px] pb-[2px] w-[100%]">
                      <Img
                        src="images/img_image_150x272.png"
                        className="h-[150px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Image One"
                      />
                      <div className="flex flex-col gap-[15px] items-center justify-start mt-[20px] w-[100%]">
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-gray_964 text-left w-[100%]"
                          variant="body50"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
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
                        className="font-normal mt-[11px] not-italic text-gray_522 text-left tracking-[1.00px] w-[auto]"
                        variant="body67"
                      >
                        Read More
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[16px] w-[100%]">
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[6px] w-[24%]">
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
                      <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[24%]">
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
                      <div className="flex flex-row items-center justify-center ml-[59px] p-[6px] w-[28%]">
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
                  <div className="bg-white_A700 border-[2px] border-gray_500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[66%]">
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
                        src="images/img_image_5.png"
                        className="h-[150px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Image Three"
                      />
                      <div className="flex flex-col gap-[15px] items-center justify-start mt-[20px] w-[100%]">
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-gray_964 text-left w-[100%]"
                          variant="body50"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
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
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[24%]">
                        <Img
                          src="images/img_favorite_bluegray_101.svg"
                          className="h-[14px] w-[14px]"
                          alt="favorite One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          326
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[24%]">
                        <Img
                          src="images/img_laptop_bluegray_101.svg"
                          className="h-[14px] w-[14px]"
                          alt="laptop One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          148
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center ml-[59px] p-[5px] w-[28%]">
                        <Text
                          className="font-normal ml-[5px] not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          Share
                        </Text>
                        <Img
                          src="images/img_reply_gray_964.svg"
                          className="h-[14px] mr-[6px] w-[14px]"
                          alt="reply One"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[30px] items-center justify-start sm:ml-[0] w-[100%]">
                  <div className="bg-white_A700 border-[2px] border-gray_500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
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
                        alt="overflowmenu Two"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[30px] pb-[2px] w-[100%]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[150px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Image One One"
                      />
                      <div className="flex flex-col gap-[15px] items-center justify-start mt-[20px] w-[100%]">
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-gray_964 text-left w-[100%]"
                          variant="body50"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
                        </Text>
                        <Text
                          className="font-normal leading-[20.00px] not-italic text-gray_522 text-left"
                          variant="body59"
                        >
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.
                          <br />
                          warm and sunny California.warm and sunny California.
                        </Text>
                      </div>
                      <Text
                        className="font-normal mt-[11px] not-italic text-gray_522 text-left tracking-[1.00px] w-[auto]"
                        variant="body67"
                      >
                        Read More
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start mt-[16px] w-[100%]">
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[6px] w-[24%]">
                        <Img
                          src="images/img_favorite_bluegray_101.svg"
                          className="h-[14px] w-[14px]"
                          alt="favorite One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          326
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[24%]">
                        <Img
                          src="images/img_laptop_bluegray_101.svg"
                          className="h-[14px] w-[14px]"
                          alt="laptop One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          148
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center ml-[59px] p-[6px] w-[28%]">
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
                  <div className="bg-white_A700 border-[2px] border-gray_500_33 border-solid flex flex-col items-center justify-start p-[30px] sm:px-[20px] rounded-[12px] w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-center justify-between w-[66%]">
                        <Img
                          src="images/img_image_48x48.png"
                          className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                          alt="Image Two One"
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
                        alt="overflowmenu One One"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[30px] w-[100%]">
                      <Img
                        src="images/img_image_7.png"
                        className="h-[150px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                        alt="Image Three One"
                      />
                      <div className="flex flex-col gap-[15px] items-center justify-start mt-[20px] w-[100%]">
                        <Text
                          className="font-normal leading-[22.00px] not-italic text-gray_964 text-left w-[100%]"
                          variant="body50"
                        >
                          The Best Fashion Instagrams of the Week: Céline Dion,
                          Lizzo
                        </Text>
                        <Text
                          className="font-normal leading-[20.00px] not-italic text-gray_522 text-left"
                          variant="body59"
                        >
                          If you are looking for a break from the cold, take a
                          cue from Lizzo: This week, the singer headed to
                          Disneyland in warm and sunny California.
                          <br />
                          warm and sunny California.warm and sunny California.
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
                      <div className="flex flex-row gap-[5px] items-center justify-start p-[5px] w-[24%]">
                        <Img
                          src="images/img_favorite_bluegray_101.svg"
                          className="h-[14px] w-[14px]"
                          alt="favorite One One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          326
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[6px] items-center justify-start ml-[10px] p-[5px] w-[24%]">
                        <Img
                          src="images/img_laptop_bluegray_101.svg"
                          className="h-[14px] w-[14px]"
                          alt="laptop One One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          148
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-center ml-[59px] p-[5px] w-[28%]">
                        <Text
                          className="font-normal ml-[5px] not-italic text-gray_964 text-left w-[auto]"
                          variant="body59"
                        >
                          Share
                        </Text>
                        <Img
                          src="images/img_reply_gray_964.svg"
                          className="h-[14px] mr-[6px] w-[14px]"
                          alt="reply One One"
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

export default UserProfilePage;
