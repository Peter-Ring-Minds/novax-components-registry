export function Hello({ name }: { name: string }) {
  return (
    <div className="rounded-md bg-muted p-4 text-sm">
      Hello, {name} 👋
    </div>
  )
}
