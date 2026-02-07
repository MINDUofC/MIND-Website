"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const CHAT_EMBED_URL = "/chat-embed?embed=1";

export function MetaclonedChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const openChat = () => {
    setIframeLoaded(false);
    setIsOpen(true);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const modal = isOpen && (
    <div
      className="chat-backdrop-enter fixed inset-0 z-[9998] bg-black/40 backdrop-blur-[2px]"
      onClick={(e) => e.target === e.currentTarget && closeChat()}
      role="dialog"
      aria-modal="true"
      aria-label="AI chat"
    >
      <div
        className="chat-panel-enter fixed right-6 flex flex-col overflow-hidden rounded-2xl bg-white"
        style={{
          bottom: "5.5rem",
          width: "min(420px, 100vw - 3rem)",
          height: "min(720px, calc(100vh - 7rem))",
          minHeight: "480px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 41, 96, 0.06)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex shrink-0 items-center justify-between gap-3 px-4 py-3"
          style={{
            borderBottom: "1px solid rgba(0, 41, 96, 0.08)",
            background: "linear-gradient(180deg, rgba(0, 41, 96, 0.03) 0%, transparent 100%)",
          }}
        >
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[#85C7F2]"
              style={{ backgroundColor: 'rgba(0, 41, 96, 0.08)' }}
              aria-hidden
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M4.913 2.658c3.225-1.178 6.834-1.178 10.059 0 1.978.722 3.348 2.152 4.07 4.13.723 1.977.723 4.186 0 6.163-.722 1.978-2.092 3.408-4.07 4.13Z" />
              </svg>
            </span>
            <span
              className="text-[15px] font-semibold tracking-tight"
              style={{ color: '#002960' }}
            >
              Chat with MIND
            </span>
          </div>
          <button
            type="button"
            onClick={closeChat}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#85C7F2] focus:ring-offset-1"
            aria-label="Close chat"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="relative min-h-0 flex-1 bg-[#fafbfc]">
          {!iframeLoaded && (
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-b-2xl px-6"
              style={{ backgroundColor: '#f8fafc' }}
            >
              <div
                className="h-9 w-9 animate-spin rounded-full border-2 border-[#002960]/20 border-t-[#002960]"
                aria-hidden
              />
              <p className="text-sm font-medium text-gray-500" style={{ color: '#002960' }}>
                Opening chat…
              </p>
              <div className="flex w-full max-w-[200px] flex-col gap-2">
                <div className="h-3 w-full rounded-full opacity-40 bg-[#85C7F2]" />
                <div className="h-3 w-full rounded-full opacity-40 bg-[#85C7F2]" />
                <div className="h-3 w-full rounded-full opacity-40 bg-[#85C7F2]" />
              </div>
            </div>
          )}
          <iframe
            src={CHAT_EMBED_URL}
            title="MetaCloned AI Chat"
            className="absolute inset-0 h-full w-full rounded-b-2xl border-0"
            style={{ minHeight: "400px" }}
            onLoad={() => setIframeLoaded(true)}
          />
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;

  return (
    <>
      <button
        type="button"
        onClick={openChat}
        className="fixed z-[9999] flex items-center justify-center rounded-full transition-all duration-300 hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#85C7F2] bottom-5 right-5 h-16 w-16 min-[480px]:bottom-6 min-[480px]:right-6 min-[480px]:h-[4.5rem] min-[480px]:w-[4.5rem] sm:bottom-7 sm:right-7 sm:h-20 sm:w-20 md:bottom-8 md:right-8 md:h-[5.25rem] md:w-[5.25rem] lg:h-24 lg:w-24"
        style={{
          backgroundColor: "#002960",
          color: "#85C7F2",
          boxShadow: "0 6px 20px rgba(0, 41, 96, 0.45), 0 0 0 1px rgba(133, 199, 242, 0.2), 0 0 24px rgba(133, 199, 242, 0.15)",
        }}
        aria-label="Open AI chat"
        title="Chat with MIND"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 min-[480px]:h-7 min-[480px]:w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10"
          aria-hidden
        >
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.5.348 2.91.96 4.17L2.04 21.04 7.83 20.04A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
      </button>

      {mounted && createPortal(isOpen ? modal : null, document.body)}
    </>
  );
}
