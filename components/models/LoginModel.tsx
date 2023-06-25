import useLoginModel from "@/hooks/useLoginModel";
import React, { useCallback, useState } from "react";

interface LoginModelProps {}
const LoginModel: React.FC<LoginModelProps> = ({}) => {
  const loginModel = useLoginModel();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const onSubmit = useCallback()
  return (
    <>
      <div></div>
    </>
  );
};

export default LoginModel;
