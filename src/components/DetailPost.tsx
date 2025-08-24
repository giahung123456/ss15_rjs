import React, { Component } from 'react';

interface Props {
  post: {
    id: number;
    title: string;
    content: string;
    author: string;
  };
}

export default class DetailPost extends Component<Props> {
  render() {
    const { id, title, content, author } = this.props.post;
    return (
      <div style={{ borderBottom: "1px solid #ccc", marginBottom: "10px" }}>
        <p><b>Id:</b> {id}</p>
        <p><b>Title:</b> {title}</p>
        <p><b>Content:</b> {content}</p>
        <p><b>Author:</b> {author}</p>
      </div>
    );
  }
}
