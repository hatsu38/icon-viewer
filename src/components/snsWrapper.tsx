
type PropsType = {
  children: React.ReactNode;
  sns: "twitter" | "facebook" | "instagram";
};

const color = {
  twitter: "text-blue-500",
  facebook: "text-blue-800",
  instagram: "text-pink-500",
};

export const SnsWrapper = ({ children, sns }: PropsType) => {
  return (
    <div className="flex flex-col items-center bg-gray-50 dark:bg-gray-800 border dark:border-gray-700 p-4 w-full max-w-md rounded-lg">
      <h2 className={`mb-4 text-2xl font-semibold letter-spacing-[0.2em] ${color[sns]}`}>{sns}</h2>
      <div className="flex flex-col space-y-4 overflow-hidden">
          {children}
      </div>
    </div>
  );
};
