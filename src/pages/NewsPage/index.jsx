import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchAllNews } from "../../redux/slices/news";

import MiddleBox from "./MiddleBox";
import FreshNews from "./freshNews";
import NewsBlock from "./newsBlock";
import { Link } from "react-router-dom";

import "./style.css";

const NewsPage = (props) => {
  const dispatch = useDispatch();
  const newsArray = useSelector((state) => state.news.news.items);
  useEffect(() => {
    dispatch(fetchAllNews());
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="newsPageBox">
      <div className="linkBox">
        <Link className="LinkForProduct" to="/">
          <p>Главная</p>
          <p>/</p>
        </Link>
        <p>Новости</p>
      </div>
      <div className="newsTitle">
        <p style={{ color: "var(--bgSearchImg)" }}>новости</p>
        <p>upgrade</p>
      </div>
      {newsArray[0] ? <FreshNews newsData={newsArray[0]} /> : null}
      <MiddleBox />
      {newsArray ? <NewsBlock windowWidth={props.windowWidth} newsData={newsArray} /> : null}
      
    </div>
  );
};

export default NewsPage;
