import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import Loader from "../components/UI/loader";
import NewsContent from "../components/UI/newsContent";
import Pagination from "../components/UI/pagination";

const Title = styled.h3`
  ${tw`lg:text-xl font-bold text-center mt-4`}
  color: var(--primary-color);
`;
const Divider = styled.hr`
  margin 0 auto 2rem;
  overflow: visible;
  border: none;
  border-top: 3px solid var(--primary-color);
  text-align: center;
  width: 7%;
  text-align: center;
`;

const HomePage = () => {
  const [pageNum, setPageNum] = useState(1);

  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const loadingState = useSelector(
    (state) => state.loading.effects.news.getAllNewsAsync
  );

  useEffect(() => {
    dispatch.news.getAllNewsAsync(pageNum);
  }, [pageNum]);

  return (
    <>
      <Title>Latest News</Title>
      <Divider />
      {loadingState ? (
        <Loader />
      ) : (
        <>
          <NewsContent news={news} />
          <Pagination
            page={pageNum}
            setPage={setPageNum}
            dataLength={news.length}
          />
        </>
      )}
    </>
  );
};

export default HomePage;
