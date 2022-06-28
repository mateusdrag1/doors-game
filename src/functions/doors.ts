import DoorModel from '../model/door';

export function createDoors(quantity: number, giftNumber: number): DoorModel[] {
  return Array.from({ length: quantity }, (_, i) => {
    const number = i + 1;
    const hasGift = number === giftNumber;
    return new DoorModel(number, hasGift);
  });
}

export function updateDoors(
  doors: DoorModel[],
  doorChanged: DoorModel
): DoorModel[] {
  return doors.map(door => {
    if (door.number === doorChanged.number) {
      return doorChanged;
    }
    return doorChanged.isOpen ? door : door.unselect();
  });
}
