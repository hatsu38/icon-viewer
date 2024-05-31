import { Inter } from "next/font/google";
import { useState } from "react";
import { Twitter } from "../components/twitter";
import { Facebook } from "../components/facebook";
import { Instagram } from "../components/instagram";

const inter = Inter({ subsets: ["latin"] });

import A from "@/_assets/icons/a.png"
import B from "@/_assets/icons/b.png"
import C from "@/_assets/icons/c.png"
import D from "@/_assets/icons/d.png"
import E from "@/_assets/icons/e.png"
import { StaticImageData } from "next/image";
import { SnsWrapper } from "../components/snsWrapper";
import { FileUploader } from "../components/fileUploader";

export default function Home() {
  const randomIndex = Math.floor(Math.random() * 5);

  const defaultImageSrc = [A, B, C, D, E][randomIndex];
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(defaultImageSrc);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex flex-col items-center">
        <FileUploader onFileSrcChange={(src) => setImageSrc(src as string)} className="mb-4" />
        {imageSrc && (
          <div className="flex items-start space-x-8">
            <div className="flex flex-col items-center">
              <SnsWrapper sns="twitter">
                {Array.from({ length: 7 }).map((_, index) => (
                  <Twitter key={index} imageSrc={imageSrc as string} />
                ))}
              </SnsWrapper>
            </div>
            <div className="flex flex-col items-center">
              <SnsWrapper sns="facebook">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Facebook key={index} imageSrc={imageSrc as string} />
                ))}
              </SnsWrapper>
            </div>
            <div className="flex flex-col items-center">
              <SnsWrapper sns="instagram">
                {Array.from({ length: 2 }).map((_, index) => (
                  <Instagram key={index} imageSrc={imageSrc as string} />
                ))}
              </SnsWrapper>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
