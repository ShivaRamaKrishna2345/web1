import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate bg-white border-spacing-3 border-black-200">
      <thead>
        <tr className="bg-black-800">
          <th className="p-2">No</th>
          <th className="p-2">Title</th>
          <th className="p-2 ">Author</th>
          <th className="p-2 hidden md:table-cell">Publish Year</th>
          <th className="p-2">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="border-b border-black-500">
            <td className="p-2 text-center">{index + 1}</td>
            <td className="p-2">{book.title}</td>
            <td className="p-2 hidden md:table-cell">{book.author}</td>
            <td className="p-2 hidden md:table-cell">{book.publishYear}</td>
            <td className="p-2">
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-lg text-green-600 hover:text-green-800" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-lg text-yellow-600 hover:text-yellow-800" />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-lg text-red-600 hover:text-red-800" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
