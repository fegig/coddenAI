import { memo } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import PropTypes from 'prop-types';

// Extracting custom code block renderer
function CodeBlock({ inline, className, children, ...props }) {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter style={tomorrow} language={match[1]} PreTag="div" {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={`custom-code ${className}`} {...props}>
      {children}
    </code>
  );
}

CodeBlock.propTypes = {
  inline: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const MarkdownSyntax = ({ content }) => {
  return (
    <ReactMarkdown
      components={{
        code: CodeBlock,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

MarkdownSyntax.propTypes = {
  content: PropTypes.string.isRequired,
};

// Example usage
const markdownContent = `
<CODE_REVIEW>

The original code is a React component that uses the \`react-markdown\` package to render Markdown content with syntax highlighting. It has a custom CSS file \`MarkdownStyles.css\` that targets the \`.custom-code\` class.

However, the code has some limitations. It only imports a single font family for the \`.custom-code\` class, and it does not provide specific styles for other programming languages. Additionally, it uses the \`measurement-unit-less-values\` like \`12px\`, which may not scale well in different environments.

The code also uses a long chain of selectors \`.custom-code.language-jsx\` to define specific styles for JSX code blocks. While this works, it may become cumbersome to maintain for a large number of languages.

</CODE_REVIEW>

Given this analysis, here's a revised version of the code that improves the custom CSS support and provides a more scalable solution:

<PLANNING>

1. **Import the required dependencies**:
	*react ->*
	*css ->*
	*next/head*
2. **Create a new CSS file** \`Styles.css\` with the global styles:
\`\`\`css
/* Global styles */
body {
  font-family: 'Fira Code', monospace;
  background-color: #f8f8f2;
  color: #2d2d2d;
}
\`\`\`
3. **Import the global styles in \`Index.css\`**:
\`\`\`css
/* Import global styles */
@import './Styles.css';
\`\`\`
4. **Create a new CSS file** \`SyntaxHighlighting.css\` with language-specific styles:
\`\`\`css
/* Language-specific styles */
.CustomCode {
  font-family: 'Fira Code', monospace;
  padding: 12px;
  border-radius: 5px;
  overflow-x: auto;
  white-space: pre;
}

.@{lang} {
  background-color: @{bgColor} !important;
}

.@{lang}::before {
  content: attr(data-lang) ' ';
}
\`\`\`
5. **Replace the original CSS with the updated styles** in \`SyntaxHighlighting.css\`.
6. **Update the component to use the new styles**:
\`\`\`jsx
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Styles from './Styles.css';

// ...

const CodeBlock = ({ inline, className, children, ...props }) => {
 
`;

export default memo(function App() {
  return <MarkdownSyntax content={markdownContent} />;
});
