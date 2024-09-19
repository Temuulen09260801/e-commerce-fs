import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Signup = () => {
  return (
    <section className="h-[806px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6 w-[334px]">
        <h3 className="text-2xl font-semibold">Бүртгүүлэх</h3>
        <div className="flex flex-col w-full gap-4">
          <Input
            placeholder="Нэр"
            className="w-full rounded-[18px] px-3 py-1 text-sm"
          ></Input>
          <div className="flex flex-col gap-1">
            <Input
              placeholder="Имэйл хаяг"
              className="w-full rounded-[18px] px-3 py-1 text-sm"
            ></Input>
            <p className="w-full rounded-[18px] px-3 py-1 text-sm text-[#E11D48]">
              Зөв имэйл хаяг оруулна уу.
            </p>
          </div>
          <Input
            placeholder="Нууц үг"
            className="w-full rounded-[18px] px-3 py-1 text-sm"
          ></Input>
          <Input
            placeholder="Нууц үг давтах"
            className="w-full rounded-[18px] px-3 py-1 text-sm"
          ></Input>
          <div className=" flex flex-col gap-1">
            <p className=" bg-inherit border-none text-xs leading-[19px] text-[#71717A] underline-offset-2">
              • Том үсэг орсон байх
            </p>
            <p className=" bg-inherit border-none text-xs leading-[19px] text-[#71717A] underline-offset-2">
              • Жижиг үсэг орсон байх
            </p>
            <p className=" bg-inherit border-none text-xs leading-[19px] text-[#71717A] underline-offset-2">
              • Тоо орсон байх
            </p>
            <p className=" bg-inherit border-none text-xs leading-[19px] text-[#71717A] underline-offset-2">
              • Тэмдэгт орсон байх
            </p>
          </div>
          <Button className="w-full rounded-[18px] px-4 py-2 bg-[#2563EB] text-white">
            Үүсгэх
          </Button>
          <Button className="w-full rounded-[18px] px-4 py-2 text-[#2563EB] bg-white border-[1px] border-[#2563EB]">
            Нэвтрэх
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
