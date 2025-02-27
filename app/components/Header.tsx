import Link from "next/link"

export default function Header() {
  return (
    <header className="py-4 px-20 flex items-center justify-between bg-white">
      <Link href="/" className="text-xl font-semibold text-primary">
        Learn<span className="text-black">ify</span>
      </Link>

      <nav className="hidden md:flex items-center space-x-8">
        <Link href="#" className="nav-link">
          Subjects
        </Link>
        <Link href="#" className="nav-link">
          Courses
        </Link>
        <Link href="#" className="nav-link">
          Degrees
        </Link>
        <Link href="#" className="nav-link">
          For business
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="text-sm text-gray-200" disabled>Sign up</button>
        <Link href="/dashboard" className="bg-primary text-white px-4 py-1.5 rounded-full text-sm">Dashboard</Link>
      </div>
    </header>
  )
}