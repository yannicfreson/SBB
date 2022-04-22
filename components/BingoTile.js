export default function Title({ word, status }) {
  return (
    <div className={`bingoTile table h-full w-full rounded-lg bg-sky-900`}>
      <div className="table-cell p-2 align-middle font-chewy">
        {word.toUpperCase()}
      </div>
    </div>
  );
}
