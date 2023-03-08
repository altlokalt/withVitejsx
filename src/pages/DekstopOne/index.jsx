import React from "react";

import { Img, Line, Text, Button, List } from "components";

const DekstopOnePage = () => {
  return (
    <>
      <div className="bg-gray_957 flex font-poppins items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <Img
            src="images/img_sidebar_gray_958.svg"
            className="h-[1024px] w-[auto]"
            alt="Sidebar"
          />
          <div className="flex md:flex-1 flex-col gap-[24px] items-center justify-start md:px-[20px] md:w-[100%] w-[92%]">
            <div className="bg-gray_958 flex md:flex-col flex-row md:gap-[20px] items-center justify-start p-[14px] w-[100%]">
              <div className="bg-bluegray_907 flex md:flex-1 flex-row gap-[16px] items-center justify-start md:ml-[0] ml-[18px] md:mt-[0] my-[10px] p-[8px] rounded-[26px] md:w-[100%] w-[39%]">
                <Img
                  src="images/img_search_white_a700_24x24.svg"
                  className="h-[24px] ml-[16px] w-[24px]"
                  alt="search"
                />
                <Line className="bg-bluegray_501 h-[36px] w-[1px]" />
                <Text
                  className="font-normal not-italic text-left text-white_A700 w-[auto]"
                  variant="body59"
                >
                  Search...
                </Text>
              </div>
              <Button className="bg-bluegray_908 flex h-[52px] items-center justify-center md:ml-[0] ml-[278px] md:mt-[0] my-[10px] p-[14px] rounded-[50%] w-[52px]">
                <Img
                  src="images/img_car_white_a700.svg"
                  className="h-[24px]"
                  alt="car"
                />
              </Button>
              <Button className="bg-bluegray_908 flex h-[52px] items-center justify-center md:ml-[0] ml-[16px] md:mt-[0] my-[10px] p-[14px] rounded-[50%] w-[52px]">
                <Img
                  src="images/img_notification_white_a700.svg"
                  className="h-[24px]"
                  alt="notification"
                />
              </Button>
              <Line className="bg-bluegray_801 md:h-[1px] h-[72px] md:ml-[0] ml-[24px] md:w-[100%] w-[1px]" />
              <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[24px] md:w-[100%] w-[24%]">
                <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                  <div className="bg-bluegray_213 h-[52px] rounded-[50%] w-[52px]"></div>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body47"
                    >
                      Albert Kennedy
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_303 text-left w-[auto]"
                      variant="body67"
                    >
                      Project manager
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_arrowdown.svg"
                  className="h-[18px] w-[18px]"
                  alt="arrowdown"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[16px] items-center justify-start md:w-[100%] w-[96%]">
              <div className="flex items-center justify-start md:w-[100%] w-[71%]">
                <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-col gap-[16px] items-start justify-start sm:w-[100%] w-[auto]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body22"
                      >
                        Welcome Back, Albert
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_301 text-left w-[auto]"
                        variant="body50"
                      >
                        A happy day with your favorite event
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex md:flex-1 md:flex-col flex-row gap-[4px] items-center justify-center md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                          <Button className="bg-cyan_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_music_white_a700.svg"
                              className=""
                              alt="music"
                            />
                          </Button>
                          <a
                            className="font-semibold text-[16px] text-left text-white_A700 underline w-[auto]"
                            href="javascript:"
                          >
                            Music Concert
                          </a>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                          <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_link.svg"
                              className="h-[21px]"
                              alt="link"
                            />
                          </Button>
                          <Text
                            className="font-normal not-italic text-gray_301 text-left w-[auto]"
                            variant="body59"
                          >
                            Clubbing Party
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                          <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_location_bluegray_704.svg"
                              className=""
                              alt="location"
                            />
                          </Button>
                          <Text
                            className="font-normal not-italic text-gray_301 text-left w-[auto]"
                            variant="body59"
                          >
                            Games Live
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                          <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                            <Img
                              src="images/img_volume_bluegray_705.svg"
                              className="h-[20px]"
                              alt="volume"
                            />
                          </Button>
                          <Text
                            className="font-normal not-italic text-gray_301 text-left w-[auto]"
                            variant="body59"
                          >
                            Festival
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-center pl-[8px] sm:pr-[20px] pr-[24px] py-[8px] w-[auto]">
                        <Button className="bg-white_A700 flex h-[40px] items-center justify-center p-[8px] rounded-[50%] w-[40px]">
                          <Img
                            src="images/img_filter.svg"
                            className=""
                            alt="filter"
                          />
                        </Button>
                        <Text
                          className="font-normal not-italic text-gray_301 text-left w-[auto]"
                          variant="body59"
                        >
                          Filter
                        </Text>
                      </div>
                    </div>
                  </div>
                  <List
                    className="flex-col gap-[16px] grid items-start md:w-[100%] w-[auto]"
                    orientation="vertical"
                  >
                    <div className="flex items-center justify-start my-[0] w-[100%]">
                      <div className="bg-gray_958 flex md:flex-col flex-row gap-[16px] items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                        <div className="bg-bluegray_213 h-[247px] rounded-[8px] w-[40%]"></div>
                        <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[58%]">
                          <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                            <div className="flex sm:flex-col flex-row gap-[32px] items-start justify-between w-[100%]">
                              <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start sm:w-[100%] w-[auto]">
                                <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-medium leading-[140.00%] md:max-w-[100%] max-w-[380px] text-left text-white_A700"
                                    variant="body43"
                                  >
                                    Big concert music event after a long time
                                    not held with a popular band
                                  </Text>
                                  <Text
                                    className="font-light leading-[160.00%] md:max-w-[100%] max-w-[420px] text-gray_303 text-left"
                                    variant="body67"
                                  >
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit.
                                    Exercitation veniam consequat sunt nostrud
                                    amet.
                                  </Text>
                                </div>
                                <Text
                                  className="font-light text-left text-light_blue_A201 w-[auto]"
                                  variant="body67"
                                >
                                  Read More...
                                </Text>
                              </div>
                              <Button className="bg-cyan_A700 flex h-[42px] items-center justify-center mb-[110px] p-[12px] rounded-[50%] w-[42px]">
                                <Img
                                  src="images/img_share_white_a700.svg"
                                  className=""
                                  alt="share"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[24px] items-start justify-between sm:w-[100%] w-[494px]">
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_clock_gray_303.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="clock"
                                />
                                <Text
                                  className="font-normal not-italic text-gray_303 text-left w-[auto]"
                                  variant="body67"
                                >
                                  Sunday, 15 Oct 2022
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_favorite_gray_303.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="favorite"
                                />
                                <Text
                                  className="font-normal not-italic text-gray_303 text-left w-[auto]"
                                  variant="body67"
                                >
                                  375K+ Like
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-end w-[auto]">
                                <Img
                                  src="images/img_user_gray_318.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="user"
                                />
                                <Text
                                  className="font-normal not-italic text-gray_303 text-left w-[auto]"
                                  variant="body67"
                                >
                                  1.500+ Guest
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start my-[0] w-[100%]">
                      <div className="bg-gray_958 flex md:flex-col flex-row gap-[16px] items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                        <div className="bg-bluegray_213 h-[247px] rounded-[8px] w-[40%]"></div>
                        <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[58%]">
                          <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                            <div className="flex sm:flex-col flex-row gap-[32px] items-start justify-between w-[100%]">
                              <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start sm:w-[100%] w-[auto]">
                                <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-medium leading-[140.00%] md:max-w-[100%] max-w-[380px] text-left text-white_A700"
                                    variant="body43"
                                  >
                                    Let&#39;s sing until morning that&#39;s the
                                    slogan of this great event
                                  </Text>
                                  <Text
                                    className="font-light leading-[160.00%] md:max-w-[100%] max-w-[420px] text-gray_303 text-left"
                                    variant="body67"
                                  >
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit.
                                    Exercitation veniam consequat sunt nostrud
                                    amet.
                                  </Text>
                                </div>
                                <Text
                                  className="font-light text-left text-light_blue_A201 w-[auto]"
                                  variant="body67"
                                >
                                  Read More...
                                </Text>
                              </div>
                              <Button className="bg-cyan_A700 flex h-[42px] items-center justify-center mb-[110px] p-[12px] rounded-[50%] w-[42px]">
                                <Img
                                  src="images/img_share_white_a700.svg"
                                  className=""
                                  alt="share One"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[24px] items-start justify-between sm:w-[100%] w-[494px]">
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_clock_gray_303.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="clock One"
                                />
                                <Text
                                  className="font-normal not-italic text-gray_303 text-left w-[auto]"
                                  variant="body67"
                                >
                                  Sunday, 22 Oct 2022
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_favorite_gray_303.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="favorite One"
                                />
                                <Text
                                  className="font-normal not-italic text-gray_303 text-left w-[auto]"
                                  variant="body67"
                                >
                                  207K+ Like
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-end w-[auto]">
                                <Img
                                  src="images/img_user_gray_318.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="user One"
                                />
                                <Text
                                  className="font-normal not-italic text-gray_303 text-left w-[auto]"
                                  variant="body67"
                                >
                                  1.150+ Guest
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-start my-[0] w-[100%]">
                      <div className="bg-gray_958 flex md:flex-col flex-row gap-[16px] items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                        <div className="bg-bluegray_213 h-[247px] rounded-[8px] w-[40%]"></div>
                        <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[58%]">
                          <div className="flex flex-col gap-[29px] items-center justify-start w-[100%]">
                            <div className="flex sm:flex-col flex-row gap-[32px] items-start justify-between w-[100%]">
                              <div className="flex sm:flex-1 flex-col gap-[14px] items-start justify-start sm:w-[100%] w-[auto]">
                                <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-medium leading-[140.00%] md:max-w-[100%] max-w-[380px] text-left text-white_A700"
                                    variant="body43"
                                  >
                                    Solo music for up-and-coming new singers and
                                    musicians
                                  </Text>
                                  <Text
                                    className="font-light leading-[160.00%] md:max-w-[100%] max-w-[420px] text-gray_303 text-left"
                                    variant="body67"
                                  >
                                    Amet minim mollit non deserunt ullamco est
                                    sit aliqua dolor do amet sint. Velit officia
                                    consequat duis enim velit mollit.
                                    Exercitation veniam consequat sunt nostrud
                                    amet.
                                  </Text>
                                </div>
                                <Text
                                  className="font-light text-left text-light_blue_A201 w-[auto]"
                                  variant="body67"
                                >
                                  Read More...
                                </Text>
                              </div>
                              <Button className="bg-cyan_A700 flex h-[42px] items-center justify-center mb-[111px] p-[12px] rounded-[50%] w-[42px]">
                                <Img
                                  src="images/img_share_white_a700.svg"
                                  className=""
                                  alt="share Two"
                                />
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[24px] items-start justify-between sm:w-[100%] w-[494px]">
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_clock_gray_303.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="clock Two"
                                />
                                <Text
                                  className="font-normal not-italic text-gray_303 text-left w-[auto]"
                                  variant="body67"
                                >
                                  Sunday, 15 Oct 2022
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                                <Img
                                  src="images/img_favorite_gray_303.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="favorite Two"
                                />
                                <Text
                                  className="font-normal not-italic text-gray_303 text-left w-[auto]"
                                  variant="body67"
                                >
                                  375K+ Like
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[8px] items-center justify-end w-[auto]">
                                <Img
                                  src="images/img_user_gray_318.svg"
                                  className="h-[24px] w-[24px]"
                                  alt="user Two"
                                />
                                <Text
                                  className="font-normal not-italic text-gray_303 text-left w-[auto]"
                                  variant="body67"
                                >
                                  1.500+ Guest
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col gap-[17px] items-start justify-start mb-[11px] w-[auto]">
                <div className="bg-gray_958 flex flex-col gap-[21px] items-start justify-center p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
                  <Text
                    className="font-medium mt-[2px] text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Popular Events
                  </Text>
                  <List
                    className="flex-col gap-[16px] grid items-center mb-[8px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row items-center justify-between w-[310px]">
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <div className="bg-bluegray_213 h-[50px] rounded-[50%] w-[50px]"></div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_303 text-left w-[auto]"
                            variant="body59"
                          >
                            Sing Forever
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_201 text-left w-[auto]"
                            variant="body67"
                          >
                            16K member
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu_black_900.svg"
                        className="h-[24px] w-[24px]"
                        alt="overflowmenu"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between w-[310px]">
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <div className="bg-bluegray_213 h-[50px] rounded-[50%] w-[50px]"></div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_303 text-left w-[auto]"
                            variant="body59"
                          >
                            Entertaiment Hyperio
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_201 text-left w-[auto]"
                            variant="body67"
                          >
                            12K member
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu_black_900.svg"
                        className="h-[24px] w-[24px]"
                        alt="overflowmenu One"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between w-[310px]">
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <div className="bg-bluegray_213 h-[50px] rounded-[50%] w-[50px]"></div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_303 text-left w-[auto]"
                            variant="body59"
                          >
                            Extender The Best Choice
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_201 text-left w-[auto]"
                            variant="body67"
                          >
                            15K member
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu_black_900.svg"
                        className="h-[24px] w-[24px]"
                        alt="overflowmenu Two"
                      />
                    </div>
                    <div className="flex flex-row items-center justify-between w-[310px]">
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <div className="bg-bluegray_213 h-[50px] rounded-[50%] w-[50px]"></div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_303 text-left w-[auto]"
                            variant="body59"
                          >
                            Forever In Midnight{" "}
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_201 text-left w-[auto]"
                            variant="body67"
                          >
                            37K member
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_overflowmenu_black_900.svg"
                        className="h-[24px] w-[24px]"
                        alt="overflowmenu Three"
                      />
                    </div>
                  </List>
                </div>
                <div className="bg-gray_958 flex items-center justify-start p-[23px] sm:px-[20px] rounded-[8px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-end justify-start w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[48%]">
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body47"
                      >
                        Recent Viewed
                      </Text>
                      <div className="bg-bluegray_213 h-[186px] mt-[27px] rounded-[8px] w-[100%]"></div>
                      <div className="bg-bluegray_213 h-[130px] mt-[16px] rounded-[8px] w-[100%]"></div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-center justify-start mt-[54px] w-[48%]">
                      <div className="bg-bluegray_213 h-[100px] rounded-[8px] w-[100%]"></div>
                      <div className="bg-bluegray_213 h-[100px] rounded-[8px] w-[100%]"></div>
                      <div className="bg-bluegray_213 h-[100px] rounded-[8px] w-[100%]"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray_958 flex flex-col gap-[16px] items-start justify-start p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Our Videos
                  </Text>
                  <Img
                    src="images/img_maskgroup_bluegray_213.svg"
                    className="h-[160px] w-[auto]"
                    alt="MaskGroup"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DekstopOnePage;
