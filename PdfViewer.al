controladdin PdfViewer
{
    StartupScript = 'js/start.js';
    StyleSheets = 'css/reset.css';
    HorizontalStretch = true;
    HorizontalShrink = true;
    event OnReady();
    procedure LoadDocument(url: Text);
    procedure SetFactBoxPanelWidthPercentage(percentage: Integer);
}