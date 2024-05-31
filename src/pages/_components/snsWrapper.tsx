
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
    <div className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg shadow-md p-4 w-full max-w-md">
      <h2 className={`mb-4 text-xl font-semibold ${color[sns]}`}>{sns}</h2>
      <div className="flex flex-col space-y-8">
        {children}
      </div>
    </div>
  );
};
