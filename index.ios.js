var React = require('react-native');
var Main = require('./App/Components/Main');

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111'
  }
})

class mygithub extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'MyGithub Space',
          component: Main
        }}
      />
    );
  }
};

AppRegistry.registerComponent('mygithub', () => mygithub);
