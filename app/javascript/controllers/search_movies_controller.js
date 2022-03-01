import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["list", "form", "input"]

  connect() {
    console.log("Hey I am connected to the search movies controller! 🎉");
    console.log(this);
    console.log(this.listTarget);
    console.log(this.formTarget);
    console.log(this.inputTarget);
  }

  update() {
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    fetch(url, {headers: { "Accept": "text/plain"}})
      .then(response => response.text())
      .then((data) => {
        this.listTarget.outerHTML = data;
      })
  }
}
