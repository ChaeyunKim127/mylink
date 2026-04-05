export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center p-8 text-center bg-zinc-50 dark:bg-black font-sans">
      <main className="max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          김채윤
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          안녕하세요! 바이브 코딩을 배우고 있는 한양대학교 전기공학전공 대학생입니다.
        </p>
      </main>
    </div>
  );
}
