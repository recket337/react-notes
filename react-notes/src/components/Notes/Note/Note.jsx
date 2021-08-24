import React, { Component } from "react";
import s from "./Note.module.scss";

export class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onRemoveNote = () => {
    this.props.removeNote(this.props.id);
  };

  onEditNote = () => {
    this.props.editNote(this.props.id);
  };

  onConfirmEdit = () => {
    this.props.submitEdit(this.props.id, this.state.title, this.state.content)
  }

  onCancelEdit = () => {
    this.props.cancelEdit(this.props.id)
  }

  render() {
    console.log(this.props);
    return (
      <li>
        {this.props.isEditing ? (
          <React.Fragment>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="title"
            />
            <input
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
              placeholder="content"
            />

            <button
              onClick={this.onConfirmEdit}
            >
              SUBMIT
            </button>
            <button onClick={this.onCancelEdit}>CANCEL</button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button onClick={this.onEditNote}>[O]</button>
            <button onClick={this.onRemoveNote}>[X]</button>
          </React.Fragment>
        )}
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </li>
    );
  }
};
