import { useState } from "react";

type FileUploadPropsType = {
  onFileChange: (file: File | null) => void;
  className?: string;
}

export const FileUploader = ({ onFileChange, className }: FileUploadPropsType) => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result as string);
        onFileChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result as string);
        onFileChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className={`w-full max-w-md p-4 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-white text-gray-700 cursor-pointer ${className}`}>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="w-full max-w-md p-4 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-white text-gray-700 cursor-pointer"
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
            {previewSrc ? (
              <img src={previewSrc} alt="Preview" className="w-24 h-24 rounded-full object-cover" />
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4h14a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V8l4-4z"
                  />
                </svg>
                <span>Click to upload or drag and drop</span>
                <span className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</span>
              </>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};
