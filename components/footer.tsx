import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/20">
      <div className="mx-auto max-w-7xl">

        <div className="p-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Giorgia Ascia. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Nordic & Arctic Travel Design
          </p>
        </div>
      </div>
    </footer>
  )
}
