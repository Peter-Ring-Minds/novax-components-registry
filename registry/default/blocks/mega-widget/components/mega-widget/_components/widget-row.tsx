import type { MegaWidgetItem } from "../../../lib/mega-widget"

export type WidgetRowProps = {
  item: MegaWidgetItem
}

export function WidgetRow({ item }: WidgetRowProps) {
  return (
    <div className="flex items-center justify-between rounded-md bg-muted px-3 py-2 text-sm">
      <span>{item.label}</span>
      <span className="text-xs text-muted-foreground">#{item.id}</span>
    </div>
  )
}
