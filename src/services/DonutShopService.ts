import axios from "axios";
import DonutListResponse from "../models/DonutListResponse";
import DonutNameResponse from "../models/DonutNameResponse";

export const getDonutNameList = (): Promise<DonutListResponse> => {
  return axios
    .get("https://grandcircusco.github.io/demo-apis/donuts.json", {
      params: {},
    })
    .then((response) => {
      return response.data;
    });
};

export const getDonutByName = (name: string): Promise<DonutNameResponse> => {
  return axios
    .get(`https://api.giphy.com/v1/gifs/${encodeURIComponent(name)}`, {
      params: {},
    })
    .then((response) => response.data);
};
