import Link from 'next/link';
import { Rubik } from 'next/font/google';

import 'styles/styles.scss';
import './layout.scss';      

import 'public/css/fontawesome.css'
import 'public/css/brands.css'
import 'public/css/solid.css'

export const metadata = {
  title: 'hayden.works',
  description: 'hello',
};

const rubik = Rubik({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const colors = ['dark', 'blue', 'navy', 'maroon', 'orange'];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <html lang="en" className={`${rubik.className} app ${color}`}>
      <div className="app_nav">
        <Link href="/" className="app_nav_link">
          <i className="fa fa-house" />
        </Link>

        <div className="app_nav_link app_nav_link--has-children">
          <i className="fa fa-star" />
          <Link href="/best-of/2022">22</Link>
          <Link href="/best-of/2021">21</Link>
          <Link href="/best-of/2020">20</Link>
          <Link href="/best-of/2019">19</Link>
          <Link href="/best-of/2018">18</Link>
        </div>

        <div className="app_nav_social">
          <a className="app_nav_link" href="https://github.com/hkjb" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github" />
          </a>
          <a className="app_nav_link" href="https://twitter.com/teevee_boy" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter" />
          </a>
          <a className="app_nav_link" href="https://stackoverflow.com/users/4953804" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-stack-overflow" />
          </a>
        </div>
      </div>
      <body>
        <main className="app_content">
          {children}
        </main>
      </body>
    </html>
  )
};
