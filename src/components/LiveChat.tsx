import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "support", text: "Hi! How can I help you today?", time: "Just now" }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      text: message,
      time: "Just now"
    };
    
    setMessages([...messages, newMessage]);
    setMessage("");
    
    // Auto reply from support
    setTimeout(() => {
      const reply = {
        id: messages.length + 2,
        sender: "support", 
        text: "Thanks for your message! Our team will get back to you shortly.",
        time: "Just now"
      };
      setMessages(prev => [...prev, reply]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-40 bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 w-80 h-96 bg-background border border-border rounded-xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div>
              <h3 className="font-semibold">Live Support</h3>
              <p className="text-xs text-muted-foreground">We're here to help</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-secondary rounded">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  msg.sender === "user" ? "bg-primary text-white" : "bg-secondary"
                }`}>
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-white/70" : "text-muted-foreground"}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-sm border border-border rounded-lg"
              />
              <button onClick={sendMessage} className="p-2 bg-primary text-white rounded-lg hover:bg-primary/80">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;