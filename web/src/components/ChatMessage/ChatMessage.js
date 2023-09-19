import React from "react";
import Avatar from "../../assets/avatar";

import './ChatMessage.css';

// message = {
//      user: (user | chatgpt),
//      message: "aonde vai estar o propmt"
// }
const ChatMessage = props => {
    const { message } = props;
    return(
        <div className={`chat-message ${message.user === 'gpt' && 'chatgpt'}`}>
            <div className="chat-message-center">
                <div className={`avatar ${message.user === 'gpt' ? "chatgpt" : ""}`}>
                    { message.user === 'gpt' && <Avatar /> }
                </div>
                <div className="message">{message.message}</div>
            </div>
        </div>
    );
}

export default ChatMessage;