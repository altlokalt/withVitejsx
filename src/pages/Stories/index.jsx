import React from "react";

import { Img, Input, Text, Button, Line } from "components";
import { CloseSVG } from "../../assets/images";

const StoriesPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_103 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-[20px] md:gap-[20px] items-start mx-[auto] w-[100%]">
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="h-[1024px] w-[auto]"
          alt="NavigationWebSidebar"
        />
        <div className="flex md:flex-col flex-row gap-[10px] items-start justify-end md:px-[20px] md:w-[100%] w-[89%]">
          <Img
            src="images/img_leftindicator.svg"
            className="h-[128px] md:mt-[0] mt-[368px] w-[auto]"
            alt="LeftIndicator"
          />
          <div className="bg-gray_964 flex items-center justify-end pt-[39px] sm:px-[20px] px-[39px] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] md:w-[100%] w-[99%]">
            <div className="flex flex-col items-start justify-start md:w-[100%] w-[98%]">
              <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
                <div className="bg-white_A700_33 flex md:flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between p-[9px] rounded-[12px] md:w-[100%] w-[71%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
                    wrapClassName="bg-gray_813 flex md:ml-[0] md:mt-[0] md:w-[100%] ml-[2px] mt-[4px] pb-[11px] pl-[9px] pr-[35px] pt-[7px] sm:ml-[0] sm:mt-[0] sm:pr-[20px] sm:w-[100%] w-[auto]"
                    name="FrameSix"
                    placeholder="Search in social…"
                    prefix={
                      <Img
                        src="images/img_search_bluegray_101_18x18.svg"
                        className="cursor-pointer mr-[15px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#8f92a1"
                          className="cursor-pointer ml-[10px] my-[auto]"
                          onClick={() => setInputvalue("")}
                        />
                      ) : (
                        ""
                      )
                    }
                  ></Input>
                  <Text
                    className="font-normal mr-[32px] not-italic text-gray_522 text-left tracking-[1.00px] w-[auto]"
                    variant="body67"
                  >
                    Filters
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-row gap-[20px] items-center justify-between md:w-[100%] w-[9%]">
                  <Button className="bg-light_blue_200 cursor-pointer font-normal h-[48px] not-italic py-[10px] rounded-[12px] sm:text-[18.32px] md:text-[20.32px] text-[22.32px] text-center text-white_A700 w-[48px]">
                    1
                  </Button>
                  <div className="flex h-[48px] items-center justify-start w-[48px]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[48px] md:h-[auto] object-cover rounded-[12px] w-[48px]"
                      alt="Avatar"
                    />
                  </div>
                </div>
              </div>
              <Text
                className="font-normal mt-[36px] not-italic text-left text-white_A700 w-[auto]"
                variant="body30"
              >
                Stories
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[28px] pr-[3px] md:w-[100%] w-[41%]">
                <div className="flex flex-col gap-[5px] items-center justify-start w-[10%] sm:w-[100%]">
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body59"
                  >
                    For You
                  </Text>
                  <Line className="bg-white_A700 h-[2px] w-[100%]" />
                </div>
                <div className="flex items-center justify-start sm:ml-[0] ml-[29px] sm:mt-[0] mt-[3px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-center text-white_A700_99 w-[auto]"
                    variant="body59"
                  >
                    Following
                  </Text>
                </div>
                <div className="flex items-center justify-start sm:ml-[0] ml-[28px] sm:mt-[0] mt-[3px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-center text-white_A700_99 w-[auto]"
                    variant="body59"
                  >
                    Popular
                  </Text>
                </div>
                <div className="flex items-center justify-start sm:ml-[0] ml-[26px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-center text-white_A700_99 w-[auto]"
                    variant="body59"
                  >
                    Featured
                  </Text>
                </div>
                <div className="flex items-center justify-start sm:ml-[0] ml-[28px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-center text-white_A700_99 w-[auto]"
                    variant="body59"
                  >
                    Live
                  </Text>
                </div>
                <div className="flex items-center justify-start sm:ml-[0] ml-[30px] sm:mt-[0] mt-[3px] sm:w-[100%] w-[auto]">
                  <Text
                    className="font-normal not-italic text-center text-white_A700_99 w-[auto]"
                    variant="body59"
                  >
                    Continue Watching
                  </Text>
                </div>
              </div>
              <div className="flex items-center justify-start md:ml-[0] ml-[11px] mt-[33px] md:w-[100%] w-[99%]">
                <div className="md:gap-[20px] gap-[45px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                  <div className="h-[324px] relative w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[324px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image One"
                    />
                    <div className="absolute bg-gradient19  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[39px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[16px] justify-start mt-[140px] md:w-[100%] w-[59%]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[68px] md:h-[auto] md:ml-[0] ml-[19px] object-cover rounded-[24px] w-[68px]"
                          alt="Image One"
                        />
                        <Text
                          className="font-normal mx-[auto] not-italic text-center text-white_A700 w-[auto]"
                          variant="body50"
                        >
                          Edward Ford
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[324px] relative w-[100%]">
                    <Img
                      src="images/img_image_52.png"
                      className="h-[324px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image Two"
                    />
                    <div className="absolute bg-gradient19  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[39px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[16px] justify-start mt-[140px] md:w-[100%] w-[59%]">
                        <Img
                          src="images/img_image_53.png"
                          className="h-[68px] md:h-[auto] md:ml-[0] ml-[19px] object-cover rounded-[24px] w-[68px]"
                          alt="Image One One"
                        />
                        <Text
                          className="font-normal mx-[auto] not-italic text-center text-white_A700 w-[auto]"
                          variant="body50"
                        >
                          Edward Ford
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[324px] relative w-[100%]">
                    <Img
                      src="images/img_image_54.png"
                      className="h-[324px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image Three"
                    />
                    <div className="absolute bg-gradient19  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[39px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[16px] justify-start mt-[140px] md:w-[100%] w-[59%]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[68px] md:h-[auto] md:ml-[0] ml-[19px] object-cover rounded-[24px] w-[68px]"
                          alt="Image One Two"
                        />
                        <Text
                          className="font-normal mx-[auto] not-italic text-center text-white_A700 w-[auto]"
                          variant="body50"
                        >
                          Edward Ford
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[324px] relative w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[324px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image Four"
                    />
                    <div className="absolute bg-gradient19  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[39px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[16px] justify-start mt-[140px] md:w-[100%] w-[59%]">
                        <Img
                          src="images/img_image_57.png"
                          className="h-[68px] md:h-[auto] md:ml-[0] ml-[19px] object-cover rounded-[24px] w-[68px]"
                          alt="Image One Three"
                        />
                        <Text
                          className="font-normal mx-[auto] not-italic text-center text-white_A700 w-[auto]"
                          variant="body50"
                        >
                          Edward Ford
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[324px] relative w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[324px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image Five"
                    />
                    <div className="absolute bg-gradient19  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[39px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[15px] justify-start mt-[140px] px-[12px] md:w-[100%] w-[59%]">
                        <Img
                          src="images/img_image_59.png"
                          className="h-[68px] md:h-[auto] md:ml-[0] ml-[8px] object-cover rounded-[24px] w-[68px]"
                          alt="Image One Four"
                        />
                        <Text
                          className="font-normal not-italic text-center text-white_A700 w-[auto]"
                          variant="body50"
                        >
                          Edward Ford
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[324px] relative w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[324px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image Six"
                    />
                    <div className="absolute bg-gradient19  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[39px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[15px] justify-start mt-[140px] px-[12px] md:w-[100%] w-[59%]">
                        <Img
                          src="images/img_image_61.png"
                          className="h-[68px] md:h-[auto] md:ml-[0] ml-[8px] object-cover rounded-[24px] w-[68px]"
                          alt="Image One Five"
                        />
                        <Text
                          className="font-normal not-italic text-center text-white_A700 w-[auto]"
                          variant="body50"
                        >
                          Edward Ford
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[324px] relative w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[324px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image Seven"
                    />
                    <div className="absolute bg-gradient19  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[39px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[15px] justify-start mt-[140px] px-[12px] md:w-[100%] w-[59%]">
                        <Img
                          src="images/img_image_63.png"
                          className="h-[68px] md:h-[auto] md:ml-[0] ml-[8px] object-cover rounded-[24px] w-[68px]"
                          alt="Image One Six"
                        />
                        <Text
                          className="font-normal not-italic text-center text-white_A700 w-[auto]"
                          variant="body50"
                        >
                          Edward Ford
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="h-[324px] relative w-[100%]">
                    <Img
                      src="defaultNoData.png"
                      className="h-[324px] m-[auto] object-cover rounded-[8px] w-[100%]"
                      alt="Image Eight"
                    />
                    <div className="absolute bg-gradient19  flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[39px] sm:px-[20px] rounded-[8px] w-[100%]">
                      <div className="flex flex-col gap-[15px] justify-start mt-[140px] px-[12px] md:w-[100%] w-[59%]">
                        <Img
                          src="images/img_image_65.png"
                          className="h-[68px] md:h-[auto] md:ml-[0] ml-[8px] object-cover rounded-[24px] w-[68px]"
                          alt="Image One Seven"
                        />
                        <Text
                          className="font-normal not-italic text-center text-white_A700 w-[auto]"
                          variant="body50"
                        >
                          Edward Ford
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

export default StoriesPage;
