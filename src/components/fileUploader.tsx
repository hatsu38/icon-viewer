import Image from "next/image";
import { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Icon } from "./icon";
import Modal from "react-modal";
import { useTranslation } from 'next-i18next';
import * as Slider from '@radix-ui/react-slider';

type FileUploadPropsType = {
  imageSrc: string;
  originalImageSrc: string;
  onFileSrcChange: (string: String) => void;
  className?: string;
};

Modal.setAppElement("#__next"); // Next.jsの特定の要素をモーダルのルート要素に設定

export const FileUploader = ({ originalImageSrc, imageSrc, onFileSrcChange, className }: FileUploadPropsType) => {
  const { t } = useTranslation('common');
  const [cropData, setCropData] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomValue, setZoomValue] = useState([1]);
  const cropperRef = useRef<HTMLImageElement>(null);
  const src = cropData || imageSrc;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      changeFile(file);
    }
  };

  const changeFile = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const src = reader.result as string;
      onFileSrcChange(src);
      setCropData(null);
      setZoomValue([1]);
    };
    reader.readAsDataURL(file);
  };

  const getCropData = () => {
    if (cropperRef.current && (cropperRef.current as any).cropper) {
      const src = (cropperRef.current as any).cropper.getCroppedCanvas().toDataURL();
      setCropData(src);
      onFileSrcChange(src);
      setIsModalOpen(false);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0] || null;
    if (file) {
      changeFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const saveCroppedImage = () => {
    if (src) {
      const link = document.createElement('a');
      link.href = src;
      link.download = 'cropped-image.png';
      link.click();
    }
  };

  const handleZoomChange = (value: number[]) => {
    setZoomValue(value);
    if (cropperRef.current && (cropperRef.current as any).cropper) {
      (cropperRef.current as any).cropper.zoomTo(value[0]);
    }
  };

  const handleReady = () => {
    if (cropperRef.current && (cropperRef.current as any).cropper) {
      (cropperRef.current as any).cropper.zoomTo(0);
      setZoomValue([1]);
    }
  };

  return (
    <div className={`w-full max-w-md p-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 cursor-pointer ${className}`}>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={"w-full max-w-md p-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 cursor-pointer"}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="flex flex-col items-center space-y-2">
            {src ? (
              <>
                <Image src={src} alt="Preview" width={200} height={200} className="rounded object-cover" />
                <span>{t('uploadPrompt')}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{t('uploadHint')}</span>
              </>
            ) : (
              <>
                <Icon icon="ioImageOutline" size="2rem" className="text-gray-500 dark:text-gray-400" />
                <span>{t('uploadPrompt')}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{t('uploadHint')}</span>
              </>
            )}
          </div>
        </label>
      </div>

      {src && (
        <div className="w-full flex space-x-4 mt-4 justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
          >
            {t('cropImage')}
          </button>
          <button
            onClick={saveCroppedImage}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 dark:bg-green-400 dark:hover:bg-green-500"
          >
            {t('saveImage')}
          </button>
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        contentLabel={t('cropImage')}
        shouldCloseOnOverlayClick
      >
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">{t('cropImage')}</h2>
          {imageSrc && (
            <div>
              <Cropper
                src={originalImageSrc}
                initialAspectRatio={1}
                guides={false}
                scalable
                zoomable
                zoomOnTouch
                zoomOnWheel
                cropBoxResizable={false}
                dragMode="move"
                viewMode={1}
                minContainerWidth={200}
                minContainerHeight={200}
                ref={cropperRef}
                ready={handleReady}
              />
              <div className="mt-4">
                <label className="block text-gray-700 dark:text-gray-200">{t('zoom')}</label>
                <Slider.Root
                  className="relative flex items-center w-full h-8"
                  value={zoomValue}
                  onValueChange={handleZoomChange}
                  min={1}
                  max={3}
                  step={0.1}
                  aria-label="Zoom"
                >
                  <Slider.Track className="bg-gray-200 dark:bg-gray-600 relative flex-1 h-1 rounded">
                    <Slider.Range className="absolute bg-blue-500 dark:bg-blue-400 h-full rounded" />
                  </Slider.Track>
                  <Slider.Thumb className="block w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75" />
                </Slider.Root>
              </div>
            </div>
          )}
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              {t('cancel')}
            </button>
            <button
              onClick={getCropData}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500"
            >
              {t('applyCrop')}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
