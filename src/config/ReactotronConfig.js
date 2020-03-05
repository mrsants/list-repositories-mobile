import ReactoTron from 'reactotron-react-native';

if (__DEV__) {
  const tron = ReactoTron.configure({ host: '192.168.0.27' })
    .useReactNative()
    .connect();
  console.tron = tron;
  tron.clear();
}
