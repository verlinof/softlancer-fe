import { GoogleLogin } from "@react-oauth/google";
import React from "react";

const Login = () => {
  const onSuccess = (response) => {
    const tokenId = response.credential; // Ini adalah ID token yang perlu Anda verifikasi

    // Simpan token dalam variabel
    const tokenData = { token: tokenId };

    // Kirim token sebagai bagian dari objek JSON dalam permintaan fetch
    fetch(`http://127.0.0.1:8000/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tokenData), // Kirim token dalam bentuk JSON
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Tangani respons dari backend
        // Simpan token ke localStorage atau konteks
        localStorage.setItem("token", data.token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onFailure = (response) => {
    console.log("Login gagal: res:", response);
  };

  return (
    <div>
      <GoogleLogin onSuccess={onSuccess} onError={onFailure} />
    </div>
  );
};

export default Login;
