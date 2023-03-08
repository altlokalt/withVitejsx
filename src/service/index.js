import Axios from "axios";

const defaultAxios = Axios.create({
  headers: {
    Klubb: "klubb",
    Forum: "lokaleforum",
    Blikjent: "blikjent",
    NaboBy: "nabobyen",
    Sport: "sport",
    Salg: "salg",
    Kampanjer: "kampanjer",
    KontoDash: JSON.parse(localStorage.getItem("kontodash")),
    Instillinger: JSON.parse(localStorage.getItem("Iistillinger")),
    DinBy: "dinby",
    ArrangementerDash: JSON.parse(localStorage.getItem("arrangementerdash")),
    VarslingDash: JSON.parse(localStorage.getItem("varslingdash")),
    RekruteringDash: JSON.parse(localStorage.getItem("rekruteringdash")),
    Omoss: JSON.parse(localStorage.getItem("omossdash")),
    FelleskapDash: JSON.parse(localStorage.getItem("felleskapdash")),
    TjenesteområderDash: JSON.parse(
      localStorage.getItem("tjenesteområderdash")
    ),
    Portalen: JSON.parse(localStorage.getItem("portalendash")),
    KomunalOversiktDash: JSON.parse(
      localStorage.getItem("komunaloversiktdash")
    ),
    LandingDash: JSON.parse(localStorage.getItem("landingdash")),
    FinnAltDash: JSON.parse(localStorage.getItem("finnaltdash")),
    AnnonserDash: JSON.parse(localStorage.getItem("annonserdash")),
    CustomDash: JSON.parse(localStorage.getItem("customdash")),
    AuthenticnDash: JSON.parse(localStorage.getItem("customizedheaders")),
    SellingDash: JSON.parse(localStorage.getItem("selling dash")),
    CommonDash: "just common dash",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export function apiClient(method, url, options = {}) {
  const { data = {}, headers = {}, params = {}, ...rest } = options;
  return defaultAxios({
    url,
    data,
    method,
    params,
    headers,
    ...rest,
  });
}

export const apis = {
  get: (url, args) => apiClient("get", url, args),
  post: (url, args) => apiClient("post", url, args),
  put: (url, args) => apiClient("put", url, args),
  patch: (url, args) => apiClient("patch", url, args),
  delete: (url, args) => apiClient("delete", url, args),
};
