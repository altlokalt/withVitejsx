import React from "react";

import { Button, Img, Line, Text, Input, List } from "components";
import { CloseSVG } from "../../assets/images";

const NOFONFTMarketplaceDashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_907 flex font-plusjakartasans items-center justify-end mx-[auto] px-[16px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start max-w-[1525px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex md:flex-1 flex-col gap-[55px] items-center justify-start outline outline-[1px] outline-bluegray_100_66 p-[15px] shadow-bs2 md:w-[100%] w-[6%]">
            <Button className="bg-indigo_A700 flex h-[46px] items-center justify-center mt-[34px] p-[11px] rounded-[4px] w-[46px]">
              <Img
                src="images/img_volume_white_a700.svg"
                className=""
                alt="volume"
              />
            </Button>
            <div className="flex flex-col gap-[320px] md:gap-[40px] items-center justify-start mb-[45px] md:w-[100%] w-[56%]">
              <div className="flex flex-col gap-[50px] items-center justify-center w-[auto]">
                <Img
                  src="images/img_play_indigo_300.svg"
                  className="h-[26px] w-[26px]"
                  alt="play"
                />
                <Img
                  src="images/img_user_gray_401.svg"
                  className="h-[24px] w-[24px]"
                  alt="user"
                />
                <Img
                  src="images/img_folder.svg"
                  className="h-[24px] w-[24px]"
                  alt="folder"
                />
                <Img
                  src="images/img_computer_gray_401.svg"
                  className="h-[24px] w-[24px]"
                  alt="computer"
                />
                <Img
                  src="images/img_upload_gray_401.svg"
                  className="h-[24px] w-[24px]"
                  alt="upload"
                />
                <Img
                  src="images/img_map.svg"
                  className="h-[24px] w-[24px]"
                  alt="map"
                />
                <Img
                  src="images/img_settings_gray_401.svg"
                  className="h-[24px] w-[24px]"
                  alt="settings"
                />
              </div>
              <Img
                src="images/img_upload_gray_401_24x24.svg"
                className="h-[24px] w-[24px]"
                alt="upload One"
              />
            </div>
          </div>
          <Line className="bg-indigo_A700 md:h-[2px] h-[40px] mb-[841px] md:ml-[0] ml-[15px] md:mt-[0] mt-[143px] md:w-[100%] w-[2px]" />
          <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[40px] md:mt-[0] mt-[40px] md:w-[100%] w-[60%]">
            <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[10px] items-start justify-start w-[auto]">
                <Text
                  className="font-semibold text-left text-white_A700 tracking-[-0.78px] w-[auto]"
                  variant="body35"
                >
                  Hello, Andri
                </Text>
                <Text
                  className="font-normal text-gray_401 text-left tracking-[-0.48px] w-[auto]"
                  variant="body50"
                >
                  39.506M+ items in NFT market Place!
                </Text>
              </div>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_401 text-gray_401 text-left tracking-[-0.42px] w-[100%]"
                wrapClassName="bg-gray_106 flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[171px] my-[6px] pb-[13px] pl-[25px] pr-[35px] pt-[18px] rounded-[12px] sm:ml-[0] sm:mt-[0] sm:px-[20px] sm:w-[100%] w-[36%]"
                name="Group427320321"
                placeholder="Search something..."
                prefix={
                  <Img
                    src="images/img_search_gray_401.svg"
                    className="cursor-pointer mr-[15px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#aeaeae"
                      className="cursor-pointer ml-[10px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
              <Button className="border-[1px] border-bluegray_52 border-solid flex h-[50px] items-center justify-center md:ml-[0] ml-[25px] p-[13px] rounded-[50%] w-[50px]">
                <Img
                  src="images/img_settings_gray_401_50x50.svg"
                  className="h-[24px]"
                  alt="settings One"
                />
              </Button>
              <div className="border-[1px] border-bluegray_52 border-solid flex h-[50px] items-center justify-start md:ml-[0] ml-[25px] p-[13px] rounded-[50%] w-[50px]">
                <div
                  className="bg-cover bg-no-repeat flex h-[24px] items-end justify-start p-[2px] w-[24px]"
                  style={{ backgroundImage: "url('images/img_group710.svg')" }}
                >
                  <div className="bg-indigo_A700 h-[6px] mb-[14px] mr-[2px] outline outline-[2px] outline-bluegray_52 rounded-[50%] w-[6px]"></div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-center mt-[40px] md:w-[100%] w-[auto]">
              <div className="bg-blue_101 flex items-center justify-end p-[20px] rounded-[8px] md:w-[100%] w-[47%]">
                <Button className="bg-white_A700_4c border-[1px] border-solid border-white_A700_99 cursor-pointer font-bold leading-[normal] sm:min-w-[100%] min-w-[380px] mt-[239px] py-[20px] rounded-[4px] sm:text-[18px] md:text-[20px] text-[22px] text-center text-white_A700 tracking-[-0.22px] w-[auto]">
                  5h : 40m : 30s
                </Button>
              </div>
              <div className="flex items-center justify-start md:w-[100%] w-[50%]">
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="font-bold text-left text-white_A700 tracking-[-0.52px] w-[auto]"
                    variant="body35"
                  >
                    Purple Mannequin 3d Art Design
                  </Text>
                  <div className="bg-gray_52 flex flex-row items-center justify-between mt-[21px] p-[10px] rounded-[8px] w-[100%]">
                    <div className="flex flex-col gap-[10px] items-start justify-start ml-[10px] w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_401 text-left tracking-[-0.28px] w-[auto]"
                        variant="body59"
                      >
                        Current Bid
                      </Text>
                      <Text
                        className="font-semibold text-left text-white_A700 tracking-[-0.36px] w-[auto]"
                        variant="body47"
                      >
                        0.986 ETH
                      </Text>
                    </div>
                    <Button className="bg-blue_A400 cursor-pointer font-semibold leading-[normal] min-w-[141px] py-[19px] rounded-[4px] text-[18px] text-center text-white_A700 tracking-[-0.36px] w-[auto]">
                      Place a Bid
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[20px] items-center justify-start mt-[25px] w-[100%]">
                    <div className="flex flex-row gap-[10px] items-center justify-center sm:w-[100%] w-[450px]">
                      <div className="bg-cyan_300 h-[12px] rounded-[50%] w-[12px]"></div>
                      <Text
                        className="flex-1 font-normal not-italic text-gray_401 text-left tracking-[-0.28px] w-[auto]"
                        variant="body59"
                      >
                        Date
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.28px] w-[auto]"
                        variant="body59"
                      >
                        02 - 03 - 2022
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center sm:w-[100%] w-[450px]">
                      <div className="bg-blue_A200 h-[12px] rounded-[50%] w-[12px]"></div>
                      <Text
                        className="flex-1 font-normal not-italic text-gray_401 text-left tracking-[-0.28px] w-[auto]"
                        variant="body59"
                      >
                        Metadata
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.28px] w-[auto]"
                        variant="body59"
                      >
                        Frozen
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center sm:w-[100%] w-[450px]">
                      <div className="bg-red_200 h-[12px] rounded-[50%] w-[12px]"></div>
                      <Text
                        className="flex-1 font-normal not-italic text-gray_401 text-left tracking-[-0.28px] w-[auto]"
                        variant="body59"
                      >
                        Blockchain
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.28px] w-[auto]"
                        variant="body59"
                      >
                        Ethereum
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[25px] w-[100%]">
                    <div className="flex flex-row gap-[15px] items-start justify-between w-[40%]">
                      <div className="bg-bluegray_101 h-[48px] rounded-[50%] w-[48px]"></div>
                      <div className="flex flex-col gap-[6px] items-start justify-start mt-[2px] w-[auto]">
                        <Text
                          className="font-semibold text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                          variant="body50"
                        >
                          Nadim Amanda
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_401 text-left tracking-[-0.48px] w-[auto]"
                          variant="body50"
                        >
                          Creator
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-between w-[34%]">
                      <Button className="bg-blue_A400 flex h-[48px] items-center justify-center p-[12px] rounded-[50%] w-[48px]">
                        <Img
                          src="images/img_mail.svg"
                          className="h-[24px]"
                          alt="mail"
                        />
                      </Button>
                      <div className="flex flex-col gap-[6px] items-start justify-start mt-[2px] w-[auto]">
                        <Text
                          className="font-semibold text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                          variant="body50"
                        >
                          2.5 ETH
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_401 text-left tracking-[-0.48px] w-[auto]"
                          variant="body50"
                        >
                          Instant Price
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:h-[428px] h-[461px] mt-[32px] relative w-[100%]">
              <div className="md:h-[396px] h-[461px] m-[auto] w-[100%]">
                <div className="absolute flex flex-row gap-[15px] inset-x-[0] items-center justify-between max-w-[900px] mx-[auto] top-[2%] w-[100%]">
                  <Text
                    className="flex-1 font-bold text-left text-white_A700 tracking-[-0.66px] w-[auto]"
                    variant="body41"
                  >
                    Top Collection
                  </Text>
                  <Text
                    className="font-normal not-italic text-blue_A400 text-left tracking-[-0.48px] w-[auto]"
                    variant="body50"
                  >
                    View All
                  </Text>
                </div>
                <div className="absolute md:h-[396px] h-[461px] inset-y-[0] left-[0] my-[auto] w-[35%]">
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[15px] items-center justify-center left-[0] p-[15px] rounded-[8px] shadow-bs3 w-[93%]">
                    <div className="bg-black_900_26 flex items-center justify-start mt-[53px] p-[57px] sm:px-[20px] md:px-[40px] rounded-[4px] w-[100%]">
                      <Button className="bg-white_A700_7f border-[1px] border-solid border-white_A700_66 cursor-pointer font-medium leading-[normal] min-w-[142px] my-[23px] py-[9px] rounded-[4px] text-[16px] text-center text-white_A700 tracking-[-0.16px] w-[auto]">
                        Place a Bid
                      </Button>
                    </div>
                    <div className="flex items-center justify-start mb-[5px] md:w-[100%] w-[97%]">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                        <Input
                          className="border-b-[1px] border-blue_A400 font-medium leading-[normal] pb-[15px] sm:pr-[20px] pr-[35px] text-[18px] text-left placeholder:text-white_A700 text-white_A700 tracking-[-0.54px] w-[100%]"
                          wrapClassName="w-[100%]"
                          name="Group1312"
                          placeholder="Yellow Tree Human Art"
                        ></Input>
                        <div className="flex flex-row items-center justify-between w-[100%]">
                          <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                            <Text
                              className="font-normal text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                              variant="body67"
                            >
                              Ending in
                            </Text>
                            <Text
                              className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                              variant="body50"
                            >
                              5h 12m 6s
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                            <Text
                              className="font-normal text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                              variant="body67"
                            >
                              Highest bid
                            </Text>
                            <Text
                              className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                              variant="body50"
                            >
                              5.54 ETH
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-row items-end justify-between right-[0] top-[0] w-[94%]">
                    <div className="flex flex-row gap-[15px] items-center justify-center mt-[80px] w-[auto]">
                      <div className="bg-blue_A400 h-[32px] rounded-[50%] w-[32px]"></div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.42px] w-[auto]"
                          variant="body59"
                        >
                          Wi Seung Hyun
                        </Text>
                        <Text
                          className="font-light text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                          variant="body67"
                        >
                          Owner
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_group427320296.svg"
                      className="h-[116px] mb-[2px] w-[auto]"
                      alt="Group427320296"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bg-white_A700 bottom-[0] flex inset-x-[0] items-center justify-start mx-[auto] p-[15px] rounded-[8px] shadow-bs4 w-[32%]">
                <div className="flex flex-col gap-[15px] items-center justify-start mb-[5px] w-[100%]">
                  <div className="flex flex-row gap-[119px] items-center justify-between w-[auto]">
                    <div className="flex flex-row gap-[15px] items-center justify-center w-[auto]">
                      <div className="bg-blue_A400 h-[32px] rounded-[50%] w-[32px]"></div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.42px] w-[auto]"
                          variant="body59"
                        >
                          Kim Tak
                        </Text>
                        <Text
                          className="font-light text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                          variant="body67"
                        >
                          Owner
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_106 flex h-[33px] items-center justify-center p-[6px] rounded-[2px] w-[33px]">
                      <Img
                        src="images/img_location_white_a700.svg"
                        className="h-[19px]"
                        alt="location"
                      />
                    </Button>
                  </div>
                  <div className="bg-bluegray_62 h-[200px] rounded-[4px] w-[100%]"></div>
                  <Input
                    className="border-b-[1px] border-blue_A400 font-medium leading-[normal] pb-[15px] sm:pr-[20px] pr-[35px] text-[18px] text-left placeholder:text-white_A700 text-white_A700 tracking-[-0.54px] w-[100%]"
                    wrapClassName="sm:w-[100%] w-[97%]"
                    name="Group1314"
                    placeholder="Green Tree Human Art"
                  ></Input>
                  <div className="flex flex-row items-center justify-between md:w-[100%] w-[97%]">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                        variant="body67"
                      >
                        Ending in
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                        variant="body50"
                      >
                        6h 12m 6s
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                        variant="body67"
                      >
                        Highest bid
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                        variant="body50"
                      >
                        3.54 ETH
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white_A700 bottom-[0] flex items-center justify-start p-[15px] right-[0] rounded-[8px] shadow-bs4 w-[32%]">
                <div className="flex flex-col gap-[15px] items-center justify-start mb-[5px] w-[100%]">
                  <div className="flex flex-row gap-[92px] items-center justify-center w-[auto]">
                    <div className="flex flex-row gap-[15px] items-center justify-center w-[auto]">
                      <div className="bg-blue_A400 h-[32px] rounded-[50%] w-[32px]"></div>
                      <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                        <Text
                          className="font-medium text-left text-white_A700 tracking-[-0.42px] w-[auto]"
                          variant="body59"
                        >
                          Kim Tae-Mu
                        </Text>
                        <Text
                          className="font-light text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                          variant="body67"
                        >
                          Owner
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-gray_106 flex h-[33px] items-center justify-center p-[6px] rounded-[2px] w-[33px]">
                      <Img
                        src="images/img_location_white_a700.svg"
                        className="h-[19px]"
                        alt="location One"
                      />
                    </Button>
                  </div>
                  <div className="bg-bluegray_62 h-[200px] rounded-[4px] w-[100%]"></div>
                  <Input
                    className="border-b-[1px] border-blue_A400 font-medium leading-[normal] pb-[15px] sm:pr-[20px] pr-[35px] text-[18px] text-left placeholder:text-white_A700 text-white_A700 tracking-[-0.54px] w-[100%]"
                    wrapClassName="sm:w-[100%] w-[97%]"
                    name="Group1316"
                    placeholder="White Tree Human Art"
                  ></Input>
                  <div className="flex flex-row items-center justify-between md:w-[100%] w-[97%]">
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                        variant="body67"
                      >
                        Ending in
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                        variant="body50"
                      >
                        7h 12m 6s
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[auto]">
                      <Text
                        className="font-normal text-blue_A400 text-left tracking-[-0.36px] w-[auto]"
                        variant="body67"
                      >
                        Highest bid
                      </Text>
                      <Text
                        className="font-medium text-left text-white_A700 tracking-[-0.48px] w-[auto]"
                        variant="body50"
                      >
                        4.54 ETH
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1024px] md:h-[497px] md:ml-[0] ml-[50px] relative md:w-[100%] w-[29%]">
            <div className="absolute bg-white_A700 flex flex-col h-[100%] inset-y-[0] items-center justify-start left-[0] my-[auto] outline outline-[1px] outline-bluegray_100_66 p-[20px] shadow-bs49 w-[78%]">
              <div className="flex flex-col mt-[20px] relative w-[97%]">
                <Img
                  src="images/img_subtract_180x290.png"
                  className="h-[180px] mx-[auto] object-cover w-[100%]"
                  alt="Subtract"
                />
                <div className="bg-bluegray_101 h-[80px] mb-[23px] ml-[35px] mt-[-40px] rounded-[50%] w-[80px] z-[1]"></div>
                <div className="flex flex-col gap-[5px] items-start justify-start ml-[auto] mr-[50px] mt-[-NaNpx] w-[auto] z-[1]">
                  <Text
                    className="font-semibold text-gray_800 text-left tracking-[-0.60px] w-[auto]"
                    variant="body43"
                  >
                    Andri Young
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_401 text-left tracking-[-0.42px] w-[auto]"
                    variant="body59"
                  >
                    Collector
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-start justify-start mt-[30px] w-[auto]">
                <Text
                  className="font-semibold text-gray_800 text-left tracking-[-0.54px] w-[auto]"
                  variant="body47"
                >
                  Biography
                </Text>
                <Text
                  className="font-normal leading-[22.00px] md:max-w-[100%] max-w-[290px] not-italic text-gray_401 text-left tracking-[-0.42px]"
                  variant="body59"
                >
                  The Collector was effectively the most important
                  administrative figure in an Indian district.{" "}
                </Text>
              </div>
              <Line className="bg-bluegray_101 h-[1px] mt-[122px] w-[97%]" />
              <List
                className="flex-col gap-[20px] grid items-start mb-[46px] mt-[39px] w-[auto]"
                orientation="vertical"
              >
                <div className="bg-white_A700 hover:cursor-pointer flex flex-row items-center justify-between p-[15px] rounded-[4px] hover:shadow-bs5 shadow-bs5 w-[100%]">
                  <Text
                    className="font-semibold text-blue_A400 text-left tracking-[-0.48px] w-[auto]"
                    variant="body50"
                  >
                    1
                  </Text>
                  <div className="bg-bluegray_101 h-[50px] rounded-[50%] w-[50px]"></div>
                  <div className="flex flex-col gap-[7px] items-start justify-start w-[auto]">
                    <Text
                      className="font-semibold text-gray_800 text-left tracking-[-0.48px] w-[auto]"
                      variant="body50"
                    >
                      Stella Amanda
                    </Text>
                    <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                      <Img
                        src="images/img_mail_blue_a400.svg"
                        className="h-[18px] w-[18px]"
                        alt="mail One"
                      />
                      <Text
                        className="font-normal not-italic text-gray_401 text-left tracking-[-0.45px] w-[auto]"
                        variant="body54"
                      >
                        6.049.85
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-gray_106 flex h-[33px] items-center justify-center my-[8px] p-[11px] rounded-[2px] w-[33px]">
                    <Img
                      src="images/img_plus_blue_a400.svg"
                      className="h-[10px]"
                      alt="plus"
                    />
                  </Button>
                </div>
                <div className="bg-white_A700 hover:cursor-pointer flex flex-row items-center justify-start p-[14px] rounded-[4px] hover:shadow-bs5 w-[100%]">
                  <Text
                    className="font-semibold text-blue_A400 text-left tracking-[-0.48px] w-[auto]"
                    variant="body50"
                  >
                    2
                  </Text>
                  <div className="bg-bluegray_101 h-[50px] ml-[14px] rounded-[50%] w-[50px]"></div>
                  <div className="flex flex-col font-inter gap-[7px] items-start justify-start ml-[15px] w-[auto]">
                    <Text
                      className="font-semibold text-gray_800 text-left tracking-[-0.16px] w-[auto]"
                      variant="body50"
                    >
                      Angelina Young
                    </Text>
                    <div className="flex flex-row font-plusjakartasans gap-[5px] items-center justify-center w-[auto]">
                      <Img
                        src="images/img_mail_blue_a400.svg"
                        className="h-[18px] w-[18px]"
                        alt="mail Two"
                      />
                      <Text
                        className="font-normal not-italic text-gray_401 text-left tracking-[-0.45px] w-[auto]"
                        variant="body54"
                      >
                        6.049.85
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-gray_108 flex h-[33px] items-center justify-center ml-[20px] my-[9px] p-[11px] rounded-[4px] w-[33px]">
                    <Img
                      src="images/img_plus_blue_a400.svg"
                      className="h-[10px]"
                      alt="plus One"
                    />
                  </Button>
                </div>
                <div className="bg-white_A700 hover:cursor-pointer flex flex-row items-center justify-start p-[13px] rounded-[4px] hover:shadow-bs5 w-[100%]">
                  <Text
                    className="font-semibold text-blue_A400 text-left tracking-[-0.48px] w-[auto]"
                    variant="body50"
                  >
                    3
                  </Text>
                  <div className="bg-bluegray_101 h-[50px] ml-[15px] my-[2px] rounded-[50%] w-[50px]"></div>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-[15px] w-[auto]">
                    <Text
                      className="font-semibold text-gray_800 text-left tracking-[-0.48px] w-[auto]"
                      variant="body50"
                    >
                      Michael Ching
                    </Text>
                    <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                      <Img
                        src="images/img_mail_blue_a400.svg"
                        className="h-[18px] w-[18px]"
                        alt="mail Three"
                      />
                      <Text
                        className="font-normal not-italic text-gray_401 text-left tracking-[-0.45px] w-[auto]"
                        variant="body54"
                      >
                        6.049.85
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-gray_108 flex h-[33px] items-center justify-center ml-[36px] my-[10px] p-[11px] rounded-[4px] w-[33px]">
                    <Img
                      src="images/img_plus_blue_a400.svg"
                      className="h-[10px]"
                      alt="plus Two"
                    />
                  </Button>
                </div>
                <div className="bg-white_A700 hover:cursor-pointer flex flex-row items-center justify-start p-[13px] rounded-[4px] hover:shadow-bs5 w-[100%]">
                  <Text
                    className="font-semibold text-blue_A400 text-left tracking-[-0.48px] w-[auto]"
                    variant="body50"
                  >
                    4
                  </Text>
                  <div className="bg-bluegray_101 h-[50px] ml-[14px] my-[2px] rounded-[50%] w-[50px]"></div>
                  <div className="flex flex-col gap-[7px] items-start justify-start ml-[15px] w-[auto]">
                    <Text
                      className="font-semibold text-gray_800 text-left tracking-[-0.48px] w-[auto]"
                      variant="body50"
                    >
                      Daniel Ching
                    </Text>
                    <div className="flex flex-row gap-[5px] items-center justify-center w-[auto]">
                      <Img
                        src="images/img_mail_blue_a400.svg"
                        className="h-[18px] w-[18px]"
                        alt="mail Four"
                      />
                      <Text
                        className="font-normal not-italic text-gray_401 text-left tracking-[-0.45px] w-[auto]"
                        variant="body54"
                      >
                        6.049.85
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-gray_108 flex h-[33px] items-center justify-center ml-[47px] my-[10px] p-[11px] rounded-[4px] w-[33px]">
                    <Img
                      src="images/img_plus_blue_a400.svg"
                      className="h-[10px]"
                      alt="plus Three"
                    />
                  </Button>
                </div>
              </List>
            </div>
            <div className="absolute flex flex-row gap-[25px] items-start justify-between right-[0] top-[40%] w-[89%]">
              <Button className="bg-blue_A400 cursor-pointer font-semibold min-w-[96px] mt-[50px] sm:px-[20px] px-[25px] py-[10px] rounded-[4px] text-[12px] text-center text-white_A700 tracking-[-0.36px] w-[auto]">
                Follow +
              </Button>
              <Button className="border-[1px] border-bluegray_52 border-solid flex h-[42px] items-center justify-center mt-[50px] p-[12px] rounded-[50%] w-[42px]">
                <Img
                  src="images/img_upload_gray_401_42x42.svg"
                  className="h-[18px]"
                  alt="upload Two"
                />
              </Button>
              <Img
                src="images/img_group427320312.svg"
                className="h-[92px] w-[auto]"
                alt="Group427320312"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NOFONFTMarketplaceDashboardPage;
