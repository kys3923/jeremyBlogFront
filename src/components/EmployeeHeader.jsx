const EmployeeHeader = (props) => {
  return (
    <nav className="w-full bg-slate-300 flex">
      <ul className="flex gap-4 py-2">
        <li><a href='/dashboard'>Dashboard</a></li>
        <li><a href='/settings'>accounts</a></li>
        <input type='search' />
      </ul>
    </nav>
  );
}
export default EmployeeHeader;