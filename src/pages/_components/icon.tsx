import React, { FC } from "react";
import { AiFillStar, AiOutlineLike } from "react-icons/ai";
import {
  BsFilePptFill,
  BsFileExcelFill,
  BsFileWordFill,
  BsFilePdfFill,
  BsFileTextFill,
  BsFileImageFill,
  BsFilePlayFill,
  BsFileMusicFill,
} from "react-icons/bs";
import { FiBold, FiSend } from "react-icons/fi";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import { IoIosStats } from "react-icons/io";
import {
  IoHomeOutline,
  IoHome,
  IoChatbubbleEllipsesOutline,
  IoChatbubbleEllipses,
  IoMailOutline,
  IoMail,
  IoNotifications,
  IoNotificationsOutline,
  IoHeart,
  IoHeartOutline,
  IoBookmark,
  IoBookmarkOutline,
  IoShareSocial,
  IoShareSocialOutline,
  IoCalendarClearOutline,
  IoDuplicateOutline,
  IoAtOutline,
  IoTextOutline,
  IoHappyOutline,
  IoFunnelOutline,
  IoSearch,
  IoCloseOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoSend,
  IoEllipsisHorizontalSharp,
  IoCopyOutline,
  IoCreateOutline,
  IoTrashOutline,
  IoCloudDownloadOutline,
  IoDocumentTextOutline,
  IoAdd,
  IoRemoveOutline,
  IoImageOutline,
  IoSwapVerticalOutline,
  IoSwapHorizontalOutline,
  IoAddCircleOutline,
  IoCaretForward,
  IoCaretDown,
  IoFolderOpenOutline,
  IoCheckmarkCircleOutline,
  IoRemoveCircleOutline,
  IoScanOutline,
  IoWaterOutline,
  IoChatboxOutline,
  IoVolumeLowOutline,
  IoVolumeLow,
} from "react-icons/io5";
import { RiDownloadCloudLine } from "react-icons/ri";
import { TbLoaderQuarter } from "react-icons/tb";
import { VscSymbolConstant } from "react-icons/vsc";
import { FaRetweet, FaEarthAfrica } from "react-icons/fa6";
import { PiDotsThree } from "react-icons/pi";
export const ICONS = [
  "aiFillStar",
  "aiOutlineLike",
  "ioStats",
  "ioHome",
  "ioHomeOutline",
  "ioChatbubbleEllipses",
  "ioChatbubbleEllipsesOutline",
  "ioMail",
  "ioMailOutline",
  "ioNotifications",
  "ioNotificationsOutline",
  "ioHeart",
  "ioHeartOutline",
  "ioBookmark",
  "ioBookmarkOutline",
  "ioShareSocial",
  "ioShareSocialOutline",
  "ioCalendarClearOutline",
  "ioCalendarClearOutline",
  "ioDuplicateOutline",
  "ioTextOutline",
  "ioAtOutline",
  "ioHappyOutline",
  "ioFunnelOutline",
  "ioSearch",
  "ioCloseOutline",
  "ioChevronBackOutline",
  "ioChevronForwardOutline",
  "ioSend",
  "ioEllipsisHorizontalSharp",
  "ioCopyOutline",
  "ioCreateOutline",
  "ioTrashOutline",
  "ioCloudDownloadOutline",
  "ioDocumentTextOutline",
  "ioAdd",
  "ioRemoveOutline",
  "ioImageOutline",
  "ioSwapVerticalOutline",
  "ioSwapHorizontalOutline",
  "ioAddCircleOutline",
  "ioCaretForward",
  "ioCaretDown",
  "ioFolderOpenOutline",
  "ioCheckmarkCircleOutline",
  "ioRemoveCircleOutline",
  "ioScanOutline",
  "ioWaterOutline",
  "ioChatboxOutline",
  "ioVolumeLowOutline",
  "ioVolumeLow",
  "hiOutlineEye",
  "hiOutlineEyeOff",
  "aiFillStar",
  "fileImage",
  "fileExcel",
  "fileWord",
  "filePdf",
  "filePowerpoint",
  "fileAudio",
  "fileVideo",
  "fileText",
  "fiBold",
  "fiSend",
  "tbLoaderQuarter",
  "riDownloadCloudLine",
  "vscSymbolConstant",
  "faRetweet",
  "faEarthAfrica",
  "piDotsThree",
] as const satisfies readonly string[];

export type IconType = (typeof ICONS)[number];
export type IconColorType =
  | `text-${string}-${number}`
  | "text-white"
  | `text-icon-${string}`;
export type IconSizeType = `${number}rem`;
export type IconPropsType = {
  icon: IconType;
  className?: string;
  size?: IconSizeType;
  color?: IconColorType;
};

export const Icon: FC<IconPropsType> = ({
  icon,
  size = "2rem",
  className = "",
  color = "text-secondary-600",
}: IconPropsType) => {
  const iconProps = {
    className: `${className} ${color}`,
    size: size,
  };

  const icons = {
    aiFillStar: <AiFillStar {...iconProps} />,
    aiOutlineLike: <AiOutlineLike {...iconProps} />,
    ioStats: <IoIosStats {...iconProps} />,
    ioHome: <IoHome {...iconProps} />,
    ioHomeOutline: <IoHomeOutline {...iconProps} />,
    ioChatbubbleEllipses: <IoChatbubbleEllipses {...iconProps} />,
    ioChatbubbleEllipsesOutline: <IoChatbubbleEllipsesOutline {...iconProps} />,
    ioMail: <IoMail {...iconProps} />,
    ioMailOutline: <IoMailOutline {...iconProps} />,
    ioNotifications: <IoNotifications {...iconProps} />,
    ioNotificationsOutline: <IoNotificationsOutline {...iconProps} />,
    ioHeart: <IoHeart {...iconProps} />,
    ioHeartOutline: <IoHeartOutline {...iconProps} />,
    ioBookmark: <IoBookmark {...iconProps} />,
    ioBookmarkOutline: <IoBookmarkOutline {...iconProps} />,
    ioShareSocial: <IoShareSocial {...iconProps} />,
    ioShareSocialOutline: <IoShareSocialOutline {...iconProps} />,
    ioCalendarClearOutline: <IoCalendarClearOutline {...iconProps} />,
    ioDuplicateOutline: <IoDuplicateOutline {...iconProps} />,
    ioAtOutline: <IoAtOutline {...iconProps} />,
    ioTextOutline: <IoTextOutline {...iconProps} />,
    ioHappyOutline: <IoHappyOutline {...iconProps} />,
    ioFunnelOutline: <IoFunnelOutline {...iconProps} />,
    ioSearch: <IoSearch {...iconProps} />,
    ioCloseOutline: <IoCloseOutline {...iconProps} />,
    ioChevronBackOutline: <IoChevronBackOutline {...iconProps} />,
    ioChevronForwardOutline: <IoChevronForwardOutline {...iconProps} />,
    ioSend: <IoSend {...iconProps} />,
    ioEllipsisHorizontalSharp: <IoEllipsisHorizontalSharp {...iconProps} />,
    ioCopyOutline: <IoCopyOutline {...iconProps} />,
    ioCreateOutline: <IoCreateOutline {...iconProps} />,
    ioTrashOutline: <IoTrashOutline {...iconProps} />,
    ioCloudDownloadOutline: <IoCloudDownloadOutline {...iconProps} />,
    ioDocumentTextOutline: <IoDocumentTextOutline {...iconProps} />,
    ioAdd: <IoAdd {...iconProps} />,
    ioRemoveOutline: <IoRemoveOutline {...iconProps} />,
    ioImageOutline: <IoImageOutline {...iconProps} />,
    ioSwapVerticalOutline: <IoSwapVerticalOutline {...iconProps} />,
    ioSwapHorizontalOutline: <IoSwapHorizontalOutline {...iconProps} />,
    ioAddCircleOutline: <IoAddCircleOutline {...iconProps} />,
    ioCaretForward: <IoCaretForward {...iconProps} />,
    ioCaretDown: <IoCaretDown {...iconProps} />,
    ioFolderOpenOutline: <IoFolderOpenOutline {...iconProps} />,
    ioCheckmarkCircleOutline: <IoCheckmarkCircleOutline {...iconProps} />,
    ioRemoveCircleOutline: <IoRemoveCircleOutline {...iconProps} />,
    ioScanOutline: <IoScanOutline {...iconProps} />,
    ioWaterOutline: <IoWaterOutline {...iconProps} />,
    ioChatboxOutline: <IoChatboxOutline {...iconProps} />,
    ioVolumeLowOutline: <IoVolumeLowOutline {...iconProps} />,
    ioVolumeLow: <IoVolumeLow {...iconProps} />,
    hiOutlineEye: <HiOutlineEye {...iconProps} />,
    hiOutlineEyeOff: <HiOutlineEyeOff {...iconProps} />,
    fileImage: <BsFileImageFill {...iconProps} />,
    fileExcel: <BsFileExcelFill {...iconProps} />,
    fileWord: <BsFileWordFill {...iconProps} />,
    filePdf: <BsFilePdfFill {...iconProps} />,
    filePowerpoint: <BsFilePptFill {...iconProps} />,
    fileAudio: <BsFileMusicFill {...iconProps} />,
    fileVideo: <BsFilePlayFill {...iconProps} />,
    fileText: <BsFileTextFill {...iconProps} />,
    fiBold: <FiBold {...iconProps} />,
    fiSend: <FiSend {...iconProps} />,
    tbLoaderQuarter: <TbLoaderQuarter {...iconProps} />,
    riDownloadCloudLine: <RiDownloadCloudLine {...iconProps} />,
    vscSymbolConstant: <VscSymbolConstant {...iconProps} />,
    faRetweet: <FaRetweet {...iconProps} />,
    faEarthAfrica: <FaEarthAfrica {...iconProps} />,
    piDotsThree: <PiDotsThree {...iconProps} />,
  };

  return icons[icon];
};
