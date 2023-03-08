import React from "react";

import { Img, Text, Input, List, Button, Line } from "components";
import { CloseSVG } from "../../assets/images";

const FoodPlanDashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-poppins gap-[32px] items-center mx-[auto] sm:pr-[20px] pr-[32px] w-[100%]">
        <div className="flex md:px-[20px] relative md:w-[100%] w-[80%]">
          <Img
            src="images/img_group9542.svg"
            className="h-[899px] my-[auto] w-[auto]"
            alt="Group9542"
          />
          <div className="bg-gray_63 flex flex-col items-center justify-start ml-[-120px] my-[auto] p-[32px] sm:px-[20px] rounded-[40px] shadow-bs38 w-[91%] z-[1]">
            <div className="flex items-center justify-start mt-[10px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="font-semibold text-black_906 text-left w-[auto]"
                    variant="body26"
                  >
                    Hi, Poetri Sihombing
                  </Text>
                  <Text
                    className="font-normal mt-[3px] not-italic text-gray_614 text-left w-[auto]"
                    variant="body50"
                  >
                    What’s healty food today?
                  </Text>
                </div>
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="flex-1 font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-gray_614 text-gray_614 text-left w-[100%]"
                  wrapClassName="bg-white_A700 flex mb-[17px] md:mt-[0] md:w-[100%] mt-[9px] pl-[16px] pr-[35px] py-[13px] rounded-[16px] sm:mt-[0] sm:pr-[20px] sm:w-[100%] w-[50%]"
                  name="Search"
                  placeholder="Search"
                  prefix={
                    <Img
                      src="images/img_search_gray_614.svg"
                      className="cursor-pointer mr-[8px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#727272"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
              </div>
            </div>
            <div className="flex items-center justify-start mt-[39px] w-[100%]">
              <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                <Text
                  className="font-medium text-bluegray_939 text-left w-[auto]"
                  variant="body43"
                >
                  Based on the type of food you like
                </Text>
                <Text
                  className="font-normal sm:mt-[0] mt-[2px] not-italic text-bluegray_900_66 text-left w-[auto]"
                  variant="body50"
                >
                  View all
                </Text>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-[22px] w-[100%]"
              orientation="horizontal"
            >
              <div className="md:h-[237px] h-[267px] relative w-[100%]">
                <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[23px] inset-x-[0] items-center justify-end mx-[auto] p-[16px] rounded-[32px] shadow-bs39 w-[100%]">
                  <div className="flex flex-col items-center justify-start mt-[96px] md:w-[100%] w-[79%]">
                    <Text
                      className="font-semibold text-bluegray_939 text-left w-[auto]"
                      variant="body50"
                    >
                      B2 Salado Tomato
                    </Text>
                    <div className="flex flex-row gap-[7px] items-start justify-start mt-[3px] md:w-[100%] w-[85%]">
                      <div className="flex flex-row items-start justify-evenly w-[29%]">
                        <div className="flex h-[12px] items-center justify-start mt-[2px] w-[12px]">
                          <Img
                            src="images/img_star1_12x12.svg"
                            className="h-[12px] w-[12px]"
                            alt="StarOne"
                          />
                        </div>
                        <Text
                          className="font-normal h-[18px] not-italic text-bluegray_900_100 text-left w-[auto]"
                          variant="body67"
                        >
                          4,8
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_900_51 text-left w-[auto]"
                        variant="body67"
                      >
                        ( 15K reveiws )
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_group69.svg"
                    className="h-[40px] w-[auto]"
                    alt="GroupSixtyNine"
                  />
                </div>
                <div className="absolute bg-black_900_33 flex inset-x-[0] items-end justify-start mx-[auto] p-[10px] shadow-bs40 top-[0] w-[auto]">
                  <Text
                    className="bg-orange_305 flex font-semibold h-[40px] items-center justify-center mb-[12px] mt-[63px] rounded-[50%] text-center text-shadow-ts2 text-white_A700 w-[40px]"
                    variant="body59"
                  >
                    $15
                  </Text>
                </div>
              </div>
              <div className="md:h-[237px] h-[283px] relative w-[100%]">
                <div className="bg-orange_305 flex h-[100%] items-center justify-start ml-[auto] mr-[48px] mt-[89px] p-[8px] rounded-[50%] shadow-bs41 w-[40px]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    variant="body59"
                  >
                    $15
                  </Text>
                </div>
                <div className="absolute md:h-[237px] h-[283px] inset-[0] justify-center m-[auto] w-[100%]">
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[23px] inset-x-[0] items-center justify-end mx-[auto] p-[16px] rounded-[32px] shadow-bs39 w-[100%]">
                    <div className="flex flex-col items-center justify-start mt-[96px] md:w-[100%] w-[85%]">
                      <Text
                        className="font-semibold text-bluegray_939 text-left w-[auto]"
                        variant="body50"
                      >
                        Salmon Bean Resto
                      </Text>
                      <div className="flex flex-row gap-[8px] items-start justify-start mt-[3px] md:w-[100%] w-[82%]">
                        <div className="flex flex-row items-start justify-evenly w-[27%]">
                          <div className="flex h-[12px] items-center justify-start mt-[2px] w-[12px]">
                            <Img
                              src="images/img_star1_1.svg"
                              className="h-[12px] w-[12px]"
                              alt="StarOne One"
                            />
                          </div>
                          <Text
                            className="font-normal not-italic text-bluegray_900_100 text-left w-[auto]"
                            variant="body67"
                          >
                            3,2
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-bluegray_900_51 text-left w-[auto]"
                          variant="body67"
                        >
                          ( 35K reveiws )
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_group69.svg"
                      className="h-[40px] w-[auto]"
                      alt="GroupSixtyNine One"
                    />
                  </div>
                  <div className="absolute bg-black_900_33 flex h-[151px] inset-x-[0] items-end justify-start mx-[auto] p-[13px] shadow-bs42 top-[0] w-[151px]">
                    <Text
                      className="bg-orange_305 flex font-semibold h-[40px] items-center justify-center mb-[9px] mt-[76px] rounded-[50%] text-center text-shadow-ts2 text-white_A700 w-[40px]"
                      variant="body59"
                    >
                      $15
                    </Text>
                  </div>
                </div>
              </div>
              <div className="md:h-[237px] h-[284px] relative w-[100%]">
                <div className="bg-orange_305 flex h-[100%] items-center justify-start ml-[auto] mr-[48px] mt-[90px] p-[8px] rounded-[50%] shadow-bs41 w-[40px]">
                  <Text
                    className="font-semibold text-left text-white_A700 w-[auto]"
                    variant="body59"
                  >
                    $15
                  </Text>
                </div>
                <div className="absolute md:h-[237px] h-[284px] inset-[0] justify-center m-[auto] w-[100%]">
                  <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[22px] inset-x-[0] items-center justify-end mx-[auto] p-[16px] rounded-[32px] shadow-bs39 w-[100%]">
                    <div className="flex flex-col items-center justify-start mt-[98px] md:w-[100%] w-[89%]">
                      <Text
                        className="font-semibold text-bluegray_939 text-left w-[auto]"
                        variant="body50"
                      >
                        Salmon Petai Onigiri
                      </Text>
                      <div className="flex flex-row gap-[7px] items-start justify-start mt-[2px] md:w-[100%] w-[76%]">
                        <div className="flex flex-row items-start justify-evenly w-[29%]">
                          <div className="flex h-[12px] items-center justify-start mt-[2px] w-[12px]">
                            <Img
                              src="images/img_star1_2.svg"
                              className="h-[12px] w-[12px]"
                              alt="StarOne Two"
                            />
                          </div>
                          <Text
                            className="font-normal h-[18px] not-italic text-bluegray_900_100 text-left w-[auto]"
                            variant="body67"
                          >
                            4,8
                          </Text>
                        </div>
                        <Text
                          className="font-normal not-italic text-bluegray_900_51 text-left w-[auto]"
                          variant="body67"
                        >
                          ( 10K reveiws )
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_group69.svg"
                      className="h-[40px] w-[auto]"
                      alt="GroupSixtyNine Two"
                    />
                  </div>
                  <div className="absolute bg-black_900_33 flex inset-x-[0] items-end justify-start mx-[auto] p-[14px] shadow-bs42 top-[0] w-[151px]">
                    <Text
                      className="bg-orange_305 flex font-semibold h-[40px] items-center justify-center mb-[8px] mt-[76px] rounded-[50%] text-center text-shadow-ts2 text-white_A700 w-[40px]"
                      variant="body59"
                    >
                      $15
                    </Text>
                  </div>
                </div>
              </div>
              <div className="md:h-[237px] h-[283px] relative w-[100%]">
                <div className="absolute bg-white_A700 bottom-[0] flex flex-col gap-[23px] inset-x-[0] items-center justify-end mx-[auto] p-[16px] rounded-[32px] shadow-bs39 w-[100%]">
                  <div className="flex flex-col items-center justify-start mt-[96px] md:w-[100%] w-[85%]">
                    <Text
                      className="font-semibold text-bluegray_939 text-left w-[auto]"
                      variant="body50"
                    >
                      Salmon Bean Resto
                    </Text>
                    <div className="flex flex-row gap-[7px] items-start justify-start mt-[3px] md:w-[100%] w-[77%]">
                      <div className="flex flex-row items-start justify-evenly w-[29%]">
                        <div className="flex h-[12px] items-center justify-start mt-[2px] w-[12px]">
                          <Img
                            src="images/img_star1_3.svg"
                            className="h-[12px] w-[12px]"
                            alt="StarOne Three"
                          />
                        </div>
                        <Text
                          className="font-normal h-[18px] not-italic text-bluegray_900_100 text-left w-[auto]"
                          variant="body67"
                        >
                          4,8
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_900_51 text-left w-[auto]"
                        variant="body67"
                      >
                        ( 8K reveiws )
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_group69.svg"
                    className="h-[40px] w-[auto]"
                    alt="GroupSixtyNine Three"
                  />
                </div>
                <div className="absolute bg-black_900_33 flex h-[151px] inset-x-[0] items-end justify-start mx-[auto] p-[7px] shadow-bs42 top-[0] w-[151px]">
                  <Text
                    className="bg-orange_305 flex font-semibold h-[40px] items-center justify-center mb-[15px] mt-[82px] rounded-[50%] text-center text-shadow-ts2 text-white_A700 w-[40px]"
                    variant="body59"
                  >
                    $15
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex items-center justify-start mb-[8px] mt-[31px] w-[100%]">
              <div className="flex flex-col gap-[24px] items-center justify-start w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                    <Text
                      className="font-medium text-bluegray_939 text-left w-[auto]"
                      variant="body43"
                    >
                      Favorite Restaurant
                    </Text>
                    <Text
                      className="font-normal mt-[4px] not-italic text-bluegray_900_66 text-left w-[auto]"
                      variant="body50"
                    >
                      View all
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                  <div className="bg-white_A700 flex md:flex-1 flex-col gap-[18px] items-center justify-start pb-[24px] rounded-[32px] shadow-bs39 md:w-[100%] w-[32%]">
                    <div className="bg-black_900_33 h-[148px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] w-[100%]"></div>
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[85%]">
                      <Text
                        className="capitalize font-semibold text-bluegray_939 text-left w-[auto]"
                        variant="body47"
                      >
                        Fancy You Restaurant
                      </Text>
                      <Text
                        className="capitalize font-normal mt-[5px] not-italic text-bluegray_900_51 text-left w-[auto]"
                        variant="body59"
                      >
                        Jl. Kaswari Mochi No 3214, Sukabumi
                      </Text>
                      <div className="flex flex-row gap-[8px] items-start justify-start mt-[14px] md:w-[100%] w-[86%]">
                        <Img
                          src="images/img_sort_white_a700.svg"
                          className="h-[20px] w-[auto]"
                          alt="sort"
                        />
                        <Text
                          className="capitalize font-medium text-bluegray_939 text-left w-[auto]"
                          variant="body59"
                        >
                          (3,139 Reviews)
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[279px] relative md:w-[100%] w-[32%]">
                    <div className="absolute bg-white_A700 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[24px] sm:px-[20px] rounded-[32px] shadow-bs39 w-[100%]">
                      <div className="flex flex-col items-start justify-start mt-[141px] w-[100%]">
                        <Text
                          className="capitalize font-semibold text-bluegray_939 text-left w-[auto]"
                          variant="body47"
                        >
                          Unique Restaurant
                        </Text>
                        <Text
                          className="capitalize font-normal mt-[6px] not-italic text-bluegray_900_51 text-left w-[auto]"
                          variant="body59"
                        >
                          Jl. Sekarwangi No 691, Sukabumi
                        </Text>
                        <div className="flex flex-row gap-[8px] items-start justify-start mt-[14px] md:w-[100%] w-[86%]">
                          <Img
                            src="images/img_minimize_orange_305.svg"
                            className="h-[20px] w-[auto]"
                            alt="minimize"
                          />
                          <Text
                            className="capitalize font-medium text-bluegray_939 text-left w-[auto]"
                            variant="body59"
                          >
                            (3432 Reviews)
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bg-black_900_33 h-[148px] inset-x-[0] mx-[auto] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] top-[0] w-[100%]"></div>
                  </div>
                  <div className="bg-white_A700 flex md:flex-1 flex-col gap-[17px] items-center justify-start pb-[24px] rounded-[32px] shadow-bs39 md:w-[100%] w-[32%]">
                    <div className="bg-black_900_33 h-[148px] rounded-bl-[0] rounded-br-[0] rounded-tl-[32px] rounded-tr-[32px] w-[100%]"></div>
                    <div className="flex flex-col items-start justify-start md:w-[100%] w-[85%]">
                      <Text
                        className="capitalize font-semibold text-bluegray_939 text-left w-[auto]"
                        variant="body47"
                      >
                        Japanis Restaurant
                      </Text>
                      <Text
                        className="capitalize font-normal mt-[6px] not-italic text-bluegray_900_51 text-left w-[auto]"
                        variant="body59"
                      >
                        Jl. Backstreet No 135, Cibadak
                      </Text>
                      <div className="flex flex-row gap-[8px] items-start justify-start mt-[14px] md:w-[100%] w-[83%]">
                        <Img
                          src="images/img_sort_white_a700.svg"
                          className="h-[20px] w-[auto]"
                          alt="sort One"
                        />
                        <Text
                          className="capitalize font-medium text-bluegray_939 text-left w-[auto]"
                          variant="body59"
                        >
                          (654 Reviews)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end md:px-[20px] md:w-[100%] w-[19%]">
          <div className="flex flex-col items-start justify-start w-[100%]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex flex-row gap-[17px] items-start justify-between w-[100%]">
                <div className="flex flex-row gap-[16px] items-start justify-between w-[78%]">
                  <div className="bg-black_900_33 h-[40px] mb-[4px] rounded-[50%] w-[40px]"></div>
                  <div className="flex items-center justify-start w-[auto]">
                    <div className="flex flex-col items-start justify-start w-[100%]">
                      <div className="flex flex-row gap-[14px] items-center justify-between w-[100%]">
                        <Text
                          className="font-semibold text-bluegray_939 text-left w-[auto]"
                          variant="body59"
                        >
                          Poetri Sihombing
                        </Text>
                        <Img
                          src="images/img_arrowdown_bluegray_928.svg"
                          className="h-[8px] w-[8px]"
                          alt="arrowdown"
                        />
                      </div>
                      <Text
                        className="font-normal mt-[4px] not-italic text-bluegray_900_89 text-left w-[auto]"
                        variant="body67"
                      >
                        Collage Student
                      </Text>
                    </div>
                  </div>
                </div>
                <Button className="bg-white_A700 flex h-[40px] items-center justify-center mb-[4px] p-[8px] rounded-[50%] w-[40px]">
                  <Img
                    src="images/img_notification_bluegray_939.svg"
                    className="h-[24px]"
                    alt="notification"
                  />
                </Button>
              </div>
            </div>
            <Text
              className="font-medium mt-[32px] text-bluegray_939 text-left w-[auto]"
              variant="body47"
            >
              Make Your day
            </Text>
            <Text
              className="font-normal mt-[6px] not-italic text-bluegray_900_89 text-left w-[auto]"
              variant="body67"
            >
              02 April 2022
            </Text>
            <Text
              className="font-semibold mt-[30px] text-bluegray_939 text-left w-[auto]"
              variant="body59"
            >
              Breakfast
            </Text>
            <List
              className="flex-col gap-[8px] grid items-center mt-[16px] w-[100%]"
              orientation="vertical"
            >
              <div className="bg-white_A700 flex flex-1 items-start justify-start p-[4px] rounded-[24px] shadow-bs43 w-[100%]">
                <div className="flex flex-row gap-[8px] items-center justify-start my-[6px] md:w-[100%] w-[93%]">
                  <div className="h-[64px] relative w-[64px]">
                    <Button className="bg-red_A203 flex h-[40px] items-center justify-center m-[auto] p-[10px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_volume_40x40.svg"
                        className="h-[20px]"
                        alt="volume"
                      />
                    </Button>
                    <div className="absolute bg-gray_400 h-[64px] inset-[0] justify-center m-[auto] shadow-bs42 w-[64px]"></div>
                  </div>
                  <div className="flex flex-col gap-[6px] items-start justify-start w-[69%]">
                    <Text
                      className="font-semibold text-bluegray_939 text-left w-[auto]"
                      variant="body50"
                    >
                      Salmon Bean Resto
                    </Text>
                    <div className="flex flex-row gap-[7px] items-start justify-start md:w-[100%] w-[77%]">
                      <div className="flex flex-row items-start justify-evenly w-[29%]">
                        <div className="flex h-[12px] items-center justify-start mt-[2px] w-[12px]">
                          <Img
                            src="images/img_star1_4.svg"
                            className="h-[12px] w-[12px]"
                            alt="StarOne Four"
                          />
                        </div>
                        <Text
                          className="font-normal h-[18px] not-italic text-bluegray_900_100 text-left w-[auto]"
                          variant="body67"
                        >
                          4,8
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_900_51 text-left w-[auto]"
                        variant="body67"
                      >
                        ( 8K reveiws )
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Line className="self-center h-[1px] bg-gray_400 w-[100%]" />
              <div className="bg-white_A700 flex flex-1 items-start justify-start p-[4px] rounded-[24px] shadow-bs43 w-[100%]">
                <div className="flex flex-row gap-[8px] items-center justify-start my-[6px] md:w-[100%] w-[94%]">
                  <div className="h-[64px] relative w-[64px]">
                    <Button className="bg-red_A203 flex h-[40px] items-center justify-center m-[auto] p-[10px] rounded-[50%] w-[40px]">
                      <Img
                        src="images/img_volume_40x40.svg"
                        className="h-[20px]"
                        alt="volume One"
                      />
                    </Button>
                    <div className="absolute bg-gray_400 h-[64px] inset-[0] justify-center m-[auto] shadow-bs42 w-[64px]"></div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[69%]">
                    <Text
                      className="font-semibold text-bluegray_939 text-left w-[auto]"
                      variant="body50"
                    >
                      Salado Petai Onigiri
                    </Text>
                    <div className="flex flex-row gap-[7px] items-start justify-start mt-[4px] md:w-[100%] w-[79%]">
                      <div className="flex flex-row items-start justify-evenly w-[29%]">
                        <div className="flex h-[12px] items-center justify-start mt-[2px] w-[12px]">
                          <Img
                            src="images/img_star1_5.svg"
                            className="h-[12px] w-[12px]"
                            alt="StarOne Five"
                          />
                        </div>
                        <Text
                          className="font-normal h-[18px] not-italic text-bluegray_900_100 text-left w-[auto]"
                          variant="body67"
                        >
                          4,8
                        </Text>
                      </div>
                      <Text
                        className="font-normal not-italic text-bluegray_900_51 text-left w-[auto]"
                        variant="body67"
                      >
                        ( 10K reveiws )
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <List
              className="flex-col gap-[11.5px] grid items-center mt-[23px] w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-bluegray_939 text-left w-[auto]"
                  variant="body59"
                >
                  Launch
                </Text>
                <div className="bg-red_51 border-[2px] border-dashed border-pink_503 flex items-center justify-end p-[14px] rounded-[16px] w-[100%]">
                  <Text
                    className="font-normal mt-[2px] not-italic text-left text-pink_503 w-[auto]"
                    variant="body59"
                  >
                    Drop here to add
                  </Text>
                </div>
              </div>
              <Line className="self-center h-[1px] bg-gray_400 w-[100%]" />
              <div className="flex flex-1 flex-col gap-[16px] items-start justify-start w-[100%]">
                <Text
                  className="font-semibold text-bluegray_939 text-left w-[auto]"
                  variant="body59"
                >
                  Dinner
                </Text>
                <div className="bg-red_51 border-[2px] border-dashed border-pink_503 flex items-center justify-end p-[14px] rounded-[16px] w-[100%]">
                  <Text
                    className="font-normal mt-[2px] not-italic text-left text-pink_503 w-[auto]"
                    variant="body59"
                  >
                    Drop here to add
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-row items-start justify-between mt-[48px] w-[100%]">
              <Text
                className="font-semibold text-bluegray_939 text-left w-[auto]"
                variant="body59"
              >
                Delivery Address
              </Text>
              <Text
                className="font-normal not-italic text-bluegray_900_66 text-right w-[auto]"
                variant="body59"
              >
                Edit
              </Text>
            </div>
            <Text
              className="font-normal mt-[15px] not-italic text-bluegray_900_51 text-left w-[100%]"
              variant="body59"
            >
              Jl. Backstreet No 135 Cibadak. West Java Sukabumi 3314
            </Text>
            <Button className="bg-pink_503 cursor-pointer font-semibold leading-[normal] min-w-[257px] mt-[32px] py-[14px] rounded-[26px] text-[16px] text-center text-white_A700 w-[auto]">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodPlanDashboardPage;
