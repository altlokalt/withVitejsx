import React from "react";

import { Text, List, Img, Button } from "components";

const LandPage = () => {
  return (
    <>
      <div className="flex font-roboto items-center justify-end mx-[auto] w-[100%]">
        <div className="bg-gray_72 md:h-[2223px] h-[2224px] md:px-[20px] relative w-[100%]">
          <div className="bg-gray_72 h-[2223px] m-[auto] w-[100%]"></div>
          <div className="absolute flex flex-col gap-[33px] h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
            <div className="h-[1320px] md:h-[846px] relative w-[100%]">
              <div className="absolute h-[1320px] md:h-[846px] inset-[0] justify-center m-[auto] w-[100%]">
                <div className="absolute bg-gray_72 flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
                  <div className="bg-gray_72 h-[474px] w-[100%]"></div>
                </div>
                <div className="absolute bg-gray_72 bottom-[0] md:h-[846px] h-[904px] inset-x-[0] mx-[auto] w-[100%]">
                  <div className="md:h-[846px] h-[904px] m-[auto] w-[100%]">
                    <div className="absolute bg-gray_72 bottom-[0] flex inset-x-[0] items-center justify-end mx-[auto] sm:pr-[20px] pr-[29px] pt-[29px] w-[100%]">
                      <div className="flex flex-col gap-[26px] items-start justify-start mt-[493px] pt-[36px] md:w-[100%] w-[auto]">
                        <div className="flex flex-row gap-[1092.73px] md:gap-[40px] items-start justify-start sm:px-[20px] md:px-[40px] px-[48px] md:w-[100%] w-[auto]">
                          <div className="flex items-center justify-start w-[auto]">
                            <Text
                              className="font-bold text-gray_932 text-left w-[auto]"
                              variant="body23"
                            >
                              Produsenter
                            </Text>
                          </div>
                          <div className="bg-bluegray_63 flex flex-row gap-[8.25px] items-center justify-start pl-[19px] py-[8px] rounded-[8px] w-[auto]">
                            <Text
                              className="font-medium text-center text-gray_932 w-[auto]"
                              variant="body50"
                            >
                              Se alle
                            </Text>
                            <div className="flex font-inter items-start justify-start w-[24px]">
                              <Text
                                className="font-normal h-[24px] not-italic text-center text-gray_932 w-[auto]"
                                variant="body37"
                              >
                                
                              </Text>
                            </div>
                          </div>
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
                            <div className="bg-gradient32  flex font-inter items-center justify-start rounded-[8px] w-[100%]">
                              <div className="bg-white_A700 border-[1px] border-black_900 border-solid h-[180px] pb-[148px] sm:pl-[20px] pl-[213.33px] md:pl-[40px] pr-[8px] pt-[8px] relative rounded-[8px] w-[320px]">
                                <div className="bg-white_A700 border-[1px] border-black_900 border-solid flex h-[100%] items-center justify-start m-[auto] pb-[148px] sm:pl-[20px] pl-[213.33px] md:pl-[40px] pr-[8px] pt-[8px] rounded-[8px] w-[auto]">
                                  <div className="h-[180px] relative w-[100%]">
                                    <Img
                                      src="defaultNoData.png"
                                      className="h-[180px] m-[auto] object-cover w-[320px]"
                                      alt="div"
                                    />
                                    <div className="absolute h-[180px] inset-[0] justify-center m-[auto] w-[100%]">
                                      <Img
                                        src="defaultNoData.png"
                                        className="h-[180px] m-[auto] object-cover w-[320px]"
                                        alt="div One"
                                      />
                                      <div className="absolute bottom-[9%] flex items-center justify-start right-[6%] w-[24px]">
                                        <Text
                                          className="font-normal h-[24px] not-italic text-center text-white_A700 w-[auto]"
                                          variant="body37"
                                        >
                                          
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bg-gray_900_7a h-[24px] right-[4%] rounded-[4px] top-[4%] w-[34%]">
                                  <div className="absolute bg-gray_900_7a flex font-inter h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] p-[4px] rounded-[4px] w-[93%]">
                                    <div className="flex items-start justify-start w-[16px]">
                                      <Text
                                        className="font-normal h-[16px] not-italic text-left text-white_A700 w-[auto]"
                                        variant="body50"
                                      >
                                        
                                      </Text>
                                    </div>
                                  </div>
                                  <Text
                                    className="absolute font-medium font-roboto h-[max-content] inset-[0] justify-center m-[auto] text-left text-white_A700 w-[max-content]"
                                    variant="body59"
                                  >
                                    16 Leverandører
                                  </Text>
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
                            <div className="bg-gradient32  flex font-inter items-center justify-start rounded-[8px] w-[100%]">
                              <div className="h-[180px] pb-[148px] pl-[205.36px] sm:pl-[20px] md:pl-[40px] pr-[8px] pt-[8px] relative rounded-[8px] w-[320px]">
                                <div className="h-[180px] m-[auto] rounded-[8px] w-[100%]">
                                  <Img
                                    src="images/img_div_23.png"
                                    className="h-[180px] m-[auto] object-cover w-[320px]"
                                    alt="div One"
                                  />
                                  <div className="absolute h-[180px] inset-[0] justify-center m-[auto] w-[100%]">
                                    <Img
                                      src="defaultNoData.png"
                                      className="h-[180px] m-[auto] object-cover w-[320px]"
                                      alt="div One One"
                                    />
                                    <div className="absolute bottom-[0] flex flex-row gap-[4px] items-center justify-end pb-[12px] pl-[16px] pr-[20px] right-[0] w-[auto]">
                                      <div className="flex flex-row gap-[7px] items-center justify-start pl-[4px] pr-[12.21px] py-[4px] w-[auto]">
                                        <div className="flex font-inter items-start justify-start w-[24px]">
                                          <Text
                                            className="font-normal h-[24px] not-italic text-center text-white_A700 w-[auto]"
                                            variant="body37"
                                          >
                                            
                                          </Text>
                                        </div>
                                        <Text
                                          className="font-medium font-roboto text-center text-white_A700 w-[auto]"
                                          variant="body50"
                                        >
                                          125 heftig avslag
                                        </Text>
                                      </div>
                                      <div className="flex items-start justify-start w-[100%]">
                                        <Text
                                          className="font-normal not-italic text-center text-white_A700 w-[auto]"
                                          variant="body37"
                                        >
                                          
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bg-gray_900_7a h-[24px] right-[4%] rounded-[4px] top-[0] w-[36%]">
                                  <div className="absolute bg-gray_900_7a flex font-inter h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] p-[4px] rounded-[4px] w-[93%]">
                                    <div className="flex items-start justify-start w-[16px]">
                                      <Text
                                        className="font-normal h-[16px] not-italic text-left text-white_A700 w-[auto]"
                                        variant="body50"
                                      >
                                        
                                      </Text>
                                    </div>
                                  </div>
                                  <Text
                                    className="absolute font-medium font-roboto right-[0] text-left text-white_A700 top-[13%] w-[auto]"
                                    variant="body59"
                                  >
                                    246 Kampanjer
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-[18px] inset-x-[0] items-center justify-start mx-[auto] top-[0] md:w-[100%] w-[auto]">
                      <div className="flex flex-row gap-[1162.16px] md:gap-[40px] items-start justify-start sm:px-[20px] md:px-[40px] px-[48px] md:w-[100%] w-[auto]">
                        <div className="flex items-center justify-start pb-[3px] w-[auto]">
                          <Text
                            className="font-bold text-gray_932 text-left w-[auto]"
                            variant="body23"
                          >
                            .Ekspert
                          </Text>
                        </div>
                        <Text
                          className="bg-gray_900_15 font-medium h-[40px] justify-center sm:px-[20px] px-[35px] py-[10px] rounded-[8px] text-center text-gray_932 w-[152px]"
                          variant="body50"
                        >
                          Se alle
                        </Text>
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
                          <div className="font-inter h-[192px] relative rounded-[8px] shadow-bs86 md:w-[100%] w-[7%]">
                            <Img
                              src="images/img_image_91.png"
                              className="h-[192px] m-[auto] object-cover rounded-[8px] w-[100%]"
                              alt="image Nine"
                            />
                            <div className="absolute bg-bluegray_900_4c flex flex-col gap-[24px] h-[100%] inset-[0] items-start justify-center m-[auto] pl-[8px] py-[8px] rounded-[8px] w-[100%]">
                              <div className="md:h-[122px] h-[86px] md:ml-[0] ml-[3px] mt-[42px] relative w-[97%]">
                                <div className="absolute bottom-[0] flex items-center justify-start right-[0] w-[auto]">
                                  <Text
                                    className="not-italic text-left text-white_A700_99 w-[auto]"
                                    as="h3"
                                    variant="h3"
                                  >
                                    
                                  </Text>
                                </div>
                                <div className="absolute bg-gray_900_8e h-[80px] left-[0] rounded-[50%] top-[0] w-[80px]"></div>
                              </div>
                              <div className="flex font-roboto items-end justify-start p-[2px] md:w-[100%] w-[auto]">
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
                  <div className="absolute flex flex-col gap-[26px] inset-x-[0] items-center justify-end mx-[auto] pt-[36px] top-[29%] md:w-[100%] w-[auto]">
                    <div className="flex flex-row gap-[1167.1px] md:gap-[40px] items-start justify-start max-w-[1519px] sm:px-[20px] md:px-[40px] px-[48px] w-[100%]">
                      <div className="flex items-start justify-start w-[auto]">
                        <Text
                          className="font-bold text-gray_932 text-left w-[auto]"
                          variant="body23"
                        >
                          Leverandører
                        </Text>
                      </div>
                      <div className="bg-gray_323 flex items-center justify-start rounded-[8px] w-[6%]">
                        <div className="bg-gray_323 flex items-end justify-start p-[9px] rounded-[8px] w-[100%]">
                          <Text
                            className="font-medium text-center text-gray_932 w-[auto]"
                            variant="body50"
                          >
                            Se alle
                          </Text>
                        </div>
                      </div>
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
                                      <div className="absolute bg-gray_900_7a flex flex-row gap-[8px] items-center justify-center p-[3px] right-[3%] rounded-[4px] top-[4%] w-[29%]">
                                        <div className="flex font-inter items-start justify-start w-[16px]">
                                          <Text
                                            className="font-normal h-[16px] not-italic text-left text-white_A700 w-[auto]"
                                            variant="body50"
                                          >
                                            
                                          </Text>
                                        </div>
                                        <Text
                                          className="font-medium font-roboto mr-[21px] text-left text-white_A700 w-[auto]"
                                          variant="body59"
                                        >
                                          Gratis
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute bottom-[0] flex flex-row font-inter gap-[4px] items-center justify-end pb-[12px] pl-[16px] pr-[20px] right-[0] w-[auto]">
                                  <div className="flex flex-row gap-[7px] items-center justify-start pl-[4px] pr-[12.21px] py-[4px] w-[auto]">
                                    <div className="flex font-inter items-start justify-start w-[24px]">
                                      <Text
                                        className="font-normal h-[24px] not-italic text-center text-white_A700 w-[auto]"
                                        variant="body37"
                                      >
                                        
                                      </Text>
                                    </div>
                                    <Text
                                      className="font-medium font-roboto text-center text-white_A700 w-[auto]"
                                      variant="body50"
                                    >
                                      Rask responder
                                    </Text>
                                  </div>
                                  <div className="flex items-start justify-start w-[100%]">
                                    <Text
                                      className="font-normal not-italic text-center text-white_A700 w-[auto]"
                                      variant="body37"
                                    >
                                      
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
                                  <div className="h-[180px] m-[auto] rounded-[8px] w-[100%]">
                                    <Img
                                      src="defaultNoData.png"
                                      className="h-[180px] m-[auto] object-cover w-[320px]"
                                      alt="div Nine"
                                    />
                                    <div className="absolute h-[180px] inset-[0] justify-center m-[auto] w-[100%]">
                                      <Img
                                        src="defaultNoData.png"
                                        className="h-[180px] m-[auto] object-cover w-[320px]"
                                        alt="div Ten"
                                      />
                                      <div className="absolute bottom-[0] flex flex-row font-inter gap-[4px] items-center justify-center pb-[12px] pl-[16px] pr-[20px] right-[0] w-[auto]">
                                        <div className="flex flex-row gap-[7px] items-center justify-start pl-[4px] pr-[12.21px] py-[4px] w-[auto]">
                                          <div className="flex font-inter items-start justify-start w-[24px]">
                                            <Text
                                              className="font-normal h-[24px] not-italic text-center text-white_A700 w-[auto]"
                                              variant="body37"
                                            >
                                              
                                            </Text>
                                          </div>
                                          <Text
                                            className="font-medium font-roboto text-center text-white_A700 w-[auto]"
                                            variant="body50"
                                          >
                                            1 comment
                                          </Text>
                                        </div>
                                        <div className="flex items-start justify-start w-[24px]">
                                          <Text
                                            className="font-normal h-[24px] not-italic text-center text-white_A700 w-[auto]"
                                            variant="body37"
                                          >
                                            
                                          </Text>
                                        </div>
                                      </div>
                                      <Text
                                        className="absolute bg-yellow_602 font-medium justify-center left-[2%] pb-[3.8px] pl-[8px] pr-[8.17px] pt-[2.2px] rounded-[4px] text-gray_932 text-left text-shadow-ts4 top-[2%] w-[auto]"
                                        variant="body59"
                                      >
                                        Nytt
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="absolute bg-gray_900_7a h-[24px] right-[4%] rounded-[4px] top-[0] w-[29%]">
                                    <div className="absolute bg-gray_900_7a flex font-inter h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] p-[4px] rounded-[4px] w-[92%]">
                                      <div className="flex items-start justify-start w-[16px]">
                                        <Text
                                          className="font-normal h-[16px] not-italic text-left text-white_A700 w-[auto]"
                                          variant="body50"
                                        >
                                          
                                        </Text>
                                      </div>
                                    </div>
                                    <Text
                                      className="absolute font-medium font-roboto h-[max-content] inset-y-[0] my-[auto] right-[0] text-left text-white_A700 w-[auto]"
                                      variant="body59"
                                    >
                                      Leverandører
                                    </Text>
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
                                <div className="h-[180px] m-[auto] rounded-[8px] w-[100%]">
                                  <Img
                                    src="images/img_div_25.png"
                                    className="h-[180px] m-[auto] object-cover w-[320px]"
                                    alt="div Twelve"
                                  />
                                  <div className="absolute h-[180px] inset-[0] justify-center m-[auto] w-[100%]">
                                    <Img
                                      src="images/img_div_13.png"
                                      className="h-[180px] m-[auto] object-cover w-[320px]"
                                      alt="div Thirteen"
                                    />
                                    <div className="absolute bottom-[0] flex flex-row font-inter gap-[4px] items-center justify-center pb-[12px] pl-[16px] pr-[20px] right-[0] w-[auto]">
                                      <div className="flex flex-row gap-[7px] items-center justify-start pl-[4px] pr-[12.48px] py-[4px] w-[auto]">
                                        <div className="flex font-inter items-start justify-start w-[24px]">
                                          <Text
                                            className="font-normal h-[24px] not-italic text-center text-white_A700 w-[auto]"
                                            variant="body37"
                                          >
                                            
                                          </Text>
                                        </div>
                                        <Text
                                          className="font-medium font-roboto text-center text-white_A700 w-[auto]"
                                          variant="body50"
                                        >
                                          4 comments
                                        </Text>
                                      </div>
                                      <div className="flex items-start justify-start w-[24px]">
                                        <Text
                                          className="font-normal h-[24px] not-italic text-center text-white_A700 w-[auto]"
                                          variant="body37"
                                        >
                                          
                                        </Text>
                                      </div>
                                    </div>
                                    <Text
                                      className="absolute bg-yellow_602 font-medium justify-center left-[0] pb-[3.8px] pl-[8px] pr-[8.17px] pt-[2.2px] rounded-[4px] text-gray_932 text-left text-shadow-ts4 top-[2%] w-[auto]"
                                      variant="body59"
                                    >
                                      Nyttig
                                    </Text>
                                  </div>
                                </div>
                                <div className="absolute bg-gray_900_7a h-[24px] right-[4%] rounded-[4px] top-[0] w-[31%]">
                                  <div className="absolute bg-gray_900_7a flex font-inter h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] p-[4px] rounded-[4px] w-[92%]">
                                    <div className="flex items-start justify-start w-[16px]">
                                      <Text
                                        className="font-normal h-[16px] not-italic text-left text-white_A700 w-[auto]"
                                        variant="body50"
                                      >
                                        
                                      </Text>
                                    </div>
                                  </div>
                                  <Text
                                    className="absolute font-medium font-roboto h-[max-content] inset-y-[0] my-[auto] right-[0] text-left text-white_A700 w-[auto]"
                                    variant="body59"
                                  >
                                    Leverandører
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 items-end justify-start overflow-auto md:w-[100%] w-[22%]">
                          <div className="overflow-x-auto w-[100%]">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                              <div className="flex flex-row gap-[206px] items-start justify-start pr-[103px] sm:pr-[20px] md:pr-[40px] w-[auto]">
                                <Text
                                  className="font-medium text-gray_932 text-left tracking-[0.03px] w-[auto]"
                                  variant="body43"
                                >
                                  Kjøp Database
                                </Text>
                                <Text
                                  className="font-medium text-gray_932 text-left tracking-[0.03px] w-[auto]"
                                  variant="body43"
                                >
                                  servicerelatert
                                </Text>
                              </div>
                              <div className="flex md:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                                <div className="bg-gradient32  flex md:flex-1 items-center justify-start rounded-[8px] md:w-[100%] w-[49%]">
                                  <div className="bg-gradient33  flex items-center justify-start rounded-[8px] w-[100%]">
                                    <div className="h-[180px] pb-[148px] sm:pl-[20px] pl-[221.28px] md:pl-[40px] pr-[8px] pt-[8px] relative rounded-[8px] w-[320px]">
                                      <div className="h-[180px] m-[auto] rounded-[8px] w-[100%]">
                                        <Img
                                          src="defaultNoData.png"
                                          className="h-[180px] m-[auto] object-cover w-[320px]"
                                          alt="div Fifteen"
                                        />
                                        <div className="absolute h-[180px] inset-[0] justify-center m-[auto] w-[100%]">
                                          <Img
                                            src="defaultNoData.png"
                                            className="h-[180px] m-[auto] object-cover w-[320px]"
                                            alt="div Sixteen"
                                          />
                                          <div className="absolute bottom-[9%] flex font-inter items-center justify-start right-[6%] w-[24px]">
                                            <Text
                                              className="font-normal h-[24px] not-italic text-center text-white_A700 w-[auto]"
                                              variant="body37"
                                            >
                                              
                                            </Text>
                                          </div>
                                          <Text
                                            className="absolute bg-yellow_602 font-medium justify-center left-[0] pb-[3.8px] pl-[8px] pr-[8.17px] pt-[2.2px] rounded-[4px] text-gray_932 text-left text-shadow-ts4 top-[2%] w-[auto]"
                                            variant="body59"
                                          >
                                            NYTT
                                          </Text>
                                        </div>
                                      </div>
                                      <div className="absolute bg-gray_900_7a h-[24px] right-[4%] rounded-[4px] top-[0] w-[31%]">
                                        <div className="absolute bg-gray_900_7a flex font-inter h-[100%] inset-y-[0] items-start justify-start left-[0] my-[auto] p-[4px] rounded-[4px] w-[92%]">
                                          <div className="flex items-start justify-start w-[16px]">
                                            <Text
                                              className="font-normal h-[16px] not-italic text-left text-white_A700 w-[auto]"
                                              variant="body50"
                                            >
                                              
                                            </Text>
                                          </div>
                                        </div>
                                        <Text
                                          className="absolute font-medium font-roboto h-[max-content] inset-y-[0] my-[auto] right-[0] text-left text-white_A700 w-[auto]"
                                          variant="body59"
                                        >
                                          Leverandører
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="bg-gradient32  flex md:flex-1 font-inter items-center justify-start rounded-[8px] md:w-[100%] w-[49%]">
                                  <div className="bg-gradient33  flex items-start justify-start rounded-[8px] w-[auto]">
                                    <div className="h-[180px] relative rounded-[8px] w-[100%]">
                                      <Img
                                        src="images/img_div_180x127.png"
                                        className="h-[180px] m-[auto] object-cover rounded-[8px] w-[100%]"
                                        alt="div Eighteen"
                                      />
                                      <div className="absolute h-[180px] inset-[0] justify-center m-[auto] rounded-[8px] w-[100%]">
                                        <Img
                                          src="images/img_div_16.png"
                                          className="h-[180px] m-[auto] object-cover w-[100%]"
                                          alt="div Nineteen"
                                        />
                                        <div className="absolute bg-gray_900_8e bottom-[14%] flex h-[80px] items-center justify-start left-[11%] rounded-[50%] w-[80px]">
                                          <div className="flex h-[80px] items-center justify-start p-[25px] sm:px-[20px] rounded-[50%] w-[80px]">
                                            <div className="flex items-start justify-start w-[30px]">
                                              <Text
                                                className="font-normal h-[30px] not-italic text-center text-white_A700 w-[auto]"
                                                variant="body30"
                                              >
                                                
                                              </Text>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 items-end justify-start overflow-auto pb-[189px] md:w-[100%] w-[9%]">
                          <div className="h-[24px] sm:pr-[20px] md:pr-[40px] pr-[66px] w-[100%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-gray_72 flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
                <div className="mb-[146px] mt-[60px] overflow-x-auto w-[99%]">
                  <div className="flex flex-col gap-[57px] justify-start overflow-auto sm:pl-[20px] pl-[31px] w-[100%]">
                    <div className="flex flex-col md:gap-[40px] gap-[92px] items-start justify-start md:ml-[0] ml-[12px] md:w-[100%] w-[auto]">
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
                        Offisielt nettsted for AltLokalt.no - Her skal det være
                        veldig enkelt å Finne den eksakte lokale leverandører
                        som tilbyr ditt produkt og tjeneste!
                      </Text>
                    </div>
                    <Text
                      className="bg-blue_501 font-medium h-[32px] justify-center mr-[1271px] pb-[13.25px] pl-[20.08px] sm:pl-[20px] pr-[19.92px] pt-[11.75px] rounded-[8px] text-center text-white_A700 w-[auto]"
                      variant="body47"
                    >
                      Være med innsiden
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:h-[868px] h-[870px] relative md:w-[100%] w-[95%]">
              <div className="absolute md:h-[868px] h-[870px] inset-[0] m-[auto] sm:pr-[20px] md:pr-[40px] pr-[689px] md:w-[100%] w-[1289px]">
                <Img
                  src="images/img_div_870x1.png"
                  className="h-[650px] object-cover w-[100%]"
                  alt="div Twenty"
                />
                <div className="absolute flex flex-col gap-[40px] h-[100%] inset-y-[0] items-start justify-center left-[0] my-[auto] sm:pl-[20px] md:pl-[40px] pl-[42px] py-[42px] w-[50%]">
                  <div className="flex flex-col gap-[12.8px] items-start justify-start mt-[204px] sm:w-[100%] w-[auto]">
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
                        Absolutt Alt rundt deg & Direkte fra de lokale tilbyder!
                        <br />
                        Støtte din lokale hobbyister, gründere, små/mellomstore
                        bedrifter, familiebedrift, næringlivet, kommune
                        oversikt.
                        <br />
                        Disse partnere promoterer hele tiden arrangementer,
                        stillingsannonser, produkter, tjenester osv.
                        <br />
                        Få gode rabatter, god service og kvalitetstid, og spar
                        ikke minst på lommeboken
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
              <div className="absolute bottom-[1%] flex flex-col inset-x-[0] justify-start mx-[auto] px-[16px] w-[100%]">
                <Text
                  className="font-normal leading-[16.00px] md:ml-[0] ml-[592px] not-italic text-center text-gray_709 sm:w-[100%] w-[27%]"
                  variant="body59"
                >
                  <span className="text-gray_709 text-[14px] font-roboto">
                    Komme i Kontakt med lokale folk som bare kan, eller tilbyr
                    det du er ute etter, i Hele ditt byen{" "}
                  </span>
                  <a
                    href="javascript:"
                    className="text-blue_501 text-[14px] font-roboto underline"
                  >
                    ALTLOKALT.com
                  </a>
                </Text>
                <div className="flex mt-[11px] relative w-[100%]">
                  <div className="h-[12px] ml-[332px] md:w-[100%] w-[44%]">
                    <Text
                      className="absolute font-normal h-[100%] inset-y-[0] left-[0] my-[auto] not-italic text-center text-gray_524 w-[auto]"
                      variant="body75"
                    >
                      Kjøp direkte fra din lokale leverandør eller tilbyder!
                    </Text>
                    <Text
                      className="absolute font-normal h-[100%] inset-y-[0] my-[auto] not-italic right-[45%] text-center text-gray_524 w-[auto]"
                      variant="body75"
                    >
                      •
                    </Text>
                    <Text
                      className="absolute font-normal h-[100%] inset-y-[0] my-[auto] not-italic right-[0] text-center text-gray_524 w-[auto]"
                      variant="body75"
                    >
                      ALT DU MÅTE TRENGER TIL DITT HVERDAGEN
                    </Text>
                  </div>
                  <Text
                    className="font-normal ml-[-0.01px] mr-[449px] not-italic text-center text-gray_524 w-[auto] z-[1]"
                    variant="body75"
                  >
                    •
                  </Text>
                  <a
                    className="font-normal ml-[undefinedpx] mr-[205px] not-italic text-[10px] text-center text-gray_524 underline w-[auto] z-[1]"
                    href="javascript:"
                  >
                    handle direkte fra lokale Ekspert, leverandørerde,
                    produsenter! Inkluderende lokale tjenester og
                    servicerelaterte yrker som man kan leie inn
                  </a>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start md:ml-[0] ml-[303px] sm:px-[20px] md:px-[40px] px-[61px] md:w-[100%] w-[57%]">
                  <Text
                    className="font-normal not-italic text-center text-gray_524 w-[auto]"
                    variant="body75"
                  >
                    Terms{" "}
                  </Text>
                  <Text
                    className="font-normal sm:ml-[0] ml-[5px] not-italic text-center text-gray_524 w-[auto]"
                    variant="body75"
                  >
                    Alt i samme plattform
                  </Text>
                  <Text
                    className="font-normal sm:ml-[0] ml-[45px] not-italic text-center text-gray_524 w-[auto]"
                    variant="body75"
                  >
                    Vi sørger for samme og neste dags levering
                  </Text>
                  <Text
                    className="font-normal sm:ml-[0] ml-[61px] not-italic text-center text-gray_524 w-[auto]"
                    variant="body75"
                  >
                    DMCA & Complaints Policy •
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

export default LandPage;
