import React from "react";

import {
  Img,
  Text,
  Button,
  Input,
  SelectBox,
  ReactTable,
  Line,
  List,
} from "components";
import { CloseSVG } from "../../assets/images";
import { createColumnHelper } from "@tanstack/react-table";

const MyProfileHistoryPage = () => {
  const tableData2 = React.useRef([
    {
      rowitemlist: "From Mindblowonstudio",
      rowstatus: "Actived",
      rowopenprice: "5.62 ETH",
      rowyouroffer: "2.62 ETH",
      rowrecentoffer: "2.14 ETH",
      rowtimeleft: "1h 19m",
    },
    {
      rowitemlist: "From Marvin McKinney",
      rowstatus: "On Going",
      rowopenprice: "11.70 ETH",
      rowyouroffer: "17.84 ETH",
      rowrecentoffer: "11.99 ETH",
      rowtimeleft: "18h 18m 2s",
    },
    {
      rowitemlist: "From Angelina Cruzz",
      rowstatus: "Ended",
      rowopenprice: "6.48 ETH",
      rowyouroffer: "14.81 ETH",
      rowrecentoffer: "12.81 ETH",
      rowtimeleft: "12h 1m 24s",
    },
    {
      rowitemlist: "From Ralphi Arness",
      rowstatus: "Ended",
      rowopenprice: "17.84 ETH",
      rowyouroffer: "17.99 ETH",
      rowrecentoffer: "17.84 ETH",
      rowtimeleft: "28h 20m 5s",
    },
    {
      rowitemlist: "From Annette Black",
      rowstatus: "On Going",
      rowopenprice: "8.99 ETH",
      rowyouroffer: "11.70 ETH",
      rowrecentoffer: "10.22 ETH",
      rowtimeleft: "17h 6m 3s",
    },
    {
      rowitemlist: "From Jacob Jones",
      rowstatus: "Success",
      rowopenprice: "14.81 ETH",
      rowyouroffer: "16.48 ETH",
      rowrecentoffer: "12.32 ETH",
      rowtimeleft: "3h 37m 22s",
    },
    {
      rowitemlist: "From Eleanor Pena",
      rowstatus: "On Going",
      rowopenprice: "5.22 ETH",
      rowyouroffer: "8.99 ETH",
      rowrecentoffer: "6.70 ETH",
      rowtimeleft: "34h 36m 6s",
    },
    {
      rowitemlist: "From Brooklyn Simmons",
      rowstatus: "On Going",
      rowopenprice: "3.99 ETH",
      rowyouroffer: "5.22 ETH",
      rowrecentoffer: "4.84 ETH",
      rowtimeleft: "3h 4m 3 s",
    },
  ]);
  const columnHelper2 = createColumnHelper();
  const column2 = [
    columnHelper2.accessor("rowitemlist", {
      cell: (info) => (
        <div className="flex flex-row gap-[14px] items-start justify-start p-[12px]">
          <Img
            src="images/img_ellipse1018.png"
            className="h-[42px] md:h-[auto] ml-[11px] mt-[9px] rounded-[50%] w-[42px]"
            alt="Ellipse1018"
          />
          <div className="flex flex-col items-start justify-end mt-[10px] w-[auto]">
            <Text
              className="font-normal not-italic text-black_908 text-left tracking-[0.16px] w-[auto]"
              as="p"
              variant="body50"
            >
              Peachy Puch#22
            </Text>
            <Text
              className="font-normal mt-[3px] not-italic text-gray_523 text-left tracking-[0.12px] w-[auto]"
              as="p"
              variant="body67"
            >
              {info?.getValue()}
            </Text>
          </div>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[322px] md:w-[100%] w-[31%]">
          <Text
            className="font-normal mb-[25px] not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body59"
          >
            Item List
          </Text>
        </div>
      ),
    }),
    columnHelper2.accessor("rowstatus", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[25px] pt-[34px] text-black_908 text-left tracking-[0.14px]"
          as="p"
          variant="body59"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[141px] md:w-[100%] w-[14%]">
          <Text
            className="font-normal mb-[25px] not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body59"
          >
            Status
          </Text>
        </div>
      ),
    }),
    columnHelper2.accessor("rowopenprice", {
      cell: (info) => (
        <div className="flex flex-row gap-[6px] items-start justify-center sm:pr-[20px] pr-[25px] py-[25px]">
          <Img
            src="images/img_sort_gray_965.svg"
            className="h-[16px] mt-[10px] w-[16px]"
            alt="sort"
          />
          <Text
            className="font-normal mr-[67px] mt-[9px] not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body59"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[170px] pr-[2px] py-[2px] md:w-[100%] w-[16%]">
          <Text
            className="font-normal mb-[22px] not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body59"
          >
            Open Price
          </Text>
        </div>
      ),
    }),
    columnHelper2.accessor("rowyouroffer", {
      cell: (info) => (
        <div className="flex flex-row gap-[6px] items-start justify-start">
          <Img
            src="images/img_sort_gray_965.svg"
            className="h-[16px] mt-[34px] w-[16px]"
            alt="sort One"
          />
          <Text
            className="font-normal mb-[24px] mt-[34px] not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body59"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[166px] pb-[26px] sm:pr-[20px] pr-[26px] md:w-[100%] w-[16%]">
          <Text
            className="font-normal not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body59"
          >
            Your Offer
          </Text>
        </div>
      ),
    }),
    columnHelper2.accessor("rowrecentoffer", {
      cell: (info) => (
        <div className="flex flex-row gap-[6px] items-start justify-start">
          <Img
            src="images/img_sort_gray_965.svg"
            className="h-[16px] mt-[34px] w-[16px]"
            alt="sort Two"
          />
          <Text
            className="font-normal mb-[24px] mt-[34px] not-italic text-black_908 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body59"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-center min-w-[174px] pb-[26px] sm:pr-[20px] pr-[26px] md:w-[100%] w-[17%]">
          <Text
            className="font-normal not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body59"
          >
            Recent Offer
          </Text>
        </div>
      ),
    }),
    columnHelper2.accessor("rowtimeleft", {
      cell: (info) => (
        <Text
          className="font-normal not-italic pb-[25px] pt-[34px] text-black_908 text-left tracking-[0.14px]"
          as="p"
          variant="body59"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 items-center justify-start min-w-[97px] pb-[26px] sm:pr-[20px] pr-[26px] w-[10%] md:w-[100%]">
          <Text
            className="font-normal not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
            as="p"
            variant="body59"
          >
            Time Left
          </Text>
        </div>
      ),
    }),
  ];

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_907 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-[20px] md:gap-[20px] items-center mx-[auto] w-[100%]">
        <aside className="flex flex-col md:hidden justify-start md:px-[20px] w-[302px]">
          <div className="flex items-center justify-start w-[100%]">
            <div className="bg-gray_70 border-[1px] border-gray_123 border-solid flex flex-col gap-[50px] items-start justify-start py-[34px] w-[100%]">
              <div className="flex flex-row gap-[14px] items-center justify-start md:ml-[0] ml-[34px] md:w-[100%] w-[59%]">
                <Img
                  src="defaultNoData.png"
                  className="h-[56px] md:h-[auto] rounded-[50%] w-[56px]"
                  alt="Ellipse1015"
                />
                <div className="flex flex-col items-start justify-start w-[auto]">
                  <Text
                    className="font-semibold text-black_908 text-left tracking-[0.18px] w-[auto]"
                    variant="body47"
                  >
                    Kevin Cranel
                  </Text>
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_523 text-left tracking-[0.14px] w-[auto]"
                    variant="body59"
                  >
                    @kecrane
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start px-[18px] w-[100%]">
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[16px] not-italic text-gray_966 text-left tracking-[0.12px] w-[auto]"
                    variant="body67"
                  >
                    GENERAL
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[2px] md:w-[100%] w-[55%]">
                        <Img
                          src="images/img_clock_gray_523.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock"
                        />
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Dashboard
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-end p-[8px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[46%]">
                        <Img
                          src="images/img_car_gray_523.svg"
                          className="h-[24px] w-[24px]"
                          alt="car"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Message
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-end p-[8px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[44%]">
                        <Img
                          src="images/img_settings_gray_523.svg"
                          className="h-[24px] w-[24px]"
                          alt="settings"
                        />
                        <Text
                          className="font-normal mt-[3px] not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Settings
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[16px] not-italic text-gray_966 text-left tracking-[0.12px] w-[auto]"
                    variant="body67"
                  >
                    MARKETPLACE
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[2px] md:w-[100%] w-[42%]">
                        <Img
                          src="images/img_user_gray_523.svg"
                          className="h-[24px] w-[24px]"
                          alt="user"
                        />
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Market
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[3px] md:w-[100%] w-[51%]">
                        <Img
                          src="images/img_mail_gray_523.svg"
                          className="h-[24px] w-[24px]"
                          alt="mail"
                        />
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Active Bid
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] md:w-[100%] w-[39%]">
                        <Img
                          src="images/img_clock_gray_523_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Saved
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] justify-start w-[100%]">
                  <Text
                    className="font-normal md:ml-[0] ml-[16px] not-italic text-gray_966 text-left tracking-[0.12px] w-[auto]"
                    variant="body67"
                  >
                    MY PROFILE
                  </Text>
                  <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[3px] md:w-[100%] w-[51%]">
                        <Img
                          src="images/img_user_gray_523_24x24.svg"
                          className="h-[24px] w-[24px]"
                          alt="user One"
                        />
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Collection
                        </Text>
                      </div>
                    </div>
                    <div className="flex items-start justify-start p-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[6px] pr-[4px] md:w-[100%] w-[39%]">
                        <Img
                          src="images/img_computer_gray_523.svg"
                          className="h-[24px] w-[24px]"
                          alt="computer"
                        />
                        <Text
                          className="font-normal not-italic text-gray_523 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          Wallet
                        </Text>
                      </div>
                    </div>
                    <div className="bg-gray_900_5f flex font-outfit items-start justify-end p-[8px] rounded-[10px] w-[100%]">
                      <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] mr-[auto] md:w-[100%] w-[41%]">
                        <Img
                          src="images/img_clock_gray_965.svg"
                          className="h-[24px] w-[24px]"
                          alt="clock Two"
                        />
                        <Text
                          className="font-medium mt-[2px] text-gray_965 text-left tracking-[0.18px] w-[auto]"
                          variant="body47"
                        >
                          History
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-urbanist md:h-[243px] h-[258px] md:ml-[0] ml-[34px] relative w-[78%]">
                <div className="absolute bg-gray_965 bottom-[0] h-[233px] inset-x-[0] mx-[auto] rounded-[15px] w-[234px]"></div>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-[auto] top-[0] w-[91%]">
                  <Button className="bg-white_A700 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] shadow-bs69 w-[50px]">
                    <Img
                      src="images/img_question_gray_965.svg"
                      className="h-[24px]"
                      alt="question"
                    />
                  </Button>
                  <Text
                    className="font-normal mt-[16px] not-italic text-left text-white_A700 tracking-[0.18px] w-[auto]"
                    variant="body47"
                  >
                    Help Center
                  </Text>
                  <div className="flex flex-col gap-[29px] items-center justify-start mt-[10px] w-[100%]">
                    <Text
                      className="font-normal leading-[25.20px] not-italic text-center text-gray_423 tracking-[0.14px]"
                      variant="body59"
                    >
                      Having trouble in Enefti?
                      <br />
                      Please contact us for more question
                    </Text>
                    <Button className="bg-white_A700 cursor-pointer font-normal min-w-[206px] not-italic py-[11px] rounded-[10px] text-[14px] text-center text-gray_965 tracking-[0.14px] w-[auto]">
                      Go To Help Center
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col gap-[39px] items-center justify-end md:px-[20px] w-[100%]">
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] items-center justify-between outline outline-[0.5px] outline-gray_123 p-[34px] sm:px-[20px] w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="flex-1 font-normal not-italic p-[0] text-[14px] placeholder:text-gray_523 text-gray_523 text-left tracking-[0.14px] w-[100%]"
              wrapClassName="bg-white_A700 border-[1px] border-gray_321 border-solid flex md:mt-[0] md:w-[100%] my-[2px] pl-[16px] pr-[35px] py-[16px] rounded-[15px] sm:mt-[0] sm:pr-[20px] sm:w-[100%] w-[45%]"
              name="SearchInput"
              placeholder="Search items, collections, and users"
              prefix={
                <Img
                  src="images/img_search_gray_523.svg"
                  className="cursor-pointer mr-[16px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#93989a"
                    className="cursor-pointer ml-[10px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
            ></Input>
            <div className="flex md:flex-1 flex-row font-urbanist gap-[30px] items-center justify-center md:mt-[0] my-[2px] md:w-[100%] w-[32%]">
              <Button
                className="flex items-center justify-center outline outline-[0.5px] outline-gray_123 pl-[16px] pr-[20px] py-[16px] rounded-[10px] text-center"
                leftIcon={
                  <Img
                    src="images/img_sort_gray_965.svg"
                    className="mr-[10px] text-center"
                    alt="sort"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-black_908 text-left tracking-[0.16px]">
                  3,421 ETH
                </div>
              </Button>
              <Button className="flex h-[52px] items-center justify-center outline outline-[0.5px] outline-gray_123 p-[14px] rounded-[50%] w-[52px]">
                <Img
                  src="images/img_lock_black_908.svg"
                  className="h-[24px]"
                  alt="lock"
                />
              </Button>
              <SelectBox
                className="sm:w-[100%] w-[27%]"
                placeholderClassName=""
                name="user Two"
                placeholder=""
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_ellipse_1020.png"
                    className="h-[52px] mr-[35px] w-[52px] rounded-[50%]"
                    alt="Ellipse 1020"
                  />
                }
              ></SelectBox>
            </div>
          </div>
          <div className="flex flex-col font-urbanist items-start justify-start md:w-[100%] w-[95%]">
            <Text
              className="font-normal not-italic text-left text-white_A700 tracking-[0.34px] w-[auto]"
              variant="body23"
            >
              History
            </Text>
            <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[17px] w-[100%]">
              <Button
                className="flex items-center justify-center outline outline-[0.5px] outline-gray_123 p-[16px] rounded-[14px] text-center"
                leftIcon={
                  <Img
                    src="images/img_refresh_white_a700.svg"
                    className="mr-[10px] text-center"
                    alt="refresh"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                  All
                </div>
              </Button>
              <Button
                className="flex items-center justify-center ml-[24px] outline outline-[0.5px] outline-gray_123 pl-[16px] pr-[17px] py-[16px] rounded-[14px] sm:ml-[0] text-center"
                leftIcon={
                  <Img
                    src="images/img_note2.svg"
                    className="mr-[10px] text-center"
                    alt="note-2"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                  Collection
                </div>
              </Button>
              <Button
                className="flex items-center justify-center ml-[24px] outline outline-[0.5px] outline-gray_123 pl-[16px] pr-[17px] py-[16px] rounded-[14px] sm:ml-[0] text-center"
                leftIcon={
                  <Img
                    src="images/img_clock_white_a700_24x24.svg"
                    className="mr-[10px] text-center"
                    alt="clock"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                  Price Range
                </div>
              </Button>
              <Button
                className="flex items-center justify-center ml-[497px] outline outline-[0.5px] outline-gray_123 pl-[16px] pr-[17px] py-[16px] rounded-[14px] sm:ml-[0] text-center"
                leftIcon={
                  <Img
                    src="images/img_menu_1.svg"
                    className="mr-[10px] text-center"
                    alt="menu"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-left text-white_A700 tracking-[0.16px]">
                  Filter & Sort
                </div>
              </Button>
            </div>
            <div className="overflow-auto bg-white_A700 mt-[30px] outline outline-[0.5px] outline-gray_123 rounded-[15px] shadow-bs70 w-[100%]">
              <ReactTable
                columns={column2}
                data={tableData2.current}
                rowClass={""}
                headerClass="border-b-[1px] border-gray_123"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfileHistoryPage;
