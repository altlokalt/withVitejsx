import React from "react";

import { Img, Text, List, Input, Line, CheckBox, Button } from "components";
import { CloseSVG } from "../../assets/images";

const DraftselectedwebPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_51 flex font-plusjakartadisplay items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[300px]">
            <div className="flex items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex h-[885px] md:h-[auto] items-start justify-between p-[24px] sm:px-[20px] w-[300px]">
                <div className="flex flex-col gap-[38px] items-start justify-start w-[100%]">
                  <div className="flex flex-row gap-[12px] items-center justify-center w-[auto]">
                    <Img
                      src="images/img_music_bluegray_905.svg"
                      className="h-[40px] w-[40px]"
                      alt="music"
                    />
                    <Text
                      className="font-bold text-bluegray_905 text-left w-[auto]"
                      variant="body37"
                    >
                      Maxkit
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[8px] h-[60px] md:h-[auto] items-center justify-between sm:px-[20px] px-[24px] py-[13px] shadow-bs1 w-[100%]">
                    <div className="bg-deep_purple_A400 flex flex-1 flex-row items-center justify-between p-[5px] w-[100%]">
                      <Text
                        className="font-medium ml-[19px] text-left text-white_A700 w-[auto]"
                        variant="body50"
                      >
                        Create Product
                      </Text>
                      <Img
                        src="images/img_plus_white_a700.svg"
                        className="h-[24px] my-[13px] w-[24px]"
                        alt="plus"
                      />
                    </div>
                    <Img
                      src="images/img_signal_deep_purple_a400.svg"
                      className="h-[60px] w-[19px]"
                      alt="signal"
                    />
                  </div>
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <div className="flex flex-row gap-[20px] h-[60px] md:h-[auto] items-center justify-start pl-[20px] rounded-[10px] w-[100%]">
                      <Img
                        src="images/img_qrcode.svg"
                        className="h-[24px] w-[24px]"
                        alt="qrcode"
                      />
                      <Text
                        className="font-medium text-bluegray_401 text-left w-[auto]"
                        variant="body59"
                      >
                        Overview
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[20px] h-[60px] md:h-[auto] items-center justify-between px-[20px] rounded-[10px] w-[100%]">
                      <div className="flex flex-row gap-[20px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_camera.svg"
                          className="h-[24px] w-[24px]"
                          alt="camera"
                        />
                        <Text
                          className="font-medium text-bluegray_905 text-left w-[auto]"
                          variant="body59"
                        >
                          Product
                        </Text>
                      </div>
                      <div className="flex items-center justify-center w-[20px]">
                        <Img
                          src="images/img_arrowup_bluegray_905.svg"
                          className="h-[20px] w-[20px]"
                          alt="arrowup"
                        />
                      </div>
                    </div>
                    <div className="flex h-[50px] md:h-[auto] items-center justify-start sm:pl-[20px] md:pl-[40px] pl-[64px] pr-[20px] rounded-[10px] w-[100%]">
                      <div className="flex items-center justify-center w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_905 text-left w-[auto]"
                          variant="body59"
                        >
                          All Product
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[20px] h-[50px] md:h-[auto] items-center justify-start sm:pl-[20px] md:pl-[40px] pl-[64px] pr-[20px] w-[100%]">
                      <div className="bg-gray_103 flex flex-1 items-start justify-start p-[14px] w-[100%]">
                        <div className="flex items-center justify-center md:ml-[0] ml-[49px] w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_906 text-left w-[auto]"
                            variant="body59"
                          >
                            Draft
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_subtract.svg"
                        className="h-[50px] w-[19px]"
                        alt="Subtract"
                      />
                    </div>
                    <div className="flex h-[50px] md:h-[auto] items-center justify-start sm:pl-[20px] md:pl-[40px] pl-[64px] pr-[20px] rounded-[10px] w-[100%]">
                      <div className="flex items-center justify-center w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_905 text-left w-[auto]"
                          variant="body59"
                        >
                          Category
                        </Text>
                      </div>
                    </div>
                    <div className="flex h-[60px] md:h-[auto] items-center justify-start px-[20px] rounded-[10px] w-[100%]">
                      <div className="flex flex-row gap-[20px] items-center justify-center w-[auto]">
                        <Img
                          src="images/img_cart.svg"
                          className="h-[24px] w-[24px]"
                          alt="cart"
                        />
                        <Text
                          className="font-medium text-bluegray_401 text-left w-[auto]"
                          variant="body59"
                        >
                          Orders
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[20px] h-[60px] md:h-[auto] items-center justify-start pl-[20px] rounded-[10px] w-[100%]">
                      <Img
                        src="images/img_search_bluegray_103.svg"
                        className="h-[24px] w-[24px]"
                        alt="search"
                      />
                      <Text
                        className="font-medium text-bluegray_401 text-left w-[auto]"
                        variant="body59"
                      >
                        Customers
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[20px] h-[60px] md:h-[auto] items-center justify-start pl-[20px] rounded-[10px] w-[100%]">
                      <div className="flex h-[24px] items-center justify-start p-[3px] w-[24px]">
                        <Img
                          src="images/img_star_18x18.svg"
                          className="h-[18px] outline outline-[1px] outline-bluegray_103 w-[18px]"
                          alt="Star"
                        />
                      </div>
                      <Text
                        className="font-medium text-bluegray_401 text-left w-[auto]"
                        variant="body59"
                      >
                        Manage Reviews
                      </Text>
                    </div>
                    <div className="md:h-[60px] h-[69px] relative w-[100%]">
                      <div className="absolute bottom-[0] flex flex-row gap-[20px] h-[60px] md:h-[auto] inset-x-[0] items-center justify-start mx-[auto] pl-[20px] rounded-[10px] w-[252px]">
                        <Img
                          src="images/img_bag.svg"
                          className="h-[24px] w-[24px]"
                          alt="bag"
                        />
                        <Text
                          className="font-medium text-bluegray_401 text-left w-[auto]"
                          variant="body59"
                        >
                          Checkout
                        </Text>
                      </div>
                      <div className="absolute flex flex-row gap-[20px] h-[60px] md:h-[auto] inset-x-[0] items-center justify-start mx-[auto] pl-[20px] rounded-[10px] top-[0] w-[252px]">
                        <Img
                          src="images/img_search_bluegray_103_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="search One"
                        />
                        <Text
                          className="font-medium text-bluegray_401 text-left w-[auto]"
                          variant="body59"
                        >
                          Setting
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col gap-[30px] justify-start md:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[30px] justify-start w-[100%]">
              <div className="bg-white_A700 border-gray_103 border-l-[1px] border-solid flex flex-row md:gap-[40px] items-center justify-between max-w-[1320px] sm:px-[20px] px-[30px] py-[24px] w-[100%]">
                <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_search_bluegray_905.svg"
                    className="h-[20px] w-[20px]"
                    alt="search Two"
                  />
                  <Text
                    className="font-normal not-italic text-bluegray_103 text-left w-[auto]"
                    variant="body59"
                  >
                    Search anything…
                  </Text>
                </div>
                <div className="flex flex-row gap-[24px] items-start justify-start w-[auto]">
                  <List
                    className="sm:flex-col flex-row gap-[24px] grid grid-cols-2 w-[63%]"
                    orientation="horizontal"
                  >
                    <div className="md:h-[24px] h-[48px] p-[12px] relative w-[100%]">
                      <Img
                        src="images/img_messagetext.svg"
                        className="h-[24px] m-[auto] w-[24px]"
                        alt="MessageText"
                      />
                      <div className="absolute bg-red_A200 h-[10px] outline outline-[2px] outline-white_A700 right-[25%] rounded-[50%] top-[0] w-[10px]"></div>
                    </div>
                    <div className="md:h-[24px] h-[48px] p-[12px] relative w-[100%]">
                      <Img
                        src="images/img_notification_bluegray_905.svg"
                        className="h-[24px] m-[auto] w-[24px]"
                        alt="notification"
                      />
                      <div className="absolute bg-red_A200 h-[10px] outline outline-[2px] outline-white_A700 right-[25%] rounded-[50%] top-[0] w-[10px]"></div>
                    </div>
                  </List>
                  <div className="bg-bluegray_101 h-[48px] w-[48px]"></div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1080px] md:ml-[0] ml-[30px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_905 text-left w-[auto]"
                  variant="body26"
                >
                  Draft
                </Text>
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-[20px] items-center justify-center sm:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-bluegray_401 text-left w-[auto]"
                    variant="body67"
                  >
                    2 products selected
                  </Text>
                  <div className="flex flex-row gap-[10px] h-[60px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] py-[13px] rounded-[10px] w-[167px]">
                    <Text
                      className="font-medium outline outline-red_A200 sm:px-[20px] px-[35px] py-[19px] text-left text-red_A200 w-[auto]"
                      variant="body50"
                    >
                      Delete
                    </Text>
                    <Img
                      src="images/img_file.svg"
                      className="h-[60px] w-[20px]"
                      alt="file"
                    />
                  </div>
                  <div className="flex flex-row gap-[10px] h-[60px] md:h-[auto] items-center justify-center sm:px-[20px] px-[24px] py-[13px] shadow-bs1 w-[167px]">
                    <div className="bg-deep_purple_A400 flex items-end justify-end p-[18px] w-[auto]">
                      <Text
                        className="font-medium mr-[18px] mt-[2px] text-left text-white_A700 w-[auto]"
                        variant="body50"
                      >
                        Publish
                      </Text>
                    </div>
                    <Img
                      src="images/img_signal_deep_purple_a400.svg"
                      className="h-[60px] w-[19px]"
                      alt="signal One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex flex-col gap-[24px] items-center justify-center max-w-[1080px] md:ml-[0] ml-[30px] mr-[210px] p-[24px] sm:px-[20px] w-[100%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex items-start justify-start w-[300px]">
                  <div className="flex flex-row gap-[10px] h-[50px] md:h-[auto] items-center justify-start px-[20px] py-[16px] w-[100%]">
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="flex-1 font-normal not-italic p-[0] text-[12px] placeholder:text-bluegray_103 text-bluegray_103 text-left w-[100%]"
                      wrapClassName="flex outline outline-bluegray_51 pl-[20px] pr-[1px] py-[16px] w-[100%]"
                      name="Group658"
                      placeholder="Search Name"
                      suffix={
                        inputvalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer ml-[35px] my-[auto]"
                            onClick={() => setInputvalue("")}
                            color="#ced0d7"
                          />
                        ) : (
                          <Img
                            src="images/img_search_bluegray_905.svg"
                            className="cursor-pointer ml-[35px] my-[auto]"
                            alt="search"
                          />
                        )
                      }
                    ></Input>
                    <Img
                      src="images/img_volume_bluegray_51.svg"
                      className="h-[50px] w-[20px]"
                      alt="volume"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-[20px] items-center justify-start w-[auto]">
                  <Img
                    src="images/img_menu_deep_purple_a400.svg"
                    className="h-[24px] w-[24px]"
                    alt="menu"
                  />
                  <Img
                    src="images/img_grid_bluegray_103.svg"
                    className="h-[24px] w-[24px]"
                    alt="grid"
                  />
                  <Line className="bg-gray_103 h-[24px] rounded-[1px] w-[1px]" />
                  <Img
                    src="images/img_videocamera.svg"
                    className="h-[24px] w-[24px]"
                    alt="videocamera"
                  />
                  <Img
                    src="images/img_calendar_deep_purple_a400.svg"
                    className="h-[24px] w-[24px]"
                    alt="calendar"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[16px] items-center justify-center w-[100%]">
                <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between max-w-[1032px] px-[12px] w-[100%]">
                  <CheckBox
                    className="font-medium text-[12px] text-bluegray_401 text-left"
                    inputClassName="border-[1px] border-bluegray_103 border-solid h-[20px] mr-[5px] w-[20px]"
                    label="Product Name"
                    name="ProductName"
                  ></CheckBox>
                  <Text
                    className="font-medium text-bluegray_401 text-left w-[auto]"
                    variant="body67"
                  >
                    Price
                  </Text>
                  <Text
                    className="font-medium text-bluegray_401 text-left w-[auto]"
                    variant="body67"
                  >
                    Last Edit
                  </Text>
                  <Text
                    className="font-medium text-bluegray_401 text-right w-[auto]"
                    variant="body67"
                  >
                    Action
                  </Text>
                </div>
                <List
                  className="flex-col gap-[8px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-between max-w-[1032px] p-[12px] w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[300px]">
                      <Button className="bg-deep_purple_A400 flex h-[20px] items-center justify-center p-[3px] w-[20px]">
                        <Img
                          src="images/img_menu_white_a700.svg"
                          className="h-[14px]"
                          alt="menu One"
                        />
                      </Button>
                      <div className="bg-bluegray_101 h-[40px] w-[40px]"></div>
                      <Text
                        className="font-medium text-bluegray_905 text-left w-[auto]"
                        variant="body59"
                      >
                        DNA Design Agency Website
                      </Text>
                    </div>
                    <Button className="bg-deep_purple_A400 cursor-pointer font-medium min-w-[48px] p-[10px] text-[14px] text-center text-white_A700 w-[auto]">
                      $40
                    </Button>
                    <Text
                      className="font-medium text-bluegray_905 text-left w-[auto]"
                      variant="body67"
                    >
                      Jul 3, 2022 at 3:54 PM
                    </Text>
                    <div className="flex flex-row gap-[10px] items-center justify-end w-[80px]">
                      <Img
                        src="images/img_pen.svg"
                        className="h-[24px] w-[24px]"
                        alt="Pen"
                      />
                      <Img
                        src="images/img_trash_bluegray_103.svg"
                        className="h-[24px] w-[24px]"
                        alt="trash"
                      />
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_103 w-[100%] rounded-[1px]" />
                  <div className="flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-between max-w-[1032px] p-[12px] w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[300px]">
                      <Button className="bg-deep_purple_A400 flex h-[20px] items-center justify-center p-[3px] w-[20px]">
                        <Img
                          src="images/img_menu_white_a700.svg"
                          className="h-[14px]"
                          alt="menu Two"
                        />
                      </Button>
                      <div className="bg-bluegray_101 h-[40px] w-[40px]"></div>
                      <Text
                        className="font-medium text-bluegray_905 text-left w-[auto]"
                        variant="body59"
                      >
                        Real Estate Mobile App Design
                      </Text>
                    </div>
                    <Button className="bg-deep_purple_A400 cursor-pointer font-medium min-w-[48px] p-[10px] text-[14px] text-center text-white_A700 w-[auto]">
                      $40
                    </Button>
                    <Text
                      className="font-medium text-bluegray_905 text-left w-[auto]"
                      variant="body67"
                    >
                      Jul 3, 2022 at 3:54 PM
                    </Text>
                    <div className="flex flex-row gap-[10px] items-center justify-end w-[80px]">
                      <Img
                        src="images/img_pen.svg"
                        className="h-[24px] w-[24px]"
                        alt="Pen One"
                      />
                      <Img
                        src="images/img_trash_bluegray_103.svg"
                        className="h-[24px] w-[24px]"
                        alt="trash One"
                      />
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_103 w-[100%] rounded-[1px]" />
                  <div className="flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-between max-w-[1032px] p-[12px] w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[326px]">
                      <div className="border-[1px] border-bluegray_103 border-solid h-[20px] w-[20px]"></div>
                      <div className="bg-bluegray_101 h-[40px] w-[40px]"></div>
                      <Text
                        className="font-medium text-bluegray_905 text-left w-[auto]"
                        variant="body59"
                      >
                        E - Learning Dashboard - Learn.ink
                      </Text>
                    </div>
                    <Button className="bg-deep_purple_A400 cursor-pointer font-medium min-w-[48px] p-[10px] text-[14px] text-center text-white_A700 w-[auto]">
                      $40
                    </Button>
                    <Text
                      className="font-medium text-bluegray_905 text-left w-[auto]"
                      variant="body67"
                    >
                      Jul 3, 2022 at 3:54 PM
                    </Text>
                    <div className="flex flex-row gap-[10px] items-center justify-end w-[80px]">
                      <Img
                        src="images/img_pen.svg"
                        className="h-[24px] w-[24px]"
                        alt="Pen Two"
                      />
                      <Img
                        src="images/img_trash_bluegray_103.svg"
                        className="h-[24px] w-[24px]"
                        alt="trash Two"
                      />
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_103 w-[100%] rounded-[1px]" />
                  <div className="flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-between max-w-[1032px] p-[12px] w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[300px]">
                      <div className="border-[1px] border-bluegray_103 border-solid h-[20px] w-[20px]"></div>
                      <div className="bg-bluegray_101 h-[40px] w-[40px]"></div>
                      <Text
                        className="font-medium text-bluegray_905 text-left w-[auto]"
                        variant="body59"
                      >
                        Event App Design Concept
                      </Text>
                    </div>
                    <Button className="bg-deep_purple_A400 cursor-pointer font-medium min-w-[48px] p-[10px] text-[14px] text-center text-white_A700 w-[auto]">
                      $40
                    </Button>
                    <Text
                      className="font-medium text-bluegray_905 text-left w-[auto]"
                      variant="body67"
                    >
                      Jul 3, 2022 at 3:54 PM
                    </Text>
                    <div className="flex flex-row gap-[10px] items-center justify-end w-[80px]">
                      <Img
                        src="images/img_pen.svg"
                        className="h-[24px] w-[24px]"
                        alt="Pen Three"
                      />
                      <Img
                        src="images/img_trash_bluegray_103.svg"
                        className="h-[24px] w-[24px]"
                        alt="trash Three"
                      />
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_103 w-[100%] rounded-[1px]" />
                  <div className="flex flex-1 md:flex-col flex-row gap-[20px] items-center justify-between max-w-[1032px] p-[12px] w-[100%]">
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start sm:w-[100%] w-[393px]">
                      <div className="border-[1px] border-bluegray_103 border-solid h-[20px] w-[20px]"></div>
                      <div className="bg-bluegray_101 h-[40px] w-[40px]"></div>
                      <Text
                        className="font-medium text-bluegray_905 text-left w-[auto]"
                        variant="body59"
                      >
                        Fubuki Yuri - Photographer Portfolio Website
                      </Text>
                    </div>
                    <Button className="bg-deep_purple_A400 cursor-pointer font-medium min-w-[48px] p-[10px] text-[14px] text-center text-white_A700 w-[auto]">
                      $40
                    </Button>
                    <Text
                      className="font-medium text-bluegray_905 text-left w-[auto]"
                      variant="body67"
                    >
                      Jul 3, 2022 at 3:54 PM
                    </Text>
                    <div className="flex flex-row gap-[10px] items-center justify-end w-[80px]">
                      <Img
                        src="images/img_pen.svg"
                        className="h-[24px] w-[24px]"
                        alt="Pen Four"
                      />
                      <Img
                        src="images/img_trash_bluegray_103.svg"
                        className="h-[24px] w-[24px]"
                        alt="trash Four"
                      />
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_103 w-[100%] rounded-[1px]" />
                  <div className="flex flex-1 md:flex-col flex-row gap-[20px] items-center justify-between max-w-[1032px] p-[12px] w-[100%]">
                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start sm:w-[100%] w-[386px]">
                      <div className="border-[1px] border-bluegray_103 border-solid h-[20px] w-[20px]"></div>
                      <div className="bg-bluegray_101 h-[40px] w-[40px]"></div>
                      <Text
                        className="font-medium text-bluegray_905 text-left w-[auto]"
                        variant="body59"
                      >
                        Archea - Architecture Agency Landing Page
                      </Text>
                    </div>
                    <Button className="bg-deep_purple_A400 cursor-pointer font-medium min-w-[48px] p-[10px] text-[14px] text-center text-white_A700 w-[auto]">
                      $40
                    </Button>
                    <Text
                      className="font-medium text-bluegray_905 text-left w-[auto]"
                      variant="body67"
                    >
                      Jul 3, 2022 at 3:54 PM
                    </Text>
                    <div className="flex flex-row gap-[10px] items-center justify-end w-[80px]">
                      <Img
                        src="images/img_pen.svg"
                        className="h-[24px] w-[24px]"
                        alt="Pen Five"
                      />
                      <Img
                        src="images/img_trash_bluegray_103.svg"
                        className="h-[24px] w-[24px]"
                        alt="trash Five"
                      />
                    </div>
                  </div>
                  <Line className="self-center h-[1px] bg-gray_103 w-[100%] rounded-[1px]" />
                  <div className="flex flex-1 md:flex-col flex-row gap-[20px] items-center justify-between max-w-[1032px] p-[12px] w-[100%]">
                    <div className="flex flex-row gap-[20px] items-center justify-start w-[351px]">
                      <div className="border-[1px] border-bluegray_103 border-solid h-[20px] w-[20px]"></div>
                      <div className="bg-bluegray_101 h-[40px] w-[40px]"></div>
                      <Text
                        className="font-medium text-bluegray_905 text-left w-[auto]"
                        variant="body59"
                      >
                        Ngatur - Task Management Dashboard
                      </Text>
                    </div>
                    <Button className="bg-deep_purple_A400 cursor-pointer font-medium min-w-[48px] p-[10px] text-[14px] text-center text-white_A700 w-[auto]">
                      $40
                    </Button>
                    <Text
                      className="font-medium text-bluegray_905 text-left w-[auto]"
                      variant="body67"
                    >
                      Jul 3, 2022 at 3:54 PM
                    </Text>
                    <div className="flex flex-row gap-[10px] items-center justify-end w-[80px]">
                      <Img
                        src="images/img_pen.svg"
                        className="h-[24px] w-[24px]"
                        alt="Pen Six"
                      />
                      <Img
                        src="images/img_trash_bluegray_103.svg"
                        className="h-[24px] w-[24px]"
                        alt="trash Six"
                      />
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-row gap-[20px] items-center justify-center w-[auto]">
                <Img
                  src="images/img_arrowleft_bluegray_103.svg"
                  className="h-[20px] w-[20px]"
                  alt="arrowleft"
                />
                <div className="flex flex-row items-start justify-start w-[auto]">
                  <Button className="bg-deep_purple_A400 cursor-pointer font-medium h-[32px] px-[13px] py-[4px] text-[12px] text-center text-white_A700 w-[32px]">
                    1
                  </Button>
                  <div className="flex h-[32px] md:h-[auto] items-center justify-center px-[12px] py-[4px] w-[32px]">
                    <Text
                      className="font-medium text-bluegray_905 text-center w-[auto]"
                      variant="body67"
                    >
                      2
                    </Text>
                  </div>
                  <div className="flex h-[32px] md:h-[auto] items-center justify-center px-[12px] py-[4px] w-[32px]">
                    <Text
                      className="font-medium text-bluegray_905 text-center w-[auto]"
                      variant="body67"
                    >
                      3
                    </Text>
                  </div>
                </div>
                <Img
                  src="images/img_arrowright_bluegray_905.svg"
                  className="h-[20px] w-[20px]"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DraftselectedwebPage;
