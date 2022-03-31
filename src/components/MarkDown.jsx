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
      },
      a: ({node, ...props}) => {
        if(props.title){
          return <a {...props} target="_blank" />
        }
        return <a {...props}/>
      },
      img: ({src, alt}) => {
        return <img src={require(`../assets/${src}`)} alt={alt}/>
      }
    }}
  />
}