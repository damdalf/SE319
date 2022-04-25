# QuestLife

## QUICK LINKS
[A Helpful React Native Tutorial](https://www.youtube.com/watch?v=0-S5a0eXPoc)

[React Native Core Components and APIs](https://reactnative.dev/docs/components-and-apis)

## INITIALLY SETTING UP THE ENVIRONMENT
Initially, all dependencies must be properly installed. Ensure you have Node.js installed on your device. Then, run the following commands.

```
npm install
# only on initial install
npm install --global expo-cli
```

To begin emulating the application, ensure that you have an emulator (one for iOS is already installed on your device if you are working on a macOS device), otherwise you will need to download Android Studio and create a virtual device. One you have created a virtual device, you will need to follow the steps contained in this [article](https://docs.expo.dev/workflow/android-studio-emulator/).

Once you have the steps outlined above, ensure that you have your virtual device open before trying to run the code in your emulator. Begin coding!

## WORKING AFTER A PULL
To begin working after pulling from the repository, use the following commands.
```
npm install
expo start
```

Additionally, when implementing a new user story, please create a new branch to work on.
* To create a new branch:
```git branch storyName```
* To go to this branch:
```git checkout storyName```
* Or, to do all of this in a single command:
```git checkout -b storyName```

## DON'T WANT TO MESS WITH AN EMULATOR?
If you don't want to deal with an emulator or its slowing down your device, simply download 'Expo Client' onto your mobile device and scan the QR code generated upon running 'expo start'. From here, you should be redirected to the app inside of Expo Client!

## Troubleshooting

If you get an SSL error when starting expo, run with the environment variable `NODE_OPTIONS=--openssl-legacy-provider`.

