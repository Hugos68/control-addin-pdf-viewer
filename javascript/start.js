// Get the root document
const rootDocument = window.parent.document;

// Patch control add-in height
window.frameElement.parentElement.style.display = "flex";
window.frameElement.parentElement.style.flexDirection = "column";
window.frameElement.parentElement.style.flexGrow = "1";
window.frameElement.parentElement.style.height = "100%";
window.frameElement.style.removeProperty("height");
window.frameElement.style.removeProperty("min-height");
window.frameElement.style.removeProperty("max-height");
window.frameElement.style.flexGrow = "1";
window.frameElement.style.flexShrink = "1";
window.frameElement.style.flexBasis = "auto";
window.frameElement.style.paddingBottom = "42px";

// Create unique ID for this control add-in instance
const id = Math.random().toString(36).substring(2);
window.frameElement.setAttribute("data-id", id);

// Factbox elements
const factbox = rootDocument.querySelector(
  `.ms-nav-layout-aside-right:has(iframe[data-id="${id}"])`
);
const factboxContentArea = rootDocument.querySelector(
  `.ms-nav-layout-factbox-content-area:has(iframe[data-id="${id}"])`
);
const factboxDetailsPane = rootDocument.querySelector(
  `.ms-nav-layout-factbox-details-pane:has(iframe[data-id="${id}"])`
);
const fatboxCard = rootDocument.querySelector(
  `.ms-nav-cardfactbox:has(iframe[data-id="${id}"])`
);
const fatboxContainer = rootDocument.querySelector(
  `.ms-nav-band-container:has(iframe[data-id="${id}"])`
);
const fatboxCardPartForm = rootDocument.querySelector(
  `.ms-nav-cardpartform:has(iframe[data-id="${id}"])`
);

// Patch factbox height if we're inside the factbox
if (factbox) {
  factboxContentArea.style.height = "100%";
  factboxContentArea.style.paddingInline = "0px";
  factboxDetailsPane.style.height = "calc(100% - 46px)"; // Take into account the factbox header height (.ms-nav-band-header)
  fatboxCard.style.height = "100%";
  fatboxContainer.style.height = "100%";
  fatboxCardPartForm.style.height = "100%";
}

// Grab root
const controlAddIn = document.querySelector("#controlAddIn");

// Create object
const object = document.createElement("object");

// Apply styles
object.style.height = "100%";
object.style.width = "100%";
object.type = "application/pdf";

// Add to root
controlAddIn.appendChild(object);

/**
 * Loads a document from the given data.
 *
 * @param {string} data - The data of the document to load.
 */
function loadDocument(data) {
  object.data = data;
}

/**
 * The the factbox panel width
 *
 * @param {number} percentage
 */
function setFactBoxPanelWidthPercentage(percentage) {
  if (factbox) {
    window.frameElement.closest(
      ".ms-nav-layout-aside-right"
    ).style.flexBasis = `${percentage}%`;
  }
}

// Expose methods to the control add-in
Object.assign(globalThis, {
  LoadDocument: loadDocument,
  SetFactBoxPanelWidthPercentage: setFactBoxPanelWidthPercentage,
});

// Notify that the control add-in is ready
Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("ready");
