import { Icon, type IconName } from "@/components/ui/Icon";

const tints = [
  "bg-primary/10 text-primary",
  "bg-success-soft text-success",
  "bg-secondary/10 text-secondary",
  "bg-warning-soft text-warning",
];

type Props = { title: string; body: string; icon: IconName; index?: number };

export function BenefitCard({ title, body, icon, index = 0 }: Props) {
  return (
    <li className="flex flex-col rounded-3xl border border-border bg-surface p-7 shadow-card">
      <span className={`grid size-14 place-items-center rounded-2xl ${tints[index % tints.length]}`}>
        <Icon name={icon} size={26} />
      </span>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-text">{title}</h3>
      <p className="mt-2 text-[1.02rem] leading-relaxed text-muted">{body}</p>
    </li>
  );
}
