
const Loader = () => {
  return (
    <div>
      <div className="loader mt-4 ease-linear rounded-full border-2 border-t-2 border-gray-200 h-6 w-6 mx-auto"></div>
      <style jsx>{`
        .loader {
          border-top-color: #7165e3;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
