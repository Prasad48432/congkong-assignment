import { Button } from "@/components/moving-border-button";
import { IconBrandGithub } from "@tabler/icons-react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Image
          className="invert"
          src="/logo.avif"
          alt="Congkong logo"
          width={180}
          height={180}
          priority
        />

        <Link href="/dashboard" rel="noopener noreferrer">
          <Button className="flex items-center gap-2">
            Dashboard <MoveRight />
          </Button>
        </Link>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Prasad48432"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub />
          Made by Prasad
        </a>
      </footer>
    </div>
  );
}
