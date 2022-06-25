// Framer Motion
import { motion } from "framer-motion"

// Headless UI
import { Disclosure } from "@headlessui/react"

// Heroicons
import { MenuAlt3Icon } from "@heroicons/react/outline"
import { XIcon } from "@heroicons/react/outline"

// Data
import { navigationItems } from "../data"

const Navbar = () => {
  const navigationItemsVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const navigationItemVariants = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: 0,
      transition: { type: "spring", bounce: 0.18, duration: 1.9 },
    },
  }
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="relative flex justify-between px-5 py-4 mx-auto border-b border-gray-100 max-w-7xl">
            <Disclosure.Button className="absolute inset-y-0 right-4 md:hidden">
              {open ? (
                <XIcon className="block w-6 h-6" />
              ) : (
                <MenuAlt3Icon className="block w-6 h-6" />
              )}
            </Disclosure.Button>
            <a href="#" title="Logo">
              <h1 className="w-0 overflow-hidden text-lg font-semibold text-center animate-typewriter">
                Travel
              </h1>
            </a>

            <motion.ul
              className="hidden gap-2 md:flex"
              variants={navigationItemsVariants}
              initial="hidden"
              animate="visible"
            >
              {navigationItems.map(navigationItem => {
                return (
                  <motion.li
                    key={navigationItem.name}
                    variants={navigationItemVariants}
                  >
                    <a
                      href={navigationItem.href}
                      title={navigationItem.name}
                      className={`${
                        navigationItem.active
                          ? "bg-teal-600 text-white shadow-md"
                          : "bg-transparent"
                      } rounded-md px-3 py-2 font-medium hover:bg-teal-700 hover:text-white hover:shadow-md`}
                    >
                      {navigationItem.name}
                    </a>
                  </motion.li>
                )
              })}
            </motion.ul>
          </div>
          <Disclosure.Panel className="md:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map(navigationItem => (
                <li key={navigationItem.name}>
                  <Disclosure.Button
                    as="a"
                    href={navigationItem.href}
                    className={`${
                      navigationItem.active
                        ? "bg-teal-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-teal-700 hover:shadow-md hover:text-white"
                    } block rounded-md px-3 py-2 text-base font-medium`}
                  >
                    {navigationItem.name}
                  </Disclosure.Button>
                </li>
              ))}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
