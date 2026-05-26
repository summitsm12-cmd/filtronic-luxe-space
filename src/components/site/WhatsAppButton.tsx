export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918658326019"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-brand-green/40 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-brand-green text-white shadow-elegant hover:scale-110 transition-transform duration-500">
        {/* Official WhatsApp glyph */}
        <svg
          viewBox="0 0 32 32"
          width="26"
          height="26"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.21c-.29-.15-1.72-.85-1.98-.94-.27-.1-.46-.15-.66.14-.19.29-.76.94-.93 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.49.1-.19.05-.36-.02-.51-.07-.14-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5l-.56-.01a1.07 1.07 0 00-.78.36c-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.02.14.19 2.06 3.15 5 4.42.7.3 1.24.48 1.66.62.7.22 1.34.19 1.85.12.56-.08 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34zM16.02 5.33c-5.9 0-10.7 4.79-10.7 10.69 0 1.88.49 3.72 1.43 5.33L5.25 26.7l5.52-1.45c1.55.85 3.29 1.3 5.07 1.3h.01c5.9 0 10.69-4.79 10.69-10.69 0-2.85-1.11-5.54-3.13-7.56a10.66 10.66 0 00-7.39-3.07zm0 19.55h-.01a8.86 8.86 0 01-4.52-1.24l-.32-.19-3.27.86.87-3.19-.21-.33a8.87 8.87 0 01-1.36-4.73c0-4.9 3.99-8.89 8.91-8.89 2.38 0 4.61.93 6.29 2.61a8.83 8.83 0 012.61 6.29c0 4.9-4 8.89-8.99 8.89z" />
        </svg>
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground text-background text-xs px-3 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
