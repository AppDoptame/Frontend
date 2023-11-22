import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

interface ChatProps {
  showChat: boolean;
  closeChat: () => void;
}

interface Message {
  author: "user" | "bot";
  content: string;
}

const ChatComponent: React.FC<ChatProps> = ({ showChat, closeChat }) => {
  const [threadId, setThreadId] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (showChat) {
      const inputField = document.querySelector(
        ".chat-input-field"
      ) as HTMLTextAreaElement;
      if (inputField) inputField.focus();
    }
  }, [showChat]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey && !isLoading) {
      event.preventDefault();
      sendMessage();
    }
  };

  const createThread = async () => {
    try {
      const response = await fetch(
        "https://9o6udz5tvk.execute-api.us-east-1.amazonaws.com/create-thread"
      );
      const data = await response.json();
      setThreadId(data.id);
      sessionStorage.setItem("threadId", data.id);
    } catch (error) {
      console.error("Error creating thread:", error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || isLoading) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { author: "user", content: newMessage },
    ]);

    setIsLoading(true);

    const messagePayload = {
      message: newMessage,
      thread_id: threadId,
    };

    try {
      const response = await fetch(
        "https://9o6udz5tvk.execute-api.us-east-1.amazonaws.com/add-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(messagePayload),
        }
      );

      const botResponse = await response.text();
      setMessages((prevMessages) => [
        ...prevMessages,
        { author: "bot", content: botResponse },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
      setNewMessage("");
    }
  };

  useEffect(() => {
    const existingThreadId = sessionStorage.getItem("threadId");
    if (existingThreadId) {
      setThreadId(existingThreadId);
    } else if (showChat) {
      createThread();
    }
  }, [showChat]);

  return (
    <>
      {showChat && (
        <>
          <div className="chat-overlay" onClick={closeChat}></div>

          <div className="chat-modal">
            <div className="chat-container">
              <header className="chat-header">
                <div className="chat-title">AppDoptame Chat Bot</div>
                <button className="close-button" onClick={closeChat}>
                  Close
                </button>
              </header>

              <div className="chat-messages">
                {messages.map((message, index) => (
                  <div key={index} className={`message ${message.author}`}>
                    <div
                      className="message-content"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
                {isLoading && <div className="loader">Loading...</div>}
              </div>

              <div className="chat-input">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message here..."
                  className="chat-input-field"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  className="chat-send-button"
                  disabled={isLoading}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ChatComponent;
