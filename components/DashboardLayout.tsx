"use client";

import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Ticket, 
  Briefcase, 
  MessageSquare, 
  Menu as MenuIcon 
} from 'lucide-react';

const { Header, Sider, Content } = Layout;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { key: '/', icon: <LayoutDashboard className="w-4 h-4" />, label: <Link href="/">Dashboard</Link> },
    { key: '/agenda', icon: <Calendar className="w-4 h-4" />, label: <Link href="/agenda">Agenda</Link> },
    { key: '/speakers', icon: <Users className="w-4 h-4" />, label: <Link href="/speakers">Speakers</Link> },
    { key: '/tickets', icon: <Ticket className="w-4 h-4" />, label: <Link href="/tickets">Tickets</Link> },
    { key: '/sponsors', icon: <Briefcase className="w-4 h-4" />, label: <Link href="/sponsors">Sponsors</Link> },
    { key: '/blogs', icon: <MessageSquare className="w-4 h-4" />, label: <Link href="/blogs">Insights</Link> },
  ];

  return (
    <Layout className="min-h-screen bg-transparent">
      <Sider 
        trigger={null} 
        collapsible 
        collapsed={collapsed}
        className="border-r border-white/5 backdrop-blur-3xl z-50"
        width={260}
        style={{ background: 'rgba(17, 24, 39, 0.4)' }}
      >
        <div className="h-16 flex items-center px-6 border-b border-white/5">
          {!collapsed && (
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold tracking-tight text-white"
            >
              Antigravity<span className="text-brand-blue">.</span>
            </motion.span>
          )}
          {collapsed && (
            <span className="text-xl font-bold tracking-tight text-brand-blue mx-auto">A.</span>
          )}
        </div>
        <div className="p-4">
          <Menu
            mode="inline"
            selectedKeys={[pathname === '/' ? '/' : `/${pathname.split('/')[1]}`]}
            items={menuItems}
            className="border-none bg-transparent"
          />
        </div>
      </Sider>
      
      <Layout className="bg-transparent">
        <Header 
          className="h-16 px-6 flex items-center justify-between sticky top-0 z-40 border-b border-white/5"
          style={{ background: 'rgba(9, 9, 11, 0.6)', backdropFilter: 'blur(24px)' }}
        >
          <Button
            type="text"
            icon={<MenuIcon className="w-5 h-5 text-[var(--muted)] hover:text-white transition-colors" />}
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5"
          />
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full btn-primary text-sm font-semibold"
            >
              Deploy Now
            </motion.button>
          </div>
        </Header>
        
        <Content className="p-6 md:p-10 max-w-[1600px] mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </Content>
      </Layout>
    </Layout>
  );
}
