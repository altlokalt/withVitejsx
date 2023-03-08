import React from "react";

import { Img, Input, Text, List, Button } from "components";
import { CloseSVG } from "../../assets/images";

const MessagesPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_103 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
          <Img
            src="images/img_navigationwebsidebar.svg"
            className="h-[875px] w-[auto]"
            alt="NavigationWebSidebar"
          />
          <div className="flex md:flex-1 flex-col gap-[34px] items-center justify-start md:px-[20px] md:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[51px] items-center justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[14px] items-start justify-between md:w-[100%] w-[98%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                  wrapClassName="bg-white_A700 flex pb-[12px] pl-[20px] pr-[35px] pt-[20px] rounded-[12px] sm:pr-[20px] sm:w-[100%] w-[85%]"
                  name="Search"
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
                <div className="bg-green_402 flex items-center justify-end sm:mt-[0] mt-[5px] p-[9px] rounded-[12px] sm:w-[100%] w-[12%]">
                  <Img
                    src="images/img_laptop_bluegray_101.svg"
                    className="h-[22px] mt-[3px] w-[22px]"
                    alt="laptop"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[47px] items-start justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_964 text-left w-[auto]"
                  variant="body30"
                >
                  Inbox
                </Text>
                <div className="flex flex-row items-start justify-start md:w-[100%] w-[89%]">
                  <div className="flex items-center justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_964 text-left w-[auto]"
                      variant="body59"
                    >
                      Direct Messages
                    </Text>
                  </div>
                  <div className="flex items-center justify-start ml-[24px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_522 text-left w-[auto]"
                      variant="body59"
                    >
                      Group Chat
                    </Text>
                  </div>
                  <div className="flex items-center justify-start ml-[26px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_522 text-left w-[auto]"
                      variant="body59"
                    >
                      Archived
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="flex-col gap-[40px] grid items-center w-[98%]"
              orientation="vertical"
            >
              <div className="h-[48px] relative w-[100%]">
                <div className="absolute flex flex-col items-end justify-start pl-[3px] pt-[3px] right-[0] top-[6%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-gray_522 text-right w-[auto]"
                    variant="body67"
                  >
                    3:03pm
                  </Text>
                  <Text
                    className="bg-red_A204 font-normal h-[18px] justify-center mt-[3px] not-italic px-[6px] py-[2px] rounded-[6px] text-center text-white_A700 tracking-[1.00px] w-[17px]"
                    variant="body75"
                  >
                    1
                  </Text>
                </div>
                <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] pr-[131px] sm:pr-[20px] md:pr-[40px] w-[87%]">
                  <div className="h-[48px] relative w-[25%]">
                    <Img
                      src="defaultNoData.png"
                      className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[48px]"
                      alt="Avatar"
                    />
                    <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                      <div className="bg-gray_103 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                      <div className="absolute bg-green_402 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_964 text-left w-[auto]"
                      variant="body59"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                      variant="body59"
                    >
                      Thank you for sharing
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[48px] relative w-[100%]">
                <div className="absolute flex flex-col items-end justify-start pl-[3px] pt-[3px] right-[0] top-[6%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-gray_522 text-right w-[auto]"
                    variant="body67"
                  >
                    3:03pm
                  </Text>
                  <Text
                    className="bg-red_A204 font-normal h-[18px] justify-center mt-[3px] not-italic px-[6px] py-[2px] rounded-[6px] text-center text-white_A700 tracking-[1.00px] w-[17px]"
                    variant="body75"
                  >
                    1
                  </Text>
                </div>
                <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] pr-[131px] sm:pr-[20px] md:pr-[40px] w-[87%]">
                  <div className="h-[48px] relative w-[25%]">
                    <Img
                      src="images/img_avatar_26.png"
                      className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[48px]"
                      alt="Avatar One"
                    />
                    <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                      <div className="bg-gray_103 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                      <div className="absolute bg-green_402 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_964 text-left w-[auto]"
                      variant="body59"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                      variant="body59"
                    >
                      Thank you for sharing
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[48px] relative w-[100%]">
                <div className="absolute flex flex-col items-end justify-start pl-[3px] pt-[3px] right-[0] top-[6%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-gray_522 text-right w-[auto]"
                    variant="body67"
                  >
                    3:03pm
                  </Text>
                  <Text
                    className="bg-red_A204 font-normal h-[18px] justify-center mt-[3px] not-italic px-[6px] py-[2px] rounded-[6px] text-center text-white_A700 tracking-[1.00px] w-[17px]"
                    variant="body75"
                  >
                    1
                  </Text>
                </div>
                <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] pr-[131px] sm:pr-[20px] md:pr-[40px] w-[87%]">
                  <div className="h-[48px] relative w-[25%]">
                    <Img
                      src="defaultNoData.png"
                      className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[48px]"
                      alt="Avatar Two"
                    />
                    <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                      <div className="bg-gray_103 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                      <div className="absolute bg-green_402 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_964 text-left w-[auto]"
                      variant="body59"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                      variant="body59"
                    >
                      Thank you for sharing
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[48px] relative w-[100%]">
                <div className="absolute flex items-end justify-start right-[0] top-[6%] w-[auto]">
                  <Text
                    className="font-normal mb-[21px] mt-[3px] not-italic text-gray_522 text-right w-[auto]"
                    variant="body67"
                  >
                    Yesterday
                  </Text>
                </div>
                <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] pr-[131px] sm:pr-[20px] md:pr-[40px] w-[87%]">
                  <div className="h-[48px] relative w-[25%]">
                    <Img
                      src="images/img_avatar_28.png"
                      className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[48px]"
                      alt="Avatar Three"
                    />
                    <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                      <div className="bg-gray_103 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                      <div className="absolute bg-green_402 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_964 text-left w-[auto]"
                      variant="body59"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                      variant="body59"
                    >
                      Thank you for sharing
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[48px] relative w-[100%]">
                <div className="absolute flex items-end justify-start right-[0] top-[6%] w-[auto]">
                  <Text
                    className="font-normal mb-[21px] mt-[3px] not-italic text-gray_522 text-right w-[auto]"
                    variant="body67"
                  >
                    Yesterday
                  </Text>
                </div>
                <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] pr-[131px] sm:pr-[20px] md:pr-[40px] w-[87%]">
                  <div className="h-[48px] relative w-[25%]">
                    <Img
                      src="defaultNoData.png"
                      className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[48px]"
                      alt="Avatar Four"
                    />
                    <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                      <div className="bg-gray_103 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                      <div className="absolute bg-green_402 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_964 text-left w-[auto]"
                      variant="body59"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                      variant="body59"
                    >
                      Thank you for sharing
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[48px] relative w-[100%]">
                <div className="absolute flex items-end justify-start right-[0] top-[6%] w-[auto]">
                  <Text
                    className="font-normal mb-[22px] not-italic text-gray_522 text-right w-[auto]"
                    variant="body67"
                  >
                    Oct 26
                  </Text>
                </div>
                <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] pr-[131px] sm:pr-[20px] md:pr-[40px] w-[87%]">
                  <div className="h-[48px] relative w-[25%]">
                    <Img
                      src="images/img_avatar_30.png"
                      className="absolute h-[48px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[48px]"
                      alt="Avatar Five"
                    />
                    <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                      <div className="bg-gray_103 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                      <div className="absolute bg-green_402 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_964 text-left w-[auto]"
                      variant="body59"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                      variant="body59"
                    >
                      Thank you for sharing
                    </Text>
                  </div>
                </div>
              </div>
              <div className="h-[39px] relative w-[100%]">
                <div className="absolute bottom-[0] flex flex-col items-end justify-start pl-[2px] pt-[2px] right-[0] w-[auto]">
                  <Text
                    className="font-normal not-italic text-gray_522 text-right w-[auto]"
                    variant="body67"
                  >
                    Oct 26
                  </Text>
                  <Text
                    className="bg-red_A204 font-normal h-[14px] justify-center mt-[4px] not-italic pt-[2px] px-[6px] rounded-[6px] text-center text-white_A700 tracking-[1.00px] w-[17px]"
                    variant="body75"
                  >
                    1
                  </Text>
                </div>
                <div className="absolute flex flex-row gap-[13px] h-[100%] inset-y-[0] items-end justify-start left-[0] my-[auto] pr-[131px] sm:pr-[20px] md:pr-[40px] w-[87%]">
                  <div className="h-[39px] relative w-[25%]">
                    <Img
                      src="defaultNoData.png"
                      className="absolute h-[39px] inset-y-[0] left-[0] my-[auto] object-cover rounded-[12px] w-[96%]"
                      alt="Avatar Six"
                    />
                    <div className="absolute h-[12px] right-[0] top-[0] w-[30%]">
                      <div className="bg-gray_103 h-[12px] m-[auto] rounded-[7px] w-[100%]"></div>
                      <div className="absolute bg-green_402 h-[10px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[10px]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[5px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_964 text-left w-[auto]"
                      variant="body59"
                    >
                      Billy Green
                    </Text>
                    <Text
                      className="font-normal mt-[2px] not-italic text-gray_522 text-left w-[auto]"
                      variant="body59"
                    >
                      Thank you for sharing
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col gap-[235px] md:gap-[40px] h-[875px] items-center justify-start p-[39px] md:px-[20px] md:w-[100%] w-[auto]"
            style={{ backgroundImage: "url('images/defaultNoData.png')" }}
          >
            <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] mt-[5px] md:w-[100%] w-[15%]">
              <Button className="bg-light_blue_200 cursor-pointer font-normal h-[48px] not-italic py-[10px] rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]">
                1
              </Button>
              <div className="flex h-[48px] items-center justify-start w-[48px]">
                <Img
                  src="defaultNoData.png"
                  className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                  alt="Avatar Seven"
                />
              </div>
            </div>
            <div className="flex items-center justify-start mb-[8px] pb-[73px] sm:px-[20px] md:px-[40px] px-[73px] md:w-[100%] w-[70%]">
              <div className="flex flex-col items-center justify-start mb-[222px] w-[100%]">
                <div className="bg-gray_103 flex items-center justify-end p-[35px] sm:px-[20px] rounded-[50px] md:w-[100%] w-[38%]">
                  <Img
                    src="images/img_mail_bluegray_101_66x78.svg"
                    className="h-[66px] w-[auto]"
                    alt="mail"
                  />
                </div>
                <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-center text-gray_522 w-[auto]"
                    variant="body30"
                  >
                    It&#39;s nice to chat with someone
                  </Text>
                  <Text
                    className="font-normal not-italic text-center text-gray_522 w-[auto]"
                    variant="body59"
                  >
                    Pick a person from left menu and start your conversation
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesPage;
