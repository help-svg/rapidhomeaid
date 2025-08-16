import CallCTA from "@/components/CallCTA";

export default function BurstPipe() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-gradient-to-br from-sky-500 to-sky-600 text-white px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold">Burst Pipe</h1>
        <p className="mt-2 text-white/90">Emergency stop-leak, water extraction, and structural drying.</p>
        <div className="mt-5"><CallCTA /></div>
      </section>
    </div>
  );
}