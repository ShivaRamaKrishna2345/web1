import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg shadow-lg p-4 m-4 relative hover:shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg text-red-500 bg-red-200 rounded-full px-3 py-1">
          {book.publishYear}
        </h2>
        <h4 className="text-sm text-gray-500">{book._id}</h4>
      </div>
      <div className="flex items-center mb-2">
        <PiBookOpenTextLight className="text-red-500 text-2xl mr-2" />
        <h2 className="text-lg font-semibold">{book.title}</h2>
      </div>
      <div className="flex items-center mb-2">
        <BiUserCircle className="text-red-500 text-2xl mr-2" />
        <h2 className="text-lg">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center mt-4">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
