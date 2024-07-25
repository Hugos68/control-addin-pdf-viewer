controladdin PdfViewer
{
    StartupScript = 'javascript/start.js';
    StyleSheets = 'css/reset.css';
    HorizontalStretch = true;
    HorizontalShrink = true;
    event Ready();
    procedure LoadDocument(url: Text);
}