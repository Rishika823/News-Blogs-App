import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import Calender from "./Calender";
import "./News.css";
import userImg from "../assets/Images/user.jpg";
import techImg from "../assets/Images/tech.jpg";
import sportsImg from "../assets/Images/sports.jpg";
import scienceImg from "../assets/Images/science.jpg";
import worldImg from "../assets/Images/world.jpg";
import healthImg from "../assets/Images/health.jpg";
import nationImg from "../assets/Images/nation.jpg";
import entertainmentImg from "../assets/Images/entertainment.jpg";
import axios from "axios";

const News = () => {
  const [headline, setheadline] = useState(null);
  const [news, setnews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const url = ` https://gnews.io/api/v4/top-headlines?category=general&lang=en&apikey=9728a66ae2a486441e067c49b2b66f11`;

      const response = await axios.get(url);

      console.log(response);
    };

    fetchNews();
  }, []);

  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blogs</h1>
        <div className="search-bar">
          <form>
            <input type="text" placeholder='"Search News...' />
            <button type="submit">
              <i className="fas fa-search search-icon"></i>
            </button>
          </form>
        </div>
      </header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">
            <img src={userImg} alt="User Image" />
            <p>Crystal's Blog</p>
          </div>
          <nav className="categories">
            <h1 className="nav-heading">Categories</h1>
            <div className="nav-links">
              <a href="#" className="nav-link">
                General
              </a>
              <a href="#" className="nav-link">
                World
              </a>
              <a href="#" className="nav-link">
                Business
              </a>
              <a href="#" className="nav-link">
                Technology
              </a>
              <a href="#" className="nav-link">
                Entertainment
              </a>
              <a href="#" className="nav-link">
                Sports
              </a>
              <a href="#" className="nav-link">
                Science
              </a>
              <a href="#" className="nav-link">
                Health
              </a>
              <a href="#" className="nav-link">
                Nation
              </a>
              <a href="#" className="nav-link">
                Bookmarks
                <i className="fa-regular fa-bookmark bookmark"></i>
              </a>
            </div>
          </nav>
        </div>
        <div className="news-section">
          <div className="headline">
            <img src={techImg} alt=" Headline Images " />
            <h2 className="headline-title">
              Lorem ipsum dolor sit amet.
              <i className="fa-regular fa-bookmark bookmark"></i>
            </h2>
          </div>
          <div className="news-grid">
            <div className="news-grid-item">
              <img src={sportsImg} alt="News Image" />
              <h3>
                Lorem ipsum, dolor sit amet.
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={scienceImg} alt="News Image" />
              <h3>
                Lorem ipsum, dolor sit amet.
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={worldImg} alt="News Image" />
              <h3>
                Lorem ipsum, dolor sit amet.
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={healthImg} alt="News Image" />
              <h3>
                Lorem ipsum, dolor sit amet.
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={nationImg} alt="News Image" />
              <h3>
                Lorem ipsum, dolor sit amet .
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={entertainmentImg} alt="Entertainment Image" />
              <h3>
                Lorem ipsum, dolor sit amet.
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
          </div>
        </div>
        <div className="my-blogs">My Blogs </div>
        <div className="weather-calender">
          <Weather />
          <Calender />
        </div>
      </div>
      <footer className="news-footer">Footer</footer>
    </div>
  );
};
export default News;
