---
sidebar_position: 3
---

# Productivity

## Windows Startup

Press `Win + R`, type `shell:startup`, and press Enter

In the Startup folder, copy shortcuts for programs you want to launch automatically on windows launch:

- ChatGPT
- Visual Studio Code
- Google Chrome (with specific user profile)
- [Always stay on Top window](#always-stay-on-top-window)

## Pin Programs to Taskbar

Right click on any program shortcut and select **Pin to taskbar** for easy access

## Always stay on Top window

- For example: It keeps your emulator window always visible on top while coding to avoid losing focus when switching app

- Open **VS Code**
- Create a new file named `alwaysontop.ahk`
- Add the following line to the file:

  ```
  ^]:: Winset, Alwaysontop, , A
  ```

  _(This sets Ctrl + ] as the hotkey to toggle "Always on Top" for the active window)_

- Save the file, and make `alwaysontop.ahk` file start on [`Windows Startup`](#windows-startup)

## Chrome Extensions

- [Google Translate](https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=en) - Quickly translate selected text
- [Color Zilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en) - Eyedropper, color picker, gradient generator
- [Youtube Playback Speed Control](https://chromewebstore.google.com/detail/youtube-playback-speed-co/hdannnflhlmdablckfkjpleikpphncik) - Control playback speed with shortcuts
- [Previous Tab](https://chromewebstore.google.com/detail/previous-tab/bjaniflnlhhofabpoamhnobeonjcjjpl)
- [QuicKey](https://chromewebstore.google.com/detail/quickey-%E2%80%93-the-quick-tab-s/ldlghkoiihaelfnggonhjnfiabmaficg) – Quick tab switcher

## Shortcuts

### Windows Keyboard Shortcuts

- `Ctrl + Shift + Esc`: Open Task Manager
- `Alt + Tab`: Switch between open applications
- `win + V`: Open clipboard history
- `win + D`: Show desktop
- `win + E`: Open File Explorer
- `win + L`: Lock your PC
- `win + R`: Open the Run dialog box
- `win + S`: Open Search
- `win + I`: Open Settings
- `win + Shift + S`: Open Snipping Tool for screenshots
- `win + .` (period): Open emoji panel
- `ctrl + ]`: Toggle [Always On Top](#always-stay-on-top-window) for the active window

#### Basics

- `Ctrl + C`: Copy selected item
- `Ctrl + X`: Cut selected item
- `Ctrl + V`: Paste copied or cut item
- `Ctrl + Z`: Undo an action
- `Ctrl + Y`: Redo an action
- `Ctrl + A`: Select all items in a document or window
- `Ctrl + S`: Save the current document
- `Ctrl + P`: Print the current document
- `Ctrl + N`: Open a new window or document
- `Ctrl + F`: Open the Find dialog to search within the current document or window

### Chrome Keyboard Shortcuts

- `Ctrl + N`: Open a new window
- `Ctrl + T`: Open a new tab
- `Ctrl + W`: Close the current tab
- `Ctrl + Shift + T`: Reopen the last closed tab
- `Ctrl + Tab`: Switch to the next tab
- `Ctrl + Shift + Tab`: Switch to the previous tab
- `Ctrl + L` or `Alt + D`: Focus the address bar
- `Ctrl + F`: Open the find bar to search on the current page
- `Ctrl + R` or `F5`: Reload the current page
- `Ctrl + H`: Open the History page
- `Ctrl + J`: Open the Downloads page
- `Ctrl + Shift + N`: Open a new incognito window
- `Ctrl + Shift + B`: Toggle the bookmarks bar
- `Ctrl + Shift + I`: Open Developer Tools
- `Ctrl + Shift + C`: Open Developer Tools with the element selector

### VSCode Keyboard Shortcuts

- `Ctrl + Tab`: Switch to the next open file tab
- `Ctrl + P`: Quick Open (navigate to files)
- `Ctrl + Shift + P`: Command Palette (access all commands)
- `Ctrl + B`: Toggle Sidebar visibility
- Ctrl + `: Toggle Terminal
- `Ctrl + ,`: Open Settings
- `Ctrl + K Ctrl + S`: Open Keyboard Shortcuts
- `Ctrl + /`: Toggle line comment
- `Ctrl + Space`: Trigger suggestion (IntelliSense)
- `Ctrl + .`: Trigger parameter hints
- `Ctrl + F`: Search within the current file
- `Ctrl + Shift + F`: Search across files
- `Ctrl + G`: Go to line
- `F12`: Go to definition
- `Alt + F12`: Peek definition
- `Alt + Left Arrow`: Navigate back
- `Alt + Right Arrow`: Navigate forward
- `Alt + Up/Down Arrow`: Move line up/down
- `Shift + Alt + Up/Down Arrow`: Copy line up/down
- `End`: Go to end of line
- `Home`: Go to beginning of line
- `Ctrl + End`: Go to end of file
- `Ctrl + Home`: Go to beginning of file
- `Ctrl + Shift + \`: Jump to matching bracket
- `Ctrl + ]`: Indent line
- `Ctrl + [`: Outdent line
- `Ctrl + K Ctrl + 0`: Fold (collapse) region
- `Ctrl + K Ctrl + J`: Unfold (uncollapse) region
