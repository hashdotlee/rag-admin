export default function FormItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-slate-700 text-sm font-bold">{label}</label>
      {children}
    </div>
  );
}
