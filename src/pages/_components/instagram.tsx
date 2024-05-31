import Image from "next/image";
import { Icon } from "./icon";

export const Instagram = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <div className="flex flex-col items-center bg-black text-white border border-gray-700 rounded-lg shadow-md p-4 w-full max-w-md">
      <h2 className="mb-4 text-xl font-semibold text-pink-500">Instagram</h2>
      <div className="w-full">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-700">
            <Image src={imageSrc} alt="Instagram Icon" width={48} height={48} />
          </div>
          <div>
            <div className="flex items-center">
              <span className="font-semibold">disney</span>
              <span className="text-gray-500 text-sm">・1日前</span>
            </div>
          </div>
        </div>
        <div className="relative pb-[100%] mb-4">
          <Image src={imageSrc} alt="Instagram Post Image" layout="fill" objectFit="cover" />
        </div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex space-x-4">
            <Icon icon="ioHeart" size="1.5rem" />
            <Icon icon="ioChatboxOutline" size="1.5rem" />
            <Icon icon="ioSend" size="1.5rem" />
          </div>
          <Icon icon="ioBookmarkOutline" size="1.5rem" />
        </div>
        <p className="mb-1">
          <span className="font-semibold">disney</span> Up, up, and away! 15 years later, adventure is for Wilderness Explorers of all ages! 🎈🏕 Stream @pixar's Up on... <span className="text-gray-500">続きを読む</span>
        </p>
        <p className="text-gray-500 text-sm">いいね！11.1万件</p>
      </div>
    </div>
  )
};
