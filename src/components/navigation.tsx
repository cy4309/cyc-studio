import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-8">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-medium tracking-wide hover:opacity-70 transition-opacity"
        >
          CYC Studio
        </Link>
        <Link
          href="/works"
          className="text-lg tracking-wide hover:opacity-70 transition-opacity"
        >
          Works
        </Link>
      </div>
    </nav>
  );
}
