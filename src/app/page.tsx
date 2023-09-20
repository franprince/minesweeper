import { Board } from "@/components/Board";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center">
      <Board height={6} width={6} />
    </main>
  );
}
