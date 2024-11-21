import { useState, useCallback, useEffect } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

// 목록형 데이터에 대해 무한 스크롤을 구현하개 해주는 Hook
const useInfScroll = (getDataApi) => {
  const [listData, setListData] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // const fetchListData = useCallback(async () => {
  //   try {
  //     const res = await getDataApi(page);
  //     setIsLoading(true);
  //     setListData((prevPostList) => [...prevPostList, ...res]);
  //     setIsError(false);
  //   } catch (e) {
  //     setIsError(true);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, [page, getDataApi]);

  // const handleObserve = useCallback(() => {
  //   if (!isLoading) {
  //     setPage((prevPage) => prevPage + 1);
  //   }
  // }, [isLoading]);

  // useEffect(() => {
  //   fetchListData();
  // }, [fetchListData]);

  const handleObserve = async () => {
    if (!isLoading) {
      setIsLoading(true);
      try {
        const res = await getDataApi(page);
        setListData((prevPostList) => [...prevPostList, ...res]);
        setPage((prev) => prev + 1);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const target = useIntersectionObserver(handleObserve);

  return [listData, isLoading, isError, target];
};

export default useInfScroll;
