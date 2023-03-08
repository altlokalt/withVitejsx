import React from "react";

import { Img, Line, Text, List, Button, Input } from "components";

const DarkProfilePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-abel sm:gap-[20px] md:gap-[20px] items-start mx-[auto] sm:pr-[20px] pr-[241px] md:pr-[40px] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start w-[75px]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-bluegray_912 border-[1px] border-bluegray_913 border-solid flex items-end justify-start w-[100%]">
                <div className="flex flex-col gap-[38px] items-start justify-start mb-[26px] mt-[20px] md:w-[100%] w-[74%]">
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] md:w-[100%] w-[95%]">
                    <Img
                      src="images/img_location_green_400.svg"
                      className="h-[30px] w-[30px]"
                      alt="location"
                    />
                    <div className="flex flex-row gap-[21px] items-start justify-between mt-[42px] w-[100%]">
                      <Img
                        src="images/img_settings_green_400.svg"
                        className="h-[28px] w-[28px]"
                        alt="settings"
                      />
                      <Line className="bg-green_400 h-[20px] mb-[6px] mt-[2px] w-[2px]" />
                    </div>
                    <Img
                      src="images/img_computer_bluegray_405.svg"
                      className="h-[28px] mt-[42px] w-[28px]"
                      alt="computer"
                    />
                    <Img
                      src="images/img_user_bluegray_405.svg"
                      className="h-[28px] mt-[42px] w-[28px]"
                      alt="user"
                    />
                    <Img
                      src="images/img_call_bluegray_405.svg"
                      className="h-[28px] mt-[42px] w-[28px]"
                      alt="call"
                    />
                    <Img
                      src="images/img_bookmark.svg"
                      className="h-[28px] mt-[42px] w-[28px]"
                      alt="bookmark"
                    />
                    <Img
                      src="images/img_settings_bluegray_405.svg"
                      className="h-[28px] mt-[42px] w-[28px]"
                      alt="settings One"
                    />
                    <Img
                      src="images/img_brightness.svg"
                      className="h-[28px] mt-[480px] w-[28px]"
                      alt="brightness"
                    />
                  </div>
                  <div className="bg-gray_110 flex h-[36px] items-center justify-start p-[3px] rounded-[50%] w-[36px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[30px] md:h-[auto] rounded-[50%] w-[30px]"
                      alt="User One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="bg-gray_910 flex flex-1 flex-col justify-end pb-[75px] md:px-[20px] shadow-bs10 w-[100%]">
          <div className="flex flex-col relative w-[100%]">
            <div className="h-[160px] mx-[auto] w-[100%]">
              <Img
                src="defaultNoData.png"
                className="h-[160px] m-[auto] object-cover w-[100%]"
                alt="bgimg"
              />
              <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[9%] w-[89%]">
                <Text
                  className="not-italic text-left text-white_A700 w-[auto]"
                  variant="body45"
                >
                  My Profile
                </Text>
                <Img
                  src="images/img_settings_white_a700.svg"
                  className="h-[22px] w-[22px]"
                  alt="settings Two"
                />
              </div>
            </div>
            <div className="flex h-[80px] items-center justify-start mt-[-40px] mx-[auto] w-[80px] z-[1]">
              <div className="bg-gray_910 border-[1px] border-gray_110 border-solid flex h-[80px] items-center justify-start p-[5px] rounded-[50%] w-[80px]">
                <Img
                  src="images/img_user_70x70.png"
                  className="h-[70px] md:h-[auto] rounded-[50%] w-[70px]"
                  alt="User Two"
                />
              </div>
            </div>
          </div>
          <Text
            className="font-normal md:ml-[0] ml-[101px] mr-[121px] mt-[15px] not-italic text-bluegray_202 text-left w-[auto]"
            variant="body50"
          >
            Adam Zampa
          </Text>
          <Text
            className="font-normal md:ml-[0] ml-[85px] mr-[108px] mt-[4px] not-italic text-gray_504 text-left w-[auto]"
            variant="body59"
          >
            Front end Developer
          </Text>
          <Text
            className="font-normal leading-[22.00px] md:ml-[0] ml-[24px] mr-[67px] mt-[49px] not-italic text-gray_504 text-left"
            variant="body54"
          >
            If several languages coalesce, the
            <br />
            grammar of the resulting language is
            <br />
            more simple.
          </Text>
          <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[24px] mr-[auto] mt-[37px] md:w-[100%] w-[35%]">
            <Img
              src="images/img_user_gray_504.svg"
              className="h-[15px] w-[15px]"
              alt="user Three"
            />
            <Text
              className="font-normal not-italic text-gray_504 text-left w-[auto]"
              variant="body54"
            >
              Adam Zampa
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[24px] mr-[auto] mt-[16px] md:w-[100%] w-[39%]">
            <Img
              src="images/img_bxmessageroundeddots.svg"
              className="h-[15px] w-[15px]"
              alt="bxmessageroundeddots"
            />
            <Text
              className="font-normal not-italic text-gray_504 text-left w-[auto]"
              variant="body54"
            >
              adc@123.com
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[24px] mr-[auto] mt-[18px] md:w-[100%] w-[38%]">
            <Img
              src="images/img_location_gray_504.svg"
              className="h-[15px] mt-[3px] w-[15px]"
              alt="location One"
            />
            <Text
              className="font-normal not-italic text-gray_504 text-left w-[auto]"
              variant="body54"
            >
              California, USA
            </Text>
          </div>
          <div className="flex items-center justify-start md:ml-[0] ml-[24px] mr-[31px] mt-[55px] md:w-[100%] w-[82%]">
            <div className="flex flex-col gap-[9px] items-center justify-start w-[100%]">
              <div className="flex flex-row items-start justify-between w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_504 text-left uppercase w-[auto]"
                  variant="body69"
                >
                  Media
                </Text>
                <Text
                  className="font-normal mt-[2px] not-italic text-green_400 text-left w-[auto]"
                  variant="body67"
                >
                  Show all
                </Text>
              </div>
              <div className="flex flex-row gap-[8px] items-center justify-between w-[100%]">
                <List
                  className="sm:flex-col flex-row gap-[8px] grid grid-cols-2 w-[66%]"
                  orientation="horizontal"
                >
                  <div className="flex h-[76px] items-center justify-start sm:ml-[0] w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[76px] md:h-[auto] object-cover rounded-[4px] w-[76px]"
                      alt="ImgOne"
                    />
                  </div>
                  <div className="flex h-[76px] items-center justify-start sm:ml-[0] w-[100%]">
                    <Img
                      src="images/img_img2.png"
                      className="h-[76px] md:h-[auto] object-cover rounded-[4px] w-[76px]"
                      alt="ImgTwo"
                    />
                  </div>
                </List>
                <div className="flex h-[76px] items-center justify-start w-[76px]">
                  <div className="h-[76px] relative w-[76px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[76px] m-[auto] object-cover rounded-[4px] w-[76px]"
                      alt="ImgThree"
                    />
                    <Button className="absolute bg-gray_800_b2 cursor-pointer font-normal h-[100%] inset-[0] justify-center leading-[normal] m-[auto] not-italic py-[28px] rounded-[4px] text-[15px] text-center text-white_A700 w-[76px]">
                      + 15
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text
            className="font-normal md:ml-[0] ml-[23px] mr-[207px] mt-[47px] not-italic text-gray_600 text-left uppercase w-[auto]"
            variant="body69"
          >
            ATTACHED FILES
          </Text>
          <List
            className="flex-col gap-[4px] grid items-center mt-[15px] mx-[auto] w-[84%]"
            orientation="vertical"
          >
            <div className="border-[1px] border-bluegray_912 border-solid flex items-center justify-start p-[9px] rounded-[4px] w-[100%]">
              <div className="flex flex-row items-start justify-start md:w-[100%] w-[97%]">
                <Button className="bg-green_400_33 flex h-[29px] items-center justify-center my-[4px] p-[7px] rounded-[14px] w-[29px]">
                  <Img
                    src="images/img_file_green_400.svg"
                    className="h-[15px]"
                    alt="file"
                  />
                </Button>
                <div className="flex flex-col items-start justify-start ml-[16px] w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_202 text-left w-[auto]"
                    variant="body59"
                  >
                    design-phase-...
                  </Text>
                  <Text
                    className="font-normal mt-[3px] not-italic text-gray_504 text-left w-[auto]"
                    variant="body61"
                  >
                    12.5 MB
                  </Text>
                </div>
                <Img
                  src="images/img_download_gray_504.svg"
                  className="h-[15px] ml-[51px] mt-[10px] w-[15px]"
                  alt="download"
                />
                <Img
                  src="images/img_user_gray_504_15x15.svg"
                  className="h-[15px] ml-[16px] mt-[10px] w-[15px]"
                  alt="user Four"
                />
              </div>
            </div>
            <Line className="self-center h-[1px] bg-bluegray_200_3f w-[100%]" />
            <div className="border-[1px] border-bluegray_912 border-solid flex items-center justify-start p-[9px] rounded-[4px] w-[100%]">
              <div className="flex flex-row items-start justify-start md:w-[100%] w-[97%]">
                <Button className="bg-green_400_33 flex h-[29px] items-center justify-center my-[4px] p-[6px] rounded-[14px] w-[29px]">
                  <Img
                    src="images/img_bookmark_green_400.svg"
                    className="h-[15px]"
                    alt="bookmark One"
                  />
                </Button>
                <div className="flex flex-col items-start justify-start ml-[16px] w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_202 text-left w-[auto]"
                    variant="body59"
                  >
                    Image-1.jpg
                  </Text>
                  <Text
                    className="font-normal mt-[3px] not-italic text-gray_504 text-left w-[auto]"
                    variant="body61"
                  >
                    4.2 MB
                  </Text>
                </div>
                <Img
                  src="images/img_download_gray_504.svg"
                  className="h-[15px] ml-[72px] mt-[10px] w-[15px]"
                  alt="download One"
                />
                <Img
                  src="images/img_user_gray_504_15x15.svg"
                  className="h-[15px] ml-[16px] mt-[10px] w-[15px]"
                  alt="user Five"
                />
              </div>
            </div>
            <Line className="self-center h-[1px] bg-bluegray_200_3f w-[100%]" />
            <div className="border-[1px] border-bluegray_912 border-solid flex items-center justify-start p-[9px] rounded-[4px] w-[100%]">
              <div className="flex flex-row items-start justify-start mb-[2px] md:w-[100%] w-[97%]">
                <Button className="bg-green_400_33 flex h-[29px] items-center justify-center my-[4px] p-[6px] rounded-[14px] w-[29px]">
                  <Img
                    src="images/img_bookmark_green_400.svg"
                    className="h-[15px]"
                    alt="bookmark Two"
                  />
                </Button>
                <div className="flex flex-col items-start justify-start ml-[16px] w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_202 text-left w-[auto]"
                    variant="body59"
                  >
                    Image-2.jpg
                  </Text>
                  <Text
                    className="font-normal mt-[2px] not-italic text-gray_504 text-left w-[auto]"
                    variant="body61"
                  >
                    3.1 MB
                  </Text>
                </div>
                <Img
                  src="images/img_download_gray_504.svg"
                  className="h-[15px] ml-[73px] mt-[10px] w-[15px]"
                  alt="download Two"
                />
                <Img
                  src="images/img_user_gray_504_15x15.svg"
                  className="h-[15px] ml-[16px] mt-[10px] w-[15px]"
                  alt="user Six"
                />
              </div>
            </div>
            <Line className="self-center h-[1px] bg-bluegray_200_3f w-[100%]" />
            <div className="border-[1px] border-bluegray_912 border-solid flex items-center justify-start p-[8px] rounded-[4px] w-[100%]">
              <div className="flex flex-row items-end justify-start mb-[3px] md:w-[100%] w-[96%]">
                <Button className="bg-green_400_33 flex h-[29px] items-center justify-center mb-[4px] mt-[7px] p-[7px] rounded-[14px] w-[29px]">
                  <Img
                    src="images/img_file_green_400.svg"
                    className="h-[15px]"
                    alt="file One"
                  />
                </Button>
                <div className="flex flex-col items-start justify-start ml-[16px] w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_202 text-left w-[auto]"
                    variant="body59"
                  >
                    Landing-A.zip
                  </Text>
                  <Text
                    className="font-normal mt-[5px] not-italic text-gray_504 text-left w-[auto]"
                    variant="body61"
                  >
                    6.7 MB
                  </Text>
                </div>
                <Img
                  src="images/img_download_gray_504.svg"
                  className="h-[15px] ml-[65px] my-[12px] w-[15px]"
                  alt="download Three"
                />
                <Img
                  src="images/img_user_gray_504_15x15.svg"
                  className="h-[15px] ml-[16px] my-[12px] w-[15px]"
                  alt="user Seven"
                />
              </div>
            </div>
          </List>
        </div>
        <div className="flex-1 h-[1080px] relative w-[100%]">
          <Img
            src="images/img_bgimg_1080x1545.png"
            className="h-[1080px] m-[auto] object-cover w-[100%]"
            alt="bgimg One"
          />
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
            <Line className="bg-bluegray_910 h-[1px] w-[100%]" />
            <div className="bg-bluegray_900_7f flex md:flex-col flex-row md:gap-[20px] items-center justify-end p-[24px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_user_gray_504_15x15.svg"
                className="h-[22px] w-[22px]"
                alt="user Eight"
              />
              <Img
                src="images/img_user_gray_504_22x22.svg"
                className="h-[22px] md:ml-[0] ml-[21px] w-[22px]"
                alt="user Nine"
              />
              <div className="flex md:flex-1 items-center justify-start mb-[2px] md:ml-[0] ml-[18px] md:w-[100%] w-[88%]">
                <Input
                  className="font-normal leading-[normal] not-italic pl-[16px] pr-[12px] py-[12px] text-[14px] placeholder:text-gray_504 text-gray_504 text-left w-[100%]"
                  wrapClassName="bg-bluegray_910 border-[1px] border-bluegray_910 border-solid rounded-[6px] w-[100%]"
                  name="Typeyourmessage One"
                  placeholder="Type your message..."
                ></Input>
              </div>
              <Img
                src="images/img_microphone.svg"
                className="h-[22px] md:ml-[0] ml-[18px] w-[22px]"
                alt="microphone"
              />
              <Button className="bg-green_400 border-[1px] border-green_400 border-solid flex h-[43px] items-center justify-center mb-[2px] md:ml-[0] ml-[15px] p-[10px] rounded-[6px] w-[43px]">
                <Img
                  src="images/img_send_white_a700.svg"
                  className="h-[22px]"
                  alt="send"
                />
              </Button>
            </div>
          </div>
          <div className="absolute flex flex-col h-[max-content] inset-[0] items-start justify-center m-[auto] w-[97%]">
            <div className="flex items-center justify-start md:w-[100%] w-[14%]">
              <div className="flex flex-col justify-start w-[100%]">
                <Text
                  className="bg-gray_801 font-normal h-[47px] md:ml-[0] ml-[44px] not-italic pl-[19px] sm:pr-[20px] pr-[35px] py-[13px] rounded-[3px] text-left text-shadow-ts text-white_A700_cc w-[162px]"
                  variant="body54"
                >
                  Good morning 😊
                </Text>
                <div className="flex flex-row gap-[16px] items-end justify-start md:w-[100%] w-[44%]">
                  <div className="flex h-[28px] items-center justify-start w-[28px]">
                    <Img
                      src="images/img_user_28x28.png"
                      className="h-[28px] md:h-[auto] rounded-[50%] w-[28px]"
                      alt="user Ten"
                    />
                  </div>
                  <Text
                    className="mt-[10px] not-italic text-gray_504 text-left w-[auto]"
                    variant="body66"
                  >
                    10:07 am
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start md:ml-[0] ml-[1051px] mt-[24px] md:w-[100%] w-[30%]">
              <div className="flex flex-col gap-[12px] justify-start w-[100%]">
                <div className="bg-green_400_3a flex items-start justify-end p-[11px] rounded-[3px] w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[7px] mt-[2px] not-italic text-left text-white_A700_cc w-[auto]"
                    variant="body54"
                  >
                    Good morning, How are you? What about our next meeting?
                  </Text>
                </div>
                <div className="flex flex-row gap-[7px] items-start justify-end ml-[auto] md:w-[100%] w-[15%]">
                  <Img
                    src="images/img_cursor.svg"
                    className="h-[14px] w-[14px]"
                    alt="cursor"
                  />
                  <Text
                    className="not-italic text-gray_504 text-left w-[auto]"
                    variant="body66"
                  >
                    10:12 am
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start mt-[26px] md:w-[100%] w-[56%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-col gap-[9px] items-start justify-start md:ml-[0] ml-[44px] md:w-[100%] w-[95%]">
                  <Input
                    className="font-normal leading-[normal] not-italic pl-[19px] sm:pr-[20px] pr-[35px] py-[13px] text-[15px] text-left placeholder:text-white_A700_cc text-white_A700_cc w-[100%]"
                    wrapClassName="bg-gray_801 rounded-[3px] shadow-bs10 sm:w-[100%] w-[60%]"
                    name="time Two"
                    placeholder="Yeah everything is fine. Our next meeting tomorrow at 10.00 AM"
                  ></Input>
                  <Input
                    className="font-normal leading-[normal] not-italic pl-[19px] sm:pr-[20px] pr-[35px] py-[13px] text-[15px] text-left placeholder:text-white_A700_cc text-white_A700_cc w-[100%]"
                    wrapClassName="bg-gray_801 rounded-[3px] shadow-bs10 w-[100%]"
                    name="msgFour"
                    placeholder="Hey, I&#39;m going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁."
                  ></Input>
                </div>
                <div className="flex flex-row gap-[16px] items-end justify-start md:w-[100%] w-[11%]">
                  <div className="flex h-[28px] items-center justify-start w-[28px]">
                    <Img
                      src="images/img_user_28x28.png"
                      className="h-[28px] md:h-[auto] rounded-[50%] w-[28px]"
                      alt="user Eleven"
                    />
                  </div>
                  <Text
                    className="mb-[2px] mt-[9px] not-italic text-gray_504 text-left w-[auto]"
                    variant="body66"
                  >
                    10:13 am
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start md:ml-[0] ml-[1342px] mt-[24px] md:w-[100%] w-[11%]">
              <div className="flex flex-col gap-[12px] justify-start w-[100%]">
                <Text
                  className="bg-green_400_3a font-normal h-[46px] not-italic pb-[11px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[14px] rounded-[3px] text-left text-white_A700_cc w-[155px]"
                  variant="body54"
                >
                  Wow that&#39;s great
                </Text>
                <div className="flex flex-row gap-[7px] items-start justify-end ml-[auto] md:w-[100%] w-[43%]">
                  <Img
                    src="images/img_cursor.svg"
                    className="h-[14px] w-[14px]"
                    alt="cursor One"
                  />
                  <Text
                    className="not-italic text-gray_504 text-left w-[auto]"
                    variant="body66"
                  >
                    10:14 am
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start mt-[27px] md:w-[100%] w-[24%]">
              <div className="flex flex-col justify-start w-[100%]">
                <List
                  className="sm:flex-col flex-row gap-[10px] grid grid-cols-2 md:ml-[0] ml-[45px] w-[88%]"
                  orientation="horizontal"
                >
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="h-[99px] relative w-[100%]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[99px] m-[auto] object-cover rounded-[4px] w-[100%]"
                        alt="ImgOne One"
                      />
                      <div className="absolute bg-gray_800_b2 bottom-[13%] flex items-center justify-end p-[2px] right-[6%] rounded-[3px] w-[18%]">
                        <Img
                          src="images/img_settings_white_a700.svg"
                          className="h-[18px] mt-[2px] w-[18px]"
                          alt="settings Three"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="h-[99px] relative w-[100%]">
                      <Img
                        src="images/img_img2.png"
                        className="h-[99px] m-[auto] object-cover rounded-[4px] w-[100%]"
                        alt="ImgTwo One"
                      />
                      <div className="absolute bg-gray_800_b2 bottom-[13%] flex items-center justify-end p-[2px] right-[6%] rounded-[3px] w-[18%]">
                        <Img
                          src="images/img_settings_white_a700.svg"
                          className="h-[18px] mt-[2px] w-[18px]"
                          alt="settings Four"
                        />
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row gap-[16px] items-end justify-start md:w-[100%] w-[26%]">
                  <div className="flex h-[28px] items-center justify-start w-[28px]">
                    <Img
                      src="images/img_user_28x28.png"
                      className="h-[28px] md:h-[auto] rounded-[50%] w-[28px]"
                      alt="user Twelve"
                    />
                  </div>
                  <Text
                    className="mt-[10px] not-italic text-gray_504 text-left w-[auto]"
                    variant="body66"
                  >
                    10:15 am
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start md:ml-[0] ml-[1124px] mt-[24px] md:w-[100%] w-[25%]">
              <div className="flex flex-col gap-[11px] justify-start w-[100%]">
                <div className="bg-green_400_3a flex items-center justify-end p-[11px] rounded-[3px] w-[100%]">
                  <div className="border-[1px] border-green_400 border-solid flex items-center justify-start p-[17px] rounded-[6px] md:w-[100%] w-[95%]">
                    <div className="flex flex-row items-start justify-start w-[100%]">
                      <Button className="bg-green_400_33 flex h-[38px] items-center justify-center p-[8px] rounded-[50%] w-[38px]">
                        <Img
                          src="images/img_clock_green_400.svg"
                          className="h-[20px]"
                          alt="clock"
                        />
                      </Button>
                      <div className="flex flex-col items-start justify-start ml-[16px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_202 text-left w-[auto]"
                          variant="body59"
                        >
                          design-phase-1-approved.pdf
                        </Text>
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_504 text-left w-[auto]"
                          variant="body61"
                        >
                          12.5 MB
                        </Text>
                      </div>
                      <Img
                        src="images/img_download_gray_504.svg"
                        className="h-[20px] ml-[71px] mt-[6px] w-[20px]"
                        alt="download Four"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[7px] items-start justify-end ml-[auto] md:w-[100%] w-[18%]">
                  <Img
                    src="images/img_cursor.svg"
                    className="h-[14px] w-[14px]"
                    alt="cursor Two"
                  />
                  <Text
                    className="not-italic text-gray_504 text-left w-[auto]"
                    variant="body66"
                  >
                    10:16 am
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[16px] items-start justify-start mt-[27px] w-[10%] md:w-[100%]">
              <div className="flex h-[28px] items-center justify-start mt-[28px] w-[28px]">
                <Img
                  src="images/img_user_28x28.png"
                  className="h-[28px] md:h-[auto] rounded-[50%] w-[28px]"
                  alt="user Thirteen"
                />
              </div>
              <Text
                className="bg-gray_801 font-normal h-[47px] mb-[9px] not-italic pl-[19px] sm:pr-[20px] pr-[33px] py-[13px] rounded-[3px] text-left text-shadow-ts text-white_A700_cc w-[97px]"
                variant="body54"
              >
                typing...
              </Text>
            </div>
          </div>
          <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
            <div className="bg-bluegray_900_0c flex items-center justify-end pt-[22px] w-[100%]">
              <div className="flex flex-col gap-[26px] items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start md:w-[100%] w-[97%]">
                  <div className="h-[38px] relative w-[38px]">
                    <Img
                      src="images/img_user_38x38.png"
                      className="h-[38px] m-[auto] rounded-[50%] w-[38px]"
                      alt="User Fourteen"
                    />
                    <div className="absolute bg-teal_A700 border-[2px] border-gray_910 border-solid bottom-[0] h-[10px] right-[0] rounded-[50%] w-[10px]"></div>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[16px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_202 text-left w-[auto]"
                      variant="body47"
                    >
                      Bella Cote
                    </Text>
                    <Text
                      className="mt-[3px] not-italic text-gray_504 text-left w-[auto]"
                      variant="body60"
                    >
                      Online
                    </Text>
                  </div>
                  <Img
                    src="images/img_search_bluegray_202.svg"
                    className="h-[22px] md:ml-[0] ml-[1133px] w-[22px]"
                    alt="search"
                  />
                  <Img
                    src="images/img_call_bluegray_202.svg"
                    className="h-[22px] md:ml-[0] ml-[30px] w-[22px]"
                    alt="call One"
                  />
                  <Img
                    src="images/img_videocamera_bluegray_202.svg"
                    className="h-[22px] md:ml-[0] ml-[31px] w-[22px]"
                    alt="videocamera"
                  />
                  <Img
                    src="images/img_info_bluegray_202.svg"
                    className="h-[22px] md:ml-[0] ml-[29px] w-[22px]"
                    alt="info"
                  />
                  <Img
                    src="images/img_overflowmenu_bluegray_202.svg"
                    className="h-[22px] md:ml-[0] ml-[30px] w-[22px]"
                    alt="overflowmenu"
                  />
                </div>
                <Line className="bg-bluegray_910 h-[1px] w-[100%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DarkProfilePage;
