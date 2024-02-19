import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const SecondPage = () => {
  const [inputForm, setInputForm] = useState({
    title: '',
    author: '',
    category: '',
    price: '',
    cover: '',
  });

  const handleForm = (e) => {
    setInputForm((prevFormData) => ({ ...prevFormData, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Second page to exam</h1>

      <div>
        <form onSubmit={handleFormSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={inputForm.title} onChange={handleForm} />
          </label>
          <label>
            Author:
            <input type="text" name="author" value={inputForm.author} onChange={handleForm} />
          </label>
          <label>
            Category:
            <input type="number" name="category" value={inputForm.category} onChange={handleForm} />
          </label>
          <label>
            Price:
            <input type="text" name="price" value={inputForm.price} onChange={handleForm} />
          </label>
          <label>
            Cover:
            <input type="text" name="cover" value={inputForm.cover} onChange={handleForm} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
