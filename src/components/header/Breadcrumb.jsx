export default function Breadcrumb({ path = ["Global Overview"] }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-3 pl-10 md:pl-4">
        <h2 className="text-xl font-bold text-white pl-2">{path[0]}</h2>
      </div>
      {path.length > 1 && (
        <div className="flex items-center gap-2 text-xs text-slate-400 ml-9">
          {path.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className={index === path.length - 1 ? "text-cyan-400" : ""}
              >
                {item}
              </span>
              {index < path.length - 1 && (
                <svg
                  fill="currentColor"
                  className="w-3 h-3"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
