import { useState } from "react";
import { Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HostMobileNav from "@/components/HostMobileNav";

const HostMessages = () => {
  const [selectedChat, setSelectedChat] = useState("1");
  const [message, setMessage] = useState("");

  const chats = [
    { id: "1", guest: "Adebayo K.", lastMessage: "What time should I pick up the car?", time: "10 min ago", unread: 2, image: "https://i.pravatar.cc/100?img=1" },
    { id: "2", guest: "Chioma N.", lastMessage: "Thank you for the great service!", time: "1 hour ago", unread: 0, image: "https://i.pravatar.cc/100?img=2" },
    { id: "3", guest: "Tunde O.", lastMessage: "Can I extend my booking?", time: "2 hours ago", unread: 1, image: "https://i.pravatar.cc/100?img=3" },
    { id: "4", guest: "Funke A.", lastMessage: "Is the car available for next week?", time: "1 day ago", unread: 0, image: "https://i.pravatar.cc/100?img=4" },
  ];

  const messages = [
    { id: "1", sender: "guest", text: "Hi, I just booked your Mercedes S-Class", time: "9:30 AM" },
    { id: "2", sender: "host", text: "Hello! Thank you for booking. I'm excited to host you!", time: "9:32 AM" },
    { id: "3", sender: "guest", text: "What time should I pick up the car?", time: "9:35 AM" },
    { id: "4", sender: "host", text: "You can pick it up anytime after 10 AM on your start date. I'll send you the exact location closer to the date.", time: "9:37 AM" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[1400px] mx-auto px-6 md:px-10 py-8">
        <h1 className="text-3xl font-bold mb-8">Messages</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
          {/* Chat List */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="p-4 border-b border-border">
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full px-4 py-2 bg-secondary rounded-lg text-sm border border-border"
              />
            </div>
            <div className="overflow-y-auto h-[calc(600px-73px)]">
              {chats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`w-full p-4 flex items-start gap-3 hover:bg-secondary border-b border-border text-left ${
                    selectedChat === chat.id ? "bg-secondary" : ""
                  }`}
                >
                  <img src={chat.image} alt={chat.guest} className="w-12 h-12 rounded-full object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold truncate">{chat.guest}</p>
                      {chat.unread > 0 && (
                        <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full flex-shrink-0">{chat.unread}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
                    <p className="text-xs text-muted-foreground mt-1">{chat.time}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="lg:col-span-2 bg-card border border-border rounded-xl flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-border flex items-center gap-3">
              <img src={chats.find(c => c.id === selectedChat)?.image || chats[0].image} alt="Guest" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-semibold">{chats.find(c => c.id === selectedChat)?.guest || chats[0].guest}</p>
                <p className="text-xs text-muted-foreground">Mercedes S-Class · Dec 28-30</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedChat === "1" ? messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "host" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[70%] ${msg.sender === "host" ? "bg-primary text-white" : "bg-secondary"} rounded-lg p-3`}>
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === "host" ? "text-white/70" : "text-muted-foreground"}`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              )) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <p>Select a conversation to view messages</p>
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 bg-secondary rounded-lg text-sm"
                />
                <button className="btn-primary px-6 py-2 rounded-lg flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <HostMobileNav />
    </div>
  );
};

export default HostMessages;
