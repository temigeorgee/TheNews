import React from "react";
import { format } from "timeago.js";
import styled from "styled-components";
import tw from "twin.macro";

const CommentWrapper = styled.div`
  ${tw`flex flex-col gap-4`}
`;
const Title = styled.h3`
  ${tw`lg:text-xl font-bold mt-4 w-28`}
  color: var( --white);
  background-color: var(--primary-color);
`;
const NoCommmentContainer = styled.div`
  ${tw`mx-auto py-6`}
`;
const NoCommmentText = styled.div`
  ${tw`text-lg`}
  color: var(--text-color);
`;
const CommentTimeStamp = styled.p`
  ${tw`text-xs`}
`;
const CommentAvatar = styled.img`
  ${tw`w-10 h-10 rounded-full bg-cover bg-center`}
`;
const CommentContainer = styled.img`
  ${tw`flex items-center justify-between py-3`}
`;

const CommentSection = ({ comment }) => {
  return (
    <CommentWrapper>
      <Title>Comments</Title>
      {!comment.length ? (
        <NoCommmentContainer>
          <NoCommmentText>☹️ No comments</NoCommmentText>
        </NoCommmentContainer>
      ) : (
        comment.map((el) => {
          return (
            <CommentContainer>
              <div className="flex space-x-3">
                <CommentAvatar
                  src={el?.avatar}
                  alt=""
                  className="w-10 h-10 rounded-full bg-cover bg-center"
                />
                <div>
                  <p>{el?.name}</p>
                  <p>{el?.comment}</p>
                </div>
              </div>
              <CommentTimeStamp>{format(el?.createdAt)}</CommentTimeStamp>
            </CommentContainer>
          );
        })
      )}
    </CommentWrapper>
  );
};

export default CommentSection;
