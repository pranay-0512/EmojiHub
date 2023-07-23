import React, { useEffect, useState } from 'react'
// import Card from '../../components/cards'
const Dashboard = () => {
    const [emoji, setEmoji] = useState([]);
    useEffect(() => {
        const fetchEmoji =async()=>{
            try {
                const response = await fetch('https://emojihub.yurace.pro/api/all')
                console.log(response)
                if(!response.ok){
                    throw new Error('Error fetching!')
                }
                const data = await response.json()
                setEmoji(data);
            } catch (error) {
                console.log('error:', error )
            }
        }
      fetchEmoji();
    }, [])
    
  return (
    <div>
        {emoji.map((emoji)=>{
            const emojiHtml = {__html: emoji.htmlCode}
            return(
                <div key={emoji.unicode} >
                    {emoji.name} + <span dangerouslySetInnerHTML={emojiHtml}></span>
                </div>
            )
        })}
    </div>
  )
}

export default Dashboard