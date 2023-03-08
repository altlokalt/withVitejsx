import React from "react";

import { Img, Text, List, Input } from "components";

const SinglePostPage = () => {
  return (
    <>
      <div className="bg-gray_103 font-inter h-[875px] mx-[auto] relative w-[100%]">
        <div className="absolute bg-white_A700 flex flex-col gap-[34px] h-[100%] inset-y-[0] items-start justify-start my-[auto] p-[34px] md:px-[20px] right-[0] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[89%]">
          <div
            className="bg-cover bg-no-repeat flex h-[49px] items-center justify-end md:ml-[0] ml-[45px] p-[11px] rounded-[12px] md:w-[100%] w-[8%]"
            style={{
              backgroundImage: "url('images/img_buttonresponsivewithicon.svg')",
            }}
          >
            <div className="flex flex-row gap-[10px] items-start justify-center mt-[4px] md:w-[100%] w-[76%]">
              <Img
                src="images/img_arrowleft_gray_522.svg"
                className="h-[18px] mt-[3px] w-[18px]"
                alt="arrowleft"
              />
              <Text
                className="font-normal not-italic text-gray_522 text-left w-[auto]"
                variant="body59"
              >
                Back
              </Text>
            </div>
          </div>
          <div className="flex items-center justify-start mb-[5px] md:ml-[0] ml-[45px] md:w-[100%] w-[60%]">
            <div className="flex flex-col gap-[34px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[34px] items-center justify-start w-[100%]">
                <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]">
                  <div className="flex sm:flex-1 flex-row gap-[10px] items-center justify-between pr-[6px] sm:w-[100%] w-[20%]">
                    <div className="flex items-center justify-start w-[31%]">
                      <Img
                        src="images/img_avatar_15.png"
                        className="h-[41px] md:h-[auto] object-cover rounded-[12px] w-[100%]"
                        alt="Avatar"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[auto]">
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        Katherine Cole
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_522 text-left w-[auto]"
                        variant="body67"
                      >
                        5min ago
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-1 flex-row items-start justify-between sm:w-[100%] w-[36%]">
                    <div className="flex flex-row gap-[5px] items-start justify-start mt-[4px] p-[5px] w-[auto]">
                      <Img
                        src="images/img_favorite_bluegray_101_11x14.svg"
                        className="h-[14px] mt-[2px] w-[14px]"
                        alt="favorite"
                      />
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        326
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[6px] items-start justify-start mt-[4px] p-[5px] w-[auto]">
                      <Img
                        src="images/img_laptop_bluegray_101.svg"
                        className="h-[14px] mt-[3px] w-[14px]"
                        alt="laptop"
                      />
                      <Text
                        className="font-normal not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        148
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center mt-[3px] p-[6px] w-[auto]">
                      <Img
                        src="images/img_reply_gray_964.svg"
                        className="h-[14px] ml-[4px] w-[14px]"
                        alt="reply"
                      />
                      <Text
                        className="font-normal ml-[4px] not-italic text-gray_964 text-left w-[auto]"
                        variant="body59"
                      >
                        Share
                      </Text>
                    </div>
                    <Img
                      src="images/img_overflowmenu_bluegray_101_38x38.svg"
                      className="h-[32px] w-[auto]"
                      alt="overflowmenu"
                    />
                  </div>
                </div>
                <Img
                  src="defaultNoData.png"
                  className="h-[281px] md:h-[auto] object-cover rounded-[8px] w-[100%]"
                  alt="Image"
                />
              </div>
              <div className="flex flex-col gap-[21px] items-center justify-start w-[100%]">
                <Text
                  className="font-normal leading-[36.00px] not-italic text-gray_964 text-left w-[100%]"
                  variant="body30"
                >
                  The Best Fashion Instagrams of the Week: Céline Dion, Lizzo,
                  and More
                </Text>
                <Text
                  className="font-normal leading-[22.00px] not-italic text-gray_522 text-left"
                  variant="body59"
                >
                  f you are looking for a break from the cold, take a cue from
                  Lizzo: This week, the singer headed to Disneyland in warm and
                  sunny California. She dressed up for the occasion in pure
                  Minnie Mouse style perfection, including a cartoon merch
                  sweatshirt from the artist Shelby Swain, cycling shorts, and
                  adorable pulled-up polka dot socks. All the way over in
                  Montreal, Céline Dion also had quite the wardrobe moment. For
                  a concert, the singer wore a pair of fringed, XXL-flared
                  cowboy jeans by Ukrainian label Ksenia Schnaider. The
                  Kiev-based designer is responsible for other viral denim
                  creations, like her asymmetrical jeans that launched earlier
                  this year. Fun fact: The daring Dion has worn a pair of those,
                  too!
                  <br />
                  <br />
                  Of course, back in New York, there was Marc Jacobs. The
                  designer has been having quite the year when it comes to
                  flexing his fashion muscles on the ’gram. This week, he
                  channeled The Wizard Of Oz with a full-green look that
                  included some shimmery Sies Marjan pants, and a pair of
                  platform boots to anchor the ensemble.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Img
          src="images/img_navigationwebsidebar.svg"
          className="absolute bottom-[0] h-[1024px] left-[0] w-[auto]"
          alt="NavigationWebSidebar"
        />
        <div className="absolute bg-gray_964 flex flex-col md:gap-[40px] gap-[70px] h-[100%] inset-y-[0] items-center justify-start my-[auto] pb-[40px] md:px-[20px] px-[40px] right-[0] rounded-bl-[32px] rounded-br-[0] rounded-tl-[32px] rounded-tr-[0] w-[27%]">
          <div className="flex flex-col gap-[39px] items-start justify-start md:w-[100%] w-[96%]">
            <Text
              className="font-normal not-italic text-left text-white_A700 w-[auto]"
              variant="body41"
            >
              Comments (148)
            </Text>
            <List
              className="flex-col gap-[32px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                    <div className="flex flex-row items-end justify-evenly w-[auto]">
                      <div className="flex h-[28px] items-center justify-start w-[28px]">
                        <Img
                          src="images/img_avatar_56.png"
                          className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                          alt="Avatar One"
                        />
                      </div>
                      <Text
                        className="font-normal my-[5px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        Billy Green
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_522 text-left w-[auto]"
                      variant="body67"
                    >
                      20min ago
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[22.00px] not-italic text-left text-white_A700 w-[100%]"
                    variant="body59"
                  >
                    Awesome Edward, remeber that five tips for low cost holidays
                    I sent you?
                  </Text>
                  <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[14%]">
                    <Img
                      src="images/img_favorite_red_a204.svg"
                      className="h-[14px] w-[14px]"
                      alt="favorite One"
                    />
                    <Img
                      src="images/img_laptop_bluegray_101.svg"
                      className="h-[14px] w-[14px]"
                      alt="laptop One"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                    <div className="flex flex-row items-end justify-evenly w-[auto]">
                      <div className="flex h-[28px] items-center justify-start w-[28px]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                          alt="Avatar Two"
                        />
                      </div>
                      <Text
                        className="font-normal my-[5px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        Billy Green
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_522 text-left w-[auto]"
                      variant="body67"
                    >
                      20min ago
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[22.00px] not-italic text-left text-white_A700 w-[100%]"
                    variant="body59"
                  >
                    Awesome Edward, remeber that five tips for low cost{" "}
                  </Text>
                  <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[14%]">
                    <Img
                      src="images/img_favorite_bluegray_101_11x14.svg"
                      className="h-[14px] w-[14px]"
                      alt="favorite Two"
                    />
                    <Img
                      src="images/img_laptop_bluegray_101.svg"
                      className="h-[14px] w-[14px]"
                      alt="laptop Two"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                    <div className="flex flex-row items-end justify-evenly w-[auto]">
                      <div className="flex h-[28px] items-center justify-start w-[28px]">
                        <Img
                          src="defaultNoData.png"
                          className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                          alt="Avatar Three"
                        />
                      </div>
                      <Text
                        className="font-normal my-[5px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        Billy Green
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_522 text-left w-[auto]"
                      variant="body67"
                    >
                      20min ago
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[22.00px] not-italic text-left text-white_A700 w-[100%]"
                    variant="body59"
                  >
                    Awesome Edward, remeber that five tips for low cost holidays
                    I sent you?
                  </Text>
                  <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[14%]">
                    <Img
                      src="images/img_favorite_red_a204.svg"
                      className="h-[14px] w-[14px]"
                      alt="favorite Three"
                    />
                    <Img
                      src="images/img_laptop_bluegray_101.svg"
                      className="h-[14px] w-[14px]"
                      alt="laptop Three"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                    <div className="flex flex-row items-end justify-evenly w-[auto]">
                      <div className="flex h-[28px] items-center justify-start w-[28px]">
                        <Img
                          src="images/img_avatar_58.png"
                          className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                          alt="Avatar Four"
                        />
                      </div>
                      <Text
                        className="font-normal my-[5px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        Billy Green
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_522 text-left w-[auto]"
                      variant="body67"
                    >
                      20min ago
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[22.00px] not-italic text-left text-white_A700 w-[100%]"
                    variant="body59"
                  >
                    Awesome Edward, remeber that five tips for low cost{" "}
                  </Text>
                  <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[14%]">
                    <Img
                      src="images/img_favorite_bluegray_101_11x14.svg"
                      className="h-[14px] w-[14px]"
                      alt="favorite Four"
                    />
                    <Img
                      src="images/img_laptop_bluegray_101.svg"
                      className="h-[14px] w-[14px]"
                      alt="laptop Four"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-start w-[100%]">
                <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                  <div className="flex flex-row items-center justify-between md:w-[100%] w-[98%]">
                    <div className="flex flex-row items-end justify-evenly w-[auto]">
                      <div className="flex h-[28px] items-center justify-start w-[28px]">
                        <Img
                          src="images/img_avatar_52.png"
                          className="h-[28px] md:h-[auto] object-cover rounded-[10px] w-[28px]"
                          alt="Avatar Five"
                        />
                      </div>
                      <Text
                        className="font-normal my-[5px] not-italic text-left text-white_A700 w-[auto]"
                        variant="body59"
                      >
                        Billy Green
                      </Text>
                    </div>
                    <Text
                      className="font-normal not-italic text-gray_522 text-left w-[auto]"
                      variant="body67"
                    >
                      20min ago
                    </Text>
                  </div>
                  <Text
                    className="font-normal leading-[22.00px] not-italic text-left text-white_A700 w-[100%]"
                    variant="body59"
                  >
                    Awesome Edward, remeber that five tips for low cost holidays
                    I sent you?
                  </Text>
                  <div className="flex flex-row gap-[16px] items-center justify-start md:w-[100%] w-[14%]">
                    <Img
                      src="images/img_favorite_red_a204.svg"
                      className="h-[14px] w-[14px]"
                      alt="favorite Five"
                    />
                    <Img
                      src="images/img_laptop_bluegray_101.svg"
                      className="h-[14px] w-[14px]"
                      alt="laptop Five"
                    />
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="bg-white_A700 flex flex-row gap-[25px] items-center justify-center p-[11px] rounded-[4px] md:w-[100%] w-[96%]">
            <Input
              className="font-normal not-italic p-[0] text-[14px] placeholder:text-gray_522 text-gray_522 text-left w-[100%]"
              wrapClassName="bg-white_A700 flex ml-[4px] pl-[2px] pr-[1px] py-[4px] sm:w-[100%] w-[82%]"
              name="FrameFive"
              placeholder="Write a comment…"
              suffix={
                <Img
                  src="images/img_user_bluegray_101_14x14.svg"
                  className="ml-[12px] my-[auto]"
                  alt="user"
                />
              }
            ></Input>
            <Img
              src="images/img_send_indigo_a206.svg"
              className="h-[14px] mr-[15px] w-[14px]"
              alt="send"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
