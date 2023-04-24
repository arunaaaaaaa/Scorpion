import React, { useState, useEffect } from 'react';
import NewsArticle from "./NewsArticle";
import axios from "axios";
import Pagination from './Pagination';
import { useLocation } from 'react-router-dom';


const SearchResult = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  let location = useLocation();
  const { data } = location.state;

  useEffect(async () => {
    const url = `http://localhost:8080/search/${data}`
    axios.get(url).then(res => {
      setMessage(res.data.message)
      setPosts(res.data.articles)
    })
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
      <div>
          <div>
            <p>{message}</p>
          </div>
          {currentPosts ? currentPosts.map((news) => (
            <NewsArticle data={news} key={news.url} />
          ))
        : "Loading"}
        <Pagination
          postsPerPage = {postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
  )
}

export default SearchResult