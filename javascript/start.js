// Patch controlAddIn height
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

const factboxSelector = ".ms-nav-layout-factbox-pane-container";
const insideFactbox = window.frameElement.closest(factboxSelector) !== null;

if (insideFactbox) {
  const contentArea = window.frameElement.closest(
    ".ms-nav-layout-factbox-content-area"
  );
  contentArea.style.height = "100%";

  const detailsPane = window.frameElement.closest(
    ".ms-nav-layout-factbox-details-pane"
  );

  const header = window.frameElement
    .closest(factboxSelector)
    .querySelector(".ms-nav-band-header");

  detailsPane.style.height = `calc(100% - ${header.offsetHeight}px)`;

  window.frameElement.closest(".ms-nav-cardfactbox").style.height = "100%";
  window.frameElement.closest(".ms-nav-band-container").style.height = "100%";
  window.frameElement.closest(".ms-nav-cardpartform").style.height = "100%";
}

// Grab root
const root = document.querySelector("#controlAddIn");

// Create iframe
const object = document.createElement("object");

// Apply styles
object.style.height = "100%";
object.style.width = "100%";
object.type = "application/pdf";

// Add to root
root.appendChild(object);

/**
 * Loads a document from the given data.
 *
 * @param {string} data - The data of the document to load.
 */
function loadDocument(data) {
  object.data = data;
}

// Expose methods to the control add-in
Object.assign(globalThis, {
  LoadDocument: loadDocument,
});

// Notify that the control add-in is ready
Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("ready");
