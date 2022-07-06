import React, { useRef, useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import styled from "styled-components";
import tw from "twin.macro";
import { MdClose } from "react-icons/md";
import Input from "./input";
import { FaPlus, FaPlusCircle } from "react-icons/fa";
import Button from "./btn";
import { useDispatch, useSelector } from "react-redux";
import Step1 from "../steps/step1";
import Step2 from "../steps/step2";
import CommentStep2 from "../steps/commentStep2";
import { toast } from "react-toastify";
import NewsService from "../../services/newsService";

const Background = styled.div`
  width: 99.9%;
  height: 99.9%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const ModalWrapper = styled.div`
  // width: 500px;
  padding 0 2rem 2rem;
  // height: 400px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    width: 100%;
  }
`;

const ModalTitleContainer = styled.div`
  ${tw`flex items-center justify-start space-x-2 py-6`}
  color: var(--primary-color);
  padding-right: 5rem;
`;
const ModalTitle = styled.h3`
  ${tw`text-xl font-bold text-center`}
  color: #ffff;
  background-color: var(--primary-color);
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal, comment, newsId }) => {
  const dispatch = useDispatch();
  const loadingState = useSelector((state) => state.loading);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedFile, setSelectedFile] = useState("");
  const [uploading, setUploading] = useState(false);
  const [Img, setImg] = useState("");

  const modalRef = useRef();
  if (newsId === undefined) {
    newsId = Math.floor(Math.random() * 100);
  }
  const next = () => {
    setCurrentStep(currentStep + 1);
  };
  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  // Handlers

  const handlefileupload = (e) => {
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  };

  const upload = async () => {
    console.log(selectedFile, "selected");

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
      console.log(Img, "backend-img");
      toast.dark("Image uploaded");
      next();
    } else {
      toast.dark("opps an error occurred");
    }
  };

  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return <Step1 next={next} newsId={newsId} />;
      case 1:
        return <Step2 prev={prev} closeModal={closeModal} />;
      default:
        return <Step1 next={next} newsId={newsId} />;
    }
  };
  const renderCommentForm = () => {
    switch (currentStep) {
      case 0:
        return <Step1 handlefileupload={handlefileupload} upload={upload} />;
      case 1:
        return (
          <CommentStep2
            prev={prev}
            closeModal={closeModal}
            newsId={newsId}
            Img={Img}
          />
        );
      default:
        return <Step1 next={next} newsId={newsId} />;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalTitleContainer>
                <FaPlusCircle size={28} />
                <ModalTitle>
                  {comment ? "Add New Comment" : "Add News"}
                </ModalTitle>
              </ModalTitleContainer>
              {comment ? (
                <ModalContent>{renderCommentForm()}</ModalContent>
              ) : (
                <ModalContent>{renderForm()}</ModalContent>
              )}

              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
