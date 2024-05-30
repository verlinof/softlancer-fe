import { Inter } from "next/font/google";
import Login from "@/components/login";
import { GoogleOAuthProvider } from '@react-oauth/google';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const clientId = "532428073853-42sjai5bl9o19r8r31tksi0n86v25vos.apps.googleusercontent.com";

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
