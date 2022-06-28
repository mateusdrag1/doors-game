export default class DoorModel {
  #number: number;
  #isOpen: boolean;
  #isSelected: boolean;
  #hasGift: boolean;

  constructor(
    number: number,
    hasGift = false,
    isSelected = false,
    isOpen = false
  ) {
    this.#number = number;
    this.#hasGift = hasGift;
    this.#isSelected = isSelected;
    this.#isOpen = isOpen;
  }

  get number() {
    return this.#number;
  }

  get hasGift() {
    return this.#hasGift;
  }

  get isSelected() {
    return this.#isSelected;
  }

  get isOpen() {
    return this.#isOpen;
  }

  toggleSelected() {
    const selected = !this.isSelected;
    return new DoorModel(this.number, this.hasGift, selected, this.isOpen);
  }

  unselect() {
    const selected = false;
    return new DoorModel(this.number, this.hasGift, selected, this.isOpen);
  }

  open() {
    const open = !this.isOpen;
    return new DoorModel(this.number, this.hasGift, this.isSelected, open);
  }
}
