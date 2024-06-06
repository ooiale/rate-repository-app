import Main from './src/componets/main';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';

const App = () => {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  )
}

export default App