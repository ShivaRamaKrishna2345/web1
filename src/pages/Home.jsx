// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import { useSnackbar } from "notistack";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Error", { variant: "error" });
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold text-center">Bookstore Management System</h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-900 text-white py-2">
        <div className="container mx-auto flex justify-center">
          <Link to="/" className="mx-4 hover:text-gray-300">Home</Link>
          <Link to="/books/create" className="mx-4 hover:text-gray-300">Add Book</Link>
          {/* Add more navigation links as needed */}
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto py-8">
        <div className="flex justify-center mb-8">
          <button
            className={`mr-4 px-4 py-2 rounded-lg focus:outline-none ${showType === "table" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"}`}
            onClick={() => setShowType("table")}
          >
            Table View
          </button>
          <button
            className={` px-1 py-2 rounded-lg focus:outline-none ${showType === "card" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"}`}
            onClick={() => setShowType("card")}
          >
            Card View
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-primary">Books List</h1>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-4xl text-blue-500 hover:text-blue-600" />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Bookstore Management System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
