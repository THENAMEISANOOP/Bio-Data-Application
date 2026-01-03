import { useState } from "react";
import { API } from "../../services/api";

const BiodataForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(form).forEach((key) => {
      data.append(key, form[key]);
    });
    data.append("image", image);

    await API.post("/biodata", data);
    onSuccess();
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Biodata</h2>

      <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <input name="dob" type="date" onChange={handleChange} required />

      <div>
        <label>
          <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
        </label>
        <label>
          <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
        </label>
      </div>

      <textarea name="address" placeholder="Address" onChange={handleChange} required />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default BiodataForm;
