"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Check, CheckCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const WhatsAppBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 Welcome to DesignNetrix.", sender: "bot", time: "" },
    { id: 2, text: "How can we help you craft your digital presence today?", sender: "bot", time: "" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!message.trim()) return;

    const userMsg = { id: Date.now(), text: message, sender: "user", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    const currentMsg = message;
    setMessage("");

    // Simulate Bot Response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "That sounds exciting! Let's discuss this over WhatsApp for a faster response. Redirecting you now...", 
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);

      // Redirect after a short delay
      setTimeout(() => {
        const phoneNumber = "94704409960";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(currentMsg)}`;
        window.open(url, "_blank");
      }, 1500);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] md:w-[400px] bg-[#0d1117] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#1E96C9] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/20">
                    <User className="text-white w-6 h-6" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1E96C9]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">DesignNetrix Support</h3>
                  <p className="text-white/70 text-xs">Online • Usually orbits within minutes</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 h-[350px] overflow-y-auto p-4 space-y-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-opacity-5"
            >
              <div className="space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    initial={{ opacity: 0, x: msg.sender === "bot" ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={msg.id}
                    className={cn(
                      "max-w-[80%] p-3 rounded-2xl text-sm relative",
                      msg.sender === "bot" 
                        ? "bg-[#1f2937] text-white self-start rounded-tl-none border border-white/5 shadow-sm" 
                        : "bg-[#056162] text-white self-end ml-auto rounded-tr-none shadow-sm"
                    )}
                  >
                    {msg.text}
                    {msg.time && (
                      <div className="text-[10px] text-white/40 mt-1 flex items-center justify-end gap-1">
                        {msg.time}
                        {msg.sender === "user" && <CheckCheck className="w-3 h-3 text-blue-400" />}
                      </div>
                    )}
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-[#1f2937] text-white p-3 rounded-2xl rounded-tl-none self-start w-16 flex justify-center gap-1 border border-white/5"
                  >
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Input Area */}
            <form 
              onSubmit={handleSendMessage}
              className="p-4 bg-[#1f2937]/50 border-t border-white/5 flex items-center gap-2"
            >
              <input 
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:border-[#1E96C9] transition-colors"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button 
                type="submit"
                disabled={!message.trim() || isTyping}
                className="w-10 h-10 rounded-full bg-[#1E96C9] flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
                aria-label="Send Message"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 relative group",
          isOpen ? "bg-red-500 rotate-90" : "bg-[#25D366]"
        )}
        aria-label={isOpen ? "Close Chat" : "Open WhatsApp Chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-8 h-8 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative"
            >
              <MessageCircle className="w-8 h-8 text-white" fill="white" />
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center font-bold text-white">1</span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default WhatsAppBot;
