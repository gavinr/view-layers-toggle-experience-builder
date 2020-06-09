/** @jsx jsx */
import { AllWidgetProps, BaseWidget, jsx } from "jimu-core";
import { IMConfig } from "../config";

// import { TabContent, TabPane, Nav, NavItem, NavLink, Button} from 'jimu-ui';
import defaultMessages from "./translations/default";

interface IState {
  selectValue: string;
}

export default class ViewLayersToggle extends BaseWidget<
  AllWidgetProps<IMConfig>,
  IState
> {
  constructor(props) {
    super(props);

    this.state = {
      selectValue:
        this.props.config.layerUrls && this.props.config.layerUrls.length > 0
          ? this.props.config.layerUrls[0]
          : "",
    };
  }

  selectChangeHandler = (evt) => {
    console.log("selectChangeHandler", evt);
    this.setState({
      selectValue: evt.target.value,
    });
  };

  render() {
    return (
      <div
        className="widget-view-layers-toggle jimu-widget"
        style={{ overflow: "auto" }}
      >
        <p className="shadow-lg m-3 p-3 bg-white rounded">
          {defaultMessages.layer}:
          <select
            onChange={this.selectChangeHandler}
            style={{ maxWidth: "100%" }}
            value={this.state.selectValue}
          >
            {this.props.config.layerUrls.map((url) => {
              return <option value={url}>{url}</option>;
            })}
          </select>
        </p>
      </div>
    );
  }
}
