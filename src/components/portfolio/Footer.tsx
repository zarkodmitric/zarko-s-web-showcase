export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Zarko Dmitric. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <a href="https://github.com/zarkodmitric" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/zarkodmitric" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">
            LinkedIn
          </a>
          <a href="mailto:dmitricc52@gmail.com" className="transition-colors hover:text-primary">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
