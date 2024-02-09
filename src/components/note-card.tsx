export function NoteCard() {
  return (
    <button className="outline-none rounded-md text-left bg-slate-800 p-5 space-y-3 relative overflow-hidden hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">há 2 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti
        quisquam tempora dolorum optio, consectetur cupiditate vero id culpa
        ipsum explicabo aliquam! Obcaecati eos fuga praesentium voluptatibus
        hic, provident veniam.
      </p>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0"></div>
    </button>
  );
}
