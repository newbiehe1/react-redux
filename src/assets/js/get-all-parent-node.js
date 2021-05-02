export function getAllParentNode(node) {
    const _toString = Object.prototype.toString;
    if (!/Element/g.test(_toString.call(node))) {
        console.error("typeof arguments not is HTMLElement");
        return null;
    }
    const nodes = [];
    do {
        nodes.push(node);
        node = node.parentNode;
    } while (node && node.tagName !== "BODY");
    return nodes;
}
