import React from "react";

import {
  Img,
  Text,
  Button,
  CheckBox,
  Line,
  RatingBar,
  SelectBox,
} from "components";

const CategorieswithSidebarPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-end mx-[auto] sm:pr-[20px] pr-[241px] md:pr-[40px] w-[100%]">
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
        <div className="flex flex-row gap-[16px] items-start justify-start mr-[auto] mt-[32px] md:w-[100%] w-[11%]">
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
            Categories
          </Text>
        </div>
        <Text
          className="font-bold mt-[42px] text-gray_807 text-left w-[auto]"
          variant="body22"
        >
          Categories
        </Text>
        <div className="h-[1080px] md:h-[1151px] mt-[71px] relative md:w-[100%] w-[85%]">
          <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[84%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="md:gap-[20px] gap-[32px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                <div className="bg-gray_59 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_sweater.svg"
                      className="h-[160px] w-[160px]"
                      alt="Sweater"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_807 text-left w-[auto]"
                        variant="body22"
                      >
                        Jacket
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_513 text-left w-[auto]"
                        variant="body22"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_59 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_tshirt.svg"
                      className="h-[160px] w-[160px]"
                      alt="Tshirt"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_807 text-left w-[auto]"
                        variant="body22"
                      >
                        Shirt
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_513 text-left w-[auto]"
                        variant="body22"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_59 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_pants.svg"
                      className="h-[160px] w-[160px]"
                      alt="Pants"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_807 text-left w-[auto]"
                        variant="body22"
                      >
                        Pants
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_513 text-left w-[auto]"
                        variant="body22"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_59 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_skirt_gray_807.svg"
                      className="h-[160px] w-[160px]"
                      alt="Skirt"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_807 text-left w-[auto]"
                        variant="body22"
                      >
                        Skirt
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_513 text-left w-[auto]"
                        variant="body22"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_59 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="bg-gray_59 flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_dress.svg"
                      className="h-[160px] w-[160px]"
                      alt="Dress"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_807 text-left w-[auto]"
                        variant="body22"
                      >
                        Dress
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_513 text-left w-[auto]"
                        variant="body22"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_59 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="bg-gray_59 flex sm:flex-col flex-row gap-[16px] items-center justify-start sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_bra_gray_807.svg"
                      className="h-[160px] w-[160px]"
                      alt="Bra"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_807 text-left w-[auto]"
                        variant="body22"
                      >
                        Underwear
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_513 text-left w-[auto]"
                        variant="body22"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_59 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="bg-gray_59 flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_boot.svg"
                      className="h-[160px] w-[160px]"
                      alt="Boot"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_807 text-left w-[auto]"
                        variant="body22"
                      >
                        Shoes
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_513 text-left w-[auto]"
                        variant="body22"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_59 flex flex-1 items-center justify-start p-[43px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="bg-gray_59 flex sm:flex-col flex-row gap-[16px] items-center justify-start sm:w-[100%] w-[auto]">
                    <Img
                      src="images/img_belt.svg"
                      className="h-[160px] w-[160px]"
                      alt="Belt"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-bold text-gray_807 text-left w-[auto]"
                        variant="body22"
                      >
                        Accesories
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_513 text-left w-[auto]"
                        variant="body22"
                      >
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-[21%]">
            <div className="md:h-[231px] h-[236px] relative w-[73%]">
              <div className="absolute flex flex-col gap-[24px] h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[auto]">
                <CheckBox
                  className="font-normal leading-[normal] not-italic text-[18px] text-gray_513 text-left"
                  inputClassName="border-[3px] border-bluegray_111 border-solid h-[24px] mr-[5px] w-[24px]"
                  label="All Price"
                  name="AllPrice"
                ></CheckBox>
                <div className="flex flex-row gap-[16px] items-end justify-start md:w-[100%] w-[87%]">
                  <Img
                    src="images/img_checkedbox.svg"
                    className="h-[2px] mt-[24px] w-[auto]"
                    alt="Checkedbox"
                  />
                  <Text
                    className="font-normal not-italic text-gray_807 text-left w-[auto]"
                    variant="body47"
                  >
                    $100 - $250
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-end justify-start md:w-[100%] w-[90%]">
                  <div className="border-[3px] border-bluegray_111 border-solid h-[1px] mt-[25px] w-[17%]"></div>
                  <Text
                    className="font-normal not-italic text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    $250 - $500
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-end justify-start md:w-[100%] w-[96%]">
                  <div className="border-[3px] border-bluegray_111 border-solid h-[1px] mt-[26px] w-[16%]"></div>
                  <Text
                    className="font-normal not-italic text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    $750 - $1.000
                  </Text>
                </div>
                <div className="flex flex-row gap-[16px] items-end justify-start w-[100%]">
                  <div className="border-[3px] border-bluegray_111 border-solid h-[1px] mt-[26px] w-[15%]"></div>
                  <Text
                    className="font-normal not-italic text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    $1000 - $1.500
                  </Text>
                </div>
              </div>
              <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[0] w-[100%]">
                <Text
                  className="font-medium text-gray_807 text-left w-[auto]"
                  variant="body47"
                >
                  Filter by Price
                </Text>
                <Img
                  src="images/img_arrowdown_gray_807.svg"
                  className="h-[2px] w-[auto]"
                  alt="chevrondown"
                />
              </div>
            </div>
            <Line className="bg-bluegray_111 h-[1px] mt-[85px] w-[73%]" />
            <div className="h-[278px] md:h-[283px] mt-[31px] relative w-[100%]">
              <div className="absolute flex flex-col gap-[16px] h-[100%] inset-[0] items-start justify-start m-[auto] w-[auto]">
                <div className="flex flex-row gap-[62px] items-center justify-start md:w-[100%] w-[26%]">
                  <Line className="bg-bluegray_111 h-[24px] w-[1px]" />
                  <div className="flex items-start justify-start w-[24px]">
                    <Img
                      src="images/img_star1_10.svg"
                      className="h-[24px] w-[24px]"
                      alt="StarOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[21px] justify-start md:w-[100%] w-[45%]">
                  <div className="border-[3px] border-bluegray_111 border-solid h-[1px] w-[1px]"></div>
                  <div className="flex flex-row gap-[8px] items-start justify-start ml-[auto] w-[auto]">
                    <Img
                      src="images/img_star1_11.svg"
                      className="h-[24px] w-[24px]"
                      alt="StarOne One"
                    />
                    <Img
                      src="images/img_star2_3.svg"
                      className="h-[24px] w-[24px]"
                      alt="StarTwo"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[22px] justify-start md:w-[100%] w-[64%]">
                  <div className="border-[3px] border-bluegray_111 border-solid h-[1px] w-[1px]"></div>
                  <div className="flex flex-row gap-[8px] items-start justify-start ml-[auto] w-[auto]">
                    <Img
                      src="images/img_star1_12.svg"
                      className="h-[24px] w-[24px]"
                      alt="StarOne Two"
                    />
                    <Img
                      src="images/img_star2_4.svg"
                      className="h-[24px] w-[24px]"
                      alt="StarTwo One"
                    />
                    <Img
                      src="images/img_star3_2.svg"
                      className="h-[24px] w-[24px]"
                      alt="StarThree"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-start md:w-[100%] w-[36%]">
                  <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                    <Img
                      src="images/img_star1_13.svg"
                      className="h-[24px] w-[24px]"
                      alt="StarOne Three"
                    />
                    <Img
                      src="images/img_star2_5.svg"
                      className="h-[24px] w-[24px]"
                      alt="StarTwo Two"
                    />
                    <Img
                      src="images/img_star3_3.svg"
                      className="h-[24px] w-[24px]"
                      alt="StarThree One"
                    />
                    <Img
                      src="images/img_star5_1.svg"
                      className="h-[24px] w-[24px]"
                      alt="StarFive"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[22px] justify-start w-[100%]">
                  <div className="border-[3px] border-bluegray_111 border-solid h-[1px] w-[1px]"></div>
                  <div className="flex items-start justify-start ml-[auto] w-[auto]">
                    <RatingBar
                      className=""
                      value={5}
                      starCount={5}
                      activeColor="#fae952"
                      size={24}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col justify-start left-[0] top-[0] w-[73%]">
                <Img
                  src="images/img_arrowdown_gray_807.svg"
                  className="h-[1px] md:ml-[0] ml-[221px] w-[auto]"
                  alt="chevrondown One"
                />
                <Text
                  className="font-medium mr-[110px] text-gray_807 text-left w-[auto]"
                  variant="body47"
                >
                  Filter by Rating
                </Text>
              </div>
            </div>
            <Line className="bg-bluegray_111 h-[1px] w-[73%]" />
            <SelectBox
              className="font-medium leading-[normal] mt-[33px] text-[18px] text-gray_807 text-left sm:w-[100%] w-[73%]"
              placeholderClassName="text-gray_807"
              name="title"
              placeholder="Filter by Brand"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_gray_807.svg"
                  className="h-[24px] mr-[0] w-[24px]"
                  alt="arrow_down"
                />
              }
            ></SelectBox>
            <SelectBox
              className="font-medium leading-[normal] mt-[31px] text-[18px] text-gray_807 text-left sm:w-[100%] w-[73%]"
              placeholderClassName="text-gray_807"
              name="title One"
              placeholder="Filter by Size"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_gray_807.svg"
                  className="h-[24px] mr-[0] w-[24px]"
                  alt="arrow_down"
                />
              }
            ></SelectBox>
          </div>
        </div>
        <div className="bg-gray_807 flex flex-col md:gap-[40px] gap-[96px] items-center justify-end mt-[85px] p-[32px] md:px-[20px] w-[100%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mt-[30px] md:w-[100%] w-[88%]">
            <div className="flex flex-col gap-[32px] items-start justify-start sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[109px] items-start justify-start md:w-[100%] w-[43%]">
                <Img
                  src="images/img_group19_1.svg"
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

export default CategorieswithSidebarPage;
