import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        textToCopy: 'Text to be copied',
        copied: false
      };
    }
  
    render() {
      return (
        <div>
          {/* JSX code */}
          <CopyToClipboard text={this.state.textToCopy}
            onCopy={() => this.setState({ copied: true })}>
            <button>Copy to Clipboard</button>
          </CopyToClipboard>
          {this.state.copied ? <span>Copied!</span> : null}
        </div>
      );
    }
  }
  
  export default MyComponent;
  