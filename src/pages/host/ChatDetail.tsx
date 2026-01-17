import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HostMobileNav from "@/components/HostMobileNav";

const HostChatDetail = () => {
  const { id } = useParams();
  const [message, setMessage] = useState("");

  const guest = { name: "Adebayo K.", image: "https://i.pravatar.cc/100?img=1" };
  
  const messages = [
    { id: "1", sender: "guest", text: "Hi, I just booked your Mercedes S-Class", time: "9:30 AM" },
    { id: "2", sender: "host", text: "Hello! Thank you for booking. I'm excited to host you!", time: "9:32 AM" },
    { id: "3", sender: "guest", text: "What time should I pick up the car?", time: "9:35 AM" },
    { id: "4", sender: "host", text: "You can pick it up anytime after 10 AM on your start date. I'll send you the exact location closer to the date.", time: "9:37 AM" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      <main className="max-w-[800px] mx-auto px-6 md:px-10 py-8">
        <Link to="/host/messages" className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to messages
        </Link>

        <div className="bg-card border border-border rounded-xl flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="p-4 border-b border-border flex items-center gap-3">
            <img src={guest.image} alt={guest.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className="font-semibold">{guest.name}</p>
              <p className="text-xs text-muted-foreground">Mercedes S-Class · Dec 28-30</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "host" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[70%] ${msg.sender === "host" ? "bg-primary text-white" : "bg-secondary"} rounded-lg p-3`}>
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === "host" ? "text-white/70" : "text-muted-foreground"}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
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
      </main>

      <Footer />
      <HostMobileNav />
    </div>
  );
};

export default HostChatDetail;