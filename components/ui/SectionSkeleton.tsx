export default function SectionSkeleton() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="h-4 w-32 rounded-full bg-white/10" />
      <div className="mt-4 h-8 w-1/2 rounded-2xl bg-white/10" />
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-28 rounded-3xl bg-white/5" />
        ))}
      </div>
    </div>
  );
}
