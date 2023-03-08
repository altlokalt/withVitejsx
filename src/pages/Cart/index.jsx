import React from "react";

import { Img, Text, Button, Line, List } from "components";

const CartPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-end mx-[auto] sm:pr-[20px] pr-[240px] md:pr-[40px] w-[100%]">
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
        <div className="flex flex-row gap-[16px] items-start justify-start mr-[auto] mt-[31px] md:w-[100%] w-[12%]">
          <Text
            className="font-medium text-gray_513 text-left w-[auto]"
            variant="body47"
          >
            Home
          </Text>
          <Text
            className="font-medium mb-[2px] text-bluegray_111 text-left w-[auto]"
            variant="body47"
          >
            &gt;
          </Text>
          <Text
            className="font-medium mt-[2px] text-gray_807 text-left w-[auto]"
            variant="body47"
          >
            Shopping Cart
          </Text>
        </div>
        <Text
          className="font-bold mt-[42px] text-gray_807 text-left w-[auto]"
          variant="body22"
        >
          Shopping Cart
        </Text>
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mr-[auto] mt-[96px] md:w-[100%] w-[84%]">
          <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between md:w-[100%] w-[42%]">
            <div className="flex flex-row gap-[24px] items-center justify-start md:w-[100%] w-[auto]">
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
            <Line className="bg-gray_807 h-[2px] md:mt-[0] my-[27px] w-[59%]" />
          </div>
          <div className="flex md:flex-col flex-row gap-[56px] items-center justify-center md:ml-[0] ml-[57px] md:w-[100%] w-[40%]">
            <div className="flex flex-row gap-[24px] items-center justify-start md:w-[100%] w-[31%]">
              <Text
                className="border-[2px] border-bluegray_111 border-solid flex font-medium h-[56px] items-center justify-center sm:px-[20px] rounded-[50%] text-bluegray_111 text-center w-[56px]"
                variant="body37"
              >
                2
              </Text>
              <Text
                className="font-medium text-bluegray_111 text-left w-[auto]"
                variant="body37"
              >
                Checkout
              </Text>
            </div>
            <Line className="bg-bluegray_111 h-[2px] md:mt-[0] my-[27px] w-[61%]" />
          </div>
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
        <div className="flex flex-col md:gap-[40px] gap-[80px] items-end justify-start mt-[79px] md:w-[100%] w-[85%]">
          <div className="flex flex-col gap-[31px] items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[31px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[31px] items-start justify-start w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:w-[100%] w-[80%]">
                  <Text
                    className="font-medium mb-[5px] text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    Product
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[590px] md:mt-[0] mt-[5px] text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    Quantity
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[231px] md:mt-[0] my-[2px] text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    Price
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[232px] md:mt-[0] mt-[4px] text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    Total
                  </Text>
                </div>
                <Line className="bg-bluegray_111 h-[1px] w-[100%]" />
              </div>
              <List
                className="flex-col gap-[31px] grid items-center w-[100%]"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-[32px] items-center justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                    <div className="border-[1px] border-bluegray_111 border-solid flex h-[200px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[200px]">
                      <Img
                        src="images/img_placeholder_180x180.png"
                        className="h-[180px] md:h-[auto] object-cover w-[180px]"
                        alt="placeholder"
                      />
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[66px] text-gray_807 text-left w-[auto]"
                      variant="body37"
                    >
                      Gray T-shirt
                    </Text>
                    <div className="h-[48px] md:ml-[0] ml-[250px] relative md:w-[100%] w-[11%]">
                      <Button className="absolute bg-gray_807 flex h-[48px] inset-y-[0] items-center justify-center my-[auto] p-[16px] right-[0] w-[48px]">
                        <Img
                          src="images/img_grid_white_a700.svg"
                          className="h-[16px]"
                          alt="grid"
                        />
                      </Button>
                      <div className="bg-gray_59 flex h-[100%] md:h-[auto] items-center justify-center my-[auto] p-[16px] w-[48px]">
                        <div className="bg-gray_513 h-[2px] w-[57%]"></div>
                      </div>
                      <Button className="absolute border-[1px] border-bluegray_111 border-solid cursor-pointer font-medium h-[100%] inset-[0] leading-[normal] m-[auto] p-[16px] text-[18px] text-center text-gray_807 w-[171px]">
                        1
                      </Button>
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[139px] text-gray_807 text-left w-[auto]"
                      variant="body37"
                    >
                      $100.99
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[186px] text-gray_807 text-left w-[auto]"
                      variant="body37"
                    >
                      $100.99
                    </Text>
                    <Img
                      src="images/img_close_gray_807.svg"
                      className="h-[33px] md:ml-[0] ml-[257px] w-[33px]"
                      alt="close"
                    />
                  </div>
                  <Line className="bg-bluegray_111 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-1 flex-col gap-[32px] items-center justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                    <div className="border-[1px] border-bluegray_111 border-solid flex h-[200px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[200px]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[180px] md:h-[auto] object-cover w-[180px]"
                        alt="placeholder One"
                      />
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[66px] text-gray_807 text-left w-[auto]"
                      variant="body37"
                    >
                      Red Flannel
                    </Text>
                    <div className="h-[48px] md:ml-[0] ml-[255px] relative md:w-[100%] w-[11%]">
                      <Button className="absolute bg-gray_807 flex h-[48px] inset-y-[0] items-center justify-center my-[auto] p-[16px] right-[0] w-[48px]">
                        <Img
                          src="images/img_grid_white_a700.svg"
                          className="h-[16px]"
                          alt="grid One"
                        />
                      </Button>
                      <div className="bg-gray_59 flex h-[100%] md:h-[auto] items-center justify-center my-[auto] p-[16px] w-[48px]">
                        <div className="bg-gray_513 h-[2px] w-[57%]"></div>
                      </div>
                      <Button className="absolute border-[1px] border-bluegray_111 border-solid cursor-pointer font-medium h-[100%] inset-[0] leading-[normal] m-[auto] p-[16px] text-[18px] text-center text-gray_807 w-[171px]">
                        1
                      </Button>
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[139px] text-gray_807 text-left w-[auto]"
                      variant="body37"
                    >
                      $100.99
                    </Text>
                    <Text
                      className="font-medium md:ml-[0] ml-[186px] text-gray_807 text-left w-[auto]"
                      variant="body37"
                    >
                      $100.99
                    </Text>
                    <Img
                      src="images/img_close_gray_807.svg"
                      className="h-[33px] md:ml-[0] ml-[257px] w-[33px]"
                      alt="close One"
                    />
                  </div>
                  <Line className="bg-bluegray_111 h-[1px] w-[100%]" />
                </div>
              </List>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
              <div className="border-[1px] border-bluegray_111 border-solid flex md:flex-1 flex-row items-center justify-between pl-[16px] md:w-[100%] w-[29%]">
                <Text
                  className="font-normal not-italic text-center text-gray_500_87 tracking-[0.36px] w-[auto]"
                  variant="body47"
                >
                  Enter coupon code
                </Text>
                <Button className="bg-gray_807 cursor-pointer font-normal leading-[normal] min-w-[137px] not-italic p-[16px] text-[18px] text-center text-white_A700 w-[auto]">
                  Apply Code
                </Button>
              </div>
              <div className="flex md:flex-1 flex-col gap-[16px] items-end justify-start md:w-[100%] w-[auto]">
                <Text
                  className="font-medium text-gray_513 text-left w-[auto]"
                  variant="body47"
                >
                  Total
                </Text>
                <Text
                  className="font-bold text-gray_807 text-left w-[auto]"
                  variant="body22"
                >
                  $202.00
                </Text>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-col flex-row gap-[32px] items-center justify-end ml-[auto] md:w-[100%] w-[26%]">
            <Button className="border-[1px] border-gray_807 border-solid cursor-pointer font-medium leading-[normal] min-w-[207px] p-[16px] text-[18px] text-center text-gray_807 w-[auto]">
              Continue Shopping
            </Button>
            <Button className="bg-gray_807 cursor-pointer font-medium leading-[normal] p-[16px] text-[18px] text-center text-white_A700 w-[171px]">
              Checkout
            </Button>
          </div>
        </div>
        <div className="bg-gray_807 flex flex-col md:gap-[40px] gap-[96px] items-center justify-end mt-[100px] p-[32px] md:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mt-[30px] md:w-[100%] w-[88%]">
            <div className="flex flex-col gap-[32px] items-start justify-start sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[110px] items-start justify-start md:w-[100%] w-[43%]">
                <Img
                  src="images/img_group19_white_a700_24x1.svg"
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor .
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
            <div className="flex md:flex-col flex-row gap-[32px] items-start justify-between md:w-[100%] w-[58%]">
              <div className="flex flex-col gap-[32px] items-start justify-start w-[245px]">
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
              <div className="flex flex-col gap-[32px] items-start justify-start w-[245px]">
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
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[41%]">
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  variant="body37"
                >
                  Join our Newsletter
                </Text>
                <div className="h-[81px] relative w-[100%]">
                  <Text
                    className="font-normal mb-[-8.1px] mx-[auto] not-italic text-gray_513 text-left w-[100%] z-[1]"
                    variant="body47"
                  >
                    Drop your email below to get update, promotions, coupons,
                    and more!
                  </Text>
                  <div className="md:h-[30px] h-[37px] mt-[auto] mx-[auto] w-[100%]">
                    <div className="absolute bg-gray_807 border-[1px] border-solid border-white_A700 flex inset-x-[0] items-end justify-start mx-[auto] sm:pl-[20px] pl-[324px] md:pl-[40px] top-[0] w-[100%]">
                      <div className="bg-white_A700 flex h-[30px] md:h-[auto] items-center justify-center p-[16px] w-[60px]">
                        <Img
                          src="images/img_menu_gray_807.svg"
                          className="h-[30px] w-[31px]"
                          alt="menu"
                        />
                      </div>
                    </div>
                    <Text
                      className="absolute bottom-[0] font-normal left-[6%] not-italic text-bluegray_100_87 text-center tracking-[0.36px] w-[auto]"
                      variant="body47"
                    >
                      Enter your email
                    </Text>
                  </div>
                </div>
              </div>
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
    </>
  );
};

export default CartPage;
