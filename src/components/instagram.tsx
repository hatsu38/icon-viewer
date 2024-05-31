import Image from "next/image";
import { Icon } from "./icon";
import { randomUsername, randomPostText, randomInt } from "@/utils/random";
import { useTranslation } from 'next-i18next';

export const Instagram = ({ imageSrc }: { imageSrc: string }) => {
  const { t } = useTranslation('common');
  const name = randomUsername();
  const postText = randomPostText();
  const like = randomInt();

  return (
    <div className="w-[360px] border-b border-gray-200 dark:border-gray-700 pb-4">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300 dark:border-gray-700">
          <Image src={imageSrc} alt="Instagram Icon" width={48} height={48} />
        </div>
        <div>
          <div className="flex items-center">
            <span className="font-semibold">{name}</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">・15 {t("hours")}</span>
          </div>
        </div>
      </div>
      <div className="relative pb-[100%] mb-4">
        <Image src={imageSrc} alt="Instagram Post Image" layout="fill" objectFit="cover" />
      </div>
      <div className="flex items-center justify-between mb-2 text-gray-500 dark:text-gray-400">
        <div className="flex space-x-4">
          <Icon icon="ioHeartOutline" size="1.5rem" />
          <Icon icon="ioChatboxOutline" size="1.5rem" />
          <Icon icon="fiSend" size="1.5rem" />
        </div>
        <Icon icon="ioBookmarkOutline" size="1.5rem" />
      </div>
      <p className="mb-1">
        <span className="font-semibold mr-2">{name}</span>{postText}... <span className="text-blue-600 dark:text-blue-400">{t("seeMore")}</span>
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{t("like")}{like}</p>
    </div>
  );
};
