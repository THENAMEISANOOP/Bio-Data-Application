import { useState } from "react";
import { API } from "../services/api";

const BiodataForm = ({ onSuccess }) => {
  const [form, setForm] = useState({});
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));
    data.append("image", image);

    await API.post("/biodata", data);
    onSuccess();
    e.target.reset();
  };

  return (
    <div className="form-box">
      <h2>Add Biodata</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input name="fullName" placeholder="Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        </div>

        <div className="form-row">
          <input name="phone" placeholder="Phone" onChange={handleChange} required />
          <input name="dob" type="date" onChange={handleChange} required />
        </div>

        <div className="radio-group">
          <label>
            <input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
          </label>
        </div>

        <textarea name="address" placeholder="Address" onChange={handleChange} required />

        <input
          className="file-input"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default BiodataForm;
