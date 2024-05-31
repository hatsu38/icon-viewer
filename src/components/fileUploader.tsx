import Image, { StaticImageData } from "next/image";
import { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Icon } from "./icon";
import Modal from "react-modal";

type FileUploadPropsType = {
  imageSrc: string;
  onFileSrcChange: (string: String) => void;
  className?: string;
};

Modal.setAppElement("#__next"); // Next.jsの特定の要素をモーダルのルート要素に設定

export const FileUploader = ({ imageSrc, onFileSrcChange, className }: FileUploadPropsType) => {
  const [cropData, setCropData] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    };
    reader.readAsDataURL(file);
  }

  const getCropData = () => {
    if (cropperRef.current && (cropperRef.current as any).cropper) {
      const src = (cropperRef.current as any).cropper.getCroppedCanvas().toDataURL();
      setCropData(src);
      onFileSrcChange(src);
      setIsModalOpen(false); // モーダルを閉じる
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

  return (
    <div className={`w-full max-w-md p-4 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-white text-gray-700 cursor-pointer ${className}`}>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={"w-full max-w-md p-4 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-white text-gray-700 cursor-pointer"}
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
                <span>クリックしてアップロードするか、ドラッグ＆ドロップしてください</span>
                <span className="text-xs text-gray-500">PNG, JPG, GIF 最大10MB</span>
              </>
            ) : (
              <>
                <Icon icon="ioImageOutline" size="2rem" className="text-gray-500" />
                <span>クリックしてアップロードするか、ドラッグ＆ドロップしてください</span>
                <span className="text-xs text-gray-500">PNG, JPG, GIF 最大10MB</span>
              </>
            )}
          </div>
        </label>
      </div>

      {src && (
        <div className="w-full flex space-x-4 mt-4 justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            トリミング
          </button>
          <button
            onClick={saveCroppedImage}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            画像を保存
          </button>
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        contentLabel="画像トリミング"
      >
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-xl font-semibold mb-4">画像をトリミング</h2>
          {imageSrc && (
            <Cropper
              src={imageSrc}
              style={{ height: 400, width: "100%", borderRadius: "100%" }}
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
            />
          )}
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              キャンセル
            </button>
            <button
              onClick={getCropData}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              トリミングを適用
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
