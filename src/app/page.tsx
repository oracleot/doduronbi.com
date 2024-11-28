import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <div
      className={`flex items-center justify-center border-b-2 border-[var(--mid-gray)] min-h-[40rem] lg:min-h-[50rem] rounded-b-[6rem]`}
    >
      <div className="flex items-center flex-col gap-3">
        <Avatar className="w-[4rem] h-[4rem]">
          <AvatarFallback className="text-[2rem]">DO</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl md:text-5xl font-orbitron font-medium">
          Damilola Oduronbi
        </h1>
        <div className="flex">
          <Terminal />
          <h2 className="text-lg md:text-xl">Full Stack JavaScipt Developer</h2>
        </div>
        <h3 className="text-center text-[var(--mid-gray)] max-w-[500px]">
          Crafting scalable solutions and driving digital innovation with React,
          Node.js, and Azure for over 6 years.
        </h3>
        <div className="flex gap-3 p-4 max-w-[500px] items-center justify-center flex-wrap">
          <Badge className="rounded-full">JavaScript</Badge>
          <Badge className="rounded-full" variant="secondary">
            TypeScript
          </Badge>
          <Badge className="rounded-full" variant="secondary">
            Node.js
          </Badge>
          <Badge className="rounded-full" variant="secondary">
            React.js
          </Badge>
          <Badge className="rounded-full" variant="secondary">
            Express.js
          </Badge>
          <Badge className="rounded-full" variant="secondary">
            RESTful APIs
          </Badge>
          <Badge className="rounded-full" variant="secondary">
            Database Design (SQL, NoSQL)
          </Badge>
          <Badge className="rounded-full" variant="secondary">
            Cloud Computing
          </Badge>
          <Badge className="rounded-full" variant="secondary">
            Version Control (Git)
          </Badge>
        </div>
      </div>
    </div>
  );
}
