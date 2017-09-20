"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
class App extends React.Component {
    render() {
        return (<react_native_1.View style={styles.container}>
        <react_native_1.Text>Open up App.js to start working on your app!</react_native_1.Text>
        <react_native_1.Text>Changes you make will automatically reload.</react_native_1.Text>
        <react_native_1.Text>Shake your phone to open the developer menu.</react_native_1.Text>
      </react_native_1.View>);
    }
}
exports.default = App;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
//# sourceMappingURL=Root.js.map