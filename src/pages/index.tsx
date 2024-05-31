import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Twitter } from "../components/twitter";
import { Facebook } from "../components/facebook";
import { Instagram } from "../components/instagram";

const inter = Inter({ subsets: ["latin"] });

import A from "@/assets/icons/a.png";
import B from "@/assets/icons/b.png";
import C from "@/assets/icons/c.png";
import D from "@/assets/icons/d.png";
import E from "@/assets/icons/e.png";
import { SnsWrapper } from "../components/snsWrapper";
import { FileUploader } from "../components/fileUploader";

export default function Home() {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const images = [A, B, C, D, E];
    const randomIndex = Math.floor(Math.random() * images.length);
    setImageSrc(images[randomIndex].src);
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex flex-col items-center">
        <FileUploader imageSrc={imageSrc} onFileSrcChange={(src) => setImageSrc(src as string)} className="mb-4" />
        {imageSrc && (
          <div className="flex items-start space-x-8">
            <div className="flex flex-col items-center">
              <SnsWrapper sns="twitter">
                {Array.from({ length: 7 }).map((_, index) => (
                  <Twitter key={`twitter-${index}`} imageSrc={imageSrc as string} />
                ))}
              </SnsWrapper>
            </div>
            <div className="flex flex-col items-center">
              <SnsWrapper sns="facebook">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Facebook key={`facebook-${index}`} imageSrc={imageSrc as string} />
                ))}
              </SnsWrapper>
            </div>
            <div className="flex flex-col items-center">
              <SnsWrapper sns="instagram">
                {Array.from({ length: 2 }).map((_, index) => (
                  <Instagram key={`instagram-${index}`} imageSrc={imageSrc as string} />
                ))}
              </SnsWrapper>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
