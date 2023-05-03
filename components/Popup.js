const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col bg-gray-700 p-4 rounded-lg">
        <div className="text-lg text-[#78e08f] font-bold">{message}</div>
        <button
          className="mt-4 px-4 py-2 bg-orange-600 font-semibold text-gray-200 tracking-widest hover:brightness-90 rounded-lg self-end"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
