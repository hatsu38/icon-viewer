import Image from "next/image";
import { Icon } from "./icon";
import { randomUsername, randomPostText, randomInt } from "@/_utils/random";
export const Twitter = ({ imageSrc }: { imageSrc: string }) => {
  const name = randomUsername();
  const postText = randomPostText();
  const like = randomInt();
  const comment = randomInt();
  const share = randomInt();
  return (
    <div>
      <div className="w-full">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-700">
            <Image src={imageSrc} alt="Twitter Icon" width={48} height={48} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold">{name}</span>
                <span className="text-gray-500 ml-2">@{name}</span>
                <span className="text-gray-500 ml-2">· 15時間</span>
              </div>
              <span className="text-gray-500 text-sm">1h</span>
            </div>
            <p className="mt-2 word-break truncate-3-lines">
              {postText}
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-4 ml-16 text-gray-500">
          <div className="flex items-center space-x-2">
            {/* コメント */}
            <Icon icon="ioChatboxOutline" size="1.5rem" />
            <span>{comment}</span>
          </div>
          <div className="flex items-center space-x-2">
            {/* リツイート */}
            <Icon icon="faRetweet" size="1.5rem" />
            <span>{share}</span>              
          </div>
          <div className="flex items-center space-x-2">
            {/* いいね */}
            <Icon icon="ioHeartOutline" size="1.5rem" />
            <span>{like}</span>
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
