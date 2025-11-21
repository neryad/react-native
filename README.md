# React Native Course Repository

This repository contains the projects and exercises from the React Native course. It includes a mix of TypeScript basics (Web) and React Native applications built with Expo.

## Projects Structure

| Folder              | Description                         | Type                |
| :------------------ | :---------------------------------- | :------------------ |
| `01-bases`          | TypeScript & React basics refresher | React Web (Vite)    |
| `02-testing-app`    | Introduction to testing             | React Native (Expo) |
| `03-counter-app`    | Simple Counter Application          | React Native (Expo) |
| `04-calculator-app` | Calculator Application              | React Native (Expo) |
| `05-navigation-app` | Navigation Examples                 | React Native (Expo) |
| `06-movies-app`     | Movies Application                  | React Native (Expo) |

## Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **Expo Go**: For running React Native apps on your physical device.
- **Android Studio / Xcode**: For running on simulators/emulators.

## Getting Started

### 1. React Web Projects (e.g., 01-bases)

Navigate to the folder and install dependencies:

```bash
cd 01-bases
npm install
```

Run the development server:

```bash
npm run dev
```

### 2. React Native Projects (Expo)

Navigate to the project folder (e.g., `03-counter-app`):

```bash
cd 03-counter-app
npm install
```

Start the project:

```bash
# Run on Android Emulator
npm run android

# Run on iOS Simulator (macOS only)
npm run ios

# Start Metro Bundler (for physical device via Expo Go)
npm start
```

## Technologies Used

- **React Native** (Expo)
- **React**
- **TypeScript**
- **Vite** (for basics)
- **NativeWind / TailwindCSS** (if applicable)
