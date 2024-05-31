import Image from "next/image";
import { Icon } from "./icon";

export const Twitter = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <div className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg shadow-md p-4 w-full max-w-md">
      <h2 className="mb-4 text-xl font-semibold text-blue-500">Twitter</h2>
      <div className="w-full">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-700">
            <Image src={imageSrc} alt="Twitter Icon" width={48} height={48} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold">hatsu</span>
                <span className="text-gray-500 ml-2">@hatsu_38</span>
                <span className="text-gray-500 ml-2">· 15時間</span>
              </div>
              <span className="text-gray-500 text-sm">1h</span>
            </div>
            <p className="mt-2">
              This is a sample tweet to show how the uploaded image will look in a Twitter timeline.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-4 text-gray-500">
          <div className="flex items-center space-x-2">
            {/* コメント */}
            <Icon icon="ioChatboxOutline" size="1.5rem" />
            <span>1</span>
          </div>
          <div className="flex items-center space-x-2">
            {/* リツイート */}
            <Icon icon="faRetweet" size="1.5rem" />
            <span>82</span>
          </div>
          <div className="flex items-center space-x-2">
            {/* いいね */}
            <Icon icon="ioHeart" size="1.5rem" />
            <span>63</span>
          </div>
          <div className="flex items-center space-x-2">
            {/* 統計 */}
            <Icon icon="ioStats" size="1.5rem" />
          </div>
        </div>
      </div>
    </div>
  )
};
