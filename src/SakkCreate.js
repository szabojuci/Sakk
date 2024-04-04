import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
export function SakkCreate(props) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        birth_date: '',
        world_ch_won: '',
        profile_url: '',
        image_url: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3001/chess`, formData);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-5 content bg-whitesmoke text-center">
            <h2>New chesser</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Name:</label>
                    <div className="col-sm-9">
                        <input type="text" name="name" className="form-control" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Birth date:</label>
                    <div className="col-sm-9">
                        <input type="date" name="birth_date" className="form-control" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Won championship:</label>
                    <div className="col-sm-9">
                        <input type="number" name="world_ch_won" className="form-control" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Profil URL:</label>
                    <div className="col-sm-9">
                        <input type="text" name="profile_url" className="form-control" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Image URL:</label>
                    <div className="col-sm-9">
                        <input type="text" name="image_url" className="form-control" onChange={handleChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">
                    Küldés
                </button>
            </form>
        </div>
    );
    
}