export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center space-y-2 min-h-dvh">
      <h2 className="absolute text-sm font-light top-4">NextJS Frontend Mentor Template</h2>
      <h1 className="text-lg font-bold underline">TODO</h1>
      <ul className="space-y-1 list-disc max-w-60">
        <li>Download starter code</li>
        <li>Copy assets into /public</li>
        <li>Set Tailwind color theme based on style guide</li>
        <li>Import fonts in layout.tsx</li>
        <li>Change title in layout.tsx</li>
      </ul>
    </main>
  );
}
