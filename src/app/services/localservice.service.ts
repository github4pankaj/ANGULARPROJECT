import { Injectable } from '@angular/core';

@Injectable()
export class LocalserviceService {
  sweets = ["Rasgulla", "gulabjamun", "jalebi"]
  constructor() { }
  getLocalSweets() {
    return "There is local Sweets"
  }
}
