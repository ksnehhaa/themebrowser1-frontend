import React, { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";

const ForgotPasswordModal = ({ closeModal }) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [serverMessage, setServerMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/request-reset`, { email });
      setServerMessage(res.data.message);
      setStep(2);
    } catch (err) {
      setServerMessage(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      return setServerMessage("Passwords do not match");
    }
    try {
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/request-reset`, {
        email,
        otp,
        newPassword,
      });
      setServerMessage(res.data.message);
      setTimeout(() => {
        closeModal();
      }, 2000);
    } catch (err) {
      setServerMessage(err.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6 rounded-2xl shadow-xl w-full max-w-md relative">
        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-red-400">
          <X />
        </button>

        <h3 className="text-xl font-semibold mb-4 text-center">Reset Password</h3>

        {step === 1 && (
          <>
            <p className="text-sm mb-2 text-center">Enter your registered email to receive an OTP</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-4 dark:bg-gray-800 dark:border-gray-600"
              required
            />
            <button
              onClick={handleSendOtp}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <p className="text-sm mb-2 text-center">Enter the OTP and your new password</p>
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-2 dark:bg-gray-800 dark:border-gray-600"
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-2 dark:bg-gray-800 dark:border-gray-600"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-4 dark:bg-gray-800 dark:border-gray-600"
            />
            <button
              onClick={handleResetPassword}
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </>
        )}

        {serverMessage && (
          <p className="text-sm text-center text-red-500 mt-3">{serverMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
