"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Search, ShoppingCart, User, Menu, X } from "lucide-react"

const Navbar = ({logo}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    };
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (<>
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-navbar backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-90" : "bg-black bg-opacity-10"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`font-bold text-xl ${isScrolled ? "text-gray-800" : "text-white"}`}>
              {logo}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/" isScrolled={isScrolled}>
                Home
              </NavLink>
              <NavLink href="/products" isScrolled={isScrolled}>
                Products
              </NavLink>
              <NavLink href="/about" isScrolled={isScrolled}>
                About
              </NavLink>
              <NavLink href="/contact" isScrolled={isScrolled}>
                Contact
              </NavLink>
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center">
            <NavIcon
              icon={<User className="h-6 w-6" />}
              label="View account"
              isScrolled={isScrolled} />
            <NavIcon
              icon={<Search className="h-6 w-6" />}
              label="Search"
              isScrolled={isScrolled} />
            <NavIcon
              icon={<ShoppingCart className="h-6 w-6" />}
              label="View shopping cart"
              isScrolled={isScrolled} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled ? "text-gray-800" : "text-white"
              } hover:bg-white hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}>
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavLink href="/" onClick={toggleMobileMenu}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/products" onClick={toggleMobileMenu}>
            Products
          </MobileNavLink>
          <MobileNavLink href="/about" onClick={toggleMobileMenu}>
            About
          </MobileNavLink>
          <MobileNavLink href="/contact" onClick={toggleMobileMenu}>
            Contact
          </MobileNavLink>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-5 space-x-3">
            <MobileNavIcon
              icon={<User className="h-6 w-6" />}
              label="View account"
              onClick={toggleMobileMenu} />
            <MobileNavIcon
              icon={<Search className="h-6 w-6" />}
              label="Search"
              onClick={toggleMobileMenu} />
            <MobileNavIcon
              icon={<ShoppingCart className="h-6 w-6" />}
              label="View shopping cart"
              onClick={toggleMobileMenu} />
          </div>
        </div>
      </div>
    </nav>
    {/* Backdrop */}
    {isMobileMenuOpen && <div
      className="fixed inset-0 bg-white bg-opacity-50 z-40"
      onClick={toggleMobileMenu}></div>}
  </>);
}

const NavLink = ({ href, children, isScrolled }) => (
  <Link
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium ${
      isScrolled ? "text-gray-800 hover:bg-gray-200" : "text-white hover:bg-white hover:bg-opacity-20"
    }`}>
    {children}
  </Link>
)

const NavIcon = ({ icon, label, isScrolled }) => (
  <button
    className={`ml-3 p-1 rounded-full ${
      isScrolled ? "text-gray-800 hover:bg-gray-200" : "text-white hover:bg-white hover:bg-opacity-20"
    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}>
    <span className="sr-only">{label}</span>
    {icon}
  </button>
)

const MobileNavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
    onClick={onClick}>
    {children}
  </Link>
)

const MobileNavIcon = ({ icon, label, onClick }) => (
  <button
    className="text-gray-800 hover:bg-gray-100 p-2 rounded-md"
    onClick={onClick}>
    <span className="sr-only">{label}</span>
    {icon}
  </button>
)

export default Navbar

