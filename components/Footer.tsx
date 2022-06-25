// Data
import { navigationItems } from "../data"

const Footer = () => {
  return (
    <footer className="py-4 text-white bg-teal-600">
      <div className="px-5 mx-auto mb-4 max-w-7xl">
        <ul className="flex items-center justify-center gap-3 p-0 font-medium md:gap-4">
          {navigationItems.map(navigationItem => (
            <li key={navigationItem.name}>
              <a
                href={navigationItem.href}
                className="text-sm text-white hover:underline"
              >
                {navigationItem.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-sm text-center">
        Travel &copy; {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
