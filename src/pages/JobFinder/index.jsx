import React from "react";

import { Img, Text, CheckBox, Input, Line, Button } from "components";
import { CloseSVG } from "../../assets/images";

const JobFinderPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_953 flex font-poppins items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[288px]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-bluegray_935 flex flex-col gap-[37px] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
                <div className="bg-bluegray_101 flex items-center justify-start mt-[20px] p-[22px] sm:px-[20px] md:w-[100%] w-[96%]">
                  <Img
                    src="images/img_checkmark_bluegray_904.svg"
                    className="h-[24px] w-[24px]"
                    alt="checkmark"
                  />
                </div>
                <div className="flex flex-col gap-[32px] h-[711px] md:h-[auto] items-start justify-between mb-[16px] w-[auto]">
                  <div className="flex flex-col gap-[24px] items-start justify-start p-[2px] w-[240px]">
                    <div className="bg-deep_orange_600_0f flex flex-row gap-[12px] items-center justify-start p-[12px] rounded-[12px] w-[100%]">
                      <Img
                        src="images/img_trash_amber_401.svg"
                        className="h-[24px] w-[24px]"
                        alt="trash"
                      />
                      <Text
                        className="font-medium text-amber_401 text-left w-[auto]"
                        variant="body50"
                      >
                        Dashboard
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-center justify-start p-[12px] w-[100%]">
                      <Img
                        src="images/img_thumbsup.svg"
                        className="h-[24px] w-[24px]"
                        alt="thumbsup"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_428 text-left w-[auto]"
                        variant="body50"
                      >
                        Saved job
                      </Text>
                    </div>
                    <CheckBox
                      className="font-normal not-italic text-[16px] text-bluegray_428 text-left"
                      inputClassName="h-[undefinedpx] mr-[5px] w-[undefinedpx]"
                      label="Statistic"
                      name="Statistic"
                    ></CheckBox>
                    <div className="flex flex-row gap-[12px] items-center justify-start p-[12px] w-[100%]">
                      <Img
                        src="images/img_user_bluegray_428.svg"
                        className="h-[24px] w-[24px]"
                        alt="user"
                      />
                      <Text
                        className="font-normal not-italic text-bluegray_428 text-left w-[auto]"
                        variant="body50"
                      >
                        Application
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[40px] items-start justify-start w-[240px]">
                    <Text
                      className="font-normal not-italic text-bluegray_101 text-left w-[auto]"
                      variant="body50"
                    >
                      System
                    </Text>
                    <div className="flex flex-col gap-[24px] items-start justify-start p-[2px] w-[100%]">
                      <div className="flex flex-row gap-[12px] items-center justify-start p-[12px] w-[100%]">
                        <Img
                          src="images/img_car_white_a700_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="car"
                        />
                        <Text
                          className="font-normal not-italic text-bluegray_428 text-left w-[auto]"
                          variant="body50"
                        >
                          Help center
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start p-[12px] w-[100%]">
                        <Img
                          src="images/img_settings_bluegray_428.svg"
                          className="h-[24px] w-[24px]"
                          alt="settings"
                        />
                        <Text
                          className="font-normal not-italic text-bluegray_428 text-left w-[auto]"
                          variant="body50"
                        >
                          Setting
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[12px] items-center justify-start p-[12px] w-[100%]">
                        <Img
                          src="images/img_cut_amber_401.svg"
                          className="h-[24px] w-[24px]"
                          alt="cut"
                        />
                        <Text
                          className="font-normal not-italic text-amber_401 text-left w-[auto]"
                          variant="body50"
                        >
                          Logout account
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col gap-[30px] items-center justify-start md:px-[20px] w-[100%]">
            <div className="bg-bluegray_935 flex md:flex-col flex-row gap-[40px] items-center justify-start max-w-[1152px] p-[32px] sm:px-[20px] w-[100%]">
              <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                <Text
                  className="font-bold font-dmsans text-left text-white_A700 w-[auto]"
                  variant="body43"
                >
                  <span className="text-white_A700 text-[20px] font-poppins">
                    Hai{" "}
                  </span>
                  <span className="text-white_A700 text-[20px] font-poppins">
                    Rio Akbar
                  </span>
                </Text>
                <Text
                  className="font-normal font-poppins not-italic text-bluegray_428 text-left w-[auto]"
                  variant="body50"
                >
                  Search your dream job with safety
                </Text>
              </div>
              <Img
                src="images/img_frame313516.svg"
                className="h-[56px] w-[132px]"
                alt="Frame313516"
              />
            </div>
            <div className="flex flex-col gap-[32px] items-start justify-start md:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[16px] items-start justify-start md:w-[100%] w-[auto]">
                <Text
                  className="font-medium text-left text-white_A700 w-[auto]"
                  variant="body37"
                >
                  Job Search
                </Text>
                <div className="bg-bluegray_935 flex md:flex-col flex-row gap-[24px] items-center justify-start max-w-[1088px] p-[12px] rounded-[16px] w-[100%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="flex-1 font-normal not-italic p-[0] text-[16px] placeholder:text-gray_518 text-gray_518 text-left w-[100%]"
                    wrapClassName="bg-gray_809 flex gap-[12px] p-[16px] rounded-[10px] w-[100%]"
                    name="Frame313347"
                    placeholder="Search : Designer, Developer"
                    prefix={
                      <Img
                        src="images/img_search_gray_518.svg"
                        className="cursor-pointer mr-[12px] my-[auto]"
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
                  <Line className="bg-gray_810 md:h-[1px] h-[56px] md:w-[100%] w-[1px]" />
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start sm:w-[100%] w-[auto]">
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body50"
                    >
                      Sort by
                    </Text>
                    <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start sm:w-[100%] w-[auto]">
                      <Button className="bg-white_A700_14 cursor-pointer font-normal min-w-[123px] not-italic sm:px-[20px] px-[24px] py-[12px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                        Category
                      </Button>
                      <Button className="bg-white_A700_14 cursor-pointer font-normal min-w-[121px] not-italic sm:px-[20px] px-[24px] py-[12px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                        Job Type
                      </Button>
                      <Button className="bg-white_A700_14 cursor-pointer font-normal min-w-[153px] not-italic sm:px-[20px] px-[24px] py-[12px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                        Job Contract
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[676px] relative w-[100%]">
                <div className="absolute flex flex-col gap-[18px] items-start justify-start left-[0] top-[0] w-[auto]">
                  <div className="flex items-center justify-start w-[100%]">
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body37"
                    >
                      Job Filter
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start justify-start sm:w-[100%] w-[auto]">
                    <div className="bg-bluegray_935 flex flex-col gap-[10px] items-start justify-center px-[16px] py-[20px] rounded-[12px] w-[340px]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body50"
                      >
                        Job Type
                      </Text>
                      <div className="flex flex-col gap-[4px] items-start justify-start w-[100%]">
                        <div className="bg-bluegray_935 flex flex-row gap-[12px] items-center justify-start p-[8px] rounded-[12px] w-[100%]">
                          <Img
                            src="images/img_bookmark_white_a700.svg"
                            className="h-[24px] w-[24px]"
                            alt="bookmark"
                          />
                          <div className="flex flex-1 flex-row gap-[8px] items-center justify-start w-[100%]">
                            <Text
                              className="font-normal not-italic text-left text-white_A700 w-[auto]"
                              variant="body50"
                            >
                              Onsite
                            </Text>
                            <Input
                              className="flex-1 font-normal not-italic px-[16px] py-[8px] text-[14px] placeholder:text-gray_518 text-gray_518 text-left w-[100%]"
                              wrapClassName="bg-gray_809 flex-1 rounded-[8px] w-[100%]"
                              name="Frame313347 One"
                              placeholder="Location"
                            ></Input>
                          </div>
                        </div>
                        <div className="bg-bluegray_935 flex flex-row gap-[12px] items-center justify-start p-[8px] rounded-[12px] w-[100%]">
                          <Img
                            src="images/img_checkmark_amber_401.svg"
                            className="h-[24px] w-[24px]"
                            alt="checkmark One"
                          />
                          <Text
                            className="flex-1 font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body50"
                          >
                            Remote job
                          </Text>
                        </div>
                        <div className="bg-bluegray_935 flex flex-row gap-[12px] items-center justify-start p-[8px] rounded-[12px] w-[100%]">
                          <Img
                            src="images/img_bookmark_white_a700.svg"
                            className="h-[24px] w-[24px]"
                            alt="bookmark One"
                          />
                          <Text
                            className="flex-1 font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body50"
                          >
                            Hybrid
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-bluegray_935 flex flex-col gap-[10px] items-start justify-center px-[16px] py-[20px] rounded-[12px] w-[340px]">
                      <Text
                        className="font-semibold text-left text-white_A700 w-[auto]"
                        variant="body50"
                      >
                        By Category
                      </Text>
                      <div className="flex flex-col gap-[6px] items-start justify-start w-[100%]">
                        <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                          <Text
                            className="bg-gray_811 font-normal justify-center not-italic px-[12px] py-[6px] rounded-[8px] text-left text-white_A700 w-[auto]"
                            variant="body50"
                          >
                            Designer
                          </Text>
                          <Text
                            className="bg-gray_811 font-normal justify-center not-italic px-[12px] py-[6px] rounded-[8px] text-left text-white_A700 w-[auto]"
                            variant="body50"
                          >
                            Developer
                          </Text>
                          <Text
                            className="bg-gray_811 font-normal justify-center not-italic px-[12px] py-[6px] rounded-[8px] text-left text-white_A700 w-[auto]"
                            variant="body50"
                          >
                            Engineer
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[6px] items-start justify-start w-[auto]">
                          <Button className="bg-gray_811 cursor-pointer font-normal min-w-[87px] not-italic px-[12px] py-[6px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                            FInance
                          </Button>
                          <Text
                            className="bg-gray_811 font-normal justify-center not-italic px-[12px] py-[6px] rounded-[8px] text-left text-white_A700 w-[auto]"
                            variant="body50"
                          >
                            Marketing
                          </Text>
                          <Button className="bg-gray_811 cursor-pointer font-normal min-w-[72px] not-italic px-[12px] py-[6px] rounded-[8px] text-[16px] text-center text-white_A700 w-[auto]">
                            Writer
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-bluegray_935 h-[140px] px-[16px] py-[20px] relative rounded-[12px] sm:w-[100%] w-[428px]">
                      <div className="absolute bg-bluegray_935 flex h-[100%] inset-y-[0] items-start justify-center left-[0] my-[auto] px-[16px] py-[20px] rounded-[12px] w-[340px]">
                        <Text
                          className="font-semibold text-left text-white_A700 w-[auto]"
                          variant="body50"
                        >
                          Salary
                        </Text>
                      </div>
                      <div className="absolute bottom-[14%] flex inset-x-[0] mx-[auto] w-[100%]">
                        <div className="flex flex-1 flex-col gap-[6px] items-start justify-start my-[auto] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_518 text-left w-[auto]"
                            variant="body59"
                          >
                            Minimum
                          </Text>
                          <Text
                            className="bg-gray_809 font-normal not-italic px-[16px] py-[12px] rounded-[12px] text-gray_518 text-left w-[100%]"
                            variant="body50"
                          >
                            Min amount
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-col gap-[6px] items-start justify-start ml-[-108px] my-[auto] w-[100%] z-[1]">
                          <Text
                            className="font-normal not-italic text-gray_518 text-left w-[auto]"
                            variant="body59"
                          >
                            Maximum
                          </Text>
                          <Text
                            className="bg-gray_809 font-normal not-italic px-[16px] py-[12px] rounded-[12px] text-gray_518 text-left w-[100%]"
                            variant="body50"
                          >
                            Max amount
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col gap-[16px] h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[1%] w-[auto]">
                  <div className="flex flex-row gap-[16px] items-center justify-between w-[100%]">
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body37"
                    >
                      Popular job
                    </Text>
                    <Text
                      className="font-normal not-italic text-amber_401 text-left w-[auto]"
                      variant="body50"
                    >
                      See all popular job
                    </Text>
                  </div>
                  <div className="flex items-start justify-start md:w-[100%] w-[auto]">
                    <div className="gap-[12px] md:gap-[20px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                      <div className="bg-bluegray_935 flex flex-1 flex-col gap-[16px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                        <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                          <Button className="bg-gray_810 flex h-[52px] items-center justify-center p-[12px] rounded-[16px] w-[52px]">
                            <Img
                              src="images/img_user_white_a700_52x52.svg"
                              className="h-[24px]"
                              alt="user One"
                            />
                          </Button>
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body43"
                            >
                              UI/UX Designer
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_428 text-left w-[auto]"
                              variant="body50"
                            >
                              Vektora Studio
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[87px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Design
                          </Button>
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[101px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Parttime
                          </Button>
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[95px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Remote
                          </Button>
                        </div>
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[312px] not-italic text-bluegray_115 text-left"
                          variant="body59"
                        >
                          Bigest design studio in the world needed yoour skill
                          set to contribute to our agency
                        </Text>
                      </div>
                      <div className="bg-bluegray_935 flex flex-1 flex-col gap-[16px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                        <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                          <Button className="bg-gray_810 flex h-[52px] items-center justify-center p-[12px] rounded-[16px] w-[52px]">
                            <Img
                              src="images/img_user_white_a700_52x52.svg"
                              className="h-[24px]"
                              alt="user Two"
                            />
                          </Button>
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body43"
                            >
                              UI/UX Designer
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_428 text-left w-[auto]"
                              variant="body50"
                            >
                              Vektora Studio
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[87px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Design
                          </Button>
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[101px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Parttime
                          </Button>
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[95px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Remote
                          </Button>
                        </div>
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[312px] not-italic text-bluegray_115 text-left"
                          variant="body59"
                        >
                          Bigest design studio in the world needed yoour skill
                          set to contribute to our agency
                        </Text>
                      </div>
                      <div className="bg-bluegray_935 flex flex-1 flex-col gap-[16px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                        <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                          <Button className="bg-gray_810 flex h-[52px] items-center justify-center p-[12px] rounded-[16px] w-[52px]">
                            <Img
                              src="images/img_user_white_a700_52x52.svg"
                              className="h-[24px]"
                              alt="user Three"
                            />
                          </Button>
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body43"
                            >
                              UI/UX Designer
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_428 text-left w-[auto]"
                              variant="body50"
                            >
                              Vektora Studio
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[87px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Design
                          </Button>
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[101px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Parttime
                          </Button>
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[95px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Remote
                          </Button>
                        </div>
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[312px] not-italic text-bluegray_115 text-left"
                          variant="body59"
                        >
                          Bigest design studio in the world needed yoour skill
                          set to contribute to our agency
                        </Text>
                      </div>
                      <div className="bg-bluegray_935 flex flex-1 flex-col gap-[16px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                        <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                          <Button className="bg-gray_810 flex h-[52px] items-center justify-center p-[12px] rounded-[16px] w-[52px]">
                            <Img
                              src="images/img_user_white_a700_52x52.svg"
                              className="h-[24px]"
                              alt="user Four"
                            />
                          </Button>
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body43"
                            >
                              UI/UX Designer
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_428 text-left w-[auto]"
                              variant="body50"
                            >
                              Vektora Studio
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[87px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Design
                          </Button>
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[101px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Parttime
                          </Button>
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[95px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Remote
                          </Button>
                        </div>
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[312px] not-italic text-bluegray_115 text-left"
                          variant="body59"
                        >
                          Bigest design studio in the world needed yoour skill
                          set to contribute to our agency
                        </Text>
                      </div>
                      <div className="bg-bluegray_935 flex flex-1 flex-col gap-[16px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                        <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                          <Button className="bg-gray_810 flex h-[52px] items-center justify-center p-[12px] rounded-[16px] w-[52px]">
                            <Img
                              src="images/img_user_white_a700_52x52.svg"
                              className="h-[24px]"
                              alt="user Five"
                            />
                          </Button>
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body43"
                            >
                              UI/UX Designer
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_428 text-left w-[auto]"
                              variant="body50"
                            >
                              Vektora Studio
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[87px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Design
                          </Button>
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[101px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Parttime
                          </Button>
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[95px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Remote
                          </Button>
                        </div>
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[312px] not-italic text-bluegray_115 text-left"
                          variant="body59"
                        >
                          Bigest design studio in the world needed yoour skill
                          set to contribute to our agency
                        </Text>
                      </div>
                      <div className="bg-bluegray_935 flex flex-1 flex-col gap-[16px] items-start justify-start p-[16px] rounded-[12px] w-[100%]">
                        <div className="flex flex-row gap-[16px] items-center justify-start w-[100%]">
                          <Button className="bg-gray_810 flex h-[52px] items-center justify-center p-[12px] rounded-[16px] w-[52px]">
                            <Img
                              src="images/img_user_white_a700_52x52.svg"
                              className="h-[24px]"
                              alt="user Six"
                            />
                          </Button>
                          <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                            <Text
                              className="font-bold text-left text-white_A700 w-[auto]"
                              variant="body43"
                            >
                              UI/UX Designer
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_428 text-left w-[auto]"
                              variant="body50"
                            >
                              Vektora Studio
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[87px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Design
                          </Button>
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[101px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Parttime
                          </Button>
                          <Button className="bg-gray_810 cursor-pointer font-normal min-w-[95px] not-italic px-[16px] py-[8px] rounded-[12px] text-[16px] text-center text-white_A700 w-[auto]">
                            Remote
                          </Button>
                        </div>
                        <Text
                          className="font-normal leading-[150.00%] md:max-w-[100%] max-w-[312px] not-italic text-bluegray_115 text-left"
                          variant="body59"
                        >
                          Bigest design studio in the world needed yoour skill
                          set to contribute to our agency
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
    </>
  );
};

export default JobFinderPage;
