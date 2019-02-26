import { decorate, observable, action } from "mobx";
import { Dimensions } from "react-native";

class TestStore {
  isLandscapeOrientation: boolean = false;
  windowHeight?: number = 0;
  windowWidth?: number = 0;

  constructor() {
    this.setIsLandscapeOrientation();
  }

  setIsLandscapeOrientation = () => {
    const { height, width } = Dimensions.get("window");
    this.setWindowDimensions(height, width);
    this.isLandscapeOrientation = width > height ? true : false;
  };

  setWindowDimensions = (height: number, width: number) => {
    this.windowHeight = height;
    this.windowWidth = width;
  };
}

decorate(TestStore, {
  isLandscapeOrientation: observable,
  windowHeight: observable,
  windowWidth: observable,
  setIsLandscapeOrientation: action,
  setWindowDimensions: action
});

export default TestStore;
