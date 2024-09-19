import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Login = () => {
  return (
    <section className="h-[806px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6 w-[334px]">
        <h3 className="text-2xl font-semibold">Нэвтрэх</h3>
        <div className="flex flex-col w-full gap-4">
          <Input
            placeholder="Имэйл хаяг"
            className="w-full rounded-[18px] px-3 py-1 text-sm"
          ></Input>
          <Input
            placeholder="Нууц үг"
            className="w-full rounded-[18px] px-3 py-1 text-sm"
          ></Input>
          <Button className="w-full rounded-[18px] px-4 py-2 bg-[#2563EB] text-white">
            Нэвтрэх
          </Button>
          <Button className="w-1/2 m-auto bg-inherit border-none text-sm text-[#71717A] underline-offset-2">
            Нууц үг мартсан
          </Button>
          <Button className="w-full rounded-[18px] px-4 py-2 text-[#2563EB] bg-white border-[1px] border-[#2563EB]">
            Бүртгүүлэх
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
