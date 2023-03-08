import React from "react";

import { Img, Text, Button, Input } from "components";

const SingleStoryPage = () => {
  return (
    <>
      <div className="bg-gray_103 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[874px] w-[auto]"
          alt="NavigationWebSidebar"
        />
        <div className="h-[984px] md:px-[20px] relative md:w-[100%] w-[89%]">
          <div className="flex h-[100%] items-center justify-start m-[auto] pl-[5px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[62px] justify-start w-[100%]">
              <div className="flex md:flex-col flex-row gap-[10px] items-center justify-between w-[100%]">
                <Img
                  src="images/img_leftindicator.svg"
                  className="h-[128px] w-[auto]"
                  alt="LeftIndicator"
                />
                <div className="sm:h-[768px] h-[874px] md:h-[924px] relative md:w-[100%] w-[99%]">
                  <div className="bg-gray_964 sm:h-[768px] h-[874px] md:h-[924px] m-[auto] p-[42px] sm:px-[20px] md:px-[40px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[100%]">
                    <div className="absolute flex flex-row gap-[10px] inset-x-[0] items-center justify-center mx-[auto] pl-[5px] top-[5%] w-[11%]">
                      <Text
                        className="font-normal not-italic text-right text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        Sara Scholz
                      </Text>
                      <div className="flex items-center justify-start w-[30%]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[32px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div className="absolute flex md:flex-col flex-row gap-[30px] h-[max-content] inset-y-[0] items-center justify-start left-[7%] my-[auto] w-[56%]">
                      <Button className="border-[2px] border-solid border-white_A700_33 flex h-[48px] items-center justify-center p-[14px] rounded-[12px] w-[48px]">
                        <Img
                          src="images/img_arrowleft_white_a700_48x48.svg"
                          className=""
                          alt="arrowleft"
                        />
                      </Button>
                      <Img
                        src="defaultNoData.png"
                        className="h-[768px] sm:h-[auto] object-cover rounded-[8px] md:w-[100%] w-[78%]"
                        alt="Image One"
                      />
                      <Button className="flex h-[48px] items-center justify-center outline outline-[1px] outline-white_A700_33 p-[14px] rounded-[12px] w-[48px]">
                        <Img
                          src="images/img_arrowright_48x48.svg"
                          className=""
                          alt="arrowright"
                        />
                      </Button>
                    </div>
                  </div>
                  <Button
                    className="absolute bg-white_A700_33 flex items-center justify-center left-[7%] pl-[20px] pr-[22px] py-[9px] rounded-[11px] sm:pr-[20px] text-center top-[0]"
                    leftIcon={
                      <Img
                        src="images/img_icon_arrowleft.png"
                        className="mr-[10px] text-center right-[1%] absolute"
                        alt="Icon/Arrow-Left"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700">
                      Back
                    </div>
                  </Button>
                </div>
              </div>
              <div className="bg-gray_900_6c1 border-[2px] border-gray_500_6c border-solid flex items-center justify-start md:ml-[0] ml-[184px] mr-[545px] p-[9px] rounded-[4px] md:w-[100%] w-[43%]">
                <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-between md:w-[100%] w-[99%]">
                  <div className="h-[30px] relative sm:w-[100%] w-[94%]">
                    <Img
                      src="images/img_checkmark_white_a700_20x20.svg"
                      className="h-[20px] ml-[auto] mr-[8px] my-[auto] w-[20px]"
                      alt="checkmark"
                    />
                    <div className="absolute flex h-[100%] inset-[0] items-start justify-center m-[auto] w-[100%]">
                      <Input
                        className="font-normal not-italic pl-[6px] pr-[12px] py-[5px] text-[14px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
                        wrapClassName="bg-gray_964 sm:w-[100%] w-[93%]"
                        name="FrameSeven"
                        placeholder="Write a comment…"
                      ></Input>
                    </div>
                  </div>
                  <Img
                    src="images/img_user_bluegray_101.svg"
                    className="h-[20px] w-[20px]"
                    alt="user"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex items-end justify-start pl-[20px] right-[0] top-[0] w-[33%]">
            <div className="bg-white_A700 flex items-start justify-start pb-[45px] sm:px-[20px] md:px-[40px] px-[45px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] md:w-[100%] w-[auto]">
              <Text
                className="font-normal mb-[809px] not-italic text-gray_964 text-left w-[auto]"
                variant="body41"
              >
                Next Stories
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleStoryPage;
