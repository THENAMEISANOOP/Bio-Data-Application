const BiodataList = ({ data }) => {
  return (
    <div className="list-box">
      <h2>Biodata List</h2>

      {data.map((item) => (
        <div className="list-item" key={item._id}>
          <img src={`http://localhost:5000/${item.image}`} alt="profile" />

          <div className="list-details">
            <p><strong>Name:</strong> {item.fullName}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Phone:</strong> {item.phone}</p>
            <p><strong>Gender:</strong> {item.gender}</p>
            <p><strong>DOB:</strong> {item.dob}</p>
            <p><strong>Address:</strong> {item.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BiodataList;
