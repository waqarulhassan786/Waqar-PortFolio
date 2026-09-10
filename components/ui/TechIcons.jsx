export default function TechIcon({ name, className = "h-5 w-5" }) {
  switch (name) {
    case "React.js":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="2.2" fill="#58c4dc" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#58c4dc" strokeWidth="1.4" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#58c4dc" strokeWidth="1.4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="#58c4dc" strokeWidth="1.4" transform="rotate(-60 12 12)" />
        </svg>
      );
    case "Next.js":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="#fff" />
          <path d="M16.8 16.9L10.2 8H8.6v8h1.3v-6.2l5.7 7.7A10.1 10.1 0 0016.8 16.9z" fill="#0c0c0d" />
          <path d="M15.4 8h-1.3v8h1.3V8z" fill="#0c0c0d" />
        </svg>
      );
    case "JavaScript":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#f7df1e" />
          <path d="M11 7v8.2c0 2.1-1.2 2.7-3 2.7-.6 0-1.6-.1-2.2-.4l.4-1.8c.4.2 1 .4 1.5.4.8 0 1.3-.3 1.3-1.5V7H11zm8.3 6.7c0-2.2-1.3-3.2-3.5-3.7-1.2-.3-1.5-.5-1.5-1s.5-.8 1.4-.8c.8 0 1.5.2 2 .6l.6-1.8c-.7-.4-1.7-.7-2.7-.7-2.1 0-3.5 1.1-3.5 2.9 0 2 1.2 2.9 3.4 3.4 1.3.3 1.7.6 1.7 1.1 0 .6-.6 1-1.6 1-1 0-1.9-.3-2.6-.8l-.6 1.8c.8.5 1.9.8 3.1.8 2.3 0 3.8-1.1 3.8-3z" fill="#0c0c0d" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#3178c6" />
          <text x="4" y="16.5" fill="#fff" fontSize="8.5" fontFamily="ui-sans-serif, system-ui" fontWeight="700">
            TS
          </text>
        </svg>
      );
    case "Node.js":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#5fa04e" aria-hidden="true">
          <path d="M12 2.2l8.2 4.7v9.4L12 21.1 3.8 16.3V6.9L12 2.2zm0 2.3L6 8v7.2l6 3.4 6-3.4V8l-6-3.5z" />
          <path d="M11 9h2.2c1.6 0 2.6.8 2.6 2.2 0 1.4-1 2.2-2.6 2.2H12.4V16H11V9zm1.4 3.2h.7c.7 0 1.1-.3 1.1-1s-.4-1-1.1-1h-.7v2z" />
        </svg>
      );
    case "Express.js":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#fafafa" />
          <text x="3.4" y="16" fill="#0c0c0d" fontSize="8" fontFamily="ui-sans-serif, system-ui" fontWeight="800">
            ex
          </text>
        </svg>
      );
    case "MongoDB":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#00ed64" d="M12.4 2s.3 2.4-.4 4.1c1.8 2.2 2.9 5 2.6 8.1-.2 2.4-1.4 4.1-2.4 5.1l-.4 2.7h-.4l-.4-2.6c-1.8-1.5-2.8-3.8-2.6-6.4.3-3.4 1.8-5.8 3.4-7.6C11.3 4.2 12.4 2 12.4 2z" />
        </svg>
      );
    case "Tailwind":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#38bdf8" aria-hidden="true">
          <path d="M12 6.5c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.4-1.5.7.2 1.2.7 1.8 1.3.9 1 2 2.2 4.8 2.2 2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.2-.7-1.8-1.3C15.9 7.7 14.8 6.5 12 6.5zM7 12.5c-2.7 0-4.4 1.3-5 4 1-1.3 2.1-1.8 3.4-1.5.7.2 1.2.7 1.8 1.3.9 1 2 2.2 4.8 2.2 2.7 0 4.4-1.3 5-4-1 1.3-2.1 1.8-3.4 1.5-.7-.2-1.2-.7-1.8-1.3-1-.9-2.1-2.2-4.8-2.2z" />
        </svg>
      );
    case "Git":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#f05032" aria-hidden="true">
          <path d="M21.6 11.1L12.9 2.4a1.4 1.4 0 00-2 0L9.3 4l2.5 2.5a1.7 1.7 0 012.1 2.1l2.4 2.4a1.7 1.7 0 11-1 1l-2.2-2.2v5.8a1.7 1.7 0 11-1.4.1V10.7a1.7 1.7 0 01-.9-2.2L8.4 6 2.4 12a1.4 1.4 0 000 2l8.7 8.7a1.4 1.4 0 002 0l8.5-8.5a1.4 1.4 0 000-2z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3z" />
        </svg>
      );
    case "JWT":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#d63aff" aria-hidden="true">
          <path d="M12 3l7 4v6.5c0 4.2-2.9 7.1-7 8.5-4.1-1.4-7-4.3-7-8.5V7l7-4zm0 2.2L7 8v5.4c0 3 1.9 5.1 5 6.3 3.1-1.2 5-3.3 5-6.3V8l-5-2.8z" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "Postman":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="#ff6c37" />
          <path d="M7 12.2l8.6-4.2-3.4 8.7-1.8-3.1L7 12.2z" fill="#fff" />
        </svg>
      );
    case "Jira":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#2684ff" aria-hidden="true">
          <path d="M12 3l7.2 7.2c2 2 2 5.2 0 7.2L12.8 23c.9-2.4.4-5.2-1.5-7.1L6 10.6 12 3zm0 7.1l4.1 4.1c1.1 1.1 1.1 3 0 4.1L12 22.5c.5-1.4.2-3-1-4.2L7.4 14.6 12 10.1z" />
        </svg>
      );
    case "Cursor":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#18181b" stroke="#e4e4e7" strokeWidth="1.2" />
          <path d="M8 7l8 4.5L8 16V7z" fill="#fafafa" />
        </svg>
      );
    case "Claude":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#d4a574" />
          <path d="M7.5 16.5L12 6.5l4.5 10H14l-2-4.6L10 16.5H7.5z" fill="#1c1410" />
        </svg>
      );
    case "GitHub Copilot":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <rect width="24" height="24" rx="6" fill="#0d1117" stroke="#7ee787" strokeWidth="1.2" />
          <path d="M8 15.5c1.2-1.8 2.2-2.7 4-2.7s2.8.9 4 2.7" stroke="#7ee787" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          <circle cx="9.2" cy="10" r="1.2" fill="#7ee787" />
          <circle cx="14.8" cy="10" r="1.2" fill="#7ee787" />
        </svg>
      );
    default:
      return <span className={className} />;
  }
}
