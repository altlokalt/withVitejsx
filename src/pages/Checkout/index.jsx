import React from "react";

import { Img, Text, Button, Line, Input, SelectBox } from "components";

const CheckoutPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-poppins items-start justify-end mx-[auto] sm:pr-[20px] pr-[240px] md:pr-[40px] w-[100%]">
        <div className="flex flex-col items-center justify-end w-[100%]">
          <header className="flex items-center justify-center w-[100%]">
            <div className="flex flex-col items-center justify-center w-[100%]">
              <ul className="bg-white_A700 flex flex-row md:hidden items-center justify-end p-[24px] sm:px-[20px] w-[100%] common-row-list">
                <li className="mt-[7px] mb-[4px] sm:w-[100%] sm:my-[10px] w-[6%]">
                  <div className="flex flex-row gap-[8px] items-start justify-center">
                    <Img
                      src="images/img_volume_gray_807.svg"
                      className="h-[24px] mt-[4px] w-[auto]"
                      alt="volume"
                    />
                    <a
                      className="cursor-pointer font-bold sm:text-[20px] md:text-[22px] text-[24px] text-gray_807 text-left w-[auto]"
                      href="javascript:"
                    >
                      Elliye
                    </a>
                  </div>
                </li>
                <li className="ml-[541px] sm:w-[100%] sm:my-[10px] w-[5%] my-[12px]">
                  <div className="flex flex-row gap-[32px] items-start justify-start">
                    <Img
                      src="images/img_cart_gray_807.svg"
                      className="h-[24px] w-[24px]"
                      alt="cart"
                    />
                    <Img
                      src="images/img_mail_gray_807.svg"
                      className="h-[24px] w-[24px]"
                      alt="mail"
                    />
                  </div>
                </li>
                <li className="ml-[32px] mr-[120px] sm:w-[100%] sm:my-[10px] text-center">
                  <Button className="bg-gray_807 cursor-pointer font-medium leading-[normal] p-[16px] text-[18px] text-center text-white_A700">
                    Login
                  </Button>
                </li>
              </ul>
              <Line className="bg-gray_59 h-[1px] w-[85%]" />
            </div>
          </header>
          <div className="flex flex-row gap-[16px] items-start justify-start mr-[auto] mt-[30px] md:w-[100%] w-[19%]">
            <Text
              className="font-medium text-gray_513 text-left w-[auto]"
              variant="body47"
            >
              Home
            </Text>
            <Text
              className="font-medium text-bluegray_111 text-left w-[auto]"
              variant="body47"
            >
              &gt;
            </Text>
            <Text
              className="font-medium mt-[2px] text-gray_513 text-left w-[auto]"
              variant="body47"
            >
              Shopping Cart
            </Text>
            <Text
              className="font-medium text-bluegray_111 text-left w-[auto]"
              variant="body47"
            >
              &gt;
            </Text>
            <Text
              className="font-medium mb-[2px] text-gray_807 text-left w-[auto]"
              variant="body47"
            >
              Checkout
            </Text>
          </div>
          <Text
            className="font-bold mt-[38px] text-gray_807 text-left w-[auto]"
            variant="body22"
          >
            Checkout
          </Text>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mt-[100px] md:w-[100%] w-[84%]">
            <div className="flex flex-row gap-[24px] items-center justify-start md:w-[100%] w-[16%]">
              <Text
                className="border-[2px] border-gray_807 border-solid flex font-medium h-[56px] items-center justify-center sm:px-[20px] rounded-[50%] text-center text-gray_807 w-[56px]"
                variant="body37"
              >
                1
              </Text>
              <Text
                className="font-medium text-gray_807 text-left w-[auto]"
                variant="body37"
              >
                Shopping Cart
              </Text>
            </div>
            <Line className="bg-gray_807 h-[2px] md:ml-[0] ml-[21px] md:mt-[0] my-[27px] w-[24%]" />
            <div className="flex flex-row gap-[24px] items-center justify-center md:ml-[0] ml-[57px] md:w-[100%] w-[13%]">
              <Text
                className="border-[2px] border-gray_807 border-solid flex font-medium h-[56px] items-center justify-center sm:px-[20px] rounded-[50%] text-center text-gray_807 w-[56px]"
                variant="body37"
              >
                2
              </Text>
              <Text
                className="font-medium text-gray_807 text-left w-[auto]"
                variant="body37"
              >
                Checkout
              </Text>
            </div>
            <Line className="bg-bluegray_111 h-[2px] md:ml-[0] ml-[56px] md:mt-[0] my-[27px] w-[24%]" />
            <div className="flex flex-row gap-[24px] items-center justify-start md:ml-[0] ml-[32px] md:w-[100%] w-[14%]">
              <Text
                className="border-[2px] border-bluegray_111 border-solid flex font-medium h-[56px] items-center justify-center rounded-[50%] text-bluegray_111 text-center w-[56px]"
                variant="body37"
              >
                3
              </Text>
              <Text
                className="font-medium text-bluegray_111 text-left w-[auto]"
                variant="body37"
              >
                Completed
              </Text>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between mt-[81px] md:w-[100%] w-[85%]">
            <div className="flex items-center justify-start md:w-[100%] w-[41%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-gray_807 text-left w-[auto]"
                    variant="body47"
                  >
                    Buyer Info
                  </Text>
                </div>
                <Line className="bg-bluegray_111 h-[1px] mt-[30px] w-[100%]" />
                <div className="flex flex-col gap-[16px] items-start justify-start mt-[30px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    Full Name
                  </Text>
                  <Input
                    className="w-[100%]"
                    wrapClassName="border-[1px] border-bluegray_111 border-solid flex h-[60px] w-[100%]"
                    name="form"
                    placeholder=""
                  ></Input>
                </div>
                <div className="flex flex-col gap-[16px] items-start justify-start mt-[31px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-center text-gray_513 w-[auto]"
                    variant="body47"
                  >
                    Address
                  </Text>
                  <Input
                    className="w-[100%]"
                    wrapClassName="border-[1px] border-bluegray_111 border-solid flex h-[60px] w-[100%]"
                    name="form One"
                    placeholder=""
                  ></Input>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start mt-[32px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-center text-gray_513 w-[auto]"
                    variant="body47"
                  >
                    Contact
                  </Text>
                  <Input
                    className="w-[100%]"
                    wrapClassName="border-[1px] border-bluegray_111 border-solid flex h-[60px] w-[100%]"
                    name="form Two"
                    placeholder=""
                  ></Input>
                </div>
                <div className="flex flex-col gap-[14px] items-start justify-start mt-[33px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-center text-gray_513 w-[auto]"
                    variant="body47"
                  >
                    City
                  </Text>
                  <Input
                    className="w-[100%]"
                    wrapClassName="border-[1px] border-bluegray_111 border-solid flex h-[60px] w-[100%]"
                    name="form Three"
                    placeholder=""
                  ></Input>
                </div>
                <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between mt-[32px] w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start md:w-[100%] w-[59%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_513 w-[auto]"
                      variant="body47"
                    >
                      State
                    </Text>
                    <SelectBox
                      className="border-[1px] border-bluegray_111 border-solid font-normal leading-[normal] not-italic sm:pl-[20px] pl-[32px] py-[16px] text-[18px] text-center text-gray_513 w-[100%]"
                      placeholderClassName="text-gray_513"
                      name="form Four"
                      placeholder="Select State"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_513.svg"
                          className="h-[24px] mr-[32px] w-[24px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[14px] items-start justify-start md:w-[100%] w-[38%]">
                    <Text
                      className="font-normal not-italic text-center text-gray_513 w-[auto]"
                      variant="body47"
                    >
                      Zip Code
                    </Text>
                    <Input
                      className="w-[100%]"
                      wrapClassName="border-[1px] border-bluegray_111 border-solid flex h-[60px] w-[100%]"
                      name="form Five"
                      placeholder=""
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start md:w-[100%] w-[50%]">
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[29px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-gray_807 text-left w-[auto]"
                    variant="body47"
                  >
                    Payment Method
                  </Text>
                  <Line className="bg-bluegray_111 h-[1px] w-[100%]" />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[31px] w-[100%]">
                  <Button
                    className="border-[1px] border-bluegray_111 border-solid flex items-center justify-center p-[35px] sm:px-[20px] text-center"
                    leftIcon={
                      <Img
                        src="images/img_computer_gray_807.svg"
                        className="mr-[16px] text-center"
                        alt="computer"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[18px] text-gray_807 text-left">
                      Credit Card
                    </div>
                  </Button>
                  <Button
                    className="bg-gray_807 border-[1px] border-bluegray_111 border-solid flex items-center justify-center pl-[3px] pr-[33px] py-[35px] sm:pr-[20px] text-center"
                    leftIcon={
                      <div className="h-[40px] mr-[3px] w-[40px] bg-gray_807 text-center p-[3px] flex justify-center items-center">
                        <Img
                          src="images/img_ticket_white_a700.svg"
                          className="text-center"
                          alt="ticket"
                        />
                      </div>
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[18px] text-left text-white_A700">
                      Bank Transfer
                    </div>
                  </Button>
                  <Button
                    className="border-[1px] border-bluegray_111 border-solid flex items-center justify-center px-[35px] py-[34px] sm:px-[20px] text-center"
                    leftIcon={
                      <Img
                        src="images/img_reply_gray_807.svg"
                        className="mr-[16px] text-center"
                        alt="reply"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[18px] text-gray_807 text-left">
                      Paypal
                    </div>
                  </Button>
                </div>
                <div className="flex flex-col gap-[16px] items-start justify-start mt-[31px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    Name on Card
                  </Text>
                  <Input
                    className="w-[100%]"
                    wrapClassName="border-[1px] border-bluegray_111 border-solid flex h-[60px] w-[100%]"
                    name="form Six"
                    placeholder=""
                  ></Input>
                </div>
                <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between mt-[31px] w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[16px] items-start justify-start md:w-[100%] w-[66%]">
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Card Number
                    </Text>
                    <Input
                      className="w-[100%]"
                      wrapClassName="border-[1px] border-bluegray_111 border-solid flex h-[60px] w-[100%]"
                      name="form Seven"
                      placeholder=""
                    ></Input>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start md:w-[100%] w-[31%]">
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      CVV
                    </Text>
                    <Input
                      className="w-[100%]"
                      wrapClassName="border-[1px] border-bluegray_111 border-solid flex h-[60px] w-[100%]"
                      name="RectangleTwentyFive"
                      placeholder=""
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between mt-[31px] w-[100%]">
                  <div className="flex md:flex-1 flex-col gap-[16px] items-start justify-start md:w-[100%] w-[48%]">
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Month
                    </Text>
                    <SelectBox
                      className="border-[1px] border-bluegray_111 border-solid font-normal leading-[normal] not-italic sm:pl-[20px] pl-[32px] py-[16px] text-[18px] text-gray_513 text-left w-[100%]"
                      placeholderClassName="text-gray_513"
                      name="Group269"
                      placeholder="Select Month"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_513.svg"
                          className="h-[24px] mr-[32px] w-[24px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start md:w-[100%] w-[48%]">
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Year
                    </Text>
                    <SelectBox
                      className="border-[1px] border-bluegray_111 border-solid font-normal leading-[normal] not-italic sm:pl-[20px] pl-[32px] py-[16px] text-[18px] text-gray_513 text-left w-[100%]"
                      placeholderClassName="text-gray_513"
                      name="Group270"
                      placeholder="Select Year"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_513.svg"
                          className="h-[24px] mr-[32px] w-[24px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                </div>
                <Button className="bg-gray_807 cursor-pointer font-medium leading-[normal] md:ml-[0] ml-[555px] mt-[75px] p-[16px] text-[18px] text-center text-white_A700 w-[245px]">
                  Checkout
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray_807 flex items-center justify-end mt-[100px] p-[27px] sm:px-[20px] w-[100%]">
            <div className="flex flex-col md:gap-[40px] gap-[61px] items-center justify-start mt-[29px] md:w-[100%] w-[88%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                <div className="flex sm:flex-1 flex-col gap-[32px] items-start justify-start sm:w-[100%] w-[auto]">
                  <div className="flex flex-row gap-[110px] items-start justify-start md:w-[100%] w-[43%]">
                    <Img
                      src="images/img_group19.svg"
                      className="h-[24px] mt-[4px] w-[auto]"
                      alt="GroupNineteen"
                    />
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body37"
                    >
                      Elliye{" "}
                    </Text>
                  </div>
                  <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                    <Text
                      className="font-normal leading-[32.00px] md:max-w-[100%] max-w-[384px] not-italic text-gray_513 text-left"
                      variant="body47"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor .
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[auto]">
                    <div className="flex sm:flex-col flex-row gap-[8px] items-center justify-start sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_call_white_a700_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="call"
                      />
                      <Text
                        className="font-normal leading-[32.00px] md:max-w-[100%] max-w-[384px] not-italic text-left text-white_A700"
                        variant="body47"
                      >
                        +1234567890
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[8px] items-center justify-start sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_mail_white_a700_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="mail One"
                      />
                      <Text
                        className="font-normal leading-[32.00px] md:max-w-[100%] max-w-[384px] not-italic text-left text-white_A700"
                        variant="body47"
                      >
                        elliye@support.com
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[32px] items-start justify-start md:ml-[0] ml-[278px] w-[245px]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body37"
                  >
                    Product Links
                  </Text>
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Categories
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      New Arrival
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Features
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Collections
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[32px] items-start justify-start md:ml-[0] ml-[32px] w-[245px]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body37"
                  >
                    Company
                  </Text>
                  <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      About
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Blog
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Careers
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Services
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Privacy Policy
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Terms of service
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[32px] md:w-[100%] w-[24%]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body37"
                  >
                    Join our Newsletter
                  </Text>
                  <Text
                    className="font-normal mt-[19px] not-italic text-gray_513 text-left w-[100%]"
                    variant="body47"
                  >
                    Drop your email below to get update, promotions, coupons,
                    and more!
                  </Text>
                  <Input
                    className="font-normal leading-[normal] not-italic p-[0] text-[18px] placeholder:text-bluegray_100_87 text-bluegray_100_87 text-center tracking-[0.36px] w-[100%]"
                    wrapClassName="bg-gray_807 border-[1px] border-solid border-white_A700 flex mt-[26px] pl-[24px] pr-[14px] py-[13px] sm:pl-[20px] w-[100%]"
                    type="email"
                    name="form Eight"
                    placeholder="Enter your email"
                    suffix={
                      <div className="ml-[14px] sm:w-[100%] sm:mx-[0] w-[16%] bg-white_A700 py-[11px] px-[14px] flex justify-center items-center">
                        <Img
                          src="images/img_menu_gray_807.svg"
                          className="my-[auto]"
                          alt="menu"
                        />
                      </div>
                    }
                  ></Input>
                </div>
              </div>
              <Text
                className="font-normal not-italic text-bluegray_111 text-left w-[auto]"
                variant="body59"
              >
                Copyright © 2021 Elliye. All Right Reseved
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
