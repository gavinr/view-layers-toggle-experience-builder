/** @jsx jsx */
import { AllWidgetProps, BaseWidget, jsx } from "jimu-core";
import { IMConfig } from "../config";

import defaultMessages from "./translations/default";

export default class ViewLayersToggle extends BaseWidget<
  AllWidgetProps<IMConfig>,
  any
> {
  constructor(props) {
    super(props);
  }

  selectChangeHandler = (evt) => {
    console.log("selectChangeHandler", evt.target.value);
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
          >
            <option value=""></option>
            {this.props.config.layerUrls.map((url) => {
              return <option value={url}>{url}</option>;
            })}
          </select>
        </p>
      </div>
    );
  }
}
