interface ResetButtonProps {
  clickedCountryId?: string | null;
  setClickedCountryId: (id: string | null) => void;
  className?: string;
}

const ResetButton: React.FC<ResetButtonProps> = ({
  setClickedCountryId,
  className,
}) => {
  const handleClick = () => {
    console.log("Resetting country selection!");
    setClickedCountryId(null);
  };
  return (
    <div className={`${className}`}>
      <button
        type="button"
        onClick={handleClick}
        className="bg-blue-500 text-white rounded-full px-5 py-2 hover:bg-blue-600"
      >
        Reset
      </button>
    </div>
  );
};

export default ResetButton;
