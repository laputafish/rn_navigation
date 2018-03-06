import React, {Component} from 'react';

class ScreenBase extends Component {
  static navigatorStyle = {
    navBarButtonColor: "orange"
  }
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    switch(event.type) {
      case "NavBarButtonPress":
        switch(event.id) {
          case "sideDrawerToggle":
            this.props.navigator.toggleDrawer({
              side: "left",
              animated: true
            })
            break;
        }
    }
  }
}

export default ScreenBase;
