import React from "react";

import { Img, Button, Text, List } from "components";

const DashboardDarkmodeOnePage = () => {
  return (
    <>
      <div className="bg-bluegray_922 flex font-poppins items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <Img
            src="images/img_sidebar_bluegray_936.svg"
            className="h-[1024px] w-[auto]"
            alt="Sidebar"
          />
          <div className="flex md:flex-1 flex-col gap-[24px] items-center justify-start md:px-[20px] md:w-[100%] w-[92%]">
            <div className="bg-bluegray_936 flex md:flex-col flex-row md:gap-[20px] items-center justify-end sm:px-[20px] px-[24px] w-[100%]">
              <Img
                src="images/img_story.svg"
                className="h-[144px] w-[auto]"
                alt="story"
              />
              <Button className="border-[1px] border-cyan_A700 border-solid flex h-[48px] items-center justify-center md:ml-[0] ml-[25px] p-[12px] rounded-[50%] shadow-bs8 w-[48px]">
                <Img
                  src="images/img_notification_cyan_a700.svg"
                  className=""
                  alt="notification"
                />
              </Button>
              <Button className="border-[1px] border-cyan_A700 border-solid flex h-[48px] items-center justify-center md:ml-[0] ml-[24px] p-[12px] rounded-[50%] shadow-bs8 w-[48px]">
                <Img
                  src="images/img_settings_cyan_a700.svg"
                  className=""
                  alt="settings"
                />
              </Button>
              <div className="flex flex-row items-center justify-between md:ml-[0] ml-[72px] w-[314px]">
                <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
                  <div className="bg-bluegray_210 h-[64px] rounded-[50%] w-[64px]"></div>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_59 text-left w-[auto]"
                      variant="body50"
                    >
                      Edward Collin
                    </Text>
                    <Text
                      className="font-light text-gray_303 text-left w-[auto]"
                      variant="body59"
                    >
                      edward@gmail.com
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_arrowdown_bluegray_59.svg"
                  className="h-[24px] w-[24px]"
                  alt="arrowdown"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between md:w-[100%] w-[97%]">
              <div className="flex flex-col gap-[32px] items-center justify-start md:w-[100%] w-[70%]">
                <div className="bg-bluegray_936 flex items-start justify-start p-[24px] sm:px-[20px] rounded-[8px] md:w-[100%] w-[auto]">
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between max-w-[842px] w-[100%]">
                    <div className="flex flex-row gap-[16px] items-center justify-start w-[auto]">
                      <div className="bg-bluegray_210 h-[50px] rounded-[50%] w-[50px]"></div>
                      <Text
                        className="font-light text-bluegray_212 text-left w-[auto]"
                        variant="body50"
                      >
                        Write your story today..
                      </Text>
                    </div>
                    <Img
                      src="images/img_add.svg"
                      className="h-[20px] w-[92px]"
                      alt="add"
                    />
                  </div>
                </div>
                <List
                  className="flex-col gap-[16px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-bluegray_936 flex flex-1 md:flex-col flex-row gap-[16px] items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_210 h-[247px] rounded-[8px] w-[40%]"></div>
                    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[58%]">
                      <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row gap-[32px] items-start justify-between w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start sm:w-[100%] w-[auto]">
                            <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                              <Text
                                className="font-medium leading-[140.00%] md:max-w-[100%] max-w-[380px] text-bluegray_59 text-left"
                                variant="body43"
                              >
                                Finally after so long waiting I have time to
                                relax and get my time
                              </Text>
                              <Text
                                className="font-light leading-[160.00%] md:max-w-[100%] max-w-[420px] text-gray_303 text-left"
                                variant="body67"
                              >
                                Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                              </Text>
                            </div>
                            <Text
                              className="font-light text-left text-light_blue_400 w-[auto]"
                              variant="body67"
                            >
                              Read More...
                            </Text>
                          </div>
                          <Button className="bg-bluegray_922 flex h-[42px] items-center justify-center mb-[110px] p-[12px] rounded-[50%] w-[42px]">
                            <Img
                              src="images/img_share_gray_303.svg"
                              className=""
                              alt="share"
                            />
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <div className="bg-bluegray_210 h-[42px] rounded-[50%] w-[42px]"></div>
                            <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_303 text-left w-[auto]"
                                variant="body59"
                              >
                                Sabrina Lestrania
                              </Text>
                              <Text
                                className="font-light text-bluegray_212 text-left w-[auto]"
                                variant="body67"
                              >
                                17 minute ago
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[24px] items-start justify-start w-[auto]">
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
                                37 Likes
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_phchatcircledots.svg"
                                className="h-[24px] w-[24px]"
                                alt="phchatcircledots"
                              />
                              <Text
                                className="font-normal not-italic text-gray_303 text-left w-[auto]"
                                variant="body67"
                              >
                                37 Comments
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_936 flex flex-1 md:flex-col flex-row gap-[16px] items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_210 h-[247px] rounded-[8px] w-[40%]"></div>
                    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[58%]">
                      <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row gap-[32px] items-start justify-between w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[13px] items-start justify-start sm:w-[100%] w-[auto]">
                            <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                              <Text
                                className="font-medium leading-[140.00%] md:max-w-[100%] max-w-[380px] text-bluegray_59 text-left"
                                variant="body43"
                              >
                                I never leave any moment especially when I eat
                                my favorite food
                              </Text>
                              <Text
                                className="font-light leading-[160.00%] md:max-w-[100%] max-w-[420px] text-gray_303 text-left"
                                variant="body67"
                              >
                                Vestibulum eu quam nec neque pellentesque
                                efficitur id eget nisl. Proin porta est
                                convallis lacus blandit pretium sed non enim.
                                Maecenas lacinia non orci at aliquam.
                              </Text>
                            </div>
                            <Text
                              className="font-light text-left text-light_blue_400 w-[auto]"
                              variant="body67"
                            >
                              Read More...
                            </Text>
                          </div>
                          <Button className="bg-bluegray_922 flex h-[42px] items-center justify-center mb-[110px] p-[12px] rounded-[50%] w-[42px]">
                            <Img
                              src="images/img_share_gray_303.svg"
                              className=""
                              alt="share One"
                            />
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <div className="bg-bluegray_210 h-[42px] rounded-[50%] w-[42px]"></div>
                            <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_303 text-left w-[auto]"
                                variant="body59"
                              >
                                Albert Tifanico
                              </Text>
                              <Text
                                className="font-light text-bluegray_212 text-left w-[auto]"
                                variant="body67"
                              >
                                23 minute ago
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[24px] items-start justify-start w-[auto]">
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
                                56 Likes
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_phchatcircledots.svg"
                                className="h-[24px] w-[24px]"
                                alt="phchatcircledots One"
                              />
                              <Text
                                className="font-normal not-italic text-gray_303 text-left w-[auto]"
                                variant="body67"
                              >
                                37 Comments
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-bluegray_936 flex flex-1 md:flex-col flex-row gap-[16px] items-center justify-start p-[16px] rounded-[8px] w-[100%]">
                    <div className="bg-bluegray_210 h-[247px] rounded-[8px] w-[40%]"></div>
                    <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[58%]">
                      <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                        <div className="flex sm:flex-col flex-row gap-[32px] items-start justify-between w-[100%]">
                          <div className="flex sm:flex-1 flex-col gap-[14px] items-start justify-start sm:w-[100%] w-[auto]">
                            <div className="flex flex-col gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                              <Text
                                className="font-medium leading-[140.00%] md:max-w-[100%] max-w-[380px] text-bluegray_59 text-left"
                                variant="body43"
                              >
                                Today I’m just started learning how to use a
                                skateboard and it&#39;s really fun
                              </Text>
                              <Text
                                className="font-light leading-[160.00%] md:max-w-[100%] max-w-[420px] text-gray_303 text-left"
                                variant="body67"
                              >
                                Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                              </Text>
                            </div>
                            <Text
                              className="font-light text-left text-light_blue_400 w-[auto]"
                              variant="body67"
                            >
                              Read More...
                            </Text>
                          </div>
                          <Button className="bg-bluegray_922 flex h-[42px] items-center justify-center mb-[111px] p-[12px] rounded-[50%] w-[42px]">
                            <Img
                              src="images/img_share_gray_303.svg"
                              className=""
                              alt="share Two"
                            />
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                          <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                            <div className="bg-bluegray_210 h-[42px] rounded-[50%] w-[42px]"></div>
                            <div className="flex flex-col gap-[2px] items-start justify-start w-[auto]">
                              <Text
                                className="font-normal not-italic text-gray_303 text-left w-[auto]"
                                variant="body59"
                              >
                                Emery Ambrose
                              </Text>
                              <Text
                                className="font-light text-bluegray_212 text-left w-[auto]"
                                variant="body67"
                              >
                                12 minute ago
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-[24px] items-start justify-start w-[auto]">
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
                                37 Likes
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                              <Img
                                src="images/img_phchatcircledots.svg"
                                className="h-[24px] w-[24px]"
                                alt="phchatcircledots Two"
                              />
                              <Text
                                className="font-normal not-italic text-gray_303 text-left w-[auto]"
                                variant="body67"
                              >
                                37 Comments
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col items-center justify-start md:w-[100%] w-[29%]">
                <div className="bg-bluegray_936 flex flex-col gap-[16px] items-start justify-start p-[23px] sm:px-[20px] rounded-[8px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_59 text-left w-[auto]"
                    variant="body47"
                  >
                    Ads Platform
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex h-[160px] items-end justify-end p-[12px] md:w-[100%] w-[97%]"
                    style={{
                      backgroundImage: "url('images/img_group1280.svg')",
                    }}
                  >
                    <div className="bg-black_900_a5 flex flex-row items-center justify-end mt-[100px] p-[5px] rounded-[8px] md:w-[100%] w-[31%]">
                      <Text
                        className="font-semibold text-right text-yellow_A700 w-[auto]"
                        variant="body50"
                      >
                        $99
                      </Text>
                      <div className="h-[18px] mx-[3px] relative w-[43%]">
                        <Text
                          className="absolute font-light h-[100%] inset-[0] justify-center m-[auto] text-bluegray_113 text-right w-[max-content]"
                          variant="body67"
                        >
                          $150
                        </Text>
                        <div className="absolute bg-bluegray_113 bottom-[39%] h-[1px] inset-x-[0] mx-[auto] w-[100%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-bluegray_936 flex flex-col gap-[22px] items-start justify-center mt-[16px] p-[24px] sm:px-[20px] rounded-[8px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_59 text-left w-[auto]"
                    variant="body47"
                  >
                    My Community
                  </Text>
                  <List
                    className="flex-col gap-[16px] grid items-center mb-[8px] w-[100%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row items-center justify-between w-[310px]">
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <div className="bg-bluegray_210 h-[50px] rounded-[50%] w-[50px]"></div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_303 text-left w-[auto]"
                            variant="body59"
                          >
                            Foodie Master
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_212 text-left w-[auto]"
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
                        <div className="bg-bluegray_210 h-[50px] rounded-[50%] w-[50px]"></div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_303 text-left w-[auto]"
                            variant="body59"
                          >
                            Interior Designer Meet
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_212 text-left w-[auto]"
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
                        <div className="bg-bluegray_210 h-[50px] rounded-[50%] w-[50px]"></div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_303 text-left w-[auto]"
                            variant="body59"
                          >
                            World Photographer
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_212 text-left w-[auto]"
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
                        <div className="bg-bluegray_210 h-[50px] rounded-[50%] w-[50px]"></div>
                        <div className="flex flex-col gap-[4px] items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-gray_303 text-left w-[auto]"
                            variant="body59"
                          >
                            Travel Lovers
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_212 text-left w-[auto]"
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
                <div className="bg-bluegray_936 flex items-center justify-start mt-[17px] p-[23px] sm:px-[20px] rounded-[8px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-start justify-start mb-[37px] w-[100%]">
                    <div className="flex flex-col gap-[27px] items-start justify-start mb-[30px] w-[48%]">
                      <Text
                        className="font-medium text-bluegray_59 text-left w-[auto]"
                        variant="body47"
                      >
                        Recent Viewed
                      </Text>
                      <div className="bg-bluegray_210 h-[186px] rounded-[8px] w-[100%]"></div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-center justify-start mt-[54px] w-[48%]">
                      <div className="bg-bluegray_210 h-[100px] rounded-[8px] w-[100%]"></div>
                      <div className="bg-bluegray_210 h-[100px] rounded-[8px] w-[100%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardDarkmodeOnePage;
