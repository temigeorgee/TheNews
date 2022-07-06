import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import NewsService from "../../services/newsService";
import { fileToBase64, getBase64 } from "../../utils";
import Button from "../UI/btn";
import Input from "../UI/input";
import { toast } from "react-toastify";

const Form = styled.div`
  width: 100%;
`;

const FormLabel = styled.div`
  ${tw`text-sm lg:text-lg `}
`;
const Step1 = ({ next, newsId }) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [uploading, setUploading] = useState(false);

  const [Img, setImg] = useState("");

  const handlefileupload = async (e) => {
    setSelectedFile(e.target.files[0]);
    const imgData = await fileToBase64(selectedFile);
    const formData = new FormData();
    formData.append("image", imgData);
    setUploading(true);
    fetch(
      `https://api.imgbb.com/1/upload?key=22b18265d6edc20009b2d322c39cfc31`,
      {
        method: "post",
        body: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const url = data?.data?.display_url;
        setImg(url);
        setUploading(false);
      })
      .catch((err) => {
        setUploading(false);
      });
  };

  // const fileUpload = async (imageUri) => {

  //   data.append("image", imageUri);
  //   setUploading(true);
  //   fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
  //     method: "post",
  //     body: data,
  //     headers: { "Content-Type": "multipart/form-data" },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const url = data?.data?.display_url;
  //       onChangeImage(url);
  //       setUploading(false);
  //     })
  //     .catch((err) => {
  //       setUploading(false);
  //     });

  // };

  const upload = async () => {
    const formData = new FormData();
    formData.append("newsId", newsId);
    formData.append("image", selectedFile);
    console.log(formData.get("image"), "formDatalinkkkkkk");
    const res = await NewsService.uploadImage({
      newsId: newsId,
      image: selectedFile,
    });
    if (res.status === 201) {
      setImg(res.data.image);
      toast.dark("Image uploaded");
      next();
      // showToast("success", "Image uploaded");
      // closeModal();
    } else {
      toast.dark("opps an error occurred");
      // showToast("error", "failed to upload image");
    }
  };

  return (
    <>
      {" "}
      <Form className="form">
        <FormLabel htmlFor="selectedFile" className="form__FormLabel">
          Photo
        </FormLabel>
        <Input
          type="file"
          accept="image/png, image/jpeg"
          // name="selectedFile"
          className="hidden"
          // value={selectedFile}
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
