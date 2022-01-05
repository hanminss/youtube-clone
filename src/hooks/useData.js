import useSWR from "swr";
import { API_END_POINT, API_KEY } from "../constants";
import { fetcher } from "../utils/fatcher";
export const useData = (searchWord) => {
  return useSWR(
    `${API_END_POINT}/search/?part=snippet&maxResults=25&q=${searchWord}&key=${API_KEY}`,
    fetcher
  );
};
