// PasscodeGate.js
import { useState, useEffect } from 'react';
import './assets/css/style.css'

// Replace with the SHA-256 hash of your chosen passcode
const CORRECT_HASH = 'a896bb373bb28489124a9a6c59ba36718e9b4b01322438c9ba6620da947dfe44';
const ADMIN_HASH = '19be86d8193d3b7c1a64e1c8458acb06ebfc7576b367d720bd4be08c288f3682'

async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

function Forbidden403({ onRetry }) {
    return (
        
        <div className="error-container">
            <div>
                <h1 className="display-3">Error 403: Forbidden</h1>
                <p className="lead">The request for access to this server has been noted, deliberated, and promptly denied.</p>
                <button className="btn btn-outline-secondary mt-3" onClick={onRetry}>
                    Try Again
                </button>
            </div>
        </div>
    );
}

export default function PasscodeGate({ children, adminContent }) {
    const [mode, setMode] = useState('checking');
    const [input, setInput] = useState('');

    useEffect(() => {
        const saved = sessionStorage.getItem('access_mode');
        if (saved === 'user' || saved === 'admin') {
            setMode(saved);
        } else {
            setMode('locked');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const hashed = await sha256(input);
        console.log(input)
        console.log(hashed)
        console.log(ADMIN_HASH)
        console.log(CORRECT_HASH)
        if (hashed === ADMIN_HASH) {
            sessionStorage.setItem('access_mode', 'admin');
            setMode('admin');
        }
        else if (hashed === CORRECT_HASH) {
            sessionStorage.setItem('access_mode', 'user');
            setMode('user');
        } else {
            setMode('blocked');
        }
    };

    const handleRetry = () => {
        setInput('');
        setMode('locked');
    };

    if (mode === 'checking') return null;
    if (mode === 'admin') return adminContent;
    if (mode === 'user') return children;
    if (mode === 'blocked') {
        return <Forbidden403 onRetry={handleRetry} />;
    }

    return (
        <div className="form-container">
            <div className="d-flex vh-100 justify-content-center align-items-center bg-light input-form">
                <div className="card p-4 shadow" style={{ minWidth: 320 }}>
                    <h4 className="mb-3">Enter Passcode</h4>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="password"
                            className="form-control mb-3"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            autoFocus
                        />
                        <button className="btn btn-primary w-100" type="submit">Enter</button>
                    </form>
                </div>
            </div>
        </div>
    );
}