export default function Title({ word, found }) {
  if (found) {
    return (
      <div className={`bingoTile table h-full w-full rounded-lg bg-sky-400`}>
        <div className="table-cell rotate-45 p-1 align-middle font-chewy sm:rotate-0">
          {word.toUpperCase()}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`bingoTile table h-full w-full rounded-lg bg-sky-900`}>
        <div className="table-cell rotate-45 align-middle font-chewy sm:rotate-0 sm:p-1">
          {word.toUpperCase()}
        </div>
      </div>
    );
  }
}
