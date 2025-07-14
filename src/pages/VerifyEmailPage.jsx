import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function VerifyEmailPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get email passed from registration page
  const email = location.state?.email;

  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:8080/api/auth/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      // Save token in localStorage
      localStorage.setItem('authToken', data.token);

      alert(data.message || 'Email verified!');
      navigate('/dashboard'); // change to your dashboard path

    } catch (err) {
      console.error(err);
      setError(err.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  // If email is not available (user directly visited), redirect back
  if (!email) {
    navigate('/register');
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">
          Verify Your Email
        </h2>
        <p className="text-gray-600 text-center mb-6">
          An OTP has been sent to your email: <strong>{email}</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
              Enter OTP
            </label>
            <input
              id="otp"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-4 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl py-3 transition"
          >
            {loading ? 'Verifying...' : 'Verify Email'}
          </button>
        </form>
      </div>
    </div>
  );
}
