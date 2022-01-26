import template from "lodash/template";

const outputElement = document.getElementById("app");
if (outputElement) {
    const compiled = template(`
        <h1><%- heading %></h1>
        Current date and time: <%- dateTimeString %>
    `.trim());

    outputElement.innerHTML = compiled({
        heading: "2LOGO",
        dateTimeString: new Date().toISOString(),
  });
}

