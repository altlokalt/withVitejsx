import React from "react";

import {
  Input,
  Img,
  List,
  Button,
  Text,
  Line,
  SeekBar,
  CheckBox,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images";

const FormAddNewCampaignPage = () => {
  function handleNavigate13() {
    window.location.href = "https://www.facebook.com/login/";
  }
  function handleNavigate14() {
    window.location.href = "https://twitter.com/login/";
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex font-poppins h-[1903px] justify-end mx-[auto] relative w-[100%]">
        <div className="bg-gray_61 flex flex-col gap-[51px] h-[100%] justify-start mt-[auto] mx-[auto] pb-[56px] w-[100%]">
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-end p-[31px] sm:px-[20px] w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[16px] placeholder:text-gray_518 text-gray_518 text-left w-[100%]"
              wrapClassName="border-[1px] border-gray_309 border-solid flex md:w-[100%] px-[35px] py-[15px] rounded-[12px] sm:px-[20px] sm:w-[100%] w-[28%]"
              name="searchbox"
              placeholder="Search here"
              prefix={
                <Img
                  src="images/img_search_bluegray_808.svg"
                  className="cursor-pointer mr-[24px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#aaaaaa"
                    className="cursor-pointer ml-[10px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
            ></Input>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[15px] grid grid-cols-3 mb-[2px] md:ml-[0] ml-[473px] md:px-[20px] md:w-[100%] w-[11%]"
              orientation="horizontal"
            >
              <div className="h-[56px] relative w-[100%]">
                <Button className="absolute bg-white_A700 flex h-[56px] inset-[0] items-center justify-center m-[auto] p-[14px] rounded-[12px] w-[56px]">
                  <Img
                    src="images/img_notification_gray_949.svg"
                    className="h-[28px]"
                    alt="notification"
                  />
                </Button>
                <div className="absolute h-[21px] right-[0] top-[4%] w-[51%]">
                  <div className="absolute bg-green_502 h-[21px] inset-[0] justify-center m-[auto] outline outline-[3px] outline-white_A700 rounded-[10px] w-[100%]"></div>
                  <Text
                    className="absolute font-semibold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                    variant="body59"
                  >
                    12
                  </Text>
                </div>
              </div>
              <div className="h-[56px] relative w-[100%]">
                <Button className="absolute bg-white_A700 flex h-[56px] inset-[0] items-center justify-center m-[auto] p-[14px] rounded-[12px] w-[56px]">
                  <Img
                    src="images/img_file_gray_950.svg"
                    className="h-[28px]"
                    alt="file"
                  />
                </Button>
                <div className="absolute h-[21px] right-[0] top-[4%] w-[51%]">
                  <div className="absolute bg-green_502 h-[21px] inset-[0] justify-center m-[auto] outline outline-[3px] outline-white_A700 rounded-[10px] w-[100%]"></div>
                  <Text
                    className="absolute font-semibold h-[100%] inset-[0] justify-center m-[auto] text-center text-white_A700 w-[max-content]"
                    variant="body59"
                  >
                    4
                  </Text>
                </div>
              </div>
              <div className="h-[56px] relative w-[100%]">
                <Button className="absolute bg-white_A700 flex h-[56px] inset-[0] items-center justify-center m-[auto] p-[14px] rounded-[12px] w-[56px]">
                  <Img
                    src="images/img_television.svg"
                    className="h-[28px]"
                    alt="television"
                  />
                </Button>
                <div className="absolute h-[21px] right-[0] top-[4%] w-[51%]">
                  <div className="absolute bg-green_502 h-[21px] inset-[0] justify-center m-[auto] outline outline-[3px] outline-white_A700 rounded-[10px] w-[100%]"></div>
                  <Text
                    className="absolute font-semibold h-[100%] inset-y-[0] my-[auto] right-[17%] text-center text-white_A700 w-[auto]"
                    variant="body59"
                  >
                    76
                  </Text>
                </div>
              </div>
            </List>
            <div className="bg-white_A700 flex md:flex-1 flex-row gap-[23px] items-center justify-center md:ml-[0] ml-[30px] pl-[21px] md:px-[20px] rounded-[12px] md:w-[100%] w-[14%]">
              <Text
                className="font-semibold text-bluegray_912 text-left w-[auto]"
                variant="body50"
              >
                Samuel Anderson
              </Text>
              <div className="bg-gray_400 h-[56px] rounded-[12px] w-[56px]"></div>
            </div>
            <Button
              className="border-[1px] border-gray_118 border-solid flex items-center justify-center md:ml-[0] ml-[30px] mr-[19px] pl-[16px] pr-[17px] py-[14px] rounded-[12px] sm:ml-[0] text-center"
              rightIcon={
                <Img
                  src="images/img_arrowdown_bluegray_415.svg"
                  className="ml-[9px] text-center"
                  alt="arrow_down"
                />
              }
            >
              <div className="bg-transparent cursor-pointer font-semibold leading-[normal] text-[18px] text-bluegray_912 text-left">
                EN
              </div>
            </Button>
          </div>
          <div className="flex items-center justify-start md:ml-[0] ml-[290px] md:px-[20px] md:w-[100%] w-[83%]">
            <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[19%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-black_905 text-left w-[auto]"
                      variant="body30"
                    >
                      New Campaign
                    </Text>
                    <div className="flex flex-row gap-[8px] items-start justify-start mt-[3px] w-[100%]">
                      <Text
                        className="font-semibold text-green_502 text-left w-[auto]"
                        variant="body47"
                      >
                        Campaign /{" "}
                      </Text>
                      <Text
                        className="font-normal not-italic text-gray_611 text-left w-[auto]"
                        variant="body47"
                      >
                        Add new campaign
                      </Text>
                    </div>
                  </div>
                </div>
                <Button className="border-[1px] border-green_502 border-solid cursor-pointer font-semibold leading-[normal] min-w-[138px] md:ml-[0] ml-[983px] py-[16px] rounded-[12px] text-[16px] text-center text-green_502 w-[auto]">
                  PREVIEW
                </Button>
                <Button className="bg-green_502 cursor-pointer font-semibold leading-[normal] mb-[13px] min-w-[138px] md:ml-[0] ml-[19px] md:mt-[0] mt-[8px] py-[16px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                  PUBLISH
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-[38px] items-start justify-between w-[100%]">
                <div className="flex md:flex-1 flex-col gap-[45px] items-center justify-start md:w-[100%] w-[71%]">
                  <div className="bg-white_A700 flex items-center justify-start p-[30px] sm:px-[20px] rounded-[14px] shadow-bs33 w-[100%]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <Text
                        className="font-medium text-black_905 text-left w-[auto]"
                        variant="body43"
                      >
                        Describe your campaign bellow
                      </Text>
                      <div className="flex flex-col gap-[13px] items-start justify-start mt-[25px] w-[100%]">
                        <div className="flex flex-row items-start justify-start md:w-[100%] w-[8%]">
                          <Text
                            className="font-normal mt-[2px] not-italic text-black_900 text-left w-[auto]"
                            variant="body50"
                          >
                            Ad Name
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-red_505 w-[auto]"
                            variant="body54"
                          >
                            *
                          </Text>
                        </div>
                        <Input
                          className="font-normal leading-[normal] not-italic pl-[23px] pr-[35px] sm:px-[20px] py-[21px] text-[16px] placeholder:text-black_900 text-black_900 text-left w-[100%]"
                          wrapClassName="bg-gray_103 rounded-[12px] w-[100%]"
                          name="Group618"
                          placeholder="Promotion Ads"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[13px] items-start justify-start mt-[27px] w-[100%]">
                        <div className="flex flex-row items-start justify-start md:w-[100%] w-[7%]">
                          <Text
                            className="font-normal mt-[2px] not-italic text-black_900 text-left w-[auto]"
                            variant="body50"
                          >
                            Ad Title
                          </Text>
                          <Text
                            className="font-normal ml-[2px] not-italic text-left text-red_505 w-[auto]"
                            variant="body54"
                          >
                            *
                          </Text>
                        </div>
                        <Input
                          className="font-normal leading-[normal] not-italic pl-[23px] pr-[35px] sm:px-[20px] py-[21px] text-[16px] placeholder:text-black_900 text-black_900 text-left w-[100%]"
                          wrapClassName="bg-gray_103 rounded-[12px] w-[100%]"
                          name="offer"
                          placeholder="Get 70% OFF Discount from Westoreid"
                        ></Input>
                      </div>
                      <div className="flex flex-col gap-[11px] items-start justify-start mt-[27px] w-[100%]">
                        <div className="flex flex-row items-start justify-start w-[10%] md:w-[100%]">
                          <Text
                            className="font-normal mt-[4px] not-italic text-black_900 text-left w-[auto]"
                            variant="body50"
                          >
                            Description
                          </Text>
                          <Text
                            className="font-normal ml-[3px] not-italic text-left text-red_505 w-[auto]"
                            variant="body54"
                          >
                            *
                          </Text>
                        </div>
                        <div className="border-[1px] border-bluegray_113 border-solid flex flex-col md:gap-[40px] gap-[63px] justify-end p-[7px] rounded-[12px] w-[100%]">
                          <div className="h-[288px] md:h-[309px] md:ml-[0] ml-[15px] mr-[23px] mt-[21px] relative md:w-[100%] w-[97%]">
                            <Text
                              className="font-normal m-[auto] not-italic text-black_900 text-left"
                              variant="body50"
                            >
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum
                              <br />
                              <br />
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae
                              vitae dicta sunt explicabo. Nemo enim ipsam
                              voluptatem quia voluptas sit aspernatur aut odit
                              aut fugit, sed quia consequuntur magni dolores eos
                              qui ratione voluptatem sequi nesciunt. Neque porro
                              quisquam est, qui dolorem ipsum quia dolor sit
                              amet, consectetur, adipisci velit, sed quia non
                              numquam eius modi tempora incidunt ut labore et
                              dolore magnam aliquam quaerat voluptatem. Ut enim
                              ad minima veniam, quis nostrum exercitationem
                              ullam corporis suscipit laboriosam, nisi ut
                              aliquid ex ea commodi consequatur? Quis autem vel
                              eum{" "}
                            </Text>
                            <Line className="absolute bg-green_502 bottom-[0] h-[22px] left-[12%] w-[3px]" />
                          </div>
                          <Img
                            src="images/img_resizeable.svg"
                            className="h-[25px] md:ml-[0] ml-[1009px] mr-[3px] w-[25px]"
                            alt="resizeable"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[10px] items-start justify-start md:ml-[0] ml-[8px] mt-[27px] w-[100%]">
                        <div className="flex flex-row items-start justify-start md:w-[100%] w-[5%]">
                          <Text
                            className="font-normal mt-[5px] not-italic text-black_900 text-left w-[auto]"
                            variant="body50"
                          >
                            Tags
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-red_505 w-[auto]"
                            variant="body54"
                          >
                            *
                          </Text>
                        </div>
                        <div className="bg-gray_103 flex items-start justify-start p-[19px] rounded-[12px] w-[100%]">
                          <div className="flex flex-col gap-[12px] items-start justify-start mb-[36px] mt-[6px] md:w-[100%] w-[31%]">
                            <div className="flex flex-row gap-[14px] items-center justify-start md:w-[100%] w-[75%]">
                              <Button className="bg-gray_316 cursor-pointer font-normal leading-[normal] min-w-[88px] not-italic py-[10px] rounded-[12px] text-[16px] text-black_900 text-center w-[auto]">
                                #ads
                              </Button>
                              <Button className="bg-gray_316 cursor-pointer font-normal leading-[normal] min-w-[130px] not-italic py-[10px] rounded-[12px] text-[16px] text-black_900 text-center w-[auto]">
                                #promotion
                              </Button>
                            </div>
                            <div className="flex flex-row gap-[13px] items-center justify-between w-[100%]">
                              <Button className="bg-gray_316 cursor-pointer font-normal leading-[normal] min-w-[124px] not-italic py-[10px] rounded-[12px] text-[16px] text-black_900 text-center w-[auto]">
                                #bigsale
                              </Button>
                              <Button className="bg-gray_316 cursor-pointer font-normal leading-[normal] min-w-[175px] not-italic py-[10px] rounded-[12px] text-[16px] text-black_900 text-center w-[auto]">
                                #newclothesstore
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[30px] items-start justify-between md:ml-[0] ml-[8px] mt-[27px] w-[100%]">
                        <div className="flex md:flex-1 items-center justify-start md:w-[100%] w-[49%]">
                          <div className="flex flex-col items-start justify-start w-[100%]">
                            <div className="flex flex-row items-start justify-start md:w-[100%] w-[28%]">
                              <Text
                                className="font-normal mt-[4px] not-italic text-black_900 text-left w-[auto]"
                                variant="body50"
                              >
                                Set Daily Budget
                              </Text>
                              <Text
                                className="font-normal ml-[2px] not-italic text-left text-red_505 w-[auto]"
                                variant="body54"
                              >
                                *
                              </Text>
                            </div>
                            <Button className="bg-gray_103 cursor-pointer font-medium leading-[normal] sm:min-w-[100%] min-w-[507px] mt-[10px] py-[15px] rounded-[12px] sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[auto]">
                              $1,000
                            </Button>
                            <div className="flex sm:flex-col flex-row gap-[10px] items-center justify-start mt-[22px] md:w-[100%] w-[95%]">
                              <Button className="bg-green_500_3f cursor-pointer font-semibold leading-[normal] min-w-[88px] py-[10px] rounded-[12px] text-[16px] text-center text-green_502 w-[auto]">
                                $200
                              </Button>
                              <Button className="bg-green_500_3f cursor-pointer font-semibold leading-[normal] min-w-[88px] py-[10px] rounded-[12px] text-[16px] text-center text-green_502 w-[auto]">
                                $500
                              </Button>
                              <Button className="bg-green_502 cursor-pointer font-semibold leading-[normal] min-w-[88px] py-[10px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                                $1,000
                              </Button>
                              <Button className="bg-green_500_3f cursor-pointer font-semibold leading-[normal] min-w-[88px] py-[10px] rounded-[12px] text-[16px] text-center text-green_502 w-[auto]">
                                $200
                              </Button>
                              <Button className="bg-green_500_3f cursor-pointer font-semibold leading-[normal] min-w-[88px] py-[10px] rounded-[12px] text-[16px] text-center text-green_502 w-[auto]">
                                $200
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[49%]">
                          <div className="flex flex-row items-start justify-start md:w-[100%] w-[23%]">
                            <Text
                              className="font-normal mt-[4px] not-italic text-black_900 text-left w-[auto]"
                              variant="body50"
                            >
                              Total Budget
                            </Text>
                            <Text
                              className="font-normal ml-[4px] not-italic text-left text-red_505 w-[auto]"
                              variant="body54"
                            >
                              *
                            </Text>
                          </div>
                          <Button className="bg-gray_103 cursor-pointer font-medium leading-[normal] sm:min-w-[100%] min-w-[507px] mt-[10px] py-[15px] rounded-[12px] sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[auto]">
                            $3,850
                          </Button>
                          <div className="flex items-center justify-start mt-[25px] w-[100%]">
                            <div className="flex flex-col gap-[7px] items-center justify-start w-[100%]">
                              <SeekBar
                                inputValue={[59.27]}
                                trackColors={["#52b141", "#d9d9d9"]}
                                thumbClassName="h-[19px] bg-green_502 w-[19px] flex justify-center items-center rounded-[50%] outline-none"
                                className="flex h-[19px] rounded-[3px] w-[100%]"
                                trackClassName="h-[5px] flex rounded-[3px] w-[100%]"
                              />{" "}
                              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                                <Text
                                  className="font-normal not-italic text-black_900 text-left w-[auto]"
                                  variant="body50"
                                >
                                  $0
                                </Text>
                                <Button className="bg-white_A700 border-[1px] border-green_502 border-solid cursor-pointer font-normal leading-[normal] min-w-[90px] sm:ml-[0] ml-[236px] not-italic py-[8px] rounded-[20px] text-[16px] text-center text-green_502 w-[auto]">
                                  $3,850
                                </Button>
                                <Text
                                  className="font-normal sm:ml-[0] ml-[108px] not-italic text-black_900 text-right w-[auto]"
                                  variant="body50"
                                >
                                  $5,000
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="bg-white_A700 sm:flex-col flex-row gap-[36px] grid md:grid-cols-1 grid-cols-2 justify-center p-[30px] sm:px-[20px] rounded-[14px] shadow-bs33 w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col gap-[12px] items-start justify-start w-[100%]">
                      <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_900 text-left w-[auto]"
                          variant="body50"
                        >
                          Date Start
                        </Text>
                      </div>
                      <div className="h-[68px] relative w-[100%]">
                        <div className="absolute bg-gray_103 flex h-[max-content] inset-[0] items-start justify-center m-[auto] p-[20px] rounded-[12px] w-[100%]">
                          <Text
                            className="font-medium md:ml-[0] ml-[9px] text-black_900 text-left w-[auto]"
                            variant="body50"
                          >
                            4 June 2020
                          </Text>
                        </div>
                        <div className="absolute bg-green_502 flex h-[100%] inset-y-[0] items-center justify-start my-[auto] p-[22px] sm:px-[20px] right-[0] rounded-[12px] w-[33%]">
                          <Img
                            src="images/img_iccalendar.svg"
                            className="h-[24px] w-[24px]"
                            alt="iccalendar"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[12px] items-start justify-start w-[100%]">
                      <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-black_900 text-left w-[auto]"
                          variant="body50"
                        >
                          Date End
                        </Text>
                      </div>
                      <div className="h-[68px] relative w-[100%]">
                        <div className="absolute bg-gray_103 flex h-[max-content] inset-[0] items-start justify-center m-[auto] p-[18px] rounded-[12px] w-[100%]">
                          <Text
                            className="font-medium md:ml-[0] ml-[11px] mt-[5px] text-black_900 text-left w-[auto]"
                            variant="body50"
                          >
                            4 July 2020
                          </Text>
                        </div>
                        <div className="absolute bg-green_502 flex h-[100%] inset-y-[0] items-center justify-start my-[auto] p-[22px] sm:px-[20px] right-[0] rounded-[12px] w-[33%]">
                          <Img
                            src="images/img_iccalendar.svg"
                            className="h-[24px] w-[24px]"
                            alt="iccalendar One"
                          />
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="flex md:flex-1 flex-col gap-[39px] items-center justify-start md:mt-[0] mt-[5px] md:w-[100%] w-[28%]">
                  <div className="flex flex-col gap-[39px] items-center justify-start w-[100%]">
                    <div className="bg-white_A700 flex items-end justify-start sm:pl-[20px] pl-[30px] py-[30px] rounded-[14px] shadow-bs33 w-[100%]">
                      <div className="flex flex-col items-start justify-start my-[2px] w-[100%]">
                        <div className="flex flex-row items-start justify-between md:w-[100%] w-[93%]">
                          <Text
                            className="font-medium text-black_905 text-left w-[auto]"
                            variant="body43"
                          >
                            Images
                          </Text>
                          <Text
                            className="font-medium text-green_502 text-left w-[auto]"
                            variant="body47"
                          >
                            +Upload
                          </Text>
                        </div>
                        <div className="bg-gray_62 flex items-center justify-start mt-[39px] p-[20px] rounded-[14px] md:w-[100%] w-[auto]">
                          <Text
                            className="font-normal mb-[4px] not-italic text-black_900_b3 text-left w-[100%]"
                            variant="body50"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore
                          </Text>
                        </div>
                        <div className="bg-gray_400 flex items-end justify-start mt-[38px] p-[17px] rounded-[14px] md:w-[100%] w-[93%]">
                          <Img
                            src="images/img_close_red_505.svg"
                            className="h-[42px] mb-[342px] mt-[7px] w-[42px]"
                            alt="close"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-between mt-[29px] w-[100%]">
                          <Img
                            src="images/img_image_gray_400_141x129.svg"
                            className="h-[141px] w-[auto]"
                            alt="image"
                          />
                          <Img
                            src="images/img_image_gray_400_141x129.svg"
                            className="h-[141px] w-[auto]"
                            alt="image One"
                          />
                          <div className="md:h-[140px] h-[141px] relative sm:w-[100%] w-[29%]">
                            <Img
                              src="images/img_image_gray_400_160x136.svg"
                              className="absolute bottom-[0] h-[128px] inset-x-[0] mx-[auto] w-[auto]"
                              alt="image Two"
                            />
                            <div className="absolute bg-gradient11  h-[140px] inset-y-[0] my-[auto] right-[0] rounded-[14px] w-[91%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col items-center justify-end p-[24px] sm:px-[20px] rounded-[14px] shadow-bs33 w-[100%]">
                      <div className="flex flex-row items-start justify-between mt-[5px] md:w-[100%] w-[98%]">
                        <Text
                          className="font-medium text-black_905 text-left w-[auto]"
                          variant="body43"
                        >
                          Social Media Stream
                        </Text>
                        <Text
                          className="font-medium text-gray_400 text-left w-[auto]"
                          variant="body47"
                        >
                          Clear
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[45px] md:w-[100%] w-[97%]">
                        <CheckBox
                          className="font-medium leading-[normal] text-[16px] text-black_900 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Instagram"
                          name="Instagram"
                        ></CheckBox>
                        <Button className="bg-pink_501 flex h-[63px] items-center justify-center p-[19px] rounded-[12px] w-[63px]">
                          <Img
                            src="images/img_camera_white_a700.svg"
                            className="h-[24px]"
                            alt="camera"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[30px] md:w-[100%] w-[97%]">
                        <CheckBox
                          className="font-medium leading-[normal] text-[16px] text-black_900 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Facebook"
                          name="Facebook"
                        ></CheckBox>
                        <Button
                          className="common-pointer bg-indigo_401 flex h-[63px] items-center justify-center p-[19px] rounded-[12px] w-[63px]"
                          onClick={handleNavigate13}
                        >
                          <Img
                            src="images/img_facebook_white_a700_63x63.svg"
                            className=""
                            alt="facebook One"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[30px] md:w-[100%] w-[97%]">
                        <CheckBox
                          className="font-medium leading-[normal] text-[16px] text-black_900 text-left"
                          inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                          label="Twitter"
                          name="Twitter"
                        ></CheckBox>
                        <Button
                          className="common-pointer bg-cyan_301 flex h-[63px] items-center justify-center p-[19px] rounded-[12px] w-[63px]"
                          onClick={handleNavigate14}
                        >
                          <Img
                            src="images/img_twitter_white_a700_63x63.svg"
                            className=""
                            alt="twitter One"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-between mt-[30px] md:w-[100%] w-[97%]">
                        <CheckBox
                          className="font-medium leading-[normal] text-[16px] text-black_900 text-left"
                          inputClassName="border-[2px] border-gray_306 border-solid h-[25px] mr-[5px] rounded-[3px] w-[25px]"
                          label="Youtube"
                          name="Youtube"
                        ></CheckBox>
                        <Img
                          src="images/img_youtube.svg"
                          className="h-[63px] w-[63px]"
                          alt="youtube One"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col items-start justify-start p-[29px] sm:px-[20px] rounded-[14px] shadow-bs33 w-[100%]">
                    <div className="flex items-center justify-start md:w-[100%] w-[auto]">
                      <Text
                        className="font-medium text-black_905 text-left w-[auto]"
                        variant="body43"
                      >
                        Select Ad Goal
                      </Text>
                    </div>
                    <SelectBox
                      className="bg-gray_103 font-medium leading-[normal] mt-[31px] sm:pl-[20px] pl-[35px] py-[21px] rounded-[12px] text-[16px] text-black_900 text-left w-[100%]"
                      placeholderClassName="text-black_900"
                      name="selectOption"
                      placeholder="Click"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_415.svg"
                          className="h-[8px] mr-[32px] w-[17px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <div className="bg-gray_103 border-[1px] border-gray_317 border-solid flex flex-col gap-[20px] justify-start mb-[21px] mt-[11px] pb-[30px] rounded-[12px] shadow-bs35 w-[100%]">
                      <div className="bg-gray_200 flex items-start justify-end p-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]">
                        <Text
                          className="font-normal md:ml-[0] ml-[20px] not-italic text-black_900 text-left w-[auto]"
                          variant="body50"
                        >
                          Click
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[22px] items-start justify-start md:ml-[0] ml-[37px] md:w-[100%] w-[auto]">
                        <Text
                          className="font-normal not-italic text-gray_704 text-left w-[auto]"
                          variant="body50"
                        >
                          Conversion
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_704 text-left w-[auto]"
                          variant="body50"
                        >
                          Checkout
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_704 text-left w-[auto]"
                          variant="body50"
                        >
                          Engagement
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="absolute bottom-[0] flex flex-col md:hidden justify-start left-[0] md:px-[20px] w-[14%]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="md:h-[2225px] h-[2228px] relative w-[100%]">
              <div className="md:h-[2225px] h-[2228px] m-[auto] w-[100%]">
                <div className="absolute bg-white_A700 flex flex-col h-[100%] inset-[0] items-center justify-center m-[auto] pb-[1235px] w-[98%]">
                  <div className="bg-white_A700 flex items-center justify-end p-[8px] w-[100%]">
                    <div className="flex flex-col items-center justify-start mt-[23px] md:w-[100%] w-[40%]">
                      <Img
                        src="images/img_trash_green_502.svg"
                        className="h-[32px] w-[auto]"
                        alt="trash"
                      />
                      <Text
                        className="font-bold text-gray_952 text-left w-[auto]"
                        variant="body26"
                      >
                        Eclan
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_menus_white_a700.svg"
                    className="h-[597px] mt-[45px] w-[auto]"
                    alt="menus"
                  />
                  <div className="flex flex-col items-start justify-start mt-[143px] md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-gray_519 text-left w-[auto]"
                      variant="body59"
                    >
                      Eclan Dashboard
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_519 text-left w-[auto]"
                      variant="body59"
                    >
                      ©All Rights Reserved
                    </Text>
                    <Text
                      className="font-normal mt-[22px] not-italic text-gray_519 text-left w-[auto]"
                      variant="body59"
                    >
                      by Peterdraw
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_arrowleft_green_502.svg"
                  className="absolute h-[16px] right-[0] top-[15%] w-[16px]"
                  alt="arrowleft"
                />
              </div>
              <Line className="absolute bg-bluegray_108 h-[1769px] right-[3%] top-[0] w-[1px]" />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default FormAddNewCampaignPage;
