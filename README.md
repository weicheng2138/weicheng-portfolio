# Weicheng's Portfolio V2

![Vercel](https://vercelbadge.vercel.app/api/weicheng2138/weicheng-portfolio)

A playful version of portfolio app. Almost care every detail of the site.

## 🎨 Color Reference

| Color     | Hex                                                                | Color  | Hex                                                                |
| --------- | ------------------------------------------------------------------ | ------ | ------------------------------------------------------------------ |
| primary01 | ![#F4F9FB](https://via.placeholder.com/10/F4F9FB?text=+) `#F4F9FB` | gray01 | ![#FCFCFC](https://via.placeholder.com/10/FCFCFC?text=+) `#FCFCFC` |
| primary02 | ![#E2F4F8](https://via.placeholder.com/10/E2F4F8?text=+) `#E2F4F8` | gray02 | ![#F4F4F4](https://via.placeholder.com/10/F4F4F4?text=+) `#F4F4F4` |
| primary03 | ![#3FB1E8](https://via.placeholder.com/10/3FB1E8?text=+) `#3FB1E8` | gray03 | ![#D9D9D9](https://via.placeholder.com/10/D9D9D9?text=+) `#D9D9D9` |
| primary04 | ![#1682B6](https://via.placeholder.com/10/1682B6?text=+) `#1682B6` | gray04 | ![#888888](https://via.placeholder.com/10/888888?text=+) `#888888` |
| primary05 | ![#50585C](https://via.placeholder.com/10/50585C?text=+) `#50585C` | gray05 | ![#4D4D4D](https://via.placeholder.com/10/4D4D4D?text=+) `#4D4D4D` |
|           |                                                                    | gray06 | ![#3D3D3D](https://via.placeholder.com/10/3D3D3D?text=+) `#3D3D3D` |

## Stacks

- [x] 🌘 [shadcn](https://ui.shadcn.com/), with lovely customized ui and fluent developing experience.
- [x] 🌊 [Tailwindcss](https://tailwindcss.com/)
- [x] 👾 [Framer Motion](https://www.framer.com/motion/)
- [x] ⚛️ [Embla Carousel](https://www.embla-carousel.com/)
- [x] 🌏 [i18n Next](https://react.i18next.com/)
- [x] 🪖 [React Helmet](https://github.com/nfl/react-helmet)
- [x] ✨ Eslint & prettier
- [x] ✏️ cz (with commitizen installed globally)

## Getting Started

First, run the development server:

```bash
# install
pnpm install

# dev
pnpm dev

# build
pnpm build

# serve
pnpm preview
```

## Some reminders

- You can start editing entry point by modifying `src/main.tsx`. The page auto-updates as you edit the file.
- Theme is based on shadcn and modify it to my [theme](https://ui.shadcn.com/themes).
- `Typography` component is well handled.
- We have `cn` function in `lib/utils.ts` to help us to merge className and clsx to do more flexible conditioning.
- React `forwardRef`, `createPortal`, `ElementRef<'div'>`
