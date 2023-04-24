import React, { useState, useEffect } from 'react';
import NewsArticle from "./NewsArticle";
import { Link } from 'react-router-dom';
import axios from "axios";
import Pagination from './Pagination';
import SearchBar from './SearchBar';


const Landing = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(async () => {
      const url = `http://localhost:8080/category/general`
      axios.get(url).then(res => {
        setPosts(res.data.articles)
      })
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div>
            <SearchBar />
            <p> <Link to="/">Refresh</Link></p>
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

export default Landing