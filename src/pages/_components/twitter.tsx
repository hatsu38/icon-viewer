import Image from "next/image";

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
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 20.75a8.751 8.751 0 0 1-8.75-8.75h1.5a7.251 7.251 0 1 0 14.5 0h1.5a8.751 8.751 0 0 1-8.75 8.75zm0-17.5a8.751 8.751 0 0 1 8.75 8.75h-1.5a7.251 7.251 0 1 0-14.5 0h-1.5a8.751 8.751 0 0 1 8.75-8.75zm3.03 11.5a.75.75 0 0 1 0 1.5h-6.06a.75.75 0 0 1 0-1.5h6.06z"></path></svg>
            <span>1</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 20.75a8.751 8.751 0 0 1-8.75-8.75h1.5a7.251 7.251 0 1 0 14.5 0h1.5a8.751 8.751 0 0 1-8.75 8.75zm0-17.5a8.751 8.751 0 0 1 8.75 8.75h-1.5a7.251 7.251 0 1 0-14.5 0h-1.5a8.751 8.751 0 0 1 8.75-8.75zm3.03 11.5a.75.75 0 0 1 0 1.5h-6.06a.75.75 0 0 1 0-1.5h6.06z"></path></svg>
            <span>82</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 20.75a8.751 8.751 0 0 1-8.75-8.75h1.5a7.251 7.251 0 1 0 14.5 0h1.5a8.751 8.751 0 0 1-8.75 8.75zm0-17.5a8.751 8.751 0 0 1 8.75 8.75h-1.5a7.251 7.251 0 1 0-14.5 0h-1.5a8.751 8.751 0 0 1 8.75-8.75zm3.03 11.5a.75.75 0 0 1 0 1.5h-6.06a.75.75 0 0 1 0-1.5h6.06z"></path></svg>
            <span>63</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 20.75a8.751 8.751 0 0 1-8.75-8.75h1.5a7.251 7.251 0 1 0 14.5 0h1.5a8.751 8.751 0 0 1-8.75 8.75zm0-17.5a8.751 8.751 0 0 1 8.75 8.75h-1.5a7.251 7.251 0 1 0-14.5 0h-1.5a8.751 8.751 0 0 1-8.75-8.75zm3.03 11.5a.75.75 0 0 1 0 1.5h-6.06a.75.75 0 0 1 0-1.5h6.06z"></path></svg>
          </div>
        </div>
      </div>
    </div>
  )
};
