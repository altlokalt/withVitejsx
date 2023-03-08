import React from "react";

import { Text, Img, List, Line, Button } from "components";

const CompanyDetailPage = () => {
  return (
    <>
      <div className="bg-gray_907 flex sm:flex-col md:flex-col flex-row font-urbanist sm:gap-[20px] md:gap-[20px] items-start mx-[auto] pt-[15px] px-[15px] w-[100%]">
        <div className="flex items-center justify-start md:ml-[0] ml-[9px] md:mt-[0] mt-[7px] md:px-[20px] md:w-[100%] w-[70%]">
          <div className="flex flex-col items-start justify-start w-[100%]">
            <div className="bg-gray_70 flex flex-row items-start justify-start p-[5px] rounded-[8px] md:w-[100%] w-[19%]">
              <Text
                className="font-normal ml-[10px] mt-[2px] not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
                variant="body59"
              >
                Company
              </Text>
              <Text
                className="font-normal ml-[26px] not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
                variant="body59"
              >
                &gt;
              </Text>
              <Text
                className="font-normal ml-[8px] mt-[2px] not-italic text-gray_965 text-left tracking-[0.14px] w-[auto]"
                variant="body59"
              >
                Open
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between mt-[34px] md:w-[100%] w-[99%]">
              <Img
                src="defaultNoData.png"
                className="h-[432px] sm:h-[auto] object-cover rounded-[12px] md:w-[100%] w-[auto]"
                alt="Rectangle2054"
              />
              <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 tracking-[0.32px] w-[auto]"
                      variant="body26"
                    >
                      S.I.P AS - Minfuel.no
                    </Text>
                    <Text
                      className="font-normal leading-[28.80px] not-italic text-gray_500_ab text-left tracking-[0.16px] w-[100%]"
                      variant="body50"
                    >
                      Minfuel.no er en norsk nettplattform som gir en oversikt
                      over gjeldende priser på bensin, diesel, bompenge og ved
                      hvor som helst i Norge.
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[32px] grid grid-cols-2 mt-[20px] w-[70%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                      <Img
                        src="images/img_ellipse1015_42x42.png"
                        className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                        alt="Ellipse1015"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
                          variant="body59"
                        >
                          Creator
                        </Text>
                        <Text
                          className="font-normal not-italic text-left text-white_A700 tracking-[0.16px] w-[auto]"
                          variant="body50"
                        >
                          Minfuel team
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                      <Img
                        src="images/img_ellipse1016.png"
                        className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                        alt="Ellipse1016"
                      />
                      <div className="flex flex-col items-start justify-end w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
                          variant="body59"
                        >
                          Owner
                        </Text>
                        <Text
                          className="font-normal mt-[2px] not-italic text-left text-white_A700 tracking-[0.16px] w-[auto]"
                          variant="body50"
                        >
                          S.I.P AS
                        </Text>
                      </div>
                    </div>
                  </List>
                  <Line className="bg-gray_123 h-[1px] mt-[20px] w-[100%]" />
                  <div className="flex sm:flex-col flex-row gap-[40px] items-start justify-start mt-[22px] pb-[2px] md:w-[100%] w-[92%]">
                    <div className="flex flex-col gap-[13px] items-start justify-start pt-[2px] sm:w-[100%] w-[37%]">
                      <Text
                        className="font-normal not-italic text-gray_500_ab text-left tracking-[0.16px] w-[auto]"
                        variant="body50"
                      >
                        timer med tjenester
                      </Text>
                      <div className="flex flex-row items-center justify-end w-[100%]">
                        <Button className="bg-red_509 cursor-pointer font-normal h-[44px] not-italic py-[10px] rounded-[8px] text-[20px] text-center text-white_A700 tracking-[0.20px] w-[44px]">
                          09
                        </Button>
                        <Img
                          src="images/img_user_white_a700_10x10.svg"
                          className="h-[10px] ml-[4px] w-[10px]"
                          alt="user"
                        />
                        <Button className="bg-bluegray_500 cursor-pointer font-normal h-[44px] ml-[4px] not-italic py-[10px] rounded-[8px] text-[20px] text-center text-white_A700 tracking-[0.20px] w-[44px]">
                          til
                        </Button>
                        <Img
                          src="images/img_user_white_a700_10x10.svg"
                          className="h-[10px] ml-[4px] w-[10px]"
                          alt="user One"
                        />
                        <Button className="bg-red_509 cursor-pointer font-normal h-[44px] ml-[4px] not-italic py-[10px] rounded-[8px] text-[20px] text-center text-white_A700 tracking-[0.20px] w-[44px]">
                          18
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start pt-[2px] sm:w-[100%] w-[55%]">
                      <Text
                        className="font-normal not-italic text-gray_500_ab text-left tracking-[0.16px] w-[auto]"
                        variant="body50"
                      >
                        Type tjeneste
                      </Text>
                      <div className="flex flex-row gap-[10px] items-center justify-start w-[100%]">
                        <Img
                          src="images/img_sort_white_a700_32x32.svg"
                          className="h-[32px] w-[32px]"
                          alt="sort"
                        />
                        <Text
                          className="font-semibold text-left text-white_A700 tracking-[0.20px] w-[auto]"
                          variant="body43"
                        >
                          Abonnenment. GRATIS
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row font-roboto sm:gap-[20px] items-start justify-start mt-[38px] md:w-[100%] w-[93%]">
                    <div className="flex flex-row gap-[13px] items-center justify-start sm:w-[100%] w-[60%]">
                      <Button className="flex h-[50px] items-center justify-center outline outline-[0.5px] outline-gray_123 p-[13px] rounded-[8px] w-[50px]">
                        <Img
                          src="images/img_favorite_red_603.svg"
                          className="h-[24px]"
                          alt="favorite"
                        />
                      </Button>
                      <div className="bg-bluegray_500 flex items-center justify-start rounded-[8px] w-[auto]">
                        <Text
                          className="bg-red_509 font-black h-[40px] mb-[9px] pb-[11px] pl-[15px] sm:pr-[20px] pr-[25px] pt-[6px] rounded-[15px] text-left text-shadow-ts3 text-white_A700 w-[137px]"
                          variant="body47"
                        >
                          Til Nettsted
                        </Text>
                      </div>
                    </div>
                    <div className="bg-bluegray_500 flex items-end justify-start mb-[4px] sm:ml-[0] ml-[3px] pb-[5px] px-[5px] rounded-[8px] sm:w-[100%] w-[auto]">
                      <Text
                        className="bg-red_509 font-black h-[40px] sm:pl-[20px] pl-[29px] pr-[6px] py-[8px] rounded-[15px] text-left text-shadow-ts3 text-white_A700 w-[156px]"
                        variant="body47"
                      >
                        Veibeskrivelse
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[20px] items-start justify-start mt-[54px] w-[100%]">
              <Text
                className="font-semibold text-left text-white_A700 w-[auto]"
                variant="body37"
              >
                Bla gjennom flere lignende
              </Text>
              <List
                className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center pb-[8px] pr-[8px] w-[100%]"
                orientation="horizontal"
              >
                <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs70 w-[100%]">
                  <div className="h-[140px] relative w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                      alt="Rectangle2044"
                    />
                    <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                      <Button className="bg-gray_900_27 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                        2h 4m 32s
                      </Button>
                      <Button className="bg-gray_900_27 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                        <Img
                          src="images/img_clock_white_a700_30x30.svg"
                          className=""
                          alt="clock"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:ml-[0] ml-[8px] md:w-[100%] w-[86%]">
                    <div className="flex flex-col items-start justify-start pt-[2px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                        variant="body50"
                      >
                        Person Melirik Kesamping
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                        variant="body67"
                      >
                        By Eleanor Pena
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[38px] items-center justify-between w-[100%]">
                      <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.10px] w-[auto]"
                          variant="body75"
                        >
                          Skjer ved
                        </Text>
                        <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                          <Img
                            src="images/img_sort_gray_965.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort One"
                          />
                          <Text
                            className="font-normal not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
                            variant="body59"
                          >
                            HORTEN
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-gray_965 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                        Les mer
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs70 w-[100%]">
                  <div className="h-[140px] relative w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                      alt="Rectangle2044 One"
                    />
                    <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                      <Button className="bg-gray_900_27 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                        2h 4m 32s
                      </Button>
                      <Button className="bg-gray_900_27 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                        <Img
                          src="images/img_clock_white_a700_30x30.svg"
                          className=""
                          alt="clock One"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:ml-[0] ml-[8px] md:w-[100%] w-[86%]">
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                        variant="body50"
                      >
                        Building Reflection Xd
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                        variant="body67"
                      >
                        By Eleanor Pena
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[38px] items-center justify-between w-[100%]">
                      <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.10px] w-[auto]"
                          variant="body75"
                        >
                          Skjer ved
                        </Text>
                        <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                          <Img
                            src="images/img_sort_gray_965.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Two"
                          />
                          <Text
                            className="font-normal not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
                            variant="body59"
                          >
                            HORTEN
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-gray_965 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                        Les mer
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs70 w-[100%]">
                  <div className="h-[140px] relative w-[100%]">
                    <Img
                      src="images/img_rectangle2044_11.png"
                      className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                      alt="Rectangle2044 Two"
                    />
                    <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                      <Button className="bg-gray_900_27 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                        2h 4m 32s
                      </Button>
                      <Button className="bg-gray_900_27 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                        <Img
                          src="images/img_clock_white_a700_30x30.svg"
                          className=""
                          alt="clock Two"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:ml-[0] ml-[8px] md:w-[100%] w-[86%]">
                    <div className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                        variant="body50"
                      >
                        Natural Atomic Circle
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                        variant="body67"
                      >
                        By Eleanor Pena
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[38px] items-center justify-between w-[100%]">
                      <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.10px] w-[auto]"
                          variant="body75"
                        >
                          Skjer ved
                        </Text>
                        <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                          <Img
                            src="images/img_sort_gray_965.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Three"
                          />
                          <Text
                            className="font-normal not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
                            variant="body59"
                          >
                            HORTEN
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-gray_965 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                        Les mer
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 flex-col gap-[20px] justify-start p-[6px] rounded-[15px] shadow-bs70 w-[100%]">
                  <div className="h-[140px] relative w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[140px] m-[auto] object-cover rounded-[12px] w-[100%]"
                      alt="Rectangle2044 Three"
                    />
                    <div className="absolute flex flex-row gap-[8px] items-center justify-between right-[3%] top-[6%] w-[48%]">
                      <Button className="bg-gray_900_27 cursor-pointer font-normal min-w-[75px] not-italic py-[6px] rounded-[14px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                        2h 4m 32s
                      </Button>
                      <Button className="bg-gray_900_27 flex h-[30px] items-center justify-center p-[6px] rounded-[50%] w-[30px]">
                        <Img
                          src="images/img_clock_white_a700_30x30.svg"
                          className=""
                          alt="clock Three"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start mb-[12px] md:ml-[0] ml-[8px] md:w-[100%] w-[86%]">
                    <div className="flex flex-col items-start justify-start pr-[2px] pt-[2px] md:w-[100%] w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                        variant="body50"
                      >
                        Oldtown Artistic Alley
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                        variant="body67"
                      >
                        By Eleanor Pena
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[38px] items-center justify-between w-[100%]">
                      <div className="flex flex-col font-outfit items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.10px] w-[auto]"
                          variant="body75"
                        >
                          Skjer ved
                        </Text>
                        <div className="flex flex-row font-urbanist gap-[6px] items-center justify-start mt-[3px] w-[100%]">
                          <Img
                            src="images/img_sort_gray_965.svg"
                            className="h-[16px] w-[16px]"
                            alt="sort Four"
                          />
                          <Text
                            className="font-normal not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
                            variant="body59"
                          >
                            HORTEN
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-gray_965 cursor-pointer font-normal font-urbanist min-w-[88px] not-italic py-[8px] rounded-[8px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                        Les mer
                      </Button>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="bg-white_A700_4c border-[1px] border-solid border-white_A700 flex h-[39px] md:h-[auto] items-center justify-center mb-[432px] md:mt-[0] mt-[718px] md:px-[20px] rounded-[19px] w-[47px]">
          <Img
            src="images/img_arrowright_white_a700.svg"
            className="h-[13px] w-[auto]"
            alt="arrowright"
          />
        </div>
        <div className="bg-white_A700 flex flex-col gap-[36px] items-center justify-end md:ml-[0] ml-[14px] mr-[7px] outline outline-[0.5px] outline-gray_123 p-[12px] md:px-[20px] md:w-[100%] w-[26%]">
          <div className="flex flex-col gap-[25px] justify-start mt-[31px] md:w-[100%] w-[95%]">
            <div className="flex flex-row items-start justify-between w-[100%]">
              <Text
                className="font-semibold text-black_908 text-left w-[auto]"
                variant="body47"
              >
                Utvalgt Bedrift/Selskap
              </Text>
              <Text
                className="font-semibold text-gray_965 text-right tracking-[0.14px] w-[auto]"
                variant="body59"
              >
                Se Alt
              </Text>
            </div>
            <div className="bg-white_A700 flex flex-col items-start justify-start md:ml-[0] ml-[6px] mr-[21px] pb-[14px] px-[14px] rounded-[15px] shadow-bs72 md:w-[100%] w-[93%]">
              <div className="md:h-[120px] h-[204px] md:ml-[0] ml-[2px] relative w-[99%]">
                <div className="absolute flex flex-col left-[2%] top-[0] w-[91%]">
                  <Img
                    src="defaultNoData.png"
                    className="h-[120px] mx-[auto] object-cover rounded-[12px] w-[100%]"
                    alt="Rectangle2043"
                  />
                  <Img
                    src="defaultNoData.png"
                    className="h-[52px] ml-[92px] mt-[-20px] rounded-[50%] w-[52px] z-[1]"
                    alt="Ellipse1019"
                  />
                </div>
                <div className="absolute bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] w-[100%]">
                  <div className="flex flex-row items-end justify-evenly w-[100%]">
                    <div className="flex flex-col justify-start mt-[28px] pb-[7px] pr-[7px] w-[60%]">
                      <div className="h-[18px] mr-[10px] relative w-[95%]">
                        <Text
                          className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-black_908 text-center tracking-[0.14px] w-[max-content]"
                          variant="body59"
                        >
                          Minfuel - Alt innen Energi
                        </Text>
                        <Img
                          src="images/img_checkmark_blue_a202.svg"
                          className="absolute h-[18px] right-[0] top-[0] w-[18px]"
                          alt="checkmark"
                        />
                      </div>
                      <Text
                        className="font-normal md:ml-[0] ml-[27px] mt-[3px] not-italic text-center text-gray_523 tracking-[0.12px] w-[auto]"
                        variant="body67"
                      >
                        @minfuel
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[6px] items-center justify-start mb-[4px] w-[39%]">
                      <div className="font-roboto md:h-[28px] h-[29px] relative w-[100%]">
                        <div className="absolute bg-red_509 h-[28px] inset-[0] justify-center m-[auto] rounded-[14px] shadow-bs68 w-[100%]"></div>
                        <Text
                          className="absolute font-black inset-x-[0] mx-[auto] text-left text-white_A700 top-[0] w-[max-content]"
                          variant="body47"
                        >
                          Nettsted
                        </Text>
                      </div>
                      <Button className="bg-gray_965 cursor-pointer font-normal font-outfit min-w-[81px] not-italic py-[8px] rounded-[16px] text-[12px] text-center text-white_A700 tracking-[0.12px] w-[auto]">
                        Følg dem
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="bg-gray_123 h-[1px] mt-[10px] w-[85%]" />
              <Text
                className="font-normal leading-[21.60px] mt-[11px] not-italic text-gray_523 text-left tracking-[0.12px] sm:w-[100%] w-[85%]"
                variant="body67"
              >
                Hvor mye Koster det å kjøre fra A til B? i henhold til din
                biltype! f.eks oslo til halden....
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-[18px] items-center justify-start md:w-[100%] w-[98%]">
            <div className="flex flex-row items-start justify-between md:w-[100%] w-[99%]">
              <Text
                className="font-semibold text-black_908 text-left w-[auto]"
                variant="body47"
              >
                Nylig lagt til AS/ENK
              </Text>
              <Text
                className="font-semibold text-gray_965 text-right tracking-[0.14px] w-[auto]"
                variant="body59"
              >
                Se Alt
              </Text>
            </div>
            <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
              <List
                className="flex-col gap-[14.5px] grid items-center w-[99%]"
                orientation="vertical"
              >
                <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                  <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between mb-[10px] w-[53%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                      alt="Ellipse1018"
                    />
                    <div className="flex flex-col items-start justify-start pt-[2px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                        variant="body50"
                      >
                        Veihjelp AS #4390
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                        variant="body67"
                      >
                        From Ragnarok
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-red_509 cursor-pointer font-black font-roboto leading-[normal] min-w-[109px] mt-[12px] py-[9px] rounded-[15px] shadow-bs68 text-[18px] text-center text-white_A700 w-[auto]">
                    Nettsted
                  </Button>
                </div>
                <Line className="self-center h-[1px] bg-gray_123 w-[78%]" />
                <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                  <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between mb-[10px] w-[59%]">
                    <Img
                      src="images/img_ellipse1018_6.png"
                      className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                      alt="Ellipse1018 One"
                    />
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                        variant="body50"
                      >
                        Vestfold Kunst #3486
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                        variant="body67"
                      >
                        From Doodles
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-red_509 cursor-pointer font-black font-roboto leading-[normal] min-w-[109px] mt-[12px] py-[9px] rounded-[15px] shadow-bs68 text-[18px] text-center text-white_A700 w-[auto]">
                    Nettsted
                  </Button>
                </div>
                <Line className="self-center h-[1px] bg-gray_123 w-[78%]" />
                <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                  <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between mb-[10px] w-[52%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                      alt="Ellipse1018 Two"
                    />
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                        variant="body50"
                      >
                        Minfuel.no #2766
                      </Text>
                      <Text
                        className="font-normal mt-[5px] not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                        variant="body67"
                      >
                        From Minfuel23
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-red_509 cursor-pointer font-black font-roboto leading-[normal] min-w-[109px] mt-[12px] py-[9px] rounded-[15px] shadow-bs68 text-[18px] text-center text-white_A700 w-[auto]">
                    Nettsted
                  </Button>
                </div>
                <Line className="self-center h-[1px] bg-gray_123 w-[78%]" />
                <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                  <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between mb-[10px] w-[51%]">
                    <Img
                      src="images/img_ellipse1018_8.png"
                      className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                      alt="Ellipse1018 Three"
                    />
                    <div className="flex flex-col items-start justify-start pt-[2px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                        variant="body50"
                      >
                        Valiantlynx #2761
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                        variant="body67"
                      >
                        From valiantlynx
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-red_509 cursor-pointer font-black font-roboto leading-[normal] min-w-[109px] mt-[12px] py-[9px] rounded-[15px] shadow-bs68 text-[18px] text-center text-white_A700 w-[auto]">
                    Nettsted
                  </Button>
                </div>
                <Line className="self-center h-[1px] bg-gray_123 w-[78%]" />
                <div className="flex flex-row items-start justify-between my-[0] w-[100%]">
                  <div className="flex flex-row font-urbanist gap-[14px] items-center justify-between mb-[10px] w-[56%]">
                    <Img
                      src="images/img_ellipse1018.png"
                      className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                      alt="Ellipse1018 Four"
                    />
                    <div className="flex flex-col items-start justify-end w-[auto]">
                      <Text
                        className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                        variant="body50"
                      >
                        Sammadag AS #22
                      </Text>
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                        variant="body67"
                      >
                        From altlokaltstudio
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-red_509 cursor-pointer font-black font-roboto leading-[normal] min-w-[109px] mt-[12px] py-[9px] rounded-[15px] shadow-bs68 text-[18px] text-center text-white_A700 w-[auto]">
                    Nettsted
                  </Button>
                </div>
              </List>
              <div className="flex items-center justify-start w-[100%]">
                <div className="flex flex-row gap-[19px] items-start justify-between w-[100%]">
                  <div className="flex flex-col font-urbanist gap-[10px] items-start justify-start w-[auto]">
                    <div className="flex flex-row gap-[14px] items-center justify-start md:ml-[0] ml-[5px] md:w-[100%] w-[84%]">
                      <Img
                        src="defaultNoData.png"
                        className="h-[42px] md:h-[auto] rounded-[50%] w-[42px]"
                        alt="Ellipse1018 Five"
                      />
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
                          variant="body50"
                        >
                          Husvask ENK #3723
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
                          variant="body67"
                        >
                          From vestfoldvask
                        </Text>
                      </div>
                    </div>
                    <div className="md:h-[243px] h-[258px] relative w-[100%]">
                      <div className="absolute bg-gray_965 bottom-[0] h-[233px] inset-x-[0] mx-[auto] rounded-[15px] w-[234px]"></div>
                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[91%]">
                        <Button className="bg-white_A700 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] shadow-bs69 w-[50px]">
                          <Img
                            src="images/img_question_gray_965.svg"
                            className="h-[24px]"
                            alt="question"
                          />
                        </Button>
                        <Text
                          className="font-normal mt-[14px] not-italic text-left text-white_A700 tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Kundesenter
                        </Text>
                        <div className="flex flex-col gap-[54px] items-center justify-start mt-[12px] w-[100%]">
                          <Text
                            className="font-normal leading-[25.20px] not-italic text-center text-gray_423 tracking-[0.14px]"
                            variant="body59"
                          >
                            Har du støtt på problemer?
                            <br />
                            Værsåsnill kontakt oss
                          </Text>
                          <Button className="bg-white_A700 cursor-pointer font-normal min-w-[206px] not-italic py-[11px] rounded-[10px] text-[14px] text-center text-gray_965 tracking-[0.14px] w-[auto]">
                            Gå til hjelpesenteret
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-red_509 cursor-pointer font-black font-roboto leading-[normal] mb-[257px] min-w-[109px] mt-[12px] py-[9px] rounded-[15px] shadow-bs68 text-[18px] text-center text-white_A700 w-[auto]">
                    Nettsted
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailPage;
