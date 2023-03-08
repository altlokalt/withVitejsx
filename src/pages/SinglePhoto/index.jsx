import React from "react";

import { Button, Img, Text, Input } from "components";

const SinglePhotoPage = () => {
  return (
    <>
      <div className="bg-gray_103 font-inter h-[875px] mx-[auto] relative w-[100%]">
        <div
          className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[1024px] items-end justify-end pl-[85px] md:px-[20px] right-[0] w-[91%]"
          style={{ backgroundImage: "url('images/img_group83.svg')" }}
        >
          <div className="flex md:flex-col flex-row gap-[49px] items-start justify-end w-[100%]">
            <div className="flex md:flex-1 flex-col md:gap-[40px] gap-[70px] items-center justify-start md:mt-[0] mt-[40px] md:w-[100%] w-[64%]">
              <div className="flex flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[97%]">
                <Button
                  className="bg-white_A700_33 flex items-center justify-center pl-[20px] pr-[22px] py-[20px] rounded-[12px] sm:pr-[20px] text-center"
                  leftIcon={
                    <Img
                      src="images/img_arrowleft_white_a700_18x18.svg"
                      className="mr-[10px] text-center"
                      alt="arrow_left"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700">
                    Back
                  </div>
                </Button>
                <div className="flex flex-row gap-[10px] items-center justify-between w-[15%]">
                  <Text
                    className="font-normal not-italic text-right text-white_A700 w-[auto]"
                    variant="body59"
                  >
                    Edward Ford
                  </Text>
                  <div className="flex h-[38px] items-center justify-start w-[38px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[38px] md:h-[auto] object-cover rounded-[12px] w-[38px]"
                      alt="Avatar"
                    />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <Button className="border-[2px] border-solid border-white_A700_33 flex h-[48px] items-center justify-center p-[14px] rounded-[12px] w-[48px]">
                  <Img
                    src="images/img_arrowleft_white_a700_48x48.svg"
                    className=""
                    alt="arrowleft"
                  />
                </Button>
                <Img
                  src="defaultNoData.png"
                  className="md:flex-1 h-[540px] sm:h-[auto] object-cover rounded-[8px] md:w-[100%] w-[auto]"
                  alt="Image"
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
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 h-[1024px] items-end justify-end p-[40px] sm:px-[20px] md:w-[100%] w-[33%]"
              style={{ backgroundImage: "url('images/img_side.svg')" }}
            >
              <div className="flex flex-col md:gap-[40px] gap-[843px] items-end justify-start mt-[5px] md:w-[100%] w-[92%]">
                <div className="flex flex-row gap-[20px] items-center justify-end ml-[auto] md:w-[100%] w-[35%]">
                  <Button className="bg-light_blue_200 cursor-pointer font-normal h-[48px] not-italic py-[10px] rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]">
                    1
                  </Button>
                  <div className="flex h-[48px] items-center justify-start w-[48px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                      alt="Avatar One"
                    />
                  </div>
                </div>
                <div className="bg-gray_103 flex flex-row gap-[10px] items-center justify-start p-[5px] rounded-[4px] w-[100%]">
                  <Input
                    className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                    wrapClassName="bg-gray_103 flex pl-[10px] pr-[6px] py-[9px] sm:w-[100%] w-[87%]"
                    name="FrameEight"
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
                    className="h-[14px] w-[14px]"
                    alt="send"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="absolute h-[875px] inset-y-[0] left-[0] my-[auto] w-[auto]"
          alt="NavigationWebSidebar"
        />
      </div>
    </>
  );
};

export default SinglePhotoPage;
