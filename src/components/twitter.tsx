import Image from "next/image";
import { Icon } from "./icon";
import { randomUsername, randomPostText, randomInt } from "@/utils/random";
import { useTranslation } from 'next-i18next';

export const Twitter = ({ imageSrc }: { imageSrc: string }) => {
  const { t } = useTranslation('common');
  const name = randomUsername();
  const postText = randomPostText();
  const like = randomInt();
  const comment = randomInt();
  const share = randomInt();

  return (
    <div className="w-[320px] md:w-[400px]  border-b border-gray-200 dark:border-gray-700 pb-4">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700 flex-shrink-0">
          <Image src={imageSrc} alt="Twitter Icon" width={48} height={48} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-semibold truncate max-w-10">{name}</span>
              <span className="text-gray-500 dark:text-gray-400 ml-2 truncate max-w-10">@{name}</span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">· 15 {t("hours")}</span>
            </div>
          </div>
          <p className="mt-2 word-break truncate-3-lines max-w-[280px] md:max-w-[300px]">
            {postText}
          </p>
        </div>
      </div>
      <div className="flex justify-between mt-4 ml-16 text-gray-500 dark:text-gray-400">
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
  );
};
