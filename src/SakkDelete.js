import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export function SakkDelete() {
    const params = useParams();
    const id = params.chessId;
    const navigate = useNavigate();
    const [chess, setChess] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        axios.get(`http://localhost:3001/chess/${id}`)
            .then(response => {
                setChess(response.data);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setPending(false);
            });
    }, [id]);

    const handleDelete = (event) => {
        event.preventDefault();
        axios.delete(`http://localhost:3001/chess/${id}`)
            .then(() => {
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="p-5 m-auto text-center content bg-lavender">
            {isPending || !chess.id ? (
                <div className="spinner-border"></div>
            ) : (
                <div className="card p-3">
                    <div className="card-body">
                        <h5 className="card-title">Name: {chess.name}</h5>
                        <div className="lead">Birth date: {chess.birth_date}</div>
                        <img
                            alt={chess.name}
                            className="img-fluid rounded"
                            style={{ maxHeight: "500px" }}
                            src={chess.image_url ? chess.image_url : "https://via.placeholder.com/400x800"}
                        />
                    </div>
                    <form onSubmit={handleDelete}>
                        <div>
                            <NavLink to={"/"}><button className="bi bi-backspace">Cancel</button></NavLink>
                            
                            <button className="bi bi-trash3" color='red'>Delete</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}