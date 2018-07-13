import { observable, action, computed } from "mobx-angular";
import { Injectable } from "@angular/core";
import { Birthday } from "../models/birthday";
import { UUID } from "angular2-uuid";

@Injectable()
export class BirthdaydayStore {
  @observable birthdays: Birthday[] = [];

  @action
  addBirthday(birthday: Birthday) {
    birthday.id = UUID.UUID();
    this.birthdays.push(birthday);
  }

  @action
  deleteBirthday(birthday: Birthday) {
    let index = this.birthdays.findIndex(b => b.id == birthday.id);
    this.birthdays.splice(index, 1);
  }

  @action
  updateBirthday(birthday: Birthday) {
    let index = this.birthdays.findIndex(b => b.id == birthday.id);
    this.birthdays[index] = birthday;
  }

  @action
  updateBirthday(birthday: Birthday) {
    let index = this.birthdays.findIndex(b => b.id == birthday.id);
    this.birthdays[index] = birthday;
  }
}
