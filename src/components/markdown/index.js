import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class MarkdownReader extends Component {
  state = {
    content: null,
  };

  componentDidMount() {
    if (this.props.title) {
      document.title = this.props.title;
    }
    
    if (this.props.src.indexOf('.md') !== -1) {
      fetch(this.props.src).then(res => res.text()).then(txtres => this.setState({ content: txtres }));
    } else {
      this.setState({ content: this.props.src });
    }
  };

  render() {
    return (
      <ReactMarkdown
        escapeHtml={false}
        linkTarget="_blank"
        source={this.state.content}
      />
    );
  };
}

export default MarkdownReader;
