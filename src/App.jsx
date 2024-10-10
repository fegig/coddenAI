import { useState } from 'react';
import MarkdownSyntax from './components/MarkDown'
import TextInput from './components/TextInput';

function App() {
  const [text, setText] = useState('');

  const performSubmit = () => {
    alert(`Submitted message: ${text}`);
    setText('');
    chat.push(text);
  }


  const chat = [{
    user: ``,
    server: `
<CODE_REVIEW>

The original code is a React component that uses the \`react-markdown\` package to render Markdown content with syntax highlighting. It has a custom CSS file \`MarkdownStyles.css\` that targets the \`.custom-code\` class.

However, the code has some limitations. It only imports a single font family for the \`.custom-code\` class, and it does not provide specific styles for other programming languages. Additionally, it uses the \`measurement-unit-less-values\` like \`12px\`, which may not scale well in different environments.

The code also uses a long chain of selectors \`.custom-code.language-jsx\` to define specific styles for JSX code blocks. While this works, it may become cumbersome to maintain for a large number of languages.


`

    // </CODE_REVIEW>

    // Given this analysis, here's a revised version of the code that improves the custom CSS support and provides a more scalable solution:

    // <PLANNING>

    // 1. **Import the required dependencies**:
    // 	*react ->*
    // 	*css ->*
    // 	*next/head*
    // 2. **Create a new CSS file** \`Styles.css\` with the global styles:
    // \`\`\`css
    // /* Global styles */
    // body {
    //   font-family: 'Fira Code', monospace;
    //   background-color: #f8f8f2;
    //   color: #2d2d2d;
    // }
    // \`\`\`
    // 3. **Import the global styles in \`Index.css\`**:
    // \`\`\`css
    // /* Import global styles */
    // @import './Styles.css';
    // \`\`\`
    // 4. **Create a new CSS file** \`SyntaxHighlighting.css\` with language-specific styles:
    // \`\`\`css
    // /* Language-specific styles */
    // .CustomCode {
    //   font-family: 'Fira Code', monospace;
    //   padding: 12px;
    //   border-radius: 5px;
    //   overflow-x: auto;
    //   white-space: pre;
    // }

    // .@{lang} {
    //   background-color: @{bgColor} !important;
    // }

    // .@{lang}::before {
    //   content: attr(data-lang) ' ';
    // }
    // \`\`\`
    // 5. **Replace the original CSS with the updated styles** in \`SyntaxHighlighting.css\`.
    // 6. **Update the component to use the new styles**:
    // \`\`\`jsx
    // import React from 'react';
    // import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
    // import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
    // import Styles from './Styles.css';

    // // ...

    // const CodeBlock = ({ inline, className, children, ...props }) => {

  }]
  return (
    <>
      <div className=''>
        {chat && chat.map((c, i) => {

          return (
            <div className='mx-auto max-w-screen-lg my-10 p-8 bg-neutral-800 rounded-3xl mb-28 max-md:mx-4' key={i}>
              <MarkdownSyntax content={c.server} />
            </div>

          )
        })}

        <div className=' fixed bottom-0 w-full bg-gray-950'>
          <TextInput text={text} setText={setText} submit={performSubmit} />
        </div>
      </div>


    </>
  )
}

export default App
