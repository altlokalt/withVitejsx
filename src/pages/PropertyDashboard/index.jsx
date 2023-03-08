import React from "react";

import { Text, Img, Line, Button, SelectBox, List } from "components";

const PropertyDashboardPage = () => {
  return (
    <>
      <div className="bg-gray_66 flex font-poppins items-start justify-end mx-[auto] sm:pr-[20px] pr-[240px] md:pr-[40px] w-[100%]">
        <div className="flex flex-col gap-[50px] items-center justify-end w-[100%]">
          <header className="flex items-center justify-center w-[100%]">
            <div className="bg-teal_500 flex md:flex-col flex-row md:gap-[20px] items-center justify-center pt-[25px] sm:px-[20px] px-[25px] shadow-bs46 w-[100%]">
              <div className="header-row mt-[13px] mb-[31px]">
                <Text
                  className="font-normal font-righteous not-italic text-left text-white_A700"
                  variant="body26"
                >
                  MyProperty
                </Text>
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="bg-white_A700 flex md:flex-1 flex-row font-poppins gap-[156px] sm:hidden items-center justify-center mb-[25px] md:ml-[0] ml-[312px] p-[6px] rounded-[15px] md:w-[100%] w-[22%]">
                <Text
                  className="font-normal ml-[19px] not-italic text-gray_421 text-left w-[auto]"
                  variant="body44"
                >
                  Search Location...
                </Text>
                <div className="bg-teal_500 flex h-[48px] items-center justify-start mr-[2px] p-[14px] rounded-[10px] w-[48px]">
                  <Img
                    src="images/img_search_white_a700_19x19.svg"
                    className="h-[19px] w-[19px]"
                    alt="search"
                  />
                </div>
              </div>
              <Text
                className="font-medium font-poppins sm:hidden md:ml-[0] ml-[259px] text-left text-white_A700 w-[auto]"
                variant="body37"
              >
                Buy
              </Text>
              <div className="flex md:flex-1 flex-col font-poppins gap-[30px] sm:hidden items-center justify-start md:ml-[0] ml-[80px] md:mt-[0] mt-[13px] md:w-[100%] w-[4%]">
                <Text
                  className="font-bold text-left text-white_A700 w-[auto]"
                  variant="body37"
                >
                  Rent
                </Text>
                <Line className="bg-yellow_A701 h-[5px] rounded-[2px] w-[100%]" />
              </div>
              <Text
                className="font-medium font-poppins sm:hidden md:ml-[0] ml-[80px] text-left text-white_A700 w-[auto]"
                variant="body37"
              >
                Sell
              </Text>
              <Text
                className="font-medium font-poppins sm:hidden md:ml-[0] ml-[80px] text-left text-white_A700 w-[auto]"
                variant="body37"
              >
                Account
              </Text>
              <Img
                src="images/img_group.svg"
                className="h-[28px] sm:hidden md:ml-[0] ml-[72px] w-[auto]"
                alt="Group"
              />
              <Img
                src="images/img_imagehere.svg"
                className="h-[48px] sm:hidden md:ml-[0] ml-[42px] w-[48px]"
                alt="IMAGEHERE"
              />
            </div>
          </header>
          <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between md:w-[100%] w-[95%]">
            <div className="flex items-center justify-start md:w-[100%] w-[49%]">
              <div className="bg-white_A700 flex items-center justify-start rounded-[30px] shadow-bs47 w-[100%]">
                <div className="h-[1156px] relative w-[100%]">
                  <Img
                    src="images/img_bitmap_1156x890.png"
                    className="h-[1156px] m-[auto] object-cover rounded-[30px] w-[100%]"
                    alt="Bitmap"
                  />
                  <div className="absolute flex md:flex-col flex-row md:gap-[56px] h-[max-content] inset-y-[0] items-start justify-between my-[auto] right-[4%] w-[79%]">
                    <div className="flex flex-col justify-start md:mt-[0] mt-[245px] md:w-[100%] w-[85%]">
                      <div className="flex flex-row items-start justify-between ml-[auto] md:w-[100%] w-[88%]">
                        <div className="flex flex-col items-center justify-start mb-[65px] w-[26%]">
                          <Text
                            className="bg-yellow_A701 font-semibold h-[28px] justify-center px-[12px] py-[2px] rounded-[5px] text-left text-white_A700 w-[94px]"
                            variant="body54"
                          >
                            Featured
                          </Text>
                          <div
                            className="bg-cover bg-no-repeat flex h-[65px] items-center justify-start p-[16px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group26.svg')",
                            }}
                          >
                            <Text
                              className="font-medium mb-[3px] text-center text-white_A700 w-[auto]"
                              variant="body44"
                            >
                              $5,849
                            </Text>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex h-[65px] items-center justify-start mt-[89px] p-[16px] w-[auto]"
                          style={{
                            backgroundImage: "url('images/img_group26.svg')",
                          }}
                        >
                          <Text
                            className="font-medium mb-[3px] text-center text-white_A700 w-[auto]"
                            variant="body44"
                          >
                            $4,370
                          </Text>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[65px] items-center justify-start mt-[219px] p-[16px] md:w-[100%] w-[auto]"
                        style={{
                          backgroundImage: "url('images/img_group26.svg')",
                        }}
                      >
                        <Text
                          className="font-medium mb-[3px] text-center text-white_A700 w-[auto]"
                          variant="body44"
                        >
                          $2,750
                        </Text>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex h-[65px] items-center justify-start md:ml-[0] ml-[344px] mt-[182px] p-[16px] md:w-[100%] w-[auto]"
                        style={{
                          backgroundImage: "url('images/img_group26.svg')",
                        }}
                      >
                        <Text
                          className="font-medium mb-[3px] text-center text-white_A700 w-[auto]"
                          variant="body44"
                        >
                          $3,972
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col md:gap-[40px] gap-[903px] items-center justify-start md:w-[100%] w-[8%]">
                      <Img
                        src="images/img_group19copy2.svg"
                        className="h-[117px] w-[auto]"
                        alt="Group19CopyTwo"
                      />
                      <Button className="bg-teal_500_90 flex h-[56px] items-center justify-center p-[15px] rounded-[15px] w-[56px]">
                        <Img
                          src="images/img_send_white_a700_56x56.svg"
                          className="h-[24px]"
                          alt="send"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[28px] items-center justify-start md:w-[100%] w-[49%]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[26px] items-center justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                    <SelectBox
                      className="border-[2px] border-solid border-teal_500 sm:flex-1 font-medium leading-[normal] pb-[11px] pl-[20px] pt-[16px] rounded-[15px] sm:text-[17px] md:text-[19px] text-[21px] text-gray_931 text-left sm:w-[100%] w-[auto]"
                      placeholderClassName="text-gray_931"
                      name="GroupTwentyOne"
                      placeholder="Any price"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_teal_500.svg"
                          className="h-[8px] mr-[20px] w-[14px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <SelectBox
                      className="bg-teal_500 sm:flex-1 font-medium leading-[normal] pb-[11px] pl-[20px] pt-[16px] rounded-[15px] sm:text-[17px] md:text-[19px] text-[21px] text-left text-white_A700 sm:w-[100%] w-[auto]"
                      placeholderClassName="text-white_A700"
                      name="GroupTwenty"
                      placeholder="Big House"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_white_a700_8x14.svg"
                          className="h-[8px] mr-[20px] w-[14px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <SelectBox
                      className="bg-teal_500 sm:flex-1 font-medium leading-[normal] pl-[20px] py-[13px] rounded-[15px] sm:text-[17px] md:text-[19px] text-[21px] text-left text-white_A700 sm:w-[100%] w-[auto]"
                      placeholderClassName="text-white_A700"
                      name="GroupNineteen"
                      placeholder="2 - 4 Beds"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_white_a700_8x14.svg"
                          className="h-[8px] mr-[20px] w-[14px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Button
                      className="border-[2px] border-solid border-teal_500 flex items-center justify-center px-[20px] py-[14px] rounded-[15px] text-center"
                      rightIcon={
                        <Img
                          src="images/img_arrowdown_teal_500.svg"
                          className="ml-[18px] text-center"
                          alt="arrow_down"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium leading-[normal] sm:text-[17px] md:text-[19px] text-[21px] text-gray_931 text-left">
                        Extra
                      </div>
                    </Button>
                    <Img
                      src="images/img_settings_teal_500.svg"
                      className="h-[19px] w-[auto]"
                      alt="settings"
                    />
                    <Text
                      className="font-medium text-left text-teal_500 w-[auto]"
                      variant="body42"
                    >
                      Filters
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                    <div className="flex md:flex-1 flex-col items-center justify-start md:mt-[0] mt-[3px] md:w-[100%] w-[8%]">
                      <div className="flex flex-row items-start justify-evenly w-[100%]">
                        <div className="bg-bluegray_429 h-[10px] mb-[4px] rounded-[1px] w-[10px]"></div>
                        <div className="bg-bluegray_429 h-[10px] mb-[4px] rounded-[1px] w-[10px]"></div>
                        <div className="flex flex-col items-center justify-start w-[39%]">
                          <div className="flex flex-row items-center justify-evenly w-[100%]">
                            <div className="bg-teal_500 h-[5px] rounded-[1px] w-[5px]"></div>
                            <div className="bg-teal_500 h-[5px] rounded-[1px] w-[63%]"></div>
                          </div>
                          <div className="flex flex-row items-center justify-evenly mt-[4px] w-[100%]">
                            <div className="bg-teal_500 h-[5px] rounded-[1px] w-[5px]"></div>
                            <div className="bg-teal_500 h-[5px] rounded-[1px] w-[63%]"></div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-evenly w-[100%]">
                        <div className="bg-bluegray_429 h-[10px] rounded-[1px] w-[10px]"></div>
                        <div className="bg-bluegray_429 h-[10px] rounded-[1px] w-[10px]"></div>
                        <div className="bg-teal_500 h-[5px] mt-[4px] rounded-[1px] w-[5px]"></div>
                        <div className="bg-teal_500 h-[5px] mt-[4px] rounded-[1px] w-[24%]"></div>
                      </div>
                    </div>
                    <Text
                      className="font-normal md:ml-[0] ml-[20px] md:mt-[0] mt-[2px] not-italic text-bluegray_429 text-left w-[auto]"
                      variant="body42"
                    >
                      <span className="md:text-[19px] sm:text-[17px] text-bluegray_429 text-[21px] font-poppins">
                        Sort by:
                      </span>
                      <span className="md:text-[19px] sm:text-[17px] text-indigo_503 text-[21px] font-poppins font-semibold">
                        {" "}
                      </span>
                      <span className="md:text-[19px] sm:text-[17px] text-teal_500 text-[21px] font-poppins font-semibold">
                        Price
                      </span>
                      <span className="md:text-[19px] sm:text-[17px] text-gray_931 text-[21px] font-poppins">
                        {" "}
                      </span>
                    </Text>
                    <Text
                      className="font-semibold md:ml-[0] ml-[457px] text-right text-teal_500 w-[auto]"
                      variant="body42"
                    >
                      <span className="md:text-[19px] sm:text-[17px] text-teal_500 text-[21px] font-poppins">
                        20
                      </span>
                      <span className="md:text-[19px] sm:text-[17px] text-indigo_503 text-[21px] font-poppins">
                        {" "}
                      </span>
                      <span className="md:text-[19px] sm:text-[17px] text-bluegray_429 text-[21px] font-poppins font-normal not-italic">
                        Homes Available
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                <List
                  className="flex-col gap-[30px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 flex flex-1 items-center justify-start my-[0] p-[29px] sm:px-[20px] rounded-[15px] shadow-bs47 w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                      <div className="bg-gray_413 flex md:flex-1 items-center justify-start p-[10px] rounded-[15px] md:w-[100%] w-[27%]">
                        <div className="flex flex-col gap-[19px] items-start justify-start mb-[52px] mt-[5px] w-[100%]">
                          <Text
                            className="bg-yellow_A701 font-semibold h-[28px] justify-center px-[12px] py-[2px] rounded-[5px] text-left text-white_A700 w-[94px]"
                            variant="body54"
                          >
                            Featured
                          </Text>
                          <div className="flex flex-row items-center justify-between w-[100%]">
                            <Button className="bg-gray_900_75 flex h-[24px] items-center justify-center p-[7px] rounded-[50%] w-[24px]">
                              <Img
                                src="images/img_group11.svg"
                                className=""
                                alt="GroupEleven"
                              />
                            </Button>
                            <Button className="bg-gray_900_90 flex h-[24px] items-center justify-center p-[7px] rounded-[50%] w-[24px]">
                              <Img
                                src="images/img_arrowright_white_a700_24x24.svg"
                                className=""
                                alt="arrowright"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[70%]">
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_931 text-left w-[auto]"
                            variant="body34"
                          >
                            1841 Hardman Road
                          </Text>
                          <Img
                            src="images/img_laptop.svg"
                            className="h-[16px] sm:ml-[0] ml-[10px] w-[auto]"
                            alt="laptop"
                          />
                          <Img
                            src="images/img_favorite_teal_500.svg"
                            className="h-[21px] sm:ml-[0] ml-[174px] w-[auto]"
                            alt="favorite"
                          />
                        </div>
                        <div className="flex flex-row gap-[10px] items-start justify-start mt-[7px] md:w-[100%] w-[60%]">
                          <Img
                            src="images/img_location_teal_500.svg"
                            className="h-[20px] w-[20px]"
                            alt="location"
                          />
                          <Text
                            className="font-medium text-left text-teal_500 w-[auto]"
                            variant="body54"
                          >
                            1841 Hardman Road, Brattleboro, Vermont
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[19px] w-[100%]">
                          <Img
                            src="images/img_alarm_bluegray_429.svg"
                            className="h-[26px] sm:mt-[0] mt-[4px] w-[auto]"
                            alt="alarm"
                          />
                          <Text
                            className="font-normal font-righteous sm:ml-[0] ml-[8px] sm:mt-[0] mt-[3px] not-italic text-bluegray_429 text-left w-[auto]"
                            variant="body41"
                          >
                            4
                          </Text>
                          <Img
                            src="images/img_lock_bluegray_429.svg"
                            className="h-[29px] sm:ml-[0] ml-[35px] sm:mt-[0] mt-[2px] w-[29px]"
                            alt="lock"
                          />
                          <Text
                            className="font-normal font-righteous sm:ml-[0] ml-[8px] sm:mt-[0] mt-[3px] not-italic text-bluegray_429 text-left w-[auto]"
                            variant="body41"
                          >
                            2
                          </Text>
                          <Img
                            src="images/img_trash_bluegray_429.svg"
                            className="h-[26px] sm:ml-[0] ml-[35px] sm:mt-[0] mt-[3px] w-[26px]"
                            alt="trash"
                          />
                          <Text
                            className="font-normal font-righteous sm:ml-[0] ml-[7px] sm:mt-[0] mt-[3px] not-italic text-bluegray_429 text-left w-[auto]"
                            variant="body41"
                          >
                            200
                          </Text>
                          <Text
                            className="font-poppins font-semibold sm:ml-[0] ml-[230px] text-right text-teal_500 w-[auto]"
                            variant="body34"
                          >
                            $5,849
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start my-[0] p-[30px] sm:px-[20px] rounded-[15px] shadow-bs47 w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                      <div className="bg-gray_413 flex md:flex-1 flex-row items-center justify-between p-[10px] rounded-[15px] md:w-[100%] w-[27%]">
                        <Button className="bg-gray_900_75 flex h-[24px] items-center justify-center my-[52px] p-[7px] rounded-[50%] w-[24px]">
                          <Img
                            src="images/img_group11.svg"
                            className=""
                            alt="GroupFour"
                          />
                        </Button>
                        <Button className="bg-gray_900_90 flex h-[24px] items-center justify-center my-[52px] p-[7px] rounded-[50%] w-[24px]">
                          <Img
                            src="images/img_arrowright_white_a700_24x24.svg"
                            className=""
                            alt="arrowright One"
                          />
                        </Button>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[70%]">
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_931 text-left w-[auto]"
                            variant="body34"
                          >
                            824 Coleman Avenue
                          </Text>
                          <Img
                            src="images/img_group5copy2.svg"
                            className="h-[16px] sm:ml-[0] ml-[10px] w-[auto]"
                            alt="Group5CopyTwo"
                          />
                          <Img
                            src="images/img_favorite_teal_500_21x24.svg"
                            className="h-[21px] sm:ml-[0] ml-[147px] w-[auto]"
                            alt="favorite One"
                          />
                        </div>
                        <div className="flex flex-row gap-[10px] items-start justify-start mt-[7px] md:w-[100%] w-[63%]">
                          <Img
                            src="images/img_location_teal_500.svg"
                            className="h-[20px] w-[20px]"
                            alt="location One"
                          />
                          <Text
                            className="font-medium text-left text-teal_500 w-[auto]"
                            variant="body54"
                          >
                            824 Coleman Avenue, Brattleboro, Vermont
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[19px] w-[100%]">
                          <Img
                            src="images/img_alarm_bluegray_429.svg"
                            className="h-[26px] sm:mt-[0] mt-[4px] w-[auto]"
                            alt="alarm One"
                          />
                          <Text
                            className="font-normal font-righteous sm:ml-[0] ml-[8px] sm:mt-[0] mt-[3px] not-italic text-bluegray_429 text-left w-[auto]"
                            variant="body41"
                          >
                            3
                          </Text>
                          <Img
                            src="images/img_lock_bluegray_429.svg"
                            className="h-[29px] sm:ml-[0] ml-[36px] sm:mt-[0] mt-[2px] w-[29px]"
                            alt="lock One"
                          />
                          <Text
                            className="font-normal font-righteous sm:ml-[0] ml-[8px] sm:mt-[0] mt-[3px] not-italic text-bluegray_429 text-left w-[auto]"
                            variant="body41"
                          >
                            2
                          </Text>
                          <Img
                            src="images/img_trash_bluegray_429.svg"
                            className="h-[26px] sm:ml-[0] ml-[35px] sm:mt-[0] mt-[3px] w-[26px]"
                            alt="trash One"
                          />
                          <Text
                            className="font-normal font-righteous sm:ml-[0] ml-[7px] sm:mt-[0] mt-[3px] not-italic text-bluegray_429 text-left w-[auto]"
                            variant="body41"
                          >
                            179
                          </Text>
                          <Text
                            className="font-poppins font-semibold sm:ml-[0] ml-[243px] text-right text-teal_500 w-[auto]"
                            variant="body34"
                          >
                            $4,370
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start my-[0] p-[30px] sm:px-[20px] rounded-[15px] shadow-bs47 w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                      <div className="bg-gray_413 flex md:flex-1 flex-row items-center justify-between p-[10px] rounded-[15px] md:w-[100%] w-[27%]">
                        <Button className="bg-gray_900_75 flex h-[24px] items-center justify-center my-[52px] p-[7px] rounded-[50%] w-[24px]">
                          <Img
                            src="images/img_group11.svg"
                            className=""
                            alt="GroupThree"
                          />
                        </Button>
                        <Button className="bg-gray_900_90 flex h-[24px] items-center justify-center my-[52px] p-[7px] rounded-[50%] w-[24px]">
                          <Img
                            src="images/img_arrowright_white_a700_24x24.svg"
                            className=""
                            alt="arrowright Two"
                          />
                        </Button>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[70%]">
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_931 text-left w-[auto]"
                            variant="body34"
                          >
                            3680 Cody Ridge Road
                          </Text>
                          <Img
                            src="images/img_group5copy2.svg"
                            className="h-[16px] sm:ml-[0] ml-[10px] sm:mt-[0] mt-[8px] w-[auto]"
                            alt="Group5CopyFour"
                          />
                          <Img
                            src="images/img_favorite_teal_500_21x24.svg"
                            className="h-[21px] sm:ml-[0] ml-[135px] sm:mt-[0] mt-[3px] w-[auto]"
                            alt="favorite Two"
                          />
                        </div>
                        <div className="flex flex-row gap-[10px] items-start justify-start mt-[4px] md:w-[100%] w-[64%]">
                          <Img
                            src="images/img_location_teal_500.svg"
                            className="h-[20px] w-[20px]"
                            alt="location Two"
                          />
                          <Text
                            className="font-medium text-left text-teal_500 w-[auto]"
                            variant="body54"
                          >
                            3680 Cody Ridge Road, Brattleboro, Vermont
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[19px] w-[100%]">
                          <Img
                            src="images/img_alarm_bluegray_429.svg"
                            className="h-[26px] sm:mt-[0] mt-[4px] w-[auto]"
                            alt="alarm Two"
                          />
                          <Text
                            className="font-normal font-righteous sm:ml-[0] ml-[8px] sm:mt-[0] mt-[3px] not-italic text-bluegray_429 text-left w-[auto]"
                            variant="body41"
                          >
                            3
                          </Text>
                          <Img
                            src="images/img_lock_bluegray_429.svg"
                            className="h-[29px] sm:ml-[0] ml-[36px] sm:mt-[0] mt-[2px] w-[29px]"
                            alt="lock Two"
                          />
                          <Text
                            className="font-normal font-righteous sm:ml-[0] ml-[8px] sm:mt-[0] mt-[3px] not-italic text-bluegray_429 text-left w-[auto]"
                            variant="body41"
                          >
                            3
                          </Text>
                          <Img
                            src="images/img_trash_bluegray_429.svg"
                            className="h-[26px] sm:ml-[0] ml-[35px] sm:mt-[0] mt-[3px] w-[26px]"
                            alt="trash Two"
                          />
                          <Text
                            className="font-normal font-righteous sm:ml-[0] ml-[7px] sm:mt-[0] mt-[3px] not-italic text-bluegray_429 text-left w-[auto]"
                            variant="body41"
                          >
                            150
                          </Text>
                          <Text
                            className="font-poppins font-semibold sm:ml-[0] ml-[243px] text-right text-teal_500 w-[auto]"
                            variant="body34"
                          >
                            $3,972
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 items-center justify-start my-[0] p-[30px] sm:px-[20px] rounded-[15px] shadow-bs47 w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                      <div className="bg-gray_413 flex md:flex-1 flex-row items-center justify-between p-[10px] rounded-[15px] md:w-[100%] w-[27%]">
                        <Button className="bg-gray_900_75 flex h-[24px] items-center justify-center my-[52px] p-[7px] rounded-[50%] w-[24px]">
                          <Img
                            src="images/img_group11.svg"
                            className=""
                            alt="GroupTwo"
                          />
                        </Button>
                        <Button className="bg-gray_900_90 flex h-[24px] items-center justify-center my-[52px] p-[7px] rounded-[50%] w-[24px]">
                          <Img
                            src="images/img_arrowright_white_a700_24x24.svg"
                            className=""
                            alt="arrowright Three"
                          />
                        </Button>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[70%]">
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_931 text-left w-[auto]"
                            variant="body34"
                          >
                            4639 Ritter Street
                          </Text>
                          <Img
                            src="images/img_group5copy2.svg"
                            className="h-[16px] sm:ml-[0] ml-[10px] w-[auto]"
                            alt="Group5CopySix"
                          />
                          <Img
                            src="images/img_favorite_teal_500_21x24.svg"
                            className="h-[21px] sm:ml-[0] ml-[205px] w-[auto]"
                            alt="favorite Three"
                          />
                        </div>
                        <div className="flex flex-row gap-[10px] items-start justify-start mt-[8px] md:w-[100%] w-[57%]">
                          <Img
                            src="images/img_location_teal_500.svg"
                            className="h-[20px] w-[20px]"
                            alt="location Three"
                          />
                          <Text
                            className="font-medium text-left text-teal_500 w-[auto]"
                            variant="body54"
                          >
                            4639 Ritter Street, Brattleboro, Vermont
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[12px] w-[100%]">
                          <Img
                            src="images/img_alarm_bluegray_429.svg"
                            className="h-[26px] sm:mt-[0] mt-[11px] w-[auto]"
                            alt="alarm Three"
                          />
                          <Text
                            className="font-normal font-righteous sm:ml-[0] ml-[8px] sm:mt-[0] mt-[7px] not-italic text-bluegray_429 text-left w-[auto]"
                            variant="body41"
                          >
                            2
                          </Text>
                          <Img
                            src="images/img_lock_bluegray_429.svg"
                            className="h-[29px] sm:ml-[0] ml-[36px] sm:mt-[0] mt-[9px] w-[29px]"
                            alt="lock Three"
                          />
                          <Text
                            className="font-normal font-righteous sm:ml-[0] ml-[8px] sm:mt-[0] mt-[7px] not-italic text-bluegray_429 text-left w-[auto]"
                            variant="body41"
                          >
                            2
                          </Text>
                          <Img
                            src="images/img_trash_bluegray_429.svg"
                            className="h-[26px] sm:ml-[0] ml-[35px] sm:mt-[0] mt-[10px] w-[26px]"
                            alt="trash Three"
                          />
                          <Text
                            className="font-normal font-righteous sm:ml-[0] ml-[7px] sm:mt-[0] mt-[7px] not-italic text-bluegray_429 text-left w-[auto]"
                            variant="body41"
                          >
                            140
                          </Text>
                          <Text
                            className="font-poppins font-semibold sm:ml-[0] ml-[240px] text-right text-teal_500 w-[auto]"
                            variant="body34"
                          >
                            $2,750
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <Button
                  className="bg-teal_500 flex items-center justify-center pl-[22px] pr-[21px] py-[13px] rounded-[15px] sm:px-[20px] text-center"
                  rightIcon={
                    <Img
                      src="images/img_arrowright_white_a700_22x26.svg"
                      className="ml-[8px] text-center"
                      alt="arrow_right"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-medium leading-[normal] sm:text-[20px] md:text-[22px] text-[24px] text-left text-white_A700">
                    Next Page
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDashboardPage;
