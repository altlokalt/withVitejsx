import React from "react";

import { Img, Button, Text, List } from "components";

const GalleryPage = () => {
  return (
    <>
      <div className="bg-gray_103 flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
          <Img
            src="images/img_navigationwebsidebar.svg"
            className="h-[875px] w-[auto]"
            alt="NavigationWebSidebar"
          />
          <div className="flex md:flex-1 flex-col gap-[19px] justify-start md:ml-[0] ml-[44px] md:mt-[0] mt-[40px] md:px-[20px] md:w-[100%] w-[26%]">
            <Button
              className="bg-gray_500_33 flex items-center justify-center mr-[313px] pl-[20px] pr-[22px] py-[20px] rounded-[12px] sm:pr-[20px] text-center"
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
            <div className="h-[722px] md:ml-[0] ml-[28px] relative sm:w-[100%] w-[94%]">
              <div className="bg-white_A700 h-[722px] m-[auto] rounded-[12px] w-[100%]"></div>
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-[auto] sm:px-[20px] px-[21px] w-[85%]">
                <div className="flex flex-col items-center justify-start md:w-[100%] w-[82%]">
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
                <div className="flex flex-row gap-[22px] items-center justify-start mt-[30px] px-[6px] md:w-[100%] w-[75%]">
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
                <div className="flex flex-col items-start justify-start mt-[30px] w-[100%]">
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
                      src="images/img_mail_bluegray_101_48x48.svg"
                      className="h-[48px] w-[48px]"
                      alt="mail"
                    />
                    <Button className="border-[2px] border-gray_500_33 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                      <Img
                        src="images/img_overflowmenu_bluegray_101_38x38.svg"
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
          <div className="md:h-[875px] h-[914px] md:ml-[0] ml-[73px] md:px-[20px] relative md:w-[100%] w-[56%]">
            <div
              className="absolute bg-cover bg-no-repeat flex h-[875px] inset-x-[0] items-center justify-start mx-[auto] p-[40px] sm:px-[20px] top-[0] w-[100%]"
              style={{ backgroundImage: "url('images/img_side.svg')" }}
            >
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mb-[742px] mt-[5px] md:w-[100%] w-[97%]">
                <div className="flex flex-row items-start justify-between sm:w-[100%] w-[35%]">
                  <Text
                    className="font-normal not-italic text-gray_522 text-left w-[auto]"
                    variant="body59"
                  >
                    Posts
                  </Text>
                  <div className="flex flex-col gap-[7px] items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-center text-gray_964 w-[auto]"
                      variant="body59"
                    >
                      Photos
                    </Text>
                    <div className="bg-gray_964 h-[2px] w-[85%]"></div>
                  </div>
                  <Text
                    className="font-normal not-italic text-center text-gray_522 w-[auto]"
                    variant="body59"
                  >
                    Videos
                  </Text>
                  <Text
                    className="font-normal not-italic text-center text-gray_522 w-[auto]"
                    variant="body59"
                  >
                    Events
                  </Text>
                </div>
                <div className="flex flex-row gap-[20px] items-center justify-between sm:w-[100%] w-[15%]">
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
            <List
              className="absolute bottom-[0] flex-col gap-[13px] grid inset-x-[0] items-center mx-[auto] w-[87%]"
              orientation="vertical"
            >
              <div className="gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between my-[0] w-[100%]">
                <Img
                  src="defaultNoData.png"
                  className="flex-1 h-[188px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="Image One"
                />
                <Img
                  src="images/img_image_31.png"
                  className="flex-1 h-[188px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="Image One"
                />
                <Img
                  src="defaultNoData.png"
                  className="flex-1 h-[188px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="Image Two"
                />
              </div>
              <div className="gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between my-[0] w-[100%]">
                <Img
                  src="defaultNoData.png"
                  className="flex-1 h-[188px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="Image Two"
                />
                <Img
                  src="images/img_image_34.png"
                  className="flex-1 h-[188px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="Image One One"
                />
                <Img
                  src="defaultNoData.png"
                  className="flex-1 h-[188px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="Image Two One"
                />
              </div>
              <div className="gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between my-[0] w-[100%]">
                <Img
                  src="images/img_image_36.png"
                  className="flex-1 h-[188px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="Image Three"
                />
                <Img
                  src="defaultNoData.png"
                  className="flex-1 h-[188px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="Image One Two"
                />
                <Img
                  src="images/img_image_38.png"
                  className="flex-1 h-[188px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="Image Two Two"
                />
              </div>
              <div className="gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between my-[0] w-[100%]">
                <Img
                  src="defaultNoData.png"
                  className="flex-1 h-[188px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="Image Four"
                />
                <Img
                  src="images/img_image_40.png"
                  className="flex-1 h-[188px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="Image One Three"
                />
                <Img
                  src="defaultNoData.png"
                  className="flex-1 h-[188px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                  alt="Image Two Three"
                />
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
