import Link from 'next/link'


const Nav = () => {
  return (
    <nav>
        <Link href="/">
            Home
        </Link>
        <Link href="/About">
            About
        </Link>
        <Link href="/Contact">
            Contact
        </Link>
    </nav>
  )
}

export default Nav