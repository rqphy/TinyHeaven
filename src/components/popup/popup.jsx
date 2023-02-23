import './popup.css'
import useMessage from '../../stores/useMessage'
import { useEffect } from 'react'

export default function Popup()
{
	const messageId = useMessage((state) => state.messageId)
    const setMessagesLength = useMessage((state) => state.setMessagesLength)

    const messages = [
        <article>Tiny Heaven is a small world I created to practice React Three Fiber.</article>,
        <article>Let's enjoy the calmness of this beautiful place.</article>,
        <article>Discover more projects on my <a href="https://ferreira-raphael.netlify.app" target="_blank" rel="noopener noreferrer">portfolio</a>.</article>
    ]

    useEffect(() =>
    {
        setMessagesLength(messages.length)
    }, [])
    
    return <div className="popup">
        {
            messages[messageId]
        }
    </div>
}