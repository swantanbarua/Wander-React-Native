# Wander (React Native)

Wander is a travel-stays app inspired by Airbnb, built from scratch in React Native.
It is one of three builds of the same product spec: native iOS (SwiftUI), native Android,
and this hybrid version.

**Status:** early foundation, 10 build steps done (13 Oct 2026). Routing and the theme
layer are in place; screens come next.

## Why React Native

I am learning React Native, so this build is done by hand, one small step at a time,
from an empty Expo template up to a production release.

## Stack

| Area | Choice |
| --- | --- |
| Framework | Expo SDK 57, React Native 0.86, React 19.2 |
| Language | TypeScript 6.0, strict mode |
| Navigation | Expo Router (file-based routes, typed routes, deep links via the `wander://` scheme) |
| Styling | `StyleSheet.create` in the same file, below the component |
| Theme | Light and dark palettes picked by a `useTheme()` hook that follows the system setting |

Planned: Zustand for screen state, expo-image, FlashList, SQLite, Jest + React Native
Testing Library, Maestro end-to-end tests.

## Architecture

Clean Architecture per feature. Dependencies point inward.

```
wander-react-native/
├── app/                  # Expo Router routes (screens)
│   └── index.tsx         # Home screen
└── src/
    ├── core/             # shared code used by every feature
    │   └── theme/
    │       ├── colors.ts     # light and dark colour palettes
    │       └── useTheme.ts   # returns the palette for the current colour scheme
    └── features/         # coming next: <feature>/{domain,data,presentation}
```

## Done so far

- [x] Expo project from the blank TypeScript template
- [x] Expo Router as the entry point, `wander://` deep-link scheme
- [x] Home screen route
- [x] Old `App.tsx` / `index.ts` bootstrap removed
- [x] Light and dark colour palettes (dark is type-checked against light)
- [x] `useTheme()` hook
- [ ] Theme applied to the Home screen
- [ ] Spacing, radius and typography tokens
- [ ] Components and feature screens

## Run it

```bash
cd wander-react-native
npm install
npm run ios       # or: npm run android
```
