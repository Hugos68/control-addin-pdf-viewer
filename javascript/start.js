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

// Grab factbox (if it exists)
const factbox = window.frameElement.closest(
  ".ms-nav-layout-factbox-pane-container"
);

// Patch factbox height if it's present and the control add-in is inside the factbox
if (factbox && factbox.contains(window.frameElement)) {
  window.frameElement.closest(
    ".ms-nav-layout-aside-right.ms-nav-layout-expanded"
  ).style.flexBasis = "50%";

  factbox.querySelector(".ms-nav-layout-factbox-content-area").style.height =
    "100%";
  factbox.querySelector(
    ".ms-nav-layout-factbox-content-area"
  ).style.paddingInline = "0px";
  factbox.querySelector(
    ".ms-nav-layout-factbox-details-pane"
  ).style.height = `calc(100% - ${
    factbox.querySelector(".ms-nav-band-header").offsetHeight
  }px)`;
  factbox.querySelector(".ms-nav-cardfactbox").style.height = "100%";
  factbox.querySelector(".ms-nav-band-container").style.height = "100%";
  factbox.querySelector(".ms-nav-cardpartform").style.height = "100%";
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
