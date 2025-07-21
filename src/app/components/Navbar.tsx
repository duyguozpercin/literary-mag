

export default function Navbar() {
return (
    <nav className="bg-rose-100 p-4 w-full h-20">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4 justify-center text-gray-800">
          <li><a href=""></a>Öyküler</li>
          <li><a href=""></a>Podcast</li>
          <li><a href=""></a>Hakkımda</li>
          </ul>
      </div>
    </nav>

);
}