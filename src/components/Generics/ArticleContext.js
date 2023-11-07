import { useContext, createContext, useState, useEffect } from "react"

const ArticleContext = createContext ()
export const useArticles = () => useContext(ArticleContext)

export const ArticleProvider = ({children}) => {
    const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
    const [Articles, setArticles] = useState ([])
    const [Article, setArticle] = useState (null)

    useEffect(() => {
        getArticles()
    }, [])

    const CreateArticle = async (Article) => {
        const result = await fetch(apiUrl, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Article)
        });
    
        if (result.status === 200) {
            const newArticle = await result.json();
            setArticle(newArticle);
        }
    }

    const getArticles = async () => {
        const result = await fetch(apiUrl);
        const data = await result.json();
        setArticles(data);
    }

    const getArticle = async (id) => {
        const result = await fetch(`${apiUrl}/${id}`)
        const data = result.json()
        setArticle(data)
    }

    const updateArticle = async (id, updatedArticles) => {
        const result = await fetch(`${apiUrl}/${id}`, {
            method: 'put'
        })

        if (result.status === 200) {
            const updatedArticles = Articles.filter(Article  => Article.id !== id)
            getArticles()
        }
    }
    
    const deleteArticle = async (id) => {
        const result = await fetch(`${apiUrl}/${id}`, {
            method: 'delete'
        })

        if (result.status === 200) {
            const updatedArticles = Articles.filter(Article  => Article.id !== id)
            getArticles()
        }
    }

    const clearArticle = () => {
        setArticle(null)
    }

    return (
        <ArticleContext.Provider value={{Articles, Article, CreateArticle, getArticle, getArticles, updateArticle, deleteArticle, clearArticle}}>
            {children}
        </ArticleContext.Provider>
    )
}