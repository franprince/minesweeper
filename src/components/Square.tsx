const Square = ({ value }: { value: string }) => {
  return (
    <div className="flex rounded-sm text-xs font-bold justify-center items-center bg-indigo-500 w-8 h-8">
      {value}
    </div>
  );
};

export { Square };
