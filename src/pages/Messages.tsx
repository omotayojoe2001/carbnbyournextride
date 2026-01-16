import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const Messages = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm on my way to pick you up.", sender: "driver", time: "10:05 AM" },
    { id: 2, text: "Great! I'll be waiting at the lobby.", sender: "user", time: "10:06 AM" },
    { id: 3, text: "I'm 5 minutes away.", sender: "driver", time: "10:15 AM" },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        text: message,
        sender: "user",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0 flex flex-col">
      <Header />

      <main className="flex-1 max-w-[800px] mx-auto w-full px-6 md:px-10 py-8 flex flex-col">
        <Link to="/trip/active" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to trip
        </Link>

        {/* Driver Info */}
        <div className="border border-border rounded-2xl p-4 mb-6">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
              alt="Driver"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Chukwudi Okafor</p>
              <p className="text-xs text-muted-foreground">Mercedes S-Class</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 mb-6 overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                  msg.sender === "user"
                    ? "bg-foreground text-background"
                    : "bg-secondary"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className={`text-xs mt-1 ${
                  msg.sender === "user" ? "opacity-70" : "text-muted-foreground"
                }`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border border-border rounded-2xl p-3 flex items-center gap-3">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-transparent outline-none"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-foreground text-background rounded-full hover:bg-foreground/90 smooth-transition"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
};

export default Messages;