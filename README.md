# View Layers Toggle Widget - Experience Builder

Example Experience Builder widget showing how to create a select dropdown that toggles the visible layers on the map.

[![Screenshot](https://github.com/gavinr/view-layers-toggle-experience-builder/raw/master/view-layers-toggle.gif)](https://gavinr.github.io/view-layers-toggle-experience-builder/)

[Demo](https://gavinr.github.io/view-layers-toggle-experience-builder/)

([Settings UI](https://github.com/gavinr/view-layers-toggle-experience-builder/blob/master/settings-ui-screenshot.png))

## Quick Start - Download

1. [Download](https://developers.arcgis.com/downloads/apis-and-sdks?product=arcgis-experience-builder) and unzip [Experience Builder Developer Edition](https://developers.arcgis.com/experience-builder/).
2. Download the latest [release](https://github.com/gavinr/view-layers-toggle-experience-builder/releases) from this repository.
3. Unzip the downloaded files, and copy the `view-layers-toggle` folder into the `client\your-extensions\widgets\view-layers-toggle` folder of the extracted Experience Builder files.

## Quick Start - Git

1. [Download](https://developers.arcgis.com/downloads/apis-and-sdks?product=arcgis-experience-builder) and unzip [Experience Builder Developer Edition](https://developers.arcgis.com/experience-builder/).
2. Open a new terminal window and browse to the `client` folder.
3. `git clone https://github.com/gavinr/view-layers-toggle-experience-builder`
4. `npm ci`
5. `npm start`
6. Start Experience Builder server per the instructions (in a separate terminal, `cd server`, `npm ci`, `npm start`)

## Development

1. Open the `client` folder as a project in VS Code (or similar code editor).
1. Make sure *both* scripts are running (in the `server` folder and `client`) folder).
1. Every time you make a change to your widget, it will be re-built with webpack automatically.

## More

View my other Experience Builder projects [here](https://github.com/gavinr?tab=repositories&q=experience-builder)
