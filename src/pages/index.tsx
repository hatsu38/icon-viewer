import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import { Twitter } from "./_components/twitter";

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
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-md p-4 w-full max-w-md">
              <h2 className="mb-4 text-xl font-semibold text-blue-600">Facebook</h2>
              <div className="w-full flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
                  <Image src={imageSrc} alt="Facebook Icon" width={48} height={48} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">User Name</span>
                    <span className="text-gray-500 text-sm">1h</span>
                  </div>
                  <p className="mt-2">This is a sample post to show how the uploaded image will look in a Facebook timeline.</p>
                </div>
              </div>
            </div>
            {/* Instagram Preview */}
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-md p-4 w-full max-w-md">
              <h2 className="mb-4 text-xl font-semibold text-pink-500">Instagram</h2>
              <div className="w-full flex items-center flex-col">
                <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300 mb-4">
                  <Image src={imageSrc} alt="Instagram Icon" width={96} height={96} />
                </div>
                <p className="text-center">
                  This is a sample post to show how the uploaded image will look in an Instagram timeline.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
