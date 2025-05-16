# sc-whatsapp-desktop

> A template to build an ElectronJS app with NextJS

---

<div align="center">
  <img alt="Stars" src="https://img.shields.io/github/stars/saulotarsobc/electronjs-with-nextjs.svg">
  <img alt="Forks" src="https://img.shields.io/github/forks/saulotarsobc/electronjs-with-nextjs.svg">
</div>

<div align="center">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  <img alt="Version" src="https://img.shields.io/github/v/release/saulotarsobc/electronjs-with-nextjs.svg">
  <img alt="Contributors" src="https://img.shields.io/github/contributors/saulotarsobc/electronjs-with-nextjs.svg">
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/saulotarsobc/electronjs-with-nextjs.svg">
  <img alt="Issues" src="https://img.shields.io/github/issues/saulotarsobc/electronjs-with-nextjs.svg">
  <img alt="Pull Requests" src="https://img.shields.io/github/issues-pr/saulotarsobc/electronjs-with-nextjs.svg">
  <img alt="Build Status" src="https://img.shields.io/github/actions/workflow/status/saulotarsobc/electronjs-with-nextjs/.github/workflows/launch-app.yaml">
</div>

---

<!-- Badge Start -->
<div align="center">
 <img alt="static badge from nodejs" src="https://img.shields.io/badge/NodeJS-v22.15.1-44883e">
 <img alt="static badge from electronjs" src="https://img.shields.io/badge/ElectronJS-v36.2.1-46816e">
 <img alt="static badge from electron builder" src="https://img.shields.io/badge/Electron%20Builder-v26.0.12-blue">
 <img alt="static badge from typescript" src="https://img.shields.io/badge/TypeScript-v5.8.3-blue">
 <img alt="static badge from nextjs" src="https://img.shields.io/badge/NextJS-vN/A-black">
 <img alt="static badge from reactjs" src="https://img.shields.io/badge/ReactJS-vN/A-61DAFB">
 <img alt="static badge from sequelize" src="https://img.shields.io/badge/Sequelize-vN/A-52B0E7">
</div>
<!-- Badge End -->

---

<div align="center">
  <img alt="demo" src="./demo/demo.png">
</div>

---

## Use

```sh
git clone https://github.com/saulotarsobc/electron-next-ts.git;
cd electron-next-ts;
npm install;
npm run dev;
```

## Help

- [Electronjs - documentation](https://www.electronjs.org/pt/docs/latest/)
- [Any Linux Target](https://www.electron.build/linux)

## NPM Commands

- `npm run dev`: Run Electron with development build.
  - `npm run build:backend`: Build backend with TypeScript.
  - `electron . --dev`: Run Electron with development build.
- `npm run prebuild`: Remove build and dist directories.
- `npm run build`: Build frontend and backend.
  - `npm run build:frontend`: Build frontend with Next.js.
  - `npm run build:backend`: Build backend with TypeScript.
- `npm run postinstall`: Install dependencies for Electron.
- `npm run dist`: Build and make a distribution package with Electron Builder.

## electron-builder Configutarion to this project

```yaml
electronVersion: 36.2.1
asar: true
compression: normal
productName: SC - Whatsapp Desktop
appId: br.com.desktop.whatsapp.sc

extraMetadata:
  main: dist/index.js

files:
  - dist
  - frontend/out

directories:
  output: out

publish:
  - provider: github

win:
  target:
    - nsis
  icon: ./build/icon.ico
  artifactName: ${name}-${version}-windows-${arch}.${ext}
  signAndEditExecutable: false

nsis:
  artifactName: ${name}-${version}-windows-${arch}-nsis-installer.${ext}
  allowToChangeInstallationDirectory: true
  oneClick: false
  perMachine: true
  installerIcon: ./build/icon.ico

mac:
  target: dmg
  icon: ./build/icon.ico
  artifactName: ${productName}-Setup-${version}.${ext}
  darkModeSupport: true
  signIgnore: null

linux:
  target:
    - AppImage
    - deb
  icon: ./build/icon.ico
  artifactName: ${productName}-Setup-${version}.${ext}
```

## Git Commands

### Release

```bash
#! bash
git tag "v$1"
git push origin --tags
```
