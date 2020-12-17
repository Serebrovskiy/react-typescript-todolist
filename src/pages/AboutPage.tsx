 import React from 'react'
 import { useHistory }  from 'react-router-dom'
 
export const AboutPage: React.FC = () => {
    const history = useHistory() 

    return (
        <>
           <h1>Страница информации</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro earum odit atque quo voluptate reprehenderit quidem aspernatur cupiditate consectetur quam distinctio velit vel incidunt, numquam excepturi optio nihil ab!</p>
           <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
        </>
    )
}