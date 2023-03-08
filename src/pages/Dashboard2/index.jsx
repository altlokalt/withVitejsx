import React from "react";

import { Text, Line, Img, Button, Input, Slider, List } from "components";

const Dashboard2Page = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <div className="bg-gray_61 flex font-pacifico h-[854px] justify-end mx-[auto] pr-[171px] sm:pr-[20px] md:pr-[40px] relative w-[100%]">
        <div className="flex h-[100%] items-center justify-end mt-[auto] w-[89%]">
          <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
            <aside className="flex flex-col md:hidden justify-start mb-[6px] w-[238px]">
              <div className="flex items-center justify-start w-[100%]">
                <div className="bg-gray_100 flex items-center justify-start py-[18px] w-[100%]">
                  <div className="flex flex-col gap-[10px] justify-start mb-[159px] w-[100%]">
                    <Text
                      className="font-normal md:ml-[0] ml-[48px] not-italic text-left text-teal_501 w-[auto]"
                      variant="body37"
                    >
                      Analysis
                    </Text>
                    <div className="flex flex-col font-poppins justify-start w-[100%]">
                      <Line className="bg-gray_320 h-[1px] w-[100%]" />
                      <Text
                        className="font-bold md:ml-[0] ml-[48px] mt-[29px] text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        Browse Video
                      </Text>
                      <div className="bg-teal_501 flex flex-row gap-[15px] items-center justify-start mr-[38px] mt-[12px] p-[11px] rounded-bl-[0] rounded-br-[20px] rounded-tl-[0] rounded-tr-[20px] md:w-[100%] w-[85%]">
                        <Img
                          src="images/img_search_white_a700_13x13.svg"
                          className="h-[13px] ml-[36px] w-[13px]"
                          alt="search"
                        />
                        <Text
                          className="font-medium text-gray_69 text-left w-[auto]"
                          variant="body67"
                        >
                          Discover
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[48px] mt-[11px] md:w-[100%] w-[30%]">
                        <Img
                          src="images/img_television_gray_706.svg"
                          className="h-[13px] w-[13px]"
                          alt="television"
                        />
                        <Text
                          className="font-medium text-gray_962 text-left w-[auto]"
                          variant="body67"
                        >
                          Recent
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[48px] mt-[22px] md:w-[100%] w-[35%]">
                        <Img
                          src="images/img_call_gray_706.svg"
                          className="h-[18px] w-[auto]"
                          alt="call"
                        />
                        <Text
                          className="font-medium text-gray_962 text-left w-[auto]"
                          variant="body67"
                        >
                          Trending
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[48px] mt-[23px] md:w-[100%] w-[36%]">
                        <Img
                          src="images/img_user_gray_706.svg"
                          className="h-[12px] w-[13px]"
                          alt="user"
                        />
                        <Text
                          className="font-medium text-gray_962 text-left w-[auto]"
                          variant="body67"
                        >
                          Following
                        </Text>
                      </div>
                      <Text
                        className="font-bold md:ml-[0] ml-[48px] mt-[42px] text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        Your Video
                      </Text>
                      <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[48px] mt-[24px] md:w-[100%] w-[36%]">
                        <Img
                          src="images/img_favorite_gray_706.svg"
                          className="h-[11px] mt-[3px] w-[auto]"
                          alt="favorite"
                        />
                        <Text
                          className="font-medium text-gray_962 text-left w-[auto]"
                          variant="body67"
                        >
                          Favourite
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[47px] mt-[24px] md:w-[100%] w-[42%]">
                        <Img
                          src="images/img_clock_gray_706.svg"
                          className="h-[13px] w-[13px]"
                          alt="clock"
                        />
                        <Text
                          className="font-medium text-gray_962 text-left w-[auto]"
                          variant="body67"
                        >
                          Play History
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[16px] items-start justify-start md:ml-[0] ml-[48px] mt-[23px] md:w-[100%] w-[39%]">
                        <Img
                          src="images/img_upload_gray_706.svg"
                          className="h-[13px] w-[12px]"
                          alt="upload"
                        />
                        <Text
                          className="font-medium text-gray_962 text-left w-[auto]"
                          variant="body67"
                        >
                          My Upload
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[48px] mt-[23px] md:w-[100%] w-[47%]">
                        <Img
                          src="images/img_download_gray_706.svg"
                          className="h-[13px] w-[13px]"
                          alt="download"
                        />
                        <Text
                          className="font-medium text-gray_962 text-left w-[auto]"
                          variant="body67"
                        >
                          My Download
                        </Text>
                      </div>
                      <Text
                        className="font-bold md:ml-[0] ml-[48px] mt-[43px] text-gray_962 text-left w-[auto]"
                        variant="body67"
                      >
                        Playlist
                      </Text>
                      <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[48px] mt-[22px] md:w-[100%] w-[36%]">
                        <Img
                          src="images/img_upload_gray_706_13x13.svg"
                          className="h-[13px] w-[13px]"
                          alt="upload One"
                        />
                        <Text
                          className="font-medium text-gray_962 text-left w-[auto]"
                          variant="body67"
                        >
                          New York
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[48px] mt-[23px] md:w-[100%] w-[30%]">
                        <Img
                          src="images/img_upload_gray_706_13x13.svg"
                          className="h-[13px] mt-[2px] w-[13px]"
                          alt="upload Two"
                        />
                        <Text
                          className="font-medium text-gray_962 text-left w-[auto]"
                          variant="body67"
                        >
                          Boston
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[48px] mt-[24px] md:w-[100%] w-[42%]">
                        <Img
                          src="images/img_upload_gray_706_13x13.svg"
                          className="h-[13px] w-[13px]"
                          alt="upload Three"
                        />
                        <Text
                          className="font-medium text-gray_962 text-left w-[auto]"
                          variant="body67"
                        >
                          Los Angeles
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] ml-[48px] mt-[23px] md:w-[100%] w-[38%]">
                        <Img
                          src="images/img_upload_gray_706_13x13.svg"
                          className="h-[13px] w-[13px]"
                          alt="upload Four"
                        />
                        <Text
                          className="font-medium text-gray_962 text-left w-[auto]"
                          variant="body67"
                        >
                          Las Vegas
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[48px] mt-[20px] md:w-[100%] w-[53%]">
                        <Img
                          src="images/img_upload_gray_706_13x13.svg"
                          className="h-[13px] w-[13px]"
                          alt="upload Five"
                        />
                        <Text
                          className="font-medium text-gray_962 text-left w-[auto]"
                          variant="body67"
                        >
                          Finance Division
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[48px] mt-[23px] md:w-[100%] w-[53%]">
                        <Img
                          src="images/img_upload_gray_706_13x13.svg"
                          className="h-[13px] w-[13px]"
                          alt="upload Six"
                        />
                        <Text
                          className="font-medium text-gray_962 text-left w-[auto]"
                          variant="body67"
                        >
                          Product Division
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex flex-1 flex-col font-poppins items-center justify-start w-[100%]">
              <div className="flex items-center justify-start md:w-[100%] w-[97%]">
                <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start w-[100%]">
                  <Img
                    src="images/img_search_gray_422.svg"
                    className="h-[13px] w-[13px]"
                    alt="search One"
                  />
                  <Text
                    className="font-medium sm:ml-[0] ml-[8px] text-gray_422 text-left w-[auto]"
                    variant="body67"
                  >
                    Search Video
                  </Text>
                  <Button
                    className="flex items-center justify-center ml-[654px] outline outline-[0.5px] outline-teal_501 pl-[14px] pr-[15px] py-[5px] rounded-[4px] sm:ml-[0] text-center"
                    leftIcon={
                      <Img
                        src="images/img_plus_teal_501.svg"
                        className="mr-[7px] text-center"
                        alt="plus"
                      />
                    }
                  >
                    <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[12px] text-left text-teal_501">
                      Upload
                    </div>
                  </Button>
                  <Img
                    src="images/img_notification_teal_501.svg"
                    className="h-[19px] sm:ml-[0] ml-[20px] w-[auto]"
                    alt="notification"
                  />
                  <Img
                    src="images/img_imagehere_gray_521_30x30.svg"
                    className="h-[30px] sm:ml-[0] ml-[20px] w-[30px]"
                    alt="IMAGEHERE"
                  />
                  <div className="flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[10px] sm:w-[100%] w-[auto]">
                    <Text
                      className="font-medium text-gray_812 text-left w-[auto]"
                      variant="body67"
                    >
                      Mark William
                    </Text>
                    <Text
                      className="font-normal not-italic text-gray_812 text-left w-[auto]"
                      variant="body69"
                    >
                      Employee
                    </Text>
                  </div>
                  <Img
                    src="images/img_path4.svg"
                    className="h-[4px] sm:ml-[0] ml-[17px] w-[auto]"
                    alt="PathFour"
                  />
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex h-[300px] items-center justify-start mt-[21px] w-[100%]"
                style={{
                  backgroundImage: "url('images/img_mostpopularvideo.svg')",
                }}
              >
                <div className="bg-gradient16  flex items-start justify-start p-[40px] sm:px-[20px] rounded-bl-[10px] rounded-br-[0] rounded-tl-[10px] rounded-tr-[0] w-[100%]">
                  <div className="flex flex-col items-start justify-start my-[8px] md:w-[100%] w-[36%]">
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body54"
                    >
                      MOST POPULAR VIDEO
                    </Text>
                    <Text
                      className="font-medium mt-[4px] text-left text-white_A700 w-[auto]"
                      variant="body41"
                    >
                      Meetings with Holding Company
                    </Text>
                    <Text
                      className="font-normal mt-[13px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body54"
                    >
                      19 August 2019 - New York
                    </Text>
                    <Text
                      className="font-normal not-italic text-left text-white_A700 w-[auto]"
                      variant="body54"
                    >
                      5 mins
                    </Text>
                    <div className="flex flex-row gap-[11px] items-center justify-start mt-[13px] md:w-[100%] w-[53%]">
                      <div className="h-[19px] relative w-[29%]">
                        <Text
                          className="font-normal mx-[auto] not-italic text-left text-white_A700 w-[auto]"
                          variant="body75"
                        >
                          finance
                        </Text>
                        <Input
                          className="absolute inset-[0] justify-center m-[auto] w-[100%]"
                          wrapClassName="absolute flex h-[19px] outline outline-[0.5px] outline-white_A700 rounded-[1px] w-[100%]"
                          name="Rectangle"
                          placeholder=""
                        ></Input>
                      </div>
                      <div className="flex h-[19px] justify-end relative w-[27%]">
                        <Text
                          className="font-normal mt-[auto] mx-[auto] not-italic text-left text-white_A700 w-[auto]"
                          variant="body75"
                        >
                          money
                        </Text>
                        <div className="absolute h-[19px] inset-[0] justify-center m-[auto] outline outline-[0.5px] outline-white_A700 rounded-[1px] w-[100%]"></div>
                      </div>
                      <div className="flex h-[19px] justify-end relative w-[34%]">
                        <Text
                          className="font-normal mt-[auto] mx-[auto] not-italic text-left text-white_A700 w-[auto]"
                          variant="body75"
                        >
                          company
                        </Text>
                        <div className="absolute h-[19px] inset-[0] justify-center m-[auto] outline outline-[0.5px] outline-white_A700 rounded-[1px] w-[100%]"></div>
                      </div>
                    </div>
                    <Button
                      className="bg-teal_501 flex items-center justify-center mt-[20px] pl-[10px] pr-[12px] py-[6px] rounded-[5px] text-center"
                      leftIcon={
                        <Img
                          src="images/img_path16.svg"
                          className="mr-[5px] text-center"
                          alt="Path_16"
                        />
                      }
                    >
                      <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[12px] text-left text-white_A700">
                        Watch Now
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
              <Slider
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="mt-[30px] w-[97%]"
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex items-center justify-start mx-[10px]">
                      <div className="flex flex-col gap-[18px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_962 text-left w-[auto]"
                            variant="body50"
                          >
                            Recent Videos
                          </Text>
                          <Button className="bg-gray_422 flex h-[23px] items-center justify-center md:ml-[0] ml-[881px] p-[7px] rounded-[11px] w-[23px]">
                            <Img
                              src="images/img_arrowleft_white_a700_9x5.svg"
                              className=""
                              alt="arrowleft"
                            />
                          </Button>
                          <Button className="bg-teal_501 flex h-[23px] items-center justify-center md:ml-[0] ml-[5px] p-[7px] rounded-[11px] w-[23px]">
                            <Img
                              src="images/img_arrowright_white_a700_23x23.svg"
                              className=""
                              alt="arrowright"
                            />
                          </Button>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
                          orientation="horizontal"
                        >
                          <div
                            className="bg-cover bg-no-repeat flex flex-1 h-[140px] items-center justify-start w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group179.svg')",
                            }}
                          >
                            <div className="bg-gradient16  flex flex-col items-start justify-end p-[11px] rounded-[10px] w-[100%]">
                              <Text
                                className="font-semibold md:ml-[0] ml-[3px] mt-[62px] text-left text-white_A700 w-[auto]"
                                variant="body67"
                              >
                                Interview with Emily Lawson
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                19 August 2019 - New York
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                5 mins
                              </Text>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-1 h-[140px] items-center justify-start w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group179.svg')",
                            }}
                          >
                            <div className="bg-gradient16  flex flex-col items-start justify-end p-[11px] rounded-[10px] w-[100%]">
                              <Text
                                className="font-semibold md:ml-[0] ml-[3px] mt-[60px] text-left text-white_A700 w-[auto]"
                                variant="body67"
                              >
                                Interview with Lauren Tran
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                19 August 2019 - New York
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                5 mins
                              </Text>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-1 h-[140px] items-center justify-start w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group179.svg')",
                            }}
                          >
                            <div className="bg-gradient16  flex flex-col items-start justify-end p-[11px] rounded-[10px] w-[100%]">
                              <Text
                                className="font-semibold md:ml-[0] ml-[3px] mt-[62px] text-left text-white_A700 w-[auto]"
                                variant="body67"
                              >
                                Meetings with the Financial Team
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                29 July 2019 - Los Angeles
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                35 mins
                              </Text>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-1 h-[140px] items-center justify-start w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group179.svg')",
                            }}
                          >
                            <div className="bg-gradient16  flex flex-col items-start justify-end p-[11px] rounded-[10px] w-[100%]">
                              <Text
                                className="font-semibold md:ml-[0] ml-[3px] mt-[62px] text-left text-white_A700 w-[auto]"
                                variant="body67"
                              >
                                Interview with Brittany Burke
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                19 August 2019 - New York
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                5 mins
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return <div className="" />;
                  }
                  return <div className="" role="button" tabIndex={0} />;
                }}
              />
              <Slider
                activeIndex={sliderState1}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState1(e?.item);
                }}
                ref={sliderRef1}
                className="mt-[30px] w-[97%]"
                items={[...Array(3)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div className="flex items-center justify-start mx-[10px]">
                      <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                          <Text
                            className="font-semibold text-gray_962 text-left w-[auto]"
                            variant="body50"
                          >
                            Trending
                          </Text>
                          <Button
                            className="bg-gray_422 cursor-pointer flex h-[23px] items-center justify-center mb-[2px] md:ml-[0] ml-[924px] p-[7px] rounded-[11px] w-[23px]"
                            onClick={() => sliderRef.current?.slidePrev?.()}
                          >
                            <Img
                              src="images/img_arrowleft_white_a700_9x5.svg"
                              className=""
                              alt="arrowleft One"
                            />
                          </Button>
                          <Button
                            className="bg-teal_501 cursor-pointer flex h-[23px] items-center justify-center mb-[2px] md:ml-[0] ml-[5px] p-[7px] rounded-[11px] w-[23px]"
                            onClick={() => sliderRef.current?.slideNext?.()}
                          >
                            <Img
                              src="images/img_arrowright_white_a700_23x23.svg"
                              className=""
                              alt="arrowright One"
                            />
                          </Button>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
                          orientation="horizontal"
                        >
                          <div
                            className="bg-cover bg-no-repeat flex flex-1 h-[140px] items-center justify-start w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group179.svg')",
                            }}
                          >
                            <div className="bg-gradient16  flex flex-col items-start justify-end p-[11px] rounded-[10px] w-[100%]">
                              <Text
                                className="font-semibold md:ml-[0] ml-[3px] mt-[60px] text-left text-white_A700 w-[auto]"
                                variant="body67"
                              >
                                Interview with Judith Tucker
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                19 August 2019 - New York
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                5 mins
                              </Text>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-1 h-[140px] items-center justify-start w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group179.svg')",
                            }}
                          >
                            <div className="bg-gradient16  flex flex-col items-start justify-end p-[11px] rounded-[10px] w-[100%]">
                              <Text
                                className="font-semibold md:ml-[0] ml-[3px] mt-[60px] text-left text-white_A700 w-[auto]"
                                variant="body67"
                              >
                                Interview with Donald Wheeler
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                19 August 2019 - New York
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                5 mins
                              </Text>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-1 h-[140px] items-center justify-start w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group179.svg')",
                            }}
                          >
                            <div className="bg-gradient16  flex flex-col items-start justify-end p-[11px] rounded-[10px] w-[100%]">
                              <Text
                                className="font-semibold md:ml-[0] ml-[3px] mt-[62px] text-left text-white_A700 w-[auto]"
                                variant="body67"
                              >
                                Interview with Ashley Wood
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                29 July 2019 - Los Angeles
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                35 mins
                              </Text>
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-1 h-[140px] items-center justify-start w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group179.svg')",
                            }}
                          >
                            <div className="bg-gradient16  flex flex-col items-start justify-end p-[11px] rounded-[10px] w-[100%]">
                              <Text
                                className="font-semibold md:ml-[0] ml-[3px] mt-[62px] text-left text-white_A700 w-[auto]"
                                variant="body67"
                              >
                                Interview with Sean Bailey
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                19 August 2019 - New York
                              </Text>
                              <Text
                                className="font-normal md:ml-[0] ml-[3px] not-italic text-left text-white_A700 w-[auto]"
                                variant="body69"
                              >
                                5 mins
                              </Text>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return <div className="" />;
                  }
                  return <div className="" role="button" tabIndex={0} />;
                }}
              />
              <div className="flex items-center justify-start mt-[30px] md:w-[100%] w-[97%]">
                <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start w-[100%]">
                    <Text
                      className="font-semibold text-gray_962 text-left w-[auto]"
                      variant="body50"
                    >
                      Following
                    </Text>
                    <Button
                      className="bg-gray_422 cursor-pointer flex h-[23px] items-center justify-center mb-[2px] md:ml-[0] ml-[919px] p-[7px] rounded-[11px] w-[23px]"
                      onClick={() => sliderRef1.current?.slidePrev?.()}
                    >
                      <Img
                        src="images/img_arrowleft_white_a700_9x5.svg"
                        className=""
                        alt="arrowleft Two"
                      />
                    </Button>
                    <Button
                      className="bg-teal_501 cursor-pointer flex h-[23px] items-center justify-center mb-[2px] md:ml-[0] ml-[5px] p-[7px] rounded-[11px] w-[23px]"
                      onClick={() => sliderRef1.current?.slideNext?.()}
                    >
                      <Img
                        src="images/img_arrowright_white_a700_23x23.svg"
                        className=""
                        alt="arrowright Two"
                      />
                    </Button>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 h-[140px] items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group179.svg')",
                      }}
                    >
                      <div className="bg-gradient16  flex flex-col items-start justify-end p-[11px] rounded-[10px] w-[100%]">
                        <Text
                          className="font-semibold md:ml-[0] ml-[4px] mt-[62px] text-left text-white_A700 w-[auto]"
                          variant="body67"
                        >
                          Interview with Cynthia Davis
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[4px] mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          19 August 2019 - New York
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[4px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          5 mins
                        </Text>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 h-[140px] items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group179.svg')",
                      }}
                    >
                      <div className="bg-gradient16  flex flex-col items-start justify-end p-[11px] rounded-[10px] w-[100%]">
                        <Text
                          className="font-semibold md:ml-[0] ml-[4px] mt-[62px] text-left text-white_A700 w-[auto]"
                          variant="body67"
                        >
                          Interview with Marilyn Simmons
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[4px] mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          19 August 2019 - New York
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[4px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          5 mins
                        </Text>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 h-[140px] items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group179.svg')",
                      }}
                    >
                      <div className="bg-gradient16  flex flex-col items-start justify-end p-[11px] rounded-[10px] w-[100%]">
                        <Text
                          className="font-semibold md:ml-[0] ml-[4px] mt-[62px] text-left text-white_A700 w-[auto]"
                          variant="body67"
                        >
                          Interview with Harold Spencer
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[4px] mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          29 July 2019 - Los Angeles
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[4px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          35 mins
                        </Text>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-1 h-[140px] items-center justify-start w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group179.svg')",
                      }}
                    >
                      <div className="bg-gradient16  flex flex-col items-start justify-end p-[11px] rounded-[10px] w-[100%]">
                        <Text
                          className="font-semibold md:ml-[0] ml-[4px] mt-[62px] text-left text-white_A700 w-[auto]"
                          variant="body67"
                        >
                          Interview with Justin Jensen
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[4px] mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          19 August 2019 - New York
                        </Text>
                        <Text
                          className="font-normal md:ml-[0] ml-[4px] not-italic text-left text-white_A700 w-[auto]"
                          variant="body69"
                        >
                          5 mins
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-cover bg-no-repeat bottom-[0] font-poppins md:h-[50px] h-[80px] left-[0] p-[15px] md:px-[20px] md:w-[100%] w-[89%]"
          style={{ backgroundImage: "url('images/img_player.svg')" }}
        >
          <div className="h-[50px] m-[auto] md:w-[100%] w-[95%]">
            <div className="flex h-[100%] items-center justify-start m-[auto] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start w-[100%]">
                <Img
                  src="images/img_imagehere_gray_521.svg"
                  className="h-[50px] w-[auto]"
                  alt="IMAGEHERE One"
                />
                <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[15px] md:w-[100%] w-[auto]">
                  <Text
                    className="font-medium text-gray_962 text-left w-[auto]"
                    variant="body54"
                  >
                    Meetings with Holding Company
                  </Text>
                  <Text
                    className="font-normal not-italic text-gray_962 text-left w-[auto]"
                    variant="body61"
                  >
                    19 August 2019 - New York
                  </Text>
                </div>
                <Img
                  src="images/img_contrast_gray_422.svg"
                  className="h-[15px] md:ml-[0] ml-[42px] w-[auto]"
                  alt="contrast"
                />
                <Button className="bg-teal_501 flex h-[35px] items-center justify-center md:ml-[0] ml-[15px] md:mt-[0] my-[7px] p-[10px] rounded-[17px] w-[35px]">
                  <Img
                    src="images/img_path162.svg"
                    className=""
                    alt="Path162"
                  />
                </Button>
                <Img
                  src="images/img_contrast_gray_422.svg"
                  className="h-[15px] md:ml-[0] ml-[15px] w-[auto]"
                  alt="contrast One"
                />
                <Text
                  className="font-normal md:ml-[0] ml-[26px] not-italic text-gray_962 text-left w-[auto]"
                  variant="body69"
                >
                  00:00
                </Text>
                <Img
                  src="images/img_group64.png"
                  className="md:flex-1 h-[34px] sm:h-[auto] md:ml-[0] ml-[11px] object-cover md:w-[100%] w-[auto]"
                  alt="GroupSixtyFour"
                />
                <Text
                  className="font-normal md:ml-[0] ml-[11px] not-italic text-gray_962 text-left w-[auto]"
                  variant="body69"
                >
                  05:00
                </Text>
                <Button
                  className="bg-teal_501 flex items-center justify-center md:ml-[0] md:mt-[0] ml-[30px] my-[10px] px-[18px] py-[7px] rounded-[3px] sm:ml-[0] sm:mt-[0] text-center"
                  leftIcon={
                    <Img
                      src="images/img_download_white_a700.svg"
                      className="mr-[5px] text-center"
                      alt="download"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[11px] text-left text-white_A700">
                    Download
                  </div>
                </Button>
                <Button
                  className="bg-gray_706 flex items-center justify-center md:ml-[0] md:mt-[0] ml-[20px] my-[10px] pl-[14px] pr-[15px] py-[6px] rounded-[3px] sm:ml-[0] sm:mt-[0] text-center"
                  leftIcon={
                    <Img
                      src="images/img_share_white_a700_13x13.svg"
                      className="mr-[5px] text-center"
                      alt="share"
                    />
                  }
                >
                  <div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[11px] text-left text-white_A700">
                    Detail Page
                  </div>
                </Button>
              </div>
            </div>
            <Line className="absolute bg-gray_422 h-[3px] inset-y-[0] my-[auto] right-[24%] rounded-[1px] w-[35%]" />
          </div>
          <div className="absolute bg-white_A700 flex h-[max-content] inset-y-[0] items-center justify-start left-[41%] my-[auto] rounded-[5px] w-[11px]">
            <Img
              src="images/img_contrast_teal_501.svg"
              className="h-[9px] w-[9px]"
              alt="contrast Two"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard2Page;
