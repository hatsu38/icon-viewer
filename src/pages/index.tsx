import { Inter } from "next/font/google";
import { useState } from "react";
import { Twitter } from "./_components/twitter";
import { Facebook } from "./_components/facebook";
import { Instagram } from "./_components/instagram";

const inter = Inter({ subsets: ["latin"] });

import A from "@/pages/_assets/icons/a.png"
import B from "@/pages/_assets/icons/b.png"
import C from "@/pages/_assets/icons/c.png"
import D from "@/pages/_assets/icons/d.png"
import E from "@/pages/_assets/icons/e.png"
import { StaticImageData } from "next/image";

export default function Home() {
  const randomIndex = Math.floor(Math.random() * 5);

  const defaultImageSrc = [A, B, C, D, E][randomIndex];
  const [imageSrc, setImageSrc] = useState<string | StaticImageData>(defaultImageSrc);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex flex-col items-center">
        <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />
        {imageSrc && (
          <div className="flex items-start space-x-8">
            {/* Twitter Preview */}
            <Twitter imageSrc={imageSrc as string} />
            {/* Facebook Preview */}
            <Facebook imageSrc={imageSrc as string} />
            {/* Instagram Preview */}
            <Instagram imageSrc={imageSrc as string} />
          </div>
        )}
      </div>
    </main>
  );
}
