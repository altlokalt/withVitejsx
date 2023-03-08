import React from "react";

import { Text, List, Img, Button } from "components";

const PrPage = () => {
  return (
    <>
      <div className="flex flex-col font-roboto items-start justify-start mx-[auto] pb-[316px] w-[100%]">
        <div className="flex items-center sm:pr-[20px] pr-[37px] w-[100%]">
          <div className="md:h-[2222px] h-[2223px] sm:h-[2432px] max-w-[1561px] mx-[auto] md:px-[20px] relative w-[100%]">
            <div className="absolute bg-gray_72 md:h-[2222px] h-[2223px] sm:h-[2432px] inset-[0] justify-center m-[auto] w-[100%]">
              <div className="bg-gray_72 h-[2222px] m-[auto] w-[100%]"></div>
              <div className="absolute flex flex-col gap-[32px] h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                <div className="h-[1320px] sm:h-[1530px] md:h-[846px] relative w-[100%]">
                  <div className="absolute h-[1320px] sm:h-[1530px] md:h-[846px] inset-[0] justify-center m-[auto] w-[100%]">
                    <div className="absolute bg-gray_72 flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[98%]">
                      <div className="bg-gray_72 h-[474px] w-[100%]"></div>
                    </div>
                    <div className="absolute bg-gray_72 bottom-[0] sm:h-[1530px] md:h-[846px] h-[904px] inset-x-[0] mx-[auto] w-[100%]">
                      <div className="absolute md:h-[846px] h-[904px] inset-[0] justify-center m-[auto] md:w-[100%] w-[98%]">
                        <div className="absolute bg-gray_72 bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] sm:pr-[20px] pr-[29px] pt-[29px] w-[100%]">
                          <div className="flex flex-col gap-[26px] items-start justify-start mt-[493px] pt-[36px] md:w-[100%] w-[auto]">
                            <div className="flex flex-row gap-[1092.73px] md:gap-[40px] items-start justify-start sm:px-[20px] md:px-[40px] px-[48px] md:w-[100%] w-[auto]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-bold text-gray_932 text-left w-[auto]"
                                  variant="body23"
                                >
                                  Produsenter
                                </Text>
                              </div>
                              <Text
                                className="bg-bluegray_63 font-medium justify-center pl-[19px] py-[8px] rounded-[8px] text-center text-gray_932 w-[auto]"
                                variant="body50"
                              >
                                Se alle
                              </Text>
                            </div>
                            <List
                              className="sm:flex-col flex-row gap-[16px] grid md:grid-cols-1 grid-cols-2 justify-start pb-[8px] sm:px-[20px] md:px-[40px] px-[48px] md:w-[100%] w-[auto]"
                              orientation="horizontal"
                            >
                              <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_932 text-left tracking-[0.03px] w-[auto]"
                                    variant="body43"
                                  >
                                    altlokalt.com annonser
                                  </Text>
                                </div>
                                <div className="bg-gradient32  flex items-center justify-start rounded-[8px] w-[100%]">
                                  <div className="bg-white_A700 border-[1px] border-black_900 border-solid h-[180px] pb-[148px] sm:pl-[20px] pl-[213.33px] md:pl-[40px] pr-[8px] pt-[8px] relative rounded-[8px] w-[320px]">
                                    <Img
                                      src="images/img_div_17.png"
                                      className="h-[180px] m-[auto] object-cover rounded-[8px] w-[320px]"
                                      alt="div"
                                    />
                                    <div className="absolute h-[180px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                      <Img
                                        src="defaultNoData.png"
                                        className="h-[180px] m-[auto] object-cover w-[320px]"
                                        alt="div One"
                                      />
                                      <div className="absolute bg-gray_900_7a h-[24px] right-[1%] rounded-[4px] top-[4%] w-[32%]">
                                        <div className="absolute bg-gray_900_7a h-[24px] inset-[0] justify-center m-[auto] rounded-[4px] w-[97%]"></div>
                                        <Text
                                          className="absolute font-medium h-[max-content] inset-y-[0] my-[auto] right-[0] text-left text-white_A700 w-[auto]"
                                          variant="body59"
                                        >
                                          16 Leverandører
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_932 text-left tracking-[0.03px] w-[auto]"
                                    variant="body43"
                                  >
                                    altlokalt.com Databaser
                                  </Text>
                                </div>
                                <div className="bg-gradient32  flex items-center justify-start rounded-[8px] w-[100%]">
                                  <div className="h-[180px] pb-[148px] pl-[205.36px] sm:pl-[20px] md:pl-[40px] pr-[8px] pt-[8px] relative rounded-[8px] w-[320px]">
                                    <Img
                                      src="images/img_div_19.png"
                                      className="h-[180px] m-[auto] object-cover rounded-[8px] w-[320px]"
                                      alt="div One"
                                    />
                                    <div className="absolute h-[180px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                      <Img
                                        src="defaultNoData.png"
                                        className="h-[180px] m-[auto] object-cover w-[320px]"
                                        alt="div One One"
                                      />
                                      <Text
                                        className="absolute bg-gray_900_7a font-medium h-[24px] sm:pl-[20px] pl-[28px] py-[3px] right-[3%] rounded-[4px] text-left text-white_A700 top-[4%] w-[106px]"
                                        variant="body59"
                                      >
                                        246 Kampanjer
                                      </Text>
                                      <div className="absolute bottom-[0] flex items-center justify-start pb-[12px] pl-[16px] pr-[20px] right-[0] w-[auto]">
                                        <div className="flex items-center justify-start pl-[4px] pr-[12.21px] py-[4px] w-[auto]">
                                          <Text
                                            className="font-medium text-center text-white_A700 w-[auto]"
                                            variant="body50"
                                          >
                                            125 heftig avslag
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
                        <div className="absolute flex flex-col gap-[18px] inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[auto]">
                          <div className="flex flex-row gap-[1162.16px] md:gap-[40px] items-start justify-start sm:px-[20px] md:px-[40px] px-[48px] md:w-[100%] w-[auto]">
                            <div className="flex items-center justify-start pb-[3px] w-[auto]">
                              <Text
                                className="font-bold text-gray_932 text-left w-[auto]"
                                variant="body23"
                              >
                                .Ekspert
                              </Text>
                            </div>
                            <div className="bg-gray_900_15 flex items-start justify-start p-[9px] rounded-[8px] w-[auto]">
                              <Text
                                className="font-medium md:ml-[0] ml-[36px] text-center text-gray_932 w-[auto]"
                                variant="body50"
                              >
                                Se alle
                              </Text>
                            </div>
                          </div>
                          <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                            <div className="flex md:flex-col flex-row gap-[16px] items-start justify-end pb-[8px] pl-[8px] w-[100%]">
                              <List
                                className="md:flex-1 sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 grid-cols-3 md:w-[100%] w-[30%]"
                                orientation="horizontal"
                              >
                                <div className="h-[192px] sm:ml-[0] relative rounded-[8px] shadow-bs86 w-[100%]">
                                  <Img
                                    src="defaultNoData.png"
                                    className="h-[192px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                    alt="image"
                                  />
                                  <div className="absolute bg-bluegray_900_4c flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[8px] rounded-[8px] w-[100%]">
                                    <div className="flex items-end justify-start mt-[152px] pl-[2px] py-[2px] md:w-[100%] w-[auto]">
                                      <Text
                                        className="font-medium text-left text-white_A700 w-[auto]"
                                        variant="body50"
                                      >
                                        7
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[192px] sm:ml-[0] relative rounded-[8px] shadow-bs86 w-[100%]">
                                  <Img
                                    src="images/img_image_87.png"
                                    className="h-[192px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                    alt="image One"
                                  />
                                  <div className="absolute bg-bluegray_900_4c flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[8px] rounded-[8px] w-[100%]">
                                    <div className="flex items-end justify-start mt-[152px] pl-[2px] py-[2px] md:w-[100%] w-[auto]">
                                      <Text
                                        className="font-medium text-left text-white_A700 w-[auto]"
                                        variant="body50"
                                      >
                                        4
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[192px] sm:ml-[0] relative rounded-[8px] shadow-bs86 w-[100%]">
                                  <Img
                                    src="defaultNoData.png"
                                    className="h-[192px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                    alt="image Two"
                                  />
                                  <div className="absolute bg-bluegray_900_4c flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[8px] rounded-[8px] w-[100%]">
                                    <div className="flex items-end justify-start mt-[152px] pl-[2px] py-[2px] md:w-[100%] w-[auto]">
                                      <Text
                                        className="font-medium text-left text-white_A700 w-[auto]"
                                        variant="body50"
                                      >
                                        0
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </List>
                              <List
                                className="md:flex-1 sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 grid-cols-4 md:w-[100%] w-[40%]"
                                orientation="horizontal"
                              >
                                <div className="flex items-center justify-start rounded-[8px] shadow-bs86 w-[100%]">
                                  <div className="bg-gray_707 flex items-center justify-start rounded-[8px] w-[100%]">
                                    <div className="flex items-center justify-start rounded-[8px] w-[100%]">
                                      <div className="h-[192px] relative rounded-[8px] w-[100%]">
                                        <Img
                                          src="images/img_compressedzlny_192x136.png"
                                          className="h-[192px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                          alt="compressedzlNY"
                                        />
                                        <div className="absolute h-[192px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                          <Img
                                            src="images/img_compressedzlny_192x136.png"
                                            className="h-[192px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                            alt="compressedzlNY One"
                                          />
                                          <div className="absolute bottom-[4%] flex flex-col gap-[16px] justify-start left-[6%] w-[59%]">
                                            <div className="border-[4px] border-solid border-white_A700 h-[40px] md:ml-[0] ml-[40px] rounded-[50%] w-[40px]"></div>
                                            <div className="flex flex-col items-center justify-start mr-[16px] pt-[4px] md:w-[100%] w-[79%]">
                                              <div className="flex items-start justify-start p-[2px] w-[100%]">
                                                <Text
                                                  className="font-medium md:ml-[0] ml-[21px] text-left text-white_A700 w-[auto]"
                                                  variant="body50"
                                                >
                                                  2
                                                </Text>
                                              </div>
                                              <div className="flex items-end justify-end w-[100%]">
                                                <Text
                                                  className="font-medium text-left text-white_A700 w-[auto]"
                                                  variant="body50"
                                                >
                                                  1,141
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="absolute bg-yellow_702 h-[24px] right-[6%] rounded-[50%] top-[4%] w-[24px]"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center justify-start rounded-[8px] shadow-bs86 w-[100%]">
                                  <div className="bg-gray_707 flex items-center justify-start rounded-[8px] w-[100%]">
                                    <div className="flex items-center justify-start rounded-[8px] w-[100%]">
                                      <div className="h-[192px] relative rounded-[8px] w-[100%]">
                                        <Img
                                          src="images/img_compressednysl_192x136.png"
                                          className="h-[192px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                          alt="compressedNYSL"
                                        />
                                        <div className="absolute h-[192px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                          <Img
                                            src="images/img_compressednysl_192x136.png"
                                            className="h-[192px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                            alt="compressedNYSL One"
                                          />
                                          <div className="absolute bottom-[4%] flex flex-col gap-[16px] justify-start left-[6%] w-[59%]">
                                            <div className="border-[4px] border-solid border-white_A700 h-[40px] md:ml-[0] ml-[40px] rounded-[50%] w-[40px]"></div>
                                            <div className="flex flex-col items-center justify-start mr-[28px] pt-[4px] md:w-[100%] w-[51px]">
                                              <div className="flex items-end justify-start p-[2px] w-[100%]">
                                                <Text
                                                  className="font-medium mr-[15px] text-left text-white_A700 w-[auto]"
                                                  variant="body50"
                                                >
                                                  0
                                                </Text>
                                              </div>
                                              <div className="flex items-end justify-start pl-[2px] py-[2px] w-[100%]">
                                                <Text
                                                  className="font-medium text-left text-white_A700 w-[auto]"
                                                  variant="body50"
                                                >
                                                  870
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="absolute bg-yellow_702 h-[24px] right-[6%] rounded-[50%] top-[4%] w-[24px]"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center justify-start rounded-[8px] shadow-bs86 w-[100%]">
                                  <div className="bg-gray_707 flex items-center justify-start rounded-[8px] w-[100%]">
                                    <div className="flex items-center justify-start rounded-[8px] w-[100%]">
                                      <div className="h-[192px] relative rounded-[8px] w-[100%]">
                                        <Img
                                          src="images/img_compressed5ear_192x136.png"
                                          className="h-[192px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                          alt="compressed5eaR"
                                        />
                                        <div className="absolute h-[192px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                          <Img
                                            src="images/img_compressed5ear_192x136.png"
                                            className="h-[192px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                            alt="compressed5eaR One"
                                          />
                                          <div className="absolute bottom-[4%] flex flex-col gap-[16px] justify-start left-[6%] w-[59%]">
                                            <div className="border-[4px] border-solid border-white_A700 h-[40px] md:ml-[0] ml-[40px] rounded-[50%] w-[40px]"></div>
                                            <div className="flex flex-col items-center justify-start mr-[28px] pt-[4px] md:w-[100%] w-[51px]">
                                              <div className="flex items-end justify-start p-[2px] w-[100%]">
                                                <Text
                                                  className="font-medium mr-[15px] text-left text-white_A700 w-[auto]"
                                                  variant="body50"
                                                >
                                                  7
                                                </Text>
                                              </div>
                                              <div className="flex items-end justify-start pl-[2px] py-[2px] w-[100%]">
                                                <Text
                                                  className="font-medium text-left text-white_A700 w-[auto]"
                                                  variant="body50"
                                                >
                                                  893
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="absolute bg-yellow_702 h-[24px] right-[6%] rounded-[50%] top-[4%] w-[24px]"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center justify-start rounded-[8px] shadow-bs86 w-[100%]">
                                  <div className="bg-gray_707 flex items-center justify-start rounded-[8px] w-[100%]">
                                    <div className="flex items-center justify-start rounded-[8px] w-[100%]">
                                      <div className="h-[192px] relative rounded-[8px] w-[100%]">
                                        <Img
                                          src="images/img_compresseddead_192x136.png"
                                          className="h-[192px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                          alt="compressedDEad"
                                        />
                                        <div className="absolute h-[192px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                          <Img
                                            src="images/img_compresseddead_192x136.png"
                                            className="h-[192px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                            alt="compressedDEad One"
                                          />
                                          <div className="absolute bottom-[4%] flex flex-col gap-[16px] justify-start left-[6%] w-[59%]">
                                            <div className="border-[4px] border-solid border-white_A700 h-[40px] md:ml-[0] ml-[40px] rounded-[50%] w-[40px]"></div>
                                            <div className="flex flex-col items-center justify-start mr-[28px] pt-[4px] md:w-[100%] w-[51px]">
                                              <div className="flex items-end justify-start p-[2px] w-[100%]">
                                                <Text
                                                  className="font-medium mr-[15px] text-left text-white_A700 w-[auto]"
                                                  variant="body50"
                                                >
                                                  0
                                                </Text>
                                              </div>
                                              <div className="flex items-end justify-start p-[2px] w-[100%]">
                                                <Text
                                                  className="font-medium text-left text-white_A700 w-[auto]"
                                                  variant="body50"
                                                >
                                                  971
                                                </Text>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="absolute bg-yellow_702 h-[24px] right-[6%] rounded-[50%] top-[4%] w-[24px]"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </List>
                              <List
                                className="md:flex-1 sm:flex-col flex-row gap-[16px] grid grid-cols-2 md:w-[100%] w-[20%]"
                                orientation="horizontal"
                              >
                                <div className="h-[192px] relative rounded-[8px] shadow-bs86 w-[100%]">
                                  <Img
                                    src="images/img_image_89.png"
                                    className="h-[192px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                    alt="image Seven"
                                  />
                                  <div className="absolute bg-bluegray_900_4c flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[8px] rounded-[8px] w-[100%]">
                                    <div className="flex items-end justify-start mt-[152px] pl-[2px] py-[2px] md:w-[100%] w-[auto]">
                                      <Text
                                        className="font-medium text-left text-white_A700 w-[auto]"
                                        variant="body50"
                                      >
                                        2
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-[192px] relative rounded-[8px] shadow-bs86 w-[100%]">
                                  <Img
                                    src="images/img_image_90.png"
                                    className="h-[192px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                    alt="image Eight"
                                  />
                                  <div className="absolute bg-bluegray_900_4c flex h-[100%] inset-[0] items-start justify-center m-[auto] p-[8px] rounded-[8px] w-[100%]">
                                    <div className="flex items-end justify-start mt-[152px] pl-[2px] py-[2px] md:w-[100%] w-[auto]">
                                      <Text
                                        className="font-medium text-left text-white_A700 w-[auto]"
                                        variant="body50"
                                      >
                                        3
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </List>
                              <div className="h-[192px] relative rounded-[8px] shadow-bs86 md:w-[100%] w-[7%]">
                                <Img
                                  src="images/img_image_192x103.png"
                                  className="h-[192px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                  alt="image Nine"
                                />
                                <div className="absolute bg-bluegray_900_4c flex flex-col gap-[30px] h-[100%] inset-[0] items-start justify-center m-[auto] p-[8px] rounded-[8px] w-[100%]">
                                  <div className="bg-gray_900_8e h-[80px] md:ml-[0] ml-[3px] mt-[42px] rounded-[50%] w-[80px]"></div>
                                  <div className="flex items-end justify-start p-[2px] md:w-[100%] w-[auto]">
                                    <Text
                                      className="font-medium text-left text-white_A700 w-[auto]"
                                      variant="body50"
                                    >
                                      1
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col gap-[26px] inset-x-[0] items-center justify-end mx-[auto] pt-[36px] top-[29%] w-[auto]">
                        <div className="flex sm:flex-col flex-row gap-[1167.1px] md:gap-[40px] items-start justify-start max-w-[1561px] sm:px-[20px] md:px-[40px] px-[48px] w-[100%]">
                          <div className="flex sm:flex-1 items-start justify-start sm:w-[100%] w-[auto]">
                            <Text
                              className="font-bold text-gray_932 text-left w-[auto]"
                              variant="body23"
                            >
                              Leverandører
                            </Text>
                          </div>
                          <Text
                            className="bg-gray_323 font-medium h-[40px] justify-center pl-[27px] pr-[35px] sm:px-[20px] py-[10px] rounded-[8px] text-center text-gray_932 w-[114px]"
                            variant="body50"
                          >
                            Se alle
                          </Text>
                        </div>
                        <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                          <div className="flex md:flex-col flex-row gap-[16px] items-center justify-end pb-[8px] pl-[8px] w-[100%]">
                            <div className="flex relative md:w-[100%] w-[44%]">
                              <div className="flex flex-col gap-[9px] items-start justify-start my-[auto] w-[57%]">
                                <div className="flex items-start justify-start sm:w-[100%] w-[auto]">
                                  <Text
                                    className="font-medium text-gray_932 text-left tracking-[0.03px] w-[auto]"
                                    variant="body43"
                                  >
                                    altlokalt.com Databaser(minfuel)
                                  </Text>
                                </div>
                                <div className="bg-gradient32  flex items-center justify-start rounded-[8px] md:w-[100%] w-[86%]">
                                  <div className="bg-gradient33  h-[180px] relative rounded-[8px] w-[100%]">
                                    <div className="absolute h-[180px] inset-[0] m-[auto] pb-[148px] sm:pl-[20px] pl-[221.27px] md:pl-[40px] pr-[8px] pt-[8px] rounded-[8px] w-[320px]">
                                      <Img
                                        src="images/img_div_180x320.png"
                                        className="h-[180px] m-[auto] object-cover rounded-[8px] w-[320px]"
                                        alt="div Seven"
                                      />
                                      <div className="absolute bg-gradient34  h-[180px] inset-[0] m-[auto] pb-[53px] pl-[46.69px] pr-[46.31px] pt-[52.2px] sm:px-[20px] md:px-[40px] rounded-[8px] w-[320px]">
                                        <div className="flex flex-col gap-[14.8px] h-[100%] items-start justify-start m-[auto] w-[auto]">
                                          <Text
                                            className="font-bold text-left text-white_A700 tracking-[0.17px] w-[auto]"
                                            variant="body23"
                                          >
                                            Coming soon
                                          </Text>
                                          <Text
                                            className="font-normal not-italic text-center text-white_A700 w-[auto]"
                                            variant="body50"
                                          >
                                            2 days 16 hours and 22 minutes
                                          </Text>
                                        </div>
                                        <div className="absolute h-[180px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                          <Img
                                            src="defaultNoData.png"
                                            className="h-[180px] m-[auto] object-cover w-[320px]"
                                            alt="div Eight"
                                          />
                                          <Text
                                            className="absolute bg-gray_900_7a font-medium h-[24px] justify-center pl-[28px] pr-[24px] sm:px-[20px] py-[3px] right-[3%] rounded-[4px] text-left text-white_A700 top-[4%] w-[90px]"
                                            variant="body59"
                                          >
                                            Gratis
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="absolute bottom-[0] flex items-center justify-start pb-[12px] pl-[16px] pr-[20px] right-[0] w-[auto]">
                                      <div className="flex items-center justify-start pl-[4px] pr-[12.21px] py-[4px] w-[auto]">
                                        <Text
                                          className="font-medium text-center text-white_A700 w-[auto]"
                                          variant="body50"
                                        >
                                          Rask responder
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col gap-[9px] items-center justify-start ml-[-37px] my-[auto] w-[49%] z-[1]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_932 text-left tracking-[0.03px] w-[auto]"
                                    variant="body43"
                                  >
                                    Hobbyister
                                  </Text>
                                </div>
                                <div className="bg-gradient32  flex items-center justify-start rounded-[8px] w-[100%]">
                                  <div className="bg-gradient33  flex items-center justify-start rounded-[8px] w-[100%]">
                                    <div className="h-[180px] pb-[148px] sm:pl-[20px] pl-[228.69px] md:pl-[40px] pr-[8px] pt-[8px] relative rounded-[8px] w-[320px]">
                                      <Img
                                        src="images/img_div_10.png"
                                        className="h-[180px] m-[auto] object-cover rounded-[8px] w-[320px]"
                                        alt="div Ten"
                                      />
                                      <div className="absolute h-[180px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                        <Img
                                          src="defaultNoData.png"
                                          className="h-[180px] m-[auto] object-cover w-[320px]"
                                          alt="div Eleven"
                                        />
                                        <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[2%] w-[96%]">
                                          <Text
                                            className="bg-yellow_602 font-medium justify-center mb-[6px] pb-[3.8px] pl-[8px] pr-[8.17px] pt-[2.2px] rounded-[4px] text-gray_932 text-left text-shadow-ts4 w-[auto]"
                                            variant="body59"
                                          >
                                            Nytt
                                          </Text>
                                          <Text
                                            className="bg-gray_900_7a font-medium h-[24px] mt-[4px] pl-[3px] py-[3px] rounded-[4px] text-left text-white_A700 w-[83px]"
                                            variant="body59"
                                          >
                                            Leverandører
                                          </Text>
                                        </div>
                                        <div className="absolute bottom-[0] flex items-center justify-start pb-[12px] pl-[16px] pr-[20px] right-[0] w-[auto]">
                                          <div className="flex items-center justify-start pl-[4px] pr-[12.21px] py-[4px] w-[auto]">
                                            <Text
                                              className="font-medium text-center text-white_A700 w-[auto]"
                                              variant="body50"
                                            >
                                              1 comment
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-col gap-[9px] items-start justify-start md:w-[100%] w-[22%]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-gray_932 text-left tracking-[0.03px] w-[auto]"
                                  variant="body43"
                                >
                                  Leie inn Database
                                </Text>
                              </div>
                              <div className="bg-gradient32  flex items-center justify-start rounded-[8px] w-[100%]">
                                <div className="bg-gradient33  flex items-center justify-start rounded-[8px] w-[100%]">
                                  <div className="h-[180px] pb-[148px] sm:pl-[20px] pl-[221.28px] md:pl-[40px] pr-[8px] pt-[8px] relative rounded-[8px] w-[320px]">
                                    <Img
                                      src="images/img_div_12.png"
                                      className="h-[180px] m-[auto] object-cover rounded-[8px] w-[320px]"
                                      alt="div Fourteen"
                                    />
                                    <div className="absolute h-[180px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                      <Img
                                        src="images/img_div_13.png"
                                        className="h-[180px] m-[auto] object-cover w-[320px]"
                                        alt="div Fifteen"
                                      />
                                      <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[2%] w-[98%]">
                                        <Text
                                          className="bg-yellow_602 font-medium justify-center mb-[6px] pb-[3.8px] pl-[8px] pr-[8.17px] pt-[2.2px] rounded-[4px] text-gray_932 text-left text-shadow-ts4 w-[auto]"
                                          variant="body59"
                                        >
                                          Nyttig
                                        </Text>
                                        <Text
                                          className="bg-gray_900_7a font-medium h-[24px] mt-[4px] p-[3px] rounded-[4px] text-left text-white_A700 w-[90px]"
                                          variant="body59"
                                        >
                                          Leverandører
                                        </Text>
                                      </div>
                                      <div className="absolute bottom-[0] flex items-center justify-start pb-[12px] pl-[16px] pr-[20px] right-[0] w-[auto]">
                                        <div className="flex items-center justify-start pl-[4px] pr-[12.48px] py-[4px] w-[auto]">
                                          <Text
                                            className="font-medium text-center text-white_A700 w-[auto]"
                                            variant="body50"
                                          >
                                            4 comments
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-1 items-end justify-start overflow-auto md:w-[100%] w-[22%]">
                              <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                                <div className="flex items-start justify-start w-[auto]">
                                  <Text
                                    className="font-medium text-gray_932 text-left tracking-[0.03px] w-[auto]"
                                    variant="body43"
                                  >
                                    Kjøp Database
                                  </Text>
                                </div>
                                <List
                                  className="sm:flex-col flex-row gap-[16px] grid md:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                                  orientation="horizontal"
                                >
                                  <div className="bg-gradient32  flex flex-1 items-center justify-start rounded-[8px] w-[100%]">
                                    <div className="bg-gradient33  flex items-center justify-start rounded-[8px] w-[100%]">
                                      <div className="h-[180px] pb-[148px] sm:pl-[20px] pl-[221.28px] md:pl-[40px] pr-[8px] pt-[8px] relative rounded-[8px] w-[320px]">
                                        <Img
                                          src="images/img_div_14.png"
                                          className="h-[180px] m-[auto] object-cover rounded-[8px] w-[320px]"
                                          alt="div Eighteen"
                                        />
                                        <div className="absolute h-[180px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                          <Img
                                            src="defaultNoData.png"
                                            className="h-[180px] m-[auto] object-cover w-[320px]"
                                            alt="div One Six"
                                          />
                                          <div className="absolute flex flex-row inset-x-[0] items-start justify-between mx-[auto] top-[2%] w-[97%]">
                                            <Text
                                              className="bg-yellow_602 font-medium justify-center mb-[6px] pb-[3.8px] pl-[8px] pr-[8.17px] pt-[2.2px] rounded-[4px] text-gray_932 text-left text-shadow-ts4 w-[auto]"
                                              variant="body59"
                                            >
                                              NYTT
                                            </Text>
                                            <Text
                                              className="bg-gray_900_7a font-medium h-[24px] mt-[4px] p-[3px] rounded-[4px] text-left text-white_A700 w-[90px]"
                                              variant="body59"
                                            >
                                              Leverandører
                                            </Text>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-gradient32  flex flex-1 items-center justify-start rounded-[8px] w-[100%]">
                                    <div className="bg-gradient33  flex items-start justify-start rounded-[8px] w-[auto]">
                                      <div className="h-[180px] relative rounded-[8px] w-[100%]">
                                        <Img
                                          src="images/img_div_180x127.png"
                                          className="h-[180px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                          alt="div Nineteen"
                                        />
                                        <div className="absolute h-[180px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                          <Img
                                            src="images/img_div_16.png"
                                            className="h-[180px] m-[auto] object-cover w-[100%]"
                                            alt="div One Seven"
                                          />
                                          <div className="absolute bg-gray_900_8e bottom-[14%] h-[80px] left-[11%] rounded-[50%] w-[80px]"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </List>
                              </div>
                            </div>
                            <div className="flex md:flex-1 items-end justify-start pb-[189px] md:w-[100%] w-[9%]">
                              <div className="flex items-start justify-start w-[auto]">
                                <Text
                                  className="font-medium text-gray_932 text-left tracking-[0.03px] w-[auto]"
                                  variant="body43"
                                >
                                  servicerelatert
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gray_72 md:h-[474px] h-[475px] inset-x-[0] mx-[auto] top-[0] md:w-[100%] w-[98%]">
                    <Img
                      src="defaultNoData.png"
                      className="absolute h-[474px] inset-y-[0] my-[auto] object-cover right-[0] w-[843px]"
                      alt="div Twenty"
                    />
                    <div className="absolute flex flex-col gap-[57px] inset-x-[0] justify-start mx-[auto] sm:pl-[20px] pl-[31px] top-[9%] w-[99%]">
                      <div className="md:ml-[0] ml-[12px] overflow-x-auto w-[100%]">
                        <div className="flex flex-col md:gap-[40px] gap-[92px] items-start justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_932 text-left w-[auto]"
                            variant="body13"
                          >
                            Velkommen til AltLokalt.no
                          </Text>
                          <Text
                            className="font-normal not-italic text-gray_932 text-left w-[auto]"
                            variant="body37"
                          >
                            Offisielt nettsted for AltLokalt.no - Her skal det
                            være veldig enkelt å Finne den eksakte lokale
                            leverandører som tilbyr ditt produkt og tjeneste!
                          </Text>
                        </div>
                      </div>
                      <Button className="bg-blue_501 cursor-pointer font-medium min-w-[196px] mr-[1261px] pb-[13.25px] pl-[20.08px] sm:pl-[20px] pr-[19.92px] pt-[11.75px] rounded-[8px] text-[18px] text-center text-white_A700 w-[auto]">
                        Være med innsiden
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex sm:pr-[20px] md:pr-[40px] pr-[919.2px] relative md:w-[100%] w-[1518px]">
                  <div className="h-[870px] my-[auto] md:w-[100%] w-[42%]">
                    <Img
                      src="images/img_div_870x1.png"
                      className="h-[870px] ml-[auto] mr-[213px] my-[auto] object-cover w-[100%]"
                      alt="div TwentyOne"
                    />
                    <div className="absolute flex flex-col gap-[40px] h-[100%] inset-[0] items-start justify-center m-[auto] sm:pl-[20px] md:pl-[40px] pl-[41px] py-[41px] w-[100%]">
                      <div className="flex flex-col gap-[12.8px] items-start justify-start mt-[205px] sm:w-[100%] w-[auto]">
                        <Text
                          className="font-bold text-gray_932 text-left w-[auto]"
                          variant="body23"
                        >
                          Handle Lokalt! e-handeltorget Der Du Bor!
                        </Text>
                        <div className="flex items-center justify-start w-[100%]">
                          <Text
                            className="font-normal leading-[28.00px] not-italic text-gray_932 text-left"
                            variant="body37"
                          >
                            Absolutt Alt rundt deg & Direkte fra de lokale
                            tilbyder!
                            <br />
                            Støtte din lokale hobbyister, gründere,
                            små/mellomstore bedrifter, familiebedrift,
                            næringlivet, kommune oversikt.
                            <br />
                            Disse partnere promoterer hele tiden arrangementer,
                            stillingsannonser, produkter, tjenester osv.
                            <br />
                            Få gode rabatter, god service og kvalitetstid, og
                            spar ikke minst på lommeboken
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[20px] items-center justify-start mb-[245px] pr-[169.15px] sm:pr-[20px] md:pr-[40px] sm:w-[100%] w-[auto]">
                        <Button className="bg-blue_501 cursor-pointer font-medium min-w-[100px] pb-[12.5px] pl-[20px] pr-[19.85px] pt-[11px] rounded-[8px] text-[18px] text-center text-white_A700 w-[auto]">
                          Bli med
                        </Button>
                        <div className="flex flex-row gap-[5.31px] items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-gray_709 text-left w-[auto]"
                            variant="body50"
                          >
                            Oppfattet! Ta meg ditt
                          </Text>
                          <div className="flex items-start justify-start pl-[8px] pr-[7.69px] py-[8px] w-[auto]">
                            <Text
                              className="font-medium text-blue_501 text-center w-[auto]"
                              variant="body50"
                            >
                              Logg in
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start ml-[-597px] mr-[auto] mt-[auto] px-[16px] w-[95%] z-[1]">
                    <Text
                      className="font-normal leading-[16.00px] md:ml-[0] ml-[592px] not-italic text-center text-gray_709 sm:w-[100%] w-[27%]"
                      variant="body59"
                    >
                      <span className="text-gray_709 text-[14px] font-roboto">
                        Komme i Kontakt med lokale folk som bare kan, eller
                        tilbyr det du er ute etter, i Hele ditt byen{" "}
                      </span>
                      <a
                        href="javascript:"
                        className="text-blue_501 text-[14px] font-roboto underline"
                      >
                        ALTLOKALT.com
                      </a>
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-end mt-[11px] pb-[2px] px-[2px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-center text-gray_524 w-[auto]"
                        variant="body75"
                      >
                        Kjøp direkte fra din lokale leverandør eller tilbyder!
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[55px] not-italic text-center text-gray_524 w-[auto]"
                        variant="body75"
                      >
                        •
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[38px] not-italic text-center text-gray_524 w-[auto]"
                        variant="body75"
                      >
                        ALT DU MÅTE TRENGER TIL DITT HVERDAGEN
                      </Text>
                      <Text
                        className="font-normal sm:ml-[0] ml-[39px] not-italic text-center text-gray_524 w-[auto]"
                        variant="body75"
                      >
                        •
                      </Text>
                      <a
                        className="font-normal sm:ml-[0] ml-[2px] mr-[204px] not-italic text-[10px] text-center text-gray_524 underline w-[auto]"
                        href="javascript:"
                      >
                        handle direkte fra lokale Ekspert, leverandørerde,
                        produsenter! Inkluderende lokale tjenester og
                        servicerelaterte yrker som man kan leie inn
                      </a>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[303px] md:w-[100%] w-[57%]">
                      <Text
                        className="font-normal mb-[2px] md:ml-[0] ml-[59px] not-italic text-center text-gray_524 w-[auto]"
                        variant="body75"
                      >
                        Terms{" "}
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[5px] not-italic text-center text-gray_524 w-[auto]"
                        variant="body75"
                      >
                        Alt i samme plattform
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[45px] not-italic text-center text-gray_524 w-[auto]"
                        variant="body75"
                      >
                        Vi sørger for samme og neste dags levering
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[61px] not-italic text-center text-gray_524 w-[auto]"
                        variant="body75"
                      >
                        DMCA & Complaints Policy •
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] p-[9px] top-[0] w-[98%]">
              <div className="flex flex-row gap-[1240.58px] md:gap-[40px] items-center justify-start pl-[8px] pr-[12.01px] md:w-[100%] w-[auto]">
                <Img
                  src="images/img_911178177f83b40.png"
                  className="h-[36px] md:h-[auto] object-cover w-[56px]"
                  alt="911178177f83bForty"
                />
                <div className="flex flex-row items-start justify-center w-[10%]">
                  <div className="flex items-center justify-start py-[8px] w-[auto]">
                    <Text
                      className="font-medium text-center text-white_A700 w-[auto]"
                      variant="body50"
                    >
                      Sign in
                    </Text>
                  </div>
                  <Text
                    className="font-medium ml-[3px] mt-[11px] text-left text-white_A700 w-[auto]"
                    variant="body50"
                  >
                    or
                  </Text>
                  <div className="flex items-start justify-start ml-[11px] py-[10px] w-[auto]">
                    <Text
                      className="font-medium text-center text-white_A700 w-[auto]"
                      variant="body50"
                    >
                      Join
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray_968 flex flex-col font-inter items-end justify-start mt-[276px] pb-[35px] md:px-[20px] md:w-[100%] w-[90%]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="flex md:flex-col flex-row gap-[20px] items-start justify-end overflow-auto sm:pl-[20px] md:pl-[40px] pl-[438px] w-[100%]">
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[19px] grid md:grid-cols-1 grid-cols-2 md:w-[100%] w-[80%]"
                orientation="horizontal"
              >
                <div className="flex sm:flex-col flex-row gap-[14px] items-start justify-between sm:ml-[0] w-[100%]">
                  <Text
                    className="font-normal leading-[50.00px] not-italic text-left text-orange_52 uppercase w-[auto]"
                    variant="body11"
                  >
                    Slottsfjell partner
                  </Text>
                  <Img
                    src="images/img_airplane_teal_901.svg"
                    className="h-[78px] sm:mt-[0] mt-[3px] w-[auto]"
                    alt="airplane"
                  />
                </div>
                <div className="flex sm:flex-col flex-row gap-[14px] items-start justify-between sm:ml-[0] w-[100%]">
                  <Text
                    className="font-normal leading-[50.00px] not-italic text-left text-orange_52 uppercase w-[auto]"
                    variant="body11"
                  >
                    Slottsfjell partner
                  </Text>
                  <Img
                    src="images/img_airplane_teal_901.svg"
                    className="h-[78px] sm:mt-[0] mt-[3px] w-[auto]"
                    alt="airplane One"
                  />
                </div>
              </List>
              <div className="flex sm:flex-1 items-start justify-start sm:w-[100%] w-[auto]">
                <Text
                  className="font-normal leading-[50.00px] md:max-w-[100%] max-w-[364px] not-italic text-left text-orange_52 uppercase"
                  variant="body11"
                >
                  Slottsfjell partner
                </Text>
              </div>
            </div>
          </div>
          <Img
            src="images/img_622a1bccb639a45.svg"
            className="h-[82px] mt-[30px] w-[350px]"
            alt="622a1bccb639aFortyFive"
          />
          <div className="flex flex-col gap-[31px] items-center justify-start mt-[30px] md:w-[100%] w-[85%]">
            <div className="flex md:flex-col flex-row gap-[51px] items-center justify-center w-[100%]">
              <Img
                src="images/img_622b495f2517fc3.svg"
                className="h-[48px] md:ml-[0] ml-[249px] w-[199px]"
                alt="622b495f2517fcThree"
              />
              <Img
                src="images/img_63dbb313b8f9907.png"
                className="md:flex-1 h-[65px] sm:h-[auto] object-cover md:w-[100%] w-[17%]"
                alt="63dbb313b8f9907"
              />
              <Img
                src="images/img_622b498454a61d5.svg"
                className="h-[72px] mr-[250px] w-[199px]"
                alt="622b498454a61dFive"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-[50px] items-center justify-start px-[125px] sm:px-[20px] md:px-[40px] w-[100%]">
              <Img
                src="images/img_624d92a3fceaa30.png"
                className="md:flex-1 h-[40px] sm:h-[auto] object-cover md:w-[100%] w-[16%]"
                alt="624d92a3fceaaThirty"
              />
              <Img
                src="images/img_622b49adfe1218f.svg"
                className="h-[76px] w-[150px]"
                alt="622b49adfe1218f"
              />
              <Img
                src="images/img_622b499d9dd8585.svg"
                className="h-[41px] w-[150px]"
                alt="622b499d9dd8585"
              />
              <Img
                src="images/img_622b49bd138a6ca.svg"
                className="h-[57px] w-[150px]"
                alt="622b49bd138a6ca"
              />
              <Img
                src="images/img_627a5abf8291d94.png"
                className="md:flex-1 h-[89px] sm:h-[auto] object-cover md:w-[100%] w-[16%]"
                alt="627a5abf8291dNinetyFour"
              />
            </div>
          </div>
          <div className="flex sm:flex-col flex-row font-poppins gap-[26px] items-center justify-center mt-[41px] w-[100%]">
            <Text
              className="font-bold sm:ml-[0] ml-[514px] text-left text-orange_52 w-[auto]"
              variant="body30"
            >
              Til alle partnere
            </Text>
            <Img
              src="images/img_arrowright_deep_orange_300.svg"
              className="h-[33px] mr-[602px] w-[auto]"
              alt="arrowright"
            />
          </div>
        </div>
        <div className="flex font-roboto items-end mt-[57px] pl-[119px] sm:pl-[20px] md:pl-[40px] w-[100%]">
          <footer className="flex items-center justify-center w-[100%]">
            <div className="flex flex-col items-center justify-center mb-[20px] ml-[115px] mr-[3px] sm:pr-[20px] pr-[29px] pt-[29px] w-[92%]">
              <Text
                className="font-normal not-italic text-gray_614 text-left w-[auto]"
                variant="body50"
              >
                Questions? Contact us.
              </Text>
              <div className="flex items-start justify-start mt-[28px] pb-[15px] pr-[15px] md:w-[100%] w-[76%]">
                <ul className="flex flex-col items-start justify-start md:w-[100%] w-[88%] common-column-list">
                  <li className="w-[97%]">
                    <div className="cursor-pointer flex md:flex-col flex-row md:gap-[20px] items-start justify-end">
                      <Text
                        className="font-normal not-italic text-gray_614 text-left w-[auto]"
                        variant="body61"
                      >
                        FAQ
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[226px] not-italic text-gray_614 text-left w-[auto]"
                        variant="body61"
                      >
                        Help Center
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[181px] not-italic text-gray_614 text-left w-[auto]"
                        variant="body67"
                      >
                        Account
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[205px] not-italic text-gray_614 text-left w-[auto]"
                        variant="body61"
                      >
                        Media Center
                      </Text>
                    </div>
                  </li>
                  <li className="mt-[13px] w-[100%]">
                    <div className="cursor-pointer flex md:flex-col flex-row md:gap-[20px] items-start justify-start">
                      <Text
                        className="font-normal not-italic text-gray_614 text-left w-[auto]"
                        variant="body61"
                      >
                        Investor Relations
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[145px] not-italic text-gray_614 text-left w-[auto]"
                        variant="body67"
                      >
                        Jobs
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[223px] not-italic text-gray_614 text-left w-[auto]"
                        variant="body61"
                      >
                        Netflix Shop
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[179px] not-italic text-gray_614 text-left w-[auto]"
                        variant="body61"
                      >
                        Redeem Gift Cards
                      </Text>
                    </div>
                  </li>
                  <li className="mt-[14px] w-[93%]">
                    <div className="cursor-pointer flex md:flex-col flex-row md:gap-[20px] items-start justify-start">
                      <Text
                        className="font-normal not-italic text-gray_614 text-left w-[auto]"
                        variant="body61"
                      >
                        Buy Gift Cards
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[167px] not-italic text-gray_614 text-left w-[auto]"
                        variant="body61"
                      >
                        Ways to Watch
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[164px] not-italic text-gray_614 text-left w-[auto]"
                        variant="body67"
                      >
                        Terms of Use
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[178px] not-italic text-gray_614 text-left w-[auto]"
                        variant="body61"
                      >
                        Privacy
                      </Text>
                    </div>
                  </li>
                  <li className="mt-[13px] w-[95%]">
                    <div className="cursor-pointer flex md:flex-col flex-row md:gap-[20px] items-start justify-start">
                      <Text
                        className="font-normal not-italic text-gray_614 text-left w-[auto]"
                        variant="body61"
                      >
                        Cookie Preferences
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[137px] md:mt-[0] mt-[2px] not-italic text-gray_614 text-left w-[auto]"
                        variant="body67"
                      >
                        Corporate Information
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[131px] not-italic text-gray_614 text-left w-[auto]"
                        variant="body61"
                      >
                        Contact Us
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[185px] not-italic text-gray_614 text-left w-[auto]"
                        variant="body61"
                      >
                        Speed Test
                      </Text>
                    </div>
                  </li>
                  <li className="mt-[14px] w-[82%]">
                    <div className="cursor-pointer flex md:flex-col flex-row md:gap-[20px] items-start justify-start">
                      <Text
                        className="font-normal not-italic text-gray_614 text-left w-[auto]"
                        variant="body67"
                      >
                        Legal Notices
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[176px] not-italic text-gray_614 text-left w-[auto]"
                        variant="body61"
                      >
                        Only on Netflix
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[165px] not-italic text-gray_614 text-left sm:w-[100%] w-[29%]"
                        variant="body61"
                      >
                        Do Not Sell or Share My Personal Information
                      </Text>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-start mt-[20px] w-[10%] md:w-[100%]">
                <div className="bg-black_900 border-[1px] border-bluegray_910 border-solid flex items-start justify-start md:pl-[40px] pl-[51px] pr-[27px] sm:px-[20px] py-[12px] rounded-[2px] w-[auto]">
                  <div className="flex items-start justify-start pb-[0.09px] pr-[4px] w-[auto]">
                    <Text
                      className="font-normal not-italic text-gray_614 text-left w-[auto]"
                      variant="body61"
                    >
                      English
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PrPage;
