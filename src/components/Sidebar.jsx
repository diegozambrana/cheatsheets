
const LIST_LESSONS = [
    {key: 'LESSON1', value: 'Introducción y conceptos básicos'},
    {key: 'LESSON2', value: 'Componentes'},
    {key: 'LESSON3', value: 'Hooks'},
    {key: 'LESSON4', value: 'React Context'},
    {key: 'LESSON5', value: 'Redux'}
]

export const Sidebar = ({currentKey, onChangeLesson}) => {
    
    return (
        <div className="sidebar">
            <ul>
                {LIST_LESSONS.map((lesson) => (
                    <li key={lesson.key} className={currentKey === lesson.key ? 'selected': ''}>
                        <a onClick={() => onChangeLesson(lesson.key)}>
                            {lesson.value}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}