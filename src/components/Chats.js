import '../styles/Chat.css'

function Chat()
{
    return (
        <div className='wrapper'>
            <div className='chatbox'></div>
            <form className='message' action=''>
                <input className='usermsg' type='text' size='100'/>
                <input className='btn-submit' type='submit' value='Envoyez'/>
            </form>
        </div>
        
    )
}

export default Chat