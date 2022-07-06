import React, { useState } from "react";
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
const Step2 = ({ prev, closeModal }) => {
  return (
    <>
      {" "}
      <Form className="form">
        <FormLabel htmlFor="Author" className="form__FormLabel">
          Author
        </FormLabel>
        <Input
          placeholder="Author ..."
          type="text"
          name="Author"
          // value={jobtitle}
          // onChange={handleChange}
        />
      </Form>
      <Form className="form">
        <FormLabel htmlFor="title" className="form__FormLabel">
          Title
        </FormLabel>
        <Input
          placeholder="Title ..."
          type="text"
          name="title"
          // value={jobtitle}
          // onChange={handleChange}
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
          onClick={closeModal}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default Step2;
