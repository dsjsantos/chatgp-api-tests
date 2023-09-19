import { useState } from 'react';

import { makeRequest } from './api/chatgpt';
import SideMenu from './components/SideMenu/SideMenu';
import ChatMessage from './components/ChatMessage/ChatMessage';
import IconSend from './assets/iconSend';

import './styles/App.css';

function App() {
    const [ inputPrompt, setInputPrompt ] = useState("");
    const [ chatlog, setChatLog ] = useState([{
        user: "gpt",
        message: "Como posso te ajudar hoje?"
    }]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await makeRequest({ prompt: inputPrompt });
        const lines = resp.data.split('\n').map((line, indx) => <p key={indx}>{line}</p>);
        setChatLog([...chatlog, 
            {
                user: 'me',
                message: `${inputPrompt}`
            },
            {
                user: 'gpt',
                message: lines
            }
        ]);
        setInputPrompt("");
    }

    return (
        <div className="App">
            <SideMenu />
            <section className='chatbox-wrapper'>
                <div className='chatbox-content'>
                    <div className='chat-log'>
                        {chatlog.map((message, indx) => (
                            <ChatMessage key={indx} message={message} />
                        ))}

                        <div className='chat-bottom-padding'></div>
                    </div>
                    <div className='chat-input-wrapper'>
                        <form className='chat-form' onSubmit={handleSubmit}>
                            <input 
                                rows='1'
                                className='chat-input-textarea' 
                                value={inputPrompt} 
                                placeholder='Envie uma mensagem'
                                onChange={e => setInputPrompt(e.target.value)}
                            />
                            <button type='submit' className="chat-button-send" disabled={!inputPrompt} >
                                <IconSend />
                            </button>
                        </form>                    
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
