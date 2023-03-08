import React from "react";

import { Img, Text, Button, Input } from "components";

const SignupPage = () => {
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
              Already have an account?
            </Text>
            <Button className="bg-indigo_A206 cursor-pointer font-normal min-w-[220px] mt-[30px] not-italic py-[20px] rounded-[29px] text-[14px] text-center text-white_A700 w-[auto]">
              Login
            </Button>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex h-[874px] items-center justify-end ml-[-45px] my-[auto] p-[48px] md:px-[20px] w-[46%] z-[1]"
          style={{
            backgroundImage: "url('images/img_sidebar_white_a700.svg')",
          }}
        >
          <div className="flex flex-col items-start justify-start mt-[37px] md:w-[100%] w-[63%]">
            <Img
              src="images/img_volume_indigo_a206.svg"
              className="h-[34px] w-[auto]"
              alt="volume"
            />
            <div className="flex flex-col gap-[8px] items-start justify-start mt-[43px] md:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-gray_964 text-left w-[auto]"
                variant="body41"
              >
                Create an account
              </Text>
              <Text
                className="font-normal not-italic text-gray_522 text-left w-[auto]"
                variant="body59"
              >
                Sign up to continue{" "}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[45px] w-[100%]">
              <div className="flex flex-col gap-[17px] items-start justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_964 text-left tracking-[1.00px] w-[auto]"
                  variant="body67"
                >
                  name
                </Text>
                <Input
                  className="font-normal not-italic pb-[20px] pl-[15px] sm:pr-[20px] pr-[35px] pt-[10px] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                  wrapClassName="border-[1px] border-gray_500_6c border-solid rounded-[8px] w-[100%]"
                  name="Group665"
                  placeholder="Anne Carry"
                ></Input>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_964 text-left tracking-[1.00px] w-[auto]"
                  variant="body67"
                >
                  email
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                  wrapClassName="border-[1px] border-gray_500_6c border-solid flex pb-[20px] pt-[10px] px-[15px] rounded-[8px] w-[100%]"
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
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                <Text
                  className="font-normal not-italic text-gray_964 text-left tracking-[1.00px] w-[auto]"
                  variant="body67"
                >
                  Password
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                  wrapClassName="border-[1px] border-gray_500_6c border-solid flex pb-[20px] pt-[10px] px-[15px] rounded-[8px] w-[100%]"
                  type="password"
                  name="Group663"
                  placeholder="Password@123"
                  suffix={
                    <Img
                      src="images/img_overflowmenu_bluegray_101.svg"
                      className="ml-[35px] my-[auto]"
                      alt="overflow_menu"
                    />
                  }
                ></Input>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex h-[49px] items-center justify-end mt-[22px] p-[16px] rounded-[24px] w-[100%]"
              style={{
                backgroundImage:
                  "url('images/img_buttonfullwidith_indigo_a206.svg')",
              }}
            >
              <Text
                className="font-normal not-italic text-center text-white_A700 w-[auto]"
                variant="body59"
              >
                Create an account
              </Text>
            </div>
            <div className="flex flex-col justify-start mt-[129px] pt-[2px] w-[100%]">
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
                      alt="volume One"
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
      </div>
    </>
  );
};

export default SignupPage;
