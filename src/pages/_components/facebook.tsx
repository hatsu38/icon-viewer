import Image from "next/image";
import { Icon } from "./icon";
import { randomUsername, randomPostText } from "@/pages/_utils/random";

export const Facebook = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg shadow-md p-4 w-full max-w-md">
      <h2 className="mb-4 text-xl font-semibold text-blue-600">Facebook</h2>
      <div className="w-full flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-700">
          <Image src={imageSrc} alt="Facebook Icon" width={48} height={48} />
        </div>
        <div className="flex-1">
          <div className="flex flex-col">
            <span className="font-semibold">{randomUsername}</span>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 text-sm">20時間</span>
              <Icon icon="faEarthAfrica" size="0.8rem" className="text-gray-500" />
            </div>
          </div>
          <p className="mt-2">
            <span className="word-break">{randomPostText}…</span>
            <span className="text-blue-600 cursor-pointer">さらに表示</span>
          </p>
          <div className="flex justify-between mt-4 text-gray-500">
            <div className="flex items-center space-x-2">
              <Icon icon="ioHeartOutline" size="1.5rem" />
              <span>327人</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon icon="ioChatboxOutline" size="1.5rem" />
              <span>コメント73件</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon icon="ioChatboxOutline" size="1.5rem" />
              <span>シェア3件</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
