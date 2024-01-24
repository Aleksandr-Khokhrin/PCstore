import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchAllNews } from "../../../redux/slices/news";
import { fetchOneNews } from "../../../redux/slices/news";

import { Link, useParams } from "react-router-dom";

import ANews from "./aNews";
import NewsList from "./NewsList/Index";

import "./style.css";

const OneNews = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const newsArray = useSelector((state) => state.news.news.items);
  const aNews = useSelector((state) => state.news.oneNews.item);
  useEffect(() => {
    dispatch(fetchAllNews());
    dispatch(fetchOneNews(id));
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div className="oneNewsBox">
      <div className="linkBox">
        <Link className="LinkForProduct" to="/">
          <p>Главная</p>
          <p>/</p>
        </Link>
        <Link className="LinkForProduct" to="/news">
          <p>Новости</p>
          <p>/</p>
        </Link>
        <p>{aNews.title}</p>
      </div>
      <div className="aNewsBoxBody">
        <div className="aNewsBlock">
            <ANews windowWidth={props.windowWidth} data={aNews}/>
        </div>
        <div className="otherNews">
            <NewsList data={newsArray}/>
        </div>
      </div>
      {/* {id} */}
    </div>
  );
};

export default OneNews;
