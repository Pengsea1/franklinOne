import Link from "next/link";

export const runtime = 'edge';

export default function DisabledNewsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-white px-4">
      <div className="max-w-lg w-full bg-white/80 rounded-xl shadow-xl p-8 border border-gray-100 flex flex-col items-center">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
          <circle cx="32" cy="32" r="30" fill="#fff0f0" stroke="#f15a22" strokeWidth="3" />
          <path d="M22 26L32 36L42 26" stroke="#f15a22" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="29" y="38" width="6" height="6" rx="3" fill="#f15a22" />
        </svg>
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-2">Page Temporarily Disabled</h1>
        <p className="text-gray-600 mb-6 text-center">
          The news article you are trying to access is currently unavailable.<br />
          Please check back later or return to the {" "}
          <Link href="/news" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)] transition">News page</Link>.
        </p>
        <Link href="/news" className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold py-2 px-6 rounded-md shadow transition-all duration-200">Back to News</Link>
      </div>
    </div>
  );
}
