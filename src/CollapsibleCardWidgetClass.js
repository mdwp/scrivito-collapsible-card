import * as Scrivito from "scrivito";

const CollapsibleCardWidget = Scrivito.provideWidgetClass("CollapsibleCardWidget", {
  attributes: {
    icon: "reference",
    headline: "string",
    teaser: "html",
    body: "widgetlist",
  },
});

export default CollapsibleCardWidget;