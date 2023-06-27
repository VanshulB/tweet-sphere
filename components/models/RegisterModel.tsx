import useRegisterModel from "@/hooks/useRegisterModel";
import React, { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useLoginModel from "@/hooks/useLoginModel";

interface LoginModelProps {}
const RegisterModel: React.FC<LoginModelProps> = ({}) => {
  const loginModel = useLoginModel();
  const registerModel = useRegisterModel();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) return;
    registerModel.onClose();
    loginModel.onOpen();
  }, [isLoading, registerModel, loginModel]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      // TODO REGISTER ADD LOG IN

      registerModel.onClose();
    } catch (error) {
      console.error(error);
    }
  }, [registerModel]);

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
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
          value={name}
          disabled={isLoading}
        />
        <Input
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
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

  const footerContent = (
    <>
      <div className="text-neutral-400 text-center mt-4">
        <p className="">
          Already have an Account?{" "}
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={onToggle}
          >
            Sign In
          </span>
        </p>
      </div>
    </>
  );

  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={registerModel.isOpen}
        title="Create an Account"
        actionLabel="Sign Up"
        onClose={registerModel.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default RegisterModel;
