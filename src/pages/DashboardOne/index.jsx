import React from "react";

import { Img, Text, Line, Button, CheckBox, SelectBox, List } from "components";
import { useNavigate } from "react-router-dom";

const DashboardOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black_901 flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex flex-col items-start justify-end w-[100%]">
          <header className="bg-black_901 flex flex-col items-center justify-center md:px-[20px] w-[100%]">
            <div className="bg-gray_934 border-b-[1px] border-bluegray_926 border-solid flex flex-1 md:flex-col flex-row md:gap-[40px] gap-[526px] items-center justify-center max-w-[1440px] sm:px-[20px] px-[40px] py-[12px] w-[100%]">
              <div className="flex sm:flex-1 flex-row gap-[40px] h-[25px] md:h-[auto] items-center justify-start sm:w-[100%] w-[517px]">
                <div className="flex flex-row gap-[7.84px] h-[25px] md:h-[auto] items-center justify-center w-[81px]">
                  <Img
                    src="images/img_arrowleft_deep_purple_a202.svg"
                    className="common-pointer h-[23px] w-[19px]"
                    onClick={() => navigate(-1)}
                    alt="arrowleft"
                  />
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    variant="body46"
                  >
                    Morry
                  </Text>
                </div>
                <ul className="flex sm:flex-col flex-row gap-[24px] sm:hidden items-center justify-center w-[auto] common-row-list">
                  <li className="mb-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      className="cursor-pointer font-normal not-italic text-[14px] text-left text-white_A700"
                      href="javascript:"
                    >
                      Live Markets
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                    <a
                      className="cursor-pointer font-normal not-italic text-[14px] text-bluegray_408 text-left hover:text-white_A700"
                      href="javascript:"
                    >
                      Markets
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                    <a
                      className="cursor-pointer font-normal not-italic text-[14px] text-gray_511 text-left hover:text-white_A700"
                      href="javascript:"
                    >
                      Resource
                    </a>
                  </li>
                  <li className="mt-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
                    <a
                      className="cursor-pointer font-normal not-italic text-[14px] text-bluegray_408 text-left hover:text-white_A700"
                      href="javascript:"
                    >
                      Exchange
                    </a>
                  </li>
                  <li className="sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
                    <a
                      className="cursor-pointer font-normal not-italic text-[14px] text-bluegray_408 text-left hover:text-white_A700"
                      href="javascript:"
                    >
                      More
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 flex-row gap-[32px] items-center justify-start w-[100%]">
                <div className="flex flex-1 flex-col gap-[4px] items-start justify-center w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_511 text-left w-[auto]"
                    variant="body59"
                  >
                    Balance
                  </Text>
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body50"
                  >
                    $364.0387,73
                  </Text>
                </div>
                <Line className="bg-gray_500_9e h-[32px] w-[1px]" />
                <Img
                  src="images/img_profile_bluegray_101.svg"
                  className="h-[40px] max-h-[40px] w-[auto]"
                  alt="Profile"
                />
              </div>
            </div>
            <div className="bg-gray_934 border-b-[1px] border-bluegray_926 border-solid flex flex-1 md:flex-col flex-row gap-[281px] md:gap-[40px] items-center justify-center max-w-[1440px] sm:px-[20px] px-[40px] py-[13px] w-[100%]">
              <div className="flex flex-1 md:flex-col flex-row gap-[20px] items-center justify-center max-w-[754px] w-[100%]">
                <div className="flex flex-row gap-[12px] items-center justify-center w-[109px]">
                  <Button className="bg-orange_401 flex h-[24px] items-center justify-center p-[4px] rounded-[50%] w-[24px]">
                    <Img
                      src="images/img_call_white_a700.svg"
                      className=""
                      alt="call"
                    />
                  </Button>
                  <div className="flex flex-row items-center justify-center w-[73px]">
                    <Text
                      className="flex-1 font-medium text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      Bitcoin
                    </Text>
                    <Img
                      src="images/img_arrowdown_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <Line className="bg-gray_500_9e md:h-[1px] h-[26px] md:w-[100%] w-[1px]" />
                <div className="flex md:flex-1 md:flex-col flex-row gap-[24px] items-center justify-center md:w-[100%] w-[auto]">
                  <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
                    <Img
                      src="images/img_plus_gray_511.svg"
                      className="h-[20px] w-[20px]"
                      alt="plus"
                    />
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body59"
                    >
                      Compare
                    </Text>
                  </div>
                  <CheckBox
                    className="font-normal leading-[normal] not-italic text-[14px] text-gray_511 text-left"
                    inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                    label="Indicator"
                    name="Indicator"
                  ></CheckBox>
                  <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
                    <Img
                      src="images/img_refresh_gray_511.svg"
                      className="h-[20px] w-[20px]"
                      alt="refresh"
                    />
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body59"
                    >
                      Overview
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
                    <Img
                      src="images/img_arrowleft_gray_511.svg"
                      className="h-[20px] w-[20px]"
                      alt="arrowleft One"
                    />
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body59"
                    >
                      Replay
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
                    <Img
                      src="images/img_clock_gray_511.svg"
                      className="h-[20px] w-[20px]"
                      alt="clock"
                    />
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body59"
                    >
                      Tutorial
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
                    <Img
                      src="images/img_refresh_gray_511_20x20.svg"
                      className="h-[20px] w-[20px]"
                      alt="refresh One"
                    />
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body59"
                    >
                      Refresh
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[24px] items-center justify-start w-[325px]">
                <div className="flex flex-row h-[100%] items-center justify-center w-[100%]">
                  <Text
                    className="flex-1 font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body59"
                  >
                    EN/USD
                  </Text>
                  <Img
                    src="images/img_arrowdown_24x24.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowdown One"
                  />
                </div>
                <div className="bg-black_902 flex flex-row items-start justify-start rounded-[8px] w-[132px]">
                  <Button className="bg-deep_purple_A203 cursor-pointer font-medium leading-[normal] px-[20px] py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 w-[100%]">
                    Trade
                  </Button>
                  <Button className="bg-black_902 cursor-pointer font-normal leading-[normal] not-italic px-[16px] py-[8px] rounded-[8px] text-[12px] text-center text-gray_511 w-[100%]">
                    Pool
                  </Button>
                </div>
                <Img
                  src="images/img_offer_white_a700.svg"
                  className="h-[20px] w-[64px]"
                  alt="offer"
                />
              </div>
            </div>
          </header>
          <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
            <div className="bg-gray_934 border-bluegray_926 border-l-[1px] border-solid flex sm:flex-1 flex-col gap-[32px] items-center justify-center pb-[20px] pt-[32px] md:px-[20px] px-[40px] sm:w-[100%] w-[386px]">
              <div className="md:h-[172px] h-[461px] relative w-[100%]">
                <div className="flex flex-col gap-[329px] md:gap-[40px] h-[100%] items-center justify-start m-[auto] w-[100%]">
                  <div className="flex flex-col gap-[34px] items-start justify-start w-[306px]">
                    <SelectBox
                      className="font-medium leading-[normal] text-[16px] text-left text-white_A700 w-[100%]"
                      placeholderClassName="text-white_A700"
                      name="Title"
                      placeholder="Open New Position"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <div className="flex items-center justify-start w-[100%]">
                      <div className="flex flex-col gap-[33px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[37px] items-center justify-start w-[100%]">
                          <div className="flex flex-1 flex-row gap-[16px] items-center justify-start w-[100%]">
                            <Button className="bg-orange_401 flex h-[35px] items-center justify-center p-[5px] rounded-[17px] w-[35px]">
                              <Img
                                src="images/img_call_white_a700.svg"
                                className=""
                                alt="call One"
                              />
                            </Button>
                            <div className="flex flex-col gap-[4px] items-start justify-center w-[auto]">
                              <Text
                                className="font-medium text-left text-white_A700 w-[auto]"
                                variant="body50"
                              >
                                Bitcoin/USD
                              </Text>
                              <div className="flex flex-row gap-[8px] items-center justify-center w-[100%]">
                                <Text
                                  className="font-normal not-italic text-gray_511 text-left w-[auto]"
                                  variant="body67"
                                >
                                  Today up to
                                </Text>
                                <Text
                                  className="font-normal not-italic text-left text-teal_303 w-[auto]"
                                  variant="body67"
                                >
                                  + 5.34%
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_chart_teal_303.png"
                            className="h-[31px] md:h-[auto] max-h-[31px] object-cover w-[auto]"
                            alt="Chart"
                          />
                        </div>
                        <Line className="bg-bluegray_926 h-[1px] w-[92%]" />
                      </div>
                    </div>
                  </div>
                  <Line className="bg-bluegray_926 h-[1px] w-[92%]" />
                </div>
                <div className="absolute bottom-[7%] flex flex-col gap-[24px] inset-x-[0] items-center justify-start mx-[auto] w-[306px]">
                  <div className="flex items-center justify-start w-[100%]">
                    <div className="bg-bluegray_926 flex flex-row gap-[8px] items-center justify-end pl-[16px] sm:pr-[20px] md:pr-[40px] pr-[64px] py-[12px] rounded-[8px] w-[306px]">
                      <Button className="bg-deep_purple_A203 cursor-pointer font-medium leading-[normal] px-[20px] py-[12px] rounded-[8px] text-[12px] text-center text-white_A700 w-[157px]">
                        Buy
                      </Button>
                      <Text
                        className="font-medium text-gray_511 text-left w-[auto]"
                        variant="body67"
                      >
                        Sell
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[18px] items-start justify-start w-[100%]">
                    <List
                      className="flex-col gap-[18px] grid items-center w-[100%]"
                      orientation="vertical"
                    >
                      <div className="bg-bluegray_926 flex flex-1 flex-col gap-[6px] items-start justify-center pl-[12px] pr-[7px] py-[10px] rounded-[8px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_511 text-left w-[auto]"
                          variant="body67"
                        >
                          Ammount
                        </Text>
                        <div className="flex flex-row items-center justify-between w-[263px]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[100%]">
                            <Img
                              src="images/img_volume_gray_511.svg"
                              className="h-[20px] w-[20px]"
                              alt="volume"
                            />
                            <Text
                              className="flex-1 font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body59"
                            >
                              10
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-center w-[50px]">
                            <Text
                              className="flex-1 font-normal not-italic text-gray_511 text-left w-[auto]"
                              variant="body59"
                            >
                              BTC
                            </Text>
                            <Img
                              src="images/img_arrowdown_gray_511.svg"
                              className="h-[20px] w-[20px]"
                              alt="arrowdown Two"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-bluegray_926 flex flex-1 flex-col gap-[6px] items-start justify-center pl-[12px] pr-[7px] py-[10px] rounded-[8px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_511 text-left w-[auto]"
                          variant="body67"
                        >
                          Price
                        </Text>
                        <div className="flex flex-row gap-[115px] items-center justify-between w-[auto]">
                          <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                            <Img
                              src="images/img_volume_gray_511.svg"
                              className="h-[20px] w-[20px]"
                              alt="volume One"
                            />
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body59"
                            >
                              210042.00
                            </Text>
                          </div>
                          <div className="flex flex-row items-center justify-center w-[50px]">
                            <Text
                              className="flex-1 font-normal not-italic text-gray_511 text-left w-[auto]"
                              variant="body59"
                            >
                              USD
                            </Text>
                            <Img
                              src="images/img_arrowdown_gray_511.svg"
                              className="h-[20px] w-[20px]"
                              alt="arrowdown Three"
                            />
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="bg-bluegray_926 flex flex-row items-center justify-center p-[8px] rounded-[6px] w-[100%]">
                      <Text
                        className="flex-1 font-normal not-italic text-center text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        5x
                      </Text>
                      <Button className="bg-bluegray_803 cursor-pointer flex-1 font-normal leading-[normal] not-italic px-[8px] py-[6px] rounded-[4px] text-[14px] text-center text-white_A700 w-[100%]">
                        10x
                      </Button>
                      <Text
                        className="flex-1 font-normal not-italic text-center text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        15x
                      </Text>
                      <Text
                        className="flex-1 font-normal not-italic text-center text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        20x
                      </Text>
                      <Text
                        className="flex-1 font-normal not-italic text-center text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        25x
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start w-[306px]">
                <SelectBox
                  className="font-medium leading-[normal] text-[16px] text-left text-white_A700 w-[100%]"
                  placeholderClassName="text-white_A700"
                  name="Tile"
                  placeholder="Buy Summary"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <Text
                        className="flex-1 font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        Liquidation Price
                      </Text>
                      <Text
                        className="font-normal not-italic text-right text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        $15.00
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[14px] w-[100%]">
                      <Text
                        className="flex-1 font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        Impact
                      </Text>
                      <Text
                        className="font-normal not-italic text-right text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        $5.00
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[14px] w-[100%]">
                      <Text
                        className="flex-1 font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        Spread
                      </Text>
                      <Text
                        className="font-normal not-italic text-right text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        0,5 %
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[15px] w-[100%]">
                      <Text
                        className="flex-1 font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        Open Fee
                      </Text>
                      <Text
                        className="font-normal not-italic text-pink_600 text-right w-[auto]"
                        variant="body59"
                      >
                        $1,05{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[15px] w-[100%]">
                      <Text
                        className="flex-1 font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        Price Impact
                      </Text>
                      <Text
                        className="font-normal not-italic text-right text-teal_303 w-[auto]"
                        variant="body59"
                      >
                        0,5 %
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[15px] w-[100%]">
                      <Text
                        className="flex-1 font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        Ammount
                      </Text>
                      <Text
                        className="font-normal h-[16px] not-italic text-right text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        10
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[15px] w-[100%]">
                      <Text
                        className="flex-1 font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-normal not-italic text-right text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        $210042.00
                      </Text>
                    </div>
                    <Line className="bg-bluegray_926 h-[1px] mt-[15px] w-[100%]" />
                    <div className="flex flex-row items-center justify-between mt-[14px] w-[100%]">
                      <Text
                        className="flex-1 font-medium text-left text-white_A700 w-[auto]"
                        variant="body50"
                      >
                        Total
                      </Text>
                      <Text
                        className="font-medium text-right text-white_A700 w-[auto]"
                        variant="body50"
                      >
                        $23.432,00
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-[100%]">
                <Button className="bg-deep_purple_A203 cursor-pointer font-medium leading-[normal] px-[8px] py-[14px] rounded-[8px] text-[14px] text-center text-white_A700 w-[100%]">
                  Buy BTC
                </Button>
              </div>
              <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                <Line className="bg-bluegray_926 h-[1px] w-[100%]" />
                <SelectBox
                  className="font-normal leading-[normal] not-italic text-[14px] text-gray_511 text-left w-[100%]"
                  placeholderClassName="text-gray_511"
                  name="Text"
                  placeholder="Advanced"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_511_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
              <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                <SelectBox
                  className="font-normal leading-[normal] not-italic text-[16px] text-gray_511 text-left w-[100%]"
                  placeholderClassName="text-gray_511"
                  name="Title One"
                  placeholder="Order Position"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_511_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <SelectBox
                  className="font-normal leading-[normal] not-italic text-[16px] text-gray_511 text-left w-[100%]"
                  placeholderClassName="text-gray_511"
                  name="Title Two"
                  placeholder="Exchange"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_511_24x24.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start max-w-[1234px] overflow-auto md:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[8px] items-start justify-center w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start max-w-[1271px] w-[100%]">
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:w-[100%] w-[53%]"
                    orientation="horizontal"
                  >
                    <div className="bg-bluegray_926 border-b-[1px] border-deep_purple_A203 border-solid flex flex-row gap-[40px] items-center justify-start sm:px-[20px] px-[40px] py-[18px] w-[auto]">
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[93px]">
                        <Img
                          src="images/img_bookmark_indigo_a202.svg"
                          className="h-[24px] w-[24px]"
                          alt="bookmark"
                        />
                        <Text
                          className="flex-1 font-medium text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          ETH/USD
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          75%
                        </Text>
                        <Img
                          src="images/img_grid_white_a700.svg"
                          className="h-[16px] w-[16px]"
                          alt="grid"
                        />
                      </div>
                    </div>
                    <div className="border-b-[1px] border-bluegray_926 border-r-[1px] border-solid flex flex-row gap-[16px] items-center justify-start px-[17px] py-[18px] w-[auto]">
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[88px]">
                        <Img
                          src="images/img_solana.png"
                          className="h-[24px] md:h-[auto] object-cover w-[24px]"
                          alt="Solana"
                        />
                        <Text
                          className="flex-1 font-medium text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          SOl/USD
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          25%
                        </Text>
                        <Img
                          src="images/img_grid_white_a700.svg"
                          className="h-[16px] w-[16px]"
                          alt="grid One"
                        />
                      </div>
                    </div>
                    <div className="border-b-[1px] border-bluegray_926 border-r-[1px] border-solid flex flex-row gap-[16px] items-center justify-start px-[17px] py-[18px] w-[auto]">
                      <div className="flex flex-row gap-[6px] items-center justify-start w-[104px]">
                        <Img
                          src="images/img_eye_bluegray_927.svg"
                          className="h-[24px] w-[24px]"
                          alt="eye"
                        />
                        <Text
                          className="flex-1 font-medium text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          LUNA/USD
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 w-[auto]"
                          variant="body59"
                        >
                          15%
                        </Text>
                        <Img
                          src="images/img_grid_white_a700.svg"
                          className="h-[16px] w-[16px]"
                          alt="grid Two"
                        />
                      </div>
                    </div>
                  </List>
                  <div className="border-b-[1px] border-bluegray_926 border-r-[1px] border-solid flex flex-row gap-[16px] items-center justify-start px-[17px] py-[18px] w-[auto]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <Button className="bg-teal_404 flex h-[24px] items-center justify-center p-[5px] w-[24px]">
                        <Img
                          src="images/img_eye_white_a700_24x24.svg"
                          className=""
                          alt="eye One"
                        />
                      </Button>
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        USDT/USD
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        68%
                      </Text>
                      <Img
                        src="images/img_grid_white_a700.svg"
                        className="h-[16px] w-[16px]"
                        alt="grid Three"
                      />
                    </div>
                  </div>
                  <div className="border-b-[1px] border-bluegray_926 border-r-[1px] border-solid flex flex-row gap-[16px] items-center justify-start px-[17px] py-[18px] w-[auto]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <Img
                        src="images/img_uniswap.png"
                        className="h-[24px] md:h-[auto] object-cover w-[24px]"
                        alt="uniswap"
                      />
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        UNI/USD
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        45%
                      </Text>
                      <Img
                        src="images/img_grid_white_a700.svg"
                        className="h-[16px] w-[16px]"
                        alt="grid Four"
                      />
                    </div>
                  </div>
                  <div className="border-b-[1px] border-bluegray_926 border-r-[1px] border-solid flex flex-row gap-[16px] items-center justify-start px-[17px] py-[18px] w-[auto]">
                    <div className="flex flex-row gap-[6px] items-center justify-start w-[auto]">
                      <Button className="bg-lime_700 flex h-[24px] items-center justify-center p-[5px] w-[24px]">
                        <Img
                          src="images/img_save_white_a700_24x24.svg"
                          className=""
                          alt="save"
                        />
                      </Button>
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        DOGE/USD
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        45%
                      </Text>
                      <Img
                        src="images/img_grid_white_a700.svg"
                        className="h-[16px] w-[16px]"
                        alt="grid Five"
                      />
                    </div>
                  </div>
                </div>
                <div className="border-b-[1px] border-bluegray_926 border-solid flex md:flex-col flex-row md:gap-[20px] items-center justify-start sm:px-[20px] px-[40px] py-[20px] w-[100%]">
                  <div className="flex flex-1 flex-col gap-[8px] items-start justify-center w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body59"
                    >
                      Price
                    </Text>
                    <div className="flex flex-row items-center justify-center w-[auto]">
                      <Text
                        className="font-medium text-left text-teal_303 w-[auto]"
                        variant="body50"
                      >
                        43,386.86
                      </Text>
                      <Img
                        src="images/img_share.svg"
                        className="h-[20px] w-[20px]"
                        alt="share"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-[8px] items-start justify-center w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body59"
                    >
                      Volume
                    </Text>
                    <div className="flex flex-row items-center justify-center w-[auto]">
                      <Text
                        className="font-medium text-left text-teal_303 w-[auto]"
                        variant="body50"
                      >
                        24,723.34
                      </Text>
                      <Img
                        src="images/img_share_teal_303.svg"
                        className="h-[20px] w-[20px]"
                        alt="share One"
                      />
                    </div>
                  </div>
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 grid-cols-3 md:w-[100%] w-[60%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[8px] items-start justify-center w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        24h Change
                      </Text>
                      <div className="flex flex-row items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-left text-teal_303 w-[auto]"
                          variant="body50"
                        >
                          43,386.86
                        </Text>
                        <Img
                          src="images/img_share.svg"
                          className="h-[20px] w-[20px]"
                          alt="share Two"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start justify-center w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        24h Low
                      </Text>
                      <div className="flex flex-row items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-left text-pink_600 w-[auto]"
                          variant="body50"
                        >
                          24,675.81
                        </Text>
                        <Img
                          src="images/img_crop.svg"
                          className="h-[20px] w-[20px]"
                          alt="crop"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[8px] items-start justify-center w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        24h High
                      </Text>
                      <div className="flex flex-row items-center justify-center w-[auto]">
                        <Text
                          className="font-medium text-left text-teal_303 w-[auto]"
                          variant="body50"
                        >
                          56,123.32
                        </Text>
                        <Img
                          src="images/img_share.svg"
                          className="h-[20px] w-[20px]"
                          alt="share Three"
                        />
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col gap-[32px] items-start justify-start sm:px-[20px] px-[40px] py-[16px] w-[100%]">
                <div className="flex md:flex-col flex-row gap-[32px] items-center justify-start w-[100%]">
                  <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                    <Button className="bg-orange_401 flex h-[24px] items-center justify-center p-[4px] rounded-[50%] w-[24px]">
                      <Img
                        src="images/img_call_white_a700.svg"
                        className=""
                        alt="call Two"
                      />
                    </Button>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body47"
                    >
                      Bitcoin BTC/USDT
                    </Text>
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-[16px] items-center justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body59"
                    >
                      <span className="text-gray_511 text-[14px] font-inter">
                        O{" "}
                      </span>
                      <span className="text-teal_303 text-[14px] font-inter">
                        38573.00
                      </span>
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body59"
                    >
                      <span className="text-gray_511 text-[14px] font-inter">
                        H{" "}
                      </span>
                      <span className="text-teal_303 text-[14px] font-inter">
                        38643.00
                      </span>
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body59"
                    >
                      <span className="text-gray_511 text-[14px] font-inter">
                        L{" "}
                      </span>
                      <span className="text-teal_303 text-[14px] font-inter">
                        38435.00
                      </span>
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body59"
                    >
                      <span className="text-gray_511 text-[14px] font-inter">
                        C{" "}
                      </span>
                      <span className="text-teal_303 text-[14px] font-inter">
                        38274.00 + 476.00 (+2.76%)
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                    <div className="flex flex-1 flex-row gap-[24px] items-center justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        Time
                      </Text>
                      <div className="flex flex-row gap-[16px] items-center justify-center w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_511 text-left w-[auto]"
                          variant="body59"
                        >
                          5m
                        </Text>
                        <Button className="bg-bluegray_926 cursor-pointer font-normal leading-[normal] min-w-[46px] not-italic px-[8px] py-[6px] rounded-[6px] text-[14px] text-center text-white_A700 w-[auto]">
                          20m
                        </Button>
                        <Text
                          className="font-normal not-italic text-gray_511 text-left w-[auto]"
                          variant="body59"
                        >
                          35m
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_511 text-left w-[auto]"
                          variant="body59"
                        >
                          50m
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_511 text-left w-[auto]"
                          variant="body59"
                        >
                          1h
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_511 text-left w-[auto]"
                          variant="body59"
                        >
                          All
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_icon.svg"
                      className="h-[20px] max-h-[20px] w-[auto] sm:w-[auto] md:w-[auto]"
                      alt="Icon"
                    />
                  </div>
                  <div className="flex flex-col gap-[17px] items-center justify-end pt-[7px] w-[100%]">
                    <div className="md:h-[428px] h-[429px] sm:h-[461px] relative w-[100%]">
                      <div className="absolute md:h-[392px] h-[420px] inset-y-[0] left-[0] my-[auto] md:w-[100%] w-[93%]">
                        <Img
                          src="images/img_line_392x864.svg"
                          className="absolute h-[392px] inset-x-[0] mx-[auto] top-[0] w-[864px]"
                          alt="Line"
                        />
                        <Img
                          src="images/img_chart_teal_303_56x914.svg"
                          className="absolute bottom-[0] h-[56px] inset-x-[0] mx-[auto] w-[914px]"
                          alt="Chart One"
                        />
                      </div>
                      <div className="absolute h-[428px] sm:h-[461px] inset-[0] m-[auto] md:w-[100%] w-[992px]">
                        <div className="flex flex-col gap-[32px] h-[100%] items-center justify-start m-[auto] w-[100%]">
                          <div className="h-[330px] relative w-[100%]">
                            <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
                              <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                                <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-end max-w-[992px] w-[100%]">
                                  <Line className="bg-gradient4  h-[1px] w-[92%]" />
                                  <Text
                                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                    variant="body59"
                                  >
                                    900.000
                                  </Text>
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-end max-w-[992px] w-[100%]">
                                  <Line className="bg-gradient4  h-[1px] w-[92%]" />
                                  <Text
                                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                    variant="body59"
                                  >
                                    800.000
                                  </Text>
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-end max-w-[991px] w-[100%]">
                                  <Line className="bg-gradient4  h-[1px] w-[93%]" />
                                  <Text
                                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                    variant="body59"
                                  >
                                    700.000
                                  </Text>
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-end max-w-[992px] w-[100%]">
                                  <Line className="bg-gradient4  h-[1px] w-[92%]" />
                                  <Text
                                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                    variant="body59"
                                  >
                                    600.000
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-[4px] items-end justify-center max-w-[991px] w-[100%]">
                                  <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start max-w-[984px] w-[100%]">
                                    <Line className="bg-gradient4  h-[1px] w-[93%]" />
                                    <Text
                                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                      variant="body59"
                                    >
                                      500.000
                                    </Text>
                                  </div>
                                  <Text
                                    className="font-normal not-italic text-right text-teal_303 w-[auto]"
                                    variant="body67"
                                  >
                                    05 : 12
                                  </Text>
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-end max-w-[992px] w-[100%]">
                                  <Line className="bg-gradient4  h-[1px] w-[92%]" />
                                  <Text
                                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                    variant="body59"
                                  >
                                    400.000
                                  </Text>
                                </div>
                                <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-end max-w-[992px] w-[100%]">
                                  <Line className="bg-gradient4  h-[1px] w-[92%]" />
                                  <Text
                                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                    variant="body59"
                                  >
                                    300.000
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Img
                              src="images/img_candle.svg"
                              className="absolute bottom-[4%] h-[222px] left-[0] w-[auto]"
                              alt="Candle"
                            />
                          </div>
                          <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                            <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-end w-[100%]">
                              <Line className="bg-gradient4  h-[1px] w-[92%]" />
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body59"
                              >
                                200.000
                              </Text>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-[16px] items-end justify-center w-[100%]">
                              <Line className="bg-gradient4  h-[1px] w-[92%]" />
                              <Text
                                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                                variant="body59"
                              >
                                100.000
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_positions.svg"
                          className="absolute h-[416px] inset-y-[0] left-[0] my-[auto] w-[auto]"
                          alt="Positions"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row sm:gap-[54px] items-center justify-between max-w-[981px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        Jan{" "}
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        15
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        Mar{" "}
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        18
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        Apr
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        10
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        Mey{" "}
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        17
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        Jun{" "}
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        21{" "}
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        Jul{" "}
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        15
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        Aug{" "}
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_511 text-left w-[auto]"
                        variant="body59"
                      >
                        18
                      </Text>
                      <Img
                        src="images/img_settings_gray_511.svg"
                        className="h-[20px] w-[20px]"
                        alt="settings"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-start justify-start pb-[32px] pt-[40px] sm:px-[20px] px-[40px] w-[100%]">
                <div className="flex flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <Text
                    className="font-medium text-left text-white_A700 w-[auto]"
                    variant="body47"
                  >
                    Trade Activity
                  </Text>
                  <Button
                    className="border-[1px] border-gray_511 border-solid flex items-center justify-center px-[12px] py-[6px] rounded-[4px] text-center"
                    rightIcon={
                      <Img
                        src="images/img_arrowdown_gray_511_24x24.svg"
                        className="ml-[8px] text-center"
                        alt="Vector"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-normal leading-[normal] not-italic text-[14px] text-gray_511 text-left">
                      Last Activity
                    </div>
                  </Button>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[56px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 h-[204px] justify-start w-[100%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col gap-[16px] h-[100%] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body50"
                    >
                      Currency
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      USD/BTC
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      USD/ETH
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      BTC/USD
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      ETH/APPL
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      ETH/ETH
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[16px] h-[100%] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body50"
                    >
                      Enter at
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      $ 12.675
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      $ 11.345
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      $ 16.235
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      $ 14.146
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      $ 10.347
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[16px] h-[100%] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body50"
                    >
                      Expired
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      19:24:53
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      20:22:51
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      21:15:30
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      22:46:12
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      23:23:35
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[16px] h-[100%] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body50"
                    >
                      Leverage
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      25x
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      30x
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      5x
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      35x
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      20x
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[16px] h-[100%] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body50"
                    >
                      ROA
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-teal_303 w-[auto]"
                      variant="body59"
                    >
                      25.4%
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-teal_303 w-[auto]"
                      variant="body59"
                    >
                      54.1%
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-teal_303 w-[auto]"
                      variant="body59"
                    >
                      20.6%
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-teal_303 w-[auto]"
                      variant="body59"
                    >
                      15.7%
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-teal_303 w-[auto]"
                      variant="body59"
                    >
                      23.9%
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-col gap-[16px] h-[100%] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_511 text-left w-[auto]"
                      variant="body50"
                    >
                      Value
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      $ 13.376
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      $ 12.135
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      $ 18.578
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      $ 15.734
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body59"
                    >
                      $ 11.476
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOnePage;
