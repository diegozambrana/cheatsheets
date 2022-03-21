import ReactMarkdown from 'react-markdown'
import { CodeBox } from './CodeBox';

export const MarkDown = ({value}) => {
  return <ReactMarkdown
    children={value}
    components={{
      code({node, inline, className, children, ...props}) {

        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <CodeBox code={children} language={match[1]}/>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }}
  />
}