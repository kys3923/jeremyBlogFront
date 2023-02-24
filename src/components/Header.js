const Header = (props) => {
  return (
    <nav className="w-full h-8 bg-slate-500 text-white flex items-center justify-between">
      <ul className="flex flex-row gap-2">
        <li><a href="/">Website</a></li>
        <li><a href="memo">memo</a></li>
        <li><a href="login">login</a></li>
        <li><a href="post">post</a></li>
      </ul>
      <input type='search' />
    </nav>
  );
}
export default Header;