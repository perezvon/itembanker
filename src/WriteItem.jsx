import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default class WriteItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Write Item</h1>
        <h2>Stem:</h2>
        <Editor init={{ /* your other settings */ }} />
        <h2>Option A:</h2>
        <Editor init={{ /* your other settings */ }} />
        <h2>Option B:</h2>
        <Editor init={{ /* your other settings */ }} />
        <h2>Option C:</h2>
        <Editor init={{ /* your other settings */ }} />
        <h2>Option D:</h2>
        <Editor init={{ /* your other settings */ }} />
      </div>
    )
  }
}
