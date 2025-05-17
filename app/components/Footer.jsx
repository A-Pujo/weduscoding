import Link from 'next/link'
import { FaInstagram } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"

export default function Footer() {
    return (
      <footer className="footer grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 p-10 bg-base-200">
            <div>
              <p>Made with passion by <a href="https://a-pujo.web.app/" className="text-primary" target="_blank">Pujo</a></p>
              <p>© 2025 Wedus Coding. All rights reserved.</p>
            </div>
            <div>
              <h2>Follow for more!</h2>
              <Link href={`https://www.instagram.com/weduscoding/`} ><FaInstagram className='inline'/> @weduscoding</Link>
              <Link href={`mailto:wedusngoding@gmail.com`} ><IoMdMail className='inline'/> wedusngoding@gmail.com</Link>
            </div>
      </footer>
    )
}
  