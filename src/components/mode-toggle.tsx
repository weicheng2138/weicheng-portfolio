import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from '@/components/theme-provider';
import { Toggle } from '@/components/ui/toggle';

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Toggle
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
    >
      <MdLightMode className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-1000 ease-out dark:-rotate-90 dark:scale-0" />
      <MdDarkMode className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-1000 ease-out dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Toggle>
  );
}
