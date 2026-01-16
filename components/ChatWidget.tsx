
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: '¡Hola! Soy Shinka-Bot. ¿En qué puedo ayudarte hoy con tu proyecto digital?'}
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: 'Eres un asistente experto de la agencia digital Shinka. Shinka se especializa en Inteligencia Artificial aplicada y desarrollo Fullstack de alto rendimiento (Next.js, React). Responde de forma profesional, moderna y concisa. Si el usuario pregunta por servicios, menciona Agentes de IA, Automatización y E-commerce premium.',
        },
      });

      const botText = response.text || 'Lo siento, estoy teniendo problemas para conectar. ¿Podrías intentar de nuevo?';
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: 'Hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen && (
        <div className="mb-4 w-[350px] h-[500px] glass-card rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-6 bg-gradient-to-r from-primary to-secondary flex justify-between items-center">
            <div className="flex items-center gap-3 text-white">
              <span className="material-symbols-outlined">smart_toy</span>
              <div>
                <p className="font-bold text-sm leading-none">Shinka AI</p>
                <p className="text-[10px] opacity-80 uppercase tracking-widest mt-1">Online Now</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-black/20">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-[1.5rem] text-sm ${
                  msg.role === 'user' 
                  ? 'bg-primary text-white rounded-tr-none' 
                  : 'bg-white/5 border border-white/10 text-slate-300 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-[1.5rem] flex gap-1 items-center">
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-white/5 bg-black/40">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'ENTER' && handleSend()}
                placeholder="Escribe tu consulta..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 pr-12 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-colors p-1"
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all group"
      >
        <span className="material-symbols-outlined text-3xl transition-transform group-hover:rotate-12">
          {isOpen ? 'chat_bubble' : 'robot_2'}
        </span>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-black rounded-full"></div>
      </button>
    </div>
  );
};

export default ChatWidget;
