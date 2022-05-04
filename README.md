# Ionic EU-DCC Verifier
A scanner and verifier app for the [EU Digital Covid Certificates](https://github.com/ehn-dcc-development/hcert-spec).

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


