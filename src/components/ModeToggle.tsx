import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Car, User } from "lucide-react";

export default function ModeToggle() {
  const [isHost, setIsHost] = useState(false);
  const navigate = useNavigate();

  const toggleMode = () => {
    const newMode = !isHost;
    setIsHost(newMode);
    
    if (newMode) {
      navigate("/host/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <button
      onClick={toggleMode}
      className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      title={isHost ? "Switch to Guest Mode" : "Switch to Host Mode"}
    >
      {isHost ? <User className="w-6 h-6" /> : <Car className="w-6 h-6" />}
    </button>
  );
}
