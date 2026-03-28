import Image from "next/image";
import Link from "next/link";
import logoImage from "../../assets/logo-80.png";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center flex-1 px-4 py-20">
        {/* Hero Section */}
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Image
              src={logoImage}
              alt="lavaz-logo"
              width={112}
              height={80}
              className="md:w-28 md:h-20 w-28 h-12"
            />
            <h1 className="text-5xl md:text-7xl text-[#DA3817] font-extrabold tracking-tight">
              Lavaz
            </h1>
          </div>

          <p className="max-w-150 text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            The{" "}
            <span className="text-foreground font-semibold">
              Infrastructure-first
            </span>{" "}
            state management library for React. Built-in persistence, automatic
            conflict detection, and zero boilerplate.
          </p>

          <div className="flex gap-4">
            <Link href="/docs">
              <Button size="lg" className="px-8 text-md font-medium">
                Get Started
              </Button>
            </Link>
            {/* <Link href="https://github.com/your-username/lavaz" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="px-8 text-md font-medium"
              >
                GitHub
              </Button>
            </Link> */}
          </div>
        </div>

        {/* Feature Highlights Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full text-left">
          <div className="p-6 rounded-xl border bg-card text-card-foreground">
            <h3 className="font-bold text-xl mb-2 text-[#DA3817]">
              Atomic Design
            </h3>
            <p className="text-muted-foreground text-sm">
              Organize your state into independent "Boxes" that manage their own
              logic and lifecycle.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-card text-card-foreground">
            <h3 className="font-bold text-xl mb-2 text-[#DA3817]">
              Safe Persistence
            </h3>
            <p className="text-muted-foreground text-sm">
              First-class support for LocalStorage and SessionStorage with
              automatic ID conflict detection.
            </p>
          </div>

          <div className="p-6 rounded-xl border bg-card text-card-foreground">
            <h3 className="font-bold text-xl mb-2 text-[#DA3817]">Type Safe</h3>
            <p className="text-muted-foreground text-sm">
              Deep TypeScript integration for full IntelliSense support across
              your state and actions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
