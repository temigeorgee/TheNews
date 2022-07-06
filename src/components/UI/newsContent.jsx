import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { truncate } from "../../utils";
import { format } from "timeago.js";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../styledElements";

const NewsContainer = styled(Container)`
  //   -webkit-column-count: 4;
  //   --moz--column-count: 4;
  //   column-count: 4;
  //   --webkit-column-width: 100px;
  //   --moz--column-width: 100px;
  //   column-width: 100px;
  //   column-rule: 2px dashed var(--fourth-color);
  //   //   padding: 0 12px;
  //   column-gap: 20px;
  display: grid;
  @media (min-width: 720px) {
    grid-template-row: auto 1fr auto;
    grid-template-columns: repeat(12, 1fr);
  }
  ${Container}
`;

const NewsDetailsContainerInital = styled.div`
  @media (min-width: 720px) {
    grid-column: 1 / span 3;
  }
`;
const NewsDetailsContainerMiddle = styled.div`
  @media (min-width: 720px) {
    grid-column: 4 / span 6;
    padding: 0 2rem;
  }
`;
const NewsDetailsContainerMiddleImg = styled.img`
  width: 100%;
  height: 300px;
`;
const NewsDetailsContainerLast = styled.div`
  @media (min-width: 720px) {
    grid-column: 10 / span 12;
  }
`;

const NewsDetails = styled.div`
  ${tw`flex flex-col items-start justify-start pb-3`}
  --webkit-transition: all 350ms ease;
  //   transition: all 350ms ease;
  //   cursor: pointer;
  gap: 10px;
  //   border-bottom: 2px dashed var(--fourth-color);
`;
const NewsDetailsTitle = styled.h2`
  ${tw`text-2xl font-bold`}
  color: var(--primary-color);
`;
const NewsDetailsBody = styled.h2`
  ${tw`text-sm`}
  color: var( --text-color);
`;
const NewsDetailsAuthor = styled.h2`
  ${tw`text-sm font-bold`}
  color: var(--dark-border);
`;
const NewsDetailsCaptionContainer = styled.div`
  ${tw`flex items-center justify-between w-full`}
`;
const NewsDetailsTimeStamp = styled.p`
  ${tw`text-xs`}
`;
const NewsDetailsText = styled.p`
  ${tw`text-sm`}
`;
const ViewMoreContainer = styled(Link)`
  ${tw`flex items-center space-x-2`}
  line-height: 1;
  // display: inline;
  background-image: linear-gradient(
    transparent 30%,
    #fabda0 50%,
    #fabda0 95%,
    transparent 95%,
    transparent 100%
  );
  background-repeat: no-repeat;
  background-size: 0 100%;
  &:hover {
    // background-color: #fabda0;
    // transition: background-color 0.5s ease-in-out;
    transition: 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    background-size: 100% 100%;
    cursor: pointer;
  }
`;
const Divider = styled.hr`
  margin 0 auto 2rem;
  overflow: visible;
  border: none;
  border-top: 3px dashed var( --fourth-color);
  text-align: center;
//   width: 7%;
  text-align: center;
`;

const NewsContent = ({ news }) => {
  return (
    <>
      <NewsContainer>
        <NewsDetailsContainerInital>
          <NewsDetails>
            {/* <img src={news[0]?.uri ? news[0].uri : "no image"} /> */}
            <NewsDetailsTitle>{news[0]?.title}</NewsDetailsTitle>
            <NewsDetailsBody>{truncate(news[0]?.body, 100)}</NewsDetailsBody>
            <NewsDetailsAuthor> Author: {news[0]?.author}</NewsDetailsAuthor>
            <NewsDetailsCaptionContainer>
              <NewsDetailsTimeStamp>
                {format(news[0]?.createdAt)}
              </NewsDetailsTimeStamp>
              <ViewMoreContainer to={`/news/${news[0]?.id}`}>
                <NewsDetailsText>View more</NewsDetailsText>
                <FaArrowAltCircleRight />
              </ViewMoreContainer>
            </NewsDetailsCaptionContainer>
          </NewsDetails>
          <Divider />
          <NewsDetails>
            <NewsDetailsTitle>{news[1]?.title}</NewsDetailsTitle>
            <NewsDetailsBody>{truncate(news[1]?.body, 100)}</NewsDetailsBody>
            <NewsDetailsAuthor> Author: {news[1]?.author}</NewsDetailsAuthor>
            <NewsDetailsCaptionContainer>
              <NewsDetailsTimeStamp>
                {format(news[1]?.createdAt)}
              </NewsDetailsTimeStamp>
              <ViewMoreContainer to={`/news/${news[1]?.id}`}>
                <NewsDetailsText>View more</NewsDetailsText>
                <FaArrowAltCircleRight />
              </ViewMoreContainer>
            </NewsDetailsCaptionContainer>
          </NewsDetails>
        </NewsDetailsContainerInital>
        <NewsDetailsContainerMiddle>
          <NewsDetails>
            <NewsDetailsContainerMiddleImg src="https://cdn.pixabay.com/photo/2016/11/29/05/35/new-york-1867570_1280.jpg" />
            <NewsDetailsTitle>{news[2]?.title}</NewsDetailsTitle>
            <NewsDetailsBody>{truncate(news[2]?.body, 300)}</NewsDetailsBody>
            <NewsDetailsAuthor> Author: {news[2]?.author}</NewsDetailsAuthor>
            <NewsDetailsCaptionContainer>
              <NewsDetailsTimeStamp>
                {format(news[2]?.createdAt)}
              </NewsDetailsTimeStamp>
              <ViewMoreContainer to={`/news/${news[2]?.id}`}>
                <NewsDetailsText>View more</NewsDetailsText>
                <FaArrowAltCircleRight />
              </ViewMoreContainer>
            </NewsDetailsCaptionContainer>
          </NewsDetails>
        </NewsDetailsContainerMiddle>
        <NewsDetailsContainerLast>
          <NewsDetails>
            <NewsDetailsTitle>{news[3]?.title}</NewsDetailsTitle>
            <NewsDetailsBody>{truncate(news[3]?.body, 100)}</NewsDetailsBody>
            <NewsDetailsAuthor> Author: {news[3]?.author}</NewsDetailsAuthor>
            <NewsDetailsCaptionContainer>
              <NewsDetailsTimeStamp>
                {format(news[3]?.createdAt)}
              </NewsDetailsTimeStamp>
              <ViewMoreContainer to={`/news/${news[3]?.id}`}>
                <NewsDetailsText>View more</NewsDetailsText>
                <FaArrowAltCircleRight />
              </ViewMoreContainer>
            </NewsDetailsCaptionContainer>
          </NewsDetails>
          <Divider />
          <NewsDetails>
            <NewsDetailsTitle>{news[4]?.title}</NewsDetailsTitle>
            <NewsDetailsBody>{truncate(news[4]?.body, 100)}</NewsDetailsBody>
            <NewsDetailsAuthor> Author: {news[4]?.author}</NewsDetailsAuthor>
            <NewsDetailsCaptionContainer>
              <NewsDetailsTimeStamp>
                {format(news[4]?.createdAt)}
              </NewsDetailsTimeStamp>
              <ViewMoreContainer to={`/news/${news[4]?.id}`}>
                <NewsDetailsText>View more</NewsDetailsText>
                <FaArrowAltCircleRight />
              </ViewMoreContainer>
            </NewsDetailsCaptionContainer>
          </NewsDetails>
        </NewsDetailsContainerLast>
      </NewsContainer>
    </>
  );
};

export default NewsContent;
