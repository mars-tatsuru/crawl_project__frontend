import Link from "next/link";

export default function Card() {
  return (
    <div className="w-96 rounded-md border-gray-600 bg-gray-800 p-5">
      <p className="text-sm font-bold text-white">サムネ</p>
      <p className="text-sm font-bold text-white">クロール数</p>
      <p className="text-sm font-bold text-white">クロール開始時間</p>
      <p className="text-sm font-bold text-white">クロール終了時間</p>
      <p className="text-sm font-bold text-white">ページ数</p>
      <p className="text-sm font-bold text-white">site mapへのリンク</p>
    </div>
  );
}
