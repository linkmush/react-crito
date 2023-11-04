import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const AutoScrollTop = () => {
    const location = useLocation()

    useEffect(() => {
      //console.log('AutoScrollTop useEffect körs');
        window.scrollTo({ top: 0, behavior: 'instant'})
    }, [location.pathname])
    
  return null
}

export default AutoScrollTop