export default function ProjectMock({ project }) {
  return (
    <div className="mock-window" style={{ "--mock": project.accent }}>
      <div className="flex items-center gap-1.5 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/18" />
        <span className="h-2 w-2 rounded-full bg-white/12" />
        <span className="ml-3 h-2 flex-1 rounded-full bg-white/8" />
      </div>
      <div className="px-4 pb-4 transition duration-500 group-hover:scale-[1.03]">
        {project.id === "fleetfinesse" ? <FleetMock /> : null}
        {project.id === "simplihost" ? <HotelMock /> : null}
        {project.id === "ecommerce" ? <ShopMock /> : null}
        {project.id === "demo-saas" ? <SaasMock /> : null}
        {project.id === "demo-store" ? <StoreMock /> : null}
        {project.id === "demo-pm" ? <KanbanMock /> : null}
        {project.id === "demo-landing" ? <LandingMock /> : null}
      </div>
    </div>
  );
}

function FleetMock() {
  return (
    <div className="grid grid-cols-[1.1fr_0.9fr] gap-2">
      <div className="space-y-2">
        <div className="h-16 rounded-xl bg-gradient-to-br from-amber-400/25 to-white/5" />
        <div className="grid grid-cols-3 gap-1.5">
          <div className="h-8 rounded-lg bg-white/10" />
          <div className="h-8 rounded-lg bg-amber-400/20" />
          <div className="h-8 rounded-lg bg-white/10" />
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="h-5 rounded bg-white/12" />
        <div className="h-5 rounded bg-white/8" />
        <div className="h-5 rounded bg-white/8" />
        <div className="h-7 rounded-lg bg-amber-400/30" />
      </div>
    </div>
  );
}

function HotelMock() {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 14 }).map((_, index) => (
          <div
            key={index}
            className={`h-5 rounded ${index === 9 || index === 10 ? "bg-sky-300/40" : "bg-white/8"}`}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="h-12 rounded-xl bg-white/10" />
        <div className="h-12 rounded-xl bg-sky-300/15" />
      </div>
    </div>
  );
}

function ShopMock() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[0, 1, 2].map((item) => (
        <div key={item} className="overflow-hidden rounded-xl bg-white/8">
          <div className={`h-10 ${item === 1 ? "bg-emerald-300/25" : "bg-white/10"}`} />
          <div className="space-y-1 p-2">
            <div className="h-1.5 rounded bg-white/20" />
            <div className="h-1.5 w-2/3 rounded bg-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
}

function SaasMock() {
  return (
    <div className="grid grid-cols-[0.7fr_1.3fr] gap-2">
      <div className="space-y-1.5">
        <div className="h-4 rounded bg-violet-300/30" />
        <div className="h-4 rounded bg-white/8" />
        <div className="h-4 rounded bg-white/8" />
        <div className="h-4 rounded bg-white/8" />
      </div>
      <div className="flex items-end gap-1.5 rounded-xl bg-white/5 px-2 pb-2 pt-4">
        {[28, 46, 34, 62, 48, 70, 54].map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t bg-violet-300/40"
            style={{ height: `${height}px` }}
          />
        ))}
      </div>
    </div>
  );
}

function StoreMock() {
  return (
    <div className="grid grid-cols-[1.2fr_0.8fr] gap-2">
      <div className="grid grid-cols-2 gap-1.5">
        <div className="h-16 rounded-xl bg-rose-300/20" />
        <div className="h-16 rounded-xl bg-white/10" />
      </div>
      <div className="rounded-xl border border-white/10 p-2">
        <div className="h-2 w-10 rounded bg-white/20" />
        <div className="mt-2 h-8 rounded bg-white/8" />
        <div className="mt-2 h-6 rounded bg-rose-300/30" />
      </div>
    </div>
  );
}

function KanbanMock() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {["bg-white/10", "bg-amber-400/20", "bg-white/8"].map((tone) => (
        <div key={tone} className="space-y-1.5 rounded-xl bg-white/5 p-1.5">
          <div className={`h-8 rounded-lg ${tone}`} />
          <div className="h-8 rounded-lg bg-white/8" />
        </div>
      ))}
    </div>
  );
}

function LandingMock() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-300/15 to-white/5 p-3">
      <div className="h-2 w-24 rounded bg-white/20" />
      <div className="mt-2 h-2 w-16 rounded bg-white/10" />
      <div className="absolute right-3 top-3 h-14 w-14 rounded-full border border-cyan-200/30 bg-cyan-300/10" />
      <div className="mt-6 flex gap-2">
        <div className="h-6 w-16 rounded-full bg-cyan-300/40" />
        <div className="h-6 w-16 rounded-full border border-white/15" />
      </div>
    </div>
  );
}
