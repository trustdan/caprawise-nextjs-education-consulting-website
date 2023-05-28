"use client";
import PrimaryButton from "../components/PrimaryButton";
import { useAdminLogin } from "../hooks/useAdminLogin";

export default function AdminLogin() {
  const {usernameRef, passwordRef, handleAdminLogin} = useAdminLogin();

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-270px)]">
      <div className="flex flex-col items-center justify-center w-96 h-96 bg-white rounded-xl shadow-xl gap-10">
        <h1 className="text-3xl font-bold dark:text-white">Admin Login</h1>
        <form className="flex flex-col items-center justify-center gap-8">
          <input
            className="w-full h-10 px-3  text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Username"
            onChange={(e) => {
              usernameRef.current = e.target.value;
            }}
          />
          <input
            className="w-full h-10 px-3 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              passwordRef.current = e.target.value;
            }}
          />

          <PrimaryButton
            label={{ en: "login", tr: "login" }}
            className="text-white w-[270px] h-10  bg-blue-500 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            type="submit"
            onClick={handleAdminLogin}
          />
        </form>
      </div>
    </div>
  );
}
