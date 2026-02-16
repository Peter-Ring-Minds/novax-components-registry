import { useMegaWidget } from "../../hooks/use-mega-widget"
import type { MegaWidgetItem } from "../../lib/mega-widget"
import { WidgetBody } from "./_components/widget-body"
import { WidgetFooter } from "./_components/widget-footer"
import { WidgetHeader } from "./_components/widget-header"

export type MegaWidgetProps = {
  title?: string
  items?: MegaWidgetItem[]
}

export function MegaWidget({ title = "Mega Widget", items }: MegaWidgetProps) {
  const { count, increment, reset } = useMegaWidget()

  const resolvedItems: MegaWidgetItem[] =
    items ??
    [
      { id: "a", label: "First internal row" },
      { id: "b", label: "Second internal row" },
      { id: "c", label: "Third internal row" },
    ]

  return (
    <section className="rounded-md border bg-background">
      <WidgetHeader title={title} count={count} />
      <WidgetBody items={resolvedItems} />
      <WidgetFooter onIncrement={increment} onReset={reset} />
    </section>
  )
}
