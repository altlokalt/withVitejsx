import React from "react";

import {
  Img,
  Text,
  Button,
  Line,
  CheckBox,
  RatingBar,
  SelectBox,
  List,
} from "components";

const ProductListPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins justify-end mx-[auto] w-[100%]">
        <header className="flex items-center justify-center mr-[241px] md:px-[20px] w-[100%]">
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
        <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[144px] mr-[auto] mt-[31px] md:px-[20px] w-[10%] md:w-[100%]">
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
            className="font-medium text-gray_807 text-left w-[auto]"
            variant="body47"
          >
            Product List
          </Text>
        </div>
        <Text
          className="font-bold md:ml-[0] ml-[858px] mr-[1087px] mt-[39px] text-gray_807 text-left w-[auto]"
          variant="body22"
        >
          Product List
        </Text>
        <div className="flex items-end mt-[63px] pl-[144px] sm:pl-[20px] md:pl-[40px] w-[100%]">
          <div className="sm:h-[1729px] h-[1732px] md:h-[2520px] relative w-[100%]">
            <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-[17%]">
              <div className="flex flex-col gap-[31px] items-start justify-start md:w-[100%] w-[73%]">
                <div className="flex flex-col gap-[29px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-gray_807 text-left w-[auto]"
                    variant="body47"
                  >
                    Categories
                  </Text>
                  <Line className="bg-bluegray_111 h-[1px] w-[100%]" />
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start w-[auto]">
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_cut_gray_513.svg"
                      className="h-[32px] w-[32px]"
                      alt="cut"
                    />
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Jacket
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_file_gray_807.svg"
                      className="h-[32px] w-[32px]"
                      alt="file"
                    />
                    <Text
                      className="font-normal not-italic text-gray_807 text-left w-[auto]"
                      variant="body47"
                    >
                      Shirt
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_location_gray_513.svg"
                      className="h-[32px] w-[32px]"
                      alt="location"
                    />
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Pants
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_computer_gray_513.svg"
                      className="h-[32px] w-[32px]"
                      alt="computer"
                    />
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Shoes
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_settings_gray_513.svg"
                      className="h-[32px] w-[32px]"
                      alt="settings"
                    />
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Dress
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_signal_gray_513.svg"
                      className="h-[32px] w-[32px]"
                      alt="signal"
                    />
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Accesories
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_skirt.svg"
                      className="h-[32px] w-[32px]"
                      alt="Skirt"
                    />
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Skirt
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_arrowdown_gray_513.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowdown"
                    />
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      View more
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-bluegray_111 h-[1px] mt-[32px] w-[73%]" />
              <div className="h-[234px] md:h-[263px] mt-[32px] relative w-[49%]">
                <Text
                  className="absolute font-medium left-[0] text-gray_807 text-left top-[0] w-[auto]"
                  variant="body47"
                >
                  Filter by Price
                </Text>
                <div className="absolute flex flex-col gap-[24px] h-[max-content] inset-[0] items-start justify-start m-[auto] w-[auto]">
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
              </div>
              <Line className="bg-bluegray_111 h-[1px] mt-[85px] w-[73%]" />
              <div className="h-[277px] md:h-[283px] mt-[31px] relative w-[100%]">
                <Text
                  className="font-medium text-gray_807 text-left w-[auto]"
                  variant="body47"
                >
                  Filter by Rating
                </Text>
                <div className="absolute flex flex-col gap-[16px] h-[100%] inset-[0] items-start justify-start m-[auto] w-[auto]">
                  <div className="flex flex-row gap-[62px] items-center justify-start md:w-[100%] w-[26%]">
                    <Line className="bg-bluegray_111 h-[24px] w-[1px]" />
                    <div className="flex items-start justify-start w-[24px]">
                      <Img
                        src="images/img_star1_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="StarOne"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[21px] justify-start md:w-[100%] w-[45%]">
                    <div className="border-[3px] border-bluegray_111 border-solid h-[1px] w-[1px]"></div>
                    <div className="flex flex-row gap-[8px] items-start justify-start ml-[auto] w-[auto]">
                      <Img
                        src="images/img_star1_7.svg"
                        className="h-[24px] w-[24px]"
                        alt="StarOne One"
                      />
                      <Img
                        src="images/img_star2_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="StarTwo"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[22px] justify-start md:w-[100%] w-[63%]">
                    <div className="border-[3px] border-bluegray_111 border-solid h-[1px] w-[1px]"></div>
                    <div className="flex flex-row gap-[8px] items-start justify-start ml-[auto] w-[auto]">
                      <Img
                        src="images/img_star1_8.svg"
                        className="h-[24px] w-[24px]"
                        alt="StarOne Two"
                      />
                      <Img
                        src="images/img_star2_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="StarTwo One"
                      />
                      <Img
                        src="images/img_star3_24x24.svg"
                        className="h-[24px] w-[24px]"
                        alt="StarThree"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-start md:w-[100%] w-[36%]">
                    <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                      <Img
                        src="images/img_star1_9.svg"
                        className="h-[24px] w-[24px]"
                        alt="StarOne Three"
                      />
                      <Img
                        src="images/img_star2_2.svg"
                        className="h-[24px] w-[24px]"
                        alt="StarTwo Two"
                      />
                      <Img
                        src="images/img_star3_1.svg"
                        className="h-[24px] w-[24px]"
                        alt="StarThree One"
                      />
                      <Img
                        src="images/img_star5_24x24.svg"
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
              </div>
            </div>
            <div className="absolute flex flex-col gap-[30px] h-[100%] inset-y-[0] items-start justify-start my-[auto] right-[0] w-[87%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between md:w-[100%] w-[78%]">
                <Text
                  className="font-medium text-gray_513 text-left w-[auto]"
                  variant="body47"
                >
                  <span className="text-gray_513 text-[18px] font-poppins">
                    Viewing{" "}
                  </span>
                  <span className="text-gray_807 text-[18px] font-inter font-normal not-italic">
                    20 of 160
                  </span>
                  <span className="text-gray_513 text-[18px] font-poppins">
                    {" "}
                    product
                  </span>
                </Text>
                <SelectBox
                  className="font-normal leading-[normal] not-italic text-[18px] text-gray_513 text-left sm:w-[100%] w-[auto]"
                  placeholderClassName="text-gray_513"
                  name="sort"
                  placeholder="Sort by: Newest Items"
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
              <div className="sm:h-[1645px] h-[1675px] md:h-[2463px] relative w-[100%]">
                <div className="absolute bottom-[0] flex flex-row gap-[24px] items-center justify-center left-[30%] w-[auto]">
                  <Img
                    src="images/img_arrowleft_gray_513.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowleft"
                  />
                  <div className="flex flex-row gap-[13px] h-[50px] items-center justify-center w-[50px]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body47"
                    >
                      1
                    </Text>
                    <div className="bg-gray_807 h-[50px] w-[64%]"></div>
                  </div>
                  <div className="flex flex-row gap-[27px] h-[51px] items-center justify-center w-[51px]">
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      2
                    </Text>
                    <div className="border-[2px] border-gray_513 border-solid h-[51px] w-[28%]"></div>
                  </div>
                  <div className="flex flex-row gap-[32px] h-[51px] items-center justify-center w-[51px]">
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      3
                    </Text>
                    <div className="border-[2px] border-gray_513 border-solid h-[51px] w-[18%]"></div>
                  </div>
                  <Img
                    src="images/img_info_gray_513.svg"
                    className="h-[24px] w-[24px]"
                    alt="info"
                  />
                </div>
                <div className="absolute flex flex-col gap-[32px] h-[max-content] inset-[0] items-start justify-center m-[auto] overflow-auto w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[32px] items-start justify-start ml-[auto] md:w-[100%] w-[auto]">
                    <List
                      className="sm:flex-col flex-row gap-[33px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[43%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-[16px] justify-start w-[100%]">
                        <div className="flex items-center justify-start md:w-[100%] w-[2%]">
                          <Img
                            src="images/img_placeholder_245x6.png"
                            className="h-[245px] md:h-[auto] object-cover w-[100%]"
                            alt="placeholder"
                          />
                        </div>
                        <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[240px] w-[auto]">
                          <Text
                            className="font-medium text-center text-gray_807"
                            variant="body37"
                          >
                            Green <br />
                            Warm Jacket
                          </Text>
                          <Text
                            className="font-medium text-gray_513 text-left w-[auto]"
                            variant="body47"
                          >
                            $299
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[16px] justify-start w-[100%]">
                        <div className="flex items-center justify-start w-[1%] md:w-[100%]">
                          <Img
                            src="defaultNoData.png"
                            className="h-[245px] md:h-[auto] object-cover w-[100%]"
                            alt="placeholder One"
                          />
                        </div>
                        <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[242px] w-[auto]">
                          <Text
                            className="font-medium text-center text-gray_807"
                            variant="body37"
                          >
                            Black
                            <br />
                            Warm Jacket
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
                    <div className="flex items-center justify-start md:w-[100%] w-[9%]">
                      <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                        <Text
                          className="font-medium text-center text-gray_807"
                          variant="body37"
                        >
                          Blue Grey <br />
                          Warm Jacket
                        </Text>
                        <Text
                          className="font-medium text-gray_513 text-left w-[auto]"
                          variant="body47"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[8%]">
                      <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                        <Text
                          className="font-medium text-center text-gray_807"
                          variant="body37"
                        >
                          Blue Denim <br />
                          Jacket
                        </Text>
                        <Text
                          className="font-medium text-gray_513 text-left w-[auto]"
                          variant="body47"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[9%]">
                      <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                        <Text
                          className="font-medium text-center text-gray_807"
                          variant="body37"
                        >
                          Purple <br />
                          Warm Jacket
                        </Text>
                        <Text
                          className="font-medium text-gray_513 text-left w-[auto]"
                          variant="body47"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-x-auto w-[100%]">
                    <div className="h-[1245px] md:h-[1388px] sm:h-[445px] relative w-[100%]">
                      <div className="absolute flex md:flex-col flex-row gap-[32px] h-[max-content] inset-y-[0] items-start justify-start left-[0] my-[auto] w-[auto]">
                        <div className="flex flex-col gap-[228px] md:gap-[40px] justify-start md:w-[100%] w-[24%]">
                          <div className="flex items-center justify-start md:w-[100%] w-[2%]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[97px] md:h-[auto] object-cover w-[100%]"
                              alt="placeholder Two"
                            />
                          </div>
                          <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[240px] w-[auto]">
                            <Text
                              className="font-medium text-center text-gray_807"
                              variant="body37"
                            >
                              Black <br />
                              Warm Jacket
                            </Text>
                            <Text
                              className="font-medium text-gray_513 text-left w-[auto]"
                              variant="body47"
                            >
                              $299
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[228px] md:gap-[40px] justify-start md:w-[100%] w-[22%]">
                          <div className="flex items-center justify-start w-[1%] md:w-[100%]">
                            <Img
                              src="images/img_placeholder_97x1.png"
                              className="h-[97px] md:h-[auto] object-cover w-[100%]"
                              alt="placeholder Three"
                            />
                          </div>
                          <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[243px] w-[auto]">
                            <Text
                              className="font-medium text-center text-gray_807"
                              variant="body37"
                            >
                              Black
                              <br />
                              Brief Case
                            </Text>
                            <Text
                              className="font-medium text-gray_513 text-left w-[auto]"
                              variant="body47"
                            >
                              $299
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-center justify-start md:w-[100%] w-[11%]">
                          <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                            <Text
                              className="font-medium text-center text-gray_807"
                              variant="body37"
                            >
                              Modern Classic
                              <br />
                              Watch
                            </Text>
                            <Text
                              className="font-medium text-gray_513 text-left w-[auto]"
                              variant="body47"
                            >
                              $299
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-center justify-start md:w-[100%] w-[9%]">
                          <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                            <Text
                              className="font-medium text-center text-gray_807"
                              variant="body37"
                            >
                              Blue Denim <br />
                              Skirt
                            </Text>
                            <Text
                              className="font-medium text-gray_513 text-left w-[auto]"
                              variant="body47"
                            >
                              $299
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex md:flex-col flex-row gap-[32px] items-start justify-start left-[0] top-[0] w-[auto]">
                        <div className="flex flex-col gap-[122px] md:gap-[40px] justify-start md:w-[100%] w-[19%]">
                          <div className="flex items-center justify-start md:w-[100%] w-[2%]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[171px] md:h-[auto] object-cover w-[100%]"
                              alt="placeholder Four"
                            />
                          </div>
                          <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[242px] w-[auto]">
                            <Text
                              className="font-medium text-center text-gray_807"
                              variant="body37"
                            >
                              Casual <br />
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
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end md:w-[100%] w-[21%]">
                          <div className="flex items-center justify-start mb-[188px] w-[1%] md:w-[100%]">
                            <Img
                              src="images/img_placeholder_166x1.png"
                              className="h-[166px] md:h-[auto] object-cover w-[100%]"
                              alt="placeholder Five"
                            />
                          </div>
                          <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[242px] md:mt-[0] mt-[283px] w-[auto]">
                            <Text
                              className="font-medium text-center text-gray_807 w-[auto]"
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
                          <div className="flex items-center justify-start md:ml-[0] ml-[966px] md:mt-[0] mt-[283px] md:w-[100%] w-[36%]">
                            <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                              <Text
                                className="font-medium text-center text-gray_807 w-[auto]"
                                variant="body37"
                              >
                                Pink Jacket
                              </Text>
                              <Text
                                className="font-medium text-gray_513 text-left w-[auto]"
                                variant="body47"
                              >
                                $299
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[15px] justify-start md:w-[100%] w-[14%]">
                          <div className="flex items-center justify-start md:ml-[0] ml-[244px] w-[1%] md:w-[100%]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[245px] md:h-[auto] object-cover w-[100%]"
                              alt="placeholder Six"
                            />
                          </div>
                          <div className="flex flex-col gap-[8px] items-center justify-start mr-[105px] w-[auto]">
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
                        <div className="flex items-center justify-start md:w-[100%] w-[8%]">
                          <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                            <Text
                              className="font-medium text-center text-gray_807"
                              variant="body37"
                            >
                              Casual <br />
                              Grey Shoes
                            </Text>
                            <Text
                              className="font-medium text-gray_513 text-left w-[auto]"
                              variant="body47"
                            >
                              $299
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[32px] inset-x-[0] items-start justify-start mx-[auto] w-[auto]">
                        <div className="flex flex-col gap-[270px] md:gap-[40px] justify-start md:w-[100%] w-[23%]">
                          <div className="flex items-center justify-start md:w-[100%] w-[2%]">
                            <Img
                              src="defaultNoData.png"
                              className="h-[68px] md:h-[auto] object-cover w-[100%]"
                              alt="placeholder Seven"
                            />
                          </div>
                          <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[239px] w-[auto]">
                            <Text
                              className="font-medium text-center text-gray_807"
                              variant="body37"
                            >
                              Black Adventure
                              <br />
                              Boots
                            </Text>
                            <Text
                              className="font-medium text-gray_513 text-left w-[auto]"
                              variant="body47"
                            >
                              $299
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-end md:w-[100%] w-[21%]">
                          <div className="flex items-center justify-start w-[1%] md:w-[100%]">
                            <Img
                              src="images/img_placeholder_68x1.png"
                              className="h-[68px] md:h-[auto] object-cover w-[100%]"
                              alt="placeholder Eight"
                            />
                          </div>
                          <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[242px] md:mt-[0] mt-[338px] w-[auto]">
                            <Text
                              className="font-medium text-center text-gray_807"
                              variant="body37"
                            >
                              Black Formal
                              <br />
                              Highheels
                            </Text>
                            <Text
                              className="font-medium text-gray_513 text-left w-[auto]"
                              variant="body47"
                            >
                              $299
                            </Text>
                          </div>
                          <div className="flex items-center justify-start md:ml-[0] ml-[958px] md:mt-[0] mt-[338px] md:w-[100%] w-[39%]">
                            <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                              <Text
                                className="font-medium text-center text-gray_807"
                                variant="body37"
                              >
                                Green
                                <br />
                                Sport Jacket
                              </Text>
                              <Text
                                className="font-medium text-gray_513 text-left w-[auto]"
                                variant="body47"
                              >
                                $299
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[16px] justify-start md:w-[100%] w-[13%]">
                          <div className="flex items-center justify-start md:ml-[0] ml-[245px] w-[1%] md:w-[100%]">
                            <Img
                              src="images/img_placeholder_24.png"
                              className="h-[245px] md:h-[auto] object-cover w-[100%]"
                              alt="placeholder Nine"
                            />
                          </div>
                          <div className="flex flex-col gap-[8px] items-center justify-start mr-[79px] w-[auto]">
                            <Text
                              className="font-medium text-center text-gray_807"
                              variant="body37"
                            >
                              Brown <br />
                              Casual Shoes
                            </Text>
                            <Text
                              className="font-medium text-gray_513 text-left w-[auto]"
                              variant="body47"
                            >
                              $299
                            </Text>
                          </div>
                        </div>
                        <div className="flex items-center justify-start md:w-[100%] w-[7%]">
                          <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                            <Text
                              className="font-medium text-center text-gray_807"
                              variant="body37"
                            >
                              Gray <br />
                              Longpants
                            </Text>
                            <Text
                              className="font-medium text-gray_513 text-left w-[auto]"
                              variant="body47"
                            >
                              $299
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_807 flex flex-col md:gap-[40px] gap-[96px] items-center justify-end mr-[241px] mt-[100px] p-[32px] md:px-[20px] md:w-[100%] w-[89%]">
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
                <Text
                  className="font-normal not-italic text-gray_513 text-left w-[auto]"
                  variant="body47"
                >
                  Drop your email below to get update, promotions, coupons, and
                  more!
                </Text>
                <div className="h-[35px] md:h-[52px] mt-[22px] relative w-[100%]">
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

export default ProductListPage;
