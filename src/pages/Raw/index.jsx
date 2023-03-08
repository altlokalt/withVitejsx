import React from "react";

import {
  Text,
  Img,
  Button,
  List,
  Line,
  PagerIndicator,
  SelectBox,
} from "components";

const RawPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="flex items-center justify-center md:px-[20px] w-[100%]">
            <div className="bg-white_A700 flex items-center justify-center w-[100%]">
              <div className="bg-white_A700 border-b-[1px] border-black_905 border-solid flex items-center justify-center w-[100%]">
                <div className="flex flex-col items-center justify-center w-[100%]">
                  <div className="h-[36px] relative w-[100%]">
                    <div className="flex flex-row gap-[22px] h-[100%] items-center justify-center ml-[auto] mr-[40px] my-[auto] sm:pl-[20px] pl-[22px] py-[8px] w-[auto]">
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_62 text-left w-[auto]"
                          variant="body69"
                        >
                          <span className="text-gray_62 text-[11px] font-inter">
                            Become a{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-white_A700 text-[11px] font-inter font-semibold underline"
                          >
                            Zola vendor
                          </a>
                        </Text>
                      </div>
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_62 text-left w-[auto]"
                          variant="body69"
                        >
                          <span className="text-gray_62 text-[11px] font-inter">
                            Shop{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-white_A700 text-[11px] font-inter font-semibold underline"
                          >
                            Zola Home
                          </a>
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bg-teal_902 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[10px] w-[100%]">
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-semibold text-center text-cyan_A100 w-[auto]"
                          variant="body61"
                        >
                          FREE SHIPPING EVERY DAY details
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start p-[16px] w-[100%]">
                      <ul className="flex md:flex-1 sm:flex-col flex-row md:hidden items-start justify-start md:ml-[0] ml-[24px] sm:pr-[20px] pr-[380px] md:pr-[40px] md:w-[100%] w-[45%] common-row-list">
                        <li className="sm:w-[100%] sm:my-[10px] w-[31%]">
                          <div className="flex flex-row gap-[0.97px] items-center justify-start">
                            <a
                              className="capitalize cursor-pointer font-semibold text-[13px] text-black_905 text-center w-[auto]"
                              href="javascript:"
                            >
                              Plan your wedding
                            </a>
                            <Img
                              src="images/img_arrowdown_black_905.svg"
                              className="h-[20px] w-[20px]"
                              alt="arrowdown"
                            />
                          </div>
                        </li>
                        <li className="ml-[32px] sm:w-[100%] sm:my-[10px] w-[38%]">
                          <div className="flex flex-row gap-[4.59px] items-center justify-start">
                            <a
                              className="capitalize cursor-pointer font-semibold text-[13px] text-black_905 text-left w-[auto]"
                              href="javascript:"
                            >
                              Community and advice
                            </a>
                            <Img
                              src="images/img_arrowdown_black_905.svg"
                              className="h-[20px] w-[20px]"
                              alt="arrowdown One"
                            />
                          </div>
                        </li>
                        <li className="mt-[3px] mb-[1px] ml-[32px] sm:w-[100%] sm:my-[10px] w-[auto]">
                          <a
                            className="cursor-pointer font-semibold text-[13px] text-black_905 text-left"
                            href="javascript:"
                          >
                            Find a couple
                          </a>
                        </li>
                      </ul>
                      <Img
                        src="images/img_svg_black_905.svg"
                        className="h-[24px] w-[auto]"
                        alt="svg"
                      />
                      <div className="flex md:flex-1 flex-row items-center justify-center sm:pl-[20px] md:pl-[40px] pl-[541px] md:w-[100%] w-[45%]">
                        <Img
                          src="images/img_search_white_a700_44x44.svg"
                          className="h-[44px] rounded-[50%] w-[44px]"
                          alt="search"
                        />
                        <Button className="bg-white_A700 flex h-[44px] items-center justify-center p-[13px] rounded-[50%] w-[44px]">
                          <Img
                            src="images/img_vector_black_905.svg"
                            className="h-[16px]"
                            alt="Vector"
                          />
                        </Button>
                        <Button className="bg-white_A700 border-[1px] border-black_905 border-solid cursor-pointer font-semibold min-w-[78px] ml-[8px] pb-[11.42px] pl-[17px] pr-[17.81px] pt-[9.58px] rounded-[22px] text-[15px] text-black_905 text-center w-[auto]">
                          Log in
                        </Button>
                        <Button className="bg-black_905 cursor-pointer font-semibold min-w-[117px] ml-[8px] pb-[11.42px] pl-[17px] pr-[17.11px] pt-[9.58px] rounded-[22px] text-[15px] text-center text-white_A700 w-[auto]">
                          Get started
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="border-black_905 border-solid border-t-[1px] flex items-center justify-end p-[16px] w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start sm:px-[20px] md:px-[40px] px-[681px] md:w-[100%] w-[96%]">
                      <Text
                        className="font-normal sm:mt-[0] mt-[4px] not-italic text-black_905 text-left w-[auto]"
                        variant="body61"
                      >
                        Real wedding inspiration
                      </Text>
                      <div className="flex flex-row items-center justify-center sm:ml-[0] ml-[33px] sm:w-[100%] w-[26%]">
                        <Text
                          className="font-normal mt-[3px] not-italic text-black_905 text-left w-[auto]"
                          variant="body61"
                        >
                          Explore vendors
                        </Text>
                        <Img
                          src="images/img_arrowdown_black_905_5x8.svg"
                          className="h-[5px] ml-[4px] w-[auto]"
                          alt="arrowdown Two"
                        />
                      </div>
                      <Text
                        className="font-normal sm:ml-[0] ml-[32px] sm:mt-[0] mt-[3px] not-italic text-black_905 text-left w-[auto]"
                        variant="body61"
                      >
                        Become a vendor
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="flex flex-col items-center justify-start pb-[16px] w-[100%]">
            <div className="border-b-[1px] border-black_905 border-solid flex md:flex-col flex-row md:gap-[40px] gap-[64px] items-start justify-start w-[100%]">
              <div className="border-black_905 border-r-[1px] border-solid flex md:flex-1 items-center justify-start p-[16px] md:px-[20px] md:w-[100%] w-[67%]">
                <div className="h-[767px] relative w-[100%]">
                  <Img
                    src="defaultNoData.png"
                    className="h-[767px] m-[auto] object-cover rounded-[16px] w-[100%]"
                    alt="herobackground"
                  />
                  <Img
                    src="images/img_heroforeground.png"
                    className="absolute h-[690px] inset-[0] justify-center m-[auto] object-cover w-[88%]"
                    alt="heroforeground"
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[64px] pt-[7px] md:px-[20px] md:w-[100%] w-[27%]">
                <Text
                  className="font-medium text-gray_974 text-left tracking-[-0.40px] w-[auto]"
                  variant="body47"
                >
                  Wedding venues and vendors
                </Text>
                <div className="flex items-start justify-start mt-[26px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal leading-[48.00px] md:max-w-[100%] max-w-[403px] not-italic text-black_905 text-left tracking-[-1.92px]"
                    variant="body15"
                  >
                    <span className="md:text-[40px] sm:text-[34px] text-black_905 text-[44px] font-inter">
                      Let’s find your (other){" "}
                    </span>
                    <span className="md:text-[40px] sm:text-[34px] text-black_905 text-[44px] font-inter font-medium">
                      perfect match
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col gap-[4px] items-start justify-start mt-[23px] sm:w-[100%] w-[auto]">
                  <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start pr-[4px] py-[4px] w-[100%]">
                    <div className="bg-black_905 h-[8px] mb-[40px] sm:mt-[0] mt-[7px] rounded-[3px] w-[7px]"></div>
                    <Text
                      className="sm:flex-1 font-normal leading-[32.00px] not-italic text-gray_974 text-left sm:w-[100%] w-[95%]"
                      variant="body43"
                    >
                      Discover, inquire with, and book vendors who are right for
                      you
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[8px] items-center justify-start pr-[2px] py-[2px] w-[100%]">
                    <div className="bg-black_905 h-[8px] sm:mt-[0] my-[8px] rounded-[50%] w-[8px]"></div>
                    <Text
                      className="font-normal sm:mt-[0] mt-[4px] not-italic text-gray_974 text-left w-[auto]"
                      variant="body47"
                    >
                      Transparent pricing and vendors for every budget
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[8px] items-center justify-start pr-[2px] py-[2px] w-[100%]">
                    <div className="bg-black_905 h-[8px] sm:mt-[0] my-[8px] rounded-[50%] w-[8px]"></div>
                    <Text
                      className="font-normal sm:mt-[0] mt-[4px] not-italic text-gray_974 text-left w-[auto]"
                      variant="body47"
                    >
                      No ads, just pre-screened vendors you can trust
                    </Text>
                  </div>
                </div>
                <Button className="bg-black_905 cursor-pointer font-semibold min-w-[146px] mt-[32px] pb-[17.42px] pl-[28px] pr-[27.52px] pt-[15.58px] sm:px-[20px] rounded-[28px] text-[14px] text-center text-white_A700 w-[auto]">
                  Take our quiz
                </Button>
              </div>
            </div>
            <div className="border-b-[1px] border-black_905 border-solid flex items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex md:flex-col flex-row gap-[8px] items-center justify-center max-w-[1200px] mx-[auto] p-[24px] md:px-[20px] w-[100%]">
                <List
                  className="bg-gray_123 md:flex-1 sm:flex-col flex-row gap-[12.5px] grid md:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(1,_1fr_1px)_1fr] md:ml-[0] ml-[32px] p-[7px] rounded-[28px] md:w-[100%] w-[85%]"
                  orientation="horizontal"
                >
                  <div className="flex sm:flex-col flex-row gap-[-2px] items-center justify-start pr-[2px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-row gap-[6px] items-center justify-start sm:pr-[20px] md:pr-[40px] pr-[81.98px] py-[8px] sm:w-[100%] w-[auto]">
                      <Img
                        src="images/img_location_black_905.svg"
                        className="h-[25px] w-[25px]"
                        alt="location"
                      />
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_814 text-left w-[auto]"
                          variant="body54"
                        >
                          New York, NY
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_close_bluegray_101.svg"
                      className="h-[24px] w-[24px]"
                      alt="close"
                    />
                  </div>
                  <Line className="self-center h-[28px] bg-gray_427 w-[1px]" />
                  <div className="flex sm:flex-col flex-row gap-[-2px] items-center justify-start pr-[2px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-row gap-[6px] items-center justify-start pr-[7px] py-[7px] sm:w-[100%] w-[96%]">
                      <Img
                        src="images/img_location_black_905_25x25.svg"
                        className="h-[25px] mb-[3px] w-[25px]"
                        alt="location One"
                      />
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_814 text-left w-[auto]"
                          variant="body59"
                        >
                          Venues
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_close_bluegray_101.svg"
                      className="h-[24px] w-[24px]"
                      alt="close One"
                    />
                  </div>
                </List>
                <Button className="bg-black_905 cursor-pointer font-semibold min-w-[100px] mr-[32px] pb-[17.42px] pl-[25px] pr-[24.92px] pt-[15.58px] sm:px-[20px] rounded-[28px] text-[15px] text-center text-white_A700 w-[auto]">
                  Search
                </Button>
              </div>
            </div>
            <div className="border-b-[1px] border-black_905 border-solid flex items-center justify-start w-[100%]">
              <div className="md:h-[207px] h-[287px] p-[37px] md:px-[20px] relative w-[100%]">
                <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[95%]">
                  <div className="flex flex-col gap-[28px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_974 text-left w-[auto]"
                      variant="body31"
                    >
                      Explore wedding vendors by category
                    </Text>
                    <List
                      className="sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 grid-cols-10 md:grid-cols-5 justify-center w-[100%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-1 flex-col gap-[12px] items-center justify-start pb-[15px] px-[15px] w-[100%]">
                        <div className="bg-light_blue_902 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_arrowup_bluegray_814.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="arrowup"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_905 text-center w-[auto]"
                          variant="body61"
                        >
                          Venues
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[13px] items-center justify-start pb-[14px] px-[14px] w-[100%]">
                        <div className="bg-light_blue_902 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_camera_bluegray_814.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="camera"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_905 text-center w-[auto]"
                          variant="body61"
                        >
                          Photographers
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[13px] items-center justify-start pb-[14px] px-[14px] w-[100%]">
                        <div className="bg-light_blue_902 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_camera_bluegray_814_64x64.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="camera One"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_905 text-center w-[auto]"
                          variant="body61"
                        >
                          Videographers
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-center justify-start pb-[15px] px-[15px] w-[100%]">
                        <div className="bg-light_blue_902 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_user_bluegray_814.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="user"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_905 text-center w-[auto]"
                          variant="body61"
                        >
                          Florists
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[13px] items-center justify-start pb-[14px] px-[14px] w-[100%]">
                        <div className="bg-light_blue_902 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_globe_bluegray_814.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="globe"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_905 text-center w-[auto]"
                          variant="body61"
                        >
                          Beauty
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-center justify-start pb-[15px] px-[15px] w-[100%]">
                        <div className="bg-light_blue_902 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_menu_bluegray_814.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="menu"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_905 text-center w-[auto]"
                          variant="body61"
                        >
                          Planners
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-center justify-start pb-[15px] px-[15px] w-[100%]">
                        <div className="bg-light_blue_902 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_music_bluegray_814.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="music"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_905 text-center w-[auto]"
                          variant="body61"
                        >
                          Bands and DJs
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[13px] items-center justify-start pb-[14px] px-[14px] w-[100%]">
                        <div className="bg-light_blue_902 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_volume_bluegray_814.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="volume"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_905 text-center w-[auto]"
                          variant="body61"
                        >
                          Catering
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[12px] items-center justify-start pb-[16px] px-[16px] w-[100%]">
                        <div className="bg-light_blue_902 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_weddingcakea9ac9b82svg.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="weddingcakea9ac9b82svg"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_905 text-center w-[auto]"
                          variant="body67"
                        >
                          Cakes and desserts
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[13px] items-center justify-start pb-[15px] px-[15px] w-[100%]">
                        <div className="bg-light_blue_902 flex h-[64px] items-center justify-start rounded-[50%] w-[64px]">
                          <Img
                            src="images/img_champagneglass.svg"
                            className="h-[64px] rounded-[50%] w-[64px]"
                            alt="champagneglass"
                          />
                        </div>
                        <Text
                          className="font-normal not-italic text-black_905 text-center w-[auto]"
                          variant="body67"
                        >
                          Bar and beverage
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="absolute border-b-[1px] border-gray_968 border-solid flex h-[max-content] inset-[0] items-center justify-center m-[auto] pb-[26px] w-[49%]">
                  <div className="flex md:flex-col flex-row gap-[35px] items-center justify-between w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[181px] md:h-[auto] object-cover w-[181px]"
                      alt="619cc100f89c161"
                    />
                    <div className="flex md:flex-1 flex-col gap-[12px] items-start justify-start sm:pr-[20px] pr-[24px] py-[24px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-black font-inter text-left text-orange_52 uppercase w-[auto]"
                        variant="body23"
                      >
                        Første slipp til NATTEN!
                      </Text>
                      <Text
                        className="font-bold font-poppins mb-[38px] text-left text-orange_52 w-[auto]"
                        variant="body43"
                      >
                        11.23.2021
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-[1px] border-black_905 border-solid flex items-center justify-start mt-[16px] pb-[16px] px-[16px] w-[100%]">
              <div className="bg-light_blue_902 flex items-center justify-start max-w-[1888px] mx-[auto] p-[40px] md:px-[20px] rounded-[16px] w-[100%]">
                <div className="flex flex-col gap-[32px] items-center justify-start my-[16px] w-[100%]">
                  <div className="flex flex-col gap-[9px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start pr-[2px] pt-[2px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body30"
                      >
                        Shuffle your way to your dream team
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[5px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-left text-white_A700 w-[auto]"
                        variant="body54"
                      >
                        Discover local vendors to bring your wedding to life.
                      </Text>
                      <a
                        className="font-semibold text-[15px] text-center text-white_A700 underline w-[auto]"
                        href="javascript:"
                      >
                        Already booked? Add them here
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start pr-[1194px] sm:pr-[20px] md:pr-[40px] w-[100%]">
                      <div className="flex md:flex-1 flex-row items-start justify-evenly md:w-[100%] w-[35%]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body50"
                        >
                          Wedding in
                        </Text>
                        <div className="flex flex-row gap-[9.06px] items-start justify-start pt-[2px] w-[auto]">
                          <a
                            className="font-semibold text-[15px] text-center text-white_A700 underline w-[auto]"
                            href="javascript:"
                          >
                            New York, NY
                          </a>
                          <Img
                            src="images/img_edit_white_a700_16x16.svg"
                            className="h-[16px] w-[16px]"
                            alt="edit"
                          />
                        </div>
                      </div>
                      <div className="flex items-start justify-start md:ml-[0] ml-[16px] pb-[0.84px] pr-[6.7px] w-[auto]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700 w-[auto]"
                          variant="body54"
                        >
                          | Starting price: $19,950
                        </Text>
                      </div>
                      <Button
                        className="bg-gray_62 border-[1px] border-light_blue_902 border-solid flex items-center justify-center md:ml-[0] ml-[16px] pl-[25px] pr-[28px] py-[19px] rounded-[28px] sm:ml-[0] sm:px-[20px] text-center"
                        leftIcon={
                          <Img
                            src="images/img_call_light_blue_902.svg"
                            className="mr-[11px] text-center"
                            alt="call"
                          />
                        }
                      >
                        <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-center text-light_blue_902">
                          Shuffle vendors
                        </div>
                      </Button>
                    </div>
                    <div className="flex items-center justify-start w-[100%]">
                      <List
                        className="flex-col gap-[32px] grid items-center w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex-1 gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between my-[0] w-[100%]">
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[17px] items-center justify-start py-[18px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_905 text-center w-[auto]"
                                variant="body67"
                              >
                                Venues
                              </Text>
                              <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] sm:w-[100%] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex items-center justify-start w-[100%]">
                                    <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                      <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                        <div className="bg-gray_126 h-[286px] relative w-[100%]">
                                          <Img
                                            src="images/img_af14be8c0e004.png"
                                            className="h-[286px] m-[auto] object-cover w-[100%]"
                                            alt="af14be8c0e004"
                                          />
                                          <PagerIndicator
                                            className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                            count={5}
                                            activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                            activeIndex={1}
                                            inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                            selectedWrapperCss="inline-block mx-[4.00px]"
                                            unselectedWrapperCss="inline-block mx-[4.00px]"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Text
                                  className="font-semibold text-black_905 text-center w-[auto]"
                                  variant="body54"
                                >
                                  Etcetera Etcetera
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_814.svg"
                                className="h-[47px] w-[428px]"
                                alt="div Three"
                              />
                              <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-center w-[100%]">
                                <a
                                  className="font-semibold sm:ml-[0] ml-[172px] text-[14px] text-black_905 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold mr-[170px] sm:mt-[0] mt-[2px] text-black_905 text-center w-[auto]"
                                  variant="body75"
                                >
                                  Venues
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[15px] items-center justify-start py-[19px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_905 text-center w-[auto]"
                                variant="body61"
                              >
                                Photographers
                              </Text>
                              <div className="flex flex-col items-center justify-start sm:w-[100%] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex items-center justify-start w-[100%]">
                                    <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                      <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                        <div className="bg-gray_126 h-[286px] relative w-[100%]">
                                          <Img
                                            src="images/img_68c3c4d786114.png"
                                            className="h-[286px] m-[auto] object-cover w-[100%]"
                                            alt="68c3c4d786114"
                                          />
                                          <PagerIndicator
                                            className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                            count={5}
                                            activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                            activeIndex={1}
                                            inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                            selectedWrapperCss="inline-block mx-[4.00px]"
                                            unselectedWrapperCss="inline-block mx-[4.00px]"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[8px] items-center justify-start pl-[122.88px] pr-[123.13px] pt-[16px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-semibold text-black_905 text-center w-[auto]"
                                    variant="body54"
                                  >
                                    Photography By Verdi
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-center text-gray_618 w-[auto]"
                                    variant="body61"
                                  >
                                    Starting price $3,500
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_814.svg"
                                className="h-[47px] w-[428px]"
                                alt="div One"
                              />
                              <div className="flex flex-row gap-[9.34px] items-center justify-start pl-[149.56px] pr-[147.09px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                <a
                                  className="font-semibold text-[14px] text-black_905 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold text-black_905 text-center w-[auto]"
                                  variant="body67"
                                >
                                  Photographers
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[15px] items-center justify-start py-[19px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_905 text-center w-[auto]"
                                variant="body61"
                              >
                                Videographers
                              </Text>
                              <div className="flex flex-col items-center justify-start sm:w-[100%] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                    <div className="bg-gray_126 flex items-center justify-start w-[100%]">
                                      <Img
                                        src="defaultNoData.png"
                                        className="h-[286px] md:h-[auto] object-cover w-[100%]"
                                        alt="7e23bd889f8aFour"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[8px] items-center justify-start pl-[78.38px] pr-[78.63px] pt-[16px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-semibold text-black_905 text-center w-[auto]"
                                    variant="body54"
                                  >
                                    J&S Media Wedding Films & Photo
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-center text-gray_618 w-[auto]"
                                    variant="body61"
                                  >
                                    Starting price $4,500
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_814.svg"
                                className="h-[47px] w-[428px]"
                                alt="div Two"
                              />
                              <div className="flex flex-row gap-[11.44px] items-center justify-start pl-[150.67px] pr-[151.89px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                <a
                                  className="font-semibold text-[14px] text-black_905 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold text-black_905 text-center w-[auto]"
                                  variant="body69"
                                >
                                  Videographers
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start py-[19px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_905 text-center w-[auto]"
                                variant="body67"
                              >
                                Catering
                              </Text>
                              <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] sm:w-[100%] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex items-center justify-start w-[100%]">
                                    <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                      <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                        <div className="bg-gray_126 h-[286px] relative w-[100%]">
                                          <Img
                                            src="defaultNoData.png"
                                            className="h-[286px] m-[auto] object-cover w-[100%]"
                                            alt="d7ed6a6f30ebFour"
                                          />
                                          <PagerIndicator
                                            className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                            count={5}
                                            activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                            activeIndex={1}
                                            inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                            selectedWrapperCss="inline-block mx-[4.00px]"
                                            unselectedWrapperCss="inline-block mx-[4.00px]"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Text
                                  className="font-semibold text-black_905 text-center w-[auto]"
                                  variant="body54"
                                >
                                  Pinch Food Design
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_814.svg"
                                className="h-[47px] w-[428px]"
                                alt="div Three"
                              />
                              <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-center w-[100%]">
                                <a
                                  className="font-semibold sm:ml-[0] ml-[168px] text-[14px] text-black_905 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold mr-[169px] sm:mt-[0] mt-[3px] text-black_905 text-center w-[auto]"
                                  variant="body75"
                                >
                                  Catering
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between my-[0] w-[100%]">
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[44px] items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start py-[18px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_905 text-center w-[auto]"
                                variant="body61"
                              >
                                Cakes and desserts
                              </Text>
                              <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] sm:w-[100%] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                    <div className="bg-gray_126 flex items-center justify-start w-[100%]">
                                      <Img
                                        src="defaultNoData.png"
                                        className="h-[286px] md:h-[auto] object-cover w-[100%]"
                                        alt="91d8f449edeeFour"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <Text
                                  className="font-semibold text-black_905 text-center w-[auto]"
                                  variant="body54"
                                >
                                  Conti&#39;s Pastry Shoppe
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_814.svg"
                                className="h-[47px] w-[428px]"
                                alt="div Four"
                              />
                              <div className="flex flex-row gap-[11.55px] items-center justify-start pl-[136.42px] pr-[139.03px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                <a
                                  className="font-semibold text-[14px] text-black_905 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold text-black_905 text-center w-[auto]"
                                  variant="body69"
                                >
                                  Cakes and desserts
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[17px] items-center justify-start py-[18px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_905 text-center w-[auto]"
                                variant="body67"
                              >
                                Florists
                              </Text>
                              <div className="flex flex-col items-center justify-start sm:w-[100%] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex items-center justify-start w-[100%]">
                                    <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                      <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                        <div className="bg-gray_126 h-[286px] relative w-[100%]">
                                          <Img
                                            src="images/img_8314d694e23e4.png"
                                            className="h-[286px] m-[auto] object-cover w-[100%]"
                                            alt="8314d694e23eFour"
                                          />
                                          <PagerIndicator
                                            className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                            count={5}
                                            activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                            activeIndex={1}
                                            inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                            selectedWrapperCss="inline-block mx-[4.00px]"
                                            unselectedWrapperCss="inline-block mx-[4.00px]"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col gap-[8px] items-center justify-start pl-[18.61px] pr-[18.41px] pt-[16px] sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-semibold leading-[24.00px] md:max-w-[100%] max-w-[366px] text-black_905 text-center"
                                    variant="body50"
                                  >
                                    Enchanted Designs Long Island (Photo Booths
                                    and Flower Walls)
                                  </Text>
                                  <Text
                                    className="font-normal not-italic text-center text-gray_618 w-[auto]"
                                    variant="body67"
                                  >
                                    Starting price $350
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_814.svg"
                                className="h-[47px] w-[428px]"
                                alt="div One One"
                              />
                              <div className="flex flex-row gap-[10.61px] items-center justify-start pl-[175.06px] pr-[174.33px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                <a
                                  className="font-semibold text-[14px] text-black_905 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold text-black_905 text-center w-[auto]"
                                  as="h2"
                                  variant="h2"
                                >
                                  Florists
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start py-[18px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_905 text-center w-[auto]"
                                variant="body61"
                              >
                                Bands and DJs
                              </Text>
                              <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] sm:w-[100%] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex items-center justify-start w-[100%]">
                                    <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                      <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                        <div className="bg-gray_126 h-[286px] relative w-[100%]">
                                          <Img
                                            src="images/img_b8dd716d4e614.png"
                                            className="h-[286px] m-[auto] object-cover w-[100%]"
                                            alt="b8dd716d4e614"
                                          />
                                          <PagerIndicator
                                            className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                            count={5}
                                            activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                            activeIndex={1}
                                            inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                            selectedWrapperCss="inline-block mx-[4.00px]"
                                            unselectedWrapperCss="inline-block mx-[4.00px]"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Text
                                  className="font-semibold leading-[24.00px] md:max-w-[100%] max-w-[341px] text-black_905 text-center"
                                  variant="body50"
                                >
                                  VSmusic4u Professional Wedding Ceremony &
                                  Cocktail Musicians
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_814.svg"
                                className="h-[47px] w-[428px]"
                                alt="div Two One"
                              />
                              <div className="flex flex-row gap-[12.34px] items-center justify-start pl-[150.11px] pr-[151.55px] sm:px-[20px] md:px-[40px] sm:w-[100%] w-[auto]">
                                <a
                                  className="font-semibold text-[14px] text-black_905 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold text-black_905 text-center w-[auto]"
                                  variant="body69"
                                >
                                  Bands and DJs
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white_A700 flex flex-1 flex-col gap-[44px] items-center justify-start rounded-[12px] w-[100%]">
                            <div className="flex flex-col gap-[16px] items-center justify-start py-[19px] w-[100%]">
                              <Text
                                className="capitalize font-normal not-italic text-black_905 text-center w-[auto]"
                                variant="body67"
                              >
                                Beauty
                              </Text>
                              <div className="flex flex-col gap-[16px] items-center justify-start pb-[4px] sm:w-[100%] w-[auto]">
                                <div className="flex items-center justify-start w-[100%]">
                                  <div className="flex items-center justify-start w-[100%]">
                                    <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                      <div className="flex items-start justify-start pb-[6.84px] w-[auto]">
                                        <div className="bg-gray_126 h-[286px] relative w-[100%]">
                                          <Img
                                            src="defaultNoData.png"
                                            className="h-[286px] m-[auto] object-cover w-[100%]"
                                            alt="f98dd40d09984"
                                          />
                                          <PagerIndicator
                                            className="absolute bottom-[1%] flex h-[22px] inset-x-[0] justify-center mx-[auto] w-[1px]"
                                            count={5}
                                            activeCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700 w-[8px] relative"
                                            activeIndex={1}
                                            inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-white_A700_97 w-[8px] relative"
                                            selectedWrapperCss="inline-block mx-[4.00px]"
                                            unselectedWrapperCss="inline-block mx-[4.00px]"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <Text
                                  className="font-semibold text-black_905 text-center w-[auto]"
                                  variant="body54"
                                >
                                  Alessarro Beauty
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col gap-[24px] items-start justify-start pb-[24px] sm:w-[100%] w-[auto]">
                              <Img
                                src="images/img_div_gray_814.svg"
                                className="h-[47px] w-[428px]"
                                alt="div Three One"
                              />
                              <div className="flex sm:flex-col flex-row gap-[10px] items-start justify-center w-[100%]">
                                <a
                                  className="font-semibold sm:ml-[0] ml-[173px] text-[14px] text-black_905 text-center underline w-[auto]"
                                  href="javascript:"
                                >
                                  More
                                </a>
                                <Text
                                  className="font-semibold mr-[172px] sm:mt-[0] mt-[3px] text-black_905 text-center w-[auto]"
                                  variant="body75"
                                >
                                  Beauty
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-evenly w-[100%]">
              <div className="border-b-[1px] border-black_905 border-solid flex md:flex-1 items-center justify-start p-[12px] md:px-[20px] md:w-[100%] w-[67%]">
                <div className="bg-pink_700 flex items-center justify-start p-[46px] sm:px-[20px] md:px-[40px] rounded-[16px] w-[100%]">
                  <Img
                    src="images/img_details1c8e27f6fpng.png"
                    className="h-[832px] md:h-[auto] object-cover w-[86%]"
                    alt="details1c8e27f6fpng"
                  />
                </div>
              </div>
              <div className="bg-white_A700 border-b-[1px] border-black_905 border-l-[1px] border-solid flex md:flex-1 flex-col gap-[163px] md:gap-[40px] items-center justify-end p-[40px] md:px-[20px] md:w-[100%] w-[34%]">
                <div className="flex items-start justify-start mt-[24px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal leading-[48.00px] md:max-w-[100%] max-w-[438px] not-italic text-black_905 text-left tracking-[-1.92px]"
                    variant="body13"
                  >
                    <span className="md:text-[44px] sm:text-[38px] text-black_905 text-[48px] font-inter">
                      The difference is in the{" "}
                    </span>
                    <span className="md:text-[44px] sm:text-[38px] text-black_905 text-[48px] font-inter font-medium">
                      details
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start sm:w-[100%] w-[auto]">
                  <div className="border-b-[1px] border-black_905 border-solid flex flex-col gap-[16px] items-start justify-start py-[34px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-row items-center justify-start w-[100%]">
                      <Text
                        className="font-semibold text-black_905 text-left w-[auto]"
                        variant="body54"
                      >
                        The fun way to find your favorites
                      </Text>
                      <Img
                        src="images/img_arrowright_black_905.svg"
                        className="h-[22px] w-[auto]"
                        alt="arrowright"
                      />
                    </div>
                    <Text
                      className="font-normal leading-[24.00px] md:max-w-[100%] max-w-[549px] not-italic text-black_905 text-left"
                      variant="body50"
                    >
                      Take our quiz to discover vendors that are a perfect fit.
                      Or use our smart filters to find exactly what you want.
                    </Text>
                    <Button className="bg-black_905 cursor-pointer font-semibold min-w-[130px] pb-[10.86px] pl-[20px] pr-[19.52px] pt-[10.14px] rounded-[22px] text-[14px] text-center text-white_A700 w-[auto]">
                      Take our quiz
                    </Button>
                  </div>
                  <div className="border-b-[1px] border-gray_427 border-solid flex items-start justify-start sm:pr-[20px] pr-[34px] py-[34px] w-[100%]">
                    <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[53%]">
                      <Text
                        className="font-normal not-italic text-gray_618 text-left w-[auto]"
                        variant="body59"
                      >
                        Only vendors who match our values
                      </Text>
                      <Img
                        src="images/img_arrowright_gray_618.svg"
                        className="h-[22px] w-[auto]"
                        alt="arrowright One"
                      />
                    </div>
                  </div>
                  <div className="border-b-[1px] border-gray_427 border-solid flex items-start justify-start sm:pr-[20px] pr-[34px] py-[34px] w-[100%]">
                    <div className="flex flex-row items-center justify-start md:w-[100%] w-[57%]">
                      <Text
                        className="font-normal not-italic text-gray_618 text-left w-[auto]"
                        variant="body54"
                      >
                        Curate and connect from one open tab
                      </Text>
                      <Img
                        src="images/img_arrowright_gray_618.svg"
                        className="h-[22px] w-[auto]"
                        alt="arrowright Two"
                      />
                    </div>
                  </div>
                  <div className="border-b-[1px] border-gray_427 border-solid flex items-start justify-start sm:pr-[20px] pr-[34px] py-[34px] w-[100%]">
                    <div className="flex flex-row items-center justify-start md:w-[100%] w-[46%]">
                      <Text
                        className="font-normal not-italic text-gray_618 text-left w-[auto]"
                        variant="body54"
                      >
                        Get inspired by Real Weddings
                      </Text>
                      <Img
                        src="images/img_arrowright_gray_618.svg"
                        className="h-[22px] w-[auto]"
                        alt="arrowright Three"
                      />
                    </div>
                  </div>
                  <div className="flex items-start justify-end sm:pr-[20px] pr-[34px] py-[34px] w-[100%]">
                    <div className="flex flex-row items-center justify-start mr-[auto] md:w-[100%] w-[26%]">
                      <Text
                        className="font-normal not-italic text-gray_618 text-left w-[auto]"
                        variant="body59"
                      >
                        Ask the experts
                      </Text>
                      <Img
                        src="images/img_arrowright_gray_618.svg"
                        className="h-[22px] ml-[4px] w-[auto]"
                        alt="arrowright Four"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-[1px] border-black_905 border-solid flex flex-col items-start justify-start p-[64px] sm:px-[20px] md:px-[40px] w-[100%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1792px] mx-[auto] pl-[2px] pt-[2px] w-[100%]">
                <Text
                  className="font-normal sm:ml-[0] ml-[14px] not-italic text-gray_974 text-left w-[auto]"
                  variant="body31"
                >
                  Popular locations
                </Text>
                <Button className="bg-black_905 cursor-pointer font-semibold min-w-[106px] pl-[17px] pr-[17.72px] py-[12px] rounded-[22px] text-[13px] text-center text-white_A700 w-[auto]">
                  Get started
                </Button>
              </div>
              <div className="gap-[40px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start pl-[16px] py-[40px] md:w-[100%] w-[auto]">
                <div className="h-[310px] relative w-[100%]">
                  <Img
                    src="defaultNoData.png"
                    className="h-[310px] m-[auto] object-cover rounded-[16px] w-[100%]"
                    alt="popularnewyor"
                  />
                  <Button className="absolute bg-gray_62 bottom-[10%] cursor-pointer font-semibold inset-x-[0] min-w-[95px] mx-[auto] pl-[17px] pr-[18.34px] py-[9px] rounded-[19px] text-[13px] text-black_905 text-center w-[auto]">
                    New york
                  </Button>
                </div>
                <div className="h-[310px] relative w-[100%]">
                  <Img
                    src="images/img_popularchicagodbe164cejpg.png"
                    className="h-[310px] m-[auto] object-cover rounded-[16px] w-[100%]"
                    alt="popularchicagodbe164cejpg"
                  />
                  <Button className="absolute bg-gray_62 bottom-[10%] cursor-pointer font-semibold inset-x-[0] min-w-[87px] mx-[auto] pl-[18px] pr-[16.84px] py-[9px] rounded-[19px] text-[13px] text-black_905 text-center w-[auto]">
                    Chicago
                  </Button>
                </div>
                <div className="h-[310px] relative w-[100%]">
                  <Img
                    src="defaultNoData.png"
                    className="h-[310px] m-[auto] object-cover rounded-[16px] w-[100%]"
                    alt="popularlosang"
                  />
                  <Button className="absolute bg-gray_62 bottom-[10%] cursor-pointer font-semibold inset-x-[0] min-w-[109px] mx-[auto] pl-[16px] pr-[17.28px] py-[9px] rounded-[19px] text-[13px] text-black_905 text-center w-[auto]">
                    Los angeles
                  </Button>
                </div>
                <div className="h-[310px] relative w-[100%]">
                  <Img
                    src="defaultNoData.png"
                    className="h-[310px] m-[auto] object-cover rounded-[16px] w-[100%]"
                    alt="popularphilade"
                  />
                  <Button className="absolute bg-gray_62 bottom-[10%] cursor-pointer font-semibold inset-x-[0] min-w-[112px] mx-[auto] pl-[18px] pr-[17.63px] py-[9px] rounded-[19px] text-[13px] text-black_905 text-center w-[auto]">
                    Philadelphia
                  </Button>
                </div>
                <div className="h-[310px] relative w-[100%]">
                  <Img
                    src="defaultNoData.png"
                    className="h-[310px] m-[auto] object-cover rounded-[16px] w-[100%]"
                    alt="populardallas2b20bd78jpg"
                  />
                  <Button className="absolute bg-gray_62 bottom-[10%] cursor-pointer font-semibold inset-x-[0] min-w-[72px] mx-[auto] pl-[17px] pr-[16.86px] py-[9px] rounded-[19px] text-[13px] text-black_905 text-center w-[auto]">
                    Dallas
                  </Button>
                </div>
                <div className="h-[310px] relative w-[100%]">
                  <Img
                    src="images/img_popularmiami0b1c9a99jpg.png"
                    className="h-[310px] m-[auto] object-cover rounded-[16px] w-[100%]"
                    alt="popularmiami0b1c9a99jpg"
                  />
                  <Button className="absolute bg-gray_62 bottom-[10%] cursor-pointer font-semibold inset-x-[0] min-w-[74px] mx-[auto] pl-[18px] pr-[18.3px] py-[9px] rounded-[19px] text-[13px] text-black_905 text-center w-[auto]">
                    Miami
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-b-[1px] border-black_905 border-solid flex items-center justify-start w-[100%]">
              <List
                className="sm:flex-col flex-row gap-[16.5px] grid md:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(1,_1fr_1px)_1fr] justify-center max-w-[1888px] mx-[auto] md:px-[20px] py-[16px] w-[100%]"
                orientation="horizontal"
              >
                <div className="flex sm:ml-[0] relative w-[100%]">
                  <div className="bg-teal_308 h-[470px] my-[auto] sm:w-[100%] w-[470px]">
                    <div className="bg-teal_308 h-[470px] m-[auto] w-[99%]"></div>
                    <Img
                      src="images/img_promorealwedd.png"
                      className="absolute h-[470px] inset-[0] justify-center m-[auto] object-cover w-[470px]"
                      alt="promorealwedd"
                    />
                  </div>
                  <div className="bg-light_blue_902 flex flex-col items-start justify-center ml-[-6.84px] my-[auto] p-[48px] sm:px-[20px] md:px-[40px] w-[50%] z-[1]">
                    <Text
                      className="font-medium mt-[97px] text-cyan_A100 text-left tracking-[0.20px] w-[auto]"
                      variant="body17"
                    >
                      Get inspired
                    </Text>
                    <Text
                      className="font-normal leading-[22.86px] mt-[8px] not-italic text-cyan_A100 text-left sm:w-[100%] w-[94%]"
                      variant="body50"
                    >
                      Explore photos of real, recent weddings and find the
                      vendors behind your faves.
                    </Text>
                    <Button className="bg-cyan_A100 cursor-pointer font-semibold mb-[96px] min-w-[182px] mt-[32px] pb-[11.42px] pl-[18px] pr-[17.48px] pt-[9.58px] rounded-[22px] text-[15px] text-bluegray_946 text-center w-[auto]">
                      Scroll real weddings
                    </Button>
                  </div>
                </div>
                <Line className="self-center h-[502px] bg-black_905 w-[1px]" />
                <div className="flex sm:ml-[0] relative w-[100%]">
                  <div className="bg-cyan_901 h-[470px] my-[auto] sm:w-[100%] w-[470px]">
                    <div className="bg-cyan_901 h-[470px] m-[auto] w-[99%]"></div>
                    <Img
                      src="defaultNoData.png"
                      className="absolute h-[470px] inset-[0] justify-center m-[auto] object-cover w-[470px]"
                      alt="promosamples57d77cbbjpg"
                    />
                  </div>
                  <div className="bg-cyan_901 flex flex-col items-start justify-center ml-[-6.84px] my-[auto] p-[48px] sm:px-[20px] md:px-[40px] w-[50%] z-[1]">
                    <Text
                      className="font-medium leading-[44.00px] mt-[74px] text-left text-light_green_100 tracking-[0.20px] sm:w-[100%] w-[93%]"
                      variant="body17"
                    >
                      Premium quality, perfectly priced
                    </Text>
                    <Text
                      className="font-normal leading-[22.86px] mt-[15px] not-italic text-left text-light_green_100 sm:w-[100%] w-[91%]"
                      variant="body50"
                    >
                      Highly customizable designs for every wedding moment.
                    </Text>
                    <Button className="bg-light_green_100 cursor-pointer font-semibold mb-[74px] min-w-[187px] mt-[32px] pb-[11.42px] pl-[17px] pr-[17.69px] pt-[9.58px] rounded-[22px] text-[15px] text-center text-cyan_901 w-[auto]">
                      Choose free samples
                    </Button>
                  </div>
                </div>
              </List>
            </div>
            <div className="bg-bluegray_946 flex items-center justify-start max-w-[1888px] mt-[16px] mx-[auto] p-[104px] md:px-[20px] rounded-[16px] w-[100%]">
              <div className="flex items-center justify-start md:w-[100%] w-[83%]">
                <div className="flex flex-col gap-[20px] items-center justify-start px-[165px] sm:px-[20px] md:px-[40px] w-[100%]">
                  <div className="flex items-start justify-start pl-[49.11px] pr-[48.92px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-normal leading-[48.00px] md:max-w-[100%] max-w-[532px] not-italic text-center text-white_A700 tracking-[-1.92px]"
                      variant="body13"
                    >
                      <span className="md:text-[44px] sm:text-[38px] text-white_A700 text-[48px] font-inter">
                        Our team is{" "}
                      </span>
                      <span className="md:text-[44px] sm:text-[38px] text-white_A700 text-[48px] font-inter font-medium">
                        always
                      </span>
                      <span className="md:text-[44px] sm:text-[38px] text-white_A700 text-[48px] font-inter">
                        {" "}
                        here to support you
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[100%]">
                    <div className="border-b-[1px] border-solid border-white_A700 flex items-center justify-start w-[100%]">
                      <SelectBox
                        className="font-normal not-italic py-[34px] sm:text-[38px] md:text-[44px] text-[48px] text-left text-white_A700 sm:w-[100%] w-[97%]"
                        placeholderClassName="text-white_A700"
                        name="button"
                        placeholder="FAQ"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_16x16.svg"
                            className="h-[16px] mr-[0] w-[16px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </div>
                    <SelectBox
                      className="font-normal not-italic py-[35px] sm:text-[36px] md:text-[42px] text-[46px] text-left text-white_A700 sm:w-[100%] w-[97%]"
                      placeholderClassName="text-white_A700"
                      name="button One"
                      placeholder="Advice"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_16x16.svg"
                          className="h-[16px] mr-[0] w-[16px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_62 border-black_905 border-solid border-t-[1px] flex items-center justify-start w-[100%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="border-b-[1px] border-black_905 border-solid flex items-center justify-start w-[100%]">
                <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start sm:pr-[20px] pr-[311px] md:pr-[40px] w-[100%]">
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[1px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 p-[40px] sm:px-[20px] md:w-[100%] w-[79%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[20px] items-start justify-start sm:ml-[0] sm:mt-[0] my-[20px] w-[100%]">
                      <Text
                        className="font-medium text-gray_974 text-left w-[auto]"
                        variant="body43"
                      >
                        Plan your wedding
                      </Text>
                      <div className="flex flex-col items-start justify-start mb-[56px] pr-[2px] py-[2px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_815 text-left w-[auto]"
                          variant="body59"
                        >
                          Venues and vendors
                        </Text>
                        <Text
                          className="font-normal mt-[12px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body54"
                        >
                          Guest list
                        </Text>
                        <Text
                          className="font-normal mt-[13px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body54"
                        >
                          Wedding websites
                        </Text>
                        <Text
                          className="font-normal mt-[13px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body59"
                        >
                          Registry
                        </Text>
                        <Text
                          className="font-normal mt-[13px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body59"
                        >
                          Invites and paper
                        </Text>
                        <Text
                          className="font-normal mt-[12px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body54"
                        >
                          Boutique
                        </Text>
                        <Text
                          className="font-normal mt-[10px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body54"
                        >
                          Albums
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[22px] items-start justify-start mb-[21px] sm:ml-[0] sm:mt-[0] mt-[18px] pb-[85px] w-[100%]">
                      <Text
                        className="font-medium text-gray_974 text-left w-[auto]"
                        variant="body43"
                      >
                        About
                      </Text>
                      <div className="flex flex-col items-start justify-start pr-[2px] py-[2px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_815 text-left w-[auto]"
                          variant="body54"
                        >
                          Our story
                        </Text>
                        <Text
                          className="font-normal mt-[10px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body54"
                        >
                          Become a Zola vendor
                        </Text>
                        <Text
                          className="font-normal mt-[12px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body59"
                        >
                          Refer a friend
                        </Text>
                        <Text
                          className="font-normal mt-[13px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body59"
                        >
                          Reviews
                        </Text>
                        <Text
                          className="font-normal mt-[12px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body54"
                        >
                          Careers
                        </Text>
                        <Text
                          className="font-normal mt-[13px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body59"
                        >
                          Press
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[21px] items-start justify-start sm:ml-[0] sm:mt-[0] my-[19px] pb-[87px] w-[100%]">
                      <Text
                        className="font-medium text-gray_974 text-left w-[auto]"
                        variant="body43"
                      >
                        Advice and support
                      </Text>
                      <div className="flex flex-col items-start justify-end pr-[2px] py-[2px] w-[100%]">
                        <Text
                          className="font-normal not-italic text-gray_815 text-left w-[auto]"
                          variant="body59"
                        >
                          Expert advice
                        </Text>
                        <Text
                          className="font-normal mt-[10px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body50"
                        >
                          FAQs
                        </Text>
                        <Text
                          className="font-normal mt-[12px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body59"
                        >
                          Track order
                        </Text>
                        <Text
                          className="font-normal mt-[13px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body59"
                        >
                          Start a return
                        </Text>
                        <Text
                          className="font-normal mt-[13px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body54"
                        >
                          Return policy
                        </Text>
                        <Text
                          className="font-normal mt-[10px] not-italic text-gray_815 text-left w-[auto]"
                          variant="body54"
                        >
                          Contact us
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex md:flex-1 flex-col items-start justify-center p-[40px] sm:px-[20px] md:w-[100%] w-[22%]">
                    <Img
                      src="images/img_svg_black_905.svg"
                      className="h-[20px] mt-[20px] w-[auto]"
                      alt="svg One"
                    />
                    <Text
                      className="font-medium mt-[23px] text-gray_974 text-left w-[auto]"
                      variant="body47"
                    >
                      For all the days along the way
                    </Text>
                    <div className="flex flex-col gap-[8px] items-start justify-start mt-[37px] w-[auto]">
                      <div className="flex flex-row items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-black_905 text-left w-[auto]"
                          variant="body54"
                        >
                          Log in
                        </Text>
                        <Img
                          src="images/img_arrowright_black_905.svg"
                          className="h-[22px] w-[auto]"
                          alt="arrowright Five"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-start w-[100%]">
                        <Text
                          className="font-semibold text-black_905 text-left w-[auto]"
                          variant="body54"
                        >
                          Find a couple
                        </Text>
                        <Img
                          src="images/img_arrowright_black_905.svg"
                          className="h-[22px] w-[auto]"
                          alt="arrowright Six"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-[4px] items-start justify-start mb-[82px] mt-[40px] pb-[6.84px] pr-[8.3px] w-[auto]">
                      <Button className="bg-black_905 cursor-pointer font-semibold min-w-[117px] pb-[11.45px] pl-[17px] pr-[17.11px] pt-[9.55px] rounded-[22px] text-[15px] text-center text-white_A700 w-[auto]">
                        Get started
                      </Button>
                      <Img
                        src="images/img_appstorebadgeb853888asvg.svg"
                        className="h-[44px] w-[131px]"
                        alt="appstorebadgeb853888asvg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between p-[34px] sm:px-[20px] w-[100%]">
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-[20px] items-start justify-start pb-[5px] md:px-[20px] md:w-[100%] w-[34%]">
                  <Text
                    className="font-normal md:mt-[0] mt-[20px] not-italic text-black_905 text-left w-[auto]"
                    variant="body61"
                  >
                    Privacy
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[23px] md:mt-[0] mt-[19px] not-italic text-black_905 text-left w-[auto]"
                    variant="body67"
                  >
                    Terms
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[26px] md:mt-[0] mt-[20px] not-italic text-black_905 text-left w-[auto]"
                    variant="body61"
                  >
                    Do Not Sell / Share My Personal Information
                  </Text>
                  <Text
                    className="font-normal md:ml-[0] ml-[30px] md:mt-[0] mt-[20px] not-italic text-black_905 text-left w-[auto]"
                    variant="body61"
                  >
                    Web accessibility
                  </Text>
                  <Img
                    src="images/img_trash_black_900.svg"
                    className="h-[50px] md:ml-[0] ml-[25px] w-[50px]"
                    alt="trash"
                  />
                </div>
                <div className="flex items-start justify-start md:px-[20px] w-[auto]">
                  <Text
                    className="font-normal not-italic text-black_905 text-left w-[auto]"
                    variant="body61"
                  >
                    © 2023 Zola, Inc. All rights reserved.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RawPage;
