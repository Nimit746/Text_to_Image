/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => {
        // toast.success("Hello")
        setIsOpen(!isOpen)
    }

    return (
        <nav className="flex flex-col md:flex-row items-center justify-between px-6 bg-linear-to-tr from-sky-400 to-sky-700 w-screen text-white">
            {/* Top bar */}
            <div className="flex items-center justify-between w-full h-16">
                <h1 className="text-2xl font-extrabold md:font-bold">Main hoon ghatokatch</h1>


                <button onClick={handleMenu} className="md:hidden">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menu items */}
            <div
                className={`flex-col md:flex-row md:flex items-center gap-6 w-full md:w-auto pb-4 md:pb-0 transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'
                    }`}
            >
                <Link
                    to="/"
                    className="hover:underline"
                    onClick={() => setIsOpen(false)}
                >
                    Home
                </Link>
                <Link
                    to="/about"
                    className="hover:underline"
                    onClick={() => setIsOpen(false)}
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    className="hover:underline"
                    onClick={() => setIsOpen(false)}
                >
                    Contact
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
