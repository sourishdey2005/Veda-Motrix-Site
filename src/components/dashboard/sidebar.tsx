"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarTrigger } from '@/components/ui/sidebar';
import { Image } from 'next/dist/client/image-component';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { LayoutDashboard, Wrench, Zap, Shield, Map, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useSidebar } from '../ui/sidebar';

const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/maintenance', label: 'Maintenance', icon: Wrench },
    { href: '/dashboard/efficiency', label: 'Efficiency', icon: Zap },
    { href: '/dashboard/security', label: 'Security', icon: Shield },
    { href: '/dashboard/tracking', label: 'Tracking', icon: Map },
];

export default function DashboardSidebar() {
    const pathname = usePathname();
    const { isMobile } = useSidebar();
    const logo = PlaceHolderImages.find(img => img.id === 'logo');

    return (
        <Sidebar variant="sidebar" collapsible="icon">
            <SidebarHeader>
                {isMobile && <SidebarTrigger />}
                {logo && (
                    <Image src={logo.imageUrl} alt="VEDA-MOTRIX Logo" width={120} height={30} className="w-30 h-auto" />
                )}
            </SidebarHeader>
            <SidebarContent className="p-2">
                <SidebarMenu>
                    {navItems.map((item) => (
                        <SidebarMenuItem key={item.label}>
                            <Link href={item.href}>
                                <SidebarMenuButton
                                    isActive={pathname === item.href}
                                    tooltip={{ children: item.label, side: 'right' }}
                                    className="data-[active=true]:bg-primary/10 data-[active=true]:text-primary data-[active=true]:shadow-inner data-[active=true]:shadow-primary/10"
                                >
                                    <item.icon className="h-5 w-5" />
                                    <span>{item.label}</span>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="p-2">
                <SidebarMenu>
                    <SidebarMenuItem>
                         <Link href="/">
                            <SidebarMenuButton tooltip={{ children: 'Logout', side: 'right' }}>
                                <LogOut className="h-5 w-5" />
                                <span>Logout</span>
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
                 <div className="flex items-center gap-3 p-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:h-8">
                    <Avatar className="h-8 w-8 group-data-[collapsible=icon]:h-full group-data-[collapsible=icon]:w-full">
                        <AvatarImage src="https://picsum.photos/seed/avatar/40/40" alt="User" />
                        <AvatarFallback>OP</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                        <span className="text-sm font-semibold text-foreground">Operator</span>
                        <span className="text-xs text-muted-foreground">op@veda-motrix.ai</span>
                    </div>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
