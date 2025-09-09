export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-24 -left-24 h-[60vh] w-[60vw] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(35% 35% at 50% 50%, rgba(168,85,247,.30), transparent 60%)",
          animation: "float-glow 20s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute -top-40 right-[-10%] h-[45vh] w-[45vw] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(35% 35% at 50% 50%, rgba(99,102,241,.22), transparent 60%)",
          animation: "float-glow 24s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute bottom-[-15%] left-[10%] h-[50vh] w-[55vw] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(35% 35% at 50% 50%, rgba(236,72,153,.18), transparent 60%)",
          animation: "float-glow 28s ease-in-out infinite alternate",
        }}
      />
    </div>
  );
}
