import { useState } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState({});

  function getUserName(e) {
    e.preventDefault();
    setUserName(e.target.value);
    console.log(userName);
  }

  async function getData() {
    if (userName !== "") {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      setUser(data);
      console.log(data);
    } else {
      alert("Please enter a user name");
    }
  }

  console.log(user);
  return (
    <>
      <div className="navbar">
        <div className="">
          <input
            className="input"
            type="text"
            placeholder="Enter User Name"
            value={userName}
            onChange={(e) => getUserName(e)}
          />
          <button className="btn" onClick={() => getData()}>
            Get Data
          </button>
        </div>
      </div>
      <div className="app">
        {Object.keys(user).length === 0 ? null : (
          <div className="infoContainer">
            <div className="avatar">
              <img
                src={user?.avatar_url}
                alt="avatar"
                width="280px"
                height="280px"
              />
            </div>
            <div className="info">
              <div className="infoleft">
                <h3 className="box">Name: {user.name}</h3>
                <p className="box">Location: {user?.location}</p>
                <p className="box">Follower: {user?.followers}</p>
              </div>
              <div className="inforight">
                <h3 className="box">
                  Portfolio:{" "}
                  <a href={user?.url} target="_blank" rel="noreferrer">
                    portfolio
                  </a>
                </h3>
                <p className="box">Public repos: {user?.public_repos}</p>
                <p className="box">Bio: {user?.bio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
