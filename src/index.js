// index.js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ref, onValue } from 'firebase/database';
import { db } from './firebase';
import App from './App';
import PasscodeGate from './PWgate';
import AdminPanel from './Admin';
import Mad from './Mad';
import reportWebVitals from './reportWebVitals';

function Root() {
    const [mad, setMad] = useState(null);

    useEffect(() => {
        const madRef = ref(db, 'mad');
        const unsubscribe = onValue(madRef, (snapshot) => {
            setMad(snapshot.val());
        });
        return () => unsubscribe();
    }, []);
    if (mad === null) return null;
    return (
        <PasscodeGate adminContent={<AdminPanel />}>
            {mad ? <Mad /> : <App />}
        </PasscodeGate>
    );
}

const root = ReactDOM.createRoot(document.getElementById('body'));
root.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
);

reportWebVitals();