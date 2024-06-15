# React Native Project

This was my very first project using React Native. 

## Key Differences from React Web Development

The most noticeable difference from developing a plain React web app were the unexpected bugs due to using different libraries or syntax. It required writing proper syntax that the mobile build could properly understand.

## Major Challenges

### Dealing with `<FlatList>`
The biggest issue was dealing with the `<FlatList>` component. The header component prop for it was not working as expected, so in the end, I removed the component from the `<FlatList>` prop field and placed it outside of it. Not really what I wanted but worked just as fine.

## Optional Note on Deployment

Deploying the application is entirely optional and it isn't quite trivial. You also need to fork and deploy the `rate-repository-api`. For the React Native application itself, you first need to create either iOS or Android builds by following [Expo's documentation](https://docs.expo.dev/). Then you can upload these builds to either the Apple App Store or Google Play Store. Expo has [documentation for this as well](https://docs.expo.dev/distribution/uploading-apps/).

---

Thank you for checking out my project!
