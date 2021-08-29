import s from "./HashtagList.module.scss";
import React from "react";

export const HashtagList = (props) => {
  //console.log(props);
  const onFilterHashtag = (e) => {
    props.filterHashtag(e.target.value);
  };
  const hashtagItems = props.hashtags.map((hashtag, index) => (
    <button
      onClick={onFilterHashtag}
      value={hashtag}
      className={ props.activeHashtag === hashtag ? s.listItem__active : s.listItem }
      key={`key + ${index}`}
    >
      {hashtag}
    </button>
  ));

  return (
    <ul>
      <button className={ props.activeHashtag ? s.buttonAll : s.buttonAll__active} onClick={onFilterHashtag} value={""}>
        ALL
      </button>
      {hashtagItems}
    </ul>
  );
};
