import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class MarkdownReader extends Component {
  state = {
    content: null,
  };

  componentWillMount() {
    console.log(this.props.src);
    
    fetch(this.props.src).then((response) => {
      console.log(response);
      return response.text();
    }).then((txtResponse) => {
      console.log(txtResponse);
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
