import Link from "next/link";

function firstPost() {
  return (
    <div>
      <h1>最初の投稿</h1>
      <Link href='/'>ホームへ戻る</Link>
    </div>
  );
}

export default firstPost;