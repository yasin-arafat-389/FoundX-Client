/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";

import FXForm from "@/src/components/form/FXForm";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginValidationSchema from "@/src/schemas/login.schema";
import FXInput from "@/src/components/form/FXInput";

const LoginPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <FXForm
          resolver={zodResolver(loginValidationSchema)}
          onSubmit={onSubmit}
        >
          <div className="py-3">
            <FXInput label="Email" name="email" type="email" />
          </div>
          <div className="py-3">
            <FXInput label="Password" name="password" type="password" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
            size="lg"
            type="submit"
          >
            Login
          </Button>
        </FXForm>
        <div className="text-center">
          Don&lsquo;t have account ? <Link href={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
