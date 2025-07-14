import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // form state
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // handle input changes
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(form.email, form.password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className="relative bg-indigo-50 min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(/assets/images/registration-bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-indigo-50 opacity-90"></div>

        <div className="relative z-10 w-full max-w-md mx-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-extrabold text-indigo-900 mb-2">
              Log in
            </h2>
            <p className="mb-6 text-gray-700">
              Don’t have an account?{' '}
              <Link to="/register" className="text-purple-600 hover:underline">
                Register here.
              </Link>
            </p>

            {/* error message */}
            {error && <p className="mb-4 text-red-600">{error}</p>}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-indigo-900 mb-1"
                >
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-indigo-900 mb-1"
                >
                  Password*
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="inline-flex items-center text-gray-700">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={form.remember}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-purple-600"
                  />
                  <span className="ml-2">Remember Me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-indigo-600 hover:underline"
                >
                  Forget Password
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-600 text-white font-medium rounded-lg py-3 shadow hover:bg-purple-700 transition disabled:opacity-50"
              >
                {loading ? 'Logging in…' : 'Login'}
              </button>
            </form>
          </div>
        </div>

        <Link
          to="#"
          className="absolute bottom-8 right-8 bg-purple-600 p-3 rounded-full shadow-lg text-white hover:bg-purple-700 transition"
        >
          <i className="fas fa-angles-up"></i>
        </Link>
      </div>
    </>
  );
}



// import { Link } from "react-router-dom";



// export default function LoginPage() {
//   return (
//     <>
//       <div
//         className="relative bg-indigo-50 min-h-screen flex items-center justify-center overflow-hidden"
//         style={{ backgroundImage: `url(/assets/images/registration-bg.png)`, backgroundSize: "cover",backgroundPosition: 'center', }}
//       >
//         {/* translucent overlay */}
//         <div className="absolute inset-0 bg-indigo-50 opacity-90"></div>

//         <div className="relative z-10 w-full max-w-md mx-4">
//           <div className="bg-white rounded-2xl shadow-2xl p-8">
//             <h2 className="text-3xl font-extrabold text-indigo-900 mb-2">
//               Log in
//             </h2>
//             <p className="mb-6 text-gray-700">
//               Don’t have an account?{" "}
//               <Link to="/register" className="text-purple-600 hover:underline">
//                 Register here.
//               </Link>
//             </p>

//             <form className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-indigo-900 mb-1"
//                 >
//                   Email*
//                 </label>
//                 <input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   required
//                   className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-indigo-900 mb-1"
//                 >
//                   Password*
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   placeholder="Password"
//                   required
//                   className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
//                 />
//               </div>

//               <div className="flex items-center justify-between">
//                 <label className="inline-flex items-center text-gray-700">
//                   <input
//                     type="checkbox"
//                     className="form-checkbox h-5 w-5 text-purple-600"
//                   />
//                   <span className="ml-2">Remember Me</span>
//                 </label>
//                 <Link
//                   to="/forgot-password"
//                   className="text-indigo-600 hover:underline"
//                 >
//                   Forget Password
//                 </Link>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-purple-600 text-white font-medium rounded-lg py-3 shadow hover:bg-purple-700 transition"
//               >
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* scroll to top anchor */}
//         <Link
//           to="#"
//           className="absolute bottom-8 right-8 bg-purple-600 p-3 rounded-full shadow-lg text-white hover:bg-purple-700 transition"
//         >
//           <i className="fas fa-angles-up"></i>
//         </Link>
//       </div>

   
//     </>
//   );
// }
