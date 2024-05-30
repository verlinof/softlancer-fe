import Image from "next/image";
import { Inter } from "next/font/google";
import Login from "@/components/login";
import { GoogleOAuthProvider } from '@react-oauth/google';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const clientId = process.env.GOOGLE_CLIENT_ID;

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>;
        <div>
          <Login />
        </div>
      </GoogleOAuthProvider>
    </>
  );
}
