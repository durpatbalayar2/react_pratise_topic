function ArrayMap() {
  const userData = [
    {
      name: "Ram",
      age: "24",
      email: "ram@gmail.com",
      id: 1,
    },

    {
      name: "Sam",
      age: "20",
      email: "sam@gmail.com",
      id: 2,
    },
    {
      name: "Sita",
      age: "19",
      email: "sita@gmail.com",
      id: 3,
    },
    {
      name: "Bhuwan",
      age: "25",
      email: "bhuwan@gmail.com",
      id: 4,
    },
  ];
  return (
    <div>
      <h2>Loop in JSX with Map function</h2>

      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>

        <tbody>
          {userData.map((user)=> (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ArrayMap;
