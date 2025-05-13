import './globals.css';
import type { Metadata } from 'next';
import { Dosis } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';

const dosis = Dosis({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dosis',
});

export const metadata: Metadata = {
  title: 'Book a Session with Eshan Roy',
  description: 'Schedule a technical consultation, project discussion, or mentoring session with Eshan Roy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={dosis.variable}>
      <body className={`${dosis.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col bg-gradient-to-br from-background via-background to-secondary/20">
            <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(var(--primary-rgb),0.1),transparent)]" />
            <Navbar />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}