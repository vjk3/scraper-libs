export function parseHTML(str) {
    let parser = new DOMParser(),
        doc = parser.parseFromString(str, "text/html"),
        $doc = doc.documentElement;
    
    return $doc
}
