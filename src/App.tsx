/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import { withNamespaces, WithNamespaces, I18nextProvider } from "react-i18next";

import stores from "./stores";
import TestComponent from "./components/TestComponent";
import i18n from "./lang/i18n";

configure({ enforceActions: "always" });

class i18nWrapped extends React.Component<WithNamespaces> {
  testComponentRef: TestComponent | undefined;

  onRefReady = (ref: TestComponent) => {
    this.testComponentRef = ref;
    // How do I call showAlert of TestComponent?
    // .wrappedInstance is undefined
  };

  render() {
    const { t } = this.props;
    return (
      <Provider screenProps={{ t }} {...stores} {...this.props}>
        <View style={styles.container}>
          <TestComponent ref={this.onRefReady} />
        </View>
      </Provider>
    );
  }
}

const ReloadAppOnLanguageChange = withNamespaces("i18n", {
  bindI18n: "languageChanged",
  bindStore: false
})(i18nWrapped);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <I18nextProvider i18n={i18n}>
        <ReloadAppOnLanguageChange />
      </I18nextProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
