import React from "react";

import { Img, Text, Button, Line, Input, SelectBox } from "components";

const SettingsTwoPage = () => {
  return (
    <>
      <div className="bg-gray_103 flex font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
          <Img
            src="images/img_navigationwebsidebar.svg"
            className="h-[874px] mb-[10px] w-[auto]"
            alt="NavigationWebSidebar"
          />
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[47px] md:px-[20px] md:w-[100%] w-[auto]">
            <Text
              className="font-normal not-italic text-gray_964 text-left w-[auto]"
              variant="body41"
            >
              Account Informations
            </Text>
            <div className="flex items-center justify-start mt-[48px] md:w-[100%] w-[86%]">
              <div className="flex sm:flex-col flex-row gap-[30px] items-end justify-between w-[100%]">
                <div className="flex sm:flex-1 items-center justify-start sm:w-[100%] w-[24%]">
                  <Img
                    src="images/img_avatar_109x128.png"
                    className="h-[109px] md:h-[auto] object-cover rounded-[36px] w-[100%]"
                    alt="Avatar"
                  />
                </div>
                <div className="flex sm:flex-1 flex-col gap-[21px] items-start justify-start sm:mt-[0] mt-[14px] sm:w-[100%] w-[71%]">
                  <Text
                    className="font-normal not-italic text-gray_522 text-left w-[auto]"
                    variant="body50"
                  >
                    Profile Picture
                  </Text>
                  <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                    <Button className="bg-light_blue_200 cursor-pointer font-normal min-w-[180px] not-italic py-[18px] rounded-[26px] text-[14px] text-center text-white_A700 w-[auto]">
                      Replace
                    </Button>
                    <Button
                      className="border-[2px] border-gray_500_66 border-solid flex items-center justify-center px-[35px] py-[18px] rounded-[12px] sm:px-[20px] text-center"
                      leftIcon={
                        <Img
                          src="images/img_trash_bluegray_101.svg"
                          className="mr-[7px] text-center"
                          alt="trash"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[14px] text-left text-red_A204">
                        Delete
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="font-normal mt-[25px] not-italic text-gray_522 text-left w-[auto]"
              variant="body50"
            >
              Basic Information
            </Text>
            <div className="flex h-[186px] md:h-[291px] justify-end mt-[105px] relative w-[100%]">
              <Line className="bg-gray_500_6c h-[1px] mb-[48px] mt-[auto] mx-[auto] w-[100%]" />
              <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                <div className="flex flex-col gap-[30px] items-center justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start pt-[3px] md:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left tracking-[1.00px] w-[auto]"
                        variant="body67"
                      >
                        name
                      </Text>
                      <Input
                        className="font-normal not-italic pl-[15px] sm:pr-[20px] pr-[35px] py-[15px] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                        wrapClassName="bg-white_A700 rounded-[8px] w-[100%]"
                        name="Group548"
                        placeholder="Anne Carry"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start pt-[3px] md:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left tracking-[1.00px] w-[auto]"
                        variant="body67"
                      >
                        username
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                        wrapClassName="bg-white_A700 flex pb-[12px] pt-[18px] px-[15px] rounded-[8px] w-[100%]"
                        name="Group547"
                        placeholder="annecarry"
                        suffix={
                          <Img
                            src="images/img_checkmark_bluegray_101.svg"
                            className="ml-[35px] my-[auto]"
                            alt="checkmark"
                          />
                        }
                      ></Input>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[100%]">
                    <div className="flex md:flex-1 flex-col gap-[12px] items-start justify-start pt-[2px] md:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left tracking-[1.00px] w-[auto]"
                        variant="body67"
                      >
                        Email
                      </Text>
                      <Input
                        className="font-normal not-italic pl-[15px] sm:pr-[20px] pr-[35px] py-[15px] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                        wrapClassName="bg-white_A700 rounded-[8px] w-[100%]"
                        type="email"
                        name="email"
                        placeholder="anne.carry@mail.com"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start pt-[3px] md:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left tracking-[1.00px] w-[auto]"
                        variant="body67"
                      >
                        birthday
                      </Text>
                      <SelectBox
                        className="bg-white_A700 font-normal not-italic pl-[15px] py-[15px] rounded-[8px] text-[14px] text-gray_522 text-left w-[100%]"
                        placeholderClassName="text-gray_522"
                        name="month"
                        placeholder="January 25, 1991"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_indigo_a206.svg"
                            className="h-[18px] mr-[15px] w-[18px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[233px] md:h-[267px] mt-[81px] relative w-[100%]">
              <Button className="absolute bg-green_402 bottom-[0] cursor-pointer font-normal left-[0] min-w-[180px] not-italic py-[20px] rounded-[29px] text-[14px] text-center text-white_A700 w-[auto]">
                Save Changes
              </Button>
              <div className="absolute flex inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[100%]">
                <div className="flex items-center justify-start w-[100%]">
                  <div className="md:gap-[20px] gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                    <div className="flex flex-1 flex-col gap-[11px] items-start justify-start pt-[3px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left tracking-[1.00px] w-[auto]"
                        variant="body67"
                      >
                        Country
                      </Text>
                      <SelectBox
                        className="bg-white_A700 font-normal not-italic pl-[15px] py-[15px] rounded-[8px] text-[14px] text-gray_522 text-left w-[100%]"
                        placeholderClassName="text-gray_522"
                        name="Group543"
                        placeholder="United States"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_indigo_a206.svg"
                            className="h-[18px] mr-[15px] w-[18px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </div>
                    <div className="flex flex-1 flex-col gap-[12px] items-start justify-start pt-[2px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left tracking-[1.00px] w-[auto]"
                        variant="body67"
                      >
                        state
                      </Text>
                      <SelectBox
                        className="bg-white_A700 font-normal not-italic pl-[15px] py-[15px] rounded-[8px] text-[14px] text-gray_522 text-left w-[100%]"
                        placeholderClassName="text-gray_522"
                        name="Group542"
                        placeholder="California"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_indigo_a206.svg"
                            className="h-[18px] mr-[15px] w-[18px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </div>
                    <div className="flex flex-1 flex-col gap-[11px] items-start justify-start pt-[3px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left tracking-[1.00px] w-[auto]"
                        variant="body67"
                      >
                        City
                      </Text>
                      <SelectBox
                        className="bg-white_A700 font-normal not-italic pl-[15px] py-[15px] rounded-[8px] text-[14px] text-gray_522 text-left w-[100%]"
                        placeholderClassName="text-gray_522"
                        name="Group544"
                        placeholder="San Francisco"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_indigo_a206.svg"
                            className="h-[18px] mr-[15px] w-[18px]"
                            alt="arrow_down"
                          />
                        }
                      ></SelectBox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col gap-[48px] h-[874px] justify-start mb-[10px] p-[40px] md:px-[20px] md:w-[100%] w-[auto]"
            style={{ backgroundImage: "url('images/img_group83.svg')" }}
          >
            <div className="h-[48px] md:h-[53px] md:ml-[0] ml-[319px] mt-[5px] relative w-[27%]">
              <Img
                src="images/img_image_16.png"
                className="absolute h-[48px] inset-y-[0] my-[auto] object-cover right-[0] rounded-[12px] w-[48px]"
                alt="Image One"
              />
              <div className="bg-light_blue_200 flex h-[100%] items-center justify-start my-[auto] p-[10px] rounded-[12px] w-[48px]">
                <Text
                  className="font-normal not-italic text-center text-white_A700 w-[auto]"
                  variant="body41"
                >
                  1
                </Text>
              </div>
              <div className="absolute flex flex-row gap-[20px] h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                <Button className="bg-light_blue_200 cursor-pointer font-normal h-[48px] not-italic py-[10px] rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]">
                  1
                </Button>
                <div className="flex h-[48px] items-center justify-start w-[48px]">
                  <Img
                    src="defaultNoData.png"
                    className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                    alt="Avatar One"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[39px] items-start justify-start mb-[138px] md:ml-[0] ml-[25px] mr-[198px] md:w-[100%] w-[49%]">
              <Text
                className="font-normal not-italic text-left text-white_A700 w-[auto]"
                variant="body41"
              >
                Settings
              </Text>
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[73%]">
                  <Button className="bg-white_A700 flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                    <Img
                      src="images/img_user_bluegray_101_48x48.svg"
                      className="h-[22px]"
                      alt="user"
                    />
                  </Button>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body50"
                  >
                    My Account
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[75%]">
                  <Button className="border-[2px] border-gray_500_66 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                    <Img
                      src="images/img_notification_bluegray_101.svg"
                      className="h-[22px]"
                      alt="notification"
                    />
                  </Button>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body50"
                  >
                    Notifications
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[85%]">
                  <Button className="border-[2px] border-gray_500_66 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                    <Img
                      src="images/img_rewind_bluegray_101.svg"
                      className="h-[22px]"
                      alt="rewind"
                    />
                  </Button>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body50"
                  >
                    Activity History
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start w-[100%]">
                  <Button className="border-[2px] border-gray_500_66 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                    <Img
                      src="images/img_alarm_white_a700_48x48.svg"
                      className="h-[22px]"
                      alt="alarm"
                    />
                  </Button>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body50"
                  >
                    Billing and Payment
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[95%]">
                  <Button className="border-[2px] border-gray_500_66 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                    <Img
                      src="images/img_lock_bluegray_101.svg"
                      className="h-[22px]"
                      alt="lock"
                    />
                  </Button>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body50"
                  >
                    Security & Privacy
                  </Text>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start md:w-[100%] w-[47%]">
                  <Button className="border-[2px] border-gray_500_66 border-solid flex h-[48px] items-center justify-center p-[12px] rounded-[12px] w-[48px]">
                    <Img
                      src="images/img_settings_bluegray_101_48x48.svg"
                      className="h-[22px]"
                      alt="settings One"
                    />
                  </Button>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body50"
                  >
                    Help
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

export default SettingsTwoPage;
