import { HasFormatter } from "../interfaces/HasFormatter";

/* 

1. register a list contaienr in the constructor
2. create a render method to render a new li  to the container

        --accept arguments : invoice or payment
        --create the html template
        --add the li template to the start/end of the list
*/

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, pos: "start" | "end") {
    const li = document.createElement("li");

    const h4 = document.createElement("h4");
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = item.format();
    li.append(p);

    if (pos === "start") {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}
