import Highlight from 'react-highlight'

export const CodeBox = ({language, code}) => {
  return <div className='code-box'>
    <Highlight language={language}>
      {code}
    </Highlight>
  </div>
}