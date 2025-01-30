import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const phoneNumber = '916005105758';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        {isOpen && (
          <div className="absolute bottom-20 right-0 rounded-2xl shadow-2xl w-96 overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-[1.02]">
            {/* Header */}
            <div className="bg-[#0022D2] p-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Chat with me</h3>
                    <p className="text-white/80 text-sm">Usually replies instantly</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            {/* Chat Area */}
            <div className="bg-gray-700 h-96 p-6 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-end space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#0022D2] flex items-center justify-center">
                    <MessageCircle className="text-white" size={16} />
                  </div>
                  <div className="bg-[#0022D2]/10 backdrop-blur-sm rounded-2xl rounded-bl-none p-4 max-w-[80%]">
                    <p className="text-white">👋 Hi! How can I help you today?</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="bg-[#0022D2] p-4">
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-white/10 text-white rounded-xl px-4 py-3 pr-12 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Send size={16} className="text-white" />
                </button>
              </form>
            </div>
          </div>
        )}
        
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#0022D2] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-110 mb-16"
        >
          <MessageCircle className="text-white" size={24} />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppChat;