import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchVideos } from "../../redux/slices/videos";

import NavigationPage from "../../elements/navigation";
import ErrorBox from "../../elements/errorBox";
import VideoBox from "../../elements/VideoBox";
import "./style.css";

const WindowEleven = (props) => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos);
  const [windWidth, setWindWidth] = useState(0);
  const [boxCount, setBoxCount] = useState(8);
  const [pagesClick, setPagesClick] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    dispatch(fetchVideos());
    setWindWidth(props.windowWidth);
    if (windWidth <= 1400 && 800 < windWidth) {
      setBoxCount(3);
      setPagesClick(false);
    } else if (windWidth <= 800) {
      setPagesClick(true);
      setBoxCount(2);
    } else {
      setBoxCount(5);
      setPagesClick(false);
    }
  }, [windWidth, boxCount, pagesClick, props.windowWidth, videos.status]);

  const renderBoxes =
    videos.videos.items && videos.videos.status !== "error" ? (
      videos.videos.items
        .slice(pagesCount * boxCount, pagesCount * boxCount + boxCount)
        .map((item, index) => (
          <VideoBox key={index} item={item} index={index} />
        ))
    ) : (
      <ErrorBox />
    );

  const countPageHandler = (elem) => {
    setPagesCount(elem);
  };

  return (
    <div className="windowTen">
      <h3 className="titleH">UPGrade Live</h3>
      <NavigationPage
        countPage={countPageHandler}
        pages={pagesClick}
        elements={videos.videos.items?.length}
        maxElems={Math.ceil(videos.videos.items?.length / boxCount)}
        smallArray={true}
      />
      <div className="windowElevenBody">{renderBoxes}</div>
    </div>
  );
};

export default WindowEleven;
