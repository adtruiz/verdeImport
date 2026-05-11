import { Logo } from "./Logo";

export function Footer({ rights }: { rights: string }) {
  return (
    <footer className="border-t border-charcoal-100 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Logo className="h-6 w-auto text-charcoal-900" />
        <p className="text-xs text-charcoal-400">
          &copy; {new Date().getFullYear()} Verde Import. {rights}
        </p>
      </div>
    </footer>
  );
}
