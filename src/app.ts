import { Payment } from "./classes/Payment.js";
import { Invoice } from "./classes/Invoice.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("mario", "work on the mario website", 250);
// docTwo = new Invoice("luigi", "work on the luigi website", 300);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Payment("mario", "work on the mario website", 250);
// const invTwo = new Payment("luigi", "work on the luigi website", 300);

// const invoices: Payment[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach((inv) => {
//   console.log(inv.recipient, inv.amount, inv.format());
// });

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let docs: HasFormatter;
  if (type.value === "invoice") {
    docs = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    docs = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(docs, type.value, "end");
});
