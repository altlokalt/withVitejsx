import React from "react";

import {
  Img,
  List,
  Button,
  SelectBox,
  Text,
  PagerIndicator,
  Input,
  CheckBox,
  Line,
} from "components";
import { useNavigate } from "react-router-dom";
import { handleSectionNavigation } from "utils";
import { putUpdateProfile, postLogin, postRegister } from "service/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const [apiData, setapiData] = React.useState();
  const [apiData1, setapiData1] = React.useState();
  const [apiData2, setapiData2] = React.useState();
  const [apiData3, setapiData3] = React.useState();
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });
  React.useEffect(() => {
    callApi2();
    callApi3();
  }, []);

  function callApi() {
    const req = {
      headers: {
        Authorization: JSON.parse(localStorage.getItem("portalendash")),
      },
      data: { name: JSON.parse(localStorage.getItem("omossdash")) },
    };

    putUpdateProfile(req)
      .then((res) => {
        setapiData(res?.data);

        navigate("/nftdark");
      })
      .catch((err) => {
        console.error(err);
        toast.error("api error");
      });
  }
  function callApi1() {
    const req = {};

    postLogin(req)
      .then((res) => {
        setapiData1(res?.data);

        localStorage.setItem(
          "tokenissavelocalstorageapi",
          JSON.stringify(res?.data?.data?.token)
        );

        localStorage.setItem(
          "clientidlocalapistorage",
          JSON.stringify(res?.data?.data?.id)
        );

        localStorage.setItem(
          "rolelocalstorageapi",
          JSON.stringify(res?.data?.data?.role)
        );

        navigate("/discover");
      })
      .catch((err) => {
        console.error(err);
        navigate("/homedark");
      });
  }
  function callApi2() {
    const req = { headers: {} };

    postRegister(req)
      .then((res) => {
        setapiData2(res?.data);

        localStorage.setItem(
          "savedatatolocalstorage",
          JSON.stringify(res?.data?.data?.email)
        );

        localStorage.setItem(
          "savethanameinputtolocal",
          JSON.stringify(res?.data?.data?.name)
        );

        navigate("/auksjon");
      })
      .catch((err) => {
        console.error(err);
        navigate("/draftselectedweb");
      });
  }
  function callApi3() {
    const req = {
      headers: {
        "Content-Type": JSON.parse(localStorage.getItem("selling dash")),
      },
    };

    postRegister(req)
      .then((res) => {
        setapiData3(res?.data);

        navigate("/finnauksjon");
      })
      .catch((err) => {
        console.error(err);
        navigate("/forgotpassword");
      });
  }
  function handleNavigate() {
    window.location.href = "https://www.calm.com/?goals=improve_focus";
  }

  return (
    <>
      <div className="bg-white_A700 flex font-urbanist items-start justify-end mx-[auto] pr-[157px] sm:pr-[20px] md:pr-[40px] w-[100%]">
        <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between max-w-[1463px] mx-[auto] w-[100%]">
          <div className="bg-gray_50 flex md:flex-1 items-start justify-start p-[23px] sm:px-[20px] md:w-[100%] w-[49%]">
            <div className="flex flex-col md:gap-[40px] gap-[85px] items-center justify-start mb-[77px] md:ml-[0] ml-[37px] md:w-[100%] w-[83%]">
              <div className="flex flex-col gap-[100px] md:gap-[40px] justify-start w-[100%]">
                <div
                  className="common-pointer flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[23%]"
                  onClick={handleNavigate}
                >
                  <Img
                    src="images/img_logo.svg"
                    className="common-pointer h-[24px] w-[auto]"
                    onClick={() => {
                      handleSectionNavigation("block1");
                    }}
                    alt="Logo"
                  />
                  <Img
                    src="images/img_ticket.svg"
                    className="h-[14px] w-[auto]"
                    alt="ticket"
                  />
                </div>
                <div className="h-[515px] md:ml-[0] ml-[40px] relative sm:w-[100%] w-[514px]">
                  <div
                    className="common-pointer absolute bg-bluegray_101 h-[515px] inset-y-[0] left-[0] my-[auto] rounded-bl-[0] rounded-br-[80px] rounded-tl-[0] rounded-tr-[0] w-[71%]"
                    onClick={() => {
                      callApi();
                    }}
                  ></div>
                  <div className="absolute bg-white_A700 bottom-[11%] flex items-center justify-start p-[16px] right-[0] rounded-[16px] w-[64%]">
                    <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                      <List
                        className="flex-col gap-[12px] grid items-center w-[100%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row gap-[12px] items-center justify-between my-[0] w-[100%]">
                          <Button className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex h-[40px] items-center justify-center p-[12px] rounded-[8px] w-[40px]">
                            <Img
                              src="images/img_volume_bluegray_900.svg"
                              className="h-[16px]"
                              alt="volume"
                            />
                          </Button>
                          <SelectBox
                            className="border-[1px] border-indigo_50 border-solid font-semibold pl-[14px] pr-[10px] py-[10px] rounded-[8px] text-[14px] text-bluegray_900 text-left w-[auto]"
                            placeholderClassName="text-bluegray_900"
                            name="Filter"
                            placeholder="Buy a Building"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_bluegray_901.svg"
                                className="h-[16px] w-[16px]"
                                alt="arrow_down"
                              />
                            }
                          ></SelectBox>
                        </div>
                        <div className="flex flex-1 flex-row gap-[12px] items-center justify-between my-[0] w-[100%]">
                          <Button className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex h-[40px] items-center justify-center p-[12px] rounded-[8px] w-[40px]">
                            <Img
                              src="images/img_calendar.svg"
                              className="h-[16px]"
                              alt="calendar"
                            />
                          </Button>
                          <SelectBox
                            className="border-[1px] border-indigo_50 border-solid font-semibold pl-[14px] pr-[10px] py-[10px] rounded-[8px] text-[14px] text-bluegray_400 text-left w-[auto]"
                            placeholderClassName="text-bluegray_400"
                            name="Filter One"
                            placeholder="Date"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_bluegray_901.svg"
                                className="h-[16px] w-[16px]"
                                alt="arrow_down"
                              />
                            }
                          ></SelectBox>
                        </div>
                        <div className="flex flex-1 flex-row gap-[12px] items-center justify-between my-[0] w-[100%]">
                          <Button className="bg-white_A700 border-[1px] border-indigo_50 border-solid flex h-[40px] items-center justify-center p-[12px] rounded-[8px] w-[40px]">
                            <Img
                              src="images/img_eye.svg"
                              className="h-[16px]"
                              alt="eye"
                            />
                          </Button>
                          <SelectBox
                            className="border-[1px] border-indigo_50 border-solid font-semibold pl-[14px] pr-[10px] py-[10px] rounded-[8px] text-[14px] text-bluegray_400 text-left w-[auto]"
                            placeholderClassName="text-bluegray_400"
                            name="Filter Two"
                            placeholder="Location"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_bluegray_901.svg"
                                className="h-[16px] w-[16px]"
                                alt="arrow_down"
                              />
                            }
                          ></SelectBox>
                        </div>
                      </List>
                      <Button className="bg-indigo_A200 cursor-pointer font-bold px-[16px] py-[9px] rounded-[8px] text-[16px] text-center text-white_A700 w-[295px]">
                        Search
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:w-[100%] w-[88%]">
                <Text
                  className="font-bold text-bluegray_900 text-left tracking-[0.48px] w-[auto]"
                  variant="body13"
                >
                  {apiData3?.message}
                </Text>
                <Text
                  className="font-bold leading-[30.00px] mt-[19px] text-bluegray_400 text-left tracking-[0.20px] sm:w-[100%] w-[65%]"
                  variant="body43"
                >
                  Schedule visit in just a few clicks visits in just a few
                  clicks
                </Text>
                <PagerIndicator
                  className="common-pointer flex h-[8px] mt-[32px] w-[80px]"
                  onClick={() => navigate("/homeone")}
                  count={3}
                  activeCss="inline-block cursor-pointer h-[8px] bg-indigo_A200 w-[48px] rounded-[4px]"
                  activeIndex={1}
                  inactiveCss="inline-block cursor-pointer rounded-[50%] h-[8px] bg-blue_100 w-[8px]"
                  selectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
                  unselectedWrapperCss="inline-block md:ml-[0] mx-[4.00px] sm:ml-[0]"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[189px] md:gap-[40px] justify-start md:mt-[0] mt-[28px] md:w-[100%] w-[42%]">
            <Text
              className="font-semibold md:ml-[0] ml-[516px] text-bluegray_900 text-left tracking-[0.12px] w-[auto]"
              variant="body67"
            >
              Login
            </Text>
            <div className="flex items-center justify-start w-[100%]">
              <div className="flex flex-col items-start justify-start m-[] mb-[] ml-[] mr-[] mt-[] p-[88px] w-[100%]">
                <Text
                  className="font-bold text-bluegray_900 text-left tracking-[0.36px] w-[auto]"
                  variant="body22"
                >
                  {apiData?.message}
                </Text>
                <Text
                  className="font-semibold mt-[20px] text-bluegray_400 text-left w-[auto]"
                  variant="body59"
                >
                  Sign in your account
                </Text>
                <div className="flex flex-col gap-[13px] items-start justify-start mt-[49px] md:w-[100%] w-[74%]">
                  <Text
                    className="font-medium text-bluegray_900 text-left w-[auto]"
                    variant="body59"
                  >
                    {apiData1?.data?.username}
                  </Text>
                  <Input
                    value={apiData1?.data?.profile}
                    className="font-semibold sm:px-[20px] px-[24px] py-[13px] text-[16px] placeholder:text-bluegray_900 text-bluegray_900 text-center w-[100%]"
                    wrapClassName="border-[1px] border-bluegray_900 border-solid rounded-[8px] sm:w-[100%] w-[446px]"
                    name="Button"
                    placeholder="Albertflorest@gmail.com |"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[13px] md:h-[103px] h-[114px] items-start justify-start mt-[25px] relative w-[100%]">
                  <div className="absolute bg-indigo_A200 bottom-[3%] flex flex-row items-start justify-center pb-[3px] pl-[4px] pr-[24px] pt-[1px] sm:px-[20px] right-[0] rounded-[8px] sm:w-[100%] w-[502px]">
                    <Text
                      className="font-bold text-center text-white_A700 w-[auto]"
                      variant="body47"
                    >
                      Login
                    </Text>
                  </div>
                  <div className="absolute flex flex-col gap-[13px] items-start justify-start left-[0] top-[0] w-[74%]">
                    <Text
                      className="font-medium text-bluegray_400 text-left w-[auto]"
                      variant="body59"
                    >
                      Password
                    </Text>
                    <Input
                      value={apiData1?.status}
                      className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_900 text-bluegray_900 text-center w-[100%]"
                      wrapClassName="border-[1px] border-bluegray_400 border-solid flex px-[24px] py-[13px] rounded-[8px] sm:px-[20px] w-[100%]"
                      type="password"
                      name="password"
                      placeholder="*********"
                      suffix={
                        <Img
                          src="images/img_location.svg"
                          className="ml-[35px] my-[auto]"
                          alt="location"
                        />
                      }
                    ></Input>
                  </div>
                  <div
                    className="common-pointer absolute bottom-[0] flex flex-row gap-[214px] sm:gap-[34px] items-start justify-between left-[0] sm:relative w-[auto]"
                    onClick={() => navigate("/darkchats")}
                  >
                    <CheckBox
                      className="font-normal not-italic text-[14px] text-bluegray_900 text-left tracking-[0.14px]"
                      inputClassName="bg-indigo_A200 h-[16px] mr-[5px] rounded-[4px] w-[16px]"
                      label="Remember Me"
                      name="RememberMe"
                    ></CheckBox>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left tracking-[0.14px] w-[auto]"
                      variant="body59"
                    >
                      {apiData1?.message}
                    </Text>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-center mt-[131px] sm:w-[100%] w-[auto]">
                  <Line className="bg-indigo_100 h-[1px] w-[39%]" />
                  <Text
                    className="common-pointer font-normal not-italic text-bluegray_400 text-left tracking-[0.14px] w-[auto]"
                    variant="body59"
                    onClick={() => {
                      callApi1();
                    }}
                  >
                    Instan Login
                  </Text>
                  <Line className="bg-indigo_100 h-[1px] w-[39%]" />
                </div>
                <div className="flex sm:flex-col flex-row gap-[16px] items-center justify-start mt-[40px] md:w-[100%] w-[74%]">
                  <Button
                    className="bg-white_A700 border-[1px] border-gray_102 border-solid flex items-center justify-center px-[24px] py-[13px] rounded-[8px] sm:px-[20px] text-center w-[215px]"
                    onClick={() => googleSignIn()}
                    leftIcon={
                      <Img
                        src="images/img_google.svg"
                        className="mr-[8px] text-center"
                        alt="google"
                      />
                    }
                  >
                    <div className="common-pointer bg-transparent cursor-pointer font-semibold text-[14px] text-bluegray_400 text-center">
                      Continue with Google
                    </div>
                  </Button>
                  <div className="h-[50px] relative sm:w-[100%] w-[49%]">
                    <Text
                      className="absolute font-inter font-normal not-italic right-[0] text-bluegray_400 text-left top-[0] w-[auto]"
                      variant="body59"
                    >
                      <span className="text-bluegray_400 text-[14px] tracking-[0.14px] font-urbanist">
                        Don’t have any acount?
                      </span>
                      <span className="text-indigo_A200 text-[14px] font-urbanist">
                        {" "}
                      </span>
                      <span className="text-indigo_A200 text-[14px] font-urbanist font-semibold">
                        Register
                      </span>
                    </Text>
                    <Button
                      className="absolute bg-white_A700 border-[1px] border-gray_102 border-solid flex h-[max-content] inset-[0] items-center justify-center m-[auto] px-[24px] py-[13px] rounded-[8px] sm:px-[20px] text-center w-[215px]"
                      id="block1"
                      onClick={() => googleSignIn()}
                      leftIcon={
                        <Img
                          src="images/img_facebook_indigo_700.svg"
                          className="mr-[8px] text-center right-[4%] absolute"
                          alt="facebook"
                        />
                      }
                    >
                      <div className="common-pointer bg-transparent cursor-pointer font-semibold font-urbanist text-[14px] text-bluegray_400 text-center">
                        Continue with Facebook
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginPage;
