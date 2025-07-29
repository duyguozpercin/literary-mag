

export default function Header() {
  return (
    <header>
      <div className="top-bar flex justify-between items-center py-2 px-6 text-sm uppercase tracking-wide border-b" >
        <div className="social-icons"></div>
        <div className="search"></div>
      </div>
      <div className="site-title flex justify-center items-center py-4 text-3xl tracking-wider uppercase font-serif"></div>
      <div className="nav-bar flex justify-center gap-6 py-3 px-4 text-sm uppercase tracking-wide border-b"></div>

    </header>
  )
}