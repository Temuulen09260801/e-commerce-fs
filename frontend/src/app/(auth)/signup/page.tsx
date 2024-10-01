"use client";
import { apiUrl } from "@/app/utils/util";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Signup = () => {
  const router = useRouter();

  interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    repassword: string;
  }

  const [userData, setUserData] = useState<IUser>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
  });

  const signUp = async () => {
    const { firstname, lastname, email, password, repassword } = userData;

    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/v1/auth/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, firstname, lastname, password }),
      });

      if (response.status === 201) {
        toast.success("Хэрэглэгч амжилттай бүртгэгдлээ", { autoClose: 1000 });
        router.push("/login");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  return (
    <section className="h-[806px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6 w-[334px]">
        <h3 className="text-2xl font-semibold">Бүртгүүлэх</h3>
        <div className="flex flex-col w-full gap-4">
          <Input
            placeholder="Нэр"
            className="w-full rounded-[18px] px-3 py-1 text-sm"
            value={userData.firstname}
            onChange={(e) =>
              setUserData({ ...userData, firstname: e.target.value })
            }
          ></Input>
          <Input
            placeholder="Овог"
            className="w-full rounded-[18px] px-3 py-1 text-sm"
            value={userData.lastname}
            onChange={(e) =>
              setUserData({ ...userData, lastname: e.target.value })
            }
          ></Input>
          <div className="flex flex-col gap-1">
            <Input
              placeholder="Имэйл хаяг"
              className="w-full rounded-[18px] px-3 py-1 text-sm"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            ></Input>
            <p className="w-full rounded-[18px] px-3 py-1 text-sm text-[#E11D48]">
              Зөв имэйл хаяг оруулна уу.
            </p>
          </div>
          <Input
            type="password"
            placeholder="Нууц үг"
            className="w-full rounded-[18px] px-3 py-1 text-sm"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          ></Input>
          <Input
            type="password"
            placeholder="Нууц үг давтах"
            className="w-full rounded-[18px] px-3 py-1 text-sm"
            value={userData.repassword}
            onChange={(e) =>
              setUserData({ ...userData, repassword: e.target.value })
            }
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
          <Button
            className="w-full rounded-[18px] px-4 py-2 bg-[#2563EB] text-white"
            onClick={signUp}
          >
            Үүсгэх
          </Button>
          <Link href="/login">
            <Button className="w-full rounded-[18px] px-4 py-2 text-[#2563EB] bg-white border-[1px] border-[#2563EB]">
              Нэвтрэх
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Signup;
