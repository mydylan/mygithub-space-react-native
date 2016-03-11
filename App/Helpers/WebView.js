var React = require('react-native');

var {
  View,
  WebView,
  StyleSheet
} = React

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
});

class Web_View extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <WebView source={this.props.url} />
      </View>
    )
  }
};

WebView.propTypes = {
  source: React.PropTypes.string.isRequired
};

module.exports = Web_View;