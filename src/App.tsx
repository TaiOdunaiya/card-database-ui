import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/theme-provider';
import { Dashboard } from '@/pages/dashboard';
function App() {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='card-collector-theme'>
      <main className = "min-h-screen bg-background">
        <Dashboard />
      </main>
      <Toaster />
    </ThemeProvider>
  )
}
export default App
