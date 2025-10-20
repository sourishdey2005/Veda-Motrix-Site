type LoadingScreenProps = {
  isVisible: boolean;
};

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500">
      <div className="relative w-full max-w-xs text-center">
        <div className="text-primary text-3xl font-bold tracking-widest animate-pulse">VEDA-MOTRIX</div>
        <p className="mt-4 text-white/80 text-lg animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Synchronizing Karma of Machines… 🚗💫
        </p>
        <div className="mt-8 h-1 w-full bg-primary/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-accent animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
}
