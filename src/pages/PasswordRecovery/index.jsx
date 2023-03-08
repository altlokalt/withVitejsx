import React from "react";

import { Img, Text, Button, Input } from "components";

const PasswordRecoveryPage = () => {
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
              Remember your password?
            </Text>
            <Button className="bg-indigo_A206 cursor-pointer font-normal min-w-[220px] mt-[30px] not-italic py-[20px] rounded-[29px] text-[14px] text-center text-white_A700 w-[auto]">
              Lognin
            </Button>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex h-[874px] items-center justify-start ml-[-45px] my-[auto] p-[76px] md:px-[20px] w-[46%] z-[1]"
          style={{
            backgroundImage: "url('images/img_sidebar_white_a700.svg')",
          }}
        >
          <div className="flex flex-col items-start justify-start mb-[399px] md:w-[100%] w-[70%]">
            <Img
              src="images/img_volume_indigo_a206.svg"
              className="h-[34px] w-[auto]"
              alt="volume"
            />
            <div className="flex flex-col gap-[11px] items-start justify-start mt-[50px] md:w-[100%] w-[auto]">
              <Text
                className="font-normal not-italic text-gray_964 text-left w-[auto]"
                variant="body41"
              >
                Password Recovery
              </Text>
              <Text
                className="font-normal not-italic text-gray_522 text-left w-[auto]"
                variant="body59"
              >
                Enter your email to recover your password
              </Text>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start mt-[47px] w-[100%]">
              <Text
                className="font-normal not-italic text-gray_964 text-left tracking-[1.00px] w-[auto]"
                variant="body67"
              >
                Email
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
            <div
              className="bg-cover bg-no-repeat flex h-[49px] items-center justify-end mt-[5px] p-[16px] rounded-[24px] w-[100%]"
              style={{
                backgroundImage:
                  "url('images/img_buttonfullwidith_indigo_a206.svg')",
              }}
            >
              <Text
                className="font-normal not-italic text-center text-white_A700 w-[auto]"
                variant="body59"
              >
                Send Email
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordRecoveryPage;
