export default function Title({
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  height,
  color,
}) {
  return (
    <div
      className={`bingoTile col-start-${colStart} col-end-${colEnd} row-start-${rowStart} row-end-${rowEnd} h-[${height}] bg-${color}`}
    ></div>
  );
}
