import React from "react";

import { Img, Text, Button, List, Line } from "components";

const ProductDetailsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-start justify-end mx-[auto] sm:pr-[20px] pr-[241px] md:pr-[40px] w-[100%]">
        <header className="flex items-center justify-center w-[100%]">
          <div className="bg-white_A700 flex items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center md:w-[100%] w-[88%]">
              <div className="flex flex-row gap-[8px] items-start justify-start md:w-[100%] w-[7%]">
                <Img
                  src="images/img_volume_gray_807.svg"
                  className="h-[24px] mt-[4px] w-[auto]"
                  alt="volume"
                />
                <Text
                  className="font-bold text-gray_807 text-left w-[auto]"
                  variant="body37"
                >
                  Elliye{" "}
                </Text>
              </div>
              <div className="bg-white_A700 border-[2px] border-gray_59 border-solid flex flex-row sm:gap-[40px] items-center justify-between md:ml-[0] ml-[411px] sm:pl-[20px] pl-[32px] md:w-[100%] w-[36%]">
                <Text
                  className="font-normal not-italic text-center text-gray_500_87 w-[auto]"
                  variant="body47"
                >
                  Search here
                </Text>
                <div className="bg-gray_807 flex h-[48px] md:h-[auto] items-center justify-center p-[16px] w-[48px]">
                  <Img
                    src="images/img_search_18x18.svg"
                    className="h-[18px] w-[18px]"
                    alt="search"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-[32px] items-start justify-start md:ml-[0] ml-[304px] w-[auto]">
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
              <Button className="bg-gray_807 cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[32px] p-[16px] text-[14px] text-center text-white_A700 w-[107px]">
                Login
              </Button>
            </div>
          </div>
        </header>
        <div className="flex md:flex-col flex-row gap-[32px] items-start justify-start md:ml-[0] ml-[144px] mr-[auto] mt-[31px] md:w-[100%] w-[85%]">
          <div className="flex flex-col gap-[32px] items-center justify-start md:w-[100%] w-[50%]">
            <div className="flex items-center justify-start w-[100%]">
              <Img
                src="images/img_placeholder_523x800.png"
                className="h-[523px] md:h-[auto] object-cover w-[100%]"
                alt="placeholder"
              />
            </div>
            <List
              className="sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 grid-cols-3 justify-center w-[61%]"
              orientation="horizontal"
            >
              <div className="flex items-center justify-start w-[100%]">
                <Img
                  src="images/img_placeholder_137x139.png"
                  className="h-[137px] md:h-[auto] object-cover w-[100%]"
                  alt="placeholder One"
                />
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <Img
                  src="images/img_placeholder_28.png"
                  className="h-[137px] md:h-[auto] object-cover w-[100%]"
                  alt="placeholder Two"
                />
              </div>
              <div className="flex items-center justify-start w-[100%]">
                <Img
                  src="images/img_placeholder_29.png"
                  className="h-[137px] md:h-[auto] object-cover w-[100%]"
                  alt="placeholder Three"
                />
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-[23px] items-start justify-start md:w-[100%] w-[50%]">
            <div className="flex flex-col gap-[32px] items-start justify-start md:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[16px] items-start justify-start w-[auto]">
                <Text
                  className="font-medium text-gray_513 text-left w-[auto]"
                  variant="body47"
                >
                  Featured
                </Text>
                <Text
                  className="font-medium text-bluegray_111 text-left w-[auto]"
                  variant="body47"
                >
                  &gt;
                </Text>
                <Text
                  className="font-medium text-gray_513 text-left w-[auto]"
                  variant="body47"
                >
                  Purple Warm Jacket
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-[100%]">
                <Text
                  className="font-bold text-gray_807 text-left"
                  variant="body8"
                >
                  Purple Warm <br />
                  Zip Jacket
                </Text>
                <Text
                  className="font-normal not-italic text-gray_513 text-left w-[auto]"
                  variant="body22"
                >
                  $299
                </Text>
                <Line className="bg-bluegray_111 h-[1px] mt-[45px] w-[100%]" />
                <div className="md:h-[132px] h-[96px] mt-[36px] relative w-[100%]">
                  <Text
                    className="font-normal leading-[32.00px] m-[auto] not-italic text-gray_513 text-left w-[100%]"
                    variant="body47"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                  <div className="absolute bottom-[20%] flex flex-row gap-[24px] items-end justify-between left-[0] w-[35%]">
                    <Text
                      className="font-medium mt-[9px] text-gray_807 text-left w-[auto]"
                      variant="body47"
                    >
                      Quantity
                    </Text>
                    <div className="h-[36px] relative w-[63%]">
                      <div className="absolute bg-gray_807 flex h-[100%] md:h-[auto] inset-y-[0] items-center justify-center my-[auto] p-[16px] right-[0] w-[48px]">
                        <Img
                          src="images/img_grid_white_a700.svg"
                          className="h-[16px] w-[16px]"
                          alt="grid"
                        />
                      </div>
                      <div className="bg-gray_59 flex h-[100%] md:h-[auto] items-center justify-center my-[auto] p-[16px] w-[48px]">
                        <div className="bg-gray_513 h-[2px] w-[57%]"></div>
                      </div>
                      <Button className="absolute border-[1px] border-bluegray_111 border-solid cursor-pointer font-medium h-[100%] inset-[0] leading-[normal] m-[auto] p-[16px] text-[18px] text-center text-gray_807 w-[171px]">
                        1
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="bg-gray_807 flex items-center justify-center p-[16px] text-center"
              rightIcon={
                <Img
                  src="images/img_cart_white_a700_32x32.svg"
                  className="ml-[16px] text-center"
                  alt="cart"
                />
              }
            >
              <div className="bg-transparent cursor-pointer font-bold leading-[normal] text-[18px] text-left text-white_A700">
                Add to Cart
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-[33px] items-center justify-start md:ml-[0] ml-[144px] mt-[186px] md:w-[100%] w-[85%]">
          <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
            <div className="flex sm:flex-1 flex-row gap-[32px] items-center justify-between sm:w-[100%] w-[25%]">
              <Text
                className="font-bold text-gray_807 text-left w-[auto]"
                variant="body22"
              >
                Similiar Product
              </Text>
              <Text
                className="font-medium text-gray_513 text-left w-[auto]"
                variant="body47"
              >
                View all
              </Text>
            </div>
            <Img
              src="images/img_button_bluegray_111.svg"
              className="h-[48px] sm:mt-[0] mt-[4px] w-[auto]"
              alt="button"
            />
          </div>
          <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between w-[100%]">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[32px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[50%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] sm:w-[100%] w-[384px]">
                <Img
                  src="images/img_womensdenimskirtpl8e2p3.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="placeholder Four"
                />
                <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                  <Text
                    className="font-medium text-gray_807 text-left w-[auto]"
                    variant="body37"
                  >
                    Black Briefcase
                  </Text>
                  <Text
                    className="font-medium text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] sm:w-[100%] w-[384px]">
                <Img
                  src="defaultNoData.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="placeholder Five"
                />
                <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                  <Text
                    className="font-medium text-gray_807 text-left w-[auto]"
                    variant="body37"
                  >
                    Pink Shirt
                  </Text>
                  <Text
                    className="font-medium text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    $299
                  </Text>
                </div>
              </div>
            </List>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[32px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[50%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[16px] h-[499px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] sm:w-[100%] w-[384px]">
                <Img
                  src="images/img_travel8v7cnke.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="placeholder Six"
                />
                <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                  <Text
                    className="font-medium text-gray_807 text-left w-[auto]"
                    variant="body37"
                  >
                    Gray T-shirt
                  </Text>
                  <Text
                    className="font-medium text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] h-[499px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] sm:w-[100%] w-[384px]">
                <Img
                  src="images/img_placeholder_31.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="placeholder Seven"
                />
                <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                  <Text
                    className="font-medium text-gray_807 text-left w-[auto]"
                    variant="body37"
                  >
                    Red Flannel
                  </Text>
                  <Text
                    className="font-medium text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    $299
                  </Text>
                </div>
              </div>
            </List>
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
                <div className="h-[80px] relative w-[100%]">
                  <Text
                    className="font-normal mb-[-8.1px] mx-[auto] not-italic text-gray_513 text-left w-[100%] z-[1]"
                    variant="body47"
                  >
                    Drop your email below to get update, promotions, coupons,
                    and more!
                  </Text>
                  <div className="md:h-[30px] h-[36px] mt-[auto] mx-[auto] w-[100%]">
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

export default ProductDetailsPage;
