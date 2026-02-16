export type WidgetHeaderProps = {
  title: string
  count: number
}

export function WidgetHeader({ title, count }: WidgetHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <div>
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-muted-foreground">Internal parts live in a subfolder</div>
      </div>
      <div className="text-xs text-muted-foreground">Clicks: {count}</div>
    </header>
  )
}
