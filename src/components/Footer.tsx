export function Footer() {
  return (
    <footer className="pt-8 pb-32 text-center border-t border-white/5 relative z-10 bg-background">
      <p className="text-muted-foreground font-medium flex items-center justify-center gap-2">
        Designed & Built by 
        <span className="text-foreground font-display font-bold tracking-wide">
          Saraswathi <span className="text-primary"></span>
        </span>
      </p>
      <p className="text-sm text-muted-foreground/60 mt-2">
        © {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
}
