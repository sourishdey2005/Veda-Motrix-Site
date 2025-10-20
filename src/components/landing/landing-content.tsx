import Image from 'next/image';
import Link from 'next/link';
import {
    Cog, TrendingUp, ShieldCheck, Users, MapPin, Clock, Play,
    GitFork, Home, X, Search, Mail, Twitter, Linkedin, FilePenLine
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Counter from './counter';
import Testimonials from './testimonials';
import Faq from './faq';
import { FeedbackLoop } from './feedback-loop';
import { Progress } from '../ui/progress';
import { Menu } from 'lucide-react';

const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 256 256" {...props}>
        <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
    </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0-0 256 256" {...props}>
        <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
    </svg>
);

const capabilities = [
    { icon: Cog, text: 'Predictive Maintenance' },
    { icon: TrendingUp, text: 'Performance Analytics' },
    { icon: ShieldCheck, text: 'Enhanced Security' },
    { icon: Users, text: 'User Management' },
    { icon: MapPin, text: 'Real-Time Tracking' },
    { icon: Clock, text: 'Efficiency Optimization' },
];

const scenarios = [
    {
        icon: GitFork,
        title: 'Fleet Management',
        description: 'From logistics corporations to ride-sharing services, our platform offers granular control and AI-driven insights to optimize routes, preemptively schedule maintenance, monitor driver behavior, and reduce operational costs, ensuring your fleet operates at peak performance and safety.',
        progress: 70
    },
    {
        icon: Home,
        title: 'Autonomous Vehicles',
        description: 'VEDA-MOTRIX is the cognitive engine for autonomous systems. We provide the essential real-time data processing, environmental analysis, and decision-making framework necessary for Level 4 and 5 autonomy, ensuring vehicles navigate the complexities of the real world with superhuman precision and safety.',
        progress: 90
    },
    {
        icon: X,
        title: 'Logistics & Delivery',
        description: 'Revolutionize your supply chain with our AI. We optimize every facet of logistics, from warehouse-to-doorstep route planning and real-time shipment tracking to dynamic rerouting based on traffic and weather data, ensuring timely, efficient, and cost-effective delivery cycles.',
        progress: 60
    }
];

const team = [
    { name: 'Ethan Carter', role: 'Chief Visionary Officer', image: getImg('team-ethan') },
    { name: 'Olivia Bennett', role: 'Chief Technology Officer', image: getImg('team-olivia') },
    { name: 'Noah Thompson', role: 'Head of Engineering', image: getImg('team-noah') },
];

const blogPosts = [
    {
        category: 'System Upgrade',
        title: 'VEDA-MOTRIX AI 2.0 Launched',
        description: 'Our next-gen platform is here, with enhanced predictive capabilities and a redesigned user interface.',
        date: 'Oct 26, 2023',
        image: getImg('blog-1')
    },
    {
        category: 'New Alliance',
        title: 'Partnership with NeoLogistics',
        description: 'We\'re excited to partner with NeoLogistics to optimize their delivery fleet with our AI.',
        date: 'Oct 15, 2023',
        image: getImg('blog-2')
    },
    {
        category: 'Thought Leadership',
        title: 'The Future of AI in Automotive',
        description: 'Read our CTO\'s thoughts on the upcoming trends that will shape the industry.',
        date: 'Sep 28, 2023',
        image: getImg('blog-3')
    },
];

const ScrollingBannerContent = () => (
    <div className="flex shrink-0 items-center space-x-12">
        <div className="text-center">
            <Counter target={10000} />
            <p className="text-white/80">Vehicles Analyzed in Real Time</p>
        </div>
        <div className="h-10 w-px bg-primary/30"></div>
        <div className="text-center">
            <Counter target={98} />
            <p className="text-white/80">Threats Neutralized</p>
        </div>
        <div className="h-10 w-px bg-primary/30"></div>
        <div className="text-center">
            <Counter target={15} />
            <p className="text-white/80">Efficiency Increased by %</p>
        </div>
        <div className="h-10 w-px bg-primary/30"></div>
    </div>
);


export default function LandingContent() {
    return (
        <div className="intro-animation">
            <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4 opacity-0 animate-intro-fade-up" style={{ animationDelay: '1.5s' }}>
                {getImg('logo') && <Image alt="VEDA-MOTRIX AI Logo" src={getImg('logo')!.imageUrl} width={160} height={40} className="h-10 w-auto animate-subtle-parallax" data-ai-hint={getImg('logo')!.imageHint} />}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#about" className="text-white/80 hover:text-primary transition-colors hover:text-glow">About</Link>
                    <Link href="#features" className="text-white/80 hover:text-primary transition-colors hover:text-glow">Features</Link>
                    <Link href="/dashboard" className="text-white/80 hover:text-primary transition-colors hover:text-glow">Dashboards</Link>
                    <Link href="#contact" className="text-white/80 hover:text-primary transition-colors hover:text-glow">Contact</Link>
                </nav>
                <button className="relative group flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-background/50 backdrop-blur-sm transition-all hover:bg-primary/20 hover:scale-110 hover:shadow-lg hover:shadow-primary/30 md:hidden">
                    <div className="absolute inset-0 rounded-full border-2 border-primary opacity-0 group-hover:animate-ping"></div>
                    <Menu className="h-5 w-5" />
                </button>
            </header>

            <section className="relative perspective-1000">
                <div className="@container transform-style-3d">
                    <div className="@[480px]:p-4">
                        <div className="flex min-h-[480px] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-4 pt-20 @[480px]:gap-8 @[480px]:rounded-lg" style={{ backgroundImage: `linear-gradient(rgba(15, 35, 35, 0.7) 0%, rgba(15, 35, 35, 0.9) 100%), url("${getImg('hero-bg')?.imageUrl}")` }}>
                            <div className="flex flex-col gap-2 text-center">
                                <h1 className="relative text-4xl font-black tracking-tighter text-white @[480px]:text-6xl text-glitch glitch-layers">
                                    VEDA-MOTRIX AI
                                    <span>VEDA-MOTRIX AI</span>
                                    <span>VEDA-MOTRIX AI</span>
                                </h1>
                                <p className="text-base font-normal text-white/80 @[480px]:text-lg opacity-0 animate-intro-fade-up" style={{ animationDelay: '0.8s' }}>
                                    Harnessing the digital nervous system of tomorrow's vehicles. Our AI transcends mere management, offering predictive sentience for unparalleled performance, security, and efficiency.
                                </p>
                            </div>
                            <Link href="https://vedamotrix.netlify.app/login" className="relative group flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-110 hover:shadow-primary/50 @[480px]:h-14 @[480px]:px-6 @[480px]:text-base opacity-0 animate-intro-fade-up" style={{ animationDelay: '1.2s' }}>
                                <span className="truncate">Initiate Interface</span>
                                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/30 rounded-full group-hover:animate-ripple"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-8 bg-background/50 backdrop-blur-sm overflow-hidden relative">
                <div className="glowing-line top-0"></div>
                <div className="flex animate-scroll-left-infinite whitespace-nowrap">
                    <ScrollingBannerContent />
                    <ScrollingBannerContent />
                </div>
                <div className="glowing-line bottom-0" style={{ animationDelay: '-6s' }}></div>
            </section>
            
            <section id="features" className="px-4 py-12 sm:px-6 lg:px-8 relative scroll-mt-20">
                <div className="glowing-line top-1/4"></div>
                <div className="glowing-line top-2/3" style={{ animationDelay: '-6s' }}></div>
                <h2 className="text-glow mb-8 text-center text-3xl font-bold tracking-tight text-white relative text-glitch">Core Capabilities</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {capabilities.map(({ icon: Icon, text }) => (
                        <div key={text} className="card-hover-effect flex items-center gap-4 rounded-xl border border-primary/20 bg-background/50 p-4 backdrop-blur-sm">
                            <div className="rounded-full bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 animate-pulse">
                                <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-base font-bold text-white">{text}</h3>
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="text-glow mb-8 text-center text-3xl font-bold tracking-tight text-white relative text-glitch">Live Demonstration</h2>
                <div className="p-4">
                    <div className="relative flex aspect-video items-center justify-center rounded-xl bg-cover bg-center animate-subtle-parallax" style={{ backgroundImage: `url("${getImg('demo-bg')?.imageUrl}")` }}>
                        <div className="absolute inset-0 rounded-xl bg-black/40 backdrop-blur-[2px]"></div>
                        <button className="relative group flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/80 text-white transition-all hover:scale-125 hover:bg-primary hover:shadow-2xl hover:shadow-primary/50">
                            <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping group-hover:animate-none"></div>
                            <Play className="h-8 w-8" />
                        </button>
                    </div>
                </div>
            </section>

            <section id="scenarios" className="px-4 py-12 sm:px-6 lg:px-8 scroll-mt-20">
                <h2 className="text-glow mb-8 text-center text-3xl font-bold tracking-tight text-white relative text-glitch">Application Scenarios</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {scenarios.map((scenario) => (
                        <div key={scenario.title} className="card-hover-effect flex flex-col rounded-xl border border-primary/20 bg-background/50 p-6 backdrop-blur-sm">
                             <div className="flex items-center gap-4 mb-4">
                                <div className="rounded-full bg-primary/10 p-3 text-primary">
                                    <scenario.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{scenario.title}</h3>
                            </div>
                            <p className="flex-grow text-white/80">{scenario.description}</p>
                            <div className="mt-4">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm text-white/70">Integration Progress</span>
                                    <span className="text-sm font-bold text-primary">{scenario.progress}%</span>
                                </div>
                                <Progress value={scenario.progress} className="h-2" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <FeedbackLoop />
            <Faq />
            
            <section className="px-4 py-12 sm:px-6 lg:px-8 relative">
                <div className="glowing-line bottom-1/4" style={{ animationDelay: '-5s' }}></div>
                <h2 className="text-glow mb-8 text-center text-3xl font-bold tracking-tight text-white relative text-glitch">System Architecture</h2>
                <div className="w-full relative group">
                    {getImg('architecture') && <Image alt="Architecture and Ecosystem Infographic" src={getImg('architecture')!.imageUrl} width={1200} height={675} className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105" data-ai-hint={getImg('architecture')!.imageHint} />}
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/10 rounded-lg pointer-events-none animate-pulse group-hover:bg-primary/5 transition-colors"></div>
                    <div className="absolute -top-2 -left-2 w-1/4 h-1/4 border-t-2 border-l-2 border-primary/50 rounded-tl-lg transition-all duration-300 group-hover:w-1/3 group-hover:h-1/3"></div>
                    <div className="absolute -bottom-2 -right-2 w-1/4 h-1/4 border-b-2 border-r-2 border-primary/50 rounded-br-lg transition-all duration-300 group-hover:w-1/3 group-hover:h-1/3"></div>
                </div>
            </section>
            
            <section id="about" className="px-4 py-12 sm:px-6 lg:px-8 scroll-mt-20">
                <h2 className="text-glow mb-4 text-center text-3xl font-bold tracking-tight text-white relative text-glitch">Our Mission</h2>
                <p className="mx-auto max-w-3xl text-center text-base font-normal text-white/80 animate-subtle-parallax">
                    VEDA-MOTRIX AI is engineering the future of mobility. We are dedicated to creating a world where transportation is safer, more efficient, and seamlessly integrated with our digital lives. By building the most advanced AI for vehicle intelligence, we empower our partners to lead the charge in the automotive revolution, delivering solutions that are not just innovative, but transformative.
                </p>
            </section>
            
            <section className="py-12">
                <h2 className="text-glow mb-8 text-center text-3xl font-bold tracking-tight text-white relative text-glitch">The Architects</h2>
                <div className="flex snap-x snap-mandatory overflow-x-auto px-4 pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex items-stretch gap-8 mx-auto">
                        {team.map((member) => (
                            <div key={member.name} className="flex w-40 snap-center flex-col items-center gap-4 text-center transition-transform duration-300 hover:scale-105 group">
                                {member.image && <Image alt={member.name} src={member.image.imageUrl} width={128} height={128} className="h-32 w-32 rounded-full object-cover ring-2 ring-primary/50 transition-all duration-300 group-hover:ring-4 group-hover:shadow-xl group-hover:shadow-primary/30" data-ai-hint={member.image.imageHint} />}
                                <div>
                                    <p className="text-base font-medium text-white">{member.name}</p>
                                    <p className="text-sm font-normal text-white/60">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <Testimonials />

            <section className="px-4 py-12 sm:px-6 lg:px-8">
                <h2 className="text-glow mb-8 text-center text-3xl font-bold tracking-tight text-white relative text-glitch">Intel &amp; Dispatches</h2>
                <div className="mb-8">
                    <div className="relative">
                        <input className="w-full bg-background/50 border border-primary/30 rounded-full py-3 pl-12 pr-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-transparent transition-shadow duration-300 shadow-md focus:shadow-lg focus:shadow-primary/30" placeholder="Query the archive..." type="text" />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                            <Search className="h-5 w-5 text-primary/70 animate-pulse" />
                        </div>
                    </div>
                </div>
                <div className="flex snap-x snap-mandatory overflow-x-auto px-4 pb-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex items-stretch gap-4">
                        {blogPosts.map((post) => (
                            <div key={post.title} className="card-hover-effect flex w-72 shrink-0 snap-center flex-col overflow-hidden rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm">
                                {post.image && <Image alt={post.title} src={post.image.imageUrl} width={288} height={160} className="h-40 w-full object-cover" data-ai-hint={post.image.imageHint} />}
                                <div className="flex-grow p-4">
                                    <p className="text-sm text-accent font-semibold">{post.category}</p>
                                    <h3 className="mt-1 text-base font-bold text-white">{post.title}</h3>
                                    <p className="mt-2 text-sm text-white/80">{post.description}</p>
                                </div>
                                <div className="border-t border-primary/20 p-4 text-xs text-white/60">
                                    {post.date}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 rounded-xl border border-primary/20 bg-background/50 p-6 backdrop-blur-sm animate-fade-in-up">
                    <h3 className="text-glow text-xl font-bold text-center text-white">Subscribe for Intelligence Briefings</h3>
                    <p className="text-center text-white/70 mt-2 text-sm">Receive classified updates, industry analysis, and platform intel directly to your inbox.</p>
                    <form className="mt-6 flex flex-col gap-4">
                        <input className="w-full bg-background/70 border-primary/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-primary transition duration-300" placeholder="Enter your email" type="email" />
                        <button className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/40 active:scale-95 animate-glow" type="submit">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
            
            <section className="px-4 py-16 text-center sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-glow text-3xl font-bold tracking-tight text-white sm:text-4xl animate-subtle-parallax">Ready to Command the Future?</h2>
                    <p className="mt-4 text-lg text-white/80 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>Integrate VEDA-MOTRIX AI and unlock the next evolution of vehicle intelligence. The road ahead is intelligent. Are you?</p>
                    <div className="mt-8 flex justify-center">
                        <Link href="/dashboard" className="relative group flex h-14 min-w-[84px] max-w-[480px] grow cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:scale-110 hover:shadow-primary/50">
                            <span className="relative z-10">Request Access</span>
                            <span className="absolute top-0 left-0 w-full h-full bg-accent/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                             <span className="relative z-10">Request Access</span>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="contact" className="border-t border-primary/10 bg-background/50 px-4 py-12 backdrop-blur-sm sm:px-6 lg:px-8 relative scroll-mt-20">
                <div className="glowing-line top-1/2"></div>
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-glow mb-8 text-center text-3xl font-bold tracking-tight text-white relative text-glitch">Establish Comms</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-105 group">
                            <div className="mt-1 rounded-full bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:text-accent">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Encrypted Channel</h3>
                                <p className="text-white/80">contact@veda-motrix.ai</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 transition-transform duration-300 hover:scale-105 group">
                            <div className="mt-1 rounded-full bg-primary/10 p-3 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:text-accent">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Command Center</h3>
                                <p className="text-white/80">123 Futura Drive, Neo-Metropolis, 90210</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <footer className="flex flex-col items-center gap-8 border-t border-primary/10 bg-background/50 px-5 py-10 text-center">
                <div className="flex flex-col items-center gap-4">
                    {getImg('logo-footer') && <Image alt="VEDA-MOTRIX AI Logo" src={getImg('logo-footer')!.imageUrl} width={192} height={48} className="h-12 w-auto" data-ai-hint={getImg('logo-footer')!.imageHint} />}
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
                        <Link href="/privacy" className="text-base font-normal text-white/60 transition-colors hover:text-primary hover:text-glow">Privacy Protocol</Link>
                        <a className="text-base font-normal text-white/60 transition-colors hover:text-primary hover:text-glow" href="#">Terms of Engagement</a>
                    </div>
                </div>
                <div className="flex justify-center gap-4">
                    <a className="text-white/60 transition-colors hover:text-primary hover:scale-110" href="#">
                        <TwitterIcon className="h-6 w-6" />
                    </a>
                    <a className="text-white/60 transition-colors hover:text-primary hover:scale-110" href="#">
                        <LinkedInIcon className="h-6 w-6" />
                    </a>
                </div>
                <p className="text-base font-normal text-white/60">© 2024 VEDA-MOTRIX AI. All rights reserved.</p>
            </footer>

            <button className="fixed bottom-4 right-4 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-primary bg-background/50 backdrop-blur-sm transition-all hover:scale-110 animate-glow hover:shadow-2xl hover:shadow-primary/50 group">
                <div className="absolute inset-0 rounded-full border-2 border-accent scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 animate-ping"></div>
                <FilePenLine className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
            </button>
        </div>
    );
}

    

    





