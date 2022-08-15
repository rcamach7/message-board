import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time className="dateComponent text-xs self-end" dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
