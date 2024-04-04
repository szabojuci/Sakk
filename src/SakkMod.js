import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export function SakkMod() {
        const navigate = useNavigate();
        const params = useParams();
        const id = params.chessId;
        const [chess, setChess] = useState({
            name: '',
            birth_date: '',
            world_ch_won: 0,
            profile_url: '',
            image_url: ''
        });
    
        useEffect(() => {
            const fetchChessData = async () => {
                try {
                    const response = await axios.get(`http://localhost:3001/chess/${id}`);
                    setChess(response.data);
                } catch (error) {
                    console.log('Error fetching chess data:', error);
                }
            };
    
            fetchChessData();
        }, [id]);
    
        const handleInputChange = event => {
            const { name, value } = event.target;
            setChess(prevState => ({
                ...prevState,
                [name]: value
            }));
        };
    
        const handleSubmit = event => {
            event.preventDefault();
            axios.put(`http://localhost:3001/chess/${id}`, chess)
                .then(() => {
                    navigate("/");
                })
                .catch(error => {
                    console.log('Error updating chess data:', error);
                });
        };
    
        return (
            <div className="p-5 content bg-whitesmoke text-center">
                <h2>Mod</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group row pb-3">
                        <label className="col-sm-3 col-form-label">Name:</label>
                        <div className="col-sm-9">
                            <input type="text" name="name" className="form-control" defaultValue={chess.name} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group row pb-3">
                        <label className="col-sm-3 col-form-label">Birth date:</label>
                        <div className="col-sm-9">
                            <input type="date" name="birth_date" className="form-control" defaultValue={chess.birth_date} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group row pb-3">
                        <label className="col-sm-3 col-form-label">Won championship:</label>
                        <div className="col-sm-9">
                            <input type="number" name="world_ch_won" className="form-control" value={chess.world_ch_won.toString()} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group row pb-3">
                        <label className="col-sm-3 col-form-label">Profil URL:</label>
                        <div className="col-sm-9">
                            <input type="text" name="profile_url" className="form-control" defaultValue={chess.profile_url} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="form-group row pb-3">
                        <label className="col-sm-3 col-form-label">Image URL:</label>
                        <div className="col-sm-9">
                            <input type="text" name="image_url" className="form-control" defaultValue={chess.image_url} onChange={handleInputChange} />
                            <img src={chess.image_url} height="200px" alt={chess.name} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success">Küldés</button>
                </form>
            </div>
        );
    }
