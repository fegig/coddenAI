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


export default memo(function App({content}) {
  return <MarkdownSyntax content={content} />;
});
