import React, { Component } from "react";
import s from "./Note.module.scss";

export class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editTitle: props.title,
      editContent: props.content,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = (e) => {
    let { title, content } = this.state;
    this.props.addNote(title, content);

    this.setState({ title: '', content: '' });
  };

  onRemoveNote = (index) => {
    this.props.removeNote(index);
  };
  onEditNote = (index) => {
    this.props.editNote(index);
  };

  render(){
    return (
      <li>
        {this.props.editMode ? (
          <React.Fragment>
            <input
              value={this.props.title}
              onChange={this.handleChange}
              placeholder="title"
            />
            <input
              value={this.props.content}
              onChange={this.handleChange}
              placeholder="content"
            />

            <button
              onClick={() => this.props.confirmEdit(this.props.id, this.state.title, this.state.content)}
            >
              SUBMIT
            </button>
            <button onClick={() => this.props.toggleEditMode()}>CANCEL</button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button onClick={() => this.onEditNote(this.props.id)}>O</button>
            <button onClick={() => this.onRemoveNote(this.props.id)}>x</button>
          </React.Fragment>
        )}
      </li>
    );
  }
};
