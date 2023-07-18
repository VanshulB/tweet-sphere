import useLoginModel from "@/hooks/useLoginModel";
import React, { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModel from "@/hooks/useRegisterModel";
import { signIn } from "next-auth/react";

interface LoginModelProps {}
const LoginModel: React.FC<LoginModelProps> = ({}) => {
  const loginModel = useLoginModel();
  const registerModel = useRegisterModel();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) return;
    loginModel.onClose();
    registerModel.onOpen();
  }, [isLoading, registerModel, loginModel]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      // TODO ADD LOG IN
      await signIn("credentials", {
        email,
        password,
      });
      loginModel.onClose();
    } catch (error) {
      console.error(error);
    }
  }, [loginModel, email, password]);

  const bodyContent = (
    <>
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          disabled={isLoading}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          disabled={isLoading}
        />
      </div>
    </>
  );

  const footerContent = (
    <>
      <div className="text-neutral-400 text-center mt-4">
        <p className="">
          First time using Tweet-Sphere?{" "}
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={onToggle}
          >
            Sign Up
          </span>
        </p>
      </div>
    </>
  );
  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={loginModel.isOpen}
        title="Login"
        actionLabel="Sign In"
        onClose={loginModel.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default LoginModel;
