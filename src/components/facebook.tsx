import Image from "next/image";
import { Icon } from "./icon";
import { randomUsername, randomPostText, randomInt } from "@/utils/random";

export const Facebook = ({ imageSrc }: { imageSrc: string }) => {
  const name = randomUsername();
  const postText = randomPostText();
  const like = randomInt();
  return (
    <div className="w-[400px]">
      <div className="w-full flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-700">
          <Image src={imageSrc} alt="Facebook Icon" width={48} height={48} />
        </div>
        <div className="flex-1">
          <div className="flex flex-col">
            <span className="font-semibold">{name}</span>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 text-sm">20時間</span>
              <Icon icon="faEarthAfrica" size="0.8rem" className="text-gray-500" />
            </div>
          </div>
          <p className="mt-2">
            <span className="word-break">{postText}…</span>
            <span className="text-blue-600 cursor-pointer">さらに表示</span>
          </p>
          <div className="flex mt-4 space-x-1">
          <div className="flex -space-x-1">
              <Icon icon="aiOutlineLike" size="1.5rem" className="text-white bg-blue-600 rounded-full p-1" />
              <Icon icon="ioHeart" size="1.5rem" className="text-white bg-red-600 rounded-full p-1" />
            </div>
            <span className="text-gray-500 ml-2">他{like}件</span>
          </div>
          <div className="flex justify-between mt-4 text-gray-400 border-t border-b border-gray-700 p-2">
            <div className="flex items-center space-x-2">
              <Icon icon="aiOutlineLike" size="1.5rem" />
              <span>いいね！</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon icon="ioChatboxOutline" size="1.5rem" />
              <span>コメントする</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon icon="ioChatboxOutline" size="1.5rem" />
              <span>シェア</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
