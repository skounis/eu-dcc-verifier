# Ionic EU-DCC Verifier
[![Issues](https://img.shields.io/github/issues/skounis/eu-dcc-verifier?style=for-the-badge)](https://github.com/skounis/eu-dcc-verifier/issues) [![License](https://img.shields.io/github/license/skounis/eu-dcc-verifier?style=for-the-badge)](https://github.com/skounis/eu-dcc-verifier#licensing) [![Live Demo](https://img.shields.io/badge/Live-Demo-green?style=for-the-badge)](https://eu-dcc-verifier.web.app/)

A scanner and verifier app for the [EU Digital Covid Certificates](https://github.com/ehn-dcc-development/hcert-spec). 

The application:

1. Uses the [eu-dcc-lib](https://www.npmjs.com/package/eu-dcc-lib) JavaScript library.
1. Scans and decodes an EU-DCC QR Code.
2. Displays the JSON represenation and the payload. 
3. Validates the digital signature of the certificate.

### Trust list
For validation the singature the application uses the production DCSs trustling published by Germany:

* https://de.dscg.ubirch.com/trustList/DSC/

## Dependecies, Run and Build

### Install local dependencies
To install the local dependencies run:

```bash
$ npm install
```

### Run the app
Use `ionic serve` to run the app in the browser

### Build and Release
1. Edit `src/environments/environment.ts` and/or `src/environments/environment.prod.ts` and change `version`.
2. Run `ionic build`
2. Run `npx cap add android`
3. Run `npx cap sync`
4. Edit `android/app/src/main/AndroidManifest.xml` and add:
```
<uses-permission android:name="android.permission.CAMERA"/>
```
5. Edit `android/app/build.grandle` and set the version. E.g.:
```
versionName "1.0.0"
```
6. Run `npx cap open android` to open the app in Android Studio.
7. In Android Studio: Build -> Build Bundle(s)/APK(s) -> Build APK(s)

Source:
- https://capacitorjs.com/docs/android/deploying-to-google-play

## Demo
* [Deployed app](https://eu-dcc.web.app/home)

## Testing 
Integration test are in place with Cypress. [Read more on how to setup and run Cypress tests](https://github.com/skounis/eu-dcc-validation/wiki/E2E-Tests---Setup-and-Run).

# Licensing
Copyright (c) 2022 Stavros Kounis (Directorate-General CONNECT) and all other contributors

Licensed under the EUROPEAN UNION PUBLIC LICENCE v. 1.2 (the "License"); you may not use this file except in compliance with the [License](./LICENSE.txt).

You may obtain a copy of the License at https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the LICENSE for the specific language governing permissions and limitations under the License.


