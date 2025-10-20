import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
       <div className="absolute inset-0 z-0 opacity-30">
        {/* You can reuse ParticleCanvas here if you want the same background */}
      </div>
      <Card className="w-full max-w-md bg-background/80 backdrop-blur-sm border-primary/20 shadow-xl shadow-primary/10 z-10 card-hover-effect">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-glow">
            <span className="text-glitch glitch-layers">
              VEDA-MOTRIX AI
              <span>VEDA-MOTRIX AI</span>
              <span>VEDA-MOTRIX AI</span>
            </span>
          </CardTitle>
          <CardDescription className="text-white/70">
            Authenticate to access the vehicle intelligence grid.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary/80">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="operator@veda-motrix.ai"
                required
                className="bg-background/70 border-primary/30 focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-primary/80">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••••••"
                required
                className="bg-background/70 border-primary/30 focus:ring-primary"
              />
            </div>
            <Button type="submit" className="w-full animate-glow bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/40 active:scale-95 transition-all duration-300">
              <Link href="/dashboard">Initiate Connection</Link>
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            <p className="text-white/60">
              Don't have access clearance?{' '}
              <Link href="/" className="font-semibold text-primary hover:text-glow transition">
                Request Protocol
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
