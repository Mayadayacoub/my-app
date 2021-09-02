import React, { Children } from "react";
import "./Style.css";
const Books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51CPNIRSWeL._AC_SX184_.jpg",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones Hardcover",
    Author: " James Clear",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/517s9eYVoHS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "It Ends with Us: A Novel Paperback ",
    Author: " JColleen Hoover ",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {Books.map((book) => {
        return (
          <>
            <Book key={book.id} {...book} />
          </>
        );
      })}
    </section>
  );
}
const Book = ({ img, title, Author }) => {
  // const { img, title, Author } = props.book;
  const handleChange = (e) => {
    console.log(e.target);
    console.log(e);
  };
  const handleSearch = (Author) => {
    console.log(Author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1> {title}</h1>
      <h4>{Author}</h4>
      {/* {children} */}
      <button type="button" onClick={handleChange}>
        Change Me
      </button>
      <button type="button" onClick={() => handleSearch(Author)}>
        Find the Other
      </button>
    </article>
  );
};

export default BookList;
