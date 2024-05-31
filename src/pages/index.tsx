import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { Twitter } from "./_components/twitter";
import { Facebook } from "./_components/facebook";
import { Instagram } from "./_components/instagram";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    setSelectedFile(file);
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
            <Twitter imageSrc={imageSrc} />
            {/* Facebook Preview */}
            <Facebook imageSrc={imageSrc} />
            {/* Instagram Preview */}
            <Instagram imageSrc={imageSrc} />
          </div>
        )}
      </div>
    </main>
  );
}
