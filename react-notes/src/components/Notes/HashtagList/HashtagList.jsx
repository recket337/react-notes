import s from "./HashtagList.module.scss";
import React from "react";

export const HashtagList = (props) => {
  //console.log(props);
  const onFilterHashtag = (e) => {
    props.filterHashtag(e.target.value);
  }
  const hashtagItems = props.hashtags.map((hashtag, index) => (
    <button onClick={onFilterHashtag} value={hashtag} className={s.listItem} key={`key + ${index}`}>{hashtag}</button>
  ));

  return <ul>
    <button className={s.buttonAll} onClick={onFilterHashtag} value={''}>ALL</button>
    {hashtagItems}
    </ul>;
};
