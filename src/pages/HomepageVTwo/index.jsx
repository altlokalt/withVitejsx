import React from "react";

import {
  Img,
  Text,
  Button,
  Line,
  Slider,
  PagerIndicator,
  List,
  RatingBar,
  Input,
} from "components";

const HomepageVTwoPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-start justify-end mx-[auto] pr-[150px] sm:pr-[20px] md:pr-[40px] w-[100%]">
        <header className="flex items-center justify-center w-[100%]">
          <div className="bg-white_A700 flex flex-col items-center justify-center p-[21px] sm:px-[20px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[2px] md:w-[100%] w-[87%]">
              <div className="flex flex-row gap-[8px] items-start justify-start md:mt-[0] mt-[7px] md:w-[100%] w-[7%]">
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
              <div className="bg-white_A700 border-[2px] border-gray_59 border-solid flex flex-row sm:gap-[40px] items-center justify-between mb-[5px] md:ml-[0] ml-[411px] sm:pl-[20px] pl-[32px] md:w-[100%] w-[36%]">
                <Text
                  className="font-normal not-italic text-center text-gray_500_87 w-[auto]"
                  variant="body47"
                >
                  Search here
                </Text>
                <div className="bg-gray_807 flex h-[48px] md:h-[auto] items-center justify-center p-[16px] w-[48px]">
                  <Img
                    src="images/img_search_white_a700_18x18.svg"
                    className="h-[18px] w-[18px]"
                    alt="search"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-[32px] items-start justify-start md:ml-[0] ml-[304px] md:mt-[0] mt-[12px] w-[auto]">
                <Img
                  src="images/img_cart_gray_807.svg"
                  className="h-[24px] w-[24px]"
                  alt="cart"
                />
                <Img
                  src="images/img_mail_gray_807_24x24.svg"
                  className="h-[24px] w-[24px]"
                  alt="mail"
                />
              </div>
              <Button className="bg-gray_807 cursor-pointer font-bold leading-[normal] md:ml-[0] ml-[32px] p-[16px] text-[14px] text-center text-white_A700 w-[107px]">
                Login
              </Button>
            </div>
            <Line className="bg-gray_59 h-[1px] mt-[19px] w-[87%]" />
            <ul className="flex md:flex-col flex-row gap-[80px] md:hidden items-start justify-start mt-[22px] md:w-[100%] w-[auto] common-row-list">
              <li className="mt-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <a
                  className="cursor-pointer font-normal not-italic text-[18px] text-gray_807 text-left"
                  href="javascript:"
                >
                  Categories
                </a>
              </li>
              <li className="mb-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <a
                  className="cursor-pointer font-normal not-italic text-[18px] text-gray_807 text-left"
                  href="javascript:"
                >
                  New Arrival
                </a>
              </li>
              <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                <a
                  className="cursor-pointer font-normal not-italic text-[18px] text-gray_807 text-left"
                  href="javascript:"
                >
                  Features
                </a>
              </li>
              <li className="mb-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <a
                  className="cursor-pointer font-normal not-italic text-[18px] text-gray_807 text-left"
                  href="javascript:"
                >
                  Collections
                </a>
              </li>
              <li className="mb-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
                <a
                  className="cursor-pointer font-normal not-italic text-[18px] text-gray_807 text-left"
                  href="javascript:"
                >
                  Discount
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="h-[750px] relative w-[100%]">
          <div className="h-[750px] m-[auto] w-[100%]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 2 },
                1050: { items: 3 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              activeSlideCSS="scale-[1.00] absolute"
              ref={sliderRef}
              className="m-[auto] w-[100%]"
              items={[...Array(18)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex items-center justify-start mx-[10px]">
                    <div className="h-[750px] relative w-[100%]">
                      <Img
                        src="images/img_image1_750x1820.png"
                        className="h-[750px] m-[auto] object-cover w-[100%]"
                        alt="imageOne"
                      />
                      <div className="absolute bg-black_900_68 flex flex-col gap-[148px] md:gap-[40px] h-[100%] inset-[0] items-start justify-center m-[auto] p-[32px] sm:px-[20px] w-[100%]">
                        <div className="flex flex-col md:gap-[40px] gap-[80px] items-start justify-start md:ml-[0] ml-[104px] mt-[84px] md:w-[100%] w-[44%]">
                          <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                            <Text
                              className="font-medium font-poppins text-left text-white_A700 w-[auto]"
                              variant="body37"
                            >
                              50% Off Limited Offer
                            </Text>
                            <Text
                              className="font-bold font-playfairdisplay leading-[128.00px] text-left text-white_A700"
                              variant="body62"
                            >
                              Summer <br />
                              Collection
                            </Text>
                          </div>
                          <Button
                            className="bg-gray_807 flex items-center justify-center p-[24px] sm:px-[20px] text-center"
                            rightIcon={
                              <Img
                                src="images/img_arrowright_white_a700_48x48.svg"
                                className="ml-[10px] text-center"
                                alt="arrow_right"
                              />
                            }
                          >
                            <div className="bg-transparent cursor-pointer font-medium leading-[normal] sm:text-[20px] md:text-[22px] text-[24px] text-left text-white_A700">
                              Shop Now
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-[12px] bg-gray_807 w-[12px] relative" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-[12px] bg-white_A700 w-[12px] relative"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="absolute bottom-[4%] flex gap-[8px] h-[12px] left-[7%] w-[112px]"
              count={6}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[12px] bg-gray_807 w-[12px] relative"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[12px] bg-white_A700 w-[12px] relative"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
          <div className="absolute bottom-[4%] flex md:flex-col flex-row gap-[16px] items-center justify-center right-[0] shadow-bs62 w-[auto]">
            <div className="bg-white_A700 flex h-[160px] items-center justify-end p-[30px] sm:px-[20px] w-[160px]">
              <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                <Img
                  src="images/img_car_gray_807_96x96.svg"
                  className="h-[56px] w-[56px]"
                  alt="car"
                />
                <Text
                  className="font-normal not-italic text-gray_513 text-left w-[auto]"
                  variant="body47"
                >
                  Jacket
                </Text>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 grid-cols-3 md:w-[100%] w-[43%]"
              orientation="horizontal"
            >
              <div className="flex flex-row gap-[18px] h-[160px] items-center justify-between w-[100%]">
                <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_file_gray_807.svg"
                    className="h-[56px] w-[56px]"
                    alt="file"
                  />
                  <Text
                    className="font-normal not-italic text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    Shirt
                  </Text>
                </div>
                <div className="bg-white_A700 h-[160px] w-[54%]"></div>
              </div>
              <div className="flex flex-row gap-[51px] h-[160px] items-center justify-center w-[100%]">
                <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_cut_gray_807.svg"
                    className="h-[56px] w-[56px]"
                    alt="cut"
                  />
                  <Text
                    className="font-normal not-italic text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    Pants
                  </Text>
                </div>
                <div className="bg-white_A700 h-[160px] w-[33%]"></div>
              </div>
              <div className="flex flex-row h-[160px] items-center justify-between w-[100%]">
                <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_airplane_white_a700.svg"
                    className="h-[56px] w-[56px]"
                    alt="airplane"
                  />
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Shoes
                  </Text>
                </div>
                <div className="bg-gray_807 h-[160px] w-[24%]"></div>
              </div>
            </List>
            <div className="flex flex-row gap-[74px] items-center justify-center md:w-[100%] w-[159px]">
              <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                <Img
                  src="images/img_user_gray_807.svg"
                  className="h-[56px] w-[56px]"
                  alt="user"
                />
                <Text
                  className="font-normal not-italic text-gray_513 text-left w-[auto]"
                  variant="body47"
                >
                  Dress
                </Text>
              </div>
              <div className="bg-white_A700 h-[160px] w-[19%]"></div>
            </div>
            <div className="flex h-[160px] items-start justify-end sm:pr-[20px] pr-[30px] py-[30px] w-[160px]">
              <div className="flex flex-col gap-[16px] items-center justify-start w-[98px]">
                <Img
                  src="images/img_globe.svg"
                  className="h-[56px] w-[56px]"
                  alt="globe"
                />
                <Text
                  className="font-normal not-italic text-gray_513 text-left w-[auto]"
                  variant="body47"
                >
                  Accesories
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Img
          src="images/img_brands.svg"
          className="h-[100px] md:ml-[0] ml-[421px] mt-[100px] w-[1078px]"
          alt="brands"
        />
        <div className="flex md:flex-col flex-row gap-[32px] items-center justify-start md:ml-[0] ml-[144px] mr-[auto] mt-[100px] md:w-[100%] w-[82%]">
          <div className="flex flex-col gap-[32px] items-center justify-start md:w-[100%] w-[49%]">
            <div className="h-[400px] relative w-[100%]">
              <Img
                src="images/img_placeholder_400x800.png"
                className="h-[400px] m-[auto] object-cover w-[100%]"
                alt="placeholder"
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
            <div className="h-[400px] relative w-[100%]">
              <Img
                src="images/img_placeholder_15.png"
                className="h-[400px] m-[auto] object-cover w-[100%]"
                alt="placeholder One"
              />
              <Text
                className="absolute font-normal h-[max-content] inset-y-[0] left-[11%] my-[auto] not-italic text-gray_807 text-left"
                variant="body22"
              >
                <span className="md:text-[34px] sm:text-[32px] text-gray_807 text-[36px] font-inter">
                  Summer <br />
                </span>
                <span className="md:text-[44px] sm:text-[38px] text-gray_807 text-[48px] font-playfairdisplay font-bold">
                  Collection
                </span>
              </Text>
            </div>
          </div>
          <div className="h-[832px] relative md:w-[100%] w-[50%]">
            <Img
              src="images/img_placeholder_832x801.png"
              className="h-[832px] m-[auto] object-cover w-[100%]"
              alt="placeholder Two"
            />
            <Text
              className="absolute font-normal left-[10%] not-italic text-left text-white_A700 top-[36%]"
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
        <div className="flex flex-col gap-[31px] items-center justify-start md:ml-[0] ml-[144px] mt-[99px] md:w-[100%] w-[82%]">
          <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
            <Text
              className="font-bold text-gray_807 text-left w-[auto]"
              variant="body22"
            >
              Featured
            </Text>
            <div className="flex flex-row gap-[9px] items-center justify-between w-[7%]">
              <Text
                className="font-medium text-gray_807 text-left w-[auto]"
                variant="body47"
              >
                View all
              </Text>
              <Img
                src="images/img_menu_gray_807.svg"
                className="h-[31px] w-[31px]"
                alt="menu"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between w-[100%]">
            <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[33%]">
              <div className="h-[761px] relative w-[100%]">
                <Img
                  src="images/img_placeholder_761x523.png"
                  className="h-[761px] m-[auto] object-cover w-[100%]"
                  alt="placeholder Three"
                />
                <Text
                  className="absolute font-normal inset-x-[0] mx-[auto] not-italic text-center text-gray_807 top-[7%]"
                  variant="body22"
                >
                  <span className="md:text-[34px] sm:text-[32px] text-gray_807 text-[36px] font-poppins">
                    Discover Our <br />
                  </span>
                  <span className="md:text-[34px] sm:text-[32px] text-gray_807 text-[36px] font-poppins font-bold">
                    Featured Product
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[66%]">
              <div className="md:gap-[20px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat h-[245px] relative w-[245px]"
                    style={{
                      backgroundImage: "url('images/defaultNoData.png')",
                    }}
                  >
                    <Img
                      src="images/img_rectangle39.png"
                      className="h-[245px] m-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine"
                    />
                    <Img
                      src="defaultNoData.png"
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
                      src="images/img_rectangle39_245x245.png"
                      className="h-[245px] m-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine One"
                    />
                    <Img
                      src="images/img_rectangle39.png"
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
                      backgroundImage: "url('images/defaultNoData.png')",
                    }}
                  >
                    <Img
                      src="images/img_rectangle39_1.png"
                      className="h-[245px] m-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine Two"
                    />
                    <Img
                      src="images/img_rectangle40_245x245.png"
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
                      backgroundImage: "url('images/img_maskgroup_3.png')",
                    }}
                  >
                    <Img
                      src="defaultNoData.png"
                      className="h-[245px] m-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine Three"
                    />
                    <Img
                      src="images/img_rectangle40_1.png"
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
                <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat h-[245px] relative w-[245px]"
                    style={{
                      backgroundImage: "url('images/defaultNoData.png')",
                    }}
                  >
                    <Img
                      src="images/img_rectangle39_3.png"
                      className="h-[245px] m-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine Four"
                    />
                    <Img
                      src="defaultNoData.png"
                      className="absolute h-[245px] inset-[0] justify-center m-[auto] object-cover w-[245px]"
                      alt="RectangleForty Four"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
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
                <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat h-[245px] relative w-[245px]"
                    style={{
                      backgroundImage: "url('images/img_maskgroup_5.png')",
                    }}
                  >
                    <Img
                      src="defaultNoData.png"
                      className="h-[245px] m-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine Five"
                    />
                    <Img
                      src="images/img_rectangle39_3.png"
                      className="absolute h-[245px] inset-[0] justify-center m-[auto] object-cover w-[245px]"
                      alt="RectangleForty Five"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
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
                </div>
                <div className="flex flex-1 flex-col gap-[16px] items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat h-[245px] relative w-[245px]"
                    style={{
                      backgroundImage: "url('images/defaultNoData.png')",
                    }}
                  >
                    <Img
                      src="images/img_rectangle39_5.png"
                      className="h-[245px] m-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine Six"
                    />
                    <Img
                      src="images/img_rectangle40_3.png"
                      className="absolute h-[245px] inset-[0] justify-center m-[auto] object-cover w-[245px]"
                      alt="RectangleForty Six"
                    />
                  </div>
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
                <div className="flex flex-1 flex-col gap-[15px] items-center justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat h-[245px] relative w-[245px]"
                    style={{
                      backgroundImage: "url('images/defaultNoData.png')",
                    }}
                  >
                    <Img
                      src="images/img_rectangle39_3.png"
                      className="h-[245px] m-[auto] object-cover w-[245px]"
                      alt="RectangleThirtyNine Seven"
                    />
                    <Img
                      src="defaultNoData.png"
                      className="absolute h-[245px] inset-[0] justify-center m-[auto] object-cover w-[245px]"
                      alt="RectangleForty Seven"
                    />
                  </div>
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
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[1655px] sm:h-[534px] h-[579px] mt-[99px] relative md:w-[100%] w-[96%]">
          <div className="absolute bg-gray_807 flex inset-x-[0] items-start justify-start mx-[auto] p-[43px] sm:px-[20px] md:px-[40px] top-[0] w-[100%]">
            <Text
              className="font-bold mb-[271px] md:ml-[0] ml-[100px] text-left text-white_A700 w-[auto]"
              variant="body22"
            >
              Limited Offer
            </Text>
          </div>
          <List
            className="absolute bottom-[0] sm:flex-col flex-row gap-[32px] grid md:grid-cols-1 grid-cols-2 inset-x-[0] justify-center mx-[auto] w-[85%]"
            orientation="horizontal"
          >
            <div className="bg-gray_59 flex md:flex-col flex-row gap-[48px] items-center justify-start sm:ml-[0] p-[32px] sm:px-[20px] shadow-bs63 w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[32px] items-center justify-start md:w-[100%] w-[38%]">
                <div className="flex h-[279px] items-center justify-start w-[279px]">
                  <Img
                    src="images/img_rectangle45.png"
                    className="h-[279px] md:h-[auto] object-cover w-[279px]"
                    alt="RectangleFortyFive"
                  />
                </div>
                <Button className="bg-gray_807 cursor-pointer font-bold leading-[normal] p-[16px] text-[18px] text-center text-white_A700 w-[200px]">
                  Add to Cart
                </Button>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[53%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_807 text-left w-[auto]"
                    variant="body37"
                  >
                    Limited Deals
                  </Text>
                  <div className="flex flex-row gap-[32px] items-center justify-between mt-[25px] w-[100%]">
                    <div className="border-[1px] border-gray_513 border-solid flex h-[107px] items-center justify-start p-[17px] w-[107px]">
                      <div className="flex flex-col gap-[8px] items-center justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          08
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_807 text-left w-[auto]"
                          variant="body47"
                        >
                          Hours
                        </Text>
                      </div>
                    </div>
                    <div className="border-[1px] border-gray_513 border-solid flex h-[107px] items-center justify-start p-[17px] w-[107px]">
                      <div className="flex flex-col gap-[8px] h-[71px] items-center justify-start w-[71px]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          58
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_807 text-left w-[auto]"
                          variant="body47"
                        >
                          Minutes
                        </Text>
                      </div>
                    </div>
                    <div className="border-[1px] border-gray_513 border-solid flex h-[107px] items-center justify-start p-[14px] w-[107px]">
                      <div className="flex flex-col gap-[8px] items-center justify-start my-[3px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          18
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_807 text-left w-[auto]"
                          variant="body47"
                        >
                          Seconds
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-bold mt-[23px] text-gray_807 text-left w-[auto]"
                    variant="body37"
                  >
                    Black Warm Jacket{" "}
                  </Text>
                  <div className="flex flex-row gap-[24px] items-center justify-start mt-[16px] md:w-[100%] w-[36%]">
                    <Text
                      className="font-normal line-through not-italic text-gray_513 text-left w-[auto]"
                      variant="body37"
                    >
                      $299
                    </Text>
                    <Text
                      className="font-medium text-gray_807 text-left w-[auto]"
                      variant="body37"
                    >
                      $199
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray_59 flex md:flex-col flex-row gap-[48px] items-center justify-start sm:ml-[0] p-[32px] sm:px-[20px] shadow-bs63 w-[100%]">
              <div className="flex md:flex-1 flex-col gap-[32px] items-center justify-start md:w-[100%] w-[38%]">
                <div className="flex h-[279px] items-center justify-start w-[279px]">
                  <Img
                    src="images/img_rectangle45_279x279.png"
                    className="h-[279px] md:h-[auto] object-cover w-[279px]"
                    alt="RectangleFortyFive One"
                  />
                </div>
                <Button className="bg-gray_807 cursor-pointer font-bold leading-[normal] p-[16px] text-[18px] text-center text-white_A700 w-[200px]">
                  Add to Cart
                </Button>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[53%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_807 text-left w-[auto]"
                    variant="body37"
                  >
                    Limited Deals
                  </Text>
                  <div className="flex flex-row gap-[32px] items-center justify-between mt-[25px] w-[100%]">
                    <div className="border-[1px] border-gray_513 border-solid flex h-[107px] items-center justify-start p-[17px] w-[107px]">
                      <div className="flex flex-col gap-[8px] items-center justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          08
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_807 text-left w-[auto]"
                          variant="body47"
                        >
                          Hours
                        </Text>
                      </div>
                    </div>
                    <div className="border-[1px] border-gray_513 border-solid flex h-[107px] items-center justify-start p-[17px] w-[107px]">
                      <div className="flex flex-col gap-[8px] h-[71px] items-center justify-start w-[71px]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          58
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_807 text-left w-[auto]"
                          variant="body47"
                        >
                          Minutes
                        </Text>
                      </div>
                    </div>
                    <div className="border-[1px] border-gray_513 border-solid flex h-[107px] items-center justify-start p-[14px] w-[107px]">
                      <div className="flex flex-col gap-[8px] items-center justify-start my-[3px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          18
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_807 text-left w-[auto]"
                          variant="body47"
                        >
                          Seconds
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="font-bold mt-[26px] text-gray_807 text-left w-[auto]"
                    variant="body37"
                  >
                    Casual Grey Shoes
                  </Text>
                  <div className="flex flex-row gap-[23px] items-center justify-start mt-[13px] md:w-[100%] w-[36%]">
                    <Text
                      className="font-normal line-through not-italic text-gray_513 text-left w-[auto]"
                      variant="body37"
                    >
                      $399
                    </Text>
                    <Text
                      className="font-medium text-gray_807 text-left w-[auto]"
                      variant="body37"
                    >
                      $199
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </div>
        <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start md:ml-[0] ml-[144px] mr-[auto] mt-[98px] md:w-[100%] w-[82%]">
          <div className="flex flex-col items-start justify-start md:w-[100%] w-[50%]">
            <Text
              className="font-bold text-gray_807 text-left w-[auto]"
              variant="body22"
            >
              New Arrival
            </Text>
            <div className="flex items-center justify-start mt-[33px] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="md:gap-[20px] gap-[34px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex h-[83px] items-center justify-start w-[83px]">
                      <Img
                        src="images/img_placeholder_83x83.png"
                        className="h-[83px] md:h-[auto] object-cover w-[83px]"
                        alt="placeholder Four"
                      />
                    </div>
                    <div className="flex items-start justify-start w-[auto]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          Checkered Jacket
                        </Text>
                        <Text
                          className="font-medium text-gray_513 text-left w-[auto]"
                          variant="body37"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex h-[83px] items-center justify-start w-[83px]">
                      <Img
                        src="images/img_placeholder_16.png"
                        className="h-[83px] md:h-[auto] object-cover w-[83px]"
                        alt="placeholder Five"
                      />
                    </div>
                    <div className="flex items-start justify-start w-[auto]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          Blue Woman Denim
                        </Text>
                        <Text
                          className="font-medium text-gray_513 text-left w-[auto]"
                          variant="body37"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex h-[83px] items-center justify-start w-[83px]">
                      <Img
                        src="images/img_placeholder_17.png"
                        className="h-[83px] md:h-[auto] object-cover w-[83px]"
                        alt="placeholder Six"
                      />
                    </div>
                    <div className="flex items-start justify-start w-[auto]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          Orange Jeans
                        </Text>
                        <Text
                          className="font-medium text-gray_513 text-left w-[auto]"
                          variant="body37"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex h-[83px] items-center justify-start w-[83px]">
                      <Img
                        src="images/img_placeholder_18.png"
                        className="h-[83px] md:h-[auto] object-cover w-[83px]"
                        alt="placeholder Seven"
                      />
                    </div>
                    <div className="flex items-start justify-start w-[auto]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          Classic Watch
                        </Text>
                        <Text
                          className="font-medium text-gray_513 text-left w-[auto]"
                          variant="body37"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[9px] items-center justify-center md:ml-[0] ml-[346px] mt-[32px] md:w-[100%] w-[14%]">
              <Text
                className="font-medium text-gray_807 text-left w-[auto]"
                variant="body47"
              >
                View all
              </Text>
              <Img
                src="images/img_menu_gray_807.svg"
                className="h-[31px] w-[31px]"
                alt="menu One"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start md:w-[100%] w-[50%]">
            <Text
              className="font-bold text-gray_807 text-left w-[auto]"
              variant="body22"
            >
              Popular This Week
            </Text>
            <div className="flex items-center justify-start mt-[28px] w-[100%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="md:gap-[20px] gap-[34px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex h-[83px] items-center justify-start w-[83px]">
                      <Img
                        src="images/img_placeholder_19.png"
                        className="h-[83px] md:h-[auto] object-cover w-[83px]"
                        alt="placeholder Eight"
                      />
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          Blue Jeans
                        </Text>
                        <Text
                          className="font-medium text-gray_513 text-left w-[auto]"
                          variant="body37"
                        >
                          $299
                        </Text>
                      </div>
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
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex h-[83px] items-center justify-start w-[83px]">
                      <Img
                        src="images/img_placeholder_20.png"
                        className="h-[83px] md:h-[auto] object-cover w-[83px]"
                        alt="placeholder Nine"
                      />
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          Wristwatch
                        </Text>
                        <Text
                          className="font-medium text-gray_513 text-left w-[auto]"
                          variant="body37"
                        >
                          $299
                        </Text>
                      </div>
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
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex h-[83px] items-center justify-start w-[83px]">
                      <Img
                        src="images/img_placeholder_21.png"
                        className="h-[83px] md:h-[auto] object-cover w-[83px]"
                        alt="placeholder Ten"
                      />
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          Elegant Jacket
                        </Text>
                        <Text
                          className="font-medium text-gray_513 text-left w-[auto]"
                          variant="body37"
                        >
                          $299
                        </Text>
                      </div>
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
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-[16px] h-[200px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
                    <div className="flex h-[83px] items-center justify-start w-[83px]">
                      <Img
                        src="images/img_placeholder_22.png"
                        className="h-[83px] md:h-[auto] object-cover w-[83px]"
                        alt="placeholder Eleven"
                      />
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          Gray Watch
                        </Text>
                        <Text
                          className="font-medium text-gray_513 text-left w-[auto]"
                          variant="body37"
                        >
                          $299
                        </Text>
                      </div>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[9px] items-center justify-center md:ml-[0] ml-[346px] mt-[32px] md:w-[100%] w-[14%]">
              <Text
                className="font-medium text-gray_807 text-left w-[auto]"
                variant="body47"
              >
                View all
              </Text>
              <Img
                src="images/img_menu_gray_807.svg"
                className="h-[31px] w-[31px]"
                alt="menu Two"
              />
            </div>
          </div>
        </div>
        <List
          className="bg-gray_59 sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 mt-[100px] px-[144px] md:px-[20px] w-[96%]"
          orientation="horizontal"
        >
          <div className="flex flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-start sm:pr-[20px] pr-[32px] py-[64px] sm:w-[100%] w-[384px]">
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
          <div className="flex flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-start sm:pr-[20px] pr-[32px] py-[64px] sm:w-[100%] w-[384px]">
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
          <div className="flex flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-start sm:pr-[20px] pr-[32px] py-[64px] sm:w-[100%] w-[384px]">
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
          <div className="flex flex-row gap-[32px] h-[217px] md:h-[auto] items-center justify-start sm:pr-[20px] pr-[32px] py-[64px] sm:w-[100%] w-[384px]">
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
        <div className="bg-gray_807 flex items-center justify-end p-[27px] md:px-[20px] md:w-[100%] w-[96%]">
          <div className="flex flex-col md:gap-[40px] gap-[61px] items-center justify-start mt-[30px] md:w-[100%] w-[88%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
              <div className="flex sm:flex-1 flex-col gap-[32px] items-start justify-start sm:w-[100%] w-[auto]">
                <div className="flex flex-row gap-[108px] items-center justify-start md:w-[100%] w-[42%]">
                  <Img
                    src="images/img_group19_white_a700.svg"
                    className="h-[24px] w-[auto]"
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
                  className="font-normal mt-[18px] not-italic text-gray_513 text-left w-[100%]"
                  variant="body47"
                >
                  Drop your email below to get update, promotions, coupons, and
                  more!
                </Text>
                <Input
                  className="font-normal leading-[normal] not-italic p-[0] text-[18px] placeholder:text-bluegray_100_87 text-bluegray_100_87 text-center tracking-[0.36px] w-[100%]"
                  wrapClassName="bg-gray_807 border-[1px] border-solid border-white_A700 flex mt-[26px] pl-[24px] pr-[14px] py-[13px] sm:pl-[20px] w-[100%]"
                  type="email"
                  name="form"
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
    </>
  );
};

export default HomepageVTwoPage;
