import * as React from "react";
import { View, Text } from "react-native";
import { inject, observer } from "mobx-react";

import { TestStore } from "../stores";
import { WithNamespaces, withNamespaces } from "react-i18next";

interface TestComponentProps {
  onPressChangeProfile?(): void;
}

type ComboProps = TestComponentProps &
  WithNamespaces & { testStore?: TestStore };
class TestComponent extends React.Component<ComboProps> {
  constructor(props: ComboProps) {
    super(props);
  }

  showAlert = () => {
    alert("Testing something");
  };

  render() {
    const { testStore } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Text>{`Is Landscape: ${testStore!.isLandscapeOrientation}`}</Text>
      </View>
    );
  }
}

// export default inject("testStore")(observer(TestComponent));
export default withNamespaces(["test"], { wait: true })(
  inject("testStore")(observer(TestComponent))
);
