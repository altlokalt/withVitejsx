import React from "react";

import {
  Img,
  Text,
  Button,
  PagerIndicator,
  List,
  RatingBar,
  Input,
} from "components";

const HomepageVOnePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-poppins items-center justify-end mx-[auto] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex items-center justify-center p-[17px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center md:w-[100%] w-[87%]">
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
              <ul className="flex sm:flex-col flex-row gap-[80px] sm:hidden items-start justify-start md:ml-[0] ml-[392px] md:w-[100%] w-[auto] common-row-list">
                <li className="mt-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-medium text-[18px] text-gray_807 text-left"
                    href="javascript:"
                  >
                    Categories
                  </a>
                </li>
                <li className="mb-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-medium text-[18px] text-gray_807 text-left"
                    href="javascript:"
                  >
                    New Arrival
                  </a>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                  <a
                    className="cursor-pointer font-medium text-[18px] text-gray_807 text-left"
                    href="javascript:"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-[2px] sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer font-medium text-[18px] text-gray_807 text-left"
                    href="javascript:"
                  >
                    Collections
                  </a>
                </li>
              </ul>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[259px] md:w-[100%] w-[16%]">
                <Img
                  src="images/img_car_gray_807.svg"
                  className="h-[24px] w-[80px]"
                  alt="car"
                />
                <Button className="bg-gray_807 cursor-pointer font-bold leading-[normal] p-[16px] text-[18px] text-center text-white_A700 w-[107px]">
                  Login
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="bg-gray_59 h-[700px] pl-[144px] md:px-[20px] relative w-[100%]">
          <div className="absolute flex h-[100%] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[64%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-evenly w-[100%]">
                <Img
                  src="images/img_placeholder.png"
                  className="sm:flex-1 h-[364px] md:h-[auto] object-cover sm:w-[100%] w-[32%]"
                  alt="placeholder"
                />
                <Img
                  src="images/img_placeholder_364x837.png"
                  className="sm:flex-1 h-[364px] md:h-[auto] object-cover sm:w-[100%] w-[69%]"
                  alt="placeholder One"
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
                <div className="h-[336px] relative md:w-[100%] w-[32%]">
                  <Img
                    src="images/img_placeholder_336x385.png"
                    className="h-[336px] m-[auto] object-cover w-[100%]"
                    alt="placeholder Two"
                  />
                  <PagerIndicator
                    className="absolute bottom-[11%] flex gap-[8px] h-[12px] right-[17%] w-[112px]"
                    count={6}
                    activeCss="inline-block cursor-pointer rounded-[50%] h-[12px] bg-gray_807 w-[12px] relative"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-[12px] bg-white_A700 w-[12px] relative"
                    selectedWrapperCss="inline-block"
                    unselectedWrapperCss="inline-block"
                  />
                </div>
                <div className="h-[336px] relative md:w-[100%] w-[69%]">
                  <div className="absolute h-[336px] inset-y-[0] my-[auto] right-[0] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_placeholder_336x470.png"
                      className="h-[336px] m-[auto] object-cover w-[100%]"
                      alt="placeholder Three"
                    />
                    <Img
                      src="images/img_button_white_a700.svg"
                      className="absolute bottom-[0] h-[48px] right-[30%] w-[auto]"
                      alt="button"
                    />
                  </div>
                  <Img
                    src="images/img_placeholder_336x384.png"
                    className="absolute h-[336px] inset-y-[0] left-[0] my-[auto] object-cover w-[46%]"
                    alt="placeholder Four"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-start justify-start left-[21%] my-[auto] w-[30%]">
            <Text
              className="font-playfairdisplay not-italic text-gray_807 text-left w-[auto]"
              as="h1"
              variant="h1"
            >
              Summer Sale
            </Text>
            <Text
              className="font-poppins mt-[2px] text-gray_807 text-left w-[auto]"
              variant="body3"
            >
              50% Off
            </Text>
            <Text
              className="font-normal font-poppins leading-[32.00px] mt-[34px] not-italic text-gray_807 text-left sm:w-[100%] w-[93%]"
              variant="body47"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Text>
            <Button
              className="bg-gray_807 flex items-center justify-center mt-[56px] p-[24px] sm:px-[20px] text-center"
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
        <div className="flex flex-col gap-[28px] items-center justify-start max-w-[1633px] mt-[103px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
            <Text
              className="font-bold text-gray_807 text-left w-[auto]"
              variant="body22"
            >
              Categories
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
          <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between w-[100%]">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 md:w-[100%] w-[83%]"
              orientation="horizontal"
            >
              <div className="bg-gray_59 flex items-center justify-start sm:ml-[0] p-[36px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col gap-[7px] items-center justify-start mb-[10px] md:w-[100%] w-[56%]">
                  <Img
                    src="images/img_car_gray_807_96x96.svg"
                    className="h-[96px] w-[96px]"
                    alt="car One"
                  />
                  <Text
                    className="font-normal not-italic text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    Jacket
                  </Text>
                </div>
              </div>
              <div className="bg-gray_59 flex items-center justify-start sm:ml-[0] p-[36px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col gap-[7px] items-center justify-start mb-[10px] md:w-[100%] w-[56%]">
                  <Img
                    src="images/img_file_gray_807.svg"
                    className="h-[96px] w-[96px]"
                    alt="file"
                  />
                  <Text
                    className="font-normal not-italic text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    Shirt
                  </Text>
                </div>
              </div>
              <div className="bg-gray_59 flex items-center justify-start sm:ml-[0] p-[36px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-center justify-start mb-[9px] md:w-[100%] w-[56%]">
                  <Img
                    src="images/img_cut_gray_807.svg"
                    className="h-[96px] w-[96px]"
                    alt="cut"
                  />
                  <Text
                    className="font-normal not-italic text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    Pants
                  </Text>
                </div>
              </div>
              <div className="bg-gray_807 flex items-center justify-start sm:ml-[0] p-[36px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col gap-[7px] items-center justify-start mb-[10px] md:w-[100%] w-[56%]">
                  <Img
                    src="images/img_airplane_white_a700.svg"
                    className="h-[96px] w-[96px]"
                    alt="airplane"
                  />
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Shoes
                  </Text>
                </div>
              </div>
              <div className="bg-gray_59 flex items-center justify-start sm:ml-[0] p-[36px] sm:px-[20px] w-[100%]">
                <div className="flex flex-col gap-[8px] items-center justify-start mb-[9px] md:w-[100%] w-[56%]">
                  <Img
                    src="images/img_user_gray_807.svg"
                    className="h-[96px] w-[96px]"
                    alt="user"
                  />
                  <Text
                    className="font-normal not-italic text-gray_513 text-left w-[auto]"
                    variant="body47"
                  >
                    Dress
                  </Text>
                </div>
              </div>
            </List>
            <div className="bg-gray_59 flex md:flex-1 items-center justify-start p-[36px] sm:px-[20px] md:w-[100%] w-[16%]">
              <div className="flex flex-col gap-[7px] items-center justify-start mb-[10px] md:w-[100%] w-[57%]">
                <Img
                  src="images/img_globe.svg"
                  className="h-[96px] w-[96px]"
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
        <div className="flex items-center justify-start max-w-[1632px] mt-[98px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[33px] items-center justify-start w-[100%]">
            <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <Text
                className="font-bold text-gray_807 text-left w-[auto]"
                variant="body22"
              >
                New Arrivals
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
            <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between w-[100%]">
              <div className="bg-gray_59 flex flex-1 md:flex-col flex-row gap-[48px] h-[688px] md:h-[auto] items-center justify-center max-w-[800px] p-[32px] sm:px-[20px] w-[100%]">
                <Img
                  src="images/img_placeholder_631x384.png"
                  className="md:flex-1 h-[631px] sm:h-[auto] object-cover md:w-[100%] w-[384px]"
                  alt="placeholder Five"
                />
                <div className="flex flex-col gap-[24px] items-center justify-start w-[auto]">
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                    <Text
                      className="font-medium text-gray_807 text-left w-[auto]"
                      variant="body37"
                    >
                      Purple Warm Jacket
                    </Text>
                    <Text
                      className="font-medium text-gray_513 text-left w-[auto]"
                      variant="body47"
                    >
                      $299
                    </Text>
                  </div>
                  <Button className="bg-gray_807 cursor-pointer font-bold leading-[normal] p-[16px] text-[18px] text-center text-white_A700 w-[200px]">
                    Add to Cart
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[50%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="md:gap-[20px] gap-[32px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                    <div className="bg-gray_59 flex flex-1 flex-col gap-[16px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
                      <Img
                        src="images/img_placeholder_177x177.png"
                        className="h-[177px] md:h-[auto] object-cover w-[177px]"
                        alt="placeholder Six"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          Blue Grey Warm Jacket
                        </Text>
                        <Text
                          className="font-medium text-gray_513 text-left w-[auto]"
                          variant="body47"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_59 flex flex-1 flex-col gap-[16px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
                      <Img
                        src="images/img_placeholder_1.png"
                        className="h-[177px] md:h-[auto] object-cover w-[177px]"
                        alt="placeholder Seven"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          Denim Jacket
                        </Text>
                        <Text
                          className="font-medium text-gray_513 text-left w-[auto]"
                          variant="body47"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_59 flex flex-1 flex-col gap-[16px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
                      <Img
                        src="images/img_placeholder_2.png"
                        className="h-[177px] md:h-[auto] object-cover w-[177px]"
                        alt="placeholder Eight"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          Black Jacket
                        </Text>
                        <Text
                          className="font-medium text-gray_513 text-left w-[auto]"
                          variant="body47"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_59 flex flex-1 flex-col gap-[16px] items-center justify-start p-[32px] sm:px-[20px] w-[100%]">
                      <Img
                        src="images/img_placeholder_3.png"
                        className="h-[177px] md:h-[auto] object-cover w-[177px]"
                        alt="placeholder Nine"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                        <Text
                          className="font-medium text-gray_807 text-left w-[auto]"
                          variant="body37"
                        >
                          Green Polar Jacket
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
        <div className="flex flex-col items-center justify-start max-w-[1632px] mt-[99px] mx-[auto] md:px-[20px] w-[100%]">
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
          <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between mt-[32px] w-[100%]">
            <div className="border-[2px] border-gray_807 border-solid flex sm:flex-1 flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] sm:w-[100%] w-[384px]">
              <Img
                src="defaultNoData.png"
                className="h-[250px] md:h-[auto] object-cover w-[250px]"
                alt="placeholder Ten"
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
              <Button className="bg-gray_807 cursor-pointer font-bold leading-[normal] p-[16px] text-[18px] text-center text-white_A700 w-[200px]">
                Add to Cart
              </Button>
            </div>
            <div className="flex sm:flex-1 flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] sm:w-[100%] w-[384px]">
              <Img
                src="defaultNoData.png"
                className="h-[250px] md:h-[auto] object-cover w-[250px]"
                alt="placeholder Eleven"
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
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[32px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[50%]"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[16px] h-[499px] md:h-[auto] items-center justify-center sm:ml-[0] p-[24px] sm:px-[20px] sm:w-[100%] w-[384px]">
                <Img
                  src="images/img_placeholder_5.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="placeholder Twelve"
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
                  src="defaultNoData.png"
                  className="h-[250px] md:h-[auto] object-cover w-[250px]"
                  alt="placeholder Thirteen"
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
          <div className="md:gap-[20px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] mt-[32px] w-[100%]">
            <div className="flex flex-1 flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_stylishblacks.png"
                className="h-[250px] md:h-[auto] object-cover w-[250px]"
                alt="stylishblacks"
              />
              <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                <Text
                  className="font-medium text-gray_807 text-left w-[auto]"
                  variant="body37"
                >
                  Black Highheels
                </Text>
                <Text
                  className="font-medium text-gray_513 text-left w-[auto]"
                  variant="body47"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
              <Img
                src="defaultNoData.png"
                className="h-[250px] md:h-[auto] object-cover w-[250px]"
                alt="casualfabrics"
              />
              <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                <Text
                  className="font-medium text-gray_807 text-left w-[auto]"
                  variant="body37"
                >
                  Casual Grey Shoes
                </Text>
                <Text
                  className="font-medium text-gray_513 text-left w-[auto]"
                  variant="body47"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_shoesisolatedpk7npbk.png"
                className="h-[250px] md:h-[auto] object-cover w-[250px]"
                alt="shoesisolatedPK7NPBK"
              />
              <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                <Text
                  className="font-medium text-gray_807 text-left w-[auto]"
                  variant="body37"
                >
                  Brown Shoes
                </Text>
                <Text
                  className="font-medium text-gray_513 text-left w-[auto]"
                  variant="body47"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[16px] h-[499px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_businessshirtptnj9lv.png"
                className="h-[250px] md:h-[auto] object-cover w-[250px]"
                alt="businessshirtPTNJ9LV"
              />
              <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                <Text
                  className="font-medium text-gray_807 text-left w-[auto]"
                  variant="body37"
                >
                  Business Shirt
                </Text>
                <Text
                  className="font-medium text-gray_513 text-left w-[auto]"
                  variant="body47"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_warmpantspxl7hrp.png"
                className="h-[250px] md:h-[auto] object-cover w-[250px]"
                alt="warmpantsPXL7HRP"
              />
              <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                <Text
                  className="font-medium text-gray_807 text-left w-[auto]"
                  variant="body37"
                >
                  Grey Warm Pants
                </Text>
                <Text
                  className="font-medium text-gray_513 text-left w-[auto]"
                  variant="body47"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[16px] h-[500px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
              <Img
                src="defaultNoData.png"
                className="h-[250px] md:h-[auto] object-cover w-[250px]"
                alt="sportJ9BZXUY"
              />
              <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                <Text
                  className="font-medium text-gray_807 text-left w-[auto]"
                  variant="body37"
                >
                  Green Sport Jacket
                </Text>
                <Text
                  className="font-medium text-gray_513 text-left w-[auto]"
                  variant="body47"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[16px] h-[499px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_travel8v7cnke.png"
                className="h-[250px] md:h-[auto] object-cover w-[250px]"
                alt="travel8V7CNKE"
              />
              <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                <Text
                  className="font-medium text-gray_807 text-left w-[auto]"
                  variant="body37"
                >
                  Purple Warm Jacket
                </Text>
                <Text
                  className="font-medium text-gray_513 text-left w-[auto]"
                  variant="body47"
                >
                  $299
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[16px] h-[499px] md:h-[auto] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_womensdenimskirtpl8e2p3.png"
                className="h-[250px] md:h-[auto] object-cover w-[250px]"
                alt="womensdenimskirtPL8E2PThree"
              />
              <div className="flex flex-col gap-[8px] items-center justify-start w-[auto]">
                <Text
                  className="font-medium text-gray_807 text-left w-[auto]"
                  variant="body37"
                >
                  Woman Denim Skirt
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
        <div className="sm:h-[1338px] h-[544px] md:h-[906px] mt-[74px] md:px-[20px] relative w-[100%]">
          <div className="absolute bg-gray_807 flex inset-x-[0] items-start justify-start mx-[auto] p-[43px] sm:px-[20px] md:px-[40px] top-[0] w-[100%]">
            <Text
              className="font-bold mb-[284px] md:ml-[0] ml-[100px] text-left text-white_A700 w-[auto]"
              variant="body22"
            >
              Summer Collections
            </Text>
          </div>
          <div className="absolute bottom-[0] sm:h-[1264px] h-[400px] md:h-[832px] inset-x-[0] mx-[auto] md:w-[100%] w-[87%]">
            <List
              className="absolute sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 inset-[0] justify-center m-[auto] w-[99%]"
              orientation="horizontal"
            >
              <div className="bg-bluegray_111 flex items-center justify-start w-[100%]">
                <div className="h-[400px] relative w-[100%]">
                  <Img
                    src="images/img_image2.png"
                    className="h-[400px] m-[auto] object-cover w-[100%]"
                    alt="imageTwo"
                  />
                  <Text
                    className="absolute font-normal h-[max-content] inset-y-[0] left-[11%] my-[auto] not-italic text-gray_807 text-left"
                    variant="body22"
                  >
                    <span className="md:text-[34px] sm:text-[32px] text-gray_807 text-[36px] font-inter">
                      Summer <br />
                    </span>
                    <span className="md:text-[34px] sm:text-[32px] text-gray_807 text-[36px] font-poppins font-bold">
                      Collection
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-bluegray_111 flex items-center justify-start w-[100%]">
                <div className="h-[400px] relative w-[100%]">
                  <Img
                    src="images/img_image3.png"
                    className="h-[400px] m-[auto] object-cover w-[100%]"
                    alt="imageThree"
                  />
                  <Text
                    className="absolute font-normal h-[max-content] inset-y-[0] left-[10%] my-[auto] not-italic text-left text-white_A700"
                    variant="body22"
                  >
                    <span className="md:text-[34px] sm:text-[32px] text-white_A700 text-[36px] font-poppins">
                      Casual <br />
                    </span>
                    <span className="md:text-[34px] sm:text-[32px] text-white_A700 text-[36px] font-poppins font-bold">
                      Collection
                    </span>
                  </Text>
                </div>
              </div>
              <div className="bg-bluegray_111 flex items-center justify-start w-[100%]">
                <div className="h-[400px] relative w-[100%]">
                  <Img
                    src="images/img_image4.png"
                    className="h-[400px] m-[auto] object-cover w-[100%]"
                    alt="imageFour"
                  />
                  <Text
                    className="absolute font-normal h-[max-content] inset-y-[0] left-[10%] my-[auto] not-italic text-left text-white_A700"
                    variant="body22"
                  >
                    <span className="md:text-[34px] sm:text-[32px] text-white_A700 text-[36px] font-poppins">
                      Big Vibe <br />
                    </span>
                    <span className="md:text-[34px] sm:text-[32px] text-white_A700 text-[36px] font-poppins font-bold">
                      Collection
                    </span>
                  </Text>
                </div>
              </div>
            </List>
            <Button className="absolute bg-white_A700 flex h-[60px] inset-y-[0] items-center justify-center my-[auto] p-[9px] right-[0] w-[60px]">
              <Img src="images/img_menu_gray_807.svg" className="" alt="menu" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-[28px] items-center justify-start max-w-[1632px] mt-[103px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
            <Text
              className="font-bold text-gray_807 text-left w-[auto]"
              variant="body22"
            >
              Popular This Week
            </Text>
            <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[auto]">
              <Text
                className="font-medium text-gray_807 text-left w-[auto]"
                variant="body47"
              >
                View all
              </Text>
            </div>
          </div>
          <div className="md:gap-[20px] gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
            <div className="flex flex-1 sm:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
              <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[43%]">
                <Img
                  src="images/img_placeholder_163x201.png"
                  className="h-[163px] md:h-[auto] object-cover w-[100%]"
                  alt="placeholder Fourteen"
                />
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
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
                <div className="flex items-start justify-start w-[auto]">
                  <RatingBar
                    className=""
                    value={4}
                    starCount={5}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[43%]">
                <Img
                  src="images/img_placeholder_7.png"
                  className="h-[163px] md:h-[auto] object-cover w-[100%]"
                  alt="placeholder Fifteen"
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
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 sm:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
              <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[43%]">
                <Img
                  src="images/img_placeholder_8.png"
                  className="h-[163px] md:h-[auto] object-cover w-[100%]"
                  alt="placeholder Sixteen"
                />
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
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
                <div className="flex items-start justify-start w-[auto]">
                  <RatingBar
                    className=""
                    value={4}
                    starCount={5}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 sm:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
              <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[43%]">
                <Img
                  src="images/img_placeholder_9.png"
                  className="h-[163px] md:h-[auto] object-cover w-[100%]"
                  alt="placeholder Seventeen"
                />
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
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
                <div className="flex items-start justify-start w-[auto]">
                  <RatingBar
                    className=""
                    value={4}
                    starCount={5}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[43%]">
                <Img
                  src="images/img_placeholder_10.png"
                  className="h-[163px] md:h-[auto] object-cover w-[100%]"
                  alt="placeholder Eighteen"
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
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
              <div className="flex items-center justify-start w-[43%]">
                <Img
                  src="images/img_placeholder_11.png"
                  className="h-[163px] md:h-[auto] object-cover w-[100%]"
                  alt="placeholder Nineteen"
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
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 sm:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
              <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[43%]">
                <Img
                  src="images/img_placeholder_12.png"
                  className="h-[163px] md:h-[auto] object-cover w-[100%]"
                  alt="placeholder Twenty"
                />
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                  <Text
                    className="font-medium text-gray_807 text-left w-[auto]"
                    variant="body37"
                  >
                    Black Sport Jacket
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
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
              <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[43%]">
                <Img
                  src="images/img_placeholder_13.png"
                  className="h-[163px] md:h-[auto] object-cover w-[100%]"
                  alt="placeholder TwentyOne"
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
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
            <div className="flex flex-1 sm:flex-col flex-row gap-[16px] h-[220px] md:h-[auto] items-center justify-start p-[24px] sm:px-[20px] w-[100%]">
              <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[43%]">
                <Img
                  src="images/img_placeholder_14.png"
                  className="h-[163px] md:h-[auto] object-cover w-[100%]"
                  alt="placeholder TwentyTwo"
                />
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
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
                <div className="flex items-start justify-start w-[auto]">
                  <RatingBar
                    className=""
                    value={4}
                    starCount={5}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={24}
                  ></RatingBar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[27px] justify-end mt-[104px] w-[100%]">
          <Text
            className="font-bold md:ml-[0] ml-[144px] mr-[1490px] text-gray_807 text-left w-[auto]"
            variant="body22"
          >
            Why Choose Us
          </Text>
          <List
            className="bg-gray_59 sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center px-[144px] sm:px-[20px] md:px-[40px] w-[100%]"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-[32px] h-[384px] md:h-[auto] items-center justify-center p-[32px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_icon_gray_513.svg"
                className="h-[120px] w-[120px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                <Text
                  className="font-bold text-gray_807 text-left w-[auto]"
                  variant="body37"
                >
                  Free Delivery
                </Text>
                <Text
                  className="font-normal not-italic text-center text-gray_513"
                  variant="body47"
                >
                  This free shipping
                  <br />
                  only for selected region
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[32px] h-[384px] md:h-[auto] items-center justify-center p-[32px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_icon_gray_513_120x120.svg"
                className="h-[120px] w-[120px]"
                alt="icon One"
              />
              <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                <Text
                  className="font-bold text-gray_807 text-left w-[auto]"
                  variant="body37"
                >
                  Payment Method
                </Text>
                <Text
                  className="font-normal not-italic text-center text-gray_513"
                  variant="body47"
                >
                  This free shipping
                  <br />
                  only for selected region
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[32px] h-[384px] md:h-[auto] items-center justify-center p-[32px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_icon_120x120.svg"
                className="h-[120px] w-[120px]"
                alt="icon Two"
              />
              <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                <Text
                  className="font-bold text-gray_807 text-left w-[auto]"
                  variant="body37"
                >
                  Warranty
                </Text>
                <Text
                  className="font-normal not-italic text-center text-gray_513"
                  variant="body47"
                >
                  This free shipping
                  <br />
                  only for selected region
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[32px] h-[384px] md:h-[auto] items-center justify-center p-[32px] sm:px-[20px] w-[100%]">
              <Img
                src="images/img_icon_1.svg"
                className="h-[120px] w-[120px]"
                alt="icon Three"
              />
              <div className="flex flex-col gap-[16px] items-center justify-start w-[auto]">
                <Text
                  className="font-bold text-gray_807 text-left w-[auto]"
                  variant="body37"
                >
                  Customer Support{" "}
                </Text>
                <Text
                  className="font-normal not-italic text-center text-gray_513"
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
        <Img
          src="images/img_brand.svg"
          className="h-[68px] mt-[100px] w-[auto]"
          alt="brand"
        />
        <div className="bg-gray_807 flex flex-col md:gap-[40px] gap-[81px] items-center justify-end mt-[100px] p-[32px] sm:px-[20px] w-[100%]">
          <div className="flex items-center justify-start mt-[32px] md:px-[20px] md:w-[100%] w-[83%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
              <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[28%]">
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  variant="body37"
                >
                  Join our Newsletter
                </Text>
                <Text
                  className="font-normal mt-[24px] not-italic text-left text-white_A700"
                  variant="body47"
                >
                  Drop your email below to get update about us, <br />
                  lastest news, tips, and more!
                </Text>
                <Input
                  className="font-normal leading-[normal] not-italic p-[0] text-[18px] text-center placeholder:text-gray_500_87 text-gray_500_87 tracking-[0.36px] w-[100%]"
                  wrapClassName="bg-white_A700 flex mt-[35px] pl-[24px] pr-[16px] py-[16px] sm:pl-[20px] sm:w-[100%] w-[91%]"
                  type="email"
                  name="input"
                  placeholder="Enter your email"
                  suffix={
                    <Img
                      src="images/img_menu_gray_807.svg"
                      className="ml-[12px] my-[auto]"
                      alt="menu"
                    />
                  }
                ></Input>
              </div>
              <div className="flex flex-col gap-[24px] items-start justify-start md:ml-[0] ml-[131px] w-[auto]">
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  variant="body37"
                >
                  Product Links
                </Text>
                <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Categories
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    New Arrival
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Features
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Collections
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[24px] items-start justify-start md:ml-[0] ml-[112px] md:w-[100%] w-[8%]">
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  variant="body37"
                >
                  Company
                </Text>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    About
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Blog
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Careers
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Contact{" "}
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Services
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[24px] items-start justify-start md:ml-[0] ml-[154px] w-[10%] md:w-[100%]">
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  variant="body37"
                >
                  Support
                </Text>
                <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Support Center
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    FAQ
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Privacy Policy
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Terms of service
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[24px] items-start justify-start md:ml-[0] ml-[130px] w-[10%] md:w-[100%]">
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  variant="body37"
                >
                  Get In Touch
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
                        className="h-[24px] w-[24px]"
                        alt="twitter"
                      />
                    </div>
                  </div>
                  <Img
                    src="images/img_facebook_white_a700.svg"
                    className="h-[24px] w-[24px]"
                    alt="facebook"
                  />
                </div>
              </div>
            </div>
          </div>
          <Text
            className="font-normal not-italic text-left text-white_A700 w-[auto]"
            variant="body59"
          >
            Copyright © 2021 Elliye. All Right Reseved
          </Text>
        </div>
      </div>
    </>
  );
};

export default HomepageVOnePage;
