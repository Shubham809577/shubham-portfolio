export function IconMail({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4.5 7.5h15v9h-15v-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 8l7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconLinkedIn({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6.5 9.5V18M6.5 6.5v.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 18v-5.2c0-1.7 1-3 2.9-3 1.8 0 2.6 1.2 2.6 3V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 11.2V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.8 3.8h16.4v16.4H3.8V3.8Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function IconExternalLink({
  className = "h-3.5 w-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14 5h5v5M10 14 19 5M19 19H5V5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPhone({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6.5 4.5h3l1.5 4.5-2 1.5c1 2.5 2.8 4.3 5.3 5.3l1.5-2 4.5 1.5v3c0 .8-.7 1.5-1.5 1.5C10.2 19.8 4.2 13.8 4.2 6c0-.8.7-1.5 1.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconGitHub({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9 19.5c-4 .9-4-2-5.5-2.5M14.5 21v-3.2c0-.9.3-1.6.8-2-2.7-.3-5.6-1.3-5.6-6.1 0-1.4.5-2.5 1.3-3.4-.1-.3-.6-1.6.1-3.3 0 0 1-.3 3.4 1.3 1-.3 2-.4 3-.4s2 .1 3 .4C23.3 2.9 24.3 3.2 24.3 3.2c.7 1.7.2 3 .1 3.3.8.9 1.3 2 1.3 3.4 0 4.8-2.9 5.8-5.6 6.1.5.4.9 1.2.9 2.4V21"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

