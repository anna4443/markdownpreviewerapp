import React, { useState } from 'react'
import { marked } from 'marked';

const defaultMarkdown = `
# H1
## H2
[title](https://www.example.com)
\`code\`
\`\`\`
{
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
}
\`\`\`
- First item
- Second item
- Third item
1. First item
2. Second item
3. Third item
> blockquote
![alt text](image.jpg)
**bold text**
`;

const PreviewerDown = () => {
    const [text, setText] = useState(defaultMarkdown);

    const handleText = (e) => {
        setText(e.target.value);
    }

  return (
    <div id='container'>
        <div id="editor-container">
            <div className='navbar'>
               Editor
            </div>
            <textarea id='editor' type="text" value={text} onChange={handleText}></textarea>
        </div>
        <div id='preview-container'>
        <div className='navbar'>
               Preview
        </div>   
        <div id='preview' dangerouslySetInnerHTML={{
            __html: marked(text),
        }}>
        </div>
    </div>
    </div>
  )
}

export default PreviewerDown