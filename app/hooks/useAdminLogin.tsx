import { signIn, useSession } from "next-auth/react";
import { useRef } from "react";

export function useAdminLogin() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const { data: session } = useSession();

  const handleAdminLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (session && session.user) {
      // Admin already logged in (unlikely due to middleware redirect but just in case)
      console.log("Admin already logged in");
      return;
    }

    try {
      const result = await signIn("credentials", {
        username: usernameRef.current,
        password: passwordRef.current,
        redirect: true,
        callbackUrl: "/admin/dashboard",
      });
      return result;
    } catch (error: any) {
      throw new Error("Admin login failed: ", error);
    }
  };

  return { usernameRef, passwordRef, handleAdminLogin };
}
