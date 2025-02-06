import Link from 'next/link'
import Menu from './menu'

const Header = async () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            APP_NAME
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  )
}

export default Header