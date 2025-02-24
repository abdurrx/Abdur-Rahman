export default function footer() {
  return (
    <footer className="relative border-t border-black/10 bg-background/80">
      <div className="max-w-screen-lg md:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Abdur Rahman. All rights reserved
        </p>
      </div>
    </footer>
  );
}