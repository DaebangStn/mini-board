export const fetch_login = async (id, pwd) => {
  const response = await fetch("http://localhost:8888/users");

  if(response.ok){
    const users = await response.json();
    const user = users.find((user) => user.id === id);
    if(!user || user.pwd !== pwd){
      throw new Error("Invalid user account");
    }

    return user;
  }

  throw new Error("Invalid server connection");
};