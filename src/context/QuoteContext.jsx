import React, { createContext, useContext, useState, useEffect } from 'react';

const QuoteContext = createContext();

export function QuoteProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('ss_quote_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [startDate, setStartDateState] = useState(() => {
    try {
      const saved = localStorage.getItem('ss_quote_start_date');
      if (saved) return saved;
      const d = new Date();
      d.setDate(d.getDate() + 1);
      return d.toISOString().split('T')[0];
    } catch {
      return '';
    }
  });

  const [endDate, setEndDateState] = useState(() => {
    try {
      const saved = localStorage.getItem('ss_quote_end_date');
      if (saved) return saved;
      const d = new Date();
      d.setDate(d.getDate() + 2);
      return d.toISOString().split('T')[0];
    } catch {
      return '';
    }
  });

  // Postel's law: forgiving and auto-sanitizing date selection
  const setStartDate = (newStart) => {
    setStartDateState(newStart);
    if (newStart && endDate && new Date(newStart) >= new Date(endDate)) {
      const nextDay = new Date(newStart);
      nextDay.setDate(nextDay.getDate() + 1);
      setEndDateState(nextDay.toISOString().split('T')[0]);
    }
  };

  const setEndDate = (newEnd) => {
    if (startDate && newEnd && new Date(newEnd) < new Date(startDate)) {
      setEndDateState(startDate);
    } else {
      setEndDateState(newEnd);
    }
  };

  const [fulfillment, setFulfillment] = useState('pickup'); // 'pickup' | 'delivery'
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [bagBounced, setBagBounced] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ss_quote_items', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  useEffect(() => {
    try {
      localStorage.setItem('ss_quote_start_date', startDate);
      localStorage.setItem('ss_quote_end_date', endDate);
    } catch (e) {
      console.error(e);
    }
  }, [startDate, endDate]);

  // Calculate rental duration in days (minimum 1 day)
  const calculateDays = () => {
    if (!startDate || !endDate) return 1;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const rentalDays = calculateDays();

  // Add item with secondary action trigger
  const addItem = (product, quantity = 1) => {
    // Trigger cart bounce animation
    setBagBounced(true);
    setTimeout(() => setBagBounced(false), 600);

    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  // Remove item
  const removeItem = (productId) => {
    setItems(prev => prev.filter(i => i.id !== productId));
  };

  // Update quantity
  const updateQty = (productId, quantity) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems(prev =>
      prev.map(i => (i.id === productId ? { ...i, quantity } : i))
    );
  };

  // Clear quote
  const clearQuote = () => {
    setItems([]);
  };

  // Total item count
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Subtotal estimated
  const subtotal = items.reduce((sum, item) => {
    return sum + item.price * item.quantity * rentalDays;
  }, 0);

  return (
    <QuoteContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQty,
        clearQuote,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        rentalDays,
        fulfillment,
        setFulfillment,
        isDrawerOpen,
        setIsDrawerOpen,
        quickViewProduct,
        setQuickViewProduct,
        totalItemCount,
        subtotal,
        bagBounced
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
