import React, { useEffect, useState } from "react";
import { FaEdit, FaPen, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { format } from "timeago.js";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../components/UI/btn";
import CommentSection from "../components/UI/commentSection";
import Input from "../components/UI/input";
import Loader from "../components/UI/loader";
import { Modal } from "../components/UI/modal";
import NewsService from "../services/newsService";
import { Container } from "../components/styledElements";

const SingleNewsPage = styled(Container)`
  ${tw`flex flex-col gap-3 h-[100vh]`}
  ${Container}
`;
const SingleNewsImage = styled.img`
  ${tw`w-full h-56 object-cover object-center mb-3`}
`;
const SingleNewsTitleContainer = styled.div`
  ${tw`flex items-center justify-between `}
`;
const Title = styled.h3`
  ${tw`text-xl font-bold text-center`}
  color: var(--primary-color);
  //   border-bottom: 1px solid var(--primary-color);
`;
const NewsDetailsBody = styled.p`
  ${tw`text-sm`}
  color: var( --text-color);
`;
const NewsDetailsAuthor = styled.h2`
  ${tw`text-sm font-bold`}
  color: var(--dark-border);
`;
const Divider = styled.hr`
  // margin 0 auto 2rem;
  overflow: visible;
  border: none;
  border-top: 3px solid var(--primary-color);
  text-align: center;
  width: 7%;
  text-align: center;
`;
const NewsDetailsTimeStamp = styled.p`
  ${tw`text-xs`}
  color:var(-- --fourth-color);
`;
const SinglePageAction = styled.div`
  ${tw`flex items-center space-x-3`}
`;
const NewsPage = ({ match }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const { comments } = useSelector((state) => state.comments);
  const comment = comments[match?.params?.id] || [];
  const loadingState = useSelector(
    (state) => state.loading.effects.news.getANewsAsync
  );
  const loadingDeleteState = useSelector(
    (state) => state.loading.effects.news.deleteNews
  );

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const deleteNews = () => {
    dispatch.news.deleteNewsAsync(match?.params?.id);
  };

  useEffect(() => {
    dispatch.news.getANewsAsync(match?.params?.id);
    dispatch.comments.getAllCommentAsync(match?.params?.id);
  }, []);
  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        comment
        newsId={news?.id}
      />
      {loadingState ? (
        <Loader />
      ) : (
        <>
          <SingleNewsPage>
            <SingleNewsImage
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://cdn.pixabay.com/photo/2018/01/20/14/26/skyscraper-3094696_1280.jpg";
                // "https://t4.ftcdn.net/jpg/04/00/24/31/360_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg";
              }}
              src={news?.url}
            />
            <SingleNewsTitleContainer>
              <Title>{news?.title}</Title>
              <SinglePageAction>
                <FaEdit className="cursor-pointer" onClick={openModal} />
                <FaTrash
                  className="cursor-pointer hover:fill-red-500"
                  onClick={deleteNews}
                />
              </SinglePageAction>
            </SingleNewsTitleContainer>
            <NewsDetailsBody>{news?.body}</NewsDetailsBody>
            <NewsDetailsAuthor> Author: {news?.author}</NewsDetailsAuthor>
            <NewsDetailsTimeStamp>
              {format(news[2]?.createdAt)}
            </NewsDetailsTimeStamp>
            <Divider />
            <CommentSection comment={comment} />

            <Button
              type="submit"
              buttonStyle="btn--primary--outline"
              buttonSize="btn--medium"
              onClick={openModal}
            >
              Add comment
            </Button>
          </SingleNewsPage>
        </>
      )}
    </>
  );
};

export default NewsPage;
