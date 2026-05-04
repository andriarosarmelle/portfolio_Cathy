export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 z-50 bg-gray-900 text-white px-4 py-2 rounded-md shadow-lg"
    >
      Aller au contenu principal
    </a>
  );
}
