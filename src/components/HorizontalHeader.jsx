import { useNavigate } from "react-router-dom";

const HorizontalHeader = (props) => {

  const navigate = useNavigate();

  const LogoutHandler = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    navigate('/');
  }

  const LoginHandler = (e) => {
    e.preventDefault();
    navigate('/login');
  }

  return (
    <nav className="flex items-center justify-center md:justify-between w-full">
      <div>
        <a href="/">YK Codes</a>
      </div>
      <ul className="flex flex-row gap-4">
        {!!sessionStorage.authToken ? 
          <button onClick={LogoutHandler}>logout</button> 
        : 
          <button onClick={LoginHandler}>login</button>
        }
        <li><a href="post">post</a></li>
        <li><a href="dashboard">dashboard</a></li>
      </ul>
    </nav>
  );
}
export default HorizontalHeader;