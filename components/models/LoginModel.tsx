import useLoginModel from "@/hooks/useLoginModel";
import React, { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

interface LoginModelProps {}
const LoginModel: React.FC<LoginModelProps> = ({}) => {
  const loginModel = useLoginModel();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(() => {
    try {
      setIsLoading(true);
      // TODO ADD LOG IN

      loginModel.onClose();
    } catch (error) {
      console.error(error);
    }
  }, [loginModel]);

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
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          disabled={isLoading}
        />
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
      />
    </>
  );
};

export default LoginModel;
