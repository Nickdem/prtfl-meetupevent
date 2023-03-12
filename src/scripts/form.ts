import { IFormObj } from "./interfaces";

export class Form {
  private formContainer: HTMLFormElement;
  private formValues: IFormObj = {};
  private errorCls = "form-field--error";
  private successCls = "form-field--success";

  constructor(formContainer: HTMLFormElement) {
    this.formContainer = formContainer;
  }

  private validate(value: string, type: string) {
    const regExName = /[^a-zA-Zа-яёА-ЯЁ ]/g;
    const regExEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const regExPhone = /^\+?(\d){6,12}$/g;

    if (value === "") {
      return false;
    } else if (type === "name" && regExName.test(value)) {
      return false;
    } else if (type == "email" && !regExEmail.test(value)) {
      return false;
    } else if (type == "phone" && !regExPhone.test(value)) {
      return false;
    }

    return true;
  }

  private changeHandler(e: InputEvent, id: string) {
    const inputEl = <HTMLInputElement>e.target;
    const value = inputEl.value.trim();

    this.formValues[id] = value;
    if (!this.validate(value, id)) {
      inputEl.classList.remove(this.successCls);
      inputEl.classList.add(this.errorCls);
    } else {
      inputEl.classList.remove(this.errorCls);
      inputEl.classList.add(this.successCls);
    }
  }

  private reset() {
    const keys = Object.keys(this.formValues);

    for (const key of keys) {
      const inputEl = document.getElementById(key);
      (<HTMLInputElement>inputEl).value = "";
    }
  }

  private submitHandler(e: SubmitEvent) {
    e.preventDefault();
    const keys = Object.keys(this.formValues);

    for (const key of keys) {
      const inputEl = document.getElementById(key);
      if (
        inputEl.classList.length === 1 ||
        inputEl.className.includes("error")
      ) {
        return;
      }
    }

    console.log(this.formValues);

    this.reset();
  }

  init() {
    const fieldset = this.formContainer.querySelector("fieldset");
    for (const i of fieldset.children) {
      if (i.id) {
        const elId = i.id;
        this.formValues[elId] = "";
        i.addEventListener("input", (e: InputEvent) => {
          this.changeHandler(e, elId);
        });
      }
    }

    this.formContainer.addEventListener("submit", (e) => {
      this.submitHandler(e);
    });
  }
}
