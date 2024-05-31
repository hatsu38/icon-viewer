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
import { Icon } from "@/components/icon";

export default function Home() {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const images = [A, B, C, D, E];
    const randomIndex = Math.floor(Math.random() * images.length);
    setImageSrc(images[randomIndex].src);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className} bg-white text-gray-700 dark:bg-gray-900 dark:text-white`}
      >
        <div className="flex flex-col items-center w-full">
          <button
            onClick={toggleDarkMode}
            className={`fixed top-4 right-4 p-2rounded-md ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'} dark:bg-gray-800 dark:text-white`}
          >
            <Icon icon={isDarkMode ? "mdDarkMode" : "mdOutlineLightMode"} size="1.5rem" />
          </button>
          <h1 className="text-3xl font-bold mb-4">SNS Icon Viewer</h1>
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
    </div>
  );
}
