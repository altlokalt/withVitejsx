import { apis } from "service";

const COMMON_URL = `https://nodedemo.dhiwise.co/device/`;

const API_URLS = {
  POST_LOGIN: `${COMMON_URL}auth/login`,
  PUT_UPDATE_PROFILE: `${COMMON_URL}api/v1/user/update-profile`,
  POST_REGISTER: `${COMMON_URL}auth/register`,
};

export const postLogin = (payload) =>
  apis.post(API_URLS.POST_LOGIN, {
    ...payload,
    headers: { "Content-Type": "application/json", ...payload?.headers },
  });

export const putUpdateProfile = (payload) =>
  apis.put(API_URLS.PUT_UPDATE_PROFILE, {
    ...payload,
    headers: { "Content-Type": "application/json", ...payload?.headers },
  });

export const postRegister = (payload) =>
  apis.post(API_URLS.POST_REGISTER, payload);
