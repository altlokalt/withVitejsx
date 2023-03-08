import React from "react";

import { Img, Text, Button, Input } from "components";

const LoginOnePage = () => {
  return (
    <>
      <div className="bg-gray_103 flex font-inter mx-[auto] relative w-[100%]">
        <div className="h-[874px] my-[auto] md:px-[20px] md:w-[100%] w-[58%]">
          <Img
            src="defaultNoData.png"
            className="h-[874px] m-[auto] object-cover w-[100%]"
            alt="Image"
          />
          <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[27%]">
            <Text
              className="font-normal not-italic text-center text-white_A700 w-[auto]"
              variant="body30"
            >
              Hello!
            </Text>
            <Text
              className="font-normal mt-[12px] not-italic text-center text-white_A700 w-[auto]"
              variant="body59"
            >
              Don’t have an account yer?
            </Text>
            <Button className="bg-indigo_A206 cursor-pointer font-normal min-w-[220px] mt-[30px] not-italic py-[20px] rounded-[29px] text-[14px] text-center text-white_A700 w-[auto]">
              Create an account
            </Button>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat md:h-[670px] h-[874px] ml-[-45px] my-[auto] p-[85px] md:px-[20px] md:w-[100%] w-[46%] z-[1]"
          style={{
            backgroundImage: "url('images/img_sidebar_white_a700.svg')",
          }}
        >
          <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[54%]">
            <div className="flex flex-col md:gap-[40px] gap-[88px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[286px] md:gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[14px] items-start justify-start pr-[2px] py-[2px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-normal mt-[13px] not-italic text-gray_522 text-left w-[auto]"
                    variant="body59"
                  >
                    Sign in to continue{" "}
                  </Text>
                  <Text
                    className="font-normal mb-[14px] not-italic text-gray_964 text-left w-[auto]"
                    variant="body41"
                  >
                    Welcome Back!{" "}
                  </Text>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[92px] items-center justify-start pl-[19px] py-[19px] rounded-[46px] w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_buttonfullwidith.svg')",
                  }}
                >
                  <Text
                    className="font-normal not-italic text-indigo_A206 text-left w-[auto]"
                    variant="body59"
                  >
                    Forgot Password?
                  </Text>
                  <Text
                    className="font-normal mb-[19px] not-italic text-center text-white_A700 w-[auto]"
                    variant="body59"
                  >
                    Login
                  </Text>
                </div>
              </div>
              <div className="flex flex-col justify-start pt-[2px] w-[100%]">
                <Text
                  className="font-normal md:ml-[0] ml-[117px] not-italic text-gray_522 text-left w-[auto]"
                  variant="body67"
                >
                  Or connect with socials
                </Text>
                <div className="flex flex-col items-center justify-start mt-[4px] w-[100%]">
                  <Button
                    className="flex items-center justify-center pl-[35px] pr-[0] py-[4px] sm:pl-[20px] text-center"
                    leftIcon={
                      <Img
                        src="images/img_facebook_white_a700_7x18.svg"
                        className="mr-[5px] text-center"
                        alt="facebook"
                      />
                    }
                    rightIcon={
                      <Img
                        src="images/img_background_color.svg"
                        className="ml-[268px] text-center rounded-[12px]"
                        alt="Background Color"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-center text-white_A700">
                      Connect with Facebook
                    </div>
                  </Button>
                  <div
                    className="bg-cover bg-no-repeat flex h-[25px] items-center justify-end mt-[7px] p-[2px] rounded-[12px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_apple.svg')" }}
                  >
                    <div className="flex flex-row gap-[8px] items-start justify-center md:w-[100%] w-[46%]">
                      <Img
                        src="images/img_iconapple.svg"
                        className="h-[18px] w-[18px]"
                        alt="IconApple"
                      />
                      <Text
                        className="font-normal not-italic text-center text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        Connect with Apple
                      </Text>
                    </div>
                  </div>
                  <div className="h-[25px] md:h-[33px] mt-[8px] relative w-[100%]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[8px] rounded-[12px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group586.svg')",
                      }}
                    >
                      <Img
                        src="images/img_volume_bluegray_101.svg"
                        className="h-[7px] md:ml-[0] ml-[81px] w-[auto]"
                        alt="volume"
                      />
                    </div>
                    <Text
                      className="absolute bottom-[0] font-normal not-italic right-[25%] text-center text-gray_964 w-[auto]"
                      variant="body59"
                    >
                      Connect with Google+
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col gap-[30px] inset-x-[0] items-center justify-start mx-[auto] top-[26%] w-[54%]">
            <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
              <Input
                className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                wrapClassName="border-[1px] border-gray_500_6c border-solid flex pb-[13px] pt-[17px] px-[15px] rounded-[8px] w-[100%]"
                type="email"
                name="email"
                placeholder="anne.carry@mail.com"
                suffix={
                  <Img
                    src="images/img_checkmark_bluegray_101.svg"
                    className="ml-[35px] my-[auto]"
                    alt="checkmark"
                  />
                }
              ></Input>
              <Text
                className="font-normal not-italic text-gray_964 text-left tracking-[1.00px] w-[auto]"
                variant="body67"
              >
                Email
              </Text>
            </div>
            <div className="flex flex-col gap-[15px] items-start justify-start w-[100%]">
              <Input
                className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                wrapClassName="border-[1px] border-gray_500_6c border-solid flex pb-[13px] pt-[17px] px-[15px] rounded-[8px] w-[100%]"
                type="password"
                name="Group585"
                placeholder="Password@123"
                suffix={
                  <Img
                    src="images/img_overflowmenu_bluegray_101.svg"
                    className="ml-[35px] my-[auto]"
                    alt="overflow_menu"
                  />
                }
              ></Input>
              <Text
                className="font-normal not-italic text-gray_964 text-left tracking-[1.00px] w-[auto]"
                variant="body67"
              >
                Password
              </Text>
            </div>
          </div>
          <Img
            src="images/img_volume_indigo_a206.svg"
            className="absolute h-[34px] left-[23%] top-[10%] w-[auto]"
            alt="volume One"
          />
        </div>
      </div>
    </>
  );
};

export default LoginOnePage;
