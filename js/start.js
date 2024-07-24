// Patch fixed iFrame height
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

// Grab root
const root = document.querySelector("#controlAddIn");

// Create iframe
const iframe = document.createElement("iframe");

// Apply styles
iframe.style.height = "100%";
iframe.style.width = "100%";

// Apply attributes
iframe.title = "PDF Viewer";

// Add to root
root.appendChild(iframe);

/**
 * Loads a document from the given URL.
 *
 * @param {string} url - The URL of the document to load.
 */
window.LoadDocument = (url) => {
  iframe.src = url;
};

// Notify that the control add-in is ready
Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("ready");
