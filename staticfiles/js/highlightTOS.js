document.addEventListener("DOMContentLoaded", function testDom() {
console.log("hello")
  // get the fullText of the TOS
  const fullTextParagraphs = document.getElementById("fullText").children;

  // get all found elements from TOS
  const elementsInTOS =
    document.getElementById("elementsInTOS").childNodes[1].children;
  let elementsInTOSContents = [];

  // fetch found element text and color
  for (let i = 1; i < elementsInTOS.length; i++) {
    const text = elementsInTOS[i].children[2].textContent.split("\n");
    const className = elementsInTOS[i].children[1].className;
    text.forEach((line) => {
      if (line) {
        elementsInTOSContents.push({
          text: line,
          color: className.split("-")[1],
        });
      }
    });
  }

  let result = document.createElement("div");

  for (let i = 0; i < fullTextParagraphs.length; i++) {
    const paragraph = fullTextParagraphs[i].textContent;
    let elementsToHighlight = [];
    let tempList = [];

    // get all found elements in this paragraph
    for (let j = 0; j < elementsInTOSContents.length; j++) {
      const element = elementsInTOSContents[j];
      if (paragraph.includes(element.text)) tempList.push(element);
    }
    if (tempList.length > 0) elementsToHighlight.push(tempList);

    // create a new Paragraph DOM element to add highlights
    let newParagraph = document.createElement("p");
    if (elementsToHighlight.length > 0) {
      // if element to highlight exists in the paragraph
      elementsToHighlight.forEach((elementToHighlightObject) => {
        let partsOfText = [];
        if (elementToHighlightObject.length > 1) {
          // if element to highlight are more than one in a paragraph
          let tempParagraph = paragraph;
          // separate highlight text from normal text
          elementToHighlightObject.forEach((elementObject) => {
            tempParagraph = tempParagraph.split(elementObject.text);
            tempParagraph.splice(1, 0, elementObject.text);
            tempParagraph = tempParagraph.join("1!2@3#4$");
          });
          partsOfText = tempParagraph.split("1!2@3#4$");

          partsOfText.forEach((lineInParagraph) => {
            let flag = undefined;
            elementToHighlightObject.forEach((highlightText) => {
              if (lineInParagraph == highlightText.text) flag = highlightText;
            });

            if (flag) {
              let highlightedTextSpan = document.createElement("span");
              highlightedTextSpan.classList.add(
                `bg-${flag.color}`,
                "bg-opacity-25"
              );
              highlightedTextSpan.appendChild(
                document.createTextNode(flag.text)
              );
              newParagraph.appendChild(highlightedTextSpan);
            } else {
              newParagraph.appendChild(
                document.createTextNode(lineInParagraph)
              );
            }
          });
        } else if (elementToHighlightObject.length == 1) {
          // if elements to highlight in a paragraph are more than one
          partsOfText = paragraph.split(elementToHighlightObject[0].text);
          partsOfText.splice(1, 0, elementToHighlightObject[0].text);
          newParagraph.appendChild(document.createTextNode(partsOfText[0]));
          let highlightedTextSpan = document.createElement("span");
          highlightedTextSpan.classList.add(
            `bg-${elementToHighlightObject[0].color}`,
            "bg-opacity-25"
          );
          highlightedTextSpan.appendChild(
            document.createTextNode(partsOfText[1])
          );
          newParagraph.appendChild(highlightedTextSpan);
          newParagraph.appendChild(document.createTextNode(partsOfText[2]));
        } else {
          // some adverse conditions
          console.log("ERROR!");
        }
      });
    } else {
      // if element to highlight does exists in the paragraph
      newParagraph.appendChild(document.createTextNode(paragraph));
    }

    // append new paragraph to virtual DOM div
    result.appendChild(newParagraph);
  }

  // replace old text with new text
  document.getElementById("fullText").innerHTML = "";
  document.getElementById("fullText").appendChild(result);
});
