const BiodataList = ({ data }) => {
  return (
    <div>
      <h2>Biodata List</h2>

      {data.map((item) => (
        <div key={item._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <img
            src={`http://localhost:5000/${item.image}`}
            alt=""
            width="100"
          />
          <p><strong>Name:</strong> {item.fullName}</p>
          <p><strong>Email:</strong> {item.email}</p>
          <p><strong>Phone:</strong> {item.phone}</p>
          <p><strong>Gender:</strong> {item.gender}</p>
          <p><strong>DOB:</strong> {item.dob}</p>
          <p><strong>Address:</strong> {item.address}</p>
        </div>
      ))}
    </div>
  );
};

export default BiodataList;
