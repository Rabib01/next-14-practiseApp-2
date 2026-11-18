import Link from "next/link";

export default function Folder4() {
  return (
    <div className="p-20 flex flex-col gap-10">
      <h1 className="text-2xl">Folder 4</h1>
      <Link className="text-purple-300" href="/folder1/folder3">
        Folder-3
      </Link>
      <Link className="text-green-600" href="/contact">
        Contact !
      </Link>
    </div>
  );
}
