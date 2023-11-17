import { useContext, createContext, useState, useEffect } from "react"

const ArticleContext = createContext ()
export const useArticles = () => useContext(ArticleContext)

export const ArticleProvider = ({children}) => {
    const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
    const [articles, setArticles] = useState ([])
    const [article, setArticle] = useState (null)

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {
        const result = await fetch(apiUrl);
        const data = await result.json();
        setArticles(data);
    }

    const getArticle = async (id) => {
        const result = await fetch(`${apiUrl}/${id}`)
        const data = await result.json()
        setArticle(data)
    }
    
    const clearArticle = () => {
        setArticle(null)
    }

    return (
        <ArticleContext.Provider value={{articles, article, getArticle, getArticles, clearArticle}}>
            {children}
        </ArticleContext.Provider>
    )
}