import React from "react";

import { Img, Text, Button, Input, List, SelectBox } from "components";
import { CloseSVG } from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SewuJobJobFinderDashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_103 flex font-plusjakartasans items-center justify-end mx-[auto] w-[100%]">
        <div className="flex flex-col gap-[40px] items-center justify-end w-[100%]">
          <header className="flex items-center justify-center md:px-[20px] w-[100%]">
            <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-center p-[24px] sm:px-[20px] w-[100%]">
              <div
                className="bg-cover bg-no-repeat flex h-[40px] items-center justify-start p-[10px] rounded-[4px] w-[40px]"
                style={{ backgroundImage: "url('images/img_group828.svg')" }}
              >
                <Img
                  src="images/img_volume_white_a700_16x20.svg"
                  className="h-[16px] my-[2px] w-[auto]"
                  alt="volume"
                />
              </div>
              <Text
                className="font-bold md:ml-[0] ml-[4px] text-gray_938 text-left tracking-[-1.00px] w-[auto]"
                variant="body32"
              >
                Job
              </Text>
              <ul className="flex sm:flex-1 sm:flex-col flex-row gap-[48px] sm:hidden items-start justify-start md:ml-[0] ml-[208px] sm:w-[100%] w-[auto] common-row-list">
                <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer hover:font-bold font-bold text-[14px] text-gray_938 text-left tracking-[0.56px]"
                    href="javascript:"
                  >
                    FIND JOB
                  </a>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer hover:font-bold font-semibold text-[14px] text-gray_505 hover:text-gray_938 text-left tracking-[0.56px]"
                    href="javascript:"
                  >
                    MY JOB
                  </a>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer hover:font-bold font-semibold text-[14px] text-gray_505 hover:text-gray_938 text-left tracking-[0.56px]"
                    href="javascript:"
                  >
                    HOW IT WORK
                  </a>
                </li>
                <li className="sm:w-[100%] sm:my-[10px] w-[auto]">
                  <a
                    className="cursor-pointer hover:font-bold font-semibold text-[14px] text-gray_505 hover:text-gray_938 text-left tracking-[0.56px]"
                    href="javascript:"
                  >
                    HELP CENTER
                  </a>
                </li>
              </ul>
              <div
                className="bg-cover bg-no-repeat flex md:flex-1 h-[20px] items-end justify-start md:ml-[0] ml-[326px] pl-[4px] py-[4px] md:w-[100%] w-[2%]"
                style={{ backgroundImage: "url('images/img_group2.svg')" }}
              >
                <div className="bg-red_404 border-[1px] border-solid border-white_A700 h-[8px] mb-[3px] rounded-[50%] w-[8px]"></div>
              </div>
              <Img
                src="images/img_signal_bluegray_904.svg"
                className="h-[20px] md:ml-[0] ml-[40px] w-[auto]"
                alt="signal"
              />
              <Img
                src="images/img_settings_bluegray_904_20x24.svg"
                className="h-[20px] md:ml-[0] ml-[40px] w-[auto]"
                alt="settings"
              />
              <Img
                src="images/img_brightness_bluegray_101.svg"
                className="h-[40px] md:ml-[0] ml-[40px] mr-[16px] w-[68px]"
                alt="brightness"
              />
            </div>
          </header>
          <div className="flex md:flex-col flex-row gap-[24px] items-start justify-start max-w-[1360px] mx-[auto] md:px-[20px] w-[100%]">
            <aside className="flex flex-col md:hidden justify-start w-[280px]">
              <div className="flex items-center justify-start mx-[auto] my-[27px] w-[83%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] w-[36%]">
                    <div className="md:h-[80px] h-[84px] relative w-[98%]">
                      <div className="absolute backdrop-opacity-[0.5] bg-bluegray_101 blur-[24.00px] bottom-[0] h-[52px] inset-x-[0] mx-[auto] rounded-[26px] w-[77%]"></div>
                      <div className="absolute bg-bluegray_101 h-[80px] inset-x-[0] mx-[auto] rounded-[50%] top-[0] w-[80px]"></div>
                    </div>
                    <Text
                      className="font-semibold text-gray_938 text-left tracking-[-0.36px] w-[auto]"
                      variant="body47"
                    >
                      Alvin Elian
                    </Text>
                  </div>
                  <Text
                    className="font-normal mt-[11px] text-gray_615 text-left tracking-[-0.32px] w-[auto]"
                    variant="body50"
                  >
                    UI/UX Designer
                  </Text>
                  <Button
                    className="bg-green_700_19 flex items-center justify-center min-w-[198px] mt-[13px] px-[16px] py-[8px] rounded-[20px] text-center w-[auto]"
                    leftIcon={
                      <Img
                        src="images/img_lock_green_700.svg"
                        className="mr-[10px] text-center"
                        alt="lock"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-semibold text-[16px] text-green_700 text-left tracking-[-0.32px]">
                      Available for work
                    </div>
                  </Button>
                  <div className="flex flex-col items-start justify-start mt-[47px] w-[100%]">
                    <Text
                      className="font-semibold text-gray_938 text-left tracking-[-0.32px] w-[auto]"
                      variant="body50"
                    >
                      Personal Details
                    </Text>
                    <div className="flex flex-row gap-[12px] items-center justify-start mt-[23px] md:w-[100%] w-[77%]">
                      <div className="flex flex-col gap-[24px] items-center justify-start w-[25%]">
                        <Button className="bg-gray_50 flex h-[44px] items-center justify-center p-[10px] rounded-[8px] w-[44px]">
                          <Img
                            src="images/img_camera_gray_615.svg"
                            className="h-[24px]"
                            alt="camera"
                          />
                        </Button>
                        <Button className="bg-gray_50 flex h-[44px] items-center justify-center p-[10px] rounded-[8px] w-[44px]">
                          <Img
                            src="images/img_camera_gray_615.svg"
                            className="h-[24px]"
                            alt="camera One"
                          />
                        </Button>
                        <Button className="bg-gray_50 flex h-[44px] items-center justify-center p-[10px] rounded-[8px] w-[44px]">
                          <Img
                            src="images/img_clock_gray_615.svg"
                            className="h-[24px]"
                            alt="clock"
                          />
                        </Button>
                        <Button className="bg-gray_50 flex h-[44px] items-center justify-center p-[10px] rounded-[8px] w-[44px]">
                          <Img
                            src="images/img_camera_gray_615.svg"
                            className="h-[24px]"
                            alt="camera Two"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[auto]">
                        <Text
                          className="font-normal text-gray_615 text-left tracking-[-0.24px] w-[auto]"
                          variant="body67"
                        >
                          Salary Expectations
                        </Text>
                        <Text
                          className="font-normal mt-[6px] text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                          variant="body59"
                        >
                          $100 / Hours
                        </Text>
                        <Text
                          className="font-normal mt-[27px] text-gray_615 text-left tracking-[-0.24px] w-[auto]"
                          variant="body67"
                        >
                          Seniority Level
                        </Text>
                        <Text
                          className="font-normal mt-[6px] text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                          variant="body59"
                        >
                          Senior Level
                        </Text>
                        <Text
                          className="font-normal mt-[27px] text-gray_615 text-left tracking-[-0.24px] w-[auto]"
                          variant="body67"
                        >
                          Work Experience
                        </Text>
                        <Text
                          className="font-normal mt-[7px] text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                          variant="body59"
                        >
                          2 Years Experience
                        </Text>
                        <Text
                          className="font-normal mt-[26px] text-gray_615 text-left tracking-[-0.24px] w-[auto]"
                          variant="body67"
                        >
                          Employment Type
                        </Text>
                        <Text
                          className="font-normal mt-[6px] text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                          variant="body59"
                        >
                          Full Time, Part Time
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="font-semibold mt-[41px] text-gray_938 text-left tracking-[-0.32px] w-[auto]"
                      variant="body50"
                    >
                      Skills
                    </Text>
                    <div className="flex flex-row gap-[8px] items-center justify-between mt-[23px] md:w-[100%] w-[97%]">
                      <Button className="bg-indigo_A400_1e cursor-pointer font-normal min-w-[106px] px-[16px] py-[8px] rounded-[17px] text-[14px] text-center text-indigo_A400 tracking-[-0.28px] w-[auto]">
                        UI Designer
                      </Button>
                      <Button className="bg-indigo_A400_1e cursor-pointer font-normal min-w-[111px] px-[16px] py-[8px] rounded-[17px] text-[14px] text-center text-indigo_A400 tracking-[-0.28px] w-[auto]">
                        UX Designer
                      </Button>
                    </div>
                    <div className="flex flex-row gap-[8px] items-center justify-between mt-[8px] md:w-[100%] w-[98%]">
                      <Button className="bg-indigo_A400_1e cursor-pointer font-normal min-w-[73px] px-[16px] py-[8px] rounded-[17px] text-[14px] text-center text-indigo_A400 tracking-[-0.28px] w-[auto]">
                        Figma
                      </Button>
                      <Button className="bg-indigo_A400_1e cursor-pointer font-normal min-w-[146px] px-[16px] py-[8px] rounded-[17px] text-[14px] text-center text-indigo_A400 tracking-[-0.28px] w-[auto]">
                        Product Designer
                      </Button>
                    </div>
                    <Button className="bg-gray_900_1e cursor-pointer font-semibold mt-[35px] px-[12px] py-[16px] rounded-[12px] text-[16px] text-center text-gray_938 tracking-[-0.20px] w-[232px]">
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex flex-1 flex-col items-start justify-start w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between w-[100%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="flex-1 font-normal leading-[normal] p-[0] text-[16px] placeholder:text-gray_420 text-gray_420 text-left tracking-[-0.64px] w-[100%]"
                  wrapClassName="bg-white_A700 flex gap-[16px] p-[16px] rounded-[12px] sm:w-[100%] w-[447px]"
                  name="Frame427320699"
                  placeholder="Search Job"
                  prefix={
                    <Img
                      src="images/img_search_gray_420.svg"
                      className="cursor-pointer mr-[16px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#bebebe"
                        className="cursor-pointer ml-[10px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                ></Input>
                <div className="bg-indigo_A400 flex flex-row gap-[16px] items-center justify-start pl-[16px] sm:pr-[20px] pr-[24px] py-[16px] rounded-[12px] w-[auto]">
                  <Img
                    src="images/img_lightbulb_white_a700_24x24.svg"
                    className="h-[24px] w-[24px]"
                    alt="lightbulb"
                  />
                  <Text
                    className="font-normal text-left text-white_A700 tracking-[-0.32px] w-[auto]"
                    variant="body50"
                  >
                    Filter
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[24px] md:w-[100%] w-[86%]">
                <Button
                  className="bg-gray_200_99 flex items-center justify-center px-[16px] py-[11px] rounded-[20px] text-center"
                  rightIcon={
                    <Img
                      src="images/img_close_gray_938.svg"
                      className="ml-[8px] text-center"
                      alt="close"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-medium text-[14px] text-gray_938 text-left tracking-[-0.28px]">
                    Designer
                  </div>
                </Button>
                <List
                  className="sm:flex-col flex-row gap-[8px] grid grid-cols-2 sm:ml-[0] ml-[8px] sm:w-[100%] w-[62%]"
                  orientation="horizontal"
                >
                  <div className="bg-gray_200_99 flex flex-row gap-[8px] items-center justify-center px-[16px] py-[8px] rounded-[20px] w-[auto]">
                    <Img
                      src="images/img_lock_gray_615.svg"
                      className="h-[24px] w-[24px]"
                      alt="lock One"
                    />
                    <Text
                      className="font-normal text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                      variant="body59"
                    >
                      Full Time
                    </Text>
                    <Img
                      src="images/img_close_gray_938.svg"
                      className="h-[16px] w-[16px]"
                      alt="close"
                    />
                  </div>
                  <div className="bg-gray_200_99 flex flex-row gap-[8px] items-center justify-start px-[16px] py-[8px] rounded-[20px] w-[auto]">
                    <Img
                      src="images/img_forward.svg"
                      className="h-[24px] w-[24px]"
                      alt="forward"
                    />
                    <Text
                      className="font-medium text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                      variant="body59"
                    >
                      Semarang
                    </Text>
                    <Img
                      src="images/img_close_gray_938.svg"
                      className="h-[16px] w-[16px]"
                      alt="close One"
                    />
                  </div>
                </List>
                <Text
                  className="font-semibold sm:ml-[0] ml-[16px] text-indigo_A400 text-left tracking-[-0.28px] w-[auto]"
                  variant="body59"
                >
                  Clear All
                </Text>
              </div>
              <div className="flex flex-row sm:gap-[40px] items-center justify-between mt-[40px] w-[100%]">
                <Text
                  className="font-semibold text-gray_938 text-left tracking-[-0.72px] w-[auto]"
                  variant="body47"
                >
                  12 Job Active
                </Text>
                <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                  <Text
                    className="font-semibold text-gray_615 text-left tracking-[-0.24px] w-[auto]"
                    variant="body67"
                  >
                    Sort by
                  </Text>
                  <SelectBox
                    className="font-semibold text-[14px] text-gray_938 text-left tracking-[-0.28px] sm:w-[100%] w-[68%]"
                    placeholderClassName="text-gray_938"
                    name="Group1613"
                    placeholder="Popular Job"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_938.svg"
                        className="h-[16px] mr-[0] w-[16px]"
                        alt="arrow_down"
                      />
                    }
                  ></SelectBox>
                </div>
              </div>
              <List
                className="flex-col gap-[24px] grid items-center mt-[24px] w-[100%]"
                orientation="vertical"
              >
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[22px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col items-center justify-start my-[2px] w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                      <div className="bg-green_401 h-[64px] rounded-[50%] w-[64px]"></div>
                      <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-start sm:ml-[0] ml-[16px] sm:mt-[0] mt-[3px] sm:w-[100%] w-[65%]">
                        <Text
                          className="font-semibold text-gray_938 text-left tracking-[-0.72px] w-[auto]"
                          variant="body47"
                        >
                          Visual Designer
                        </Text>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                          <Button className="bg-indigo_A400_19 cursor-pointer font-medium min-w-[81px] px-[12px] py-[4px] rounded-[13px] text-[12px] text-center text-indigo_A400 tracking-[-0.20px] w-[auto]">
                            3D Design
                          </Button>
                          <Button className="bg-indigo_A400_19 cursor-pointer font-medium min-w-[68px] px-[12px] py-[4px] rounded-[13px] text-[12px] text-center text-indigo_A400 tracking-[-0.20px] w-[auto]">
                            Blender
                          </Button>
                          <Button className="bg-indigo_A400_19 cursor-pointer font-medium min-w-[89px] px-[12px] py-[4px] rounded-[13px] text-[12px] text-center text-indigo_A400 tracking-[-0.20px] w-[auto]">
                            After Effect
                          </Button>
                          <Button className="bg-indigo_A400_19 cursor-pointer font-normal min-w-[82px] px-[12px] py-[4px] rounded-[13px] text-[12px] text-center text-indigo_A400 tracking-[-0.20px] w-[auto]">
                            Illustration
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gray_103 flex h-[48px] items-center justify-center mb-[16px] sm:ml-[0] ml-[60px] p-[12px] rounded-[8px] w-[48px]">
                        <Img
                          src="images/img_bookmark_gray_615.svg"
                          className="h-[24px]"
                          alt="bookmark"
                        />
                      </Button>
                    </div>
                    <Text
                      className="font-normal leading-[150.00%] mt-[16px] not-italic text-gray_615 text-left tracking-[-0.28px] w-[100%]"
                      variant="body59"
                    >
                      The Visual Designer conveys design concepts into
                      wireframes and high fidelity, quality prototypes that
                      match project requirement, product objective, brand ...
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[24px] md:w-[100%] w-[97%]">
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <Img
                          src="images/img_bag_gray_420.svg"
                          className="h-[24px] w-[24px]"
                          alt="bag"
                        />
                        <Text
                          className="font-normal text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                          variant="body59"
                        >
                          Full Time
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <Img
                          src="images/img_location_gray_420.svg"
                          className="h-[24px] w-[24px]"
                          alt="location"
                        />
                        <Text
                          className="font-normal text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                          variant="body59"
                        >
                          Semarang
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <Img
                          src="images/img_user_gray_420.svg"
                          className="h-[24px] w-[24px]"
                          alt="user"
                        />
                        <Text
                          className="font-normal text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                          variant="body59"
                        >
                          74 applied
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <Img
                          src="images/img_clock_gray_420.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock One"
                        />
                        <Text
                          className="font-normal text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                          variant="body59"
                        >
                          3 days left
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:h-[218px] h-[240px] relative w-[100%]">
                  <div className="absolute backdrop-opacity-[0.5] bg-bluegray_900_28 blur-[104.00px] bottom-[0] h-[189px] inset-x-[0] mx-[auto] w-[96%]"></div>
                  <div className="absolute bg-white_A700 flex inset-x-[0] items-center justify-start mx-[auto] p-[22px] sm:px-[20px] rounded-[12px] top-[0] w-[100%]">
                    <div className="flex flex-col items-center justify-start my-[2px] w-[100%]">
                      <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                        <div className="bg-deep_purple_A401 h-[64px] rounded-[50%] w-[64px]"></div>
                        <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-start sm:ml-[0] ml-[16px] sm:mt-[0] mt-[3px] sm:w-[100%] w-[65%]">
                          <Text
                            className="font-semibold text-gray_938 text-left tracking-[-0.72px] w-[auto]"
                            variant="body47"
                          >
                            Product Designer
                          </Text>
                          <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                            <Button className="bg-indigo_A400_19 cursor-pointer font-medium min-w-[109px] px-[12px] py-[4px] rounded-[13px] text-[12px] text-center text-indigo_A400 tracking-[-0.20px] w-[auto]">
                              UI/UX Designer
                            </Button>
                            <Button className="bg-indigo_A400_19 cursor-pointer font-medium min-w-[111px] px-[12px] py-[4px] rounded-[13px] text-[12px] text-center text-indigo_A400 tracking-[-0.20px] w-[auto]">
                              Design Thinking
                            </Button>
                            <Button className="bg-indigo_A400_19 cursor-pointer font-medium min-w-[59px] px-[12px] py-[4px] rounded-[13px] text-[12px] text-center text-indigo_A400 tracking-[-0.20px] w-[auto]">
                              Figma
                            </Button>
                            <Button className="bg-indigo_A400_19 cursor-pointer font-medium min-w-[39px] px-[12px] py-[4px] rounded-[13px] text-[12px] text-center text-indigo_A400 tracking-[-0.20px] w-[auto]">
                              4+
                            </Button>
                          </div>
                        </div>
                        <Button className="bg-indigo_A400 flex h-[48px] items-center justify-center mb-[16px] sm:ml-[0] ml-[62px] p-[12px] rounded-[8px] w-[48px]">
                          <Img
                            src="images/img_link_white_a700_48x48.svg"
                            className="h-[24px]"
                            alt="link"
                          />
                        </Button>
                      </div>
                      <Text
                        className="font-normal leading-[150.00%] mt-[16px] not-italic text-gray_615 text-left tracking-[-0.28px] w-[100%]"
                        variant="body59"
                      >
                        The Product Designer is responsible for articulating and
                        conceptualizing our product vision and to shape our
                        features from start to finish. You will not only be
                        improving ...
                      </Text>
                      <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[24px] md:w-[100%] w-[97%]">
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_bag_gray_420.svg"
                            className="h-[24px] w-[24px]"
                            alt="bag One"
                          />
                          <Text
                            className="font-medium text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                            variant="body59"
                          >
                            Full Time
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_location_gray_420.svg"
                            className="h-[24px] w-[24px]"
                            alt="location One"
                          />
                          <Text
                            className="font-medium text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                            variant="body59"
                          >
                            Semarang
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_user_gray_420.svg"
                            className="h-[24px] w-[24px]"
                            alt="user One"
                          />
                          <Text
                            className="font-medium text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                            variant="body59"
                          >
                            50 applied
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                          <Img
                            src="images/img_clock_gray_420.svg"
                            className="h-[24px] w-[24px]"
                            alt="clock Two"
                          />
                          <Text
                            className="font-medium text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                            variant="body59"
                          >
                            5 days left
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-1 items-center justify-start p-[22px] sm:px-[20px] rounded-[12px] w-[100%]">
                  <div className="flex flex-col items-center justify-start my-[2px] w-[100%]">
                    <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                      <div className="bg-red_507 h-[64px] rounded-[50%] w-[64px]"></div>
                      <div className="flex sm:flex-1 flex-col gap-[11px] items-start justify-start sm:ml-[0] ml-[16px] sm:mt-[0] mt-[3px] sm:w-[100%] w-[66%]">
                        <Text
                          className="font-semibold text-gray_938 text-left tracking-[-0.72px] w-[auto]"
                          variant="body47"
                        >
                          Senior Interaction Designer
                        </Text>
                        <div className="flex flex-row gap-[8px] items-start justify-start w-[auto]">
                          <Button className="bg-indigo_A400_19 cursor-pointer font-normal min-w-[88px] px-[12px] py-[4px] rounded-[13px] text-[12px] text-center text-indigo_A400 tracking-[-0.20px] w-[auto]">
                            UI Designer
                          </Button>
                          <Button className="bg-indigo_A400_19 cursor-pointer font-normal min-w-[110px] px-[12px] py-[4px] rounded-[13px] text-[12px] text-center text-indigo_A400 tracking-[-0.20px] w-[auto]">
                            Motion Graphic
                          </Button>
                          <Button className="bg-indigo_A400_19 cursor-pointer font-normal min-w-[89px] px-[12px] py-[4px] rounded-[13px] text-[12px] text-center text-indigo_A400 tracking-[-0.20px] w-[auto]">
                            After Effect
                          </Button>
                          <Button className="bg-indigo_A400_19 cursor-pointer font-normal min-w-[39px] px-[12px] py-[4px] rounded-[13px] text-[12px] text-center text-indigo_A400 tracking-[-0.20px] w-[auto]">
                            3+
                          </Button>
                        </div>
                      </div>
                      <Button className="bg-gray_103 flex h-[48px] items-center justify-center mb-[16px] sm:ml-[0] ml-[54px] p-[12px] rounded-[8px] w-[48px]">
                        <Img
                          src="images/img_bookmark_gray_615.svg"
                          className="h-[24px]"
                          alt="bookmark One"
                        />
                      </Button>
                    </div>
                    <Text
                      className="font-normal leading-[150.00%] mt-[16px] not-italic text-gray_615 text-left tracking-[-0.28px] w-[100%]"
                      variant="body59"
                    >
                      The Senior Interaction Designer is responsible for certain
                      phases of design projects assigned to be implemented into
                      outputs such as design research reports, ...
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[24px] md:w-[100%] w-[98%]">
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <Img
                          src="images/img_bag_gray_420.svg"
                          className="h-[24px] w-[24px]"
                          alt="bag Two"
                        />
                        <Text
                          className="font-normal text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                          variant="body59"
                        >
                          Full Time
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <Img
                          src="images/img_location_gray_420.svg"
                          className="h-[24px] w-[24px]"
                          alt="location Two"
                        />
                        <Text
                          className="font-normal text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                          variant="body59"
                        >
                          Semarang
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <Img
                          src="images/img_user_gray_420.svg"
                          className="h-[24px] w-[24px]"
                          alt="user Two"
                        />
                        <Text
                          className="font-normal text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                          variant="body59"
                        >
                          48 applied
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                        <Img
                          src="images/img_clock_gray_420.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock Three"
                        />
                        <Text
                          className="font-normal text-gray_938 text-left tracking-[-0.28px] w-[auto]"
                          variant="body59"
                        >
                          12 days left
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="bg-white_A700 flex flex-1 items-center justify-start mb-[54px] pb-[24px] rounded-[12px] w-[100%]">
              <div className="flex flex-col gap-[23px] items-center justify-start w-[100%]">
                <div className="flex flex-col relative w-[100%]">
                  <div className="bg-bluegray_101 h-[120px] mx-[auto] rounded-bl-[0] rounded-br-[0] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"></div>
                  <div className="bg-deep_purple_A401 h-[100px] ml-[24px] mt-[-50px] rounded-[50%] w-[100px] z-[1]"></div>
                  <Text
                    className="font-normal ml-[auto] mr-[24px] mt-[-NaNpx] text-gray_420 text-left tracking-[-0.28px] w-[auto] z-[1]"
                    variant="body59"
                  >
                    Created 6 Days ago
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start md:w-[100%] w-[90%]">
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
                    <div className="flex sm:flex-1 flex-col gap-[6px] items-start justify-start sm:mt-[0] mt-[3px] sm:w-[100%] w-[49%]">
                      <Text
                        className="font-semibold text-gray_938 text-left tracking-[-0.80px] w-[auto]"
                        variant="body43"
                      >
                        Product Designer
                      </Text>
                      <div className="flex flex-row gap-[8px] items-center justify-center w-[auto]">
                        <Text
                          className="font-normal text-indigo_A400 text-left tracking-[-0.32px] w-[auto]"
                          variant="body50"
                        >
                          Pickolab
                        </Text>
                        <div className="bg-gray_420 h-[4px] rounded-[50%] w-[4px]"></div>
                        <Text
                          className="font-normal text-gray_420 text-left tracking-[-0.32px] w-[auto]"
                          variant="body50"
                        >
                          Semarang, IND
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-indigo_A400 flex h-[48px] items-center justify-center mb-[10px] sm:ml-[0] ml-[96px] p-[12px] rounded-[8px] w-[48px]">
                      <Img
                        src="images/img_link_white_a700_48x48.svg"
                        className="h-[24px]"
                        alt="link One"
                      />
                    </Button>
                    <Button className="bg-gray_103 flex h-[48px] items-center justify-center mb-[10px] sm:ml-[0] ml-[16px] p-[12px] rounded-[8px] w-[48px]">
                      <Img
                        src="images/img_share_gray_615.svg"
                        className="h-[24px]"
                        alt="share"
                      />
                    </Button>
                  </div>
                  <div className="flex flex-row items-end justify-between mt-[23px] w-[100%]">
                    <Text
                      className="font-semibold mt-[5px] text-gray_938 text-left tracking-[-0.64px] w-[auto]"
                      variant="body50"
                    >
                      Applicants Summary
                    </Text>
                    <div className="flex flex-row gap-[8px] items-center justify-start w-[auto]">
                      <Text
                        className="font-normal text-gray_938 text-left tracking-[-0.56px] w-[auto]"
                        variant="body59"
                      >
                        Match level
                      </Text>
                      <Button className="bg-green_401 cursor-pointer font-semibold min-w-[52px] px-[12px] py-[4px] rounded-[13px] text-[12px] text-center text-white_A700 tracking-[-0.20px] w-[auto]">
                        70%
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between md:ml-[0] ml-[24px] mt-[16px] md:w-[100%] w-[92%]">
                    <div className="h-[158px] relative w-[158px]">
                      <div className="h-[158px] m-[auto] w-[158px]">
                        <div className="absolute bg-gray_103 h-[158px] inset-[0] justify-center m-[auto] rounded-[50%] w-[158px]"></div>
                        <CircularProgressbar
                          className="absolute h-[140px] inset-[0] justify-center m-[auto] overflow-visible w-[140px]"
                          value={21}
                          counterClockwise
                          strokeWidth={19}
                          styles={{
                            trail: { strokeWidth: 19, stroke: "#5215ff" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#ff4da2",
                            },
                          }}
                        ></CircularProgressbar>
                        <CircularProgressbar
                          className="absolute h-[140px] inset-[0] justify-center m-[auto] overflow-visible w-[140px]"
                          value={21}
                          counterClockwise
                          strokeWidth={19}
                          styles={{
                            trail: { strokeWidth: 19, stroke: "#59bffa" },
                            path: {
                              strokeLinecap: "square",
                              height: "100%",
                              transformOrigin: "center",
                              transform: "rotate(0deg)",
                              stroke: "#ff4da2",
                            },
                          }}
                        ></CircularProgressbar>
                      </div>
                      <Text
                        className="absolute bg-white_A700 flex font-normal h-[34px] items-center justify-center right-[0] rounded-[50%] text-center text-gray_938 text-shadow-ts1 top-[14%] tracking-[-0.56px] w-[34px]"
                        variant="body59"
                      >
                        21
                      </Text>
                      <div className="absolute flex flex-col md:gap-[40px] gap-[72px] h-[max-content] inset-y-[0] items-start justify-start left-[9%] my-[auto] w-[auto]">
                        <Text
                          className="bg-white_A700 flex font-normal h-[34px] items-center justify-center rounded-[50%] text-center text-gray_938 text-shadow-ts1 tracking-[-0.56px] w-[34px]"
                          variant="body59"
                        >
                          15
                        </Text>
                        <Text
                          className="bg-white_A700 flex font-normal h-[34px] items-center justify-center md:ml-[0] ml-[2px] rounded-[50%] text-center text-gray_938 text-shadow-ts1 tracking-[-0.56px] w-[34px]"
                          variant="body59"
                        >
                          46
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[46%]">
                      <Text
                        className="font-normal text-gray_615 text-left tracking-[-0.48px] w-[auto]"
                        variant="body67"
                      >
                        Total Candidate
                      </Text>
                      <div className="flex flex-row items-end justify-start mt-[8px] md:w-[100%] w-[46%]">
                        <Text
                          className="font-semibold text-gray_938 text-left tracking-[-1.28px] w-[auto]"
                          variant="body26"
                        >
                          67
                        </Text>
                        <Text
                          className="font-normal mb-[3px] ml-[3px] mt-[16px] text-gray_615 text-left tracking-[-0.64px] w-[auto]"
                          variant="body50"
                        >
                          / 100
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-start justify-start mt-[32px] md:w-[100%] w-[63%]">
                        <div className="bg-light_blue_301 h-[12px] my-[2px] rounded-[4px] w-[12px]"></div>
                        <Text
                          className="font-normal text-gray_615 text-left tracking-[-0.48px] w-[auto]"
                          variant="body67"
                        >
                          New Applicants
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[9px] w-[100%]">
                        <div className="bg-deep_purple_A401 h-[12px] my-[2px] rounded-[4px] w-[12px]"></div>
                        <Text
                          className="font-normal text-gray_615 text-left tracking-[-0.48px] w-[auto]"
                          variant="body67"
                        >
                          Approved
                        </Text>
                        <div className="bg-pink_300 h-[12px] my-[2px] rounded-[4px] w-[12px]"></div>
                        <Text
                          className="font-normal text-gray_615 text-left tracking-[-0.48px] w-[auto]"
                          variant="body67"
                        >
                          Rejected
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[24px] w-[100%]">
                    <div className="border-[1px] border-gray_103 border-solid flex flex-col gap-[8px] items-start justify-center sm:pl-[20px] pl-[24px] pr-[16px] py-[16px] rounded-bl-[12px] rounded-br-[0] rounded-tl-[12px] rounded-tr-[0] w-[135px]">
                      <Text
                        className="font-normal text-gray_420 text-left tracking-[-0.28px] w-[auto]"
                        variant="body59"
                      >
                        Job Type
                      </Text>
                      <Text
                        className="font-normal text-gray_938 text-left tracking-[-0.32px] w-[auto]"
                        variant="body50"
                      >
                        Full Time
                      </Text>
                    </div>
                    <div className="border-[1px] border-gray_103 border-solid flex flex-col gap-[8px] items-start justify-center sm:pl-[20px] pl-[24px] pr-[16px] py-[16px] w-[136px]">
                      <Text
                        className="font-normal text-gray_420 text-left tracking-[-0.28px] w-[auto]"
                        variant="body59"
                      >
                        Experience
                      </Text>
                      <Text
                        className="font-normal text-gray_938 text-left tracking-[-0.32px] w-[auto]"
                        variant="body50"
                      >
                        Min. 1 Year
                      </Text>
                    </div>
                    <div className="border-[1px] border-gray_103 border-solid flex flex-col gap-[8px] items-start justify-center sm:pl-[20px] pl-[24px] pr-[16px] py-[16px] rounded-bl-[0] rounded-br-[12px] rounded-tl-[0] rounded-tr-[12px] w-[135px]">
                      <Text
                        className="font-normal text-gray_420 text-left tracking-[-0.28px] w-[auto]"
                        variant="body59"
                      >
                        Month Salary
                      </Text>
                      <Text
                        className="font-normal text-gray_938 text-left tracking-[-0.32px] w-[auto]"
                        variant="body50"
                      >
                        $200
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-semibold mt-[25px] text-gray_938 text-left tracking-[-0.64px] w-[auto]"
                    variant="body50"
                  >
                    About Job Role
                  </Text>
                  <Text
                    className="font-normal leading-[170.00%] mt-[15px] not-italic text-gray_615 text-left tracking-[-0.28px] w-[100%]"
                    variant="body59"
                  >
                    <span className="text-gray_615 text-[14px] font-plusjakartasans">
                      The Product Designer is responsible for articulating and
                      conceptualizing our product vision and to shape our
                      features from start to finish. You will not only be
                      improving the user experience via UI and UX, but drive
                      business{" "}
                    </span>
                    <span className="text-indigo_A400 text-[14px] font-plusjakartasans font-semibold">
                      View Detail Job
                    </span>
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-between mt-[35px] w-[100%]">
                    <Button className="bg-indigo_A400 cursor-pointer font-bold px-[12px] py-[16px] rounded-[12px] text-[16px] text-center text-white_A700 tracking-[-0.20px] w-[332px]">
                      Apply Job
                    </Button>
                    <Button className="bg-gray_900_1e flex h-[56px] items-center justify-center p-[16px] rounded-[12px] w-[56px]">
                      <Img
                        src="images/img_checkmark_gray_938.svg"
                        className="h-[24px]"
                        alt="checkmark"
                      />
                    </Button>
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

export default SewuJobJobFinderDashboardPage;
