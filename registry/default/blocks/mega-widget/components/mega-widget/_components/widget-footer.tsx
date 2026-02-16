export type WidgetFooterProps = {
  onIncrement: () => void
  onReset: () => void
}

export function WidgetFooter({ onIncrement, onReset }: WidgetFooterProps) {
  return (
    <footer className="flex items-center justify-end gap-2 border-t p-4">
      <button
        type="button"
        className="rounded-md border bg-background px-3 py-2 text-sm"
        onClick={onReset}
      >
        Reset
      </button>
      <button
        type="button"
        className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground"
        onClick={onIncrement}
      >
        Increment
      </button>
    </footer>
  )
}
