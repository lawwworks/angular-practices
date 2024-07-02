import { Component } from '@angular/core';

@Component({
  selector: 'monster-lessons',
  templateUrl: './monster-lessons.component.html',
  styleUrls: ['./monster-lessons.component.css'],
})
export class MonsterLessonsComponent {
  newItem: string = '';

  items = [
    { id: '1', itemName: 'Phone', price: 100 },
    { id: '2', itemName: 'Monitor', price: 200 },
    { id: '3', itemName: 'Pencil', price: 400 },
    { id: '4', itemName: 'Mouse', price: 800 },
    { id: '5', itemName: 'Keyboard', price: 1000 },
  ];

  removeItem(id: string): void {
    this.items = this.items.filter((items) => items.id !== id);
  }

  setNewItem(item: string): void {
    this.newItem = item;
  }

  addItem(): void {
    const uniqueId = Math.random().toString(20);
    const newItem = {
      id: uniqueId,
      itemName: this.newItem,
      price: 20,
    };
    this.items.push(newItem);
    this.newItem = '';
  }
}
