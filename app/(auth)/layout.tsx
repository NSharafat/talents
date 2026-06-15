"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import Slides from "../../_components/auth/Slides";
import Image from "next/image";
import logo from "@/public/icon.png";
import InputText from "../../_components/Forms/InputText";
import Link from "next/link";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   template: "%s | Talents",
//   default: "Welcom to Talents",
//   description:
//     "Find and collaborate with the best talents from around teh globe.",
// };

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-(--primary)/95">
        <div className="flex flex-col">
          <div className="contents-wrapper">
            <div className="grid md:grid-cols-[4fr_6fr] max-sm:grid-cols-1 min-h-screen">
              <div className="max-sm:hidden bg-linear-to-tr  relative from-(--primary) from-60% to-(--secondary) flex flex-col justify-end p-10 overflow-hidden">
                <div className="absolute inset-0 bg-(--primary) opacity-70 z-1"></div>
                <div className="bg-linear-to-tr absolute z-0  h-full w-full from-(--primary)/10 from-50% to-(--secondary) "></div>
                <div className="relative z-2  flex  justify-center">
                  {" "}
                  <Slides />
                </div>
              </div>
              <div className="bg-(--white) flex flex-col  w-full p-5">
                <div className="flex  items-center justify-between w-full">
                  <div className="relative w-10 h-10">
                    <Image
                      src={logo}
                      fill
                      className="object-contain h-full w-full"
                      alt="logo.png"
                    />
                  </div>
                  <div>
                    {path == "/signup" ? (
                      <p className="text-(--primary) text-xs">
                        Already an account?{" "}
                        <span className="underline font-medium">
                          <Link href={"/signin"}>Sign in</Link>
                        </span>
                      </p>
                    ) : (
                      <p className="text-(--primary) text-xs">
                        Don't have an account?{" "}
                        <span className="underline font-medium">
                          <Link href={"/signup"}>Sign up</Link>
                        </span>
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center w-full h-full">
                  <div className="form-wrapper flex justify-center flex-col gap-10">
                    <div className="from-header flex flex-col items-center">
                      <h2 className="text-xl text-center text-(--primary) font-semibold">
                        Welcome {path == "/signup" ? "to Talents" : " back"}
                      </h2>
                      <p className="text-center text-(--primary)/60 text-xs">
                        Please enter your details to{" "}
                        {path == "/signup" ? "sign up" : "sign in"} to your
                        account
                      </p>
                    </div>
                    <div>{children}</div>
                  </div>
                </div>
                <div className="flex  items-center justify-between w-full">
                  <div className="">
                    <p className="text-(--primary)/70 uppercase text-[10px]">
                      @talents, {new Date().getFullYear()}
                    </p>
                  </div>
                  <div className="flex gap-5 text-(--primary)/70">
                    <p className="text-(--primary) text-[10px]">
                      Privacy policy
                    </p>
                    <p className="text-(--primary) text-[10px]">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
