import React from "react";

import { Text, Img, Line, List, Button, RatingBar, Input } from "components";

const HomepageVThreePage = () => {
  function handleNavigate6() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate7() {
    window.location.href = "https://www.facebook.com/login/";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-end mx-[auto] overflow-auto w-[100%]">
        <div className="flex flex-col items-start pr-[468px] md:px-[20px] w-[100%]">
          <header className="flex items-center justify-center w-[100%]">
            <div className="flex flex-col items-center justify-center w-[100%]">
              <div className="flex flex-col items-center justify-start w-[100%]">
                <ul className="bg-white_A700 flex md:flex-col flex-row md:hidden items-center justify-start p-[28px] sm:px-[20px] w-[100%] common-row-list">
                  <li className="mt-[5px] mb-[4px] ml-[115px] sm:w-[100%] sm:my-[10px] w-[30%]">
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[56px] items-start justify-start sm:w-[100%]">
                      <a
                        className="cursor-pointer hover:font-bold font-normal not-italic text-[18px] text-gray_807 text-left w-[auto]"
                        href="javascript:"
                      >
                        Categories
                      </a>
                      <a
                        className="cursor-pointer hover:font-bold font-normal not-italic text-[18px] text-gray_807 text-left w-[auto]"
                        href="javascript:"
                      >
                        New Arrival
                      </a>
                      <a
                        className="cursor-pointer hover:font-bold font-normal not-italic text-[18px] text-gray_807 text-left w-[auto]"
                        href="javascript:"
                      >
                        Features
                      </a>
                      <a
                        className="cursor-pointer hover:font-bold font-normal not-italic text-[18px] text-gray_807 text-left w-[auto]"
                        href="javascript:"
                      >
                        Collections
                      </a>
                    </div>
                  </li>
                  <li className="mt-[3px] ml-[213px] sm:w-[100%] sm:my-[10px] w-[7%]">
                    <div className="flex flex-row gap-[8px] items-start justify-center">
                      <Img
                        src="images/img_volume_gray_807.svg"
                        className="h-[24px] mt-[4px] w-[auto]"
                        alt="volume"
                      />
                      <a
                        className="cursor-pointer hover:font-bold font-bold sm:text-[20px] md:text-[22px] text-[24px] text-gray_807 text-left w-[auto]"
                        href="javascript:"
                      >
                        Elliye
                      </a>
                    </div>
                  </li>
                  <li className="ml-[592px] sm:w-[100%] sm:my-[10px] w-[10%] my-[7px]">
                    <div className="flex flex-row gap-[48px] items-start justify-start">
                      <Img
                        src="images/img_search_gray_807.svg"
                        className="h-[24px] w-[24px]"
                        alt="search"
                      />
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
                </ul>
                <Line className="bg-gray_59 h-[1px] w-[85%]" />
              </div>
              <List
                className="bg-white_A700 sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-5 grid-cols-9 justify-center max-w-[1929px] w-[100%]"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-row gap-[34px] h-[120px] items-center justify-center w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_cut_bluegray_111.svg"
                      className="h-[48px] w-[48px]"
                      alt="cut"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_111 text-left w-[auto]"
                      variant="body47"
                    >
                      Jacket
                    </Text>
                  </div>
                  <div className="bg-white_A700 h-[120px] w-[21%]"></div>
                </div>
                <div className="flex flex-1 flex-row gap-[48px] h-[120px] items-center justify-center w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_info_bluegray_111.svg"
                      className="h-[48px] w-[48px]"
                      alt="info"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_111 text-left w-[auto]"
                      variant="body47"
                    >
                      Shirt
                    </Text>
                  </div>
                  <div className="bg-white_A700 h-[120px] w-[20%]"></div>
                </div>
                <div className="flex flex-1 flex-row gap-[46px] h-[120px] items-center justify-center w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_location_bluegray_111.svg"
                      className="h-[48px] w-[48px]"
                      alt="location"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_111 text-left w-[auto]"
                      variant="body47"
                    >
                      Pants
                    </Text>
                  </div>
                  <div className="bg-white_A700 h-[120px] w-[19%]"></div>
                </div>
                <div className="flex flex-1 flex-row gap-[44px] h-[120px] items-center justify-center w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_user_gray_807_48x48.svg"
                      className="h-[48px] w-[48px]"
                      alt="user"
                    />
                    <Text
                      className="font-normal not-italic text-gray_807 text-left w-[auto]"
                      variant="body47"
                    >
                      Shoes
                    </Text>
                  </div>
                  <div className="bg-white_A700 h-[120px] w-[17%]"></div>
                </div>
                <div className="flex flex-1 flex-row gap-[50px] h-[120px] items-center justify-center w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_settings_bluegray_111.svg"
                      className="h-[48px] w-[48px]"
                      alt="settings"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_111 text-left w-[auto]"
                      variant="body47"
                    >
                      Dress
                    </Text>
                  </div>
                  <div className="bg-white_A700 h-[120px] w-[16%]"></div>
                </div>
                <div className="flex flex-1 flex-row h-[120px] items-center justify-center w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_signal_bluegray_111.svg"
                      className="h-[48px] w-[48px]"
                      alt="signal"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_111 text-left w-[auto]"
                      variant="body47"
                    >
                      Accesories
                    </Text>
                  </div>
                  <div className="bg-white_A700 h-[120px] ml-[4px] w-[15%]"></div>
                </div>
                <div className="flex flex-1 flex-row gap-[54px] h-[120px] items-center justify-center w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_skirt_bluegray_111.svg"
                      className="h-[48px] w-[48px]"
                      alt="Skirt"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_111 text-left w-[auto]"
                      variant="body47"
                    >
                      Skirt
                    </Text>
                  </div>
                  <div className="bg-white_A700 h-[120px] w-[15%]"></div>
                </div>
                <div className="flex flex-1 flex-row h-[120px] items-center justify-center w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_bra.svg"
                      className="h-[48px] w-[48px]"
                      alt="Bra"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_111 text-left w-[auto]"
                      variant="body47"
                    >
                      Underwear
                    </Text>
                  </div>
                  <div className="bg-white_A700 h-[120px] ml-[4px] w-[14%]"></div>
                </div>
                <div className="flex flex-1 flex-row gap-[56px] h-[120px] items-center justify-center w-[100%]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                    <Img
                      src="images/img_car_bluegray_111.svg"
                      className="h-[48px] w-[48px]"
                      alt="car"
                    />
                    <Text
                      className="font-normal not-italic text-bluegray_111 text-left w-[auto]"
                      variant="body47"
                    >
                      More
                    </Text>
                  </div>
                  <div className="bg-white_A700 h-[120px] w-[13%]"></div>
                </div>
              </List>
            </div>
          </header>
          <div className="h-[718px] relative w-[100%]">
            <Img
              src="images/img_placeholder_718x1920.png"
              className="h-[718px] m-[auto] object-cover w-[100%]"
              alt="placeholder"
            />
            <div className="absolute bg-white_A700_82 flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[157px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[126px] md:w-[100%] w-[43%]">
                <Button className="bg-white_A700 cursor-pointer font-medium font-poppins leading-[normal] min-w-[271px] p-[10px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-gray_807 w-[auto]">
                  50% Off Limited Offer
                </Button>
                <Text
                  className="font-playfairdisplay mt-[22px] text-gray_807 text-left w-[auto]"
                  variant="body1"
                >
                  Summer Collection
                </Text>
                <Text
                  className="font-normal font-poppins leading-[32.00px] mt-[25px] not-italic text-gray_807 text-left w-[100%]"
                  variant="body47"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </Text>
                <Button
                  className="bg-gray_807 flex items-center justify-center mt-[80px] p-[24px] sm:px-[20px] text-center"
                  rightIcon={
                    <Img
                      src="images/img_arrowright_white_a700_48x48.svg"
                      className="ml-[10px] text-center"
                      alt="arrow_right"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-medium font-poppins leading-[normal] sm:text-[20px] md:text-[22px] text-[24px] text-left text-white_A700">
                    Shop Now
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[32px] items-center justify-start md:ml-[0] ml-[144px] mt-[31px] md:w-[100%] w-[85%]">
            <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <Text
                className="font-bold text-gray_807 text-left w-[auto]"
                variant="body22"
              >
                Featured
              </Text>
              <div className="flex items-center justify-start w-[auto]">
                <Text
                  className="font-medium text-gray_807 text-left w-[auto]"
                  variant="body47"
                >
                  View all
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[32%]">
                <div className="sm:gap-[20px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[245px] relative w-[245px]"
                      style={{
                        backgroundImage: "url('images/img_maskgroup_7.png')",
                      }}
                    >
                      <Img
                        src="defaultNoData.png"
                        className="h-[245px] m-[auto] object-cover w-[245px]"
                        alt="RectangleThirtyNine"
                      />
                      <Img
                        src="images/img_rectangle40_5.png"
                        className="absolute h-[245px] inset-[0] justify-center m-[auto] object-cover w-[245px]"
                        alt="RectangleForty"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
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
                  <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[245px] relative w-[245px]"
                      style={{
                        backgroundImage: "url('images/defaultNoData.png')",
                      }}
                    >
                      <Img
                        src="images/img_placeholder_166x1.png"
                        className="h-[245px] m-[auto] object-cover w-[245px]"
                        alt="RectangleThirtyNine One"
                      />
                      <Img
                        src="defaultNoData.png"
                        className="absolute h-[245px] inset-[0] justify-center m-[auto] object-cover w-[245px]"
                        alt="RectangleForty One"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
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
                  <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[245px] relative w-[245px]"
                      style={{
                        backgroundImage: "url('images/img_maskgroup_9.png')",
                      }}
                    >
                      <Img
                        src="images/img_rectangle40_5.png"
                        className="h-[245px] m-[auto] object-cover w-[245px]"
                        alt="placeholder One"
                      />
                      <Img
                        src="images/img_placeholder_166x1.png"
                        className="absolute h-[245px] inset-[0] justify-center m-[auto] object-cover w-[245px]"
                        alt="placeholder One"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
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
                  <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[245px] relative w-[245px]"
                      style={{
                        backgroundImage: "url('images/img_maskgroup_10.png')",
                      }}
                    >
                      <Img
                        src="images/img_placeholder_68x1.png"
                        className="h-[245px] m-[auto] object-cover w-[245px]"
                        alt="placeholder Two"
                      />
                      <Img
                        src="images/img_placeholder_97x1.png"
                        className="absolute h-[245px] inset-[0] justify-center m-[auto] object-cover w-[245px]"
                        alt="placeholder One One"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
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
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[32%]">
                <div className="bg-gray_59 flex flex-col items-center justify-start pb-[55px] w-[100%]">
                  <Img
                    src="images/img_placeholder_400x521.png"
                    className="h-[400px] sm:h-[auto] object-cover w-[100%]"
                    alt="placeholder Three"
                  />
                  <div className="flex flex-col gap-[16px] items-center justify-start mt-[27px] w-[auto]">
                    <Text
                      className="font-medium text-center text-gray_807"
                      variant="body22"
                    >
                      Brown <br />
                      Casual Sneaker
                    </Text>
                    <Text
                      className="font-medium text-gray_513 text-left w-[auto]"
                      variant="body22"
                    >
                      $299
                    </Text>
                  </div>
                  <Button className="bg-gray_807 cursor-pointer font-bold leading-[normal] mt-[47px] p-[16px] text-[18px] text-center text-white_A700 w-[200px]">
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[32%]">
                <div className="sm:gap-[20px] gap-[32px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[245px] relative w-[245px]"
                      style={{
                        backgroundImage: "url('images/defaultNoData.png')",
                      }}
                    >
                      <Img
                        src="defaultNoData.png"
                        className="h-[245px] m-[auto] object-cover w-[245px]"
                        alt="RectangleThirtyNine Two"
                      />
                      <Img
                        src="defaultNoData.png"
                        className="absolute h-[245px] inset-[0] justify-center m-[auto] object-cover w-[245px]"
                        alt="RectangleForty Two"
                      />
                    </div>
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
                  <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[245px] relative w-[245px]"
                      style={{
                        backgroundImage: "url('images/img_maskgroup_12.png')",
                      }}
                    >
                      <Img
                        src="images/img_rectangle39_7.png"
                        className="h-[245px] m-[auto] object-cover w-[245px]"
                        alt="RectangleThirtyNine Three"
                      />
                      <Img
                        src="defaultNoData.png"
                        className="absolute h-[245px] inset-[0] justify-center m-[auto] object-cover w-[245px]"
                        alt="RectangleForty Three"
                      />
                    </div>
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
                  <div className="flex flex-1 flex-col gap-[16px] justify-start w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[245px] relative w-[245px]"
                      style={{
                        backgroundImage: "url('images/defaultNoData.png')",
                      }}
                    >
                      <Img
                        src="images/img_placeholder_245x245.png"
                        className="h-[245px] m-[auto] object-cover w-[245px]"
                        alt="placeholder Four"
                      />
                      <Img
                        src="defaultNoData.png"
                        className="absolute h-[245px] inset-[0] justify-center m-[auto] object-cover w-[245px]"
                        alt="placeholder One Two"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[42px] w-[auto]">
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
                  <div className="flex flex-1 flex-col gap-[16px] justify-start w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat h-[245px] relative w-[245px]"
                      style={{
                        backgroundImage: "url('images/defaultNoData.png')",
                      }}
                    >
                      <Img
                        src="defaultNoData.png"
                        className="h-[245px] m-[auto] object-cover w-[245px]"
                        alt="placeholder Five"
                      />
                      <Img
                        src="images/img_placeholder_26.png"
                        className="absolute h-[245px] inset-[0] justify-center m-[auto] object-cover w-[245px]"
                        alt="placeholder One Three"
                      />
                    </div>
                    <div className="flex flex-col gap-[8px] items-center justify-start md:ml-[0] ml-[42px] w-[auto]">
                      <Text
                        className="font-medium text-center text-gray_807"
                        variant="body37"
                      >
                        Casual <br />
                        Classic Watch
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
          <div className="md:h-[1515px] h-[426px] sm:h-[525px] md:ml-[0] ml-[144px] mt-[99px] relative md:w-[100%] w-[85%]">
            <div className="flex flex-col gap-[17px] h-[100%] items-start justify-start ml-[32px] mt-[30px] w-[auto]">
              <Text
                className="font-bold text-left text-white_A700 w-[auto]"
                variant="body37"
              >
                New Arrival
              </Text>
              <Text
                className="font-normal leading-[32.00px] not-italic text-left text-white_A700 w-[100%]"
                variant="body47"
              >
                Lorem ipsum dolor sit amet consectetur.
              </Text>
            </div>
            <div className="absolute flex inset-[0] justify-center m-[auto] w-[100%]">
              <div className="bg-gray_807 h-[426px] my-[auto] w-[24%]"></div>
              <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between ml-[-109px] my-[auto] w-[84%] z-[1]">
                <List
                  className="sm:flex-col flex-row gap-[26px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[50%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col gap-[16px] h-[362px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] shadow-bs64 w-[318px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[200px] md:h-[auto] object-cover w-[200px]"
                      alt="blackbusiness"
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
                  <div className="bg-white_A700 flex flex-col gap-[16px] h-[362px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] shadow-bs64 w-[318px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[200px] md:h-[auto] object-cover w-[200px]"
                      alt="pink3TZ3PBBOne"
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
                  className="sm:flex-col flex-row gap-[26px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[50%]"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 flex flex-col gap-[16px] h-[361px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] shadow-bs64 w-[318px]">
                    <Img
                      src="images/img_graytshirtisolatedpl5h46q.png"
                      className="h-[200px] md:h-[auto] object-cover w-[200px]"
                      alt="graytshirtisolatedPL5H46Q"
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
                  <div className="bg-white_A700 flex flex-col gap-[16px] h-[361px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] shadow-bs64 w-[318px]">
                    <Img
                      src="images/img_redcheckereds.png"
                      className="h-[200px] md:h-[auto] object-cover w-[200px]"
                      alt="redcheckereds"
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
          </div>
          <div className="flex md:flex-col flex-row gap-[32px] items-center justify-start md:ml-[0] ml-[144px] mt-[100px] md:w-[100%] w-[85%]">
            <div className="h-[400px] relative md:w-[100%] w-[49%]">
              <Img
                src="images/img_rectangle28.png"
                className="h-[400px] m-[auto] object-cover w-[100%]"
                alt="RectangleTwentyEight"
              />
              <Text
                className="absolute font-normal h-[max-content] inset-y-[0] left-[10%] my-[auto] not-italic text-left text-white_A700"
                variant="body22"
              >
                <span className="md:text-[34px] sm:text-[32px] text-white_A700 text-[36px] font-poppins">
                  Casual
                  <br />
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-white_A700 text-[48px] font-playfairdisplay font-bold">
                  Collection
                </span>
              </Text>
            </div>
            <div className="h-[400px] relative md:w-[100%] w-[50%]">
              <Img
                src="images/img_rectangle29.png"
                className="h-[400px] m-[auto] object-cover w-[100%]"
                alt="RectangleTwentyNine"
              />
              <Text
                className="absolute font-normal h-[max-content] inset-y-[0] left-[10%] my-[auto] not-italic text-left text-white_A700"
                variant="body22"
              >
                <span className="md:text-[34px] sm:text-[32px] text-white_A700 text-[36px] font-poppins">
                  Big Vibe <br />
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-white_A700 text-[48px] font-playfairdisplay font-bold">
                  Collection
                </span>
              </Text>
            </div>
          </div>
          <div className="flex items-center justify-start mt-[100px] w-[100%]">
            <div className="h-[362px] md:h-[466px] sm:h-[964px] relative w-[100%]">
              <div className="absolute bg-gray_807 flex inset-x-[0] items-start justify-start mx-[auto] p-[57px] sm:px-[20px] md:px-[40px] top-[0] w-[100%]">
                <Text
                  className="font-bold mb-[158px] md:ml-[0] ml-[86px] text-left text-white_A700 w-[auto]"
                  variant="body37"
                >
                  Why Choose Us
                </Text>
              </div>
              <List
                className="absolute bottom-[0] sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-x-[0] justify-center mx-[auto] w-[85%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-center sm:ml-[0] sm:px-[20px] px-[32px] py-[64px] shadow-bs65 sm:w-[100%] w-[384px]">
                  <Img
                    src="images/img_music_gray_807.svg"
                    className="h-[48px] w-[48px]"
                    alt="music"
                  />
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                    <Text
                      className="font-bold text-gray_807 text-left w-[auto]"
                      variant="body47"
                    >
                      Free Delivery
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_513 text-left"
                      variant="body47"
                    >
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-center sm:ml-[0] sm:px-[20px] px-[32px] py-[64px] shadow-bs65 sm:w-[100%] w-[384px]">
                  <Img
                    src="images/img_computer_gray_807.svg"
                    className="h-[48px] w-[48px]"
                    alt="computer"
                  />
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                    <Text
                      className="font-bold text-gray_807 text-left w-[auto]"
                      variant="body47"
                    >
                      Payment Method
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_513 text-left"
                      variant="body47"
                    >
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-center sm:ml-[0] sm:px-[20px] px-[32px] py-[64px] shadow-bs65 sm:w-[100%] w-[384px]">
                  <Img
                    src="images/img_clock_gray_807.svg"
                    className="h-[48px] w-[48px]"
                    alt="clock"
                  />
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                    <Text
                      className="font-bold text-gray_807 text-left w-[auto]"
                      variant="body47"
                    >
                      Warranty
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_513 text-left"
                      variant="body47"
                    >
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-center sm:ml-[0] sm:px-[20px] px-[32px] py-[64px] shadow-bs65 sm:w-[100%] w-[384px]">
                  <Img
                    src="images/img_music_gray_807_48x48.svg"
                    className="h-[48px] w-[48px]"
                    alt="music One"
                  />
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                    <Text
                      className="font-bold text-gray_807 text-left w-[auto]"
                      variant="body47"
                    >
                      Customer Support{" "}
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_513 text-left"
                      variant="body47"
                    >
                      This free shipping
                      <br />
                      only for selected region
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex items-end mt-[103px] pl-[144px] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[28px] items-start justify-start w-[100%]">
            <div className="h-[54px] relative w-[15%]">
              <Text
                className="font-bold m-[auto] text-gray_807 text-left w-[auto]"
                variant="body22"
              >
                Popular this Week
              </Text>
              <div className="absolute flex items-center justify-start left-[1%] top-[17%] w-[auto]">
                <Text
                  className="font-medium text-gray_807 text-left w-[auto]"
                  variant="body47"
                >
                  View all
                </Text>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[32px] items-start justify-start md:w-[100%] w-[auto]">
              <List
                className="sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[51%]"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[16px] justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat h-[245px] relative w-[3%]"
                    style={{
                      backgroundImage: "url('images/img_maskgroup_10.png')",
                    }}
                  >
                    <Img
                      src="images/img_placeholder_68x1.png"
                      className="h-[245px] m-[auto] object-cover w-[100%]"
                      alt="placeholder Six"
                    />
                    <Img
                      src="defaultNoData.png"
                      className="absolute h-[245px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
                      alt="placeholder One Four"
                    />
                  </div>
                  <div className="flex flex-col gap-[16px] items-center justify-start md:ml-[0] ml-[235px] w-[auto]">
                    <Text
                      className="font-medium text-center text-gray_807"
                      variant="body37"
                    >
                      Black Adventure
                      <br />
                      Boots
                    </Text>
                    <div className="flex items-start justify-start w-[auto]">
                      <RatingBar
                        className=""
                        value={4}
                        starCount={5}
                        color="#f6f7fb"
                        activeColor="#fae952"
                        size={16}
                      ></RatingBar>
                    </div>
                    <Text
                      className="font-medium text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-row h-[245px] items-center justify-start w-[1%] md:w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_maskgroup_9.png')",
                    }}
                  >
                    <Img
                      src="defaultNoData.png"
                      className="h-[245px] md:h-[auto] object-cover w-[100%]"
                      alt="placeholder Seven"
                    />
                    <Img
                      src="images/img_rectangle40_5.png"
                      className="h-[245px] md:h-[auto] ml-[2px] object-cover w-[100%]"
                      alt="placeholder One Five"
                    />
                  </div>
                  <div className="flex flex-col gap-[16px] items-center justify-start md:ml-[0] ml-[243px] w-[auto]">
                    <Text
                      className="font-medium text-center text-gray_807"
                      variant="body37"
                    >
                      Black Formal
                      <br />
                      Highheels
                    </Text>
                    <div className="flex items-start justify-start w-[auto]">
                      <RatingBar
                        className=""
                        value={4}
                        starCount={5}
                        color="#f6f7fb"
                        activeColor="#fae952"
                        size={16}
                      ></RatingBar>
                    </div>
                    <Text
                      className="font-medium text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[16px] justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-row h-[245px] items-center justify-end ml-[auto] w-[1%] md:w-[100%]"
                    style={{
                      backgroundImage: "url('images/defaultNoData.png')",
                    }}
                  >
                    <Img
                      src="defaultNoData.png"
                      className="h-[245px] md:h-[auto] object-cover w-[100%]"
                      alt="placeholder Eight"
                    />
                    <Img
                      src="defaultNoData.png"
                      className="h-[245px] md:h-[auto] ml-[2px] object-cover w-[100%]"
                      alt="placeholder One Six"
                    />
                  </div>
                  <div className="flex flex-col gap-[16px] items-center justify-start mr-[79px] w-[auto]">
                    <Text
                      className="font-medium text-center text-gray_807"
                      variant="body37"
                    >
                      Brown <br />
                      Casual Shoes
                    </Text>
                    <div className="flex items-start justify-start w-[auto]">
                      <RatingBar
                        className=""
                        value={4}
                        starCount={5}
                        color="#f6f7fb"
                        activeColor="#fae952"
                        size={16}
                      ></RatingBar>
                    </div>
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
                className="sm:flex-col flex-row gap-[276px] md:gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[33%]"
                orientation="horizontal"
              >
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                    <Text
                      className="font-medium text-center text-gray_807"
                      variant="body37"
                    >
                      Gray <br />
                      Longpants
                    </Text>
                    <div className="flex items-start justify-start w-[auto]">
                      <RatingBar
                        className=""
                        value={4}
                        starCount={5}
                        color="#f6f7fb"
                        activeColor="#fae952"
                        size={16}
                      ></RatingBar>
                    </div>
                    <Text
                      className="font-medium text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                    <Text
                      className="font-medium text-center text-gray_807"
                      variant="body37"
                    >
                      Green
                      <br />
                      Sport Jacket
                    </Text>
                    <div className="flex items-start justify-start w-[auto]">
                      <RatingBar
                        className=""
                        value={4}
                        starCount={5}
                        color="#f6f7fb"
                        activeColor="#fae952"
                        size={16}
                      ></RatingBar>
                    </div>
                    <Text
                      className="font-medium text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                    <Text
                      className="font-medium text-center text-gray_807"
                      variant="body37"
                    >
                      Blue Denim <br />
                      Skirt
                    </Text>
                    <div className="flex items-start justify-start w-[auto]">
                      <RatingBar
                        className=""
                        value={4}
                        starCount={5}
                        color="#f6f7fb"
                        activeColor="#fae952"
                        size={16}
                      ></RatingBar>
                    </div>
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
        </div>
        <div className="flex flex-col gap-[100px] md:gap-[40px] items-start mt-[99px] pr-[477px] md:px-[20px] w-[100%]">
          <Img
            src="images/img_brand.svg"
            className="h-[68px] md:ml-[0] ml-[475px] w-[auto]"
            alt="brand"
          />
          <div className="bg-gray_807 flex flex-col md:gap-[40px] gap-[64px] items-center justify-end p-[32px] sm:px-[20px] w-[100%]">
            <div className="flex items-center justify-start mt-[32px] md:w-[100%] w-[88%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[48px] items-start justify-start md:w-[100%] w-[26%]">
                  <div className="flex flex-col gap-[32px] items-start justify-start sm:w-[100%] w-[416px]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body37"
                    >
                      Contacts
                    </Text>
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
                  <div className="flex flex-col gap-[32px] items-start justify-start w-[auto]">
                    <Text
                      className="font-bold text-left text-white_A700 w-[auto]"
                      variant="body37"
                    >
                      Social Media
                    </Text>
                    <div className="flex flex-row gap-[24px] items-start justify-start w-[auto]">
                      <Img
                        src="images/img_instagram.svg"
                        className="h-[24px] w-[24px]"
                        alt="instagram"
                      />
                      <div className="flex h-[24px] items-center justify-start w-[24px]">
                        <div className="flex h-[24px] items-center justify-start w-[24px]">
                          <Img
                            src="images/img_twitter_white_a700.svg"
                            className="common-pointer h-[24px] w-[24px]"
                            onClick={handleNavigate6}
                            alt="twitter"
                          />
                        </div>
                      </div>
                      <Img
                        src="images/img_facebook_white_a700.svg"
                        className="common-pointer h-[24px] w-[24px]"
                        onClick={handleNavigate7}
                        alt="facebook"
                      />
                    </div>
                  </div>
                </div>
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
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Discount
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      Special Offer
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[32px] items-start justify-start md:ml-[0] ml-[172px] w-[245px]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body37"
                  >
                    Company
                  </Text>
                  <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
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
                <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[170px] md:w-[100%] w-[24%]">
                  <Text
                    className="font-bold text-left text-white_A700 w-[auto]"
                    variant="body37"
                  >
                    Join our Newsletter
                  </Text>
                  <Text
                    className="font-normal mt-[24px] not-italic text-gray_513 text-left w-[100%]"
                    variant="body47"
                  >
                    Drop your email below to get update, promotions, coupons,
                    and more!
                  </Text>
                  <Input
                    className="font-normal leading-[normal] not-italic p-[0] text-[18px] placeholder:text-bluegray_100_87 text-bluegray_100_87 text-center tracking-[0.36px] w-[100%]"
                    wrapClassName="bg-gray_807 border-[1px] border-solid border-white_A700 flex mt-[35px] pl-[24px] pr-[14px] py-[16px] sm:pl-[20px] w-[100%]"
                    type="email"
                    name="form"
                    placeholder="Enter your email"
                    suffix={
                      <div className="h-[60px] ml-[14px] w-[60px] bg-white_A700 p-[14px] flex justify-center items-center">
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
    </>
  );
};

export default HomepageVThreePage;
