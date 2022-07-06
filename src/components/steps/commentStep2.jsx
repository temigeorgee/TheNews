import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../UI/btn";
import Input from "../UI/input";

const Form = styled.div`
  width: 100%;
`;

const FormLabel = styled.div`
  ${tw`text-sm lg:text-lg `}
`;
const CommentStep2 = ({ prev, closeModal, newsId, Img }) => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const loadingState = useSelector((state) => state.loading.models.comments);

  const dispatch = useDispatch();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setInputs((prevState) => {
  //     return { ...prevState, [name]: value };
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bodyData = {
      avatar: Img,
      name,
      comment,
    };
    if (!bodyData.name || !bodyData.comment || !bodyData.avatar) {
      return setError("Please fill all fields");
    } else {
      await dispatch.news.createCommentAsync({
        newsId: newsId,
        body: bodyData,
      });
      setName("");
      setComment("");
      closeModal();
      return;
    }

    // const data = await careerRegister(formData);
    // if (data?.statusCode === 400) {
    //   setIsLoading(false);
    //   //console.log(error);
    //   setErrorMessage(error.response?.data.error);
    //   setError(true);
    // } else {
    //   //console.log(data);
    //   setIsLoading(false);
    //   setSuccess(true);
    //   setInputs({
    //     fullname: "",
    //     phonenumber: "",
    //     email: "",
    //     jobtitle: "",
    //     linkedin: "",
    //   });
    //   setSelectedFile("");
    // }
    // try {
    //   // clearForm.current.reset();
    // } catch (error) {
    //   setIsLoading(false);
    //   console.log(error);
    //   setErrorMessage(error.response?.data.error);
    //   setError(true);
    // }
  };

  useEffect(() => {
    setTimeout(() => setError(""), 1500);
  }, [error]);
  return (
    <>
      {" "}
      <Form className="form">
        {error ? <p>{error}</p> : null}
        <FormLabel htmlFor="" className="form__FormLabel">
          Name:
        </FormLabel>
        <Input
          placeholder="Input your name ..."
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form>
      <Form className="form">
        <FormLabel htmlFor="comment" className="form__FormLabel">
          Comment
        </FormLabel>
        <Input
          placeholder="Comment ..."
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Form>
      <div className="flex gap-3">
        <Button
          buttonStyle="btn--primary--outline"
          buttonSize="btn--small"
          onClick={() => prev()}
        >
          Previous
        </Button>
        <Button
          buttonStyle="btn--primary--outline"
          buttonSize="btn--small"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default CommentStep2;
