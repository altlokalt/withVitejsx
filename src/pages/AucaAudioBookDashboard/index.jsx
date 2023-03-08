import React from "react";

import { Button, Img, Line, Text, List } from "components";

const AucaAudioBookDashboardPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-plusjakartasans gap-[48px] items-center mx-[auto] sm:pr-[20px] md:pr-[40px] pr-[54px] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start w-[110px]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="bg-white_A700 flex flex-col items-center justify-start p-[20px] shadow-bs52 w-[100%]">
              <div className="flex flex-col md:gap-[40px] gap-[64px] items-center justify-start mt-[16px] md:w-[100%] w-[69%]">
                <Button className="bg-indigo_A205 flex h-[48px] items-center justify-center p-[12px] rounded-[50%] w-[48px]">
                  <Img
                    src="images/img_computer_white_a700_48x48.svg"
                    className="h-[24px]"
                    alt="computer"
                  />
                </Button>
                <div className="bg-bluegray_101 h-[47px] rounded-[23px] w-[47px]"></div>
              </div>
              <Line className="bg-gray_207 h-[1px] mt-[48px] w-[100%]" />
              <Img
                src="images/img_videocamera_indigo_a205.svg"
                className="h-[84px] mt-[14px] w-[auto]"
                alt="videocamera"
              />
              <div className="flex flex-col items-center justify-start mb-[180px] mt-[4px] md:w-[100%] w-[45%]">
                <Img
                  src="images/img_location_gray_518.svg"
                  className="h-[23px] w-[auto]"
                  alt="location"
                />
                <Img
                  src="images/img_cart_gray_518.svg"
                  className="h-[23px] mt-[64px] w-[auto]"
                  alt="cart"
                />
                <Img
                  src="images/img_user_gray_518.svg"
                  className="h-[23px] mt-[64px] w-[auto]"
                  alt="user"
                />
                <Img
                  src="images/img_arrowleft_light_green_201.svg"
                  className="h-[23px] mt-[250px] w-[auto]"
                  alt="arrowleft"
                />
              </div>
            </div>
          </div>
        </aside>
        <div className="flex-1 md:h-[1141px] sm:h-[1946px] h-[992px] relative w-[100%]">
          <div className="md:h-[1141px] sm:h-[1946px] h-[992px] m-[auto] w-[100%]">
            <div className="absolute bottom-[4%] h-[161px] left-[0] md:w-[100%] w-[65%]">
              <Text
                className="font-bold mt-[10px] text-bluegray_910 text-left tracking-[0.50px] w-[auto]"
                variant="body43"
              >
                Most Popular
              </Text>
              <div className="absolute h-[161px] inset-[0] justify-center m-[auto] w-[100%]">
                <div className="absolute bottom-[0] flex flex-col gap-[33px] justify-start right-[10%] w-[59%]">
                  <Text
                    className="font-semibold md:ml-[0] ml-[477px] text-indigo_A205 text-right tracking-[0.50px] w-[auto]"
                    variant="body59"
                  >
                    See All
                  </Text>
                  <div className="flex items-center justify-start mr-[103px] md:w-[100%] w-[81%]">
                    <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                      <div className="bg-bluegray_101 h-[98px] rounded-[8px] shadow-bs53 w-[17%]"></div>
                      <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[auto]">
                        <Text
                          className="font-normal font-plusjakartasans not-italic text-bluegray_910 text-left tracking-[0.50px] w-[auto]"
                          variant="body67"
                        >
                          Vann Martel
                        </Text>
                        <Text
                          className="font-bold font-merriweather leading-[180.00%] mt-[4px] text-bluegray_910 text-left tracking-[0.50px] sm:w-[100%] w-[47%]"
                          variant="body59"
                        >
                          Life of Pi
                        </Text>
                        <div className="flex flex-row font-plusjakartasans items-center justify-between mt-[8px] w-[100%]">
                          <div className="flex flex-row items-center justify-evenly w-[23%]">
                            <Img
                              src="images/img_music_bluegray_910.svg"
                              className="h-[16px] w-[16px]"
                              alt="music"
                            />
                            <Text
                              className="font-normal not-italic text-bluegray_910 text-left tracking-[0.50px] w-[auto]"
                              variant="body67"
                            >
                              2h 32min
                            </Text>
                          </div>
                          <div className="flex items-center justify-start w-[12%]">
                            <div className="flex flex-row gap-[4px] items-center justify-end w-[auto]">
                              <Img
                                src="images/img_star_orange_306.svg"
                                className="h-[16px] w-[16px]"
                                alt="star"
                              />
                              <Text
                                className="font-normal not-italic text-bluegray_910 text-left tracking-[0.50px] w-[auto]"
                                variant="body67"
                              >
                                4.6
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[0] flex items-center justify-start left-[0] w-[47%]">
                  <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                    <div
                      className="bg-cover bg-no-repeat md:h-[110px] h-[98px] relative rounded-[5px] shadow-bs53 sm:w-[100%] w-[17%]"
                      style={{
                        backgroundImage: "url('images/defaultNoData.png')",
                      }}
                    >
                      <Img
                        src="images/img_image3_98x70.png"
                        className="h-[98px] m-[auto] object-cover rounded-[5px] w-[100%]"
                        alt="imageThree One"
                      />
                      <div className="absolute bg-bluegray_101 bottom-[0] h-[110px] inset-x-[0] mx-[auto] rounded-[5px] w-[100%]"></div>
                    </div>
                    <div className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[80%]">
                      <Text
                        className="font-normal font-plusjakartasans not-italic text-bluegray_910 text-left tracking-[0.50px] w-[auto]"
                        variant="body67"
                      >
                        J.R.R Tolkien
                      </Text>
                      <Text
                        className="font-bold font-merriweather leading-[180.00%] mt-[4px] text-bluegray_910 text-left tracking-[0.50px] sm:w-[100%] w-[47%]"
                        variant="body59"
                      >
                        The Hobbit
                      </Text>
                      <div className="flex flex-row font-plusjakartasans items-center justify-between mt-[8px] w-[100%]">
                        <div className="flex flex-row items-center justify-evenly w-[23%]">
                          <Img
                            src="images/img_music_bluegray_910.svg"
                            className="h-[16px] w-[16px]"
                            alt="music One"
                          />
                          <Text
                            className="font-normal not-italic text-bluegray_910 text-left tracking-[0.50px] w-[auto]"
                            variant="body67"
                          >
                            3h 32min
                          </Text>
                        </div>
                        <div className="flex items-center justify-start w-[12%]">
                          <div className="flex flex-row gap-[4px] items-center justify-end w-[auto]">
                            <Img
                              src="images/img_star_orange_306.svg"
                              className="h-[16px] w-[16px]"
                              alt="star One"
                            />
                            <Text
                              className="font-normal not-italic text-bluegray_910 text-left tracking-[0.50px] w-[auto]"
                              variant="body67"
                            >
                              4.8
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-row gap-[16px] h-[100%] inset-y-[0] items-end justify-between my-[auto] right-[0] w-[38%]">
                  <div className="bg-bluegray_101 h-[98px] mt-[63px] rounded-[8px] shadow-bs53 w-[21%]"></div>
                  <div className="flex h-[159px] sm:h-[161px] md:h-[83px] justify-end mb-[2px] relative w-[75%]">
                    <Text
                      className="absolute font-normal h-[max-content] inset-y-[0] left-[0] my-[auto] not-italic text-bluegray_910 text-left tracking-[0.50px] w-[auto]"
                      variant="body67"
                    >
                      Shea Ernshaw
                    </Text>
                    <div className="flex flex-row h-[100%] items-center justify-evenly mt-[auto] w-[31%]">
                      <Img
                        src="images/img_music_bluegray_910.svg"
                        className="h-[16px] w-[16px]"
                        alt="music Two"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_910 text-left tracking-[0.50px] w-[auto]"
                        variant="body67"
                      >
                        2h 20min
                      </Text>
                    </div>
                    <div className="absolute h-[159px] md:h-[81px] inset-[0] justify-center m-[auto] w-[100%]">
                      <div className="absolute flex flex-col font-plusjakartasans gap-[118px] md:gap-[40px] h-[100%] inset-y-[0] justify-start my-[auto] right-[0] w-[46%]">
                        <Img
                          src="images/img_star_orange_306.svg"
                          className="h-[13px] md:ml-[0] ml-[95px] w-[auto]"
                          alt="star Two"
                        />
                        <Text
                          className="font-normal mr-[93px] not-italic text-bluegray_910 text-left tracking-[0.50px] w-[auto]"
                          variant="body67"
                        >
                          4.5
                        </Text>
                      </div>
                      <Text
                        className="absolute bottom-[23%] font-bold font-merriweather leading-[180.00%] left-[0] text-bluegray_910 text-left tracking-[0.50px] sm:w-[100%] w-[63%]"
                        variant="body59"
                      >
                        The Wicked Deep
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col items-start justify-start left-[0] top-[3%] w-[58%]">
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between md:w-[100%] w-[81%]">
                <Text
                  className="font-semibold sm:mt-[0] mt-[4px] text-bluegray_910 text-left tracking-[0.55px] w-[auto]"
                  variant="body37"
                >
                  Good Morning, Ellie
                </Text>
                <div className="flex items-center justify-start sm:w-[100%] w-[auto]">
                  <div className="md:h-[18px] h-[27px] relative w-[100%]">
                    <Img
                      src="images/img_search_bluegray_307.svg"
                      className="absolute h-[17px] left-[36%] top-[0] w-[auto]"
                      alt="search"
                    />
                    <Text
                      className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] text-bluegray_300_99 text-left tracking-[0.55px] w-[max-content]"
                      variant="body59"
                    >
                      Search books here
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-indigo_A205 border-[3px] border-bluegray_910 border-solid flex items-center justify-start mt-[44px] p-[28px] sm:px-[20px] rounded-[8px] shadow-bs54 w-[100%]">
                <div className="flex md:flex-col flex-row gap-[34px] items-start justify-start md:w-[100%] w-[97%]">
                  <div className="bg-bluegray_101 border-[1px] border-solid border-white_A700 h-[204px] rounded-[8px] shadow-bs55 w-[20%]"></div>
                  <div className="flex flex-col gap-[25px] items-start justify-start md:mt-[0] mt-[18px] md:w-[100%] w-[76%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                      <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[auto]">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                          <Text
                            className="font-normal font-plusjakartasans not-italic text-left text-white_A700 tracking-[0.50px] w-[auto]"
                            variant="body50"
                          >
                            Continue reading
                          </Text>
                          <Text
                            className="font-bold font-merriweather mt-[19px] text-left text-white_A700 tracking-[0.50px] w-[auto]"
                            variant="body32"
                          >
                            The Witches of Willow Cove
                          </Text>
                          <div className="flex flex-row font-plusjakartasans gap-[16px] items-start justify-start mt-[24px] md:w-[100%] w-[54%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[0.50px] w-[auto]"
                              variant="body59"
                            >
                              John Roberts
                            </Text>
                            <div className="bg-white_A700_90 h-[6px] my-[6px] rounded-[50%] w-[6px]"></div>
                            <Text
                              className="font-normal not-italic text-left text-white_A700 tracking-[0.50px] w-[auto]"
                              variant="body59"
                            >
                              12 Chapters
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-white_A700 border-[2px] border-bluegray_910 border-solid flex items-center justify-center mb-[5px] sm:mt-[0] mt-[52px] p-[19px] rounded-[32px] shadow-bs56 w-[auto]">
                        <Img
                          src="images/img_play_black_900.svg"
                          className="h-[24px]"
                          alt="play"
                        />
                      </Button>
                    </div>
                    <div className="flex items-center justify-start md:w-[100%] w-[80%]">
                      <div className="flex items-center justify-start w-[100%]">
                        <div className="flex flex-col gap-[9px] items-center justify-start w-[100%]">
                          <div className="flex flex-row items-start justify-between w-[100%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700_99 tracking-[0.50px] w-[auto]"
                              variant="body59"
                            >
                              Chapter 8
                            </Text>
                            <Text
                              className="font-normal not-italic text-right text-white_A700_99 tracking-[0.50px] w-[auto]"
                              variant="body59"
                            >
                              82%
                            </Text>
                          </div>
                          <Img
                            src="images/img_group419.svg"
                            className="h-[6px] w-[auto]"
                            alt="Group419"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:gap-[40px] items-start justify-between mt-[43px] w-[100%]">
                <Text
                  className="font-bold text-bluegray_910 text-left tracking-[0.50px] w-[auto]"
                  variant="body43"
                >
                  Recently Played
                </Text>
                <Text
                  className="font-semibold mt-[2px] text-indigo_A205 text-right tracking-[0.50px] w-[auto]"
                  variant="body59"
                >
                  See All
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start mt-[26px] md:w-[100%] w-[auto]"
                orientation="horizontal"
              >
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat h-[220px] md:h-[268px] relative rounded-[12px] shadow-bs57 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group770488.png')",
                    }}
                  >
                    <Img
                      src="defaultNoData.png"
                      className="h-[220px] m-[auto] object-cover rounded-[12px] w-[100%]"
                      alt="imageThree Three"
                    />
                    <div className="absolute bg-bluegray_101 bottom-[0] h-[268px] inset-x-[0] mx-[auto] rounded-[5px] w-[100%]"></div>
                  </div>
                  <Text
                    className="font-bold font-merriweather mt-[20px] text-bluegray_910 text-left tracking-[0.57px] w-[auto]"
                    variant="body50"
                  >
                    The Wicked Deep
                  </Text>
                  <Text
                    className="font-normal font-plusjakartasans mt-[11px] not-italic text-bluegray_900_cc text-left tracking-[1.50px] w-[auto]"
                    variant="body67"
                  >
                    John Roberts
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat h-[220px] md:h-[262px] relative rounded-[12px] shadow-bs57 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group770488.png')",
                    }}
                  >
                    <Img
                      src="defaultNoData.png"
                      className="h-[220px] m-[auto] object-cover rounded-[12px] w-[100%]"
                      alt="imageThree Four"
                    />
                    <div className="absolute bg-bluegray_101 bottom-[0] h-[262px] inset-x-[0] mx-[auto] rounded-[5px] w-[100%]"></div>
                  </div>
                  <Text
                    className="font-bold font-merriweather mt-[18px] text-bluegray_910 text-left tracking-[0.57px] w-[auto]"
                    variant="body50"
                  >
                    Tess of The Road
                  </Text>
                  <Text
                    className="font-normal font-plusjakartasans mt-[13px] not-italic text-bluegray_900_cc text-left tracking-[1.50px] w-[auto]"
                    variant="body67"
                  >
                    Rachel Hartman
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat h-[220px] md:h-[269px] relative rounded-[12px] shadow-bs57 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group770488.png')",
                    }}
                  >
                    <Img
                      src="defaultNoData.png"
                      className="h-[220px] m-[auto] object-cover rounded-[12px] w-[100%]"
                      alt="imageThree Five"
                    />
                    <div className="absolute bg-bluegray_101 bottom-[0] h-[269px] inset-x-[0] mx-[auto] rounded-[5px] w-[100%]"></div>
                  </div>
                  <Text
                    className="font-bold font-merriweather mt-[20px] text-bluegray_910 text-left tracking-[0.57px] w-[auto]"
                    variant="body50"
                  >
                    Quintessence
                  </Text>
                  <Text
                    className="font-normal font-plusjakartasans mt-[12px] not-italic text-bluegray_900_cc text-left tracking-[1.50px] w-[auto]"
                    variant="body67"
                  >
                    Tremaine Loadholt
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div
                    className="bg-cover bg-no-repeat h-[220px] md:h-[257px] relative rounded-[12px] shadow-bs57 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group770488.png')",
                    }}
                  >
                    <Img
                      src="defaultNoData.png"
                      className="h-[220px] m-[auto] object-cover rounded-[12px] w-[100%]"
                      alt="imageThree Six"
                    />
                    <div className="absolute bg-bluegray_101 bottom-[0] h-[257px] inset-x-[0] mx-[auto] rounded-[12px] shadow-bs58 w-[100%]"></div>
                  </div>
                  <Text
                    className="font-bold font-merriweather mt-[19px] text-bluegray_910 text-left tracking-[0.57px] w-[auto]"
                    variant="body50"
                  >
                    Sherlock Holmes
                  </Text>
                  <Text
                    className="font-normal font-plusjakartasans mt-[13px] not-italic text-bluegray_900_cc text-left tracking-[1.50px] w-[auto]"
                    variant="body67"
                  >
                    Arthur Conan
                  </Text>
                </div>
              </List>
            </div>
            <div className="absolute flex sm:flex-col flex-row sm:gap-[40px] h-[100%] inset-y-[0] items-start justify-between my-[auto] right-[0] w-[40%]">
              <div className="bg-yellow_51 flex items-center justify-start p-[16px] rounded-[8px] sm:w-[100%] w-[auto]">
                <div className="flex flex-col justify-start mb-[16px] mt-[9px] md:w-[100%] w-[98%]">
                  <Img
                    src="images/img_arrowleft_gray_938.svg"
                    className="h-[20px] md:ml-[0] ml-[135px] w-[auto]"
                    alt="arrowleft One"
                  />
                  <div className="flex flex-col gap-[32px] items-center justify-start md:ml-[0] ml-[6px] mt-[42px] md:w-[100%] w-[97%]">
                    <div className="flex flex-row gap-[24px] items-center justify-between md:w-[100%] w-[98%]">
                      <div
                        className="bg-cover bg-no-repeat h-[180px] md:h-[197px] relative rounded-[5px] shadow-bs59 w-[37%]"
                        style={{
                          backgroundImage: "url('images/defaultNoData.png')",
                        }}
                      >
                        <Img
                          src="images/img_image4_180x130.png"
                          className="h-[180px] m-[auto] object-cover rounded-[5px] w-[100%]"
                          alt="imageFour One"
                        />
                        <div className="absolute bg-bluegray_101 h-[197px] inset-x-[0] mx-[auto] rounded-[5px] shadow-bs60 top-[0] w-[100%]"></div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[57%]">
                        <Text
                          className="font-bold font-merriweather text-bluegray_910 text-left tracking-[0.57px] w-[auto]"
                          variant="body43"
                        >
                          The Wicked Deep
                        </Text>
                        <Text
                          className="font-normal font-plusjakartasans mt-[9px] not-italic text-bluegray_900_cc text-left tracking-[1.50px] w-[auto]"
                          variant="body54"
                        >
                          Shea Ernshaw
                        </Text>
                        <Text
                          className="font-bold font-merriweather mt-[17px] text-bluegray_910 text-left tracking-[0.50px] w-[auto]"
                          variant="body59"
                        >
                          Chapter Eight: Partners
                        </Text>
                        <div className="flex font-poppins items-center justify-start mt-[18px] w-[100%]">
                          <div className="flex items-center justify-start w-[100%]">
                            <Button
                              className="bg-white_A700 border-[2px] border-bluegray_910 border-solid flex items-center justify-center px-[24px] py-[8px] rounded-[8px] shadow-bs56 sm:px-[20px] text-center w-[203px]"
                              leftIcon={
                                <Img
                                  src="images/img_menu_bluegray_910.svg"
                                  className="mr-[8px] text-center"
                                  alt="menu"
                                />
                              }
                            >
                              <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-bluegray_910 text-left tracking-[0.50px]">
                                Chapter List
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-start w-[100%]">
                      <Img
                        src="images/img_computer_bluegray_910.svg"
                        className="h-[44px] w-[44px]"
                        alt="computer One"
                      />
                      <Text
                        className="sm:flex-1 font-normal leading-[230.00%] not-italic text-gray_707 text-left tracking-[0.50px] sm:w-[100%] w-[86%]"
                        variant="body59"
                      >
                        e thumbed through them until he found a faded photo,
                        crinkled and smudged from
                      </Text>
                    </div>
                  </div>
                  <div className="h-[320px] relative w-[96%]">
                    <div className="absolute bg-teal_200_4c h-[28px] left-[0] top-[11%] w-[96%]"></div>
                    <Text
                      className="absolute font-normal h-[100%] inset-[0] justify-center leading-[230.00%] m-[auto] not-italic text-bluegray_910 text-left tracking-[0.50px] sm:w-[100%] w-[99%]"
                      variant="body59"
                    >
                      <span className="text-bluegray_910 text-[14px] font-plusjakartasans">
                        from being held too many times.{" "}
                      </span>
                      <span className="text-bluegray_910 text-[14px] font-plusjakartasans">
                        It was his favorite{" "}
                      </span>
                      <span className="text-bluegray_910 text-[14px] font-plusjakartasans font-semibold">
                        picture because he
                      </span>
                      <span className="text-bluegray_910 text-[14px] font-plusjakartasans font-semibold">
                        {" "}
                        remembered the day it was
                      </span>
                      <span className="text-bluegray_910 text-[14px] font-plusjakartasans">
                        {" "}
                        taken--a family picnic just after his mother had started
                        teaching at the middle school. There were other
                        pictures, too, but most of those felt like other
                        people&#39;s memories. After a minute, he set aside the
                        photo and moved on to the letters. Nearly all were from
                        his father during their senior year together a
                        Princeton, when she&#39;d studied abroad in England.
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[6px] mt-[16px] md:w-[100%] w-[99%]">
                    <div className="h-[105px] md:h-[96px] relative w-[100%]">
                      <Text
                        className="absolute font-normal inset-x-[0] leading-[230.00%] mx-[auto] not-italic text-gray_707 text-left top-[0] tracking-[0.50px]"
                        variant="body59"
                      >
                        But there was another lette It was addressed to Emily
                        Donovan, his mother&#39;s maiden name, yet it had
                        <br />
                        been postmarked just days before the accident:
                      </Text>
                      <div className="absolute bg-gradient17  bottom-[0] h-[93px] inset-x-[0] mx-[auto] w-[100%]"></div>
                    </div>
                    <div className="h-[42px] mt-[32px] relative w-[96%]">
                      <Img
                        src="images/img_group419_teal_201.svg"
                        className="h-[18px] mb-[-4px] mx-[auto] w-[auto] z-[1]"
                        alt="Group419 One"
                      />
                      <div className="flex items-center justify-start mt-[auto] mx-[auto] w-[100%]">
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_900_101 text-left tracking-[0.50px] w-[auto]"
                            variant="body67"
                          >
                            14:24
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_900_101 text-right tracking-[0.50px] w-[auto]"
                            variant="body67"
                          >
                            -2:21
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between md:ml-[0] ml-[14px] mt-[19px] md:w-[100%] w-[93%]">
                      <Img
                        src="images/img_rewind_bluegray_910.svg"
                        className="h-[32px] w-[32px]"
                        alt="rewind"
                      />
                      <div className="md:h-[21px] h-[32px] p-[4px] relative rotate-[180deg] w-[32px]">
                        <div
                          className="absolute bg-cover bg-no-repeat flex h-[max-content] inset-y-[0] items-end justify-end my-[auto] right-[13%] w-[21px]"
                          style={{
                            backgroundImage: "url('images/img_group248.svg')",
                          }}
                        >
                          <Text
                            className="font-normal mr-[2px] rotate-[180deg] text-bluegray_910 text-right tracking-[0.50px] w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            30
                          </Text>
                        </div>
                        <Img
                          src="images/img_primary.svg"
                          className="absolute h-[4px] left-[13%] top-[22%] w-[5px]"
                          alt="primary"
                        />
                      </div>
                      <Button className="bg-indigo_A205 border-[2px] border-bluegray_910 border-solid flex items-center justify-center p-[15px] rounded-[32px] shadow-bs56 w-[auto]">
                        <Img
                          src="images/img_group442.svg"
                          className="h-[32px]"
                          alt="Group442"
                        />
                      </Button>
                      <div className="md:h-[21px] h-[32px] p-[4px] relative w-[32px]">
                        <div
                          className="absolute bg-cover bg-no-repeat flex h-[max-content] inset-y-[0] items-start justify-end left-[13%] my-[auto] w-[21px]"
                          style={{
                            backgroundImage: "url('images/img_group247.svg')",
                          }}
                        >
                          <Text
                            className="font-normal md:ml-[0] ml-[2px] text-bluegray_910 text-right tracking-[0.50px] w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            30
                          </Text>
                        </div>
                        <Img
                          src="images/img_primary_bluegray_910.svg"
                          className="absolute h-[4px] right-[13%] top-[22%] w-[5px]"
                          alt="primary One"
                        />
                      </div>
                      <Img
                        src="images/img_volume_bluegray_910.svg"
                        className="h-[32px] w-[32px]"
                        alt="volume"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_location_gray_938.svg"
                className="h-[20px] sm:mt-[0] mt-[25px] w-[auto]"
                alt="location One"
              />
            </div>
          </div>
          <div className="absolute flex flex-row gap-[92px] items-end justify-center right-[35%] top-[2%] w-[10%]">
            <div className="bg-red_508 border-[1px] border-solid border-white_A700 h-[10px] mb-[3px] mt-[6px] rounded-[50%] w-[10px]"></div>
            <Img
              src="images/img_iconlylightnotification.svg"
              className="h-[20px] w-[auto]"
              alt="IconlyLightNotification"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AucaAudioBookDashboardPage;
