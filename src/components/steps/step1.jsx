import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import NewsService from "../../services/newsService";
import Button from "../UI/btn";
import Input from "../UI/input";

const Form = styled.div`
  width: 100%;
`;

const FormLabel = styled.div`
  ${tw`text-sm lg:text-lg `}
`;
const Step1 = ({ handlefileupload, upload }) => {
  // const [selectedFile, setSelectedFile] = useState("");
  // const [uploading, setUploading] = useState(false);

  // const [Img, setImg] = useState("");

  // const handlefileupload = (e) => {
  //   setSelectedFile(URL.createObjectURL(e.target.files[0]));
  // };

  // const upload = async () => {
  //   const formData = new FormData();
  //   formData.append("newsId", newsId);
  //   formData.append("image", selectedFile);
  //   console.log(formData.get("image"), "formDatalinkkkkkk");
  //   const res = await NewsService.uploadImage({
  //     newsId: newsId,
  //     image: selectedFile,
  //   });
  //   if (res.status === 201) {
  //     setImg(res.data.image);
  //     console.log(Img, "backend-img");
  //     toast.dark("Image uploaded");
  //     next();
  //   } else {
  //     toast.dark("opps an error occurred");
  //   }
  // };

  return (
    <>
      <Form className="form">
        <FormLabel htmlFor="selectedFile" className="form__FormLabel">
          Photo
        </FormLabel>
        <Input
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
          onChange={handlefileupload}
        />
      </Form>
      <Button
        buttonStyle="btn--primary--outline"
        buttonSize="btn--small"
        onClick={() => upload()}
      >
        Next
      </Button>
    </>
  );
};

export default Step1;
