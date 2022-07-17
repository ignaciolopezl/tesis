
function saveDocument() {
    TXTextControl.saveDocument(TXTextControl.StreamType.HTMLFormat,
        function (e) {
            console.log(e.data);
        });

}

function loadDocument() {
    TXTextControl.loadDocument(TXTextControl.StreamType.HTMLFormat,
        btoa(`<p lang="en-US" style="text-indent:0pt;margin-top:0pt;margin-bottom:0pt;font-size:10pt;">dasdasd </p>
        <p lang="en-US" style="text-indent:0pt;margin-top:0pt;margin-bottom:0pt;font-size:10pt;"> </p>
        <p lang="en-US" style="text-indent:0pt;margin-top:0pt;margin-bottom:0pt;font-size:10pt;">asdasdasd</p>
        <p lang="en-US" style="text-indent:0pt;margin-top:0pt;margin-bottom:0pt;font-size:10pt;"> </p>
        <p lang="en-US" style="text-indent:0pt;margin-top:0pt;margin-bottom:0pt;font-size:10pt;">asdasd</p>`));
}