export default function Loading() {
  return (
    <div className="min-h-screen bg-ink px-6 py-24 text-cloud">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <div className="h-4 w-32 rounded-full bg-white/10" />
        <div className="h-12 w-3/4 rounded-2xl bg-white/10" />
        <div className="h-4 w-2/3 rounded-full bg-white/10" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-32 rounded-3xl bg-white/5 shadow-soft"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
