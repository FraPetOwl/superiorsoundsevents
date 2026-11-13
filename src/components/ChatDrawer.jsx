import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  RotateCcw,
  ShoppingBag,
  ExternalLink,
  Plus,
  Check,
  ChevronDown,
  Phone,
  Info,
  Sliders
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
        text: "👋 Hi! I'm your Superior Sounds Gear & Event Assistant. Ask me about sound reinforcement, stage lighting, Pioneer DJ gear, wireless mics, or building a custom package for your Hudson Valley event!",
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
      setMessages(prev => [
        ...prev,
        {
          id: 'err-' + Date.now(),
          isBot: true,
          text: "I encountered a hiccup processing that. Please try again or feel free to call us directly at 845.790.5472!",
          products: [],
          timestamp: Date.now()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    const welcome = [
      {
        id: 'welcome',
        isBot: true,
        text: "Conversation cleared! What sound or lighting gear can I help you find today?",
        products: [],
        timestamp: Date.now()
      }
    ];
    setMessages(welcome);
    localStorage.removeItem('ss_chat_history');
  };

  const handleAddProduct = (product) => {
    addItem(product, 1);
    setAddedIds(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Ask AI Assistant"
            className="group relative flex items-center space-x-3 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/90 text-white pl-4 pr-5 py-3.5 rounded-full border border-cyan-500/50 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:border-cyan-400 transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-500"></span>
            </span>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-display font-bold tracking-wide">
                Ask AI Assistant
              </span>
            </div>
            <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 font-semibold border border-cyan-800/60">
              47 Items
            </span>
          </button>
        ) : null}
      </div>

      {/* Floating Drawer / Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-w-[460px] h-[580px] max-h-[calc(100vh-2rem)] flex flex-col bg-[#070b14]/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/80 overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="px-4 py-3.5 bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <Bot className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-display font-bold text-sm text-white">Superior Sounds AI</span>
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <p className="text-[11px] text-cyan-400/80 font-mono">
                  Inventory & Production Assistant
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={handleClear}
                title="Reset conversation"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#070b14]/60">
            {messages.map((msg) => {
              const isBot = msg.isBot;
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      isBot
                        ? 'bg-slate-900/90 text-slate-200 border border-slate-800 shadow-md'
                        : 'bg-gradient-to-r from-cyan-600 to-cyan-500 text-slate-950 font-medium shadow-md shadow-cyan-600/20'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {/* Interactive Product Embed Cards */}
                    {isBot && msg.products && msg.products.length > 0 && (
                      <div className="mt-3.5 space-y-2 border-t border-slate-800/80 pt-3">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 flex items-center justify-between">
                          <span>Recommended Gear</span>
                          <span className="text-[10px] text-slate-400">Live Inventory</span>
                        </div>
                        {msg.products.map((prod) => {
                          const isAdded = addedIds[prod.id];
                          return (
                            <div
                              key={prod.id}
                              className="flex items-center justify-between p-2 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-colors"
                            >
                              <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                                <img
                                  src={prod.image}
                                  alt={prod.name}
                                  className="w-10 h-10 object-contain rounded-lg bg-slate-900 border border-slate-800 p-1 flex-shrink-0"
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
                                  className="text-[11px] px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                                >
                                  Specs
                                </button>
                                <button
                                  onClick={() => handleAddProduct(prod)}
                                  className={`text-[11px] px-2.5 py-1 rounded font-bold flex items-center space-x-1 transition-all ${
                                    isAdded
                                      ? 'bg-emerald-500 text-slate-950'
                                      : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
                                  }`}
                                >
                                  {isAdded ? (
                                    <>
                                      <Check className="w-3 h-3" />
                                      <span>Added</span>
                                    </>
                                  ) : (
                                    <>
                                      <Plus className="w-3 h-3" />
                                      <span>Add to Quote</span>
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
              <div className="flex items-center space-x-2 text-slate-400 text-xs py-2 px-3 bg-slate-900/60 rounded-xl w-fit border border-slate-800/60">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>Searching 47 rental items & answers...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          {messages.length <= 3 && (
            <div className="px-3 py-2 bg-slate-950/70 border-t border-slate-900 overflow-x-auto flex space-x-2 no-scrollbar">
              {SUGGESTED_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="whitespace-nowrap text-[11px] px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors flex-shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Active Quote Bag Banner */}
          {items.length > 0 && (
            <div className="px-3 py-2 bg-cyan-950/40 border-t border-cyan-900/40 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1.5 text-cyan-300 font-medium">
                <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
                <span>{items.length} item{items.length > 1 ? 's' : ''} in Quote Bag</span>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsDrawerOpen(true);
                }}
                className="text-cyan-400 hover:text-cyan-300 font-bold underline flex items-center space-x-1"
              >
                <span>Review Quote</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          )}

          {/* Input Bar */}
          <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
              }}
              placeholder="Ask about speakers, lighting, DJ gear..."
              className="flex-1 bg-slate-900 text-white placeholder-slate-500 text-sm px-3.5 py-2.5 rounded-xl border border-slate-700/80 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className="p-2.5 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 disabled:opacity-40 disabled:hover:from-cyan-500 text-slate-950 rounded-xl font-bold transition-all transform active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
