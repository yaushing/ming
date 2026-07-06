// Admin.js
import { useState, useEffect } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { db } from './firebase';

export default function AdminPanel() {
    const [mad, setMad] = useState(null);

    useEffect(() => {
        const madRef = ref(db, 'mad');
        const unsubscribe = onValue(madRef, (snapshot) => {
            setMad(snapshot.val());
        });
        return () => unsubscribe();
    }, []);

    const toggle = () => {
        set(ref(db, 'mad'), !mad);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('access_mode');
        window.location.reload();
    };

    if (mad === null) return <p>Loading...</p>;

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center flex-column">
            <p className="mb-3">Current state: <strong>{mad ? 'MAD' : 'APP'}</strong></p>
            <button className="btn btn-warning mb-3" onClick={toggle}>
                Toggle to {mad ? 'App' : 'Mad'}
            </button>
            <button className="btn btn-outline-danger" onClick={handleLogout}>
                Log out
            </button>
        </div>
    );
}