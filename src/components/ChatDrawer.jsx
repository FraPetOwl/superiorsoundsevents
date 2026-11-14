import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Send,
  RotateCcw,
  ShoppingBag,
  ExternalLink,
  Plus,
  Check,
  Sliders,
  Sparkles,
  Phone
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { queryAssistant } from '../services/chatService';

const SUGGESTED_PROMPTS = [
  "What speakers do you recommend for a 150-person party?",
  "Do you rent Pioneer CDJs and mixers?",
  "What wireless microphone systems do you offer?",
  "How does warehouse pickup and delivery work?"
];

export default function ChatDrawer() {
  const { addItem, items, setQuickViewProduct, setIsDrawerOpen } = useQuote();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [addedIds, setAddedIds] = useState({});
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('ss_chat_history');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return [
      {
        id: 'welcome',
        isBot: true,
        text: "👋 Welcome to Superior Sounds. I'm your Hudson Valley Gear & Event Specialist. Ask me about tour-grade sound systems, moving head lighting, Pioneer CDJs, wireless mics, or building a custom equipment package for your event!",
        products: [],
        timestamp: Date.now()
      }
    ];
  });

  // Save chat history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ss_chat_history', JSON.stringify(messages));
    } catch (e) {
      // ignore
    }
  }, [messages]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMsg = {
      id: 'u-' + Date.now(),
      isBot: false,
      text,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const reply = await queryAssistant({
        messages,
        userMessage: text
      });

      const botMsg = {
        id: 'b-' + Date.now(),
        isBot: true,
        text: reply.text,
        products: reply.products || [],
        source: reply.source,
        timestamp: Date.now()
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        {
          id: 'err-' + Date.now(),
          isBot: true,
          text: "I'm temporarily having trouble reaching our live catalog service. Please feel free to call our warehouse directly at (845) 790-5472 or browse our catalog tabs above!",
          products: [],
          timestamp: Date.now()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddProduct = (product) => {
    addItem(product, 1);
    setAddedIds(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  const handleClear = () => {
    localStorage.removeItem('ss_chat_history');
    setMessages([
      {
        id: 'welcome-' + Date.now(),
        isBot: true,
        text: "Conversation reset. What equipment or event details can I help you spec out today?",
        products: [],
        timestamp: Date.now()
      }
    ]);
  };

  return (
    <>
      {/* Floating Gear Specialist Console Button (NO FLASHING BLUE DOT) */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Gear & Sound Specialist"
            className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-[#0e1424] hover:bg-[#141d33] text-white border border-slate-700/80 hover:border-cyan-500/50 shadow-2xl shadow-black/60 transition-all duration-200 group tap-squash"
          >
            {/* Steady Studio Ready LED */}
            <span className="flex items-center justify-center w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]"></span>

            <div className="flex items-center space-x-2">
              <Sliders className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-200" />
              <span className="text-xs sm:text-sm font-display font-bold tracking-wide text-slate-100">
                Gear Specialist
              </span>
            </div>

            <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-semibold border border-slate-700">
              47 Items Online
            </span>
          </button>
        ) : null}
      </div>

      {/* Floating Console / Specialist Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-w-[460px] h-[580px] max-h-[calc(100vh-2rem)] flex flex-col bg-[#090d18] backdrop-blur-xl border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden animate-scaleUp">
          {/* Studio Console Header */}
          <div className="px-4 py-3 bg-[#0d1322] border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                <Sliders className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-display font-bold text-sm text-white">Audio & Gear Specialist</span>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono">
                  Live Hudson Valley Inventory
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={handleClear}
                title="Reset conversation"
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors tap-squash"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close console"
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors tap-squash"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#070a14]">
            {messages.map((msg) => {
              const isBot = msg.isBot;
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                      isBot
                        ? 'bg-[#111728] text-slate-200 border border-slate-800/90 shadow-sm'
                        : 'bg-cyan-600 text-white font-medium shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {/* Interactive Product Embed Cards */}
                    {isBot && msg.products && msg.products.length > 0 && (
                      <div className="mt-3.5 space-y-2 border-t border-slate-800 pt-3">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 flex items-center justify-between">
                          <span>Matching Inventory</span>
                          <span className="text-[10px] text-slate-400">Available to Rent</span>
                        </div>
                        {msg.products.map((prod) => {
                          const isAdded = addedIds[prod.id];
                          return (
                            <div
                              key={prod.id}
                              className="flex items-center justify-between p-2 rounded-lg bg-[#0a0f1c] border border-slate-800 hover:border-slate-700 transition-colors"
                            >
                              <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                                <img
                                  src={prod.image}
                                  alt={prod.name}
                                  className="w-10 h-10 object-contain rounded bg-slate-900 border border-slate-800 p-1 flex-shrink-0"
                                  onError={(e) => { e.target.src = '/images/djm-900nxs2.jpg'; }}
                                />
                                <div className="min-w-0">
                                  <div className="text-xs font-bold text-white truncate">
                                    {prod.name}
                                  </div>
                                  <div className="text-[11px] text-cyan-400 font-medium">
                                    ${prod.price}/day
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center space-x-1.5 flex-shrink-0">
                                <button
                                  onClick={() => setQuickViewProduct(prod)}
                                  title="View specs"
                                  className="text-[11px] px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors tap-squash"
                                >
                                  Specs
                                </button>
                                <button
                                  onClick={() => handleAddProduct(prod)}
                                  className={`text-[11px] px-2.5 py-1 rounded font-bold flex items-center space-x-1 transition-all tap-squash ${
                                    isAdded
                                      ? 'bg-emerald-500 text-slate-950'
                                      : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
                                  }`}
                                >
                                  {isAdded ? (
                                    <>
                                      <Check className="w-3 h-3 stroke-[3]" />
                                      <span>Added</span>
                                    </>
                                  ) : (
                                    <>
                                      <Plus className="w-3 h-3 stroke-[3]" />
                                      <span>+ Add</span>
                                    </>
                                  )}
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-center space-x-2 text-slate-400 text-xs py-2 px-3 bg-slate-900/80 rounded-lg w-fit border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>Checking live specifications...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel (Hick's Law - fast curated options) */}
          {messages.length <= 3 && (
            <div className="px-3 py-2 bg-[#0a0e1a] border-t border-slate-800/80 overflow-x-auto flex space-x-2 scrollbar-none">
              {SUGGESTED_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="whitespace-nowrap text-[11px] px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex-shrink-0 tap-squash"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Active Quote Bag Banner */}
          {items.length > 0 && (
            <div className="px-3 py-2 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1.5 text-slate-300 font-medium">
                <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
                <span>{items.length} item{items.length > 1 ? 's' : ''} in Quote Bag</span>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsDrawerOpen(true);
                }}
                className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center space-x-1 tap-squash"
              >
                <span>Review Estimate</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* Input Bar (Fitts's Law: comfortable touch inputs) */}
          <div className="p-3 bg-[#0d1322] border-t border-slate-800 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              placeholder="Ask about speakers, lighting, DJ gear..."
              className="flex-1 bg-slate-900 text-white placeholder-slate-500 text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-700/80 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className="p-2.5 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-slate-950 rounded-xl font-bold transition-all tap-squash"
            >
              <Send className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
