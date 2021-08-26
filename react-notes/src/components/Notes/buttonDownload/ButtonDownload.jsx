import React, { Component } from "react";
import s from "./ButtonDownload.module.scss";

export class ButtonDownload extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  handleClick = () => {
    const data = JSON.stringify(this.props.data);
    let a = document.createElement("a");
    let file = new Blob([data], {type: 'application/json'});
    a.href = URL.createObjectURL(file);
    a.download = "data.json";
    a.click();
    a.remove();
  };

  render() {
    return <button className={s.downloadButton} onClick={this.handleClick}>&#129095;DATA</button>;
  }
}
