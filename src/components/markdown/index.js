import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class MarkdownReader extends Component {
  state = {
    content: null,
  };

  componentWillMount() {    
    fetch(this.props.src).then((response) => {
      return response.text();
    }).then((txtResponse) => {
      this.setState({ content: txtResponse });
    });
  };

  render() {
    return (
      <ReactMarkdown source={this.state.content} />
    );
  };
}

export default MarkdownReader;
