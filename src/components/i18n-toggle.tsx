import { Toggle } from '@/components/ui/toggle';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

export function I18nToggle() {
  const { i18n } = useTranslation();

  return (
    <Toggle
      onClick={() => {
        i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
      }}
    >
      <div
        className={cn(
          'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-1000',
          {
            '-rotate-90 scale-0': i18n.language === 'zh',
          },
        )}
      >
        EN
      </div>
      <div
        className={cn(
          'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-1000',
          {
            'rotate-0 scale-100': i18n.language === 'zh',
          },
        )}
      >
        中
      </div>
      <span className="sr-only">Toggle language</span>
    </Toggle>
  );
}
