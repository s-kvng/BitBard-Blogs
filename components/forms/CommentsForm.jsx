"use client";

import React, { useEffect, useRef, useState } from "react";
import { submitComment } from "@/services";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const commentEl = useRef();
  const emailEl = useRef();
  const nameEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
      commentEl.current.value = "";
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
      commentEl.current.value = "";
      emailEl.current.value = "";
      nameEl.current.value = "";
    }

    // submitComment(commentObj).then((res) => {
    //   setShowSuccessMessage(true);
    //   setTimeout(() => {
    //     setShowSuccessMessage(false);
    //   }, 3000);

    // });

    toast.promise(submitComment(commentObj), {
      pending: "Post submission is pending",
      success: "Submitted for review 👌",
      error: "Ooops something went wrong 🤯",
    });
  };

  return (
    <div className="bg-white  shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        Leave a Reply
      </h3>
      <div className=" grid grid-cols-1 gap-4 mb-4">
        <textarea
          name="comment"
          ref={commentEl}
          placeholder="Comment"
          className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          ref={nameEl}
          name="name"
          placeholder="Name"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />

        <input
          type="text"
          ref={emailEl}
          name="email"
          placeholder="Email"
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        />
      </div>
      <div className=" grid grid-cols-1 gap-4 mb-4">
        <div>
          <input type="checkbox" ref={storeDataEl} id="storeData" />
          <label
            htmlFor="storeData"
            className="text-gray-500 cursor-pointer ml-2"
          >
            Save my name and email for the next time I comment
          </label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">All field are required</p>}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Post Comment
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CommentsForm;
