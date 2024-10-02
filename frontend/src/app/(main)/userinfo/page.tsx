import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function UserInfo() {
  return (
    <main className=" bg-[#f7f7f8] pt-[60px] pb-24">
      <section className="  max-w-[1100px] mx-auto h-[calc(100vh-363px)]">
        <div className="flex gap-[20px] text-sm">
          <div className="w-[244px]">
            <p className=" px-4 py-2 font-medium bg-white rounded-2xl">
              Хэрэглэгчийн хэсэг
            </p>
            <p className=" px-4 py-2 font-medium rounded-2xl">Захиалгын түүх</p>
          </div>
          <div className="w-full">
            <h3 className="text-[18px] font-bold text-[#09090B] pb-6 border-b-[1px] border-[#E4E4E7]">
              Хэрэглэгчийн хэсэг
            </h3>
            <div className="mt-6">
              <p className="text-sm font-medium mb-2">Овог:</p>
              <Input className="bg-white border-[1px] border-[#E4E4E7] px-3 py-1 rounded-full" />
              <p className="text-sm font-medium mb-2 mt-4">Нэр:</p>
              <Input className="bg-white border-[1px] border-[#E4E4E7] px-3 py-1 rounded-full" />
              <p className="text-sm font-medium mb-2 mt-4">Утасны дугаар:</p>
              <Input className="bg-white border-[1px] border-[#E4E4E7] px-3 py-1 rounded-full" />
              <p className="text-sm font-medium mb-2 mt-4">Имэйл хаяг:</p>
              <Input className="bg-white border-[1px] border-[#E4E4E7] px-3 py-1 rounded-full" />
              <p className="text-sm font-medium mb-2 mt-4">Хаяг:</p>
              <Input className="bg-white border-[1px] border-[#E4E4E7] px-3 py-1 rounded-full" />
            </div>
            <Button className="bg-[#2563EB] px-9 py-2 rounded-full text-sm mt-4  w-[212px] ml-[calc(100%-212px)]">
              Мэдээлэл шинэчлэх
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
