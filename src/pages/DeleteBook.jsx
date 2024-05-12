// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert("An error happened, Please check console!");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 class=" text-3xl my-4 font-bold text-primary">
  <span class=" border-b-4 border-primary align-center">Delete Book</span>
</h1>
      {loading ? <Spinner /> : ""}
      <div className=" d-inline-block shadow p-2 mb-3 bg-white rounded border border-black flex flex-col rounded-xl w-[200px] p-4 mx-auto">
        <h3 className="text-center d-4">Are you sure?</h3>
        <button className="p-3  text-center bg-red-400 " onClick={handleDeleteBook}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
