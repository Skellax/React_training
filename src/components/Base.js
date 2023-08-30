import '../styles/Base.css'
import Chat from './Chats'


function Base(){
    return(
        <main className="principal-base">
            <div className="window-game">
                <h2 className="title-game"> 42 Pong</h2>
            </div>
            <Chat />
        </main>
    )
}

export default Base