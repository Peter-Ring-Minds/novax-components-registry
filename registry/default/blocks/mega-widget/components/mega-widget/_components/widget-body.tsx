import type { MegaWidgetItem } from "../../../lib/mega-widget"
import { WidgetRow } from "./widget-row"

export type WidgetBodyProps = {
  items: MegaWidgetItem[]
}

export function WidgetBody({ items }: WidgetBodyProps) {
  return (
    <div className="p-4">
      <div className="space-y-2">
        {items.map((item) => (
          <WidgetRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
