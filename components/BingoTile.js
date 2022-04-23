export default function Title({ word, found }) {
  if (found) {
    return (
      <div className={`bingoTile table h-full w-full rounded-lg bg-sky-400`}>
        <div className="table-cell p-2 align-middle font-chewy">
          {word.toUpperCase()}
        </div>
      </div>
    );
  } else {
    return (
      <div className={`bingoTile table h-full w-full rounded-lg bg-sky-900`}>
        <div className="table-cell p-2 align-middle font-chewy">
          {word.toUpperCase()}
        </div>
      </div>
    );
  }
}
