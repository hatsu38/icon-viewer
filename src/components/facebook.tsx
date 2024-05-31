import Image from "next/image";
import { Icon } from "./icon";
import { randomUsername, randomPostText, randomInt } from "@/utils/random";
import { useTranslation } from 'next-i18next';

export const Facebook = ({ imageSrc }: { imageSrc: string }) => {
  const { t } = useTranslation('common');
  const name = randomUsername();
  const postText = randomPostText();
  const like = randomInt();

  return (
    <div className="w-[425px] border-b border-gray-200 dark:border-gray-700 pb-4">
      <div className="w-full flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
          <Image src={imageSrc} alt="Facebook Icon" width={48} height={48} />
        </div>
        <div className="flex-1">
          <div className="flex flex-col">
            <span className="font-semibold">{name}</span>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 dark:text-gray-400 text-sm">20 {t("hours")}</span>
              <Icon icon="faEarthAfrica" size="0.8rem" className="text-gray-500 dark:text-gray-400" />
            </div>
          </div>
          <p className="mt-2">
            <span className="word-break">{postText}…</span>
            <span className="text-blue-600 dark:text-blue-400 cursor-pointer">{t("seeMore")}</span>
          </p>
          <div className="flex mt-4 space-x-1">
            <div className="flex -space-x-1">
              <Icon icon="aiOutlineLike" size="1.5rem" className="text-white bg-blue-600 dark:bg-blue-500 rounded-full p-1" />
              <Icon icon="ioHeart" size="1.5rem" className="text-white bg-red-600 dark:bg-red-500 rounded-full p-1" />
            </div>
            <span className="text-gray-500 dark:text-gray-400 ml-2">{like}</span>
          </div>
          <div className="flex justify-between mt-4 text-gray-400 dark:text-gray-500 border-t border-b border-gray-300 dark:border-gray-700 p-2">
            <div className="flex items-center space-x-2">
              <Icon icon="aiOutlineLike" size="1.5rem" />
              <span>{t("like")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon icon="ioChatboxOutline" size="1.5rem" />
              <span>{t("comment")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon icon="ioChatboxOutline" size="1.5rem" />
              <span>{t("share")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
