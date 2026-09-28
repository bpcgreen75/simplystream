import { Icon } from "./Icon";

export function TrustPoints({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Why households try us">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2 text-[0.95rem] font-medium text-muted">
          <span className="grid size-6 place-items-center rounded-full bg-success-soft text-success">
            <Icon name="check" size={14} strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
