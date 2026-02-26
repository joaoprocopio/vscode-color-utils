# Color Utils

Color format conversion utilities for Visual Studio Code.

## Features

Select any color in the editor and convert it to a different format. Supports Hex, OKLCH, HSL, and RGB.

## Usage

1. Select a color value in the editor (e.g., `#ff0000`)
2. Open the command palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
3. Run **Color Utils: Convert color format**
4. Pick the target format

Supports multiple selections — all selected colors are converted at once.

If a selection cannot be parsed as a color, an inline diagnostic is shown. Run **Color Utils: Clear diagnostics** to dismiss them.

## Supported Formats

| Format | Example                      |
| ------ | ---------------------------- |
| Hex    | `#ff0000`                    |
| OKLCH  | `oklch(50.35% 0.1396 29.23)` |
| HSL    | `hsl(0 100% 50%)`            |
| RGB    | `rgb(255 0 0)`               |

## Commands

| Command                             | Description                                  |
| ----------------------------------- | -------------------------------------------- |
| `Color Utils: Convert color format` | Convert selected color(s) to a chosen format |
| `Color Utils: Clear diagnostics`    | Clear all conversion error messages          |

## License

MIT
