// PasscodeGate.js
import { useState, useEffect } from 'react';
import './assets/css/style.css'

// Replace with the SHA-256 hash of your chosen passcode
const CORRECT_HASH = 'a896bb373bb28489124a9a6c59ba36718e9b4b01322438c9ba6620da947dfe44';

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

export default function PasscodeGate({ children }) {
    const [authorized, setAuthorized] = useState(false);
    const [input, setInput] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle' | 'blocked'
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (sessionStorage.getItem('authorized') === 'true') {
            setAuthorized(true);
        }
        setChecked(true);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const hashed = await sha256(input);
        if (hashed === CORRECT_HASH) {
            sessionStorage.setItem('authorized', 'true');
            setAuthorized(true);
            setStatus('idle');
        } else {
            setStatus('blocked');
        }
    };

    const handleRetry = () => {
        setInput('');
        setStatus('idle');
    };

    if (!checked) return null;

    if (authorized) return children;

    if (status === 'blocked') {
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